
import React, { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Menu, X, ExternalLink } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cyber-background/90 backdrop-blur-md py-2 sm:py-3 shadow-lg" : "py-3 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105 max-w-[65%] sm:max-w-none"
        >
          <Logo textSize="text-sm sm:text-lg md:text-xl" mobileCompact={true} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a 
            href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-text-primary hover:text-cyber-gold transition-colors text-sm xl:text-base"
          >
            Home
          </a>
          <a 
            href="#faq" 
            className="text-cyber-text-primary hover:text-cyber-gold transition-colors text-sm xl:text-base"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-cyber-text-primary hover:text-cyber-gold transition-colors text-sm xl:text-base"
          >
            Disclaimer
          </a>
          <a 
            href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="sm" withGlow className="flex items-center gap-2 text-xs xl:text-sm whitespace-nowrap">
              Launch GPT
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs xl:text-sm whitespace-nowrap">
              More AI Tools
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none p-2 -mr-2 touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      <nav 
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-cyber-background border-l border-white/10 transform transition-transform duration-200 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button 
              className="text-white p-2 touch-manipulation"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 pb-safe">
            <a 
              href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-cyber-text-primary hover:text-cyber-gold transition-colors active:scale-95"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a 
              href="#faq" 
              className="text-lg text-cyber-text-primary hover:text-cyber-gold transition-colors active:scale-95"
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-lg text-cyber-text-primary hover:text-cyber-gold transition-colors active:scale-95"
              onClick={closeMobileMenu}
            >
              Disclaimer
            </a>
            <a 
              href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs"
              onClick={closeMobileMenu}
            >
              <Button variant="primary" size="md" withGlow className="flex items-center justify-center gap-2 w-full">
                Launch GPT
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs"
              onClick={closeMobileMenu}
            >
              <Button variant="outline" size="md" className="flex items-center justify-center gap-2 w-full">
                More AI Tools
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
