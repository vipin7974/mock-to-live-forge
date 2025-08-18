import { Button } from "@/components/ui/button";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Progress } from "@/components/ui/progress"; // Assuming you have a Progress component

import { Brain, Dumbbell, Heart, Baby } from "lucide-react"; // Example icons
import { Link } from "react-router-dom";

const WellnessPillars = () => {
  const pillars = [
    {
      icon: <Brain className="w-6 h-6 text-teal-500" />,
      title: "Emotional Wellness",
      description: "Therapy, coaching, and resources for mental health, stress management, and resilience",
      percentage: 75,
      subtitle: "report reduced stress",
      url: "/mentalWellness"
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-teal-500" />,
      title: "Physical Health",
      description: "Programs for fitness, nutrition, preventative care, and long-term health maintenance.",
      percentage: 83,
      subtitle: "improves fitness markers",
      url: "/physicalWellness"
    },
    {
      icon: <Heart className="w-6 h-6 text-teal-500" />,
      title: "Intimate Wellness",
      description: "Confidential solutions for performance, family, and healthy relationship.",
      percentage: 89,
      subtitle: "report improved intimacy",
      url: "/intimateWellness"
    },
    {
      icon: <Baby className="w-6 h-6 text-teal-500" />,
      title: "Dad’s Wellness",
      description: "Professional counseling for anxiety, depression, stress management, and suicide prevention.",
      percentage: 92,
      subtitle: "feel more prepared",
      url: "/intimateWellness"
    }
  ];

  const titleRef = useScrollAnimation("animate-fade-in");
  const pillarsRef = useStaggeredAnimation(150, "animate-fade-in");

  return (
    <section className="bg-gradient-to-br from-white to-teal-50 py-20 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Wellness Pillars</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help Indian men become their best selves through our four specialized areas of expertise.
          </p>
        </div>

        {/* Cards */}
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col p-6"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 p-2 rounded-full flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{pillar.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">{pillar.description}</p>

              {/* Percentage + Progress */}
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">{pillar.percentage}%</div>
                <div className="text-xs text-gray-500 mb-2">{pillar.subtitle}</div>
                <Progress value={pillar.percentage} className="h-2 bg-gray-200" indicatorClass="bg-teal-400" />
              </div>

              {/* Button */}
              <Link to={pillar.url}>
              <Button className="w-full bg-teal-400 hover:bg-teal-500 text-white font-medium py-2 rounded-md mt-auto">
                 Learn More
              </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPillars;
