"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface StickyScrollContent {
  title: string;
  description: string;
  content?: React.ReactNode;
}

export interface StickyScrollProps {
  content: StickyScrollContent[];
  contentClassName?: string;
}

export function StickyScroll({
  content,
  contentClassName,
}: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  const cardLength = content.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const rightCard = rightCardRef.current;
    if (!container || !rightCard) return;

    // Use GSAP matchMedia to handle pinning on Laptop/Desktop (>= 1024px) vs Mobile/Tablet (< 1024px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: container,
        pin: rightCard,
        start: "top top+=140px",
        end: () => `+=${Math.max(100, container.offsetHeight - rightCard.offsetHeight - 60)}`,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            cardLength - 1,
            Math.floor(progress * cardLength)
          );
          setActiveCard(index);
        },
      });
    });

    mm.add("(max-width: 1023px)", () => {
      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            cardLength - 1,
            Math.floor(progress * cardLength)
          );
          setActiveCard(index);
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, [cardLength]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start w-full py-4 pb-12"
    >
      {/* Left Column: Scrolling Text Items */}
      <div className="w-full lg:w-1/2 space-y-32 md:space-y-44 py-4">
        {content.map((item, index) => {
          const isActive = activeCard === index;
          return (
            <motion.div
              key={item.title + index}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: isActive ? 1 : 0.2 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 max-w-xl"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "text-xs font-mono font-bold px-3 py-1 rounded-full transition-all duration-300",
                    isActive
                      ? "bg-[#D9692A] text-white shadow-md shadow-[#D9692A]/20"
                      : "bg-[#1C1B1F]/10 text-[#1C1B1F]/50"
                  )}
                >
                  0{index + 1}
                </span>
                <h3
                  className={cn(
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-colors duration-300",
                    isActive ? "text-[#1C1B1F]" : "text-[#1C1B1F]/30"
                  )}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className={cn(
                  "text-base sm:text-lg leading-relaxed font-light transition-colors duration-300",
                  isActive ? "text-[#1C1B1F]/80 font-normal" : "text-[#1C1B1F]/30"
                )}
              >
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Right Column: GSAP Pinned Image Card Container */}
      <div className="w-full lg:w-1/2 min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] xl:min-h-[460px] relative">
        <div
          ref={rightCardRef}
          className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border border-[#E5E1D3] bg-zinc-950 z-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 40, scale: 1.03 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className={cn("h-full w-full relative", contentClassName)}
            >
              {content[activeCard].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
