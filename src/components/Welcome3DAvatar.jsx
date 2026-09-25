import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Welcome3DAvatar({ onChatOpen }) {
  const mountRef = useRef(null);
  const [minimized, setMinimized] = useState(false);

  // Auto-collapse the welcome bubble after a few seconds so the floating
  // assistant never covers hero text or other page content.
  useEffect(() => {
    const timer = setTimeout(() => setMinimized(true), 9000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.set(0, 0.35, 3.8);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch (err) {
      return; // WebGL unavailable -> skip the 3D bot, never crash the page
    }
    renderer.setSize(110, 110);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 2.1));
    const p1 = new THREE.PointLight(0x22d3ee, 3, 20);
    p1.position.set(3, 3, 4);
    scene.add(p1);

    // Purple rim light keeps the bot readable against the dark page
    const p2 = new THREE.PointLight(0xa855f7, 2.4, 20);
    p2.position.set(-3, -2, 3);
    scene.add(p2);

    const bot = new THREE.Group();

    // Head & Visor
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.72, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.45, metalness: 0.15 })
    );
    bot.add(head);

    const visor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.4, 16, 1, false, -Math.PI / 2, Math.PI),
      new THREE.MeshPhysicalMaterial({ color: 0x020617, roughness: 0.1, transparent: true, opacity: 0.95 })
    );
    visor.rotation.y = Math.PI / 2;
    visor.position.set(0, 0.05, 0.38);
    bot.add(visor);

    // Eyes
    const eyeGeom = new THREE.CapsuleGeometry(0.065, 0.14, 4, 8);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const leftEye = new THREE.Mesh(eyeGeom, eyeMat);
    leftEye.rotation.z = Math.PI / 2;
    leftEye.position.set(-0.24, 0.08, 0.72);
    bot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeom, eyeMat);
    rightEye.rotation.z = Math.PI / 2;
    rightEye.position.set(0.24, 0.08, 0.72);
    bot.add(rightEye);

    // Antenna
    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.35, 8),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.1 })
    );
    stem.position.set(0, 0.85, 0);
    bot.add(stem);

    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    ball.position.set(0, 1.05, 0);
    bot.add(ball);

    // Waving Hand
    const handPivot = new THREE.Group();
    handPivot.position.set(0.85, -0.15, 0);
    const arm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.1 })
    );
    arm.position.y = 0.22;
    handPivot.add(arm);
    const palm = new THREE.Mesh(
      new THREE.SphereGeometry(0.14, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0x22d3ee, roughness: 0.3 })
    );
    palm.position.y = 0.45;
    handPivot.add(palm);
    bot.add(handPivot);

    // Halo
    const halo = new THREE.Mesh(
      new THREE.RingGeometry(1.05, 1.15, 16),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee, side: THREE.DoubleSide, transparent: true, opacity: 0.4 })
    );
    halo.rotation.x = Math.PI / 2.3;
    halo.position.y = -0.3;
    bot.add(halo);

    scene.add(bot);

    let targetRotY = 0;
    let targetRotX = 0;
    const onMove = (e) => {
      targetRotY = ((e.clientX / window.innerWidth) * 2 - 1) * 0.45;
      targetRotX = (-((e.clientY / window.innerHeight) * 2 - 1)) * 0.25;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let animId;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (document.hidden) return;
      const t = (performance.now() - startTime) / 1000;

      bot.position.y = Math.sin(t * 2.2) * 0.1;
      bot.rotation.y += (targetRotY - bot.rotation.y) * 0.08;
      bot.rotation.x += (targetRotX - bot.rotation.x) * 0.08;

      halo.rotation.z = t * 0.8;
      handPivot.rotation.z = 0.5 + Math.sin(t * 5.5) * 0.45;

      const pulse = 0.6 + Math.sin(t * 4) * 0.4;
      ball.scale.set(1 + pulse * 0.2, 1 + pulse * 0.2, 1 + pulse * 0.2);

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
    <aside className={`welcome-avatar-fixed ${minimized ? 'minimized' : ''}`}>
      {!minimized ? (
        <div className="avatar-speech-bubble">
          <div className="speech-badge">
            <span className="live-ai-indicator" /> 3D AI ASSISTANT
            <button 
              type="button" 
              className="speech-close-mini" 
              onClick={() => setMinimized(true)}
              aria-label="Minimize"
            >×</button>
          </div>
          <p className="speech-text">
            👋 <strong>Welcome!</strong> I'm Jasir's 3D AI Bot. Click below to hire him or explore 19+ verified projects!
          </p>
          <div className="avatar-quick-actions">
            <button type="button" className="avatar-action-btn primary" onClick={onChatOpen}>
              Hire Jasir 🚀
            </button>
            <a href="#projects" className="avatar-action-btn secondary">
              19+ Work ⚡
            </a>
          </div>
        </div>
      ) : (
        <button 
          type="button" 
          className="avatar-reopen-btn" 
          onClick={() => setMinimized(false)}
        >
          👋 3D Guide
        </button>
      )}

      <div 
        ref={mountRef} 
        className="avatar-3d-canvas-wrap" 
        onClick={() => setMinimized(!minimized)}
        title="Interactive 3D Bot. Click to toggle guide."
      />
    </aside>
  );
}
