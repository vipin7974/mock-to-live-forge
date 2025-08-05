import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TealGlow from "./ui/tealglow";

const ContactSection = () => {
  const titleRef = useScrollAnimation("animate-fade-in");
  const contentRef = useScrollAnimation(
    "animate-fade-in",
    0.1,
    "0px 0px -30px 0px"
  );

  return (
    <TealGlow className="bg-[#111111] text-white overflow-hidden py-20 px-6">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center text-hero-foreground mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-hero-foreground/80 max-w-2xl mx-auto">
            Take the first step towards improved wellness. Reach out to us for
            support or schedule your consultation today.
          </p>
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="text-hero-foreground">
            <h3 className="text-2xl font-bold mb-6">
              Get Confidential Support
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-1">
                  📞
                </div>
                <div>
                  <div className="font-bold">24/7 Helpline</div>
                  <div className="text-hero-foreground/80">+91-9876543210</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-1">
                  ✉️
                </div>
                <div>
                  <div className="font-bold">Email Support</div>
                  <div className="text-hero-foreground/80">
                    support@beballsy.com
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-1">
                  💬
                </div>
                <div>
                  <div className="font-bold">Live Chat</div>
                  <div className="text-hero-foreground/80">
                    Available Mon-Fri, 9 AM - 6 PM
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mt-1">
                  🏥
                </div>
                <div>
                  <div className="font-bold">Online Consultations</div>
                  <div className="text-hero-foreground/80">
                    Book appointments 24/7 through our portal
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-hero-foreground">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-background/20 border-hero-foreground/30 text-hero-foreground placeholder:text-hero-foreground/60"
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="bg-background/20 border-hero-foreground/30 text-hero-foreground placeholder:text-hero-foreground/60"
                />
              </div>
              <Input
                placeholder="Phone Number"
                className="bg-background/20 border-hero-foreground/30 text-hero-foreground placeholder:text-hero-foreground/60"
              />
              <Textarea
                placeholder="How can we help you today?"
                rows={5}
                className="bg-background/20 border-hero-foreground/30 text-hero-foreground placeholder:text-hero-foreground/60"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Confidential Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </TealGlow>
  );
};

export default ContactSection;
