
import React from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating, delay }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 flex flex-col h-full animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h3 className="text-xl font-heading font-semibold text-white">{name}</h3>
          <p className="text-cyber-text-secondary text-sm">{role}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? "text-cyber-gold fill-cyber-gold" : "text-gray-600"}`} 
            />
          ))}
        </div>
      </div>
      <div className="mb-6 flex-grow">
        <Quote className="h-6 w-6 text-cyber-gold/40 mb-2" />
        <p className="text-cyber-text-secondary italic">{content}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Michael R.",
      role: "Certified Firearms Instructor",
      content: "As a firearms instructor, I'm impressed by the accuracy and depth of the information this AI provides. It's become an invaluable reference tool for my classes.",
      rating: 5
    },
    {
      name: "Sarah L.",
      role: "First-time Gun Owner",
      content: "The step-by-step guidance and visual learning resources helped me gain confidence as a new gun owner. The state-specific legal information was particularly helpful.",
      rating: 5
    },
    {
      name: "David T.",
      role: "Hunting Enthusiast",
      content: "The hunting regulations guide and ballistics calculator have significantly improved my preparation for hunting season. The YouTube video integration makes complex concepts easy to understand.",
      rating: 4
    },
    {
      name: "Jennifer K.",
      role: "Competitive Shooter",
      content: "The virtual coaching and maintenance tips have helped refine my technique and keep my equipment in top condition. A must-have resource for serious shooters.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding relative bg-cyber-background-alt overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyber-gold/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title inline-block relative after:left-1/2 after:-translate-x-1/2 mb-8 pb-4">
            User Experiences
          </h2>
          <p className="text-cyber-text-secondary text-lg">
            Hear from firearms enthusiasts who have enhanced their knowledge and skills using our AI education tool.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
