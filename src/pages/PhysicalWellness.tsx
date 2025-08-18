import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/pw_home_bg.jpg";
import understanding_mens_health from "@/assets/pw_understanding.jpg";
import our_approach from "@/assets/pw_our_appoarch.jpg";
import seek_for_help from "@/assets/pw_seek_help.jpg";
import getting_started from "@/assets/pw_getting_started.jpg";
import { Dot, HeartHandshakeIcon } from "lucide-react";
import TealGlow from "@/components/ui/tealglow";

const PhysicalWellness = () => {
  const heroRef = useScrollAnimation();
  const understandingRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const approachRef = useScrollAnimation();
  const helpRef = useScrollAnimation();
  const startedRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">  
      {/* Hero Section */}
     
      <section
    ref={heroRef}
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
            Comprehensive Physical<br />
            Health for Indian Men
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Physical wellness goes beyond just fitness. At Be Ballsy, we address the complete spectrum of men's physical health, including the sensitive topics that are often overlooked or ignored.
            </p>

            
          </div>
        </div>
      </div>
    </section>  
      {/* Understanding Men's Physical Health */}

      <section ref={understandingRef} className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Understanding Men's<br />
                Physical Health
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Men's physical health needs are unique and often interconnected with mental and emotional wellbeing. We provide specialized care that addresses both common and complex health issues affecting Indian men.
              </p>
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
              ["Sexual Health & Sexology", [
                "Comprehensive sexual health assessments",
                "Relationship and intimacy counseling",
                "Sexual performance concerns",
                "Libido and desire issues",
                "Sexual dysfunction treatment",
                "Safe sex education and STI prevention"
              ]],
              ["Erectile Dysfunction (ED) Treatment", [
                "Comprehensive ED evaluation",
                "Medical and psychological causes assessment",
                "Treatment options including medication, therapy, and lifestyle changes",
                "Partner counseling and support",
                "Long-term management strategies"
              ]],
              ["Men's Reproductive Health", [
                "Preconception health optimization",
                "Hormonal health evaluation",
                "Testicular health and cancer screening",
              ]],
              ["General Physical Wellness", [
                "Preventive health screenings",
                "Cardiovascular health management",
                "Diabetes prevention and management",
                "Weight management and nutrition counseling",
                "Exercise and fitness planning"

              ]],
              ["Hormonal Health", [
                "Testosterone level assessment",
                "Hormonal imbalance treatment",
                "Age-related hormonal changes",
                "Energy and vitality optimization"
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
                ["Discreet and Professional Care", "We understand that discussing physical and sexual health can be uncomfortable. Our specialists create a safe, judgment-free environment where you can openly discuss your concerns."],
                ["Evidence-Based Treatment", "All our treatments are based on the latest medical research and best practices in men's health. We combine modern medicine with lifestyle modifications for optimal results."],
                ["Holistic Assessment","Physical health issues often have multiple causes – physical, psychological, and lifestyle-related. We address all aspects to provide comprehensive treatment."],
                ["Partner-Inclusive Care", "When appropriate and with your consent, we involve partners in treatment planning to ensure the best outcomes for your relationship and overall well being."]
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

      {/* Common Concerns We Address */}
      <section ref={helpRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={seek_for_help} alt="" className="rounded-2xl shadow-xl w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">Common Concerns We Address</h2>
            <ul className="space-y-4">
              {[
                "Sexual performance anxiety",
                "Premature ejaculation",
                "Loss of sexual desire",
                "Fertility concerns",
                "Physical fitness and stamina",
                "Sleep disorders affecting physical health",
                "Stress-related physical symptoms",
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


      {/* When to Seek Help */}
      <section ref={approachRef} className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">When to Seek Help</h2>
            <ul className="space-y-4">
              {[
                "Changes in sexual function or desire",
                "Persistent fatigue or low energy",
                "Difficulty maintaining physical fitness",
                "Concerns about fertility or reproductive health",
                "Relationship issues related to physical intimacy",
                "Any physical symptoms affecting quality of life",

              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <HeartHandshakeIcon className="text-teal-500"/>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={our_approach} alt="" className="rounded-2xl shadow-xl w-full" />
          </div>
        </div>
      </section>


      {/* Treatment Options */}
      <section ref={helpRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={seek_for_help} alt="" className="rounded-2xl shadow-xl w-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">Treatment Options</h2>
            <ul className="space-y-4">
              {[
                "Medical evaluation and treatment",
                "Counseling and therapy",
                "Lifestyle modification programs",
                "Partner therapy sessions",
                "Ongoing monitoring and support",

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
        ref={startedRef}
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
              Your physical wellness journey begins with a comprehensive, confidential assessment. We discuss your health history, current concerns, and goals to create a personalized treatment plan.
              </p>
              <h3 className="text-gray-300 mb-8">
              Your physical health is the foundation of your overall well being.
              </h3>
              <div className="flex flex-row gap-4">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full">
                Book Confidential Consultation
                </Button>
                <Button variant="destructive" className="bg-blue-600 hover:bg-red-700 text-white px-6 py-3 rounded-full">
                Learn About Our Specialists
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default PhysicalWellness;