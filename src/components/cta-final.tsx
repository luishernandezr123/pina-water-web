"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CtaFinal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".cta-final-content",
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      } catch (e) {
        // graceful
      }
    };

    loadGSAP();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative py-[--section] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(32,160,224,0.2) 0%, transparent 70%), #060E1D",
      }}
    >
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#20A0E0]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-[--container-px] text-center cta-final-content">
        <span className="eyebrow">COMENZAR AHORA</span>
        <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#F1F5F9] mb-4 text-balance">
          El agua de su hogar puede estar a un paso de ser impecable
        </h2>
        <p className="text-[#94A3B8] body-text text-base md:text-lg mx-auto mb-10 max-w-[55ch]">
          Solicite su cotización sin compromiso. Le explicamos qué sistema se
          ajusta a las necesidades de su hogar y le entregamos un presupuesto
          claro y detallado.
        </p>

        <Link
          href="https://wa.me/17863424247"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-lg !px-8 !py-4"
        >
          <MessageCircle size={24} strokeWidth={1.5} />
          Escríbanos por WhatsApp • 786-342-4247
        </Link>
      </div>
    </section>
  );
}
