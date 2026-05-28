"use client";

import { useEffect, useRef } from "react";
import WaterWaves from "./water-waves";

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
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        const ScrollTrigger = ScrollTriggerModule.default;
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

        // Animate stage items
        gsap.fromTo(
          ".stage-item",
          { y: 40, opacity: 0 },
          {
            y: 0,
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

        // Animate circles to active state sequentially
        STAGES.forEach((_, i) => {
          ScrollTrigger.create({
            trigger: `.stage-item-${i}`,
            start: "top 70%",
            onEnter: () => {
              const circle = document.querySelector(`.stage-circle-${i}`);
              if (circle) circle.classList.add("active");
            },
          });
        });
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
      className="relative bg-white"
    >
      <div className="section">
        <div className="max-w-4xl mx-auto container-px">
          {/* Section Header */}
          <div className="text-center mb-16 stages-header">
            <span className="eyebrow">NUESTRO SISTEMA</span>
            <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#111827] mb-4 text-balance">
              Seis etapas. Un solo propósito: agua impecable.
            </h2>
          </div>

          {/* Timeline */}
          <div className="stages-list relative">
            {/* Vertical line */}
            <div className="absolute left-[1.4rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E0F7FA] -translate-x-1/2 hidden md:block" />

            <div className="flex flex-col gap-8">
              {STAGES.map((stage, idx) => (
                <div
                  key={stage.num}
                  className={`stage-item stage-item-${idx} flex gap-4 md:gap-8 items-start ${
                    idx % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 card-clean p-5 md:p-6 ${
                      idx % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Mobile: show number inline */}
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                      <div className={`stage-circle stage-circle-${idx}`}>
                        {stage.num}
                      </div>
                      <div>
                        <h3 className="heading-h3 text-lg text-[#111827]">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-[#00B4D8] font-[var(--font-body)] font-semibold tracking-wider uppercase">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>
                    {/* Desktop: number is in the center */}
                    <div className="hidden md:block">
                      <h3 className="heading-h3 text-lg text-[#111827] mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[#00B4D8] font-[var(--font-body)] font-semibold tracking-wider uppercase mb-2">
                        {stage.subtitle}
                      </p>
                    </div>
                    <p className="text-[#64748B] body-text text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Circle node (center on desktop) */}
                  <div className="hidden md:flex items-center justify-center shrink-0 relative z-10">
                    <div className={`stage-circle stage-circle-${idx}`}>
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
      </div>

      {/* Wave divider to next section */}
      <WaterWaves fillColor="#F0F8FF" backgroundColor="#FFFFFF" variant="pronounced" />
    </section>
  );
}
