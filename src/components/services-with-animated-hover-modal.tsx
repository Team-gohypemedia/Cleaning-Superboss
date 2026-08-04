"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface ServicesWithAnimatedHoverModalProps {
  services: ServiceItem[];
}

export function ServicesWithAnimatedHoverModal({
  services,
}: ServicesWithAnimatedHoverModalProps) {
  const [activeItem, setActiveItem] = useState<ServiceItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full border-t border-white/10 select-none"
    >
      {/* Animated Floating Modal Image Preview */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              top: mousePos.y - 120,
              left: mousePos.x + 30,
            }}
            className="pointer-events-none absolute z-30 hidden lg:block w-[320px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D9692A]"
          >
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex items-end">
              <span className="text-xs font-bold text-white tracking-wider uppercase">
                {activeItem.title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services List Rows */}
      {services.map((service, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveItem(service)}
          onMouseLeave={() => setActiveItem(null)}
          className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-8 md:py-10 border-b border-white/10 transition-all duration-300 hover:bg-white/[0.02] px-4 md:px-8 cursor-pointer"
        >
          <div className="flex items-start md:items-center gap-4 sm:gap-6 mb-3 lg:mb-0">
            <span className="text-xs font-mono font-bold text-[#D9692A] pt-1 md:pt-0 shrink-0">
              0{index + 1}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-[#D9692A] group-hover:translate-x-2 transition-all duration-300">
              {service.title}
            </h3>
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-4 md:gap-8 lg:max-w-xl w-full">
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans max-w-md">
              {service.description}
            </p>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#D9692A] group-hover:border-[#D9692A] group-hover:text-white transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
