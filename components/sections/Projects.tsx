import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Projects() {
  const projects = [
    { id: 1, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=400" },
    { id: 2, image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=600&h=400" },
    { id: 3, image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&q=80&w=600&h=400" },
    { id: 4, image: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?auto=format&fit=crop&q=80&w=600&h=400" },
  ];


  return (
    <section id="projects" className="w-full flex flex-col bg-background pt-16 md:pt-24">
      {/* Projects Showcase */}
      <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Recent Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-sm">
              We have delivered 500+ successful projects across India.
            </p>
            <Button className="mt-4 bg-foreground text-background hover:bg-foreground/90 rounded-md px-8 py-6 font-semibold">
              View All Projects
            </Button>
          </div>

          {/* Right Images Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
            {projects.map((project) => (
              <div key={project.id} className="relative aspect-[4/3] rounded-xl overflow-hidden group bg-muted">
                <img 
                  src={project.image} 
                  alt={`Project ${project.id}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
