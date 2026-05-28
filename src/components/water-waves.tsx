"use client";

import { useEffect, useRef } from "react";

interface WaterWavesProps {
  fillColor?: string;
  backgroundColor?: string;
  variant?: "gentle" | "pronounced" | "simple";
  flip?: boolean;
}

export default function WaterWaves({
  fillColor = "#00B4D8",
  backgroundColor = "#FFFFFF",
  variant = "gentle",
  flip = false,
}: WaterWavesProps) {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGSAP = async () => {
      try {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        if (waveRef.current) {
          const path = waveRef.current.querySelector("path");
          if (path) {
            gsap.to(path, {
              attr: { d: getMorphedPath(variant, flip) },
              duration: 1,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: waveRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            });
          }
        }
      } catch (e) {
        // GSAP not available — graceful degradation
      }
    };

    loadGSAP();
  }, [variant, flip]);

  const paths = {
    gentle: flip
      ? "M0,32 C320,64 640,0 1280,32 L1280,0 L0,0 Z"
      : "M0,0 C320,32 640,64 1280,0 L1280,32 L0,32 Z",
    pronounced: flip
      ? "M0,64 C240,128 480,16 720,80 C960,144 1120,32 1280,64 L1280,0 L0,0 Z"
      : "M0,0 C240,48 480,112 720,48 C960,-16 1120,96 1280,0 L1280,64 L0,64 Z",
    simple: flip
      ? "M0,24 C426,48 854,0 1280,24 L1280,0 L0,0 Z"
      : "M0,0 C426,24 854,48 1280,0 L1280,24 L0,24 Z",
  };

  function getMorphedPath(v: string, f: boolean): string {
    // Slightly different path for morphing animation
    if (v === "gentle") {
      return f
        ? "M0,24 C360,56 720,8 1280,24 L1280,0 L0,0 Z"
        : "M0,0 C360,24 720,56 1280,0 L1280,24 L0,24 Z";
    }
    if (v === "pronounced") {
      return f
        ? "M0,48 C220,104 490,24 730,72 C970,120 1100,40 1280,48 L1280,0 L0,0 Z"
        : "M0,0 C220,40 490,120 730,56 C970,-8 1100,88 1280,0 L1280,48 L0,48 Z";
    }
    return f
      ? "M0,16 C400,40 800,8 1280,16 L1280,0 L0,0 Z"
      : "M0,0 C400,16 800,40 1280,0 L1280,16 L0,16 Z";
  }

  return (
    <div
      ref={waveRef}
      className="wave-divider"
      style={{ backgroundColor }}
    >
      <svg
        viewBox="0 0 1280 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={paths[variant]}
          fill={fillColor}
          style={{ transition: "d 0.5s ease" }}
        />
      </svg>
    </div>
  );
}
