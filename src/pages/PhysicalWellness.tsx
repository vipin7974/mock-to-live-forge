import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PhysicalWellness = () => {
  const heroRef = useScrollAnimation();
  const understandingRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const approachRef = useScrollAnimation();
  const helpRef = useScrollAnimation();
  const startedRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(180,45%,85%)] to-[hsl(180,35%,75%)] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive Physical<br />
            Health for Indian Men
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover holistic wellness solutions designed specifically for Indian men's health needs. From fitness guidance to nutrition counseling, we provide comprehensive support for your physical wellbeing journey.
          </p>
          <Button className="bg-[#54C7BF] hover:bg-[#54C7BF]/90 text-black font-semibold px-8 py-3 rounded-lg text-lg">
            Start Your Health Journey
          </Button>
        </div>
        
        {/* Background illustration */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20">
          <div className="w-96 h-96 bg-white/10 rounded-full flex items-center justify-center">
            <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Men's Physical Health */}
      <section ref={understandingRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Understanding Men's<br />
                Physical Health
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Men's physical health encompasses a broad range of factors, from cardiovascular fitness and muscle strength to hormonal balance and metabolic health. Our approach addresses the unique physiological needs of Indian men.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that cultural, dietary, and lifestyle factors play crucial roles in men's health outcomes. Our specialized programs are designed to work within your cultural context while promoting optimal health.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/9f27338d-fdc2-4433-a37b-553bddcd57a1.png" 
                alt="Understanding Men's Physical Health" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialized Services */}
      <section ref={servicesRef} className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Specialized Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#54C7BF] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM9 6a9 9 0 0 1 11 11.5A9 9 0 0 1 9 6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Health Screening</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Full body health assessment</li>
                  <li>• Blood work and biomarker analysis</li>
                  <li>• Cardiovascular health evaluation</li>
                  <li>• Hormonal balance testing</li>
                  <li>• Nutritional deficiency screening</li>
                  <li>• Metabolic health assessment</li>
                  <li>• Risk factor identification</li>
                </ul>
                <Button className="w-full mt-6 bg-[#54C7BF] hover:bg-[#54C7BF]/90 text-black font-semibold">
                  Book Screening
                </Button>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#54C7BF] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Fitness Programs</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Customized workout plans</li>
                  <li>• Strength training protocols</li>
                  <li>• Cardiovascular fitness programs</li>
                  <li>• Flexibility and mobility work</li>
                  <li>• Sports-specific training</li>
                  <li>• Home workout alternatives</li>
                  <li>• Progress tracking and adjustments</li>
                </ul>
                <Button className="w-full mt-6 bg-[#54C7BF] hover:bg-[#54C7BF]/90 text-black font-semibold">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#54C7BF] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Nutrition & Lifestyle Coaching</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Personalized meal planning</li>
                  <li>• Indian cuisine optimization</li>
                  <li>• Weight management strategies</li>
                  <li>• Supplement recommendations</li>
                  <li>• Hydration protocols</li>
                  <li>• Sleep optimization</li>
                  <li>• Stress management techniques</li>
                </ul>
                <Button className="w-full mt-6 bg-[#54C7BF] hover:bg-[#54C7BF]/90 text-black font-semibold">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={approachRef} className="py-20 bg-gradient-to-br from-[hsl(180,45%,95%)] to-[hsl(180,35%,85%)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Approach
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Culturally Informed Therapy</h3>
                  <p className="text-gray-700">Our therapists understand the unique cultural context of Indian families and incorporate culturally sensitive approaches into treatment plans.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Based Treatment</h3>
                  <p className="text-gray-700">We use proven therapeutic methods including Cognitive Behavioral Therapy (CBT), mindfulness practices, and other evidence-based interventions.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Wellness</h3>
                  <p className="text-gray-700">Our approach integrates mental health with physical wellness, recognizing the interconnected nature of mind and body health.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Care</h3>
                  <p className="text-gray-700">Every treatment plan is tailored to individual needs, taking into account personal history, cultural background, and specific health goals.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/6635e4f0-e480-4c9a-b96a-6dbdcc0277c8.png" 
                alt="Our Approach to Physical Wellness" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section ref={helpRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/0812f20c-fba7-424a-9cee-3aa79cf852f9.png" 
                alt="When to Seek Help" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                When to Seek Help
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#54C7BF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Persistent fatigue or low energy levels</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#54C7BF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Chronic stress or anxiety</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#54C7BF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Sleep disturbances or insomnia</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#54C7BF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Unexplained weight changes</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#54C7BF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Digestive issues or changes in appetite</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#54C7BF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Loss of motivation for activities you once enjoyed</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#54C7BF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Decreased physical performance or endurance</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#54C7BF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Concerns about aging and health maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section ref={startedRef} className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Getting Started
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step towards optimal physical health. Our comprehensive assessment will help us understand your unique needs and create a personalized wellness plan that fits your lifestyle and goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#54C7BF] hover:bg-[#54C7BF]/90 text-black font-semibold px-8 py-3 text-lg">
              Book Physical Health Consultation →
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
              Download Health Assessment
            </Button>
          </div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/01810712-5a05-465f-bb44-880cdceb9990.png" 
            alt="Getting Started Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhysicalWellness;