"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MoveHorizontal,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  Bath,
  Armchair,
  BedDouble,
  Building2,
  LucideIcon,
} from "lucide-react";

interface Transformation {
  id: string;
  categoryName: string;
  title: string;
  focus: string;
  location: string;
  duration: string;
  icon: LucideIcon;
  beforeDesc: string;
  afterDesc: string;
  beforeImg: string;
  afterImg: string;
}

const TRANSFORMATIONS: Transformation[] = [
  {
    id: "kitchen",
    categoryName: "Kitchen",
    title: "Oven & Cooktop Degreasing",
    focus: "Burnt carbon removal, stainless steel polish & rack restoration",
    location: "Bond Clean · Subiaco, Perth WA",
    duration: "1.5 hours",
    icon: UtensilsCrossed,
    beforeDesc: "Heavy burnt-on carbon grease, clouded door glass, and blackened gas cooktop burners.",
    afterDesc: "Mirror-clean glass, degreased stainless steel casing, and sparkling showroom-ready racks.",
    beforeImg: "/transformations/oven_before.jpg",
    afterImg: "/transformations/oven_after.jpg",
  },
  {
    id: "bathroom",
    categoryName: "Bathroom",
    title: "Shower Screen Limescale & Tile Grout",
    focus: "Calcium buildup dissolve, soap scum reset & bright grout revival",
    location: "Deep Clean · South Yarra, Melbourne VIC",
    duration: "2.0 hours",
    icon: Bath,
    beforeDesc: "Hard-water calcium deposits etched into glass, discoloured shower floor grout and mildew lines.",
    afterDesc: "Streak-free transparent glass treated with water-repellent coating and bright white grout lines.",
    beforeImg: "/transformations/shower_before.jpg",
    afterImg: "/transformations/shower_after.jpg",
  },
  {
    id: "living",
    categoryName: "Living Room",
    title: "Floor Polish & Woodwork Scuffs",
    focus: "Hardwood buffing, skirting board scuff removal & track detailing",
    location: "Bond Clean · Subiaco, Perth WA",
    duration: "2.5 hours",
    icon: Armchair,
    beforeDesc: "Deep scuff marks along skirting boards, heavy dust along sliding door tracks, and dull wooden floors.",
    afterDesc: "Restored woodwork, vacuumed tracks, and hospital-grade neutral-scented polished floors.",
    beforeImg: "/transformations/living_before.jpg",
    afterImg: "/transformations/living_after.jpg",
  },
  {
    id: "bedroom",
    categoryName: "Bedroom",
    title: "Dust Removal & Carpet Restoration",
    focus: "HEPA allergen vacuuming, pile steam lifting & wardrobe detailing",
    location: "Vacate Clean · New Farm, Brisbane QLD",
    duration: "1.5 hours",
    icon: BedDouble,
    beforeDesc: "Dust mite buildup, flattened high-traffic carpet fibres, and tracked wardrobe shelving grit.",
    afterDesc: "Steam-lifted plush carpet pile, allergen-sanitised air, and pristine dust-free cabinetry.",
    beforeImg: "/transformations/bedroom_before.jpg",
    afterImg: "/transformations/bedroom_after.jpg",
  },
  {
    id: "office",
    categoryName: "Office",
    title: "Workstations & Sanitised Common Areas",
    focus: "Commercial desk disinfection, monitor polishing & breakroom hygiene",
    location: "Commercial Clean · North Adelaide, SA",
    duration: "3.0 hours",
    icon: Building2,
    beforeDesc: "Cluttered keyboards, coffee ring stains on desks, high-touch germ zones, and dull entryway floors.",
    afterDesc: "Hospital-grade disinfected workstations, streak-free glass partitions, and gleaming common areas.",
    beforeImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function BeforeAfterShowcase() {
  const [activeId, setActiveId] = useState<string>("kitchen");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = TRANSFORMATIONS.find((t) => t.id === activeId) || TRANSFORMATIONS[0];
  const currentIndex = TRANSFORMATIONS.findIndex((t) => t.id === activeId);

  // Keep container width updated for proper clipped image alignment
  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + TRANSFORMATIONS.length) % TRANSFORMATIONS.length;
    setActiveId(TRANSFORMATIONS[prevIdx].id);
    setSliderPosition(50);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % TRANSFORMATIONS.length;
    setActiveId(TRANSFORMATIONS[nextIdx].id);
    setSliderPosition(50);
  };

  const updateSliderPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updateSliderPos(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updateSliderPos(e.touches[0].clientX);
    }
  };

  return (
    <section id="proof-of-work" className="py-12 sm:py-20 md:py-24 px-3.5 sm:px-6 md:px-10 lg:px-14 bg-white border-y border-[#d0e4f7]">
      <div className="max-w-[1360px] mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 px-1">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#e3f2fd] border border-[#d0e4f7] text-[#0d47a1] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
            <span>Proven Australian Results</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#08295b] tracking-tight uppercase">
            SEE THE DIFFERENCE.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#08295b]/75 font-normal max-w-2xl mx-auto leading-relaxed">
            Drag the interactive slider to inspect real before-and-after results delivered across Perth and Western Australia.
          </p>
        </div>

        {/* 5 Key Spaces Navigation Tabs */}
        <div className="flex items-center justify-between sm:justify-center gap-2 max-w-full">
          <button
            onClick={handlePrev}
            aria-label="Previous transformation"
            className="flex sm:hidden p-2.5 rounded-xl border border-[#d0e4f7] bg-[#f8fbfe] text-[#08295b] shrink-0 cursor-pointer active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-3 px-2">
            {TRANSFORMATIONS.map((t) => {
              const Icon = t.icon;
              const isActive = activeId === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveId(t.id);
                    setSliderPosition(50);
                  }}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#0d47a1] text-white shadow-md shadow-[#0d47a1]/25 ring-1 ring-[#0d47a1]"
                      : "bg-[#f8fbfe] text-[#08295b]/70 border border-[#d0e4f7] hover:border-[#2196f3] hover:text-[#08295b] hover:bg-white"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#0d47a1]"}`} />
                  <span>{t.categoryName}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next transformation"
            className="flex sm:hidden p-2.5 rounded-xl border border-[#d0e4f7] bg-[#f8fbfe] text-[#08295b] shrink-0 cursor-pointer active:scale-95 transition-transform"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Active Transformation Showcase Card */}
        <div className="bg-[#f8fbfe] rounded-3xl border border-[#d0e4f7] p-5 sm:p-8 space-y-6 shadow-sm">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#d0e4f7] pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0d47a1]">
                <Sparkles className="w-3.5 h-3.5 text-[#2196f3]" />
                <span>{activeItem.categoryName} Clean</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#08295b] mt-0.5">
                {activeItem.title}
              </h3>
              <p className="text-xs text-[#08295b]/70 font-medium">
                {activeItem.focus}
              </p>
            </div>
            
            <div className="text-left sm:text-right text-xs text-[#08295b]/75 space-y-0.5 bg-white sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-[#d0e4f7]">
              <div className="font-bold text-[#08295b]">{activeItem.location}</div>
              <div>Duration: <span className="font-semibold text-[#0d47a1]">{activeItem.duration}</span></div>
            </div>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="space-y-3">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => {
                setIsDragging(true);
                updateSliderPos(e.touches[0].clientX);
              }}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
              onClick={(e) => updateSliderPos(e.clientX)}
              className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-zinc-900 border border-[#d0e4f7] shadow-inner touch-none"
            >
              {/* After Image (Background Layer) */}
              <img
                src={activeItem.afterImg}
                alt={`After clean: ${activeItem.title}`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 bg-emerald-600/95 backdrop-blur-md text-white text-[9px] sm:text-xs font-black uppercase px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10 pointer-events-none">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden xs:inline">AFTER</span> SUPERBOSS CLEAN
              </div>

              {/* Before Image (Clipped Overlay Layer) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImg}
                  alt={`Before clean: ${activeItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                  style={{
                    width: containerWidth > 0 ? `${containerWidth}px` : (containerRef.current ? `${containerRef.current.clientWidth}px` : "100%"),
                    height: "100%",
                  }}
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-rose-600/95 backdrop-blur-md text-white text-[8.5px] sm:text-xs font-black uppercase px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-lg z-10 pointer-events-none">
                  <span>BEFORE CLEAN</span>
                </div>
              </div>

              {/* Draggable Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white text-[#08295b] shadow-2xl border-2 border-[#0d47a1] flex items-center justify-center transition-transform hover:scale-110">
                  <MoveHorizontal className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0d47a1]" />
                </div>
              </div>
            </div>

            {/* Slider Drag Hint & Range Control */}
            <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs text-[#08295b]/70 px-1">
              <span className="font-semibold text-rose-600">◀ Before</span>
              <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#0d47a1] text-center">
                <MoveHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>Drag to compare</span>
              </div>
              <span className="font-semibold text-emerald-600">After ▶</span>
            </div>
          </div>

          {/* Before & After Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-rose-100 space-y-1">
              <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-rose-600">
                Initial Condition:
              </div>
              <p className="text-xs text-[#08295b]/80 leading-relaxed">
                {activeItem.beforeDesc}
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-emerald-100 space-y-1">
              <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-600">
                Superboss Standard Result:
              </div>
              <p className="text-xs text-[#08295b]/80 leading-relaxed">
                {activeItem.afterDesc}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#d0e4f7] flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#08295b]/80 font-medium text-center sm:text-left">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Bond Back &amp; Spotless Guarantee on all vacate and deep cleans</span>
            </div>
            <Link
              href="/book"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-[#2196f3]/25 active:scale-95"
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
