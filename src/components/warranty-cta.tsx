"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";
import WaterWaves from "./water-waves";

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
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        const ScrollTrigger = ScrollTriggerModule.default;
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
      className="relative bg-[#F0F8FF]"
    >
      <div className="section">
        <div className="max-w-4xl mx-auto container-px">
          <div className="warranty-content card-clean p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center">
              <ShieldCheck
                size={28}
                strokeWidth={1}
                className="text-amber-500"
              />
            </div>
            <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#111827] mb-4 text-balance">
              Tu agua, tu salud, nuestra prioridad.
            </h2>
            <p className="text-[#64748B] body-text text-base md:text-lg mx-auto mb-8 max-w-[55ch]">
              No es un lema: es nuestra garantía de trabajo.
            </p>

            <div className="flex flex-col gap-4 max-w-xl mx-auto text-left">
              {TRUST_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <point.icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#16A34A] shrink-0 mt-0.5"
                  />
                  <p className="text-[#111827] body-text text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider to CTA Final */}
      <WaterWaves fillColor="#FFFFFF" backgroundColor="#F0F8FF" variant="pronounced" />
    </section>
  );
}
