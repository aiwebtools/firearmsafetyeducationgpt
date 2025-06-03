
import React from "react";
import Button from "./Button";
import { Shield, Target, Info, ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20" role="banner">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyber-gold/20 rounded-full filter blur-[100px]" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyber-blue/20 rounded-full filter blur-[100px]" aria-hidden="true"></div>
      
      {/* 3D Bullets Animation (simple representation) */}
      <div className="absolute h-full w-full overflow-hidden" aria-hidden="true">
        {[...Array(5)].map((_, index) => (
          <div 
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
              animationDelay: `${index * 0.5}s`,
              transform: `rotate(${index * 45}deg)`
            }}
          >
            <div className="h-8 w-24 bg-cyber-gold rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <article className="flex flex-col items-center text-center max-w-5xl mx-auto animate-fade-in">
          {/* Hero Badge */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center gap-2 mb-4 md:mb-6">
            <div className="h-2 w-2 bg-cyber-gold rounded-full"></div>
            <span className="text-xs sm:text-sm font-medium text-cyber-text-secondary">Free AI Tools - Advanced AI-Powered Firearm Safety</span>
          </div>

          {/* Main Heading with SEO optimization */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
            Free <span className="text-cyber-gold">AI Tools</span> for Firearm Safety Education <br className="hidden md:block" />
            <span className="text-cyber-gold">Expert AI Instructor</span> by AIWEBTOOLS.AI
          </h1>

          {/* Subheading with keywords */}
          <h2 className="text-base sm:text-lg md:text-xl text-cyber-text-secondary max-w-3xl mb-6 md:mb-10">
            The best free AI web tools for comprehensive firearm safety education. Our advanced AI-powered instructor GPT provides detailed guidance on gun safety, 
            legal compliance, and responsible firearm ownership for enthusiasts of all experience levels.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
            <a 
              href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              aria-label="Launch Free Firearm Safety Education AI Tool"
            >
              <Button variant="primary" size="lg" withGlow className="w-full sm:w-auto text-sm sm:text-base">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                Launch Free AI Firearm Safety Instructor GPT
              </Button>
            </a>
            <button onClick={scrollToFeatures} className="w-full sm:w-auto" aria-label="Learn more about our free AI tools">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                <Info className="h-4 w-4 sm:h-5 sm:w-5" />
                Discover More Free AI Tools
              </Button>
            </button>
          </div>
          
          {/* Legal Disclaimer */}
          <aside className="text-[10px] sm:text-xs text-cyber-text-secondary/80 max-w-full sm:max-w-2xl mb-8 md:mb-12 bg-black/30 p-2 sm:p-3 rounded-md border border-cyber-gold/10">
            <p>
              <strong>Legal Notice:</strong> This free AI tool is for educational purposes only. Information provided does not constitute legal advice. 
              Users must comply with all applicable federal, state, and local laws regarding firearms. Always prioritize safety with our AI web tools.
            </p>
          </aside>

          {/* Featured Image with SEO alt text */}
          <figure className="relative glass-card rounded-xl p-3 sm:p-4 md:p-6 max-w-full mx-auto transform hover:scale-[1.01] transition-transform duration-300">
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-humanoid-shooting-a-gun-at-a-targ.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:27" 
              alt="Free AI Tools for Firearm Safety Education - AI-Powered Training by AIWEBTOOLS.AI" 
              className="w-full h-auto rounded-lg object-cover shadow-lg"
              style={{ aspectRatio: "2 / 1" }}
              loading="eager"
              width="600"
              height="300"
            />
            <figcaption className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-cyber-gold/90 text-black font-medium py-1 px-2 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm flex items-center gap-1 sm:gap-2 shadow-lg">
              <Target className="h-3 w-3 sm:h-4 sm:w-4" />
              Free AI-Powered Training Tools
            </figcaption>
          </figure>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
            <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-cyber-gold opacity-70" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
