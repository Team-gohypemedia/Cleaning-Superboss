"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface StickyScrollContent {
  title: string;
  description: string;
}

export interface StickyScrollProps {
  content: StickyScrollContent[];
  renderCard?: (scrollProgress: number, activeIndex: number) => React.ReactNode;
}

export function StickyScroll({
  content,
  renderCard,
}: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [textProgress, setTextProgress] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cardLength = content.length;

  // Handle viewport responsive mounting
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate typewriter-style color fill when active card changes on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    setTextProgress(0);
    let start: number | null = null;
    const duration = 1000; // 1000ms typewriter reveal speed on mobile

    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progressVal = Math.min(1, elapsed / duration);
      setTextProgress(progressVal);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeCard, isMobile]);

  // GSAP ScrollTrigger timeline for desktop layout
  useEffect(() => {
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const rightCard = rightCardRef.current;
    if (!container || !rightCard) return;

    const mm = gsap.matchMedia();

    const updateState = (self: ScrollTrigger) => {
      const prog = self.progress;
      setScrollProgress(prog);

      const rightCardEl = rightCardRef.current;
      if (!rightCardEl) return;

      const cardRect = rightCardEl.getBoundingClientRect();
      const targetCenterY = cardRect.top + cardRect.height / 2;

      let closestIndex = 0;
      let minDiff = Infinity;

      cardRefs.current.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const rect = cardEl.getBoundingClientRect();
        const textCenterY = rect.top + rect.height / 2;
        const diff = Math.abs(textCenterY - targetCenterY);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = idx;
        }
      });

      setActiveCard(closestIndex);
    };

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: container,
        pin: rightCard,
        start: "top top+=140px",
        end: () => `+=${Math.max(100, container.offsetHeight - rightCard.offsetHeight)}`,
        pinSpacing: false,
        scrub: true,
        onUpdate: updateState,
      });
    });

    return () => {
      mm.revert();
    };
  }, [cardLength, isMobile]);

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + cardLength) % cardLength);
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % cardLength);
  };

  const activeItem = content[activeCard];
  const slideProgress = activeCard / cardLength;

  // Mobile layout calculations
  const mobileTitleChars = activeItem.title.split("");
  const mobileDescChars = activeItem.description.split("");
  const mobileTotalLength = mobileTitleChars.length + mobileDescChars.length;
  const mobileRevealedCount = Math.floor(textProgress * mobileTotalLength);
  const isMobileFullyRevealed = textProgress >= 0.99 || mobileRevealedCount >= mobileTotalLength;

  // Size of the sliding orange leading-edge cursor trail
  const cursorTrailSize = 6;

  return (
    <div className="w-full">
      {isMobile ? (
        /* Mobile Horizontal Carousel Slider (Visible on viewports < lg) */
        <div className="w-full flex flex-col gap-6 py-4 select-none">
          {/* Media Container (Persistent canvas rendering with SVG mask visible) */}
          <div className="relative w-full h-[240px] sm:h-[300px] overflow-visible bg-transparent">
            {renderCard ? renderCard(slideProgress, activeCard) : null}

            {/* Swipe overlay to capture left/right drag gestures */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(e, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  handleNext();
                } else if (info.offset.x > swipeThreshold) {
                  handlePrev();
                }
              }}
              className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-20 touch-pan-y bg-black/0"
            />

            {/* Floating Chevron navigation buttons overlapping bottom right corner */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#E5E1D3] text-[#1C1B1F] shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#E5E1D3] text-[#1C1B1F] shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Text Section (Animate text transition & typewriter color reveal) */}
          <div className="flex flex-col gap-2 min-h-[140px] px-1 mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-3"
              >
                <div>
                  {/* Title character-by-character color fill reveal */}
                  <h3 className="text-xl font-bold tracking-tight text-[#1C1B1F]/20">
                    {mobileTitleChars.map((char, charIdx) => {
                      const sequenceIdx = charIdx;
                      const isFilled = isMobileFullyRevealed || sequenceIdx < mobileRevealedCount - cursorTrailSize;
                      const isCursor = mobileRevealedCount > 0 && !isMobileFullyRevealed && sequenceIdx >= mobileRevealedCount - cursorTrailSize && sequenceIdx <= mobileRevealedCount;

                      return (
                        <span
                          key={charIdx}
                          className={cn(
                            "transition-colors duration-150",
                            isCursor
                              ? "text-[#D9692A] font-bold"
                              : isFilled
                              ? "text-[#1C1B1F] font-bold"
                              : "text-[#1C1B1F]/20"
                          )}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h3>
                </div>

                {/* Description character-by-character color fill reveal */}
                <p className="text-sm sm:text-base leading-relaxed font-semibold text-[#1C1B1F]/20">
                  {mobileDescChars.map((char, charIdx) => {
                    const sequenceIdx = mobileTitleChars.length + charIdx;
                    const isFilled = isMobileFullyRevealed || sequenceIdx < mobileRevealedCount - cursorTrailSize;
                    const isCursor = mobileRevealedCount > 0 && !isMobileFullyRevealed && sequenceIdx >= mobileRevealedCount - cursorTrailSize && sequenceIdx <= mobileRevealedCount;

                    return (
                      <span
                        key={charIdx}
                        className={cn(
                          "transition-colors duration-150",
                          isCursor
                            ? "text-[#D9692A] font-semibold"
                            : isFilled
                            ? "text-[#1C1B1F] font-semibold"
                            : "text-[#1C1B1F]/20 font-semibold"
                        )}
                      >
                        {char}
                      </span>
                    );
                  })}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress indicator line */}
          <div className="w-full h-0.5 bg-[#E5E1D3]/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#1C1B1F]"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeCard + 1) / cardLength) * 100}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
          </div>
        </div>
      ) : (
        /* Desktop Sticky Scroll Section (Visible on viewports >= lg) */
        <div
          ref={containerRef}
          className="flex flex-row gap-12 lg:gap-16 justify-between items-start w-full py-4"
        >
          {/* Left Column: Scrolling Text Items */}
          <div className="w-full lg:w-1/2 space-y-32 md:space-y-44 pt-36 lg:pt-40 pb-36 lg:pb-40">
            {content.map((item, index) => {
              const isActive = activeCard === index;
              
              // Calculate item-specific scroll fill progress
              const numItems = content.length;
              const startRatio = index / numItems;
              const endRatio = (index + 1) / numItems;
              const itemProgress = Math.min(
                1,
                Math.max(0, (scrollProgress - startRatio) / (endRatio - startRatio))
              );

              const titleChars = item.title.split("");
              const descChars = item.description.split("");
              const totalLength = titleChars.length + descChars.length;
              
              // Define revealed count based on scroll state
              let revealedCount = 0;
              let isFullyRevealed = false;
              
              if (index < activeCard) {
                revealedCount = totalLength;
                isFullyRevealed = true; // completely scrolled past, remove cursor trail
              } else if (isActive) {
                revealedCount = Math.floor(itemProgress * totalLength);
                if (itemProgress >= 0.98 || revealedCount >= totalLength) {
                  isFullyRevealed = true; // completed active reveal, remove cursor trail
                }
              }

              return (
                <div
                  key={item.title + index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={cn(
                    "space-y-4 max-w-xl transition-all duration-300",
                    isActive ? "opacity-100 scale-100" : "opacity-35 scale-[0.98]"
                  )}
                >
                  <div>
                    {/* Title scroll-based continuous typewriter reveal */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1B1F]/20">
                      {titleChars.map((char, charIdx) => {
                        const sequenceIdx = charIdx;
                        const isTitleFilled = isFullyRevealed || sequenceIdx < revealedCount - cursorTrailSize;
                        const isTitleCursor = revealedCount > 0 && !isFullyRevealed && sequenceIdx >= revealedCount - cursorTrailSize && sequenceIdx <= revealedCount;

                        return (
                          <span
                            key={charIdx}
                            className={cn(
                              "transition-colors duration-150",
                              isTitleCursor
                                ? "text-[#D9692A] font-bold"
                                : isTitleFilled
                                ? "text-[#1C1B1F] font-bold"
                                : "text-[#1C1B1F]/20"
                            )}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </h3>
                  </div>
                  
                  {/* Description scroll-based continuous typewriter reveal */}
                  <p className="text-base sm:text-lg leading-relaxed font-semibold text-[#1C1B1F]/20">
                    {descChars.map((char, charIdx) => {
                      const sequenceIdx = titleChars.length + charIdx;
                      const isFilled = isFullyRevealed || sequenceIdx < revealedCount - cursorTrailSize;
                      const isCursor = revealedCount > 0 && !isFullyRevealed && sequenceIdx >= revealedCount - cursorTrailSize && sequenceIdx <= revealedCount;

                      return (
                        <span
                          key={charIdx}
                          className={cn(
                            "transition-colors duration-150",
                            isCursor
                              ? "text-[#D9692A] font-semibold"
                              : isFilled
                              ? "text-[#1C1B1F] font-semibold"
                              : "text-[#1C1B1F]/20 font-semibold"
                          )}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: GSAP Pinned Image Card Container */}
          <div className="w-full lg:w-1/2 min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] xl:min-h-[460px] relative">
            <div
              ref={rightCardRef}
              className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px] overflow-visible z-20 relative"
            >
              {renderCard ? renderCard(scrollProgress, activeCard) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
