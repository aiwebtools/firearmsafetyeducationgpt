
import React from "react";
import Button from "./Button";
import { Mail, Phone, ExternalLink } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyber-gold/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title inline-block relative after:left-1/2 after:-translate-x-1/2 mb-8 pb-4">
            Get in Touch
          </h2>
          <p className="text-cyber-text-secondary text-lg">
            Have questions about our AI tools or need assistance? We're here to help.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 md:p-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:4758008096" 
                  className="flex items-center gap-3 text-cyber-text-secondary hover:text-cyber-gold transition-colors group"
                >
                  <div className="bg-cyber-gold/10 rounded-full p-3 group-hover:bg-cyber-gold/20 transition-colors">
                    <Phone className="h-5 w-5 text-cyber-gold" />
                  </div>
                  <span className="text-lg">(475) 800-8096</span>
                </a>
                
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="flex items-center gap-3 text-cyber-text-secondary hover:text-cyber-gold transition-colors group"
                >
                  <div className="bg-cyber-gold/10 rounded-full p-3 group-hover:bg-cyber-gold/20 transition-colors">
                    <Mail className="h-5 w-5 text-cyber-gold" />
                  </div>
                  <span className="text-lg">Contact@ai-webtools.com</span>
                </a>
              </div>
              
              <div className="pt-6">
                <p className="text-cyber-text-secondary mb-4">
                  Explore our full range of AI-powered tools designed to enhance safety, education, and productivity.
                </p>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="primary" 
                    className="flex items-center gap-2"
                    withGlow
                  >
                    Discover More AI Tools
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-xl p-1 bg-gradient-to-br from-cyber-gold/30 to-cyber-blue/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-gold/20 to-cyber-blue/20 rounded-xl blur-xl"></div>
                <div className="relative h-full w-full bg-cyber-background rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <h4 className="text-xl font-heading font-semibold text-white mb-4">Try Our AI Assistant</h4>
                    <p className="text-cyber-text-secondary mb-6">
                      Experience comprehensive firearm safety education with our AI-powered assistant.
                    </p>
                    <a 
                      href="https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button variant="outline" className="w-full text-sm md:text-base">
                        Launch Firearm Safety Education Instructor GPT
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
