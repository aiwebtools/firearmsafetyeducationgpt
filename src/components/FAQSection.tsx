
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is Firearm Safety Education Instructor GPT?",
      answer: "Firearm Safety Education Instructor GPT is an AI-powered educational tool designed to provide comprehensive guidance on firearm safety, legal compliance, maintenance, and responsible ownership. It offers personalized assistance based on your specific needs, location, and experience level."
    },
    {
      question: "Is this tool a replacement for formal firearms training?",
      answer: "No, this AI tool is designed to supplement, not replace, formal firearms training. While it provides valuable educational content, we strongly recommend hands-on training with certified instructors for proper firearms handling and safety skills."
    },
    {
      question: "How does the AI provide state-specific legal information?",
      answer: "The AI will ask for your state of residence and then provide guidance based on the current firearm laws and regulations specific to your location. However, always verify legal information with official sources, as laws can change."
    },
    {
      question: "Can the AI help with specific firearm models?",
      answer: "Yes, the AI can provide model-specific information on safety features, maintenance procedures, and proper handling techniques for a wide range of firearms. For the most accurate assistance, provide details about your specific firearm model."
    },
    {
      question: "How are the YouTube videos selected for learning?",
      answer: "The AI searches for and selects relevant, high-quality instructional videos that match your specific query or learning needs. These videos are carefully chosen to enhance understanding of safety concepts, maintenance procedures, or shooting techniques."
    },
    {
      question: "Is my personal information kept private when using this tool?",
      answer: "Yes, your privacy is important. The tool operates according to OpenAI's privacy policy. While it may ask for your state of residence to provide relevant legal information, it doesn't store personal data beyond what's needed for the immediate conversation."
    }
  ];

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title inline-block relative after:left-1/2 after:-translate-x-1/2 mb-8 pb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-cyber-text-secondary text-lg">
            Get answers to common questions about our AI-powered firearm safety education tool.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl overflow-hidden border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 text-white font-heading font-medium text-lg hover:text-cyber-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-cyber-text-secondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
