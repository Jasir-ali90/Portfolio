import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050811, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 120;

    // Renderer with performance optimizations.
    // WebGL is progressive enhancement only: if the browser blocks WebGL or
    // context creation fails we bail out silently instead of throwing, which
    // would unmount the whole React tree and leave a blank page.
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false, // Performance boost - prevents lag
        powerPreference: 'high-performance'
      });
    } catch (err) {
      return; // No WebGL available -> keep the CSS-only background
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Capped pixel ratio prevents GPU overload
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. Star / Constellation Field (1200 glowing points)
    const particleCount = 900;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x22d3ee), // Cyan
      new THREE.Color(0x38bdf8), // Light Blue
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xa855f7)  // Purple
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 350;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    // 2. Floating Cyber Grid / Rings in Distance
    const ringGroup = new THREE.Group();
    const ringGeom = new THREE.TorusGeometry(45, 0.4, 8, 50);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });

    const ring1 = new THREE.Mesh(ringGeom, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(65, 0.3, 8, 60), ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringGroup.add(ring2);

    ringGroup.position.set(0, 0, -40);
    scene.add(ringGroup);

    // Mouse Parallax Interaction (Throttled & Smooth)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Visibility optimization: Pause animation loop when tab is hidden
    let isTabActive = true;
    const handleVisibility = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isTabActive) return; // Save CPU & battery

      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smooth camera interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX * 0.5;
      camera.position.y = -targetY * 0.5;
      camera.lookAt(scene.position);

      // Rotate particle cloud gently
      particleSystem.rotation.y = elapsedTime * 0.04;
      particleSystem.rotation.x = elapsedTime * 0.015;

      // Orbit background rings
      ring1.rotation.z = elapsedTime * 0.08;
      ring2.rotation.z = -elapsedTime * 0.06;

      try {
        renderer.render(scene, camera);
      } catch (err) {
        cancelAnimationFrame(animationFrameId); // Context lost -> stop the loop
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      pMaterial.dispose();
      ringGeom.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="three-canvas-container"
      aria-hidden="true"
    />
  );
}
