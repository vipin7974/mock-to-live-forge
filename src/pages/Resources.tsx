import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, ExternalLink } from "lucide-react";
import heroManLaptop from "@/assets/hero-man-laptop.jpg";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Resources = () => {
  const heroRef = useScrollAnimation();
  const crisisRef = useScrollAnimation();
  const mentalHealthRef = useStaggeredAnimation(100);
  const mensHealthRef = useStaggeredAnimation(100);
  const blogRef = useScrollAnimation();
  const rememberRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-6 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Wellness<br />
                Support Network
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that help should always be within reach. 
                Whether you're facing a crisis or simply need guidance, 
                these resources are here for you 24/7.
              </p>
            </div>
            <div className="relative">
              <img 
                src={heroManLaptop} 
                alt="Man working on laptop" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support Section */}
      <section ref={crisisRef} className="py-16 px-6 bg-destructive">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Crisis Support -<br />
                Immediate Help
              </h2>
              <p className="text-white/90 mb-8">
                If you're experiencing thoughts of self-harm or suicide, 
                please reach out immediately.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Phone size={20} />
                  <div>
                    <div className="font-semibold">National Suicide Prevention Helpline:</div>
                    <div className="text-white/90">988</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Phone size={20} />
                  <div>
                    <div className="font-semibold">Vandrevala Foundation:</div>
                    <div className="text-white/90">9999666555</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Phone size={20} />
                  <div>
                    <div className="font-semibold">AASRA:</div>
                    <div className="text-white/90">9820466726</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Phone size={20} />
                  <div>
                    <div className="font-semibold">Sneha:</div>
                    <div className="text-white/90">9152987821</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Phone size={20} />
                  <div>
                    <div className="font-semibold">Emergency Services:</div>
                    <div className="text-white/90">112</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/9f27338d-fdc2-4433-a37b-553bddcd57a1.png" 
                alt="Crisis support illustration" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Support Section */}
      <section ref={mentalHealthRef} className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Mental Health Support
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Phone size={16} className="text-primary-foreground" />
                    </div>
                    <div className="font-semibold text-foreground">KIRAN Crisis Helpline</div>
                  </div>
                  <div className="text-sm text-muted-foreground">18005990019</div>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ExternalLink size={16} className="text-primary-foreground" />
                    </div>
                    <div className="font-semibold text-foreground">Mental Health Foundation</div>
                  </div>
                  <div className="text-sm text-muted-foreground">mentalhealth.org</div>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Phone size={16} className="text-primary-foreground" />
                    </div>
                    <div className="font-semibold text-foreground">Fortis Stress Helpline</div>
                  </div>
                  <div className="text-sm text-muted-foreground">8376804102</div>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ExternalLink size={16} className="text-primary-foreground" />
                    </div>
                    <div className="font-semibold text-foreground">Parivarthan Counselling</div>
                  </div>
                  <div className="text-sm text-muted-foreground">parivarthan.org</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/9f27338d-fdc2-4433-a37b-553bddcd57a1.png" 
                alt="Mental health support" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Men's Health Resources Section */}
      <section ref={mensHealthRef} className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Men's Health Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-background p-4 rounded-lg border shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-primary-foreground" />
                </div>
                <div className="font-semibold text-foreground">Men's Talks Helpline</div>
              </div>
              <div className="text-sm text-muted-foreground">menstalks.in</div>
            </div>
            
            <div className="bg-background p-4 rounded-lg border shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ExternalLink size={16} className="text-primary-foreground" />
                </div>
                <div className="font-semibold text-foreground">Sexual Health Counselling</div>
              </div>
              <div className="text-sm text-muted-foreground">9999666555</div>
            </div>
            
            <div className="bg-background p-4 rounded-lg border shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-primary-foreground" />
                </div>
                <div className="font-semibold text-foreground">Addiction Support</div>
              </div>
              <div className="text-sm text-muted-foreground">9001123008</div>
            </div>
            
            <div className="bg-background p-4 rounded-lg border shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ExternalLink size={16} className="text-primary-foreground" />
                </div>
                <div className="font-semibold text-foreground">Men's Health Hub</div>
              </div>
              <div className="text-sm text-muted-foreground">menshealth.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Blog Section */}
      <section ref={blogRef} className="py-16 px-6 bg-hero">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
              Our Blog
            </h2>
            <p className="text-hero-foreground/80 max-w-2xl mx-auto">
              Covering topics, evidence-based insights, real stories, 
              and practical tips for men's wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/9f27338d-fdc2-4433-a37b-553bddcd57a1.png" 
                alt="Man in wellness journey" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            
            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-hero-foreground/20">
              <div className="text-primary font-semibold mb-4">Be Ballsy</div>
              <h3 className="text-2xl font-bold text-hero-foreground mb-6">
                Stay tuned for:
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-hero-foreground/90">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Mental health awareness articles</span>
                </div>
                <div className="flex items-center gap-3 text-hero-foreground/90">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Physical wellness guides</span>
                </div>
                <div className="flex items-center gap-3 text-hero-foreground/90">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Relationship and intimacy advice</span>
                </div>
                <div className="flex items-center gap-3 text-hero-foreground/90">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Fatherhood resources</span>
                </div>
                <div className="flex items-center gap-3 text-hero-foreground/90">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Success stories from real men</span>
                </div>
                <div className="flex items-center gap-3 text-hero-foreground/90">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Expert interviews and insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remember Section */}
      <section ref={rememberRef} className="py-16 px-6 bg-gradient-to-r from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12 rounded-3xl border border-primary/20">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Remember:
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                You don't have to face life's challenges on your own. 
                These resources exist because you matter, and your 
                wellbeing matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="destructive" size="lg">
                  Get Immediate Help
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;