import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MessageCircle, Calendar, Ear, HeartHandshake, Lightbulb, Handshake } from "lucide-react";
import TealGlow from "@/components/ui/tealglow";
import reachout_bg from "@/assets/react_out_bg.jpg"
import message_us from "@/assets/send_msg_ro.jpg"
import starPentagon from "@/assets/Star 1.png";
import remember_rou from "@/assets/remember_ROU.jpg";

const ReachOut = () => {
  const heroRef = useScrollAnimation("animate-fade-in");
  const formRef = useScrollAnimation("animate-fade-in", 0.1);
  const whyRef = useScrollAnimation("animate-fade-in", 0.1);
  const servicesRef = useScrollAnimation("animate-fade-in", 0.1);
  const expectRef = useScrollAnimation("animate-fade-in", 0.1);
  const ctaRef = useScrollAnimation("animate-fade-in", 0.1);

  const pillars = [
    {
      icon: <Ear className="w-8 h-8" />,
      title: "Personalized Wellness Plans",
      description:
        "Tailored approaches that fit your lifestyle and goals, whether they align with your unique preferences.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Confidential Consultations",
      description:
        " Fully private conversations where we listen without judgment and offer care with utmost confidentiality.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Ongoing Support",
      description:
        "We're with you every step of the wellness journey, providing ongoing support and guidance.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Family Guidance",
      description:
        "Support for involving your family in your wellness and healing journey when appropriate.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Crisis Support",
      description:
        "Immediate help when you need it most.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <TealGlow
          ref={heroRef}
          className="py-20 px-6 bg-[#111111] text-white rounded-b-3xl"
        >
          {" "}
          <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We're Here to Help<br />
                You Help Yourself
                </h1>
                <p className="text-lg text-muted mb-8">
                Taking the first step toward wellness can feel overwhelming, but you don't have to do it alone. At Be Ballsy, we'll connect you with healthcare providers. We're your partners in building a healthier, happier life.
                </p>
              </div>
              <div className="relative">
                <img
                  src={reachout_bg}
                  alt="Man working on laptop"
                  className="rounded-2xl w-full object-cover h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-transparent rounded-2xl z-0" />
              </div>
            </div>
          </div>
        </TealGlow>

      {/* Contact Form Section */}
      <section ref={formRef} className="bg-gradient-to-b from-primary/5 to-white py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={message_us} 
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
      <section className="py-16 bg-gradient-to-br from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div
            ref={whyRef}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Reach Out?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every conversation starts with you. Whether you're dealing with stress, relationship issues, 
            health concerns, or simply want to optimize your wellbeing, reaching out is the first step 
            toward positive change. We're here to listen, understand, and guide you forward so that you 
            won't feel alone any unique situation.
            </p>
            <h2 className="text-2xl md:text-2xl mt-5 text-gray-900">
            How We Can Help You
            </h2>
          </div>

          {/* Pillar Cards - insert grid here */}
          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-5"
          >
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-md pt-12 px-4 pb-6 text-center"
              >
                {/* 🟢 Pentagon Image Positioned on Top Center */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16">
                  <img
                    src={starPentagon}
                    alt="icon shape"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-primary">
                    {pillar.icon}
                  </div>
                </div>

                {/* 📄 Card Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm">{pillar.description}</p>
              </div>
            ))}
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

      <section
  ref={ctaRef}
  className="relative w-full py-20 px-4"
  style={{
    background: "linear-gradient(to right,#c7f4f0, white)",
  }}
>
  <div className="max-w-5/6 mx-auto ">
    {/* Card with image background */}
    <div className="relative rounded-3xl overflow-hidden shadow-lg overflow-hidden max-h-[480px] h-[480px] flex items-center">
      {/* Background image */}
      <img
        src={remember_rou}
        alt="Wellness Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay on image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />

      {/* Card content */}
      <div className="relative z-10 w-full h-full flex items-center px-6 py-8 md:px-10 md:py-12">
        <div className="max-w-lg space-y-5">
          <h2 className="text-4xl font-bold text-white">Remember:</h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
          Your wellbeing matters. Your mental health matters. Your happiness matters. Reaching out isn't about being weak.
          </p>
          <p className="text-2xl font-bold mb-8 text-primary">
            Because every man deserves to thrive.
          </p>
          {/* Buttons */}
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
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default ReachOut;