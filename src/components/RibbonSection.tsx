"use client";

import { useRef } from "react";
import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RibbonSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll-driven horizontal pixel translation (completely unbroken, zero gaps)
  const x1 = useTransform(scrollYProgress, [0, 1], ["0px", "-400px"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-400px", "0px"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-2 md:py-4 bg-transparent overflow-hidden select-none"
    >
      <div className="relative h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] w-full flex items-center justify-center">
        {/* Ribbon 1: Angled Downwards (-3.5 deg) - Scroll Driven */}
        <motion.div
          style={{ x: x1 }}
          className="absolute w-[250%] -left-[75%] top-1/2 -translate-y-1/2 -rotate-[3.5deg] z-10 drop-shadow-2xl"
        >
          <InfiniteRibbon
            autoPlay={false}
            className="bg-[#5680e9] text-white py-2.5 sm:py-3 font-black tracking-widest text-xs sm:text-sm md:text-base lg:text-lg uppercase border-y border-white/20 shadow-2xl"
            rotation={0}
            repeat={16}
            separator="✦"
          >
            SMART CLEANING TECHNOLOGY ✦ SEAMLESS ONLINE BOOKING ✦ TRUSTED PROFESSIONALS ✦ INSTANT AUTOMATED QUOTES ✦ SPOTLESS GUARANTEE
          </InfiniteRibbon>
        </motion.div>

        {/* Ribbon 2: Angled Upwards (+3.5 deg) - Reverse Scroll Driven */}
        <motion.div
          style={{ x: x2 }}
          className="absolute w-[250%] -left-[75%] top-1/2 -translate-y-1/2 rotate-[3.5deg] z-20 drop-shadow-2xl"
        >
          <InfiniteRibbon
            autoPlay={false}
            className="bg-[#8860d0] text-white py-2.5 sm:py-3 font-black tracking-widest text-xs sm:text-sm md:text-base lg:text-lg uppercase border-y border-white/20 shadow-2xl"
            rotation={0}
            repeat={16}
            separator="✦"
          >
            RESIDENTIAL & COMMERCIAL ✦ 5-STAR RATED CLEANERS ✦ ECO-FRIENDLY PRECISION ✦ SERVING LOCALLY & EXPANDING GLOBALLY
          </InfiniteRibbon>
        </motion.div>
      </div>
    </section>
  );
}
