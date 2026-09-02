"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Easy Online Booking",
    subtitle: "Book in 60 seconds 24/7",
    tag: "SMART UI",
    icon: (
      <svg className="w-8 h-8 text-[#5680e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Fast Automated Quotes",
    subtitle: "Instant transparent pricing",
    tag: "INSTANT AI",
    icon: (
      <svg className="w-8 h-8 text-[#5680e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Trusted Professionals",
    subtitle: "100% vetted & insured cleaners",
    tag: "VERIFIED",
    icon: (
      <svg className="w-8 h-8 text-[#5680e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Quality-Focused Service",
    subtitle: "Spotless satisfaction guarantee",
    tag: "HOTEL-GRADE",
    icon: (
      <svg className="w-8 h-8 text-[#5680e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Local & Global Reach",
    subtitle: "Serving locally, expanding globally",
    tag: "EXPANDING",
    icon: (
      <svg className="w-8 h-8 text-[#5680e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function PillarBox({ item }: { item: typeof pillars[0] }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = boxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[260px] sm:min-h-[280px] w-full flex flex-col items-center justify-center py-8 px-3.5 sm:px-4 md:px-5 border-r border-b lg:border-b-0 border-[#E5E1D3] group overflow-hidden bg-transparent cursor-pointer transition-all duration-300 select-none text-center"
    >
      {/* Corner crosshairs */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
        <div className="absolute top-0 left-0 w-3 h-3 -translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/30 font-bold select-none group-hover:text-[#5680e9] group-hover:scale-150 transition-all duration-300">
          +
        </div>
        <div className="absolute top-0 right-0 w-3 h-3 translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/30 font-bold select-none group-hover:text-[#5680e9] group-hover:scale-150 transition-all duration-300">
          +
        </div>
        <div className="absolute bottom-0 left-0 w-3 h-3 -translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/30 font-bold select-none group-hover:text-[#5680e9] group-hover:scale-150 transition-all duration-300">
          +
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/30 font-bold select-none group-hover:text-[#5680e9] group-hover:scale-150 transition-all duration-300">
          +
        </div>
      </div>

      {/* Layer 1: Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(320px_circle_at_var(--x)_var(--y),rgba(86,128,233,0.15),transparent_80%)]"
        style={{
          "--x": `${mousePos.x}px`,
          "--y": `${mousePos.y}px`,
        } as React.CSSProperties}
      />

      {/* Layer 2: Tight Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(120px_circle_at_var(--x)_var(--y),rgba(90,185,234,0.25),transparent_50%)]"
        style={{
          "--x": `${mousePos.x}px`,
          "--y": `${mousePos.y}px`,
        } as React.CSSProperties}
      />

      {/* Translucent background fill */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-[#5680e9]/[0.05] transition-opacity duration-300 z-0" />

      {/* Glowing active brand border box overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 border-2 border-[#5680e9] shadow-[inset_0_0_12px_rgba(86,128,233,0.18)] transition-opacity duration-300 z-20" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-2.5 pointer-events-none">
        <div className="p-3 rounded-2xl bg-[#5680e9]/10 group-hover:bg-[#5680e9]/20 transition-colors duration-300">
          {item.icon}
        </div>
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#5680e9] uppercase">
          {item.tag}
        </span>
        <h3 className="text-sm sm:text-base font-bold text-[#1C1B1F] tracking-tight group-hover:text-[#5680e9] transition-colors duration-300 min-h-[42px] flex items-center justify-center px-1">
          {item.title}
        </h3>
        <p className="text-xs text-[#1C1B1F]/60 font-medium leading-relaxed max-w-[200px] px-1">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function LogoGrid() {
  return (
    <section id="partners" className="w-full bg-[#FAF6F0] py-20 md:py-28 select-none border-t border-[#E5E1D3] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col items-center text-center">
        {/* Header Block */}
        <div className="mb-14 md:mb-18 flex flex-col items-center text-center gap-3">
          <Badge
            variant="outline"
            className="w-fit h-auto border-[#1C1B1F]/15 text-[#1C1B1F]/70 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-transparent mb-1"
          >
            Why Cleaning Superboss
          </Badge>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1B1F] leading-tight max-w-[850px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technology-powered cleaning experience engineered for modern living & enterprise workspaces
          </motion.h2>
        </div>

        {/* Continuous Grid Cage System */}
        <div className="w-full flex flex-col items-stretch">
          {/* Top spacer grid row (extends vertical grid lines upward) */}
          <div className="w-full grid grid-cols-5 gap-0 border-l border-[#E5E1D3]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`top-${i}`}
                className="border-r border-[#E5E1D3] h-8 sm:h-12 md:h-16 relative"
              >
                {/* Intersection Crosshair */}
                <div className="absolute bottom-0 right-0 w-3 h-3 translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/20 font-light select-none">
                  +
                </div>
                {i === 0 && (
                  <div className="absolute bottom-0 left-0 w-3 h-3 -translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/20 font-light select-none">
                    +
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Middle logos grid row (pillar boxes with hover animations) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-l border-t border-b border-[#E5E1D3]">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="w-full"
              >
                <PillarBox
                  item={item}
                />
              </div>
            ))}
          </div>

          {/* Bottom spacer grid row (extends vertical grid lines downward) */}
          <div className="w-full grid grid-cols-5 gap-0 border-l border-[#E5E1D3]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`bottom-${i}`}
                className="border-r border-[#E5E1D3] h-8 sm:h-12 md:h-16 relative"
              >
                {/* Intersection Crosshair */}
                <div className="absolute top-0 right-0 w-3 h-3 translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/20 font-light select-none">
                  +
                </div>
                {i === 0 && (
                  <div className="absolute top-0 left-0 w-3 h-3 -translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/20 font-light select-none">
                    +
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
