"use client";

import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import doctorImage from "@/assets/doctor-portrait.jpg";
import TealGlow from "./ui/tealglow";
import Dr_Iftekhar_Khan from '@/assets/dr_iftekhar.jpg';
import dr_divyanshi_garg from '@/assets/dr_divanshiGarg.jpg'
import dr_apoorve_gupta from '@/assets/dr_aprrovegupta.jpg'

const cards = [
  {
    id: 1,
    title: "Dr. Iftekhar Khan",
    subtitle: "Dermatologist & Hair Transplant Specialist",
    description:
      'Dr. Iftekhar Khan is an expert in dermatology and hair restoration, offering advanced solutions for a wide range of hair and skin concerns. His approach blends medical expertise with a commitment to patient confidentiality and personalized care.Be Ballsy collaborates with Dr. Khan to provide accessible, professional guidance and treatments that support optimal skin and hair health for the platform’s users.',
    image: Dr_Iftekhar_Khan,
  },
  {
    id: 2,
    title: "Dr. Apoorv Gupta",
    subtitle: "Dr. Apoorv Gupta",
    description:
      "Dr. Apoorv Gupta is a leading surgeon proficient in both conventional and minimally invasive procedures, addressing everything from abdominal to critical surgical needs. He is also dedicated to medical education and ongoing research.Be Ballsy leverages Dr. Gupta’s skills to ensure prompt, expert surgical advice and support for individuals seeking trusted information or referrals for physical health concerns.",
    image: dr_apoorve_gupta,
  },
  {
    id: 3,
    title: "Dr. Divyanshi Garg",
    subtitle: "Clinical Psychologist & Mindfulness Expert",
    description:
      "Dr. Divyanshi Garg is a clinical psychologist and mindfulness coach with vast experience in individual therapy, group counseling, and mental well-being strategies. She specializes in evidence-based and holistic approaches to psychological health.Be Ballsy partners with Dr. Garg to offer psychological support, mindfulness coaching, and mental wellness tools that foster growth and resilience within the community.",
    image: dr_divyanshi_garg,
  },
];
const DoctorSection = () => {
  const sectionRef = useScrollAnimation("animate-fade-in");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setFade(true);
    }, 300); // fade-out duration
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setFade(true);
    }, 300);
  };

  // Autoplay effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // 4 seconds per slide
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, currentIndex]);

  const currentCard = cards[currentIndex];

  return (
    <TealGlow
      className="bg-[#0F1E1A] py-20 px-4 md:px-8 lg:px-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
          Doctor Info: 
          </h2>
          {/* <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Massa imperdiet in orci ante tristique
            sollicitudin rhoncus eget facilisi. Ac leo tristique sed lectus. Adipiscing tortor ut
            odio enim eget.
          </p> */}
        </div>

        {/* Carousel Card */}
        <div
          ref={sectionRef}
          className="flex flex-col lg:flex-row bg-[#101C1A] rounded-[40px] overflow-hidden shadow-xl"
        >
          {/* Left - Image */}
          <div
            className={`flex-1 bg-black flex items-center justify-center min-h-[400px] lg:min-h-[450px] transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={currentCard.image}
              alt={currentCard.title}
              className="max-h-[450px] w-auto object-contain"
            />
          </div>

          {/* Right - Text content */}
          <div
            className={`flex-1 px-6 py-10 md:p-12 lg:p-16 bg-gradient-to-br from-white/5 to-white/0 flex flex-col justify-between transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <p className="text-[#5EEAD4] font-semibold mb-2">
                Be <span className="font-bold">Ballsy</span>
              </p>
              <h3 className="text-3xl font-bold text-[#5EEAD4] mb-2">
                {currentCard.title}
              </h3>
              <h4 className="italic text-white text-lg mb-6">
                {currentCard.subtitle}
              </h4>
              <p className="text-white/70 leading-relaxed">
                {currentCard.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-10">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </TealGlow>
  );
};

export default DoctorSection;

