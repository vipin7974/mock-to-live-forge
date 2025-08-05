import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const WellnessPillars = () => {
  const pillars = [
    {
      icon: "🧠",
      title: "EMOTIONAL WELLNESS",
      description: "Get mental health support that works around your life",
      percentage: "75%",
      subtitle: "Men have improved"
    },
    {
      icon: "💪",
      title: "PHYSICAL HEALTH", 
      description: "From fitness to nutrition, we help you become the best version of yourself",
      percentage: "83%",
      subtitle: "Health goals achieved"
    },
    {
      icon: "❤️",
      title: "INTIMATE WELLNESS",
      description: "Safe, judgment-free support for your most personal concerns",
      percentage: "89%",
      subtitle: "Satisfaction rate"
    },
    {
      icon: "🌟",
      title: "SELF WELLNESS",
      description: "Develop habits and mindset that lead to lasting positive change",
      percentage: "92%",
      subtitle: "Life improvement"
    }
  ];
  const titleRef = useScrollAnimation('animate-fade-in');
  const pillarsRef = useStaggeredAnimation(150, 'animate-fade-in');

  return (
    <section className="bg-gradient-to-br from-secondary/20 0 to-primary/15 py-20 px-6">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-wellness-foreground">Our Wellness Pillars</h2>
          <p className="text-xl text-wellness-foreground/70 max-w-3xl mx-auto">
            We help Indian men discover their best selves through holistic wellness approaches that address every aspect of modern life.
          </p>
        </div>
        
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="font-bold text-sm mb-3 text-primary tracking-wide">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{pillar.description}</p>
                
                <div className="border-t pt-4">
                  <div className="text-3xl font-bold text-primary mb-1">{pillar.percentage}</div>
                  <div className="text-xs text-muted-foreground">{pillar.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPillars;