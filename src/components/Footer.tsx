
import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-background-alt border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4">
          <a 
            href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo />
          </a>
          <p className="text-cyber-text-secondary mt-2 max-w-sm">
            Your comprehensive, safety-focused AI assistant for all firearm-related education, compliance, and training.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-heading font-semibold text-white mb-4">Quick Links</h3>
          <a 
            href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-text-secondary hover:text-cyber-gold transition-colors"
          >
            Firearm Safety Education Instructor GPT
          </a>
          <a 
            href="#faq" 
            className="text-cyber-text-secondary hover:text-cyber-gold transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-cyber-text-secondary hover:text-cyber-gold transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-text-secondary hover:text-cyber-gold transition-colors"
          >
            More AI Tools
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-heading font-semibold text-white mb-4">Contact Us</h3>
          <a 
            href="tel:4758008096" 
            className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-gold transition-colors"
          >
            <Phone className="h-4 w-4" />
            (475) 800-8096
          </a>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-gold transition-colors"
          >
            <Mail className="h-4 w-4" />
            Contact@ai-webtools.com
          </a>
          <div className="mt-6">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="rounded-full flex items-center gap-2"
              >
                More AI Tools
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-4 text-sm text-cyber-text-secondary">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="hover:text-cyber-gold transition-colors"
            >
              Privacy Policy
            </a>
            <span className="hidden md:inline">|</span>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank"
              rel="noopener noreferrer" 
              className="hover:text-cyber-gold transition-colors"
            >
              Terms of Service
            </a>
          </div>
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-cyber-text-secondary hover:text-cyber-gold transition-colors"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
