"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Droplet, Shield, Heart, Wrench, BadgeCheck, Star, ArrowRight, X } from "lucide-react";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Problems />
        <Stages />
        <Products />
        <Benefits />
        <Trust />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

/* ================================================================
   NAV — ultra minimal, just logo + CTA
   ================================================================ */
function Nav() {
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const nav = document.getElementById("nav");
      if (!nav) return;
      const cur = window.scrollY;
      nav.style.transform = cur > 100 && cur > last ? "translateY(-100%)" : "translateY(0)";
      last = cur;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" className="fixed top-0 left-0 right-0 z-50 nav-blur transition-transform duration-300">
      <div className="container flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/img/logo.png" alt="PINA Water System" width={56} height={56} className="h-14 w-auto" priority />
          <span className="font-display font-semibold text-lg hidden sm:block">PINA Water System</span>
        </Link>
        <Link href="https://wa.me/17863424247" target="_blank" className="btn btn-primary text-sm py-2.5 px-5">
          Cotizar
        </Link>
      </div>
    </nav>
  );
}

/* ================================================================
   HERO — massive typography, full bleed image
   ================================================================ */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const run = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".hero-word", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 })
          .fromTo(".hero-sub", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
          .fromTo(".hero-cta-group", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");
        gsap.to(".hero-img", { y: "8%", ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.8 } });
      } catch (_) {}
    };
    run();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="container flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text */}
        <div className="flex-1">
          <p className="eyebrow hero-word">Purificación profesional</p>
          <h1 className="display-xl hero-word">
            <span className="block">Tu agua,</span>
            <span className="block text-accent">tu salud,</span>
            <span className="block">nuestra prioridad.</span>
          </h1>
          <p className="body-xl mt-8 mb-10 hero-sub max-w-[46ch]">
            Sistemas profesionales de ósmosis inversa, suavizadores y purificación en 6 etapas. Tecnología certificada NSF para toda su familia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-cta-group">
            <Link href="#productos" className="btn btn-primary">Ver sistemas <ArrowRight size={18} /></Link>
            <Link href="https://wa.me/17863424247" target="_blank" className="btn btn-outline">WhatsApp</Link>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 hero-img relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
            <Image src="/assets/img/hero-main.webp" alt="Sistema de purificación PINA Water" width={600} height={600} className="w-full max-w-[540px] h-auto" priority />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-border/50 flex items-center gap-3 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <BadgeCheck size={22} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-text">Certificación NSF</p>
              <p className="text-xs text-text-muted">ANSI 44 · 61 · 372</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   STATS — 3 big numbers
   ================================================================ */
