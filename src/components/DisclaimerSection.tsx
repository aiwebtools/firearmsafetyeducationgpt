
import React from "react";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection: React.FC = () => {
  return (
    <section id="disclaimer" className="section-padding relative bg-cyber-background-alt overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyber-red/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title inline-block relative after:left-1/2 after:-translate-x-1/2 mb-8 pb-4">
            Legal Disclaimer
          </h2>
          <div className="flex justify-center mb-8">
            <AlertTriangle className="h-16 w-16 text-cyber-gold" />
          </div>
        </div>

        {/* Disclaimer Content */}
        <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 animate-fade-in">
          <div className="space-y-6 text-cyber-text-secondary">
            <p>
              The Firearm Safety Education Instructor GPT (the "Tool") is provided for informational and educational purposes only. 
              While we strive to ensure the accuracy and timeliness of all information provided, AI Web Tools LLC, OpenAI, and their 
              affiliates make no representations or warranties of any kind, express or implied, about the completeness, accuracy, 
              reliability, suitability, or availability of the Tool or the information it provides.
            </p>
            
            <p>
              <strong className="text-white">Not Legal Advice:</strong> Information regarding firearm laws and regulations is subject 
              to change and may vary by jurisdiction. The Tool is not a substitute for legal advice. Users should consult with a 
              qualified attorney regarding specific legal questions related to firearms.
            </p>
            
            <p>
              <strong className="text-white">Not Professional Training:</strong> The Tool is not a substitute for professional 
              firearms training. Users should seek instruction from certified firearms instructors for hands-on training in 
              firearm handling, safety, and marksmanship.
            </p>
            
            <p>
              <strong className="text-white">User Responsibility:</strong> Users assume all responsibility and risk for their 
              use of firearms. AI Web Tools LLC and OpenAI are not responsible for any injuries, damages, or legal consequences 
              resulting from the use or misuse of information provided by the Tool.
            </p>
            
            <p>
              <strong className="text-white">Third-Party Content:</strong> The Tool may reference or link to third-party content, 
              including YouTube videos, which are not under our control. We are not responsible for the content, accuracy, or 
              availability of such third-party materials.
            </p>
            
            <p>
              <strong className="text-white">Age Restriction:</strong> The Tool is intended for users who are of legal age to 
              possess firearms in their jurisdiction. Users must comply with all applicable age restrictions and legal requirements.
            </p>
            
            <p>
              <strong className="text-white">Ethical Use:</strong> The Tool is designed to promote responsible and lawful firearm 
              ownership and use. It should not be used to facilitate illegal activities or harm to others.
            </p>
            
            <p>
              By using the Firearm Safety Education Instructor GPT, you acknowledge that you have read, understood, and 
              agree to these disclaimers and limitations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
