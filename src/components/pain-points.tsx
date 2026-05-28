"use client";

import { useEffect, useRef } from "react";
import { Droplets, AlertTriangle, FlaskConical, Wrench } from "lucide-react";
import WaterWaves from "./water-waves";

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
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        const ScrollTrigger = ScrollTriggerModule.default;
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
      className="relative bg-[#F0F8FF]"
    >
      <div className="section">
        <div className="max-w-7xl mx-auto container-px">
          {/* Section Header */}
          <div className="text-center mb-12 pain-header">
            <span className="eyebrow">PROBLEMAS DEL AGUA</span>
            <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#111827] mb-4 text-balance">
              Lo que su agua esconde puede costarle caro
            </h2>
          </div>

          {/* Pain Points Grid */}
          <div className="pain-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAIN_POINTS.map((point) => (
              <div key={point.title} className="pain-card card-clean p-6 md:p-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                    <point.icon
                      size={22}
                      strokeWidth={1}
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <h3 className="heading-h3 text-lg md:text-xl text-[#111827] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-[#64748B] body-text text-sm md:text-base leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider to next section */}
      <WaterWaves fillColor="#00B4D8" backgroundColor="#F0F8FF" variant="gentle" />
    </section>
  );
}
