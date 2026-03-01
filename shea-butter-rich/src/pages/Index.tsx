import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SynergySection from "@/components/landing/SynergySection";
import ProductsSection from "@/components/landing/ProductsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HowToUseSection from "@/components/landing/HowToUseSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SynergySection />
      <ProductsSection />
      <BenefitsSection />
      <HowToUseSection />

      <BeforeAfterSection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
