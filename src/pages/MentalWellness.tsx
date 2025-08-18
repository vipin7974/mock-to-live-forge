import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mw_home_bg.jpg";
import understanding_mens_health from "@/assets/mw_understanding.jpg";
import our_approach from "@/assets/mw_our_approach.jpg";
import seek_for_help from "@/assets/mw_when_to_seek_help.jpg";
import getting_started from "@/assets/mw_getting_started.jpg";
import { Dot, HeartHandshakeIcon } from "lucide-react";
import TealGlow from "@/components/ui/tealglow";

const MentalWellness = () => {
  const heroRef = useScrollAnimation("animate-fade-in", 0.1);
  const understandingRef = useScrollAnimation("animate-fade-in", 0.1);
  const servicesRef = useScrollAnimation("animate-fade-in", 0.1);
  const approachRef = useScrollAnimation("animate-fade-in", 0.1);
  const helpRef = useScrollAnimation("animate-fade-in", 0.1);
  const ctaRef = useScrollAnimation("animate-fade-in", 0.1);

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}

      <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white rounded-b-3xl overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient overlay from left (black) to right (transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 py-24 lg:py-32">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div ref={heroRef} className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Mental Health Designed
            <br /> for Indian Men
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            At Be Ballsy, we understand that men’s health isn’t one-size-fits-all. 
            Our holistic approach addresses the unique challenges faced by Indian men 
            across all life stages and circumstances.
            </p>
            
            
          </div>
        </div>
      </div>
    </section>


      {/* Understanding Men's Mental Health */}
      <section ref={understandingRef} className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Understanding Men’s Mental Health</h2>
            <ul className="space-y-4">
              {[
                "Workplace stress and career pressure",
                "Family financial responsibilities",
                "Social expectations of being “strong”",
                "Difficulty expressing emotions",
                "Relationship and marriage pressures",
                "Aging parent care responsibilities",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <HeartHandshakeIcon className="text-teal-500"/>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={understanding_mens_health}
              alt=""
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Our Specialized Services */}
      <TealGlow ref={servicesRef} className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Specialized Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Depression Treatment", [
                "Recognizing depression beyond just “feeling sad”",
                "Culturally appropriate therapy approaches",
                "Medication management when necessary",
                "Family involvement and education"
              ]],
              ["Anxiety Management", [
                "Social anxiety and performance pressure",
                "Work-related stress and burnout",
                "Panic attack management",
                "Generalized anxiety treatment"
              ]],
              ["Stress Management", [
                "Workplace stress reduction techniques",
                "Work-life balance strategies",
                "Financial stress counseling",
                "Family relationship stress"
              ]],
              ["Suicide Prevention", [
                "Crisis intervention and support",
                "Risk assessment and safety planning",
                "Long-term prevention strategies",
                "Family support and education"
              ]],
              ["Overall Mental Health Optimization", [
                "Emotional intelligence development",
                "Communication skills improvement",
                "Anger management",
                "Self-esteem and confidence building"
              ]]
            ].map(([title, points], idx) => (
              <Card key={idx} className="bg-slate-800 border border-slate-700 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
                  <ul className="space-y-2 mb-6">
                    {points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Dot />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full rounded-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TealGlow>

      {/* Our Approach */}
      <section ref={approachRef} className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Our Approach</h2>
            <ul className="space-y-6">
              {[
                ["Culturally Informed Therapy", "Our therapists understand Indian family dynamics, workplace culture, and social expectations. We integrate traditional values with evidence-based modern therapy techniques."],
                ["Male-Focused Treatment", "Men often experience and express mental health issues differently than women. Our specialists are trained in male-specific approaches to therapy and treatment."],
                ["Practical Solutions", "We focus on strategies you can actually implement in your daily life, considering work schedule, family commitments, and lifestyle."],
                ["Confidential and Discreet", "Your mental health journey is private. We ensure complete confidentiality and offer flexible scheduling to protect your privacy."]
              ].map(([heading, desc], idx) => (
                <li key={idx}>
                  <h3 className="text-lg font-bold mb-1 flex gap-2"><span><HeartHandshakeIcon className="text-teal-500"/></span>{heading}</h3>
                  <p className="text-gray-600">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={our_approach} alt="" className="rounded-2xl shadow-xl w-full" />
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section ref={helpRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={seek_for_help} alt="" className="rounded-2xl shadow-xl w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">When to Seek Help</h2>
            <ul className="space-y-4">
              {[
                "Persistent sadness or hopelessness",
                "Chronic stress or anxiety",
                "Sleep problems or changes in appetite",
                "Difficulty concentrating at work",
                "Increased irritability or anger",
                "Loss of interest in activities you once enjoyed",
                "Thoughts of self-harm or suicide",
                "Relationship problems affecting daily life"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <HeartHandshakeIcon className="text-teal-500"/>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section
        ref={ctaRef}
        className="py-20 px-6"
        style={{ background: "linear-gradient(to top, #f0fdfd, white)" }}
      >
        <div className="mx-auto">
          <div className="relative rounded-3xl overflow-hidden h-[480px] flex items-center">
            <img src={getting_started} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="relative z-10 max-w-lg px-8">
              <h2 className="text-4xl font-bold text-white mb-4">Getting Started</h2>
              <p className="text-white/90 mb-4">
                Mental health treatment begins with a confidential assessment where we understand your specific challenges and goals. 
                From there, we create a personalized treatment plan that fits your life and schedule.
              </p>
              <h3 className="text-gray-300 mb-8">
                Your mental health is not a weakness — it’s a strength to address.
              </h3>
              <div className="flex flex-row gap-4">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full">
                  Book Mental Health Consultation
                </Button>
                <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full">
                  Need Immediate Support?
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalWellness;
