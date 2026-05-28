import type { Metadata } from "next";
import { Outfit, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-body", display: "swap" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400","500","600","700","800"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "PINA Water System — Tratamiento y Purificación de Agua",
  description: "Tu agua, tu salud, nuestra prioridad. Sistemas de ósmosis inversa, suavizadores y purificación profesional con tecnología certificada NSF.",
  openGraph: {
    title: "PINA Water System — Agua Pura para tu Hogar",
    description: "Sistemas profesionales de tratamiento de agua. Ósmosis inversa, suavizadores, filtración 6 etapas. Certificación NSF.",
    type: "website",
    url: "https://pina-water.traffixdigital.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${bodoni.variable} antialiased`}>
      <body className="bg-bg text-text font-body">{children}</body>
    </html>
  );
}
