"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function TestimonialBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [scale, setScale] = useState({ x: 1, y: 1 });

  // Curved Path Shape (notch is 40px deep at top and bottom)
  const dCurved = "M -0.5,-0.5 L 221.69,0.03 A 27.71,27.71 0 0 1 242.23,9.21 L 261.77,30.91 A 27.64,27.64 0 0 0 282.31,40.06 L 1157.69,40.06 A 27.64,27.64 0 0 0 1178.23,30.91 L 1197.77,9.21 A 27.71,27.71 0 0 1 1218.31,0.03 L 1440.5,-0.5 L 1440.5,1285.5 L 1218.31,1285.03 A 27.71,27.71 0 0 1 1197.77,1275.85 L 1178.23,1254.15 A 27.64,27.64 0 0 0 1157.69,1245 L 282.31,1245 A 27.64,27.64 0 0 0 261.77,1254.15 L 242.23,1275.85 A 27.71,27.71 0 0 1 221.69,1285.03 L -0.5,1285.5 L -0.5,-0.5";

  // Flat Straight Path Shape with constant radii (collapsing point coordinates to prevent transition ballooning/bubbling)
  const dStraight = "M -0.5,-0.5 L 221.69,-0.5 A 27.71,27.71 0 0 1 221.69,-0.5 L 221.69,-0.5 A 27.64,27.64 0 0 0 221.69,-0.5 L 1218.31,-0.5 A 27.64,27.64 0 0 0 1218.31,-0.5 L 1218.31,-0.5 A 27.71,27.71 0 0 1 1218.31,-0.5 L 1440.5,-0.5 L 1440.5,1285.5 L 1218.31,1285.5 A 27.71,27.71 0 0 1 1218.31,1285.5 L 1218.31,1285.5 A 27.64,27.64 0 0 0 1218.31,1285.5 L 221.69,1285.5 A 27.64,27.64 0 0 0 221.69,1285.5 L 221.69,1285.5 A 27.71,27.71 0 0 1 221.69,1285.5 L -0.5,1285.5 L -0.5,-0.5";

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

  // GSAP ScrollTrigger for Parallax, Path Morphing and Text Fades
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const text = textRef.current;
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

      // 2. SVG Path Morphing (curved -> straight/flat in center viewport -> curved as it exits)
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
          .fromTo(path, { attr: { d: dCurved } }, { attr: { d: dStraight }, duration: 0.5, ease: "power1.inOut" })
          .to(path, { attr: { d: dCurved }, duration: 0.5, ease: "power1.inOut" });
      }

      // 3. Testimonial content fade-in and fade-out transition
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              end: "center center",
              scrub: 1.2,
            },
          }
        );

        // Fade out content as it scrolls out of view
        gsap.to(text, {
          opacity: 0,
          y: -40,
          ease: "power2.in",
          scrollTrigger: {
            trigger: container,
            start: "center center",
            end: "bottom 25%",
            scrub: 1.2,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-visible py-4 bg-[#FAF6F0]">
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
        className="w-full h-[390px] xs:h-[440px] sm:h-[530px] md:h-[620px] lg:h-[700px] relative overflow-hidden bg-zinc-950 select-none"
        style={{ clipPath: "url(#banner-clip)" }}
      >
        {/* Parallax Background Image */}
        <img
          ref={bgRef}
          src="/banner_truck.png"
          alt="Heavy machinery banner background"
          className="absolute inset-0 w-full h-[130%] object-cover opacity-50"
        />

        {/* Ambient Dark Overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/45 z-10" />

        {/* Floating gridlines container inside the banner (fits website theme) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-15">
          <div className="w-full h-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-white/30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="border-r border-white/30 h-full relative" />
            ))}
          </div>
        </div>

        {/* Testimonial Content (Centered vertically and horizontally) */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 xs:px-6 sm:px-12 md:px-24 z-20"
        >
          <div className="max-w-[950px] space-y-6 sm:space-y-8">
            {/* Quote Text */}
            <p className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-relaxed sm:leading-snug tracking-tight">
              &ldquo;We have not seen this kind of accuracy with computer-vision technology... this is a significant milestone in the race to modernize the yard.&rdquo;
            </p>

            {/* Author Attribution */}
            <div className="space-y-0.5 sm:space-y-1">
              <span className="block text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
                Karen Jones
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold text-white/60 tracking-wider">
                Ryder System, Inc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
