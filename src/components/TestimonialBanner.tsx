"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    rating: "5.0 RATED · BEFORE & AFTER VERIFIED",
    quote:
      "“Cleaning Superboss completely transformed our space. The seamless online booking, automated quote accuracy, and spotless attention to detail set a whole new standard for modern cleaning.”",
    author: "Sarah Jenkins",
    role: "Luxury Homeowner & Airbnb Superhost · Verified Client",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    rating: "5.0 RATED · COMMERCIAL CONTRACT",
    quote:
      "“Managing 4 floors of corporate office space used to be a logistics headache. Cleaning Superboss automated our recurring commercial cleaning with flawless consistency and real-time reports.”",
    author: "Marcus Vance",
    role: "Director of Facilities, Nexus Tech Hub · Corporate Client",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    rating: "5.0 RATED · ARCHITECTURAL DEEP CLEAN",
    quote:
      "“The precision and care their team brings to designer fixtures, luxury hardwood, and architectural windows is unmatched. Truly a white-glove, 5-star experience every single time.”",
    author: "Elena Rostova",
    role: "Penthouse Resident & Interior Designer · Verified Client",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    rating: "5.0 RATED · HOSPITALITY TURNOVER",
    quote:
      "“Turnaround speed between VIP guest check-ins is critical for our properties. Cleaning Superboss never misses a beat—our guest satisfaction ratings have climbed to an all-time high.”",
    author: "David Chen",
    role: "Boutique Hotel Operator & Superhost Portfolio · Verified Client",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    rating: "5.0 RATED · RESIDENTIAL ECO-CLEAN",
    quote:
      "“From their instant 60-second online booking to the vetted cleaning professionals who arrived on time with eco-friendly products, everything about this platform is top tier.”",
    author: "Amanda Miller",
    role: "Residential Homeowner · Regular Bi-Weekly Client",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function TestimonialBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState({ x: 1, y: 1 });

  // Curved Path Shape
  const dCurved =
    "M -0.5,-0.5 L 221.69,0.03 A 27.71,27.71 0 0 1 242.23,9.21 L 261.77,30.91 A 27.64,27.64 0 0 0 282.31,40.06 L 1157.69,40.06 A 27.64,27.64 0 0 0 1178.23,30.91 L 1197.77,9.21 A 27.71,27.71 0 0 1 1218.31,0.03 L 1440.5,-0.5 L 1440.5,1285.5 L 1218.31,1285.03 A 27.71,27.71 0 0 1 1197.77,1275.85 L 1178.23,1254.15 A 27.64,27.64 0 0 0 1157.69,1245 L 282.31,1245 A 27.64,27.64 0 0 0 261.77,1254.15 L 242.23,1275.85 A 27.71,27.71 0 0 1 221.69,1285.03 L -0.5,1285.5 L -0.5,-0.5";

  // Flat Straight Path Shape
  const dStraight =
    "M -0.5,-0.5 L 221.69,-0.5 A 27.71,27.71 0 0 1 221.69,-0.5 L 221.69,-0.5 A 27.64,27.64 0 0 0 221.69,-0.5 L 1218.31,-0.5 A 27.64,27.64 0 0 0 1218.31,-0.5 L 1218.31,-0.5 A 27.71,27.71 0 0 1 1218.31,-0.5 L 1440.5,-0.5 L 1440.5,1285.5 L 1218.31,1285.5 A 27.71,27.71 0 0 1 1218.31,1285.5 L 1218.31,1285.5 A 27.64,27.64 0 0 0 1218.31,1285.5 L 221.69,1285.5 A 27.64,27.64 0 0 0 221.69,1285.5 L 221.69,1285.5 A 27.71,27.71 0 0 1 221.69,1285.5 L -0.5,1285.5 L -0.5,-0.5";

  // Auto-rotate / shuffle reviews every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Handle responsive clip-path scaling
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      if (!container) return;
      setScale({
        x: container.offsetWidth / 1440,
        y: container.offsetHeight / 1285,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP ScrollTrigger for Parallax and Path Morphing (Without hiding text)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const bg = bgRef.current;
    const path = pathRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Parallax background image scroll
      if (bg) {
        gsap.fromTo(
          bg,
          { yPercent: -15, scale: 1.1 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 2. SVG Path Morphing (curved -> flat -> curved)
      if (path) {
        const morphTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        morphTimeline
          .fromTo(
            path,
            { attr: { d: dCurved } },
            { attr: { d: dStraight }, duration: 0.5, ease: "power1.inOut" }
          )
          .to(path, { attr: { d: dCurved }, duration: 0.5, ease: "power1.inOut" });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[currentIndex];

  return (
    <section id="proof-of-work" className="relative w-full overflow-visible py-4 bg-[#f8fbfe]">
      {/* Absolute SVG ClipPath definition stretching responsively */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="banner-clip" clipPathUnits="userSpaceOnUse">
            <path
              ref={pathRef}
              transform={`scale(${scale.x}, ${scale.y})`}
              d={dCurved}
            />
          </clipPath>
        </defs>
      </svg>

      {/* Main Clipped Container */}
      <div
        ref={containerRef}
        className="w-full h-[460px] xs:h-[500px] sm:h-[560px] md:h-[640px] lg:h-[700px] relative overflow-hidden bg-[#08295b] select-none"
        style={{ clipPath: "url(#banner-clip)" }}
      >
        {/* Parallax Background Image */}
        <img
          ref={bgRef}
          src={activeReview.image}
          alt="Cleaning Superboss client space"
          className="absolute inset-0 w-full h-[130%] object-cover opacity-35 transition-opacity duration-700"
        />

        {/* Ambient Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/65 z-10" />

        {/* Floating gridlines container inside the banner */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-15">
          <div className="w-full h-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-white/30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="border-r border-white/30 h-full relative" />
            ))}
          </div>
        </div>

        {/* Testimonial Content: Always fully visible, smoothly transitions on shuffle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 xs:px-6 sm:px-12 md:px-24 z-20">
          <div className="max-w-[950px] w-full min-h-[260px] sm:min-h-[280px] flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-4 sm:space-y-6 w-full"
              >
                {/* Rating Stars Badge */}
                <div className="flex items-center justify-center gap-1.5 text-[#2196f3] text-sm sm:text-base font-bold tracking-widest uppercase">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold ml-2">
                    {activeReview.rating}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-relaxed sm:leading-snug tracking-tight">
                  {activeReview.quote}
                </p>

                {/* Author Attribution */}
                <div className="space-y-0.5 sm:space-y-1 pt-2">
                  <span className="block text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
                    {activeReview.author}
                  </span>
                  <span className="block text-[10px] sm:text-xs font-semibold text-white/60 tracking-wider">
                    {activeReview.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Navigation Dots & Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8 z-30">
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#2196f3]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              aria-label="Next review"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
