"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGSAP = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          ".hero-eyebrow",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
          .fromTo(
            ".hero-headline",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.0 },
            "-=0.4"
          )
          .fromTo(
            ".hero-subtitle",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
          )
          .fromTo(
            ".hero-cta",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.4"
          );

        // Parallax on product image
        gsap.to(".hero-image", {
          y: "8%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      } catch (e) {
        // GSAP not available — graceful degradation
      }
    };

    loadGSAP();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="section-hero min-h-[100dvh] flex items-center relative overflow-hidden pt-28 pb-16 md:pt-0 md:pb-0"
    >
      {/* Radial glow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#20A0E0]/5 blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-[--container-px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start text-left z-10">
          <span className="eyebrow hero-eyebrow">AGUA PURA</span>
          <h1 className="heading-display text-[clamp(2.25rem,6vw,5rem)] text-[#F1F5F9] mb-6 hero-headline max-w-[15ch] text-balance">
            Agua pura, salud protegida, hogar impecable.
          </h1>
          <p className="body-text text-[clamp(1rem,1.25vw,1.2rem)] text-[#94A3B8] mb-10 hero-subtitle max-w-[55ch]">
            Sistemas profesionales de tratamiento y purificación de agua que eliminan
            contaminantes, suavizan el agua dura y protegen cada rincón de su hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-cta">
            <Link href="#contacto" className="btn-primary">
              Solicitar cotización
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
            <Link
              href="https://wa.me/17863424247"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !bg-transparent !text-[#F1F5F9] !border !border-white/20 !shadow-none hover:!border-[#25D366] hover:!text-[#25D366]"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
              WhatsApp • 786-342-4247
            </Link>
          </div>
        </div>

        {/* Right: Product Image */}
        <div className="flex-1 relative z-10 hero-image">
          <div className="relative w-full aspect-[4/3] max-w-[540px] mx-auto">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-2xl bg-[#20A0E0]/10 blur-[60px] scale-90" />
            <div className="product-card h-full">
              <Image
                src="/assets/img/imgproduct1.jpg"
                alt="Sistema de Ósmosis Inversa PINA Water System"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 540px"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card-outer">
              <div className="glass-card-inner !p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F1F5F9] font-[var(--font-body)]">
                    Certificación NSF
                  </p>
                  <p className="text-xs text-[#94A3B8] font-[var(--font-body)]">
                    Componentes certificados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
