import { Button } from "@/components/ui/button";
import mens_therapy from "@/assets/home_mens_th_fs.jpg";
import personalized_fitness_plan from "@/assets/home_persionalized_fs.jpg";
import Sexual_Health_Assessment from "@/assets/home_sexual_health_fs.jpg";
import New_Dad_Survival_Kit from "@/assets/home_dad_survival_fs.jpg";
import Stress_Management_Course from "@/assets/home_stress_management_fs.jpg";
import Testosterone_Optimization from "@/assets/home_testorone_fs.jpg";

import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const FeaturedSolutions = () => {
  const solutions = [
    {
      image: mens_therapy,
      title: "Men's Therapy Sessions",
      description: "Individual therapy with specialists in men's mental health issues.",
      category: "Emotional",
      popular: true
    },
    {
      image: personalized_fitness_plan,
      title: "Personalized Fitness Plan",
      description: "Custom workout and nutrition plans based on your goals and body type.",
      category: "Emotional",
      popular: true
    },
    {
      image: Sexual_Health_Assessment,
      title: "Sexual Health Assessment",
      description: "Confidential evaluation and treatment plans for optimal intimate wellness.",
      category: "Emotional",
      popular: true
    },
    {
      image: New_Dad_Survival_Kit,
      title: "New Dad Survival Kit",
      description: "Essential resources and support for new and expectant fathers.",
      category: "Emotional",
      popular: true
    },
    {
      image: Stress_Management_Course,
      title: "Stress Management Course",
      description: "Eight-week course to develop effective stress reduction techniques.",
      category: "Emotional",
      popular: true
    },
    {
      image: Testosterone_Optimization,
      title: "Testosterone Optimization",
      description: "Evidence-based approaches to naturally optimize hormone levels.",
      category: "Emotional",
      popular: true
    }
  ];

  const titleRef = useScrollAnimation("animate-fade-in");
  const solutionsRef = useStaggeredAnimation(100, "animate-fade-in");

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most impactful programs and services designed specifically for men's unique wellness needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={solutionsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image with Tags */}
              <div className="relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-3 left-3 bg-teal-200 text-teal-900 text-xs font-semibold px-3 py-1 rounded-full">
                  {solution.category}
                </span>
                {solution.popular && (
                  <span className="absolute top-3 right-3 bg-gray-200 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {solution.description}
                </p>
                <Button className="w-full bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold py-2 rounded-md">
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
