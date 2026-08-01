"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does AdNextMatrix provide?",
    answer: "We Provide LED screen, Digital Advertising, Smart LED screen, Outdoor screen, indoor screen, wall mounted screen, movable Screen, and more.."
  },
  {
    question: "How long does it usually take to complete a project?",
    answer: "Project timelines vary depending on the scale and requirements. A standard indoor LED screen installation might take a few days, while large outdoor screens or full-scale digital advertising campaigns can take a few weeks. We provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Absolutely! We believe in long-term partnerships. We offer comprehensive maintenance packages that include technical support, routine screen maintenance, and performance monitoring to keep your displays running flawlessly."
  },
  {
    question: "Can you help redesign an existing website or app?",
    answer: "Yes, in addition to our LED screen services, our digital advertising expertise includes helping you revamp existing digital assets, websites, and applications to ensure they align with modern standards and your current marketing goals."
  },
  {
    question: "What makes AdNextMatrix different from other agencies?",
    answer: "Our unique approach blends high-quality hardware, like our Smart LED screens, with strategic digital advertising. We don't just provide screens; we architect comprehensive digital solutions that drive growth and maximize your brand's visibility."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-20 lg:py-32 bg-background overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about partnering with AdNextMatrix.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={cn(
                  "border border-border/50 rounded-2xl overflow-hidden transition-colors duration-300 shadow-sm",
                  isOpen ? "bg-muted/30 border-primary/20" : "bg-card hover:bg-muted/20"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-lg font-semibold pr-8 transition-colors duration-300",
                    isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
                    isOpen ? "bg-primary text-primary-foreground rotate-180" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
