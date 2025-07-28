import { Button } from "@/components/ui/button";
import therapyImage from "@/assets/therapy-session.jpg";
import fitnessImage from "@/assets/fitness-plan.jpg";
import assessmentImage from "@/assets/virtual-assessment.jpg";

const FeaturedSolutions = () => {
  const solutions = [
    {
      image: therapyImage,
      title: "Men's Therapy Sessions",
      description: "Individual and group therapy sessions designed specifically for men's mental health needs.",
      price: "Starting at ₹999",
      duration: "45 min sessions"
    },
    {
      image: fitnessImage,
      title: "Personalized Fitness Plan",
      description: "Custom workout routines and nutrition plans tailored to your lifestyle and goals.",
      price: "Starting at ₹1,499",
      duration: "Monthly plans"
    },
    {
      image: assessmentImage,
      title: "Virtual Health Assessment",
      description: "Comprehensive health evaluation with our certified healthcare professionals.",
      price: "Starting at ₹799",
      duration: "30 min consultation"
    },
    {
      image: therapyImage,
      title: "Stress Management Course",
      description: "Learn practical techniques to manage stress and improve your overall well-being.",
      price: "Starting at ₹1,199",
      duration: "8-week program"
    },
    {
      image: fitnessImage,
      title: "Relationship Optimization",
      description: "Improve your relationships with partners, family, and colleagues through guided coaching.",
      price: "Starting at ₹1,899",
      duration: "6-week program"
    },
    {
      image: assessmentImage,
      title: "Career Development",
      description: "Professional coaching to help you advance your career and achieve your goals.",
      price: "Starting at ₹2,199",
      duration: "12-week program"
    }
  ];

  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our most impactful programs and services designed to help modern men thrive in every aspect of life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={solution.image} 
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {solution.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="font-bold text-primary">{solution.price}</div>
                    <div className="text-xs text-muted-foreground">{solution.duration}</div>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;