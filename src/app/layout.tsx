import type { Metadata } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PINA Water System | Tratamiento y Purificación de Agua",
  description:
    "Sistemas de ósmosis inversa, suavizadores y tratamiento de agua en 6 etapas para hogares. Tecnología certificada NSF. Instalación profesional.",
  openGraph: {
    title: "PINA Water System — Tratamiento y Purificación de Agua Residencial",
    description:
      "Tu agua, tu salud, nuestra prioridad. Sistemas de ósmosis inversa, suavizadores y tratamiento en 6 etapas con tecnología certificada NSF. Instalación profesional garantizada.",
    type: "website",
    locale: "es_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodoniModa.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#060E1D] text-[#F1F5F9] font-[var(--font-body)]">
        {children}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PINA Water System",
              description:
                "Sistemas profesionales de tratamiento y purificación de agua residencial. Ósmosis inversa, suavizadores y sistemas de 6 etapas con certificación NSF.",
              telephone: "+1-786-342-4247",
              url: "https://pinawatersystem.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "FL",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "State",
                name: "Florida",
              },
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}

