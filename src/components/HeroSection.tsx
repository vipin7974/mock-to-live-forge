import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-man-laptop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-[calc(100vh-6rem)]">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              India's Most Trusted<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Men's Wellness Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Real solutions for Indian men's mental, physical &<br />
              intimate health—no stigma, no BS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full font-semibold">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300">
                Book a Free Consultation
              </Button>
            </div>
            <p className="text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-1">
              A community built with <span className="text-red-500">❤</span> for Indian men!
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional man using laptop" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;