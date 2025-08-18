import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  CheckCircle,
  Heart,
  Shield,
  Users,
  Clock,
  Stethoscope,
} from "lucide-react";
import heroImage from "@/assets/iw_hero_bg.jpg";
import understanding_mens_health from "@/assets/iw_understading.jpg";
import getting_started from "@/assets/iw_getting_started.jpg";
import { Dot, HeartHandshakeIcon } from "lucide-react";
import TealGlow from "@/components/ui/tealglow";
import why_intimate from "@/assets/iw_why_intimate.jpg";
import our_quality_promise from "@/assets/iw_our_expert.jpg";
import expert_guidence from "@/assets/iw_expert_guidens.jpg";
import common_intimate from "@/assets/iw_focus.jpg";
import cultural_sensitivity from "@/assets/iw_cultural.jpg";

const IntimateWellness = () => {
  const heroRef = useScrollAnimation();
  const understandingRef = useScrollAnimation();
  const whyMattersRef = useScrollAnimation();
  const categoriesRef = useScrollAnimation();
  const qualityRef = useScrollAnimation();
  const expertRef = useScrollAnimation();
  const helpRef = useScrollAnimation();
  const treatmentRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

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
            <div
              ref={heroRef}
              className="flex-1 text-center lg:text-left space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Intimate Care
                <br />
                Products for Indian Men
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                Intimate wellness is an essential part of overall health that's
                often overlooked. At Be Ballsy, we provide premium intimate care
                products and guidance specifically designed for Indian men's
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Men's Physical Health */}

      <section
        ref={understandingRef}
        className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding
              <br />
              Intimate Wellness
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Intimate wellness encompasses personal hygiene, sexual health, and
              overall intimate care. Proper intimate wellness not only improves
              physical health but also boosts confidence and enhances intimate
              relationships.
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

      {/* Why Intimate Wellness Matters */}

      <section
        ref={whyMattersRef}
        className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={why_intimate}
              alt=""
              className="rounded-2xl shadow-xl w-full scale-x-[-1]"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Why Intimate Wellness Matters
            </h2>
            <ul className="space-y-6">
              {[
                [
                  "Health:",
                  "Prevents infections and maintains optimal intimate health",
                ],
                [
                  "Confidence:",
                  "Feeling fresh and clean boosts self-assurance",
                ],
                [
                  "Relationships:",
                  "Better intimate care enhances partner satisfaction",
                ],
                ["Comfort:", "Proper care prevents irritation and discomfort"],
                ["Prevention:", "Regular care prevents serious health issues"],
              ].map(([heading, desc], idx) => (
                <li key={idx}>
                  <h3 className="text-lg font-bold mb-1 flex gap-2">
                    <span>
                      <HeartHandshakeIcon className="text-teal-500" />
                    </span>
                    {heading}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Product Categories - Coming Soon */}
      <TealGlow className="py-20 bg-slate-900 text-white text-center">
        <h1 className="text-white text-3xl">
          Our Product Categories -{" "}
          <span className="text-primary">Coming Soon!</span>
        </h1>
      </TealGlow>

      {/* Our Quality Promise */}

      <section
        ref={qualityRef}
        className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Our Quality Promise</h2>
            <ul className="space-y-6">
              {[
                [
                  "Clinically Tested:",
                  "All products undergo rigorous safety and efficacy testing",
                ],
                [
                  "Dermatological Approved:",
                  "Safe for sensitive skin and intimate areas",
                ],
                [
                  "Natural Ingredients:",
                  "Focus on natural, gentle, and effective ingredients",
                ],
                [
                  "Discreet Packaging:",
                  "Complete privacy in packaging and delivery",
                ],
                [
                  "Quality Assurance:",
                  "Highest manufacturing and quality standards",
                ],
              ].map(([heading, desc], idx) => (
                <li key={idx}>
                  <h3 className="text-lg font-bold mb-1 flex gap-2">
                    <span>
                      <HeartHandshakeIcon className="text-teal-500" />
                    </span>
                    {heading}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={our_quality_promise}
              alt=""
              className="rounded-2xl shadow-xl w-full scale-x-[-1]"
            />
          </div>
        </div>
      </section>

      {/* Expert Guidance */}
      <section
        ref={expertRef}
        className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={expert_guidence}
              alt=""
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">Expert Guidance</h2>
            <p>Along with premium products, we provide:</p>
            <ul className="space-y-6">
              {[
                ["Usage Instructions:", "Detailed guidance on proper use"],
                [
                  "Educational Content:",
                  "Information about intimate health and hygiene",
                ],
                [
                  "Personalized Recommendations:",
                  "Products suited to your specific needs",
                ],
                ["Ongoing Support:", "Expert advice and customer support"],
              ].map(([heading, desc], idx) => (
                <li key={idx}>
                  <h3 className="text-lg font-bold mb-1 flex gap-2">
                    <span>
                      <HeartHandshakeIcon className="text-teal-500" />
                    </span>
                    {heading}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Intimate Health Concerns */}

      <section
        ref={qualityRef}
        className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Common Intimate Health Concerns
            </h2>
            <ul className="space-y-4">
              {[
                "Bacterial and fungal infections",
                "Odor and hygiene issues",
                "Skin irritation and sensitivity",
                "Dryness and discomfort",
                "Grooming and hair management",
                "Performance and confidence issues",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <HeartHandshakeIcon className="text-teal-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={common_intimate}
              alt=""
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Cultural Sensitivity */}
      <section
        ref={expertRef}
        className="py-20 bg-gradient-to-r from-secondary/20 to-primary/15"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={cultural_sensitivity}
              alt=""
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">Cultural Sensitivity</h2>
            <p>
              We understand that intimate wellness can be a sensitive topic in
              Indian culture. Our approach is:
            </p>
            <ul className="space-y-6">
              {[
                [
                  "Respectful:",
                  "Acknowledging cultural values and sensitivities",
                ],
                ["Educational:", "Providing information without judgment"],
                ["Discreet:", "Ensuring complete privacy and confidentiality"],
                [
                  "Supportive:",
                  "Creating a comfortable environment for questions and concerns",
                ],
              ].map(([heading, desc], idx) => (
                <li key={idx}>
                  <h3 className="text-lg font-bold mb-1 flex gap-2">
                    <span>
                      <HeartHandshakeIcon className="text-teal-500" />
                    </span>
                    {heading}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
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
            <img
              src={getting_started}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="relative z-10 max-w-lg px-8">
              <h2 className="text-4xl font-bold text-white mb-4">
                Getting Started
              </h2>
              <p className="text-white/90 mb-4">
                Begin your intimate wellness journey with a confidential
                consultation.
              </p>
              <h3 className="text-gray-300 mb-8">
                Invest in your intimate wellness – it's an investment in your
                overall confidence and health.
              </h3>
              <div className="flex flex-row gap-4">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full">
                  Schedule Product Consultation
                </Button>
                <Button
                  variant="destructive"
                  className="bg-blue-600 hover:bg-red-700 text-white px-6 py-3 rounded-full"
                >
                  Browse Product Categories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntimateWellness;
