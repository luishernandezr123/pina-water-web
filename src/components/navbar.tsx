"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl nav-glass px-4 md:px-6 py-3 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-[calc(100%+2rem)] opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 shrink-0">
          <div className="bg-white/95 rounded-lg p-1.5">
            <Image
              src="/assets/img/logo.png"
              alt="PINA Water System"
              width={180}
              height={72}
              className="h-[56px] md:h-[72px] w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#F1F5F9]/80 hover:text-[#20A0E0] transition-colors duration-300 font-[var(--font-body)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="#contacto"
            className="btn-primary text-sm !py-2.5 !px-5"
          >
            Solicitar cotización
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#F1F5F9] hover:text-[#20A0E0] transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 border-t border-white/10 pt-4 flex flex-col gap-3 pb-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-[#F1F5F9]/80 hover:text-[#20A0E0] transition-colors py-2 font-[var(--font-body)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-sm !py-2.5 !px-5 w-fit mt-2"
          >
            Solicitar cotización
          </Link>
        </div>
      )}
    </nav>
  );
}
