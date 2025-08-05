import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import wellnessImage from "@/assets/readytostart.jpg";

const CallToAction = () => {
  const ctaRef = useScrollAnimation("animate-fade-in");

  return (
    <section className="relative w-5/6 m-auto mb-10 rounded-3xl overflow-hidden max-h-[480px] h-[480px]">
      <img
    src={wellnessImage}
    alt="Wellness Background"
    className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
  />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex items-center justify-center h-full px-6">
        <div ref={ctaRef} className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start<br />
            Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Take the first step towards better health and wellness. Our team of experts
            is ready to support you on your journey to becoming the best version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book your Assessment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-black"
            >
              Take Our Free Quiz →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