function Stats() {
  useEffect(() => {
    const run = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll(".stat-num").forEach(el => {
          const target = parseInt(el.getAttribute("data-target") || "0");
          gsap.fromTo(el, { innerText: 0 }, { innerText: target, duration: 2.5, ease: "power2.out", snap: { innerText: 1 }, scrollTrigger: { trigger: el, start: "top 88%" } });
        });
      } catch (_) {}
    };
    run();
  }, []);

  const stats = [
    { value: 99.7, unit: "%", label: "Contaminantes eliminados" },
    { value: 6, unit: "", label: "Etapas de filtración" },
    { value: 15, unit: "+", label: "Años de vida útil protegida" },
  ];

  return (
    <section className="section-alt py-16 md:py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative order-2 lg:order-1">
          <Image src="/assets/img/family-moment.webp" alt="Familia disfrutando agua pura" width={600} height={600} className="w-full rounded-3xl shadow-xl" />
          <div className="absolute -bottom-4 -left-4 bg-accent text-white rounded-2xl px-6 py-4 shadow-lg">
            <p className="text-3xl font-display font-bold">10,000+</p>
            <p className="text-sm text-white/80">Familias confían en nosotros</p>
          </div>
        </div>
        {/* Right: Numbers */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <p className="eyebrow">Resultados reales</p>
          <h2 className="display-md mb-10">Números que hablan por sí solos.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="stat-number stat-num" data-target={s.value}>0</span>
                  <span className="stat-number">{s.unit}</span>
                </div>
                <p className="stat-label mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PROBLEMS — split comparison image
   ================================================================ */
function Problems() {
  useEffect(() => {
    const run = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".problem-card", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: "#problems", start: "top 80%" } });
      } catch (_) {}
    };
    run();
  }, []);

  const problems = [
    { icon: <X size={22} strokeWidth={2} />, title: "Sarro y agua dura", desc: "Obstruye tuberías, arruina electrodomésticos y deja manchas imposibles en lavabos y grifería." },
    { icon: <X size={22} strokeWidth={2} />, title: "Contaminantes invisibles", desc: "Cloro, sedimentos, metales pesados y compuestos orgánicos pueden estar en el agua sin que usted lo note." },
    { icon: <X size={22} strokeWidth={2} />, title: "Mal sabor y olor", desc: "El agua con sabor metálico o a cloro no invita a beberla. Su familia merece agua fresca y limpia." },
    { icon: <X size={22} strokeWidth={2} />, title: "Daños en el hogar", desc: "Cada litro de agua dura deposita minerales que corroen tuberías y acortan la vida de sus equipos." },
  ];

  return (
    <section id="problems" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <Image src="/assets/img/water-comparison.webp" alt="Comparación agua contaminada vs pura" width={600} height={600} className="w-full rounded-2xl shadow-xl" />
          </div>
          {/* Right: Text + cards */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow">El problema real</p>
            <h2 className="display-md mb-6">Lo que su agua esconde puede costarle caro.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {problems.map((p, i) => (
                <div key={i} className="problem-card card p-5">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-3">{p.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   STAGES — horizontal scroll timeline
   ================================================================ */
function Stages() {
  const stages = [
    { num: "01", title: "Grava", sub: "CLARIFICACIÓN", desc: "Retiene arena, lodo y óxido. Primera barrera de defensa." },
    { num: "02", title: "Garnet", sub: "REFINACIÓN", desc: "Atrapa partículas finas que escaparon de la grava." },
    { num: "03", title: "Resina catiónica", sub: "SUAVIZACIÓN", desc: "Elimina calcio y magnesio. Adiós al agua dura." },
    { num: "04", title: "Resina aniónica", sub: "ACONDICIONAMIENTO", desc: "Retiene sulfatos, nitratos y cloruros." },
    { num: "05", title: "Carbón activado", sub: "FILTRACIÓN", desc: "Absorbe cloro, mejora sabor y olor del agua." },
    { num: "06", title: "KDF", sub: "DESCONTAMINACIÓN", desc: "Reduce plomo, mercurio, bacterias y algas." },
  ];

  useEffect(() => {
    const run = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".stage-card", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: "#stages", start: "top 75%" } });
      } catch (_) {}
    };
    run();
  }, []);

  return (
    <section id="stages" className="section-alt section">
      <div className="container">
        <p className="eyebrow">Nuestro sistema</p>
        <h2 className="display-md mb-10">Seis etapas. Agua impecable.</h2>
      </div>
      <div className="scroll-x px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
        {stages.map((s, i) => (
          <div key={i} className="stage-card card min-w-[280px] max-w-[320px]">
            <span className="text-6xl font-display font-bold text-accent/15">{s.num}</span>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mt-2 mb-1">{s.sub}</p>
            <h3 className="text-xl font-display font-semibold">{s.title}</h3>
            <p className="body-text text-sm mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   PRODUCTS — horizontal scroll with real images
   ================================================================ */
function Products() {
  const products = [
    {
      img: "/assets/img/imgproduct1.jpg", title: "Ósmosis Inversa",
      tag: "Más vendido", desc: "Agua alcalina pura para beber y cocinar. Múltiples etapas de filtración con membrana semipermeable.",
      bullets: ["7 etapas de filtración", "Agua alcalina de excelente sabor", "Instalación profesional", "Mantenimiento sencillo", "Garantía de satisfacción"],
    },
    {
      img: "/assets/img/imgproduc2.jpg", title: "Suavizador de Agua",
      tag: "Hogar completo", desc: "Elimina la dureza del agua en toda la casa. Protege tuberías, electrodomésticos, piel y cabello.",
      bullets: ["Elimina incrustaciones de sarro", "Protege calentadores y lavadoras", "Piel y cabello más suaves", "Ahorro en jabón y detergentes", "Mayor vida útil de equipos"],
    },
    {
      img: "/assets/img/tech-cutaway.webp", title: "Válvula de Control NSF",
      tag: "Certificado NSF", desc: "Microprocesador de estado sólido con 3 modos de operación. Certificación NSF/ANSI 44 y 61.",
      bullets: ["Certificación NSF/ANSI 44 y 61", "Microprocesador programable", "3 modos de operación", "Memoria no volátil", "Batería de respaldo"],
    },
    {
      img: "/assets/img/protection-visual.webp", title: "Sistema Completo 6 Etapas",
      tag: "Premium", desc: "Solución integral para toda la vivienda. Desde clarificación hasta descontaminación KDF.",
      bullets: ["Tratamiento de agua completo", "6 etapas de filtración", "Agua suave en toda la casa", "Protección total del hogar", "Instalación profesional"],
    },
  ];

  useEffect(() => {
    const run = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".prod-card", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: "#products", start: "top 78%" } });
      } catch (_) {}
    };
    run();
  }, []);

  return (
    <section id="products" className="section">
      <div className="container">
        <p className="eyebrow">Productos</p>
        <h2 className="display-md mb-10">Soluciones profesionales para su hogar.</h2>
      </div>
      <div className="scroll-x px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
        {products.map((p, i) => (
          <div key={i} className="prod-card card min-w-[340px] max-w-[380px] p-0 overflow-hidden">
            <div className="relative h-[260px] bg-bg-alt">
              <Image src={p.img} alt={p.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <span className="badge inline-block text-xs font-bold uppercase tracking-wider text-accent bg-accent/8 px-3 py-1 rounded-full mb-3">{p.tag}</span>
              <h3 className="text-xl font-display font-semibold mb-2">{p.title}</h3>
              <p className="body-text text-sm mb-4">{p.desc}</p>
              <ul className="space-y-1.5">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-text-muted">
                    <span className="text-accent mt-0.5 shrink-0">•</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   BENEFITS — editorial grid
   ================================================================ */
function Benefits() {
  const items = [
    { icon: <Droplet size={28} strokeWidth={1} />, title: "Agua más limpia", desc: "99.7% de contaminantes, sedimentos y químicos eliminados del agua de su hogar." },
    { icon: <Shield size={28} strokeWidth={1} />, title: "Protección total", desc: "Tuberías, calentadores y electrodomésticos protegidos de la acumulación de sarro." },
    { icon: <Heart size={28} strokeWidth={1} />, title: "Bienestar familiar", desc: "Piel más suave, cabello más sano. Agua tratada que se siente en todo el cuerpo." },
    { icon: <Wrench size={28} strokeWidth={1} />, title: "Instalación experta", desc: "Técnicos certificados instalan su sistema con garantía y soporte post-venta." },
    { icon: <BadgeCheck size={28} strokeWidth={1} />, title: "Certificación NSF", desc: "Válvulas de control certificadas NSF/ANSI 44 y NSF/ANSI/CAN 61 & 372." },
    { icon: <Star size={28} strokeWidth={1} />, title: "Garantía 100%", desc: "Si no está satisfecho con su agua, lo resolvemos sin costo adicional." },
  ];

  useEffect(() => {
    const run = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".benefit-card", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: "#benefits", start: "top 80%" } });
      } catch (_) {}
    };
    run();
  }, []);

  return (
    <section id="benefits" className="section-alt section">
      <div className="container-sm text-center mb-16">
        <p className="eyebrow">Beneficios</p>
        <h2 className="display-md">Por qué elegir PINA Water System.</h2>
      </div>
      <div className="container-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="benefit-card card text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/8 flex items-center justify-center text-accent mx-auto mb-5">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="body-text text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   TRUST — full bleed image with overlay
   ================================================================ */
function Trust() {
  useEffect(() => {
    const run = async () => {
      try {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".trust-content", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: "#trust", start: "top 80%" } });
      } catch (_) {}
    };
    run();
  }, []);

  return (
    <section id="trust" className="relative full-bleed h-[700px] md:h-[600px] flex items-center justify-center overflow-hidden">
      <Image src="/assets/img/trust-seal.webp" alt="Confianza PINA Water" fill className="object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <div className="relative z-10 container-sm text-center text-white trust-content">
        <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-8 border border-white/20">
          <Shield size={36} strokeWidth={1} className="text-white" />
        </div>
        <h2 className="display-md text-white mb-6">Tu agua, tu salud, nuestra prioridad.</h2>
        <p className="text-xl text-white/80 max-w-[42ch] mx-auto mb-10 leading-relaxed">
          Cada sistema PINA Water System se instala con garantía de satisfacción. Porque la calidad del agua de su familia no es negociable.
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-base text-white/90 font-medium">
          <span className="flex items-center gap-2"><BadgeCheck size={18} className="text-green-400" /> Instalación profesional</span>
          <span className="flex items-center gap-2"><BadgeCheck size={18} className="text-green-400" /> Certificación NSF</span>
          <span className="flex items-center gap-2"><BadgeCheck size={18} className="text-green-400" /> Soporte permanente</span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA — centered, big
   ================================================================ */
function CTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-bg to-accent/10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-water/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="relative container-sm text-center">
        <p className="eyebrow">Comience hoy</p>
        <h2 className="display-md mb-5">¿Listo para agua pura en su hogar?</h2>
        <p className="body-xl mb-10 max-w-[42ch] mx-auto">
          Contáctenos ahora. Reciba una evaluación gratuita y descubra qué sistema es ideal para su vivienda.
        </p>
        <Link href="https://wa.me/17863424247" target="_blank"
          className="inline-flex items-center gap-3 btn-primary text-lg px-12 py-6 rounded-xl shadow-[0_8px_32px_rgba(0,102,255,0.35)] hover:shadow-[0_16px_48px_rgba(0,102,255,0.45)] hover:-translate-y-1 transition-all duration-300">
          <span>Escríbanos por WhatsApp</span>
          <ArrowRight size={24} />
        </Link>
        <p className="mt-6 text-sm text-text-muted">+1 (786) 342-4247 · Respuesta en menos de 5 minutos</p>
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER — dark, minimal
   ================================================================ */
function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Image src="/assets/img/logo.png" alt="PINA Water System" width={60} height={60} className="h-14 w-auto brightness-0 invert mb-4" />
          <p className="text-white/50 text-sm max-w-[28ch]">PINA Water System — Tratamiento y purificación de agua profesional para hogares.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>📞 +1 (786) 342-4247</li>
            <li>🌐 pinawatersystem.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Ósmosis Inversa</li>
            <li>Suavizadores de Agua</li>
            <li>Sistemas de Filtración</li>
            <li>Instalación Profesional</li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/30">
        © {new Date().getFullYear()} PINA Water System. Todos los derechos reservados.
      </div>
    </footer>
  );
}
