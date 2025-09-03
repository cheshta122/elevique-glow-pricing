import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Elevique's AI videos different from traditional video production?",
      answer: "Our AI-powered approach eliminates the need for expensive shoots, crew, and locations while delivering cinematic quality results. We create realistic AI characters and scenarios that look professional and engaging, saving you lakhs in production costs while maintaining broadcast-quality standards."
    },
    {
      question: "How long does it take to create an AI video?",
      answer: "Our turnaround times vary by package: Essential videos typically take 3-5 business days, Impact videos take 5-7 business days, and Signature videos take 7-14 business days. We provide regular updates throughout the process and ensure you're involved in key approval stages."
    },
    {
      question: "Can I request revisions to my video?",
      answer: "Absolutely! Each package includes free revisions: Essential (1 revision), Impact (2 revisions), and Signature (3 revisions). We want to ensure you're completely satisfied with the final result. Additional revisions beyond the included count are available at a nominal fee."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "We'll need your brand assets (logo, product images/references), key messaging or script ideas, and any specific visual preferences. Our team will guide you through a detailed brief to ensure we capture your brand's essence perfectly in the AI-generated content."
    },
    {
      question: "Are the AI videos suitable for all social media platforms?",
      answer: "Yes! We optimize videos for various platforms including Instagram (including 4:5 ratio for Impact and Signature packages), Facebook, YouTube, LinkedIn, and more. We can provide multiple format exports to ensure your content looks perfect across all your marketing channels."
    },
    {
      question: "How do you ensure the AI characters look realistic and on-brand?",
      answer: "We use cutting-edge AI technology combined with careful art direction to create characters that align with your brand identity. Our team fine-tunes every detail from appearance to expressions, ensuring the AI characters feel authentic and represent your brand values effectively."
    },
    {
      question: "What's included in the pricing packages?",
      answer: "Each package is comprehensive: all include professional voiceover, background music, clean editing, and brand integration. Higher tiers add premium elements like advanced animations, VFX effects, multiple format exports, and dedicated project management. Check our detailed pricing cards for specific inclusions."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-brand-dark/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our AI video creation process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="border-brand-primary/20 bg-card/50 backdrop-blur-sm hover:border-brand-primary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full text-left group"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-primary transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-brand-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-brand-primary transition-colors duration-200" />
                    )}
                  </div>
                </button>
              </CardHeader>
              
              <div className={`transition-all duration-300 overflow-hidden ${
                openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed border-t border-brand-primary/10 pt-4">
                    {faq.answer}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button
            onClick={() => window.open('https://wa.me/917217832613?text=Hi%2C%20I%20have%20some%20questions%20about%20your%20AI%20video%20services.', '_blank')}
            className="inline-flex items-center px-6 py-3 bg-brand-primary/10 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 hover-lift"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;