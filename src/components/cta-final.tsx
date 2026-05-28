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
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        const ScrollTrigger = ScrollTriggerModule.default;
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
      className="relative bg-white overflow-hidden"
    >
      {/* Subtle blue gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#EFF6FF] to-transparent pointer-events-none" />

      <div className="section">
        <div className="relative z-10 max-w-3xl mx-auto container-px text-center cta-final-content">
          <span className="eyebrow">COMENZAR AHORA</span>
          <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#111827] mb-4 text-balance">
            El agua de su hogar puede estar a un paso de ser impecable
          </h2>
          <p className="text-[#64748B] body-text text-base md:text-lg mx-auto mb-10 max-w-[55ch]">
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
      </div>
    </section>
  );
}
