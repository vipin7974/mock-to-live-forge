"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import doctorImage from "@/assets/doctor-portrait.jpg";
import TealGlow from "./ui/tealglow";

const DoctorSection = () => {
  const sectionRef = useScrollAnimation("animate-fade-in");

  return (
    <TealGlow className="bg-[#0F1E1A] py-20 px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Lorem ipsum in arcu
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Massa imperdiet in orci ante tristique
            sollicitudin rhoncus eget facilisi. Ac leo tristique sed lectus. Adipiscing tortor ut
            odio enim eget.
          </p>
        </div>

        {/* Content */}
        <div ref={sectionRef} className="flex flex-col lg:flex-row bg-[#101C1A] rounded-[40px] overflow-hidden shadow-xl">
          {/* Left - Image */}
          <div className="flex-1">
            <img
              src={doctorImage}
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Text content */}
          <div className="flex-1 px-6 py-10 md:p-12 lg:p-16 bg-gradient-to-br from-white/5 to-white/0 flex flex-col justify-between">
            <div>
              <p className="text-[#5EEAD4] font-semibold mb-2">
                Be <span className="font-bold">Ballsy</span>
              </p>
              <h3 className="text-3xl font-bold text-[#5EEAD4] mb-2">
                Lorem ipsum odio
              </h3>
              <h4 className="italic text-white text-lg mb-6">
                Lorem ipsum nunc ultrices
              </h4>
              <p className="text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Diam in enim velit sagittis porttitor.
                Eleifend amet dictum pulvinar dapibus pharetra lacus blandit enim. Condimentum
                maecenas duis aliquet nulla in orci habitasse etiam porttitor.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-10">
              <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
                ←
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
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
