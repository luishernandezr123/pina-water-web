"use client";

import { useEffect, useRef } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  drift: number;
  color: string;
  startY: number;
}

export default function WaterParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Generate particles once
    if (particlesRef.current.length === 0) {
      const colors = [
        "rgba(0,180,216,0.12)",
        "rgba(0,180,216,0.08)",
        "rgba(30,110,240,0.10)",
        "rgba(30,110,240,0.06)",
      ];
      const particles: Particle[] = [];
      for (let i = 0; i < 25; i++) {
        particles.push({
          id: i,
          size: Math.random() * 8 + 4,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          duration: Math.random() * 6 + 6,
          drift: (Math.random() - 0.5) * 60,
          color: colors[Math.floor(Math.random() * colors.length)],
          startY: Math.random() * 100 + 100,
        });
      }
      particlesRef.current = particles;
    }

    const loadGSAP = async () => {
      try {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;

        particlesRef.current.forEach((p) => {
          const el = document.getElementById(`wp-${p.id}`);
          if (!el) return;

          gsap.fromTo(
            el,
            {
              y: p.startY,
              x: 0,
              opacity: 0,
            },
            {
              y: -window.innerHeight * 0.5,
              x: p.drift,
              opacity: 1,
              duration: p.duration,
              delay: p.delay,
              ease: "none",
              repeat: -1,
              repeatDelay: 0,
              onRepeat: () => {
                gsap.set(el, { y: p.startY, x: 0, opacity: 0 });
                gsap.to(el, {
                  y: -window.innerHeight * 0.5,
                  x: p.drift,
                  opacity: 0.8,
                  duration: p.duration,
                  ease: "none",
                });
              },
              onComplete: () => {
                gsap.set(el, { y: p.startY, x: 0, opacity: 0 });
                gsap.to(el, {
                  y: -window.innerHeight * 0.5,
                  x: p.drift,
                  opacity: 0.8,
                  duration: p.duration,
                  ease: "none",
                  repeat: -1,
                });
              },
            }
          );
        });
      } catch (e) {
        // GSAP not available — graceful degradation
      }
    };

    loadGSAP();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {particlesRef.current.map((p) => (
        <div
          key={p.id}
          id={`wp-${p.id}`}
          className="water-particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.startY}%`,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
}
