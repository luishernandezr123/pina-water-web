"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: CheckCircle,
    text: "Instalación profesional por técnicos capacitados que prueban cada etapa del sistema antes de retirarse.",
  },
  {
    icon: CheckCircle,
    text: "Soporte continuo post-instalación. Si tiene dudas o necesita ajustes, lo atendemos sin vueltas.",
  },
  {
    icon: CheckCircle,
    text: "Equipos y componentes con certificación NSF que respaldan la calidad de cada pieza que instalamos.",
  },
];

export default function WarrantyCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".warranty-content",
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
      id="garantia"
      className="section-alt py-[--section]"
    >
      <div className="max-w-4xl mx-auto px-[--container-px]">
        <div className="warranty-content glass-card-outer">
          <div className="glass-card-inner text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C8A44E]/10 border border-[#C8A44E]/20 flex items-center justify-center">
              <ShieldCheck
                size={28}
                strokeWidth={1.5}
                className="text-[#C8A44E]"
              />
            </div>
            <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#F1F5F9] mb-4 text-balance">
              Tu agua, tu salud, nuestra prioridad.
            </h2>
            <p className="text-[#94A3B8] body-text text-base md:text-lg mx-auto mb-8">
              No es un lema: es nuestra garantía de trabajo.
            </p>

            <div className="flex flex-col gap-4 max-w-xl mx-auto text-left">
              {TRUST_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <point.icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#22C55E] shrink-0 mt-0.5"
                  />
                  <p className="text-[#F1F5F9]/85 body-text text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
