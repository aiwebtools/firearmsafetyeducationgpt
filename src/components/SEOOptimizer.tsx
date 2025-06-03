
import React from "react";
import { Helmet } from "react-helmet-async";

const SEOOptimizer: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.aiwebtools.ai/#organization",
        "name": "AI WEB TOOLS LLC",
        "url": "https://www.aiwebtools.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://firearm-safety-education-instructor-gpt.lovable.app/og-image.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-475-800-8096",
          "contactType": "customer service",
          "email": "Contact@ai-webtools.com"
        },
        "sameAs": [
          "https://www.aiwebtools.ai"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://firearm-safety-education-instructor-gpt.lovable.app/#website",
        "url": "https://firearm-safety-education-instructor-gpt.lovable.app/",
        "name": "Free AI Tools | AIWEBTOOLS.AI",
        "description": "Free AI tools for firearm safety education and training",
        "publisher": {
          "@id": "https://www.aiwebtools.ai/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://firearm-safety-education-instructor-gpt.lovable.app/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Firearm Safety Education Instructor GPT",
        "description": "Advanced AI-powered firearm safety education tool for responsible gun ownership and training",
        "url": "https://chatgpt.com/g/g-ksJHqdUmM-firearm-safety-education-instructor-gpt",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "creator": {
          "@id": "https://www.aiwebtools.ai/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Firearm Safety Education Instructor GPT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A comprehensive AI tool designed to provide detailed guidance on firearm safety, legal compliance, and responsible ownership for enthusiasts of all experience levels."
            }
          },
          {
            "@type": "Question",
            "name": "Is this AI tool free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our firearm safety education AI tool is completely free to use for educational purposes."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional meta tags for better SEO */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Additional keywords for better targeting */}
      <meta name="subject" content="Free AI Tools, Firearm Safety Education, Gun Safety Training" />
      <meta name="topic" content="AI Tools, Firearm Education, Gun Safety" />
      <meta name="summary" content="Free AI-powered firearm safety education tools from AIWEBTOOLS.AI" />
      <meta name="Classification" content="Education, AI Tools, Safety Training" />
      <meta name="designer" content="AI WEB TOOLS LLC" />
      <meta name="copyright" content="AI WEB TOOLS LLC" />
      <meta name="reply-to" content="Contact@ai-webtools.com" />
      <meta name="owner" content="AI WEB TOOLS LLC" />
      <meta name="url" content="https://firearm-safety-education-instructor-gpt.lovable.app/" />
      <meta name="identifier-URL" content="https://firearm-safety-education-instructor-gpt.lovable.app/" />
      <meta name="directory" content="submission" />
      <meta name="category" content="AI Tools, Education, Safety" />
      <meta name="coverage" content="Worldwide" />
      
      {/* Alternate languages (if applicable) */}
      <link rel="alternate" hrefLang="en" href="https://firearm-safety-education-instructor-gpt.lovable.app/" />
      <link rel="alternate" hrefLang="x-default" href="https://firearm-safety-education-instructor-gpt.lovable.app/" />
    </Helmet>
  );
};

export default SEOOptimizer;
