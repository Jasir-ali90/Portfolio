import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCube() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 5.2;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch (err) {
      return; // WebGL unavailable -> skip the 3D visual, never crash the page
    }
    renderer.setSize(260, 260);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const pLight = new THREE.PointLight(0x22d3ee, 4, 30);
    pLight.position.set(4, 4, 5);
    scene.add(pLight);

    const pLight2 = new THREE.PointLight(0x8b5cf6, 3, 30);
    pLight2.position.set(-4, -3, 3);
    scene.add(pLight2);

    const group = new THREE.Group();

    // 1. Central Tech Core (Icosahedron)
    const coreGeom = new THREE.IcosahedronGeometry(1.05, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.4,
      metalness: 0.25,
      wireframe: false
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    group.add(core);

    // 2. Wireframe Cage
    const cageGeom = new THREE.IcosahedronGeometry(1.35, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const cage = new THREE.Mesh(cageGeom, cageMat);
    group.add(cage);

    // 3. Orbiting Rings
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.9, 0.04, 8, 48),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 })
    );
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.035, 8, 48),
      new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.5 })
    );
    ring2.rotation.y = Math.PI / 3;
    group.add(ring2);

    // 4. Orbiting Data Node Spheres
    const nodeGeom = new THREE.SphereGeometry(0.12, 10, 10);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const node1 = new THREE.Mesh(nodeGeom, nodeMat);
    const node2 = new THREE.Mesh(nodeGeom, new THREE.MeshBasicMaterial({ color: 0xa855f7 }));
    group.add(node1);
    group.add(node2);

    scene.add(group);

    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let animId;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (document.hidden) return;
      const t = (performance.now() - startTime) / 1000;

      // Smooth rotation with mouse influence
      group.rotation.y = t * 0.4 + mouseX * 0.4;
      group.rotation.x = t * 0.25 + mouseY * 0.3;

      cage.rotation.y = -t * 0.3;
      cage.rotation.z = t * 0.2;

      ring1.rotation.z = t * 0.6;
      ring2.rotation.z = -t * 0.5;

      // Orbit nodes
      node1.position.set(Math.cos(t * 1.5) * 1.9, Math.sin(t * 1.5) * 1.9, 0);
      node2.position.set(0, Math.cos(t * 1.2) * 2.2, Math.sin(t * 1.2) * 2.2);

      try {
        renderer.render(scene, camera);
      } catch (err) {
        cancelAnimationFrame(animId); // Context lost -> stop the loop
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      if (mount && renderer.domElement) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-3d-visual-wrap">
      <div className="hero-3d-glow-disc" />
      <div ref={mountRef} className="hero-3d-canvas" />
      <div className="hero-3d-badge">
        <span className="live-ai-indicator" /> MERN & AI CORE • INTERACTIVE 3D
      </div>
    </div>
  );
}
