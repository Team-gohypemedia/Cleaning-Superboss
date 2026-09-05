"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  MoveHorizontal,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  Flame,
  Bath,
  Armchair,
  BedDouble,
  Building2,
  Layers,
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
    categoryName: "Kitchen Oven",
    title: "Oven & Rangehood Degreasing",
    focus: "Burnt carbon removal, glass door descaling & wire rack restoration",
    location: "Bond Clean · Subiaco, Perth WA",
    duration: "1.5 hours",
    icon: UtensilsCrossed,
    beforeDesc: "Heavy burnt-on carbon grease, clouded oven glass door, and blackened grease build-up on wire racks.",
    afterDesc: "100% transparent streak-free glass, showroom-restored stainless steel interior, and gleaming polished racks.",
    beforeImg: "/transformations/oven_before.jpg",
    afterImg: "/transformations/oven_after.jpg",
  },
  {
    id: "stovetop",
    categoryName: "Stovetop",
    title: "Gas Burners & Cooktop Degreasing",
    focus: "Heavy oil scum removal, burner crown polishing & enamel restoration",
    location: "Bond Clean · South Perth, WA",
    duration: "1.0 hour",
    icon: Flame,
    beforeDesc: "Baked-on grease rings, blackened burner trivets, and oil accumulation around control dials.",
    afterDesc: "High-shine polished stainless steel stovetop, degreased burner caps, and immaculate scratch-free finish.",
    beforeImg: "/transformations/stove_before.jpg",
    afterImg: "/transformations/stove_after.jpg",
  },
  {
    id: "bathroom",
    categoryName: "Bathroom",
    title: "Shower Screen Limescale & Tile Grout",
    focus: "Calcium buildup dissolve, soap scum reset & bright grout revival",
    location: "Bond Clean · Scarborough, Perth WA",
    duration: "2.0 hours",
    icon: Bath,
    beforeDesc: "Hard-water calcium deposits etched into glass, discoloured shower floor grout, and grime on chrome fittings.",
    afterDesc: "Crystal-clear transparent glass door, mould-treated bright white tile grout, and mirror-polished chrome tapware.",
    beforeImg: "/transformations/shower_before.jpg",
    afterImg: "/transformations/shower_after.jpg",
  },
  {
    id: "windows",
    categoryName: "Window Tracks",
    title: "Sliding Track & Glass Detailing",
    focus: "Grit vacuuming, bug removal & streak-free aluminum track polish",
    location: "Vacate Clean · Cottesloe, Perth WA",
    duration: "1.5 hours",
    icon: Layers,
    beforeDesc: "Tracks packed with built-up coastal grit, dead insects, black dust, and sticky residue in sliding grooves.",
    afterDesc: "Deep-vacuumed spotless aluminum runner tracks, wiped drain holes, and smooth streak-free sliding action.",
    beforeImg: "/transformations/windows_before.jpg",
    afterImg: "/transformations/windows_after.jpg",
  },
  {
    id: "living",
    categoryName: "Living Room",
    title: "Floor Polish & Woodwork Scuffs",
    focus: "Hardwood buffing, skirting board scuff removal & track detailing",
    location: "Bond Clean · Fremantle, Perth WA",
    duration: "2.5 hours",
    icon: Armchair,
    beforeDesc: "Foot-traffic grime along floorboards, dusty skirting board ledges, and dull room appearance.",
    afterDesc: "Buffed and gleaming hardwood floors, spotlessly wiped ledges, and fresh showroom-ready finish.",
    beforeImg: "/transformations/living_before.jpg",
    afterImg: "/transformations/living_after.jpg",
  },
  {
    id: "bedroom",
    categoryName: "Bedroom & Carpet",
    title: "Dust Removal & Carpet Steam Cleaning",
    focus: "Steam extraction, allergen sanitisation & wardrobe detailing",
    location: "Vacate Clean · Joondalup, Perth WA",
    duration: "1.5 hours",
    icon: BedDouble,
    beforeDesc: "High-traffic grey carpet lanes, spill stains, flattened pile, and dust settled along wall edges.",
    afterDesc: "Hot-water extracted plush carpet pile, deep stain removal, and sanitised allergen-free room.",
    beforeImg: "/transformations/bedroom_before.jpg",
    afterImg: "/transformations/bedroom_after.jpg",
  },
  {
    id: "office",
    categoryName: "Office",
    title: "Workstations & Sanitised Common Areas",
    focus: "Commercial floor buffing, desk disinfection & glass partitions",
    location: "Commercial Clean · Perth CBD, WA",
    duration: "3.0 hours",
    icon: Building2,
    beforeDesc: "Traffic tracks across flooring, keyboard dust, smudge marks on desks, and dulled walkways.",
    afterDesc: "Deeply sanitised surfaces, sparkling streak-free glass partitions, and polished gleaming walkways.",
    beforeImg: "/transformations/office_before.jpg",
    afterImg: "/transformations/office_after.jpg",
  },
];

