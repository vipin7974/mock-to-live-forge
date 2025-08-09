import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Heart, Shield, Users, Clock, Stethoscope } from "lucide-react";

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
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Premium Intimate Care{" "}
                <span className="text-primary">Products for Indian Men</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Addressing the unique health needs of Indian men with evidence-based 
                intimate wellness solutions. Discreet, professional, and culturally sensitive care.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Get Started Today
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <Heart className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-foreground">Mental Health</h3>
                  </div>
                  <div className="space-y-2">
                    <Shield className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-foreground">Intimate Care</h3>
                  </div>
                  <div className="space-y-2">
                    <Users className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-foreground">Relationship</h3>
                  </div>
                  <div className="space-y-2">
                    <Clock className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-foreground">24/7 Support</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Intimate Wellness */}
      <section ref={understandingRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Understanding Intimate Wellness
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Intimate wellness goes beyond just physical health. It encompasses the complete 
                well-being of your intimate relationships, sexual health, and personal confidence. 
                For Indian men, cultural barriers often prevent open discussion about these crucial 
                health topics, leading to untreated issues that affect overall quality of life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach combines traditional understanding with modern medical science to provide 
                comprehensive intimate wellness solutions tailored specifically for Indian men.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/0ffb66d0-9b2b-44e1-abe5-3e313a71ad48.png" 
                alt="Understanding Intimate Wellness"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Intimate Wellness Matters */}
      <section ref={whyMattersRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/lovable-uploads/0ffb66d0-9b2b-44e1-abe5-3e313a71ad48.png" 
                alt="Why Intimate Wellness Matters"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground">
                Why Intimate Wellness Matters
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Confidence</h3>
                    <p className="text-muted-foreground">Restore self-assurance in intimate relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Relationships</h3>
                    <p className="text-muted-foreground">Strengthen bonds with your partner through better communication</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Overall Health</h3>
                    <p className="text-muted-foreground">Intimate wellness affects mental and physical well-being</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Quality of Life</h3>
                    <p className="text-muted-foreground">Improved satisfaction in all aspects of life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - Coming Soon */}
      <section ref={categoriesRef} className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Product Categories - <span className="text-primary">Coming Soon!</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            We're developing a comprehensive range of intimate wellness products specifically designed for Indian men.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">Be the first to know when our products launch</p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Notify Me
            </Button>
          </div>
        </div>
      </section>

      {/* Our Quality Promise */}
      <section ref={qualityRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Our Quality Promise
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Clinically Tested</h3>
                    <p className="text-muted-foreground">All products undergo rigorous testing for safety and efficacy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Natural Ingredients</h3>
                    <p className="text-muted-foreground">Formulated with premium natural and ayurvedic ingredients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Formulation</h3>
                    <p className="text-muted-foreground">Developed by leading healthcare professionals and specialists</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Quality Assurance</h3>
                    <p className="text-muted-foreground">Manufactured in certified facilities with strict quality controls</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/0ffb66d0-9b2b-44e1-abe5-3e313a71ad48.png" 
                alt="Quality Promise"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Guidance */}
      <section ref={expertRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/lovable-uploads/0ffb66d0-9b2b-44e1-abe5-3e313a71ad48.png" 
                alt="Expert Guidance"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground">
                Expert Guidance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team includes experienced doctors, therapists, and wellness experts who understand 
                the unique challenges faced by Indian men in intimate wellness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Stethoscope className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Personalized Treatment Plans</h3>
                    <p className="text-muted-foreground">Tailored solutions based on individual needs and health profiles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Ongoing Support</h3>
                    <p className="text-muted-foreground">Continuous monitoring and adjustments for optimal results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Confidential Care</h3>
                    <p className="text-muted-foreground">Complete privacy and discretion in all consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section ref={helpRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                When to Seek Help
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Recognizing when to seek professional help is the first step toward better intimate wellness.
              </p>
              <div className="grid gap-3">
                <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Performance anxiety or stress</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Relationship communication issues</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Low confidence or self-esteem</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Physical health concerns</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Hormonal imbalances</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/0ffb66d0-9b2b-44e1-abe5-3e313a71ad48.png" 
                alt="When to Seek Help"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section ref={treatmentRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/lovable-uploads/0ffb66d0-9b2b-44e1-abe5-3e313a71ad48.png" 
                alt="Treatment Options"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground">
                Treatment Options
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer multiple treatment approaches to address various intimate wellness concerns.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Counseling and Therapy</h3>
                  <p className="text-muted-foreground text-sm">Professional guidance for emotional and psychological aspects</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Lifestyle Modifications</h3>
                  <p className="text-muted-foreground text-sm">Personalized recommendations for diet, exercise, and habits</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Medical Interventions</h3>
                  <p className="text-muted-foreground text-sm">Clinical treatments when medically necessary</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Ongoing Support Programs</h3>
                  <p className="text-muted-foreground text-sm">Long-term wellness maintenance and monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Getting Started
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Take the first step towards better intimate wellness. Our compassionate team is here 
              to support you with complete confidentiality and understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Book a Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Browse Health Journal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntimateWellness;