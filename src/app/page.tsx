import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PainPoints from "@/components/pain-points";
import TreatmentStages from "@/components/treatment-stages";
import ProductsSection from "@/components/products-section";
import Benefits from "@/components/benefits";
import WarrantyCta from "@/components/warranty-cta";
import CtaFinal from "@/components/cta-final";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-white">
        <Hero />
        <PainPoints />
        <TreatmentStages />
        <ProductsSection />
        <Benefits />
        <WarrantyCta />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
