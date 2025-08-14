import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WellnessPillars from "@/components/WellnessPillars";
import DoctorSection from "@/components/DoctorSection";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WellnessPillars />
      <DoctorSection />
      <FeaturedSolutions />
      <CallToAction />
      <ContactSection />
    </div>
  );
};

export default Index;
