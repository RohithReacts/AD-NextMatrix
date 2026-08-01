import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { Projects } from "@/components/sections/Projects";
import { Pricing } from "@/components/sections/Pricing";
import { AboutUs } from "@/components/sections/AboutUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Features />
        <Products />
        <Projects />
        <Pricing />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <ContactUs />
      </main>
    </div>
  );
}
