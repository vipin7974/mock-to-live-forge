import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";

const ReachOut = () => {
  const heroRef = useScrollAnimation("animate-fade-in");
  const formRef = useScrollAnimation("animate-fade-in", 0.1);
  const whyRef = useScrollAnimation("animate-fade-in", 0.1);
  const servicesRef = useScrollAnimation("animate-fade-in", 0.1);
  const expectRef = useScrollAnimation("animate-fade-in", 0.1);
  const ctaRef = useScrollAnimation("animate-fade-in", 0.1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="bg-[#2A2A2A] text-white pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                We're Here to Help<br />
                You Help Yourself
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Taking the first step toward wellness can feel overwhelming, but you don't have to do it alone. At Be Ballsy, we'll connect you with healthcare providers. We're your partners in building a healthier, happier life.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img 
                  src="/lovable-uploads/01810712-5a05-465f-bb44-880cdceb9990.png" 
                  alt="Happy man on phone" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="bg-gradient-to-b from-primary/5 to-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/src/assets/doctor-portrait.jpg" 
                alt="Professional counselor" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <Input
                  placeholder="First Name"
                  className="h-12 text-lg"
                />
                <Input
                  placeholder="Email address"
                  type="email"
                  className="h-12 text-lg"
                />
                <Input
                  placeholder="Phone Number(Optional)"
                  className="h-12 text-lg"
                />
                <Input
                  placeholder="Subject"
                  className="h-12 text-lg"
                />
                <Textarea
                  placeholder="What would you like us to know?"
                  rows={4}
                  className="text-lg resize-none"
                />
                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1.5" />
                  <p className="text-sm text-gray-600">
                    By submitting, you give us permission to call you by your name and contact you using the information you provided. Message and data rates may apply.
                  </p>
                </div>
                <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reach Out Section */}
      <section ref={whyRef} className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Reach Out?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every conversation starts with you. Whether you're dealing with stress, relationship issues, 
            health concerns, or simply want to optimize your wellbeing, reaching out is the first step 
            toward positive change. We're here to listen, understand, and guide you forward so that you 
            won't feel alone any unique situation.
          </p>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section ref={servicesRef} className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How We Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-bold mb-3">Confidential Consultations</h3>
                <p className="text-sm text-gray-600">
                  Fully private conversations where we listen without judgment and offer care with utmost confidentiality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-bold mb-3">Personalized Wellness Plans</h3>
                <p className="text-sm text-gray-600">
                  Tailored approaches that fit your lifestyle and goals, whether they align with your unique preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-bold mb-3">Ongoing Support</h3>
                <p className="text-sm text-gray-600">
                  We're with you every step of the wellness journey, providing ongoing support and guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-bold mb-3">Family Guidance</h3>
                <p className="text-sm text-gray-600">
                  Support for involving your family in your wellness and healing journey when appropriate.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-bold mb-3">Crisis Support</h3>
                <p className="text-sm text-gray-600">
                  Immediate help when you need it most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section ref={expectRef} className="py-20 px-6 bg-[#2A2A2A] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
              <p className="text-lg mb-8 text-white/80">
                When you reach out, you'll speak with trained professionals who understand men's health and the unique challenges they face. Our approach is:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold mb-2">Non-judgmental:</h4>
                    <p className="text-white/80">No shame, no blame, just support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold mb-2">Culturally Sensitive:</h4>
                    <p className="text-white/80">We understand cultural factors that affect well-being</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold mb-2">Solution-Focused:</h4>
                    <p className="text-white/80">Practical help that fits your real life</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold mb-2">Confidential:</h4>
                    <p className="text-white/80">Your privacy is absolutely protected</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Call Us (Your Phone Number)</h4>
                    <p className="text-white/80">Available Monday-Sunday, 9 AM - 5 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Email Us (Your Email)</h4>
                    <p className="text-white/80">Confidential text interactions within 24 hours. Detailed consultations available.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">WhatsApp: (Your WhatsApp Number)</h4>
                    <p className="text-white/80">Quick support and appointment scheduling available Monday-Friday, 9 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/src/assets/wellness-journey.jpg')"
          }}
        ></div>
        <div className="relative container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Remember:</h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Your wellbeing matters. Your mental health matters. Your happiness matters. Reaching out isn't about being weak.
          </p>
          <p className="text-2xl font-bold mb-8 text-primary">
            Because every man deserves to thrive.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReachOut;