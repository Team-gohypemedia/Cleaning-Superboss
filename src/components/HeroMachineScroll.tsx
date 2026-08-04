"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 192;
const FRAME_PATH = (index: number) =>
  `/industrial-machine-scroll-frames-clean/frames/frame_${String(index).padStart(4, "0")}.webp`;

const PHRASES = [
  {
    id: 1,
    text: "We have reinvented the future of industrial motion",
    startPct: 0.02,
    endPct: 0.3,
  },
  {
    id: 2,
    text: "Autonomous robotics & high-torque pneumatic power",
    startPct: 0.35,
    endPct: 0.63,
  },
  {
    id: 3,
    text: "Real-time telemetry with zero-latency precision",
    startPct: 0.68,
    endPct: 0.95,
  },
];

export default function HeroMachineScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameObj = useRef({ frame: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const loadedImages: HTMLImageElement[] = [];

    // Full screen object-cover Canvas drawing function
    const drawFrame = (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const imgAspect = img.width / img.height;
      const canvasAspect = rect.width / rect.height;

      let renderWidth = rect.width;
      let renderHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      // Full Cover math: Fill full canvas screen edge-to-edge
      if (canvasAspect > imgAspect) {
        renderWidth = rect.width;
        renderHeight = rect.width / imgAspect;
        offsetY = (rect.height - renderHeight) / 2;
      } else {
        renderHeight = rect.height;
        renderWidth = rect.height * imgAspect;
        offsetX = (rect.width - renderWidth) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      ctx.restore();
    };

    // Preload all 192 frames silently in the background
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      if (i === 1) {
        img.onload = () => drawFrame(0);
      }
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Pin hero section and scrub frame sequence + 3 centered phrases until end
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;

            // Update 3D Frame Index
            const frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.floor(progress * (TOTAL_FRAMES - 1))
            );
            currentFrameObj.current.frame = frameIndex;
            drawFrame(frameIndex);

            // Update 3 Centered Text Phrases & Character Fills
            PHRASES.forEach((phrase, pIdx) => {
              const phraseElem = section.querySelector(`.phrase-container-${pIdx}`);
              if (!phraseElem) return;

              // Determine phrase opacity
              let phraseOpacity = 0;
              const fadeBuffer = 0.04;

              if (progress >= phrase.startPct && progress <= phrase.endPct) {
                if (progress < phrase.startPct + fadeBuffer) {
                  phraseOpacity = (progress - phrase.startPct) / fadeBuffer;
                } else if (progress > phrase.endPct - fadeBuffer) {
                  phraseOpacity = (phrase.endPct - progress) / fadeBuffer;
                } else {
                  phraseOpacity = 1;
                }
              } else {
                phraseOpacity = 0;
              }

              (phraseElem as HTMLElement).style.opacity = String(phraseOpacity);
              (phraseElem as HTMLElement).style.pointerEvents =
                phraseOpacity > 0.5 ? "auto" : "none";

              // Update Character Fill inside phrase
              if (phraseOpacity > 0) {
                const charSpans = phraseElem.querySelectorAll(".char-span");
                const phraseProg = Math.max(
                  0,
                  Math.min(
                    1,
                    (progress - phrase.startPct) / (phrase.endPct - phrase.startPct)
                  )
                );
                const activeCharIdx = Math.floor(phraseProg * charSpans.length);

                charSpans.forEach((span, cIdx) => {
                  const el = span as HTMLElement;
                  if (cIdx < activeCharIdx) {
                    el.style.color = "#ffffff";
                    el.style.opacity = "1";
                    el.style.textShadow = "none";
                  } else if (cIdx === activeCharIdx) {
                    el.style.color = "#D9692A"; // Primary Orange (#D9692A)
                    el.style.opacity = "1";
                    el.style.textShadow = "0 0 24px rgba(217, 105, 42, 0.9)";
                  } else {
                    // Hide upcoming unread characters completely until scroll reaches them
                    el.style.color = "transparent";
                    el.style.opacity = "0";
                    el.style.textShadow = "none";
                  }
                });
              }
            });
          },
        },
      });
    }, section);

    const handleResize = () => {
      drawFrame(currentFrameObj.current.frame);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen h-[100dvh] w-full bg-zinc-950 overflow-hidden flex items-center justify-center select-none"
    >
      {/* 3D Frame Sequence Full Screen Canvas - 100% Clear with NO Overlay Shadow */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <canvas
          ref={canvasRef}
          className="w-full h-full pointer-events-none"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 w-full h-full flex flex-col justify-between pt-28 pb-10 pointer-events-none">
        {/* Spacer */}
        <div />

        {/* Lower Positioned Display Text Container */}
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center mb-6 sm:mb-10 md:mb-12 py-4 sm:py-6 text-center min-h-[140px] sm:min-h-[180px] md:min-h-[220px]">
          {PHRASES.map((phrase, pIdx) => (
            <div
              key={phrase.id}
              className={`phrase-container-${pIdx} absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none`}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium sm:font-semibold tracking-tight leading-[1.15] text-center max-w-6xl mx-auto drop-shadow-md">
                {phrase.text.split("").map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="char-span transition-all duration-100"
                    style={{ color: "transparent", opacity: 0 }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
          ))}
        </div>

        {/* Bottom Bar: SCROLL TO EXPLORE Indicator */}
        <div className="w-full flex items-center justify-end text-xs font-mono font-bold tracking-widest text-white/90 uppercase pointer-events-auto drop-shadow-sm">
          <div className="flex items-center gap-2 text-white/90">
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