export default function BeforeAfterShowcase() {
  const [activeId, setActiveId] = useState<string>("kitchen");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = TRANSFORMATIONS.find((t) => t.id === activeId) || TRANSFORMATIONS[0];
  const currentIndex = TRANSFORMATIONS.findIndex((t) => t.id === activeId);

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

  // Global mouse & touch listeners during active drag for ultra-smooth responsiveness
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPos(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;
      updateSliderPos(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("touchmove", handleGlobalTouchMove);
      window.addEventListener("touchend", handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging, updateSliderPos]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPos(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      setIsDragging(true);
      updateSliderPos(e.touches[0].clientX);
    }
  };

  return (
    <section id="proof-of-work" className="py-10 sm:py-16 md:py-20 px-3.5 sm:px-6 md:px-10 lg:px-14 bg-white border-y border-[#d0e4f7]">
      <div className="max-w-[1360px] mx-auto space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-2.5 px-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3f2fd] border border-[#d0e4f7] text-[#0d47a1] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
            <span>Proven Australian Results</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08295b] tracking-tight uppercase">
            SEE THE DIFFERENCE.
          </h2>

          <p className="text-xs sm:text-sm text-[#08295b]/75 font-normal max-w-xl mx-auto leading-relaxed">
            Drag the interactive slider to inspect real before-and-after results delivered across Perth and Western Australia.
          </p>
        </div>

        {/* Space Navigation Tabs (Mobile scrollable pills with active indicators) */}
        <div className="flex items-center justify-between sm:justify-center gap-1.5 max-w-full">
          {TRANSFORMATIONS.length > 1 && (
            <button
              onClick={handlePrev}
              aria-label="Previous transformation"
              className="flex sm:hidden p-2 rounded-xl border border-[#d0e4f7] bg-[#f8fbfe] text-[#08295b] shrink-0 cursor-pointer active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 px-1">
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
                  className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                    isActive
                      ? "bg-[#0d47a1] text-white shadow-md shadow-[#0d47a1]/25 ring-2 ring-[#0d47a1]/30"
                      : "bg-[#f8fbfe] text-[#08295b]/75 border border-[#d0e4f7] hover:border-[#2196f3] hover:text-[#08295b] hover:bg-white"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#0d47a1]"}`} />
                  <span>{t.categoryName}</span>
                </button>
              );
            })}
          </div>

          {TRANSFORMATIONS.length > 1 && (
            <button
              onClick={handleNext}
              aria-label="Next transformation"
              className="flex sm:hidden p-2 rounded-xl border border-[#d0e4f7] bg-[#f8fbfe] text-[#08295b] shrink-0 cursor-pointer active:scale-95 transition-transform"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Active Transformation Showcase Card */}
        <div className="bg-[#f8fbfe] rounded-2xl sm:rounded-3xl border border-[#d0e4f7] p-4 sm:p-7 space-y-4 sm:space-y-6 shadow-sm">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#d0e4f7] pb-3.5 sm:pb-4">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d47a1]">
                <Sparkles className="w-3.5 h-3.5 text-[#2196f3]" />
                <span>{activeItem.categoryName} Clean</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-[#08295b] mt-0.5">
                {activeItem.title}
              </h3>
              <p className="text-xs text-[#08295b]/70 font-medium">
                {activeItem.focus}
              </p>
            </div>
            
            <div className="text-left sm:text-right text-xs text-[#08295b]/75 space-y-0.5 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-xl border sm:border-0 border-[#d0e4f7]">
              <div className="font-bold text-[#08295b]">{activeItem.location}</div>
              <div>Duration: <span className="font-semibold text-[#0d47a1]">{activeItem.duration}</span></div>
            </div>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="space-y-2.5">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden select-none cursor-ew-resize bg-zinc-900 border border-[#d0e4f7] shadow-inner touch-none"
            >
              {/* After Image (Background Layer) */}
              <img
                src={activeItem.afterImg}
                alt={`After clean: ${activeItem.title}`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 bg-emerald-600/95 backdrop-blur-md text-white text-[8.5px] sm:text-xs font-black uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10 pointer-events-none">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>AFTER CLEAN</span>
              </div>

              {/* Before Image (Clipped Overlay Layer with clipPath) */}
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <img
                  src={activeItem.beforeImg}
                  alt={`Before clean: ${activeItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-rose-600/95 backdrop-blur-md text-white text-[8px] sm:text-xs font-black uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg z-10 pointer-events-none">
                  <span>BEFORE CLEAN</span>
                </div>
              </div>

              {/* Draggable Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#08295b] shadow-2xl border-2 border-[#0d47a1] ring-4 ring-white/60 flex items-center justify-center transition-transform active:scale-110">
                  <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-[#0d47a1]" />
                </div>
              </div>
            </div>

            {/* Slider Drag Hint & Range Control */}
            <div className="flex items-center justify-between gap-2 text-[10px] sm:text-xs text-[#08295b]/70 px-1">
              <span className="font-bold text-rose-600">◀ Before</span>
              <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#0d47a1] text-center">
                <MoveHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>Drag slider to compare</span>
              </div>
              <span className="font-bold text-emerald-600">After ▶</span>
            </div>
          </div>

          {/* Before & After Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 pt-1">
            <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-rose-50/70 to-white border border-rose-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-rose-600">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Initial Condition:</span>
              </div>
              <p className="text-xs text-[#08295b]/80 leading-relaxed">
                {activeItem.beforeDesc}
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-emerald-50/70 to-white border border-emerald-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Superboss Standard Result:</span>
              </div>
              <p className="text-xs text-[#08295b]/80 leading-relaxed">
                {activeItem.afterDesc}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3.5 sm:pt-4 border-t border-[#d0e4f7] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#08295b]/80 font-medium text-center sm:text-left">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Bond Back &amp; Spotless Guarantee on all vacate and deep cleans</span>
            </div>
            <button
              type="button"
              onClick={() => {
                const quoteEl = document.getElementById("quote-form");
                if (quoteEl) {
                  quoteEl.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#quote-form";
                }
              }}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center shadow-md hover:shadow-[#2196f3]/25 active:scale-95 cursor-pointer"
            >
              <span>Request a Quote</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
