import React from "react";

interface TealGlowProps {
  className?: string;
  children?: React.ReactNode;
}

const TealGlow: React.FC<TealGlowProps> = ({ className = "", children }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top-left glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#54C7BF]/50 blur-[160px] rounded-full z-0" />
      
      {/* Bottom-right glow */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#54C7BF]/50 blur-[200px] rounded-full z-0" />

      {/* Content that goes above the glow */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default TealGlow;
