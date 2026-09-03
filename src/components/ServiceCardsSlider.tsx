"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export interface ServiceCardItem {
  title: string;
  tag: string;
  price: string;
  unit: string;
  desc: string;
  highlights: string[];
  href: string;
}

export default function ServiceCardsSlider({
  cards,
}: {
  cards: ServiceCardItem[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / (offsetWidth * 0.85));
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < cards.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 320;
    const gap = 16;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div className="space-y-4">
      {/* Mobile controls & status bar (visible when cards > 3 on mobile) */}
      <div className="flex md:hidden items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#08295b]/70">
            Swipe services ({activeIndex + 1} of {cards.length})
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Previous service"
            className="w-8 h-8 rounded-full border border-[#d0e4f7] bg-white flex items-center justify-center text-[#08295b] disabled:opacity-30 active:scale-95 shadow-xs cursor-pointer transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(cards.length - 1, activeIndex + 1))}
            disabled={activeIndex === cards.length - 1}
            aria-label="Next service"
            className="w-8 h-8 rounded-full border border-[#d0e4f7] bg-white flex items-center justify-center text-[#08295b] disabled:opacity-30 active:scale-95 shadow-xs cursor-pointer transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Swipeable track on mobile / Grid on desktop */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth no-scrollbar w-full max-w-full"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none snap-center bg-white rounded-2xl border border-[#d0e4f7] p-5 sm:p-7 shadow-xs hover:shadow-md hover:border-[#2196f3]/50 transition-all flex flex-col justify-between shrink-0 md:shrink"
          >
            <div className="flex flex-col">
              {/* Badge pill */}
              <div className="mb-3.5">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0d47a1] bg-[#e3f2fd] px-3 py-1 rounded-full border border-[#d0e4f7]/70">
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black text-[#08295b] tracking-tight mb-3">
                {card.title}
              </h3>

              {/* Price display */}
              <div className="flex items-baseline gap-2 mb-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#08295b]/55">
                  {card.unit}
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#0d47a1] tracking-tight leading-none">
                  {card.price}
                </span>
                <span className="text-xs font-bold text-[#08295b]/55">
                  AUD
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#08295b]/75 leading-relaxed min-h-[44px] mb-5">
                {card.desc}
              </p>

              {/* Clean Divider */}
              <div className="w-full h-px bg-[#e2effa] mb-5" />

              {/* Key Highlights */}
              <ul className="space-y-3 mb-6">
                {card.highlights.map((h, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-xs sm:text-sm text-[#08295b]/85 flex items-start gap-2.5 leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                    <span className="font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Buttons Row */}
            <div className="pt-5 border-t border-[#e2effa] flex items-center gap-3 mt-auto">
              <Link
                href="/book"
                className="flex-1 py-3 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-extrabold text-center uppercase tracking-wider transition-all shadow-sm active:scale-[0.98]"
              >
                Book Now
              </Link>
              <Link
                href={card.href}
                className="px-5 py-3 rounded-xl border border-[#d0e4f7] hover:border-[#0d47a1] hover:bg-[#f0f7fe] text-[#08295b] text-xs sm:text-sm font-bold transition-all text-center"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots for mobile */}
      <div className="flex md:hidden items-center justify-center gap-2 pt-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              activeIndex === i ? "w-7 bg-[#0d47a1]" : "w-2 bg-[#d0e4f7]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
