"use client";

import { useEffect, useRef } from "react";

const STAGES = [
  {
    num: 1,
    title: "Grava",
    subtitle: "Clarificación",
    description:
      "Retiene las partículas más grandes: arena, lodo, óxido. La primera barrera que limpia el agua antes de que entre al sistema.",
  },
  {
    num: 2,
    title: "Garnet",
    subtitle: "Refinación",
    description:
      "Un mineral de alta densidad que atrapa partículas finas que la grava dejó pasar. Afina la claridad del agua a nivel microfísico.",
  },
  {
    num: 3,
    title: "Resina catiónica",
    subtitle: "Suavización",
    description:
      "Intercambia iones de calcio y magnesio —los responsables del agua dura— por iones de sodio. El resultado: agua suave que no deja sarro ni manchas.",
  },
  {
    num: 4,
    title: "Resina aniónica",
    subtitle: "Acondicionamiento",
    description:
      "Remueve nitratos, sulfatos y alcalinidad excesiva. Equilibra la química del agua para que sea compatible con su hogar y su salud.",
  },
  {
    num: 5,
    title: "Carbón activado granular",
    subtitle: "Filtración",
    description:
      "Elimina cloro, compuestos orgánicos, pesticidas y cualquier sustancia que altere el sabor, el olor o la pureza del agua.",
  },
  {
    num: 6,
    title: "KDF",
    subtitle: "Descontaminación",
    description:
      "Medio filtrante de alta tecnología que neutraliza metales pesados, bacterias y cloro residual. La última línea de defensa antes de que el agua llegue a su vaso.",
  },
];

export default function TreatmentStages() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".stages-header",
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );

        gsap.fromTo(
          ".stage-item",
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".stages-list",
              start: "top 75%",
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
      id="etapas"
      className="section-deep py-[--section]"
    >
      <div className="max-w-7xl mx-auto px-[--container-px]">
        {/* Section Header */}
        <div className="text-center mb-[--block] stages-header">
          <span className="eyebrow">NUESTRO SISTEMA</span>
          <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#F1F5F9] mb-4 text-balance">
            Seis etapas. Un solo propósito: agua impecable.
          </h2>
        </div>

        {/* Timeline */}
        <div className="stages-list relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-[#20A0E0]/20 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-6">
            {STAGES.map((stage) => (
              <div
                key={stage.num}
                className={`stage-item flex flex-col md:flex-row gap-4 md:gap-8 items-start ${
                  stage.num % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 glass-card-outer ${
                    stage.num % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="glass-card-inner">
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                      <div className="process-step-num">{stage.num}</div>
                      <div>
                        <h3 className="heading-h3 text-lg text-[#F1F5F9]">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-[#20A0E0] font-[var(--font-body)] font-semibold tracking-wider uppercase">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <h3 className="heading-h3 text-lg text-[#F1F5F9] mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[#20A0E0] font-[var(--font-body)] font-semibold tracking-wider uppercase mb-2">
                        {stage.subtitle}
                      </p>
                    </div>
                    <p className="text-[#94A3B8] body-text text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Number node on desktop */}
                <div className="hidden md:flex items-center justify-center shrink-0 relative z-10">
                  <div className="process-step-num !w-10 !h-10 !text-base !font-bold">
                    {stage.num}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
