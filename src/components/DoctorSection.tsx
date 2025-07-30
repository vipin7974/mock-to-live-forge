import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import doctorImage from "@/assets/doctor-portrait.jpg";

const DoctorSection = () => {
  const sectionRef = useScrollAnimation('animate-fade-in');

  return (
    <section className="bg-hero py-20 px-6">
      <div className="container mx-auto">
        <div ref={sectionRef} className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src={doctorImage} 
              alt="Healthcare professional" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-primary font-bold text-lg">Be Ballsy</div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-hero-foreground">
                Expert Care from Certified Professionals
              </h2>
              <p className="text-hero-foreground/80 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim 
                mi sed lorem interdum fermentum. Nullam rutrum ipsum sit amet mi 
                pellentesque, quis tempor elit ullamcorper.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  ▶
                </button>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                  ⏸
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;