import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Breaking the Silence,<br />
              <span className="text-primary">Building the Courage</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In a society where we're expected to be the pillars of strength, we often forget that even pillars need support. Be Ballsy was born from a simple yet powerful realization: Indian men deserve a safe space to speak up about their health, their struggles, and their dreams without judgment.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl flex items-center justify-center">
              <div className="text-6xl">🧔🏻</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Silent Crisis */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              The Silent Crisis
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every day, millions of Indian men battle in silence. Depression masked as anger. Anxiety disguised as irritability. Physical health issues ignored until they become critical. Relationship problems swept under the rug. The cultural expectation to be the 'strong one' has created a generation of men who suffer alone.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center">
              <div className="text-5xl">😔</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="text-5xl">🎯</div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
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
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why "Be Ballsy"?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The name reflects our philosophy: having the guts to prioritize your wellbeing, the courage to seek help, and the strength to break free from societal expectations that harm your health. It's about being brave enough to choose yourself.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-accent/30 to-primary/20 rounded-2xl flex items-center justify-center">
              <div className="text-6xl font-bold text-primary">BALANCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center">
              <div className="text-5xl">👥</div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
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
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center space-y-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              The Journey Ahead
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every man who reaches out, every conversation started, every stigma broken - it all contributes to a larger change. Join us in this mission. Because when men are healthy and happy, entire families and communities flourish.
            </p>
            <p className="text-xl font-semibold text-primary">
              Be Ballsy. Be You. Be Well.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium"
            >
              Begin Your Wellness Journey
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 rounded-full font-medium"
            >
              Talk To Someone Now →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;