import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/dw_home_bg.jpg";
import understanding_mens_health from "@/assets/dw_understanding.jpg";
import our_approach from "@/assets/pw_our_appoarch.jpg";
import seek_for_help from "@/assets/pw_seek_help.jpg";
import getting_started from "@/assets/pw_getting_started.jpg";
import { Brain, Dot, Dumbbell, Heart, HeartHandshakeIcon } from "lucide-react";
import TealGlow from "@/components/ui/tealglow";



const DadWellness = () => {
  const heroRef = useScrollAnimation();
  const understandingRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const approachRef = useScrollAnimation();
  const helpRef = useScrollAnimation();
  const startedRef = useScrollAnimation();

  const sections = [
    {
      title: "For Fathers-to-Be (Preconception & Pregnancy)",
      items: [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6h4.5" />
            </svg>
          ),
          heading: "Preconception Health",
          bullets: [
            "Fertility optimization and assessment",
            "Lifestyle modifications for better sperm health",
            "Nutrition and supplement guidance",
            "Stress management during conception attempts",
            "Partner support and relationship counseling",
          ],
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.5v15" />
            </svg>
          ),
          heading: "Pregnancy Support",
          bullets: [
            "Emotional support during partner’s pregnancy",
            "Preparing for fatherhood mentally and emotionally",
            "Relationship changes and communication",
            "Birth preparation and involvement",
            "Managing anxiety about becoming a father",
          ],
        },
      ],
    },
    {
      title: "For New Fathers (0-2 years)",
      items: [
        {
          heading: "Postpartum Support",
          bullets: [
            "Adjusting to life with a newborn",
            "Sleep deprivation management",
            "Bonding with your baby",
            "Supporting your partner through postpartum changes",
            "Managing work-life balance with a new baby",
          ],
        },
        {
          heading: "Parenting Skills Development",
          bullets: [
            "Basic baby care and handling",
            "Understanding infant development",
            "Creating routines and schedules",
            "Safe parenting practices",
            "Building confidence as a new dad",
          ],
        },
      ],
    },
    {
      title: "For Experienced Fathers",
      items: [
        {
          heading: "Ongoing Parenting Challenges",
          bullets: [
            "Discipline and boundary setting",
            "Communication with children at different ages",
            "Managing multiple children",
            "Dealing with behavioral issues",
            "Academic and social development support",
          ],
        },
        {
          heading: "Personal Growth & Wellbeing",
          bullets: [
            "Maintaining your identity as an individual",
            "Relationship with partner post-children",
            "Career advancement while being present",
            "Managing parenting stress and burnout",
            "Building emotional intelligence for better parenting",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">  
      {/* Hero Section */}
     
      <section
  ref={heroRef}
  className="relative min-h-screen text-white rounded-b-3xl overflow-hidden"
>
  {/* Background image layer */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${heroImage})`,
      transform: "scaleX(-1)", // flips only this div
    }}
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />

  {/* Content */}
  <div className="relative z-10 px-6 py-24 lg:py-32">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Supporting Fathers at<br />
          Every Stage of the Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          Fatherhood is one of life's most rewarding yet challenging experiences.
          At Be Ballsy, we provide comprehensive support for men transitioning into fatherhood,
          new fathers, and experienced dads navigating the evolving challenges of raising children.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Understanding the Fatherhood Journey */}
      <section
        ref={understandingRef}
        className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
            Understanding the<br />
            Fatherhood Journey
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Modern Indian fathers face unique challenges:
              </p>
            <ul className="space-y-4">
              {[
  "Balancing traditional expectations with modern parenting",
  "Managing career demands while being present for family",
  "Navigating changing relationships with partners",
  "Dealing with stress and anxiety about parenting responsibilities",
  "Maintaining personal identity while embracing fatherhood"
]
.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <HeartHandshakeIcon className="text-teal-500" />
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


     {/* Our Comprehensive Dad's Wellness Services */}
     <div className="w-full px-6 py-16 dad_wellness_services">
  <h1 className="text-center text-3xl font-semibold mb-12">
    Our Comprehensive Dad's Wellness Services
  </h1>

  {/* Centered content container */}
  <div className="relative max-w-6xl mx-auto">
    {/* Vertical Timeline aligned left of cards */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-primary"></div>

    {sections.map((section, idx) => (
      <div key={idx} className="relative mb-20 pl-6">
        {/* Dot */}
        <div className="absolute -left-1 top-1.5 w-3 h-3 rounded-full bg-primary"></div>

        <h2 className="text-lg font-semibold mb-6">{section.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.items.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-cardGradientFrom to-cardGradientTo rounded-lg p-6 shadow-lg"
            >
              {item.icon && <div className="mb-3 text-primary">{item.icon}</div>}
              <h3 className="font-semibold text-lg mb-4">{item.heading}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="list-disc list-inside">
                    {bullet}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-primary text-black px-4 py-2 rounded-md font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>





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

export default DadWellness;