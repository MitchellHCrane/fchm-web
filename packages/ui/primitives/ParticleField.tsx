"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight, dependency-free replacement for the abandoned `particles-bg`
 * package (peers on React 16/17, incompatible with React 19) — a canvas
 * "cobweb" effect: drifting dots, connected by a line when two are close
 * together, matching the look of the original sites' particle background
 * (color="#2ca4f2" type="cobweb").
 */
const COLOR = "44, 164, 242"; // #2ca4f2 as an rgb triplet, for use in rgba()
const PARTICLE_COUNT = 60;
const MAX_LINK_DISTANCE = 140;
const SPEED = 0.15;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = container!.clientWidth;
      height = container!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.75, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${COLOR}, 0.55)`;
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_LINK_DISTANCE) {
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(${COLOR}, ${0.35 * (1 - dist / MAX_LINK_DISTANCE)})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    seed();

    if (reduceMotion) {
      step(); // draw one static frame, no animation loop
    } else {
      raf = requestAnimationFrame(step);
    }

    const ro = new ResizeObserver(() => {
      resize();
      seed();
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  // Sizing/positioning (absolute, inset:0) is handled by the .particleBg
  // wrapper in Profile.module.css — this just fills that box.
  return (
    <div aria-hidden style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
