
import React, { useState, useEffect } from "react";
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cyber-background/90 backdrop-blur-md py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <Logo textSize="text-lg md:text-xl" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-text-primary hover:text-cyber-gold transition-colors"
          >
            Home
          </a>
          <a 
            href="#faq" 
            className="text-cyber-text-primary hover:text-cyber-gold transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-cyber-text-primary hover:text-cyber-gold transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-text-primary hover:text-cyber-gold transition-colors"
          >
            <Button variant="primary" size="sm" withGlow className="flex items-center gap-2">
              Launch Firearm Safety Education Instructor GPT
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-text-primary hover:text-cyber-gold transition-colors"
          >
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              More AI Tools
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-cyber-background backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center gap-8 p-8">
          <a 
            href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-cyber-text-primary hover:text-cyber-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#faq" 
            className="text-xl text-cyber-text-primary hover:text-cyber-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-xl text-cyber-text-primary hover:text-cyber-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Disclaimer
          </a>
          <a 
            href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-cyber-text-primary hover:text-cyber-gold transition-colors mb-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button variant="primary" size="md" withGlow className="flex items-center gap-2">
              Launch Firearm Safety Education Instructor GPT
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-cyber-text-primary hover:text-cyber-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button variant="outline" size="md" className="flex items-center gap-2">
              More AI Tools
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
