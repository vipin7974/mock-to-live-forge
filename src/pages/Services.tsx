import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Zap, User, CheckCircle, Ear, Handshake, Lightbulb, HeartHandshake, Brain, HandHeart } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/services_hero.jpg";
import doctorImage from "@/assets/makediffrence.jpg";
import TealGlow from "@/components/ui/tealglow";
import starPentagon from "@/assets/Star 1.png"; 
import gettingStarted from "@/assets/gettingStarted.jpg"

const Services = () => {
  const heroRef = useScrollAnimation('animate-fade-in');
  const pillarsHeaderRef = useScrollAnimation('animate-fade-in');
  const pillarsGridRef = useStaggeredAnimation(100, 'animate-fade-in');
  const servicesHeaderRef = useScrollAnimation('animate-fade-in');
  const servicesGridRef = useStaggeredAnimation(150, 'animate-fade-in');
  const differentiatorRef = useScrollAnimation('animate-fade-in');
  const finalSectionRef = useScrollAnimation('animate-fade-in');

  const pillars = [
    {
      icon: <Ear className="w-8 h-8" />,
      title: "Listen First",
      description: "Creating a judgment-free space where your concerns can be heard, understood."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Culturally Informed Care",
      description: "Integrating traditional values with modern healthcare approaches."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Personalized Solutions",
      description: "Tailoring treatments to your lifestyle, family dynamics, and personal goals."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Long-term Support",
      description: "Building sustainable habits and providing ongoing guidance."
    }
  ];

  const coreServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Wellness",
      description: "Professional counseling by anxiety, depression, stress management, sleep disorders. Our therapists understand the unique challenges facing Indian men today and tailor treatments accordingly.",
      buttonText: "Learn More"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Physical Health",
      description: "Specialized care for men's physical health including cardiovascular health, nutrition, and general wellness. We address fitness myths and cultural barriers to create effective, achievable health plans.",
      buttonText: "Learn More"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Intimate Wellness",
      description: "Premium products and guidance for men's sexual wellbeing. Quality products, discreet packaging, and informed professional support.",
      buttonText: "Learn More"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Dad's Wellness",
      description: "Dedicated support for fathers in the two roles, enhancing your relationship with your children during their growth in your fatherhood journey.",
      buttonText: "Learn More"
    }
  ];

  const differentiators = [
    "Cultural Sensitivity: We understand Indian family dynamics, workplace culture, and social expectations",
    "Male-Focused Expertise: Our specialists trained specifically in men's health issues",
    "Confidential & Discreet: Your privacy is our priority",
    "Accessible Care: Online options to fit your schedule",
    "Family-Inclusive Approach: Involving partners and family when appropriate"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white rounded-b-3xl overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient overlay from left (black) to right (transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
  <div ref={heroRef} className="max-w-4xl text-center">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Wellness
              <br />
              <span className="text-primary">for the Modern Indian Man</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-hero-foreground/90 max-w-3xl mx-auto">
              At Be Ballsy, we understand that men's health isn't one-size-fits-all. Our holistic approach addresses the unique challenges faced by Indian men across all life stages and circumstances.
            </p>
          </div>
        </div>
       
      </section>

      {/* 4-Pillar Approach */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 to-primary/15">
  <div className="container mx-auto px-4">
    <div ref={pillarsHeaderRef} className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Methodology: The 4-Pillar Approach
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We believe in treating the whole person, not just symptoms. Our evidence-based methodology focuses on:
      </p>
    </div>

    {/* Pillar Cards - insert grid here */}
    <div ref={pillarsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {pillars.map((pillar, index) => (
    <div key={index} className="relative bg-white rounded-xl shadow-md pt-12 px-4 pb-6 text-center">
      
      {/* 🟢 Pentagon Image Positioned on Top Center */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16">
        <img src={starPentagon} alt="icon shape" className="w-full h-full object-contain" />
        <div className="absolute inset-0 flex items-center justify-center text-primary">
          {pillar.icon}
        </div>
      </div>

      {/* 📄 Card Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{pillar.title}</h3>
      <p className="text-gray-600 text-sm">{pillar.description}</p>
    </div>
  ))}
</div>

  </div>
</section>



      {/* Core Services */}
      <TealGlow className="py-16 bg-[#111111] text-white">
        <div className="container mx-auto px-4">
          <div ref={servicesHeaderRef} className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
              Our Core Services
            </h2>
          </div>
          
          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-card/20 flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg text-primary mb-4 flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-hero-foreground">
                  {service.title}
                </h3>
                <p className="text-hero-foreground/80 mb-6 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 mt-auto"
                >
                  {service.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </TealGlow>

      {/* What Makes Us Different */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div ref={differentiatorRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Makes Us Different
              </h2>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden">
                <img 
                  src={doctorImage}
                  alt="What makes us different"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="relative w-5/6 m-auto mb-10 rounded-3xl overflow-hidden max-h-[480px] h-[480px]">
      <img
    src={gettingStarted}
    alt="Wellness Background"
    className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
  />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0 " />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={finalSectionRef} className="max-w-2xl py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Getting Started
            </h2>
            <p className="text-xl mb-8 text-hero-foreground/90">
              Your wellness journey begins with a simple step. Schedule a confidential consultation and our specialist will help you start down the path.
            </p>
            <p className="text-lg mb-8 text-hero-foreground/80">
              During your initial call or meeting we create a personalized action plan.
            </p>
            <p className="text-lg mb-8 text-hero-foreground/80">
              Book your wellness journey with your first gift to yourself: the freedom to ask for what you might plan for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
                Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-hero-foreground/30  hover:bg-hero-foreground/10 px-8 py-3 rounded-full"
              >
                View All Services →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;