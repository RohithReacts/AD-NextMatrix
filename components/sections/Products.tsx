import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PriceForm } from "@/components/PriceForm";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Award01Icon,
  ComputerVideoIcon,
  ThumbsUpIcon,
  Location01Icon
} from "@hugeicons/core-free-icons";
import kioskImg from "@/assets/Self-Service Kiosk.png";
import outdoorImg from "@/assets/OutdoorLEDDisplay.png";
import driveThruImg from "@/assets/DriveThruMenuBoard.png";
import digitalSignageImg from "@/assets/DigitalSignage.png";
import windowDisplayImg from "@/assets/WindowDisplay.png";
import ledVideoWallsImg from "@/assets/LEDVideoWalls.png";
import scrollingLEDBoardsImg from "@/assets/ScrollingLEDBoards.png";
import ledStandeesImg from "@/assets/LEDStandees.png";
import acrylicSignageImg from "@/assets/AcrylicSignage.png";
import ssChannelLettersImg from "@/assets/SS&ChannelLetters.png";

const products = [
  {
    id: 1,
    title: "Self-Service Kiosk",
    image: kioskImg,
    price: "₹90,000 - ₹2,50,000"
  },
  {
    id: 2,
    title: "Outdoor LED Display",
    image: outdoorImg,
    price: "₹4,000 - ₹8,500 / sq.ft."
  },
  {
    id: 3,
    title: "Drive-Thru Menu Board",
    image: driveThruImg,
    price: "₹1,50,000 - ₹5,00,000"
  },
  {
    id: 4,
    title: "Digital Signage",
    image: digitalSignageImg,
    price: "₹25,000 - ₹75,000"
  },
  {
    id: 5,
    title: "Window Display",
    image: windowDisplayImg,
    price: "₹40,000 - ₹1,10,000"
  },
  {
    id: 6,
    title: "LED Video Walls",
    image: ledVideoWallsImg,
    price: "₹3,000 - ₹8,000 / sq.ft."
  },
  {
    id: 7,
    title: "Scrolling LED Boards",
    image: scrollingLEDBoardsImg,
    price: "₹8,000 - ₹40,000"
  },
  {
    id: 8,
    title: "LED Standees",
    image: ledStandeesImg,
    price: "₹15,000 - ₹45,000"
  },
  {
    id: 9,
    title: "Acrylic Signage",
    image: acrylicSignageImg,
    price: "₹500 - ₹2,000 / sq.ft."
  },
  {
    id: 10,
    title: "SS & Channel Letters",
    image: ssChannelLettersImg,
    price: "₹150 - ₹500 / inch"
  }
];

const whyChooseUsFeatures = [
  {
    icon: <HugeiconsIcon icon={Award01Icon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: <HugeiconsIcon icon={ComputerVideoIcon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: <HugeiconsIcon icon={ThumbsUpIcon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
    value: "100%",
    label: "Customer Satisfaction",
  },
  {
    icon: <HugeiconsIcon icon={Location01Icon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
    value: "Pan India",
    label: "Service Network",
  },
];

export function Products() {
  return (
    <section className="relative py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-950" id="products">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-foreground">
            Our <span className="bg-clip-text text-transparent bg-red-600 dark:text-red-600 drop-shadow-sm">Innovative</span> Products
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Discover our range of smart split-screen solutions designed to elevate your visual experience, streamline workflow, and captivate your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xl:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="relative overflow-hidden group flex flex-col border-border/40 bg-background/60 dark:bg-zinc-900/60 backdrop-blur-xl shadow-md hover:shadow-2xl hover:shadow-red-500/15 transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative h-72 w-full overflow-hidden shrink-0 bg-white dark:bg-zinc-950 p-2 border-b border-border/20">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-1 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-sm"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              <div className="flex-1 flex flex-col p-4 relative z-10">
                <div className="mb-3">
                  <CardTitle className="text-base font-bold text-foreground leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                    {product.title}
                  </CardTitle>
                </div>

                <div className="mt-auto flex items-end justify-end gap-2 pt-3 border-t border-border/40">
                  <Dialog>
                    <DialogTrigger render={
                      <Button size="sm" className="relative overflow-hidden font-bold rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-md shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 border-none group/btn h-8 px-4 shrink-0">
                        <span className="relative z-10 text-xs">Ask Price</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                      </Button>
                    } />
                    <DialogContent className="sm:max-w-[360px] p-6 backdrop-blur-2xl bg-background/95 border-border/50 shadow-2xl rounded-2xl">
                      <DialogHeader className="space-y-1.5 text-left">
                        <DialogTitle className="text-xl font-bold tracking-tight text-foreground">Request Quote</DialogTitle>
                        <div className="text-xs font-medium text-muted-foreground bg-secondary/50 py-1 px-2 rounded-md inline-flex border border-border/40 w-fit line-clamp-1">
                          {product.title}
                        </div>
                      </DialogHeader>
                      <PriceForm productTitle={product.title} />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center mb-32 relative z-10">
          <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-base font-semibold border-border/50 hover:border-red-500/50 hover:bg-red-500/5 dark:hover:bg-red-500/10 text-foreground transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)]">
            Explore All Products
          </Button>
        </div>

        {/* Why Choose Us - Bento Box Redesign */}
        <div id="why-choose-us" className="relative z-20 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Why Choose Us?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">We deliver more than just displays. We deliver your message with impact, backed by years of excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-[2rem] border border-border/50 bg-background/60 dark:bg-zinc-900/60 backdrop-blur-xl p-8 group hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 ${idx === 0 || idx === 3 ? 'lg:col-span-2' : 'lg:col-span-1'} hover:border-red-500/20`}
              >
                {/* Decorative background element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500" />

                <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-150 group-hover:opacity-10 dark:group-hover:opacity-20 transition-all duration-700 ease-out pointer-events-none">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-32 h-32" })}
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <div className="w-16 h-16 rounded-2xl border border-red-500/20 flex items-center justify-center bg-gradient-to-br from-red-500/10 to-transparent shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>

                  <div>
                    <h4 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 mb-2">
                      {feature.value}
                    </h4>
                    <p className="text-muted-foreground font-semibold text-base md:text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {feature.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-10 py-6 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group text-base">
              Learn More About Us
              <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
