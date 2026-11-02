import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, } from "@/components/ui/card";

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
  },
  {
    id: 2,
    title: "Outdoor LED Display",
    image: outdoorImg,
  },
  {
    id: 3,
    title: "Drive-Thru Menu Board",
    image: driveThruImg,
  },
  {
    id: 4,
    title: "Digital Signage",
    image: digitalSignageImg,
  },
  {
    id: 5,
    title: "Window Display",
    image: windowDisplayImg,
  },
  {
    id: 6,
    title: "LED Video Walls",
    image: ledVideoWallsImg,
  },
  {
    id: 7,
    title: "Scrolling LED Boards",
    image: scrollingLEDBoardsImg,
  },
  {
    id: 8,
    title: "LED Standees",
    image: ledStandeesImg,
  },
  {
    id: 9,
    title: "Acrylic Signage",
    image: acrylicSignageImg,
  },
  {
    id: 10,
    title: "SS & Channel Letters",
    image: ssChannelLettersImg,
  }
];

const whyChooseUsFeatures = [
  {
    icon: <HugeiconsIcon icon={Award01Icon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: <HugeiconsIcon icon={ComputerVideoIcon} className="w-8 h-8 text-red-600" strokeWidth={1.5} />,
    value: "100+",
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

              <div className="relative h-64 w-full overflow-hidden shrink-0 bg-muted/20 border-b border-border/30">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="flex-1 flex flex-col p-4 relative z-10">
                <div className="mb-3">
                  <CardTitle className="text-base font-bold text-foreground leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                    {product.title}
                  </CardTitle>
                </div>

                <div className="mt-auto pt-3 border-t border-border/40">
                  <a
                    href={`https://wa.me/919533811528?text=${encodeURIComponent(`Hi, I would like to know the price of ${product.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full h-10 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-600 text-emerald-700 dark:text-emerald-400 hover:text-white dark:hover:text-white dark:bg-emerald-950/30 dark:border-emerald-500/25 shadow-xs hover:shadow-md hover:shadow-emerald-500/20 active:scale-[0.98] group/btn cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="shrink-0 transition-transform duration-300 group-hover/btn:scale-110">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                      <span>Chat for Price</span>
                    </Button>
                  </a>
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
