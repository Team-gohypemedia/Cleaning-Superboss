"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ParallaxLayer from "@/components/ParallaxLayer";
import { ArrowRight, Layers, Box, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
          "-=0.4"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-card",
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.15 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen h-[100dvh] max-h-[100dvh] flex items-center justify-center pt-20 pb-8 px-6 overflow-hidden bg-zinc-50/50"
    >
      {/* Soft Light Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
        {/* Left Column: Clean Typography & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-4 md:space-y-6">
          {/* Minimal Pill Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-xs text-zinc-700 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Next.js 16 • GSAP • Three.js • Lenis Smooth Parallax
          </div>

          {/* Clean High-Impact Heading */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.08]">
            Craft Stunning <br />
            <span className="text-gradient">3D Scroll Parallax</span> <br />
            Websites Faster.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-sm sm:text-base md:text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            A production-ready Next.js boilerplate engineered with smooth scroll synchronization, GSAP timelines, and 3D WebGL physics.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
            <a
              href="#features"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-all duration-300 shadow-lg shadow-zinc-900/10 flex items-center gap-2 group"
            >
              Explore Parallax
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#showcase"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white border border-zinc-200 text-zinc-800 font-semibold text-xs sm:text-sm hover:bg-zinc-100 transition-all duration-300 shadow-xs flex items-center gap-2"
            >
              <Box className="w-4 h-4 text-indigo-600" />
              View 3D Scene
            </a>
          </div>

          {/* Clean Metric Badges */}
          <div className="pt-4 md:pt-6 grid grid-cols-3 gap-4 border-t border-zinc-200/80 max-w-md mx-auto lg:mx-0">
            <div>
              <div className="text-xl md:text-2xl font-bold text-zinc-900">60 FPS</div>
              <div className="text-[11px] text-zinc-500 mt-0.5">Smooth WebGL</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-zinc-900">0.0 ms</div>
              <div className="text-[11px] text-zinc-500 mt-0.5">Scroll Lag</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-zinc-900">100%</div>
              <div className="text-[11px] text-zinc-500 mt-0.5">TypeScript</div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Floating Glass Cards */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <ParallaxLayer speed={0.3} className="relative z-20">
            <div className="hero-card glass-card p-5 rounded-3xl space-y-3 border border-zinc-200 max-w-sm mx-auto shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-[11px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                  GSAP ScrollTrigger
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900">Scrubbed Timelines</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Bind scroll distance directly to multi-step 3D transforms and spatial depth layers.
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={-0.2} className="relative z-10 -mt-6 ml-8">
            <div className="hero-card glass-card p-5 rounded-3xl space-y-3 border border-zinc-200 max-w-sm shadow-lg">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-sky-600" />
                </div>
                <span className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                  React Three Fiber
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900">Interactive 3D WebGL</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Custom distorted physical materials, lighting, floating geometries, and particle stars.
              </p>
            </div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
}
