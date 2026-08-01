import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about.png";
export function AboutUs() {
  return (
    <section id="about-us" className="w-full py-16 md:py-24 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="overflow-hidden rounded-[2rem] border border-border/60 bg-background shadow-md hover:shadow-xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto w-full bg-muted flex items-center justify-center overflow-hidden">
                <Image
                  src={aboutImg}
                  alt="About AdNextMatrix"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-red-600 font-bold tracking-widest text-xs sm:text-sm uppercase bg-red-100/50 dark:bg-red-900/20 px-3 py-1.5 rounded-full">
                    About Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
                  Pioneering Digital Display Solutions
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  At AdNextMatrix, we specialize in transforming ordinary spaces into highly engaging visual experiences. With years of expertise in delivering premium LED displays, digital signage, and drive-thru menu boards, we are trusted by businesses nationwide to elevate their brand presence.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                  Our commitment to quality, transparent pricing, and unparalleled after-sales support ensures that every project we undertake is executed flawlessly, delivering maximum value and peace of mind to our clients.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/+919533811528" target="_blank" rel="noopener noreferrer" className="w-full sm:w-fit block">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all px-8 py-6 font-semibold"
                    >
                      Get in Touch
                    </Button>
                  </a>
                  <Button variant="outline" className="w-full sm:w-fit rounded-xl px-8 py-6 font-semibold hover:text-red-600 hover:border-red-600 transition-colors">
                    Our Mission
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
