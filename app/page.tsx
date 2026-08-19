import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { Projects } from "@/components/sections/Projects";
import { Pricing } from "@/components/sections/Pricing";
import { AboutUs } from "@/components/sections/AboutUs";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { LeadGate } from "@/components/template/LeadGate";
import { ScrollReveal } from "@/components/motion-primitives/scroll-reveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <ScrollReveal delay={0}>
          <Hero />
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <Features />
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <Products />
        </ScrollReveal>
        
        <LeadGate>
          <ScrollReveal delay={0.1}>
            <Projects />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Pricing />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <AboutUs />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <FAQ />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <ContactUs />
          </ScrollReveal>
        </LeadGate>
      </main>
    </div>
  );
}
