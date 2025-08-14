import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, ExternalLink, HeartHandshake } from "lucide-react";
import resources_bg from "@/assets/resources_bg.jpg";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import TealGlow from "@/components/ui/tealglow";
import crisis_rs from "@/assets/crisis_rs.jpg"; 
import mental_health from "@/assets/mental_health_rs.jpg";
import our_blog from "@/assets/stay_tune_rs.jpg";
import remember from "@/assets/remember_rs.jpg";

const Resources = () => {
  const heroRef = useScrollAnimation();
  const crisisRef = useScrollAnimation();
  const mentalHealthRef = useStaggeredAnimation(100);
  const mensHealthRef = useStaggeredAnimation(100);
  const blogRef = useScrollAnimation();
  const rememberRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-destructive">
        <TealGlow
          ref={heroRef}
          className="py-20 px-6 bg-[#111111] text-white rounded-b-3xl"
        >
          {" "}
          <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Wellness
                  <br />
                  Support Network
                </h1>
                <p className="text-lg text-muted mb-8">
                  We believe that help should always be within reach. Whether
                  you're facing a crisis or simply need guidance, these
                  resources are here for you 24/7.
                </p>
              </div>
              <div className="relative">
                <img
                  src={resources_bg}
                  alt="Man working on laptop"
                  className="rounded-2xl w-full object-cover h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-transparent rounded-2xl z-0" />
              </div>
            </div>
          </div>
        </TealGlow>

        {/* Crisis Support Section */}
        <section ref={crisisRef} className="py-16 px-6 bg-destructive">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* LEFT TEXT CONTENT */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
                  Crisis Support - Immediate Help
                </h2>
                <p className="text-white/90 mb-8 max-w-lg">
                  If you're experiencing thoughts of self-harm or suicide,
                  please reach out immediately:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      label: "National Suicide Prevention Helpline",
                      phone: "9152987821",
                    },
                    { label: "Vandrevala Foundation", phone: "9999666555" },
                    { label: "AASRA", phone: "9820466726" },
                    { label: "iCall", phone: "9152987821" },
                    { label: "Emergency Services", phone: "112" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white">
                      <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.label}:</div>
                        <div className="text-white/90">{item.phone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <img
                  src={crisis_rs}
                  alt="Crisis support illustration"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section ref={mentalHealthRef} className="py-16 px-6 bg-white">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* LEFT COLUMN */}
      <div className="space-y-12">
        
        {/* Mental Health Support */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Mental Health Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mann Talks Helpline */}
            <div className="bg-teal-50 p-4 rounded-lg flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-black">Mann Talks Helpline:</div>
                <div className="text-sm text-black">8686139139</div>
              </div>
            </div>

            {/* Mental Health Foundation */}
            <div className="bg-teal-50 p-4 rounded-lg flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-black">Mental Health Foundation:</div>
                <div className="text-sm text-black">9869152602</div>
              </div>
            </div>

            {/* Fortis Stress Helpline */}
            <div className="bg-teal-50 p-4 rounded-lg flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <a href="tel:8376804102" className="font-semibold text-black underline">
                  Fortis Stress Helpline:
                </a>
                <div className="text-sm text-black">8376804102</div>
              </div>
            </div>

            {/* Parivarthan Counseling */}
            <div className="bg-teal-50 p-4 rounded-lg flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-black">Parivarthan Counseling:</div>
                <div className="text-sm text-black">7676602602</div>
              </div>
            </div>
          </div>
        </div>

        {/* Men's Health Resources (below mental health) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Men's Health Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mann Talks Helpline */}
            <div className="bg-teal-50 p-4 rounded-lg flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-black">Mann Talks Helpline:</div>
                <div className="text-sm text-black">8686139139</div>
              </div>
            </div>

            {/* Sexual Health Counseling */}
            <div className="bg-teal-50 p-4 rounded-lg flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-black">Sexual Health Counseling:</div>
                <div className="text-sm text-black">9999666555</div>
              </div>
            </div>

            {/* Addiction Support */}
            <div className="bg-teal-50 p-4 rounded-lg flex items-start gap-3">
              <div className="w-8 h-8  bg-teal-500  rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-black">Addiction Support:</div>
                <div className="text-sm text-black">1800-11-0031</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN - Tall Image */}
      <div className="relative">
        <img
          src={mental_health}
          alt="Mental health support"
          className="rounded-2xl w-full object-cover h-full min-h-[500px]"
        />
      </div>
    </div>
  </div>
</section>



      {/* Our Blog Section */}
      <TealGlow className="bg-[#0F1E1A] py-20 px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our Blog
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
          Covering topics, evidence-based insights, real stories, and
          practical tips for men's wellness
          </p>
        </div>

        {/* Content */}
        <div
  ref={blogRef}
  className="flex flex-col lg:flex-row bg-[#101C1A] rounded-[40px] overflow-hidden shadow-xl"
>
  {/* Left - Image */}
  <div className="flex-1 bg-black/40 z-0">
    <img
      src={our_blog}
      alt="Smiling man"
      className="w-full h-full object-cover "
    />
  </div> 

  {/* Right - Text content */}
  <div className="flex-1 px-6 py-10 md:p-12 lg:p-16 flex flex-col justify-center">
    <div>
      <div className="text-teal-400 font-semibold mb-4">Be Ballsy</div>
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
        Stay tuned for:
      </h3>

      <div className="space-y-4">
        {[
          "Mental health awareness articles",
          "Physical wellness guides",
          "Relationship and intimacy advice",
          "Fatherhood resources",
          "Success stories from real men",
          "Expert interviews and insights",
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-white/80"
          >
            <HeartHandshake size={20} className="text-teal-400" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>
    </TealGlow>


      {/* Remember Section */}

      <section
  ref={rememberRef}
  className="relative w-full py-20 px-4"
  style={{
    background: "linear-gradient(to right, white, #c7f4f0)",
  }}
>
  <div className="max-w-5/6 mx-auto ">
    {/* Card with image background */}
    <div className="relative rounded-3xl overflow-hidden shadow-lg overflow-hidden max-h-[480px] h-[480px] flex items-center">
      {/* Background image */}
      <img
        src={remember}
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
            Seeking help is a sign of strength, not weakness. These resources
            exist because you matter, and your wellbeing matters.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md text-base shadow-md transition-colors">
              Get Immediate Help
            </button>
            <button className="bg-teal-400 hover:bg-teal-500 text-black font-semibold px-6 py-3 rounded-md text-base shadow-md flex items-center gap-2 transition-colors">
              Schedule Consultation
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default Resources;
