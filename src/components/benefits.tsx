"use client";

import { useEffect, useRef } from "react";
import { Droplet, Shield, Heart, Wrench, BadgeCheck, Star } from "lucide-react";

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
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
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
      className="section-deep py-[--section]"
    >
      <div className="max-w-7xl mx-auto px-[--container-px]">
        {/* Section Header */}
        <div className="text-center mb-[--block] benefits-header">
          <span className="eyebrow">BENEFICIOS</span>
          <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#F1F5F9] mb-4 text-balance">
            Lo que usted gana con PINA Water System
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="benefit-card glass-card-outer">
              <div className="glass-card-inner text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#20A0E0]/10 border border-[#20A0E0]/20 flex items-center justify-center">
                  <benefit.icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#20A0E0]"
                  />
                </div>
                <h3 className="heading-h3 text-[clamp(1rem,1.3vw,1.25rem)] text-[#F1F5F9] mb-2.5 text-balance">
                  {benefit.title}
                </h3>
                <p className="text-[#94A3B8] body-text text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
