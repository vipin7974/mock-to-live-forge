import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/home_hero_bg.jpg"; // Ensure this is the smiling man image
import TealGlow from "./ui/tealglow";
import { useState } from "react";
import ConsultationModal from "./ui/ConsultationModal";

const HeroSection = () => {
  const heroContentRef = useScrollAnimation('animate-fade-in');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white rounded-b-3xl overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient overlay from left (black) to right (transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 py-24 lg:py-32">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div ref={heroContentRef} className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              India's Most Trusted
              <br />
              <span className="text-white">Men’s Wellness Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Real solutions for Indian men’s mental, physical &<br />
              intimate health—no stigma, no BS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg rounded-full font-semibold">
                Get Started
              </Button>
              <Button 
                size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg rounded-full font-semibold"
                onClick={() => setIsConsultationModalOpen(true)}
              >
                Book Consultation
              </Button>
            </div>
            <p className="text-sm text-gray-300 flex items-center justify-center lg:justify-start gap-1">
              A community built with <span className="text-red-500">❤</span> for Indian men!
            </p>
          </div>
        </div>
      </div>
      <ConsultationModal
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
