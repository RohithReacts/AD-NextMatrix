"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner1.png";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={banner}
          alt="AdNextMatrix Banner"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col justify-center items-start py-20">
        <div className="max-w-2xl md:ml-16 lg:ml-24">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight"
          >
            SMART SPLIT SCREEN <span className="text-amber-600">INNOVATIVE</span> BY YOU
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-lg text-white/50 leading-relaxed"
          >
            Sync Videos, Posters, and Images with
            <br />Ease—Say Goodbye to Selection Obsession.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/#products" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all">
                Explore Products
              </Button>
            </Link>
            <Link href="/get-a-quote" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base rounded-full backdrop-blur-sm bg-background/50 border-muted-foreground/30 hover:bg-accent/50">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
