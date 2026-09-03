"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ParallaxText() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const row1 = firstRowRef.current;
    const row2 = secondRowRef.current;

    if (row1 && row2) {
      gsap.to(row1, {
        xPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: row1,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(row2, {
        xPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: row2,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  const textItemsRow1 = [
    "NEXT.JS 16",
    "•",
    "TAILWIND CSS",
    "•",
    "GSAP ANIMATIONS",
    "•",
    "THREE.JS WEBGL",
    "•",
    "LENIS SMOOTH SCROLL",
    "•",
  ];

  const textItemsRow2 = [
    "REUSABLE PARALLAX",
    "•",
    "REACT THREE FIBER",
    "•",
    "SMOOTH PARALLAX",
    "•",
    "WARM CREAM THEME",
    "•",
    "BOILERPLATE TEMPLATE",
    "•",
  ];

  return (
    <section className="py-20 bg-[#f8fbfe] overflow-hidden border-y border-[#d0e4f7] select-none">
      {/* Row 1: Leftward Marquee */}
      <div
        ref={firstRowRef}
        className="flex whitespace-nowrap gap-8 text-5xl md:text-7xl font-extrabold tracking-tighter text-[#08295b]/15 will-change-transform"
      >
        {[...textItemsRow1, ...textItemsRow1, ...textItemsRow1].map(
          (text, index) => (
            <span
              key={index}
              className={
                text === "•"
                  ? "text-[#0d47a1]"
                  : "hover:text-[#08295b] transition-colors"
              }
            >
              {text}
            </span>
          )
        )}
      </div>

      {/* Row 2: Rightward Marquee */}
      <div
        ref={secondRowRef}
        className="flex whitespace-nowrap gap-8 text-5xl md:text-7xl font-extrabold tracking-tighter text-[#08295b]/10 mt-6 -ml-96 will-change-transform"
      >
        {[...textItemsRow2, ...textItemsRow2, ...textItemsRow2].map(
          (text, index) => (
            <span
              key={index}
              className={
                text === "•"
                  ? "text-[#2196f3]"
                  : "hover:text-[#08295b] transition-colors"
              }
            >
              {text}
            </span>
          )
        )}
      </div>
    </section>
  );
}
