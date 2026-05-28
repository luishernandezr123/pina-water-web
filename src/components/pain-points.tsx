"use client";

import { useEffect, useRef } from "react";
import { Droplets, AlertTriangle, FlaskConical, Wrench } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: Droplets,
    title: "Sarro y agua dura",
    description:
      "El sarro se acumula sin aviso. Obstruye tuberías, arruina electrodomésticos, deja manchas en lavabos y obliga a usar el doble de jabón para que algo haga espuma.",
  },
  {
    icon: AlertTriangle,
    title: "Contaminantes invisibles",
    description:
      "Cloro, sedimentos, metales pesados y compuestos orgánicos pueden estar presentes en el agua que llega a su cocina sin que usted lo note. Algunos ni siquiera alteran el sabor.",
  },
  {
    icon: FlaskConical,
    title: "Mal sabor y olor desagradable",
    description:
      "El agua con sabor metálico, a cloro o a tubería vieja no invita a beberla. Su familia termina comprando agua embotellada y usted asume un gasto que un buen sistema de filtración elimina de raíz.",
  },
  {
    icon: Wrench,
    title: "Daños en tuberías y electrodomésticos",
    description:
      "Cada litro de agua dura que circula por sus cañerías deposita minerales que corroen, obstruyen y acortan la vida útil de su calentador, lavadora, lavavajillas y cafetera.",
  },
];

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".pain-header",
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
          ".pain-card",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".pain-grid",
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
      id="problemas"
      className="section-alt py-[--section]"
    >
      <div className="max-w-7xl mx-auto px-[--container-px]">
        {/* Section Header */}
        <div className="text-center mb-[--block] pain-header">
          <span className="eyebrow">PROBLEMAS DEL AGUA</span>
          <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#F1F5F9] mb-4 text-balance">
            Lo que su agua esconde puede costarle caro
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="pain-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAIN_POINTS.map((point) => (
            <div key={point.title} className="pain-card glass-card-outer">
              <div className="glass-card-inner">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <point.icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-red-400"
                    />
                  </div>
                  <div>
                    <h3 className="heading-h3 text-[clamp(1.2rem,1.5vw,1.5rem)] text-[#F1F5F9] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-[#94A3B8] body-text text-sm md:text-base leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
