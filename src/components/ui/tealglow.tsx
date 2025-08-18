import React from "react";

interface TealGlowProps {
  className?: string;
  children?: React.ReactNode;
  ref?: any;
}

const TealGlow: React.FC<TealGlowProps> = ({ className = "", children, ref }) => {
  return (
    <div className={`relative overflow-hidden ${className}`} ref={ref}>
      {/* Top-left glow */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#54C7BF]/50 blur-[160px] rounded-full z-0 pointer-events-none" />
      
      {/* Bottom-right glow */}
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[#54C7BF]/50 blur-[200px] rounded-full z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default TealGlow;
