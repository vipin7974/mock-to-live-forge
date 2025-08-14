import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import  heroImage from "@/assets/ourStory_hero_bg.jpg";
import the_silent_crisis from "@/assets/the_slient_crises_OS.jpg";
import our_story from "@/assets/our_mission_os.jpg";
import why_be_ballsy from "@/assets/why_be_ballsy_os.jpg";
import our_vision from "@/assets/our_vision_os.jpg"
import journey_ahead from "@/assets/the_jusrney_ahead_os.jpg"

const OurStory = () => {
  const heroRef = useScrollAnimation('animate-fade-in');
  const section1Ref = useScrollAnimation('animate-fade-in');
  const section2Ref = useScrollAnimation('animate-fade-in');
  const section3Ref = useScrollAnimation('animate-fade-in');
  const section4Ref = useScrollAnimation('animate-fade-in');
  const finalRef = useScrollAnimation('animate-fade-in');

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}

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
            Breaking the Silence,
              <br />
              <span className="text-primary">Building the Courage</span>
            </h1>
            <p className="text-2xl md:text-2xl mb-8 text-hero-foreground/90 max-w-3xl mx-auto">
            In a society where we're expected to be the pillars of strength, we often forget that even pillars need support. Be Ballsy was born from a simple yet powerful realization: Indian men deserve a safe space to speak up about their health, their struggles, and their dreams without judgment.
            </p>
          </div>
        </div>
      </section>

      {/* The Silent Crisis */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary/20 to-primary/15  xl:text-2xl lg:text-2xl md:text-xl text-sm">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div ref={section1Ref} className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              The Silent Crisis
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every day, millions of Indian men battle in silence. Depression masked as anger. Anxiety disguised as irritability. Physical health issues ignored until they become critical. Relationship problems swept under the rug. The cultural expectation to be the 'strong one' has created a generation of men who suffer alone.
            </p>
          </div>
          <div className="relative ">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50flex items-center justify-center">
              <img src={the_silent_crisis} className="w-full h-full object-cover scale-x-[-1] rounded-3xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      
      <section className="py-20 px-6 bg-muted/20 xl:text-2xl lg:text-2xl md:text-xl text-sm">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50flex items-center justify-center">
              <img src={our_story} className="w-full h-full object-cover scale-x-[-1] rounded-3xl"/>
            </div>
          </div>
          <div ref={section2Ref} className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe that real strength comes from acknowledging vulnerability. Be Ballsy is more than a wellness platform - it's a movement to redefine masculinity in India. We're here to help men understand that seeking help isn't weakness; it's the most courageous thing you can do.
            </p>
          </div>
        </div>
      </section>

      {/* Why "Be Ballsy"? */}


      <section className="py-20 px-6 bg-gradient-to-br from-secondary/20 to-primary/15 xl:text-2xl lg:text-2xl md:text-xl text-sm">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div ref={section1Ref} className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why "Be Ballsy"?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
            The name reflects our philosophy: having the guts to prioritize your wellbeing, the courage to seek help, and the strength to break free from societal expectations that harm your health. It's about being brave enough to choose yourself.
            </p>
          </div>
          <div className="relative ">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50flex items-center justify-center">
              <img src={why_be_ballsy} className="w-full h-full object-cover scale-x-[-1] rounded-3xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 px-6 bg-muted/20 xl:text-2xl lg:text-2xl md:text-xl text-sm">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50flex items-center justify-center">
              <img src={our_vision} className="w-full h-full object-cover scale-x-[-1] rounded-3xl"/>
            </div>
          </div>
          <div ref={section4Ref} className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision an India where every man feels empowered to speak openly about his health, where emotional intelligence and authentic wellness isn't a luxury but a fundamental right. Through culturally sensitive, evidence-based care, we're building a community where Indian men can thrive - mentally, physically, and emotionally.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey Ahead */}
      <section className="relative m-12 m-auto mb-10 rounded-3xl overflow-hidden max-h-[480px] h-[480px] flex items-center">
  {/* Background image */}
  <img
    src={journey_ahead}
    alt="Wellness Background"
    className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
  />
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />

  {/* Content */}
  <div className="relative z-10 w-full h-full flex items-center">
    <div className="max-w-2xl pl-10 pr-4 space-y-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-white">
        The Journey Ahead
      </h2>
      <p className="text-lg text-white/90 leading-relaxed">
        Every man who reaches out, every conversation started, every stigma broken – it all contributes to a larger change. 
        Join us in this mission. Because when men are healthy and happy, entire families and communities flourish.
      </p>
      <p className="text-lg italic text-white font-semibold">
        Be Ballsy. Be You. Be Well.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button className="bg-primary hover:bg-[#26B3AD] text-white px-8 py-3 rounded-md font-medium shadow-md">
          Begin Your Wellness Journey
        </button>
        <button className="bg-primary hover:bg-[#26B3AD] text-white px-8 py-3 rounded-md font-medium shadow-md flex items-center gap-2">
          Talk To Someone Now
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default OurStory;