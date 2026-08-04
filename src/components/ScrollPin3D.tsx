"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Box, Cpu, CheckCircle2 } from "lucide-react";

export default function ScrollPin3D() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(
        card,
        { rotateX: 35, rotateY: -25, scale: 0.8, opacity: 0.5 },
        { rotateX: 0, rotateY: 0, scale: 1, opacity: 1, duration: 1 }
      )
        .to(".step-1", { opacity: 1, y: 0, duration: 0.5 })
        .to(card, { rotateY: 15, scale: 1.05, duration: 0.8 })
        .to(".step-2", { opacity: 1, y: 0, duration: 0.5 })
        .to(card, { rotateY: -15, rotateX: -10, duration: 0.8 })
        .to(".step-3", { opacity: 1, y: 0, duration: 0.5 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="h-screen relative flex items-center justify-center bg-zinc-100/70 overflow-hidden border-y border-zinc-200"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Pinned Text Content */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-indigo-600 text-xs font-semibold uppercase">
            ScrollTrigger Pinning
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Scrub-Controlled <br />
            <span className="text-gradient">3D Animation</span>
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed">
            As you scroll down, GSAP pins this container while binding your exact scroll progression directly to 3D matrix transformations and step-by-step feature reveals.
          </p>

          <div className="space-y-3 pt-2">
            <div className="step-1 opacity-20 transform translate-y-4 transition-all flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
              <span className="text-xs font-semibold text-zinc-900">
                1. Scroll-linked 3D rotation & scale scrubbing
              </span>
            </div>
            <div className="step-2 opacity-20 transform translate-y-4 transition-all flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
              <span className="text-xs font-semibold text-zinc-900">
                2. Zero layout shift pin timeline management
              </span>
            </div>
            <div className="step-3 opacity-20 transform translate-y-4 transition-all flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
              <span className="text-xs font-semibold text-zinc-900">
                3. High-performance GPU hardware acceleration
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Perspective Card */}
        <div className="lg:col-span-7 flex justify-center [perspective:1000px]">
          <div
            ref={cardRef}
            className="w-full max-w-lg bg-white p-8 rounded-3xl border border-zinc-200 shadow-2xl space-y-6 transition-all duration-100"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Box className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">
                    3D Matrix Transformation
                  </div>
                  <div className="text-xs text-zinc-500">GSAP ScrollTrigger Timeline</div>
                </div>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <div className="h-44 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-sky-50 border border-zinc-200 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between">
                <Layers className="w-7 h-7 text-indigo-600" />
                <Cpu className="w-7 h-7 text-purple-600" />
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-500">Transform Matrix</div>
                <div className="text-base font-bold text-zinc-900 tracking-wider">
                  matrix3d(1, 0, 0, 0, ...)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
                <div className="text-xs text-zinc-500">FPS Target</div>
                <div className="text-base font-bold text-emerald-600">60 FPS</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-center">
                <div className="text-xs text-zinc-500">Easing</div>
                <div className="text-base font-bold text-indigo-600">Scrub (1s)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
