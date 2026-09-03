"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

interface Transformation {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImg: string;
  afterImg: string;
}

const TRANSFORMATIONS: Transformation[] = [
  {
    id: "oven",
    title: "Oven & Racks Deep Degrease",
    category: "Kitchen Detail",
    location: "Bond Clean · Surry Hills, Sydney",
    duration: "1.5 hours",
    beforeDesc: "Heavy burnt-on carbon, grease coated door glass and blackened wire racks.",
    afterDesc: "Pristine showroom finish with streak-free glass and deep-cleaned chrome elements.",
    beforeImg: "/transformations/oven_before.jpg",
    afterImg: "/transformations/oven_after.jpg",
  },
  {
    id: "bathroom",
    title: "Shower Screen Limescale & Grout Reset",
    category: "Bathroom Restoration",
    location: "Deep Clean · South Yarra, Melbourne",
    duration: "2.0 hours",
    beforeDesc: "Cloudy glass with calcium buildup, soap scum and discoloured floor tile grout.",
    afterDesc: "Crystal-clear glass treated with water repellent and restored bright white grout lines.",
    beforeImg: "/transformations/shower_before.jpg",
    afterImg: "/transformations/shower_after.jpg",
  },
  {
    id: "stovetop",
    title: "Commercial-Grade Rangehood & Gas Cooktop",
    category: "Kitchen Surface",
    location: "Vacate Clean · New Farm, Brisbane",
    duration: "1.0 hour",
    beforeDesc: "Sticky oil splatters, charred burner caps and clogged metal mesh filters.",
    afterDesc: "Degreased stainless steel with zero oily residue and polished burner elements.",
    beforeImg: "/transformations/stove_before.jpg",
    afterImg: "/transformations/stove_after.jpg",
  },
  {
    id: "living",
    title: "Living Room Floor & Skirting Board Detail",
    category: "End of Lease",
    location: "Bond Clean · Subiaco, Perth",
    duration: "2.5 hours",
    beforeDesc: "Scuff marks on skirting boards, dust buildup along window tracks and dull floors.",
    afterDesc: "Scuff-free woodwork, vacuumed tracks, and hospital-grade neutral-scented polished floors.",
    beforeImg: "/transformations/living_before.jpg",
    afterImg: "/transformations/living_after.jpg",
  },
];

export default function BeforeAfterShowcase() {
  const [activeId, setActiveId] = useState<string>("oven");
  const activeItem = TRANSFORMATIONS.find((t) => t.id === activeId) || TRANSFORMATIONS[0];
  const currentIndex = TRANSFORMATIONS.findIndex((t) => t.id === activeId);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + TRANSFORMATIONS.length) % TRANSFORMATIONS.length;
    setActiveId(TRANSFORMATIONS[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % TRANSFORMATIONS.length;
    setActiveId(TRANSFORMATIONS[nextIdx].id);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-14 bg-white border-y border-[#d0e4f7]">
      <div className="max-w-[1360px] mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e3f2fd] border border-[#d0e4f7] text-[#0d47a1] text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
            <span>Proven Australian Results</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#08295b] tracking-tight">
            Real Transformations Before &amp; After
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#08295b]/70 font-normal">
            Take a look at actual cleaning jobs delivered across Sydney, Melbourne, Brisbane, and Perth. Every clean is backed by our 100% Spotless Satisfaction Guarantee.
          </p>
        </div>

        {/* Tab Buttons & Mobile Slider Controls */}
        <div className="flex items-center justify-between sm:justify-center gap-2 max-w-full">
          <button
            onClick={handlePrev}
            aria-label="Previous transformation"
            className="flex sm:hidden p-2 rounded-lg border border-[#d0e4f7] bg-[#f8fbfe] text-[#08295b] shrink-0 cursor-pointer active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {TRANSFORMATIONS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeId === t.id
                    ? "bg-[#0d47a1] text-white shadow-sm"
                    : "bg-[#f8fbfe] text-[#08295b]/70 border border-[#d0e4f7] hover:border-[#2196f3] hover:text-[#08295b]"
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next transformation"
            className="flex sm:hidden p-2 rounded-lg border border-[#d0e4f7] bg-[#f8fbfe] text-[#08295b] shrink-0 cursor-pointer active:scale-95 transition-transform"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Active Transformation Card Display */}
        <div className="bg-[#f8fbfe] rounded-xl border border-[#d0e4f7] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#d0e4f7] pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2196f3] block">
                {activeItem.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#08295b]">
                {activeItem.title}
              </h3>
            </div>
            <div className="text-left sm:text-right text-xs text-[#08295b]/70 space-y-0.5">
              <div className="font-semibold text-[#08295b]">{activeItem.location}</div>
              <div>Clean Duration: {activeItem.duration}</div>
            </div>
          </div>

          {/* Side-by-Side Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Before */}
            <div className="space-y-3">
              <div className="relative rounded-lg overflow-hidden border border-rose-200 aspect-[4/3] bg-zinc-900 group">
                <img
                  src={activeItem.beforeImg}
                  alt={`Before: ${activeItem.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-bold uppercase px-3 py-1 rounded-md shadow-md">
                  BEFORE CLEAN
                </div>
              </div>
              <p className="text-xs text-[#08295b]/75 leading-relaxed">
                <strong className="text-[#08295b]">Initial Condition:</strong> {activeItem.beforeDesc}
              </p>
            </div>

            {/* After */}
            <div className="space-y-3">
              <div className="relative rounded-lg overflow-hidden border border-emerald-300 aspect-[4/3] bg-zinc-900 group">
                <img
                  src={activeItem.afterImg}
                  alt={`After: ${activeItem.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold uppercase px-3 py-1 rounded-md shadow-md flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>AFTER SUPERBOSS CLEAN</span>
                </div>
              </div>
              <p className="text-xs text-[#08295b]/75 leading-relaxed">
                <strong className="text-[#08295b]">Final Result:</strong> {activeItem.afterDesc}
              </p>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#d0e4f7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#08295b]/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Bond Back &amp; Spotless Guarantee on all vacate and deep cleans</span>
            </div>
            <Link
              href="/book"
              className="px-6 py-2.5 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Book Your Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
