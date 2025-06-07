
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChefsSection from "@/components/ChefsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <OfferSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ChefsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
