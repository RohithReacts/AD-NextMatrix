"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    rating: 5,
    text: "Working with AdNextMatrix has completely transformed our digital presence. Their innovative approaches and dedication to results have doubled our conversion rates within just three months. Highly recommended for anyone looking to scale their business.",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CEO & Founder",
    company: "Elevate Startup",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 5,
    text: "The team's expertise in web development and digital strategy is unmatched. They didn't just build a website; they built a comprehensive digital ecosystem that perfectly aligns with our brand vision. The attention to detail is simply phenomenal.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Head of Product",
    company: "Innovate Solutions",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    rating: 4,
    text: "Exceptional service from start to finish. They took the time to understand our complex requirements and delivered a solution that exceeded our expectations. The UI/UX design is beautiful and highly intuitive for our users.",
  },
  {
    id: 4,
    name: "David Thompson",
    title: "E-commerce Manager",
    company: "Global Retail",
    image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    rating: 5,
    text: "We've seen a significant increase in user engagement since partnering with them. Their data-driven approach and creative execution have been instrumental in our recent growth. A truly professional team that delivers on its promises.",
  },
  {
    id: 5,
    name: "Jessica Lee",
    title: "Operations Lead",
    company: "NextGen Logistics",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
    rating: 5,
    text: "What sets them apart is their strategic thinking. They don't just execute tasks; they provide valuable insights that have helped us refine our overall business strategy. The support has been outstanding throughout the entire process.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute" />
        <div className="absolute" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-primary" />
            Client Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Don't just take our word for it. Discover how we've helped businesses achieve their digital goals.
          </motion.p>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>

        {/* Horizontal Marquee container */}
        <div className="relative -mx-4 md:-mx-6 lg:-mx-8 overflow-hidden group">
          <div className="flex w-max animate-marquee py-4">
            
            {/* First Set */}
            <div className="flex gap-6 pr-6">
              {testimonials.map((testimonial) => (
                <div
                  key={`first-${testimonial.id}`}
                  className="shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] flex flex-col bg-card border shadow-sm rounded-2xl p-5 sm:p-6 relative transition-colors duration-300 hover:border-primary/50"
                >
                  <div className="absolute top-4 right-4 text-primary/5 transition-colors duration-300">
                    <Quote className="w-8 h-8" />
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 flex-1 relative z-10 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto border-t border-border/50 pt-4">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-muted shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm md:text-base leading-tight">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for infinite loop) */}
            <div className="flex gap-6 pr-6">
              {testimonials.map((testimonial) => (
                <div
                  key={`second-${testimonial.id}`}
                  className="shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] flex flex-col bg-card border shadow-sm rounded-2xl p-5 sm:p-6 relative transition-colors duration-300 hover:border-primary/50"
                >
                  <div className="absolute top-4 right-4 text-primary/5 transition-colors duration-300">
                    <Quote className="w-8 h-8" />
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 flex-1 relative z-10 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto border-t border-border/50 pt-4">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-muted shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm md:text-base leading-tight">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll fade indicators */}
          <div className="absolute top-0 left-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
