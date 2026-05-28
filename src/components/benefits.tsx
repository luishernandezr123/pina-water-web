"use client";

import { useEffect, useRef } from "react";
import { Droplet, Shield, Heart, Wrench, BadgeCheck, Star } from "lucide-react";
import WaterWaves from "./water-waves";

const BENEFITS = [
  {
    icon: Droplet,
    title: "Agua más limpia y segura",
    description:
      "Cada gota que sale de su grifo pasa por un sistema de filtración en múltiples etapas que remueve contaminantes físicos, químicos y biológicos.",
  },
  {
    icon: Shield,
    title: "Protección de tuberías y electrodomésticos",
    description:
      "El agua tratada no forma sarro ni depósitos corrosivos. Sus tuberías duran más y sus electrodomésticos funcionan como nuevos durante años.",
  },
  {
    icon: Heart,
    title: "Piel y cabello más suaves",
    description:
      "Bañarse con agua suave y libre de cloro reduce la irritación, la resequedad y los brotes dérmicos. Su piel y su cabello lo notan desde la primera semana.",
  },
  {
    icon: Wrench,
    title: "Instalación profesional garantizada",
    description:
      "Nuestro equipo técnico instala, calibra y verifica cada sistema en su hogar. Sin atajos, sin improvisaciones. Todo listo para que usted solo se preocupe por disfrutar agua de calidad.",
  },
  {
    icon: BadgeCheck,
    title: "Tecnología certificada NSF",
    description:
      "Utilizamos componentes con certificación NSF, el estándar internacional más riguroso para productos que entran en contacto con agua potable.",
  },
  {
    icon: Star,
    title: "Garantía de satisfacción",
    description:
      "Confiamos plenamente en nuestros sistemas. Si algo no cumple con sus expectativas, lo resolvemos. Su tranquilidad es la medida de nuestro trabajo.",
  },
];

export default function Benefits() {
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
          ".benefits-header",
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
          ".benefit-card",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".benefits-grid",
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
      id="beneficios"
      className="relative bg-white"
    >
      <div className="section">
        <div className="max-w-7xl mx-auto container-px">
          {/* Section Header */}
          <div className="text-center mb-12 benefits-header">
            <span className="eyebrow">BENEFICIOS</span>
            <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#111827] text-balance">
              Lo que usted gana con PINA Water System
            </h2>
          </div>

          {/* Benefits Grid 3x2 */}
          <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="benefit-card card-clean p-6 md:p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E0F7FA] border border-[#CCF0F5] flex items-center justify-center">
                  <benefit.icon
                    size={22}
                    strokeWidth={1}
                    className="text-[#0891B2]"
                  />
                </div>
                <h3 className="heading-h3 text-lg text-[#111827] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#64748B] body-text text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider to next section */}
      <WaterWaves fillColor="#F0F8FF" backgroundColor="#FFFFFF" variant="simple" />
    </section>
  );
}
