
import React from "react";
import { Shield, Book, Target, Map, Calculator, Wrench, VideoIcon, FileText, Info, AlertTriangle } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform-3d"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-full bg-cyber-gold/10 w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-cyber-gold">{icon}</div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-white mb-3">{title}</h3>
      <p className="text-cyber-text-secondary">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Comprehensive Safety Education",
      description: "Detailed guidance on safe handling, storage, and maintenance for all types of firearms."
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Legal Compliance Advisor",
      description: "State-specific information on firearm laws, licensing requirements, and carry regulations."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Virtual Shooting Coach",
      description: "Safety-focused guidance for improving shooting skills and techniques."
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Hunting Regulations Guide",
      description: "Current information on hunting seasons, regulations, and legal game in your area."
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Ballistics Calculator",
      description: "Calculations for improved accuracy in hunting and sport shooting applications."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Gun Maintenance Assistant",
      description: "Model-specific instructions for proper cleaning, care, and storage of firearms."
    },
    {
      icon: <VideoIcon className="h-6 w-6" />,
      title: "Visual Learning Resources",
      description: "Integrated YouTube videos for enhanced visual learning of safety concepts and techniques."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Training Documentation",
      description: "Compilation of training materials into downloadable documents for offline reference."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Emergency Response Training",
      description: "Guidance on how to respond to firearm-related emergencies safely and effectively."
    }
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-[100px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyber-gold/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title inline-block relative after:left-1/2 after:-translate-x-1/2 mb-8 pb-4">
            Comprehensive Features
          </h2>
          <p className="text-cyber-text-secondary text-lg">
            Explore how our AI assists with every aspect of firearm safety, from education and legal compliance to practical skills and emergency response.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 preserve-3d">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
