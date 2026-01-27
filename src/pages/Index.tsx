import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import CitiesSection from "@/components/CitiesSection";
import ContactForm from "@/components/ContactForm";
import EngagementsSection from "@/components/EngagementsSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import SupportSection from "@/components/SupportSection";
import FAQSection from "@/components/FAQSection";
import SocialSection from "@/components/SocialSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSection />
      {/* <VideoSection /> */}
      <HowItWorksSection />
      <PricingSection />
      <CitiesSection />
      <ContactForm />
      <EngagementsSection />
      <AboutSection />
      <StatsSection />
      <SupportSection />
      <FAQSection />
      <SocialSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
