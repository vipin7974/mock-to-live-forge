import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-man-laptop.jpg";

const HeroSection = () => {
  return (
    <section className="bg-hero text-hero-foreground py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            India's Most Trusted<br />
            <span className="text-primary">Men's Wellness Platform</span>
          </h1>
          <p className="text-xl mb-8 text-hero-foreground/80 max-w-lg">
            Real solutions for modern men's physical, mental &amp; sexual health. Building a safe space for every male.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-hero-foreground text-hero-foreground hover:bg-hero-foreground hover:text-hero">
              Book a Free Consultation
            </Button>
          </div>
          <p className="text-sm mt-6 text-hero-foreground/60">
            A community built with ♡ for Indian men!
          </p>
        </div>
        <div className="flex-1">
          <img 
            src={heroImage} 
            alt="Professional man using laptop" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;