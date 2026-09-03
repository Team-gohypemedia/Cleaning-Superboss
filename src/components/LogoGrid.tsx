"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Easy Online Booking",
    subtitle: "Book in 60 seconds, anytime",
    tag: "24/7",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0d47a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Upfront Pricing",
    subtitle: "Know your price before you book",
    tag: "TRANSPARENT",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0d47a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Trusted Professionals",
    subtitle: "Police checked & fully insured",
    tag: "POLICE CHECKED",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0d47a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    subtitle: "Not happy? We'll reclean for free",
    tag: "GUARANTEED",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0d47a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Serving All of Australia",
    subtitle: "Available in all major cities & suburbs",
    tag: "NATIONWIDE",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0d47a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function PillarBox({
  item,
  className,
}: {
  item: (typeof pillars)[0];
  className?: string;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 border-r border-b border-[#d0e4f7] overflow-hidden group select-none text-center min-h-[220px] sm:min-h-[260px] md:min-h-[280px] cursor-pointer transition-colors duration-300",
        className
      )}
    >
      {/* Structural Corner Crosshairs */}
      <div className="pointer-events-none">
        <div className="absolute top-0 left-0 w-3 h-3 -translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#08295b]/30 font-bold select-none group-hover:text-[#2196f3] group-hover:scale-150 transition-all duration-300">
          +
        </div>
        <div className="absolute top-0 right-0 w-3 h-3 translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#08295b]/30 font-bold select-none group-hover:text-[#2196f3] group-hover:scale-150 transition-all duration-300">
          +
        </div>
        <div className="absolute bottom-0 left-0 w-3 h-3 -translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#08295b]/30 font-bold select-none group-hover:text-[#2196f3] group-hover:scale-150 transition-all duration-300">
          +
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#08295b]/30 font-bold select-none group-hover:text-[#2196f3] group-hover:scale-150 transition-all duration-300">
          +
        </div>
      </div>

      {/* Layer 1: Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(320px_circle_at_var(--x)_var(--y),rgba(13,71,161,0.12),transparent_80%)]"
        style={{
          "--x": `${mousePos.x}px`,
          "--y": `${mousePos.y}px`,
        } as React.CSSProperties}
      />

      {/* Layer 2: Tight Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(120px_circle_at_var(--x)_var(--y),rgba(33,150,243,0.2),transparent_50%)]"
        style={{
          "--x": `${mousePos.x}px`,
          "--y": `${mousePos.y}px`,
        } as React.CSSProperties}
      />

      {/* Translucent background fill */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-[#e3f2fd]/60 transition-opacity duration-300 z-0" />

      {/* Glowing active brand border box overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 border-2 border-[#2196f3] shadow-[inset_0_0_12px_rgba(33,150,243,0.18)] transition-opacity duration-300 z-20" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-2 sm:gap-2.5 pointer-events-none">
        <div className="p-2.5 sm:p-3 rounded-2xl bg-[#e3f2fd] group-hover:bg-[#0d47a1]/15 transition-colors duration-300">
          {item.icon}
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-[#0d47a1] uppercase">
          {item.tag}
        </span>
        <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#08295b] tracking-tight group-hover:text-[#0d47a1] transition-colors duration-300 min-h-[36px] sm:min-h-[42px] flex items-center justify-center px-1">
          {item.title}
        </h3>
        <p className="text-[11px] sm:text-xs text-[#08295b]/70 font-medium leading-relaxed max-w-[200px] px-1">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function LogoGrid() {
  return (
    <section id="partners" className="w-full bg-[#f8fbfe] py-20 md:py-28 select-none border-t border-[#d0e4f7] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col items-center text-center">
        {/* Header Block */}
        <div className="mb-14 md:mb-18 flex flex-col items-center text-center gap-3">
          <Badge
            variant="outline"
            className="w-fit h-auto border-[#08295b]/15 text-[#08295b]/70 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-transparent mb-1"
          >
            Why Cleaning Superboss
          </Badge>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08295b] leading-tight max-w-[850px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted home & commercial cleaning across Australia — backed by international standards
          </motion.h2>
        </div>

        {/* Continuous Grid Cage System */}
        <div className="w-full flex flex-col items-stretch">
          {/* Top spacer grid row (extends vertical grid lines upward) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-0 border-l border-[#d0e4f7]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`top-${i}`}
                className={`border-r border-[#d0e4f7] h-6 sm:h-10 md:h-16 relative ${
                  i >= 2 ? "hidden lg:block" : ""
                }`}
              >
                {/* Intersection Crosshair */}
                <div className="absolute bottom-0 right-0 w-3 h-3 translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#08295b]/20 font-light select-none">
                  +
                </div>
                {i === 0 && (
                  <div className="absolute bottom-0 left-0 w-3 h-3 -translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#08295b]/20 font-light select-none">
                    +
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Middle logos grid row (2 columns on mobile, 5 on large screens) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-0 border-l border-t border-b border-[#d0e4f7]">
            {pillars.map((item, index) => (
              <div
                key={index}
                className={`w-full ${
                  index === pillars.length - 1 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <PillarBox
                  item={item}
                />
              </div>
            ))}
          </div>

          {/* Bottom spacer grid row (extends vertical grid lines downward) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-0 border-l border-[#d0e4f7]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`bottom-${i}`}
                className={`border-r border-[#d0e4f7] h-6 sm:h-10 md:h-16 relative ${
                  i >= 2 ? "hidden lg:block" : ""
                }`}
              >
                {/* Intersection Crosshair */}
                <div className="absolute top-0 right-0 w-3 h-3 translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#08295b]/20 font-light select-none">
                  +
                </div>
                {i === 0 && (
                  <div className="absolute top-0 left-0 w-3 h-3 -translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#08295b]/20 font-light select-none">
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
