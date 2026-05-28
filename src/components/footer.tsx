"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: "linear-gradient(180deg, #003060 0%, #002040 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-[--container-px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo & Brand */}
          <div>
            <div className="bg-white/95 rounded-lg p-2 inline-block mb-4">
              <Image
                src="/assets/img/logo.png"
                alt="PINA Water System"
                width={160}
                height={56}
                className="h-[56px] w-auto"
              />
            </div>
            <p className="text-[#94A3B8] body-text text-sm leading-relaxed max-w-[40ch]">
              Sistemas profesionales de tratamiento y purificación de agua
              residencial. Tecnología certificada NSF con instalación garantizada.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-h3 text-lg text-[#F1F5F9] mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <Link
                href="tel:+17863424247"
                className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#20A0E0] transition-colors text-sm font-[var(--font-body)]"
              >
                <Phone size={16} strokeWidth={1.5} />
                786-342-4247
              </Link>
              <Link
                href="https://pinawatersystem.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#20A0E0] transition-colors text-sm font-[var(--font-body)]"
              >
                <Globe size={16} strokeWidth={1.5} />
                pinawatersystem.com
              </Link>
              <Link
                href="https://wa.me/17863424247"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !text-sm !py-2.5 !px-5 inline-flex mt-2"
              >
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="heading-h3 text-lg text-[#F1F5F9] mb-4">
              Navegación
            </h4>
            <div className="space-y-2.5">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Productos", href: "#productos" },
                { label: "Beneficios", href: "#beneficios" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[#94A3B8] hover:text-[#20A0E0] transition-colors text-sm font-[var(--font-body)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-[#94A3B8]/60 text-xs font-[var(--font-body)]">
            &copy; {currentYear} PINA Water System. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
