"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import WaterParticles from "./water-particles";

export default function Hero() {
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

        // Subtle parallax on product image
        gsap.to(".hero-image-wrap", {
          y: "5%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
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
      className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0"
    >
      {/* Water particles */}
      <WaterParticles />

      {/* Subtle cyan glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E0F7FA]/40 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto container-px flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start text-left">
          <span className="eyebrow hero-eyebrow">AGUA PURA</span>
          <h1 className="heading-display text-[clamp(2.5rem,5vw,4.5rem)] text-[#111827] mb-6 hero-headline max-w-[15ch] text-balance">
            Agua pura, salud protegida, hogar impecable.
          </h1>
          <p className="body-text text-[clamp(1rem,1.25vw,1.2rem)] text-[#64748B] mb-10 hero-subtitle max-w-[55ch]">
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
              className="btn-outline"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
              WhatsApp • 786-342-4247
            </Link>
          </div>
        </div>

        {/* Right: Product Image */}
        <div className="flex-1 relative z-10 hero-image-wrap">
          <div className="relative w-full aspect-[4/3] max-w-[540px] mx-auto">
            {/* Soft glow behind image */}
            <div className="absolute inset-0 rounded-2xl bg-[#E0F7FA]/40 blur-[60px] scale-90" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
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
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-[#E2E8F0] shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] font-[var(--font-body)]">
                  Certificación NSF
                </p>
                <p className="text-xs text-[#64748B] font-[var(--font-body)]">
                  Componentes certificados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg
          viewBox="0 0 1280 64"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32 C320,64 640,0 1280,32 L1280,64 L0,64 Z"
            fill="#F0F8FF"
          />
        </svg>
      </div>
    </section>
  );
}
