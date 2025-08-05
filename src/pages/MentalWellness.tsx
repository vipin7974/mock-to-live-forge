import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MentalWellness = () => {
  const heroRef = useScrollAnimation("animate-fade-in", 0.1);
  const understandingRef = useScrollAnimation("animate-fade-in", 0.1);
  const servicesRef = useScrollAnimation("animate-fade-in", 0.1);
  const approachRef = useScrollAnimation("animate-fade-in", 0.1);
  const helpRef = useScrollAnimation("animate-fade-in", 0.1);
  const ctaRef = useScrollAnimation("animate-fade-in", 0.1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mental Health Designed
            <br />
            <span className="text-teal-400">for Indian Men</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Be Ballsy, we understand that men's health and wellness—
            especially our mental & emotional wellbeing has long been overlooked.
            Let's change that together and normalize mental wellness
            conversations.
          </p>
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Understanding Men's Mental Health */}
      <section ref={understandingRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Understanding
                <br />
                <span className="text-teal-600">Men's Mental Health</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Mental health is as crucial as physical health and some important topics we address include:
              </p>
              <ul className="space-y-4">
                {[
                  "Workplace stress and career pressures",
                  "Family financial responsibilities",
                  "Social expectations of being 'strong'",
                  "Difficulty expressing emotions",
                  "Relationship and marriage stressors",
                  "Aging parent care responsibilities"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/6635e4f0-e480-4c9a-b96a-6dbdcc0277c8.png" 
                alt="Man in therapy session" 
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialized Services */}
      <section ref={servicesRef} className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Depression Treatment",
                description: "We provide comprehensive treatment for depression and anxiety. Our skilled team provides therapy, medications and ongoing support to help you regain control and find hope."
              },
              {
                icon: "😰",
                title: "Anxiety Management",
                description: "We're here to help you deal with anxiety. We'll teach you effective coping strategies and tools to help reduce stress and stay calm during challenging times."
              },
              {
                icon: "😡",
                title: "Stress Management",
                description: "Life can be overwhelming sometimes. We help you identify and manage stress through proven techniques, lifestyle changes and ongoing support."
              },
              {
                icon: "👥",
                title: "Suicide Prevention",
                description: "Comprehensive suicide risk assessment and emergency mental health services available 24/7. No one fights alone."
              },
              {
                icon: "🧘",
                title: "Couple Mental Health Counseling",
                description: "Strengthen your relationship and improve your couple's mental health. We offer a safe space where couples can work through challenges together."
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={approachRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Approach
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Culturally Informed Therapy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our therapists understand and respect the cultural values, family dynamics, and social expectations. We incorporate traditional values with evidence-based modern therapy techniques.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Male-Focused Treatment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Men often experience and express mental health issues differently than women. Our specialists ensure therapy that is specifically tailored to men's communication styles and treatment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Setting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We focus on strategies you can use in your daily life, considering your work schedule, family commitments, and lifestyle.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/9f27338d-fdc2-4433-a37b-553bddcd57a1.png" 
                alt="Therapy approach" 
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section ref={helpRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <img 
                src="/assets/therapy-session.jpg" 
                alt="When to seek help" 
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                When to Seek Help
              </h2>
              <ul className="space-y-4">
                {[
                  "Persistent feelings of sadness or emptiness",
                  "Chronic physical anxiety",
                  "Sleep problems or changes in appetite",
                  "Irritability, overwhelming stress",
                  "Professional relationship struggles",
                  "Loss of interest in activities you once enjoyed",
                  "Thoughts of self-harm or suicide",
                  "Relationship problems affecting daily life"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section 
        ref={ctaRef}
        className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Getting Started
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our mental health services begin with a confidential assessment to understand your specific needs. Our therapists can help you find your healthy work life balance, improve your relationships and help you develop coping strategies.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Your mental health is just as important. It's a strength to reach out for help when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg">
              Book Mental Health Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
              Need Immediate Support?
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentalWellness;