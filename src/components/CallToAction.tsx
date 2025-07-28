import { Button } from "@/components/ui/button";
import wellnessImage from "@/assets/wellness-journey.jpg";

const CallToAction = () => {
  return (
    <section 
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${wellnessImage})` }}
    >
      <div className="absolute inset-0 bg-hero/80"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center text-hero-foreground">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start<br />
            Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-hero-foreground/80">
            Take the first step towards better health and wellness. Our team of experts 
            is ready to support you on your journey to becoming the best version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book your Assessment
            </Button>
            <Button variant="outline" size="lg" className="border-hero-foreground text-hero-foreground hover:bg-hero-foreground hover:text-hero">
              Take Our Free Quiz →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;