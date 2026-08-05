"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const partners = [
  {
    name: "8VC",
    logo: "https://a.storyblok.com/f/337048/114x45/04e08dca33/8vc.svg",
  },
  {
    name: "Ryder",
    logo: "https://a.storyblok.com/f/337048/176x49/27affef2ea/ryder-green.svg",
  },
  {
    name: "Lineage",
    logo: "https://a.storyblok.com/f/337048/170x44/9386c9fae8/lineage.svg",
  },
  {
    name: "Prologis",
    logo: "https://a.storyblok.com/f/337048/249x47/15a7349d4e/prologis.svg",
  },
  {
    name: "NFI",
    logo: "https://a.storyblok.com/f/337048/161x62/44ea74f049/nfi.svg",
  },
];

function LogoBox({ logoUrl, altText }: { logoUrl: string; altText: string }) {
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
      className="relative aspect-[16/10] w-full flex items-center justify-center border-r border-[#E5E1D3] group overflow-hidden bg-transparent cursor-pointer transition-all duration-300 select-none"
    >
      {/* Corner crosshairs (+ symbols at intersections) */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
        {/* Top-Left Crosshair */}
        <div className="absolute top-0 left-0 w-3 h-3 -translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/30 font-bold select-none group-hover:text-[#D9692A] group-hover:scale-150 group-hover:font-extrabold transition-all duration-300">
          +
        </div>
        {/* Top-Right Crosshair */}
        <div className="absolute top-0 right-0 w-3 h-3 translate-x-1.5 -translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/30 font-bold select-none group-hover:text-[#D9692A] group-hover:scale-150 group-hover:font-extrabold transition-all duration-300">
          +
        </div>
        {/* Bottom-Left Crosshair */}
        <div className="absolute bottom-0 left-0 w-3 h-3 -translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/30 font-bold select-none group-hover:text-[#D9692A] group-hover:scale-150 group-hover:font-extrabold transition-all duration-300">
          +
        </div>
        {/* Bottom-Right Crosshair */}
        <div className="absolute bottom-0 right-0 w-3 h-3 translate-x-1.5 translate-y-1.5 flex items-center justify-center text-[#1C1B1F]/30 font-bold select-none group-hover:text-[#D9692A] group-hover:scale-150 group-hover:font-extrabold transition-all duration-300">
          +
        </div>
      </div>

      {/* Layered high-intensity radial cursor spotlight */}
      {/* Layer 1: Wide soft ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(320px_circle_at_var(--x)_var(--y),rgba(217,105,42,0.12),transparent_80%)]"
        style={{
          "--x": `${mousePos.x}px`,
          "--y": `${mousePos.y}px`,
        } as React.CSSProperties}
      />

      {/* Layer 2: Tight intense core spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[radial-gradient(120px_circle_at_var(--x)_var(--y),rgba(217,105,42,0.22),transparent_50%)]"
        style={{
          "--x": `${mousePos.x}px`,
          "--y": `${mousePos.y}px`,
        } as React.CSSProperties}
      />

      {/* Warm translucent background brand color fill */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-[#D9692A]/[0.05] transition-opacity duration-300 z-0" />

      {/* Glowing active brand border box overlay (2px solid with drop shadow glow) */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 border-2 border-[#D9692A] shadow-[inset_0_0_12px_rgba(217,105,42,0.15)] transition-opacity duration-300 z-20" />

      {/* Client Logo Image */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6 filter grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 pointer-events-none">
        <img
          src={logoUrl}
          alt={altText}
          className="max-w-[75%] max-h-[50%] object-contain"
          loading="lazy"
        />
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
            Built by the Industry
          </Badge>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1B1F] leading-tight max-w-[850px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Built by logistics leaders who want a new industry standard in the yard
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

          {/* Middle logos grid row (logo boxes with hover animations) */}
          <div className="w-full grid grid-cols-5 gap-0 border-l border-t border-b border-[#E5E1D3]">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-full"
              >
                <LogoBox
                  logoUrl={partner.logo}
                  altText={partner.name}
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
