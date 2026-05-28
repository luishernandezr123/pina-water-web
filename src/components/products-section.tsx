"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const PRODUCTS = [
  {
    title: "Ósmosis Inversa — Agua alcalina pura, directo de su grifo",
    description:
      "Nuestro sistema de ósmosis inversa de múltiples etapas remueve hasta el 99 % de contaminantes disueltos, incluyendo plomo, arsénico, flúor, nitratos y microplásticos. El resultado es agua alcalina de pureza excepcional, con un sabor limpio y natural. Ideal para beber, cocinar y preparar alimentos sin preocupaciones. Instalación bajo el fregadero, operación silenciosa y mantenimiento mínimo.",
    benefits: [
      "Elimina metales pesados, sales disueltas y contaminantes microscópicos",
      "Produce agua alcalina con pH balanceado para consumo diario",
      "Reduce el gasto en agua embotellada desde la primera semana",
      "Sistema compacto que se instala bajo el fregadero sin ocupar espacio visible",
      "Membrana de alto rendimiento con vida útil prolongada",
    ],
    image: "/assets/img/imgproduct1.jpg",
    imageAlt: "Sistema de Ósmosis Inversa PINA",
  },
  {
    title: "Suavizador de Agua — Adiós al sarro, bienvenida la suavidad",
    description:
      "El suavizador PINA resuelve de raíz el problema del agua dura mediante intercambio iónico de alta eficiencia. Elimina el exceso de calcio y magnesio que genera sarro en tuberías, manchas en grifería y acumulación en electrodomésticos. Un hogar con agua suave gasta menos en productos de limpieza, prolonga la vida de sus equipos y siente la diferencia en la piel desde el primer día.",
    benefits: [
      "Elimina la formación de sarro en tuberías, calentadores y electrodomésticos",
      "Reduce hasta un 50 % el consumo de jabón, detergente y productos de limpieza",
      "Piel más suave y cabello sin resequedad después de cada ducha",
      "Ropa más limpia, sin rigidez ni tono amarillento por depósitos minerales",
      "Sistema de regeneración automática con mínimo mantenimiento",
    ],
    image: "/assets/img/imgproduc2.jpg",
    imageAlt: "Suavizador de Agua PINA",
  },
  {
    title: "Válvula de Control Water Specialist — Precisión con certificación NSF",
    description:
      "La válvula de control Water Specialist es el cerebro del sistema. Diseñada y fabricada bajo estrictos estándares de calidad, cuenta con certificación NSF que garantiza materiales seguros para agua potable y desempeño verificado en condiciones reales. Su electrónica de precisión gestiona los ciclos de lavado, regeneración y enjuague de forma automática, optimizando el consumo de agua y sal sin intervención del usuario.",
    benefits: [
      "Certificación NSF que respalda materiales seguros y rendimiento comprobado",
      "Programación electrónica inteligente que minimiza el desperdicio de agua y sal",
      "Panel de control intuitivo con indicadores de estado en tiempo real",
      "Compatible con tanques de cloruro de sodio y de potasio",
      "Diseñada para años de funcionamiento continuo sin fallos",
    ],
    image: null,
    imageAlt: "",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".products-header",
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
          ".product-card-anim",
          { y: 40, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".products-grid",
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
      id="productos"
      className="section-alt py-[--section]"
    >
      <div className="max-w-7xl mx-auto px-[--container-px]">
        {/* Section Header */}
        <div className="text-center mb-[--block] products-header">
          <span className="eyebrow">PRODUCTOS</span>
          <h2 className="heading-h2 text-[clamp(1.75rem,3vw,2.75rem)] text-[#F1F5F9] text-balance">
            Soluciones profesionales para cada necesidad
          </h2>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, idx) => (
            <div key={idx} className="product-card-anim product-card flex flex-col">
              {/* Image */}
              {product.image ? (
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                </div>
              ) : (
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#20A0E0]/10 to-[#003060]/20 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#20A0E0]/10 border border-[#20A0E0]/20 flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#20A0E0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#94A3B8] font-[var(--font-body)]">
                      Water Specialist
                    </p>
                    <p className="text-xs text-[#20A0E0] font-[var(--font-body)] font-semibold mt-1">
                      NSF Certified
                    </p>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="heading-h3 text-[clamp(1.1rem,1.5vw,1.35rem)] text-[#F1F5F9] mb-3">
                  {product.title}
                </h3>
                <p className="text-[#94A3B8] body-text text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Benefits list */}
                <ul className="space-y-2.5 mt-auto">
                  {product.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#22C55E] shrink-0 mt-0.5"
                      />
                      <span className="text-[#F1F5F9]/80 font-[var(--font-body)] leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
