
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  withGlow?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  withGlow = false,
  className,
  children,
  ...props
}) => {
  const baseClasses = "relative font-medium rounded-md transition-all duration-300 active:translate-y-1 flex items-center justify-center gap-2";
  
  const variantClasses = {
    primary: "bg-cyber-gold text-black hover:bg-cyber-gold-hover",
    secondary: "bg-cyber-blue text-white hover:bg-cyber-blue-hover",
    outline: "bg-transparent border border-cyber-gold/60 text-cyber-gold hover:border-cyber-gold hover:bg-cyber-gold/10",
  };
  
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };
  
  const glowClasses = withGlow ? "hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]" : "";

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        glowClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
