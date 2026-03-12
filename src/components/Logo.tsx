
import React from "react";
import { Shield } from "lucide-react";

interface LogoProps {
  className?: string;
  textSize?: string;
  mobileCompact?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  textSize = "text-xl",
  mobileCompact = false 
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Shield 
          className="h-8 w-8 text-cyber-gold" 
          fill="rgba(255, 215, 0, 0.2)" 
          strokeWidth={1.5} 
        />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-blue rounded-full animate-pulse-glow" />
      </div>
      <div className="flex flex-col">
        <span className={`font-heading font-bold tracking-tight ${textSize} text-white ${mobileCompact ? 'hidden xs:inline' : ''}`}>
          Firearm Safety Education Instructor GPT
        </span>
        <span className={`text-xs text-cyber-text-secondary font-medium ${mobileCompact ? 'hidden xs:inline' : ''}`}>
          Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-cyber-gold hover:underline transition-all">AiWebTools.Ai</a>
        </span>
      </div>
    </div>
  );
};

export default Logo;
