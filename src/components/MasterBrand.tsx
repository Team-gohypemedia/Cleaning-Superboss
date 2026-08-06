"use client";

import React, { useRef, useEffect, useState } from "react";
import { IconicButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UnderlineToBackground from "@/components/fancy/text/underline-to-background";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_CHOREOGRAPHY_FRAMES = 192;
const CHOREOGRAPHY_FRAME_PATH = (index: number) =>
  `/camera-choreography-frames-no-logo/frames/frame_${String(index).padStart(4, "0")}.webp`;

const loadedChoreographyImages: HTMLImageElement[] = [];
let isPreloading = false;

function preloadChoreographyImages() {
  if (isPreloading || loadedChoreographyImages.length > 0) return;
  isPreloading = true;
  for (let i = 1; i <= TOTAL_CHOREOGRAPHY_FRAMES; i++) {
    const img = new Image();
    img.src = CHOREOGRAPHY_FRAME_PATH(i);
    loadedChoreographyImages.push(img);
  }
}

const extractedPath = 'M -0.5,-0.5 L 1346.5,-0.5 L 1346.5,2244.5 L 768.11,2244.01 L 700.81,2244 L 229.71,2244 L 162.41,2244 L -0.5,2244.5 L 0,1252.77 A 37.64,37.64 0 0 1 3.26,1237.46 L 26.74,1184.78 A 37.6,37.6 0 0 0 30,1169.47 L 30,355.17 A 37.6,37.6 0 0 0 26.74,339.86 L 3.26,287.18 A 37.76,37.76 0 0 1 -0.01,271.87 L -0.5,-0.5';

const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t * t * (3 - 2 * t);

const maskStates = [
  { depth: 35, topOuter: 271, topInner: 355, bottomInner: 1169, bottomOuter: 1252, arcX: 3.5, arcY: 15 },
  { depth: 35, topOuter: 600, topInner: 684, bottomInner: 1498, bottomOuter: 1581, arcX: 3.5, arcY: 15 },
  { depth: 35, topOuter: 950, topInner: 1034, bottomInner: 1848, bottomOuter: 1931, arcX: 3.5, arcY: 15 },
  { depth: 35, topOuter: 1250, topInner: 1334, bottomInner: 2148, bottomOuter: 2231, arcX: 3.5, arcY: 15 }
];

function getMaskPath(progress: number) {
  if (progress <= 0) return extractedPath;
  const scaled = clamp(progress, 0, 1) * (maskStates.length - 1);
  const index = Math.min(maskStates.length - 2, Math.floor(scaled));
  const t = ease(scaled - index);
  const a = maskStates[index];
  const b = maskStates[index + 1];

  const s = {
    depth: lerp(a.depth, b.depth, t),
    topOuter: lerp(a.topOuter, b.topOuter, t),
    topInner: lerp(a.topInner, b.topInner, t),
    bottomInner: lerp(a.bottomInner, b.bottomInner, t),
    bottomOuter: lerp(a.bottomOuter, b.bottomOuter, t),
    arcX: lerp(a.arcX, b.arcX, t),
    arcY: lerp(a.arcY, b.arcY, t),
  };

  const W = 1346;
  const H = 2244;
  const topArcEndY = s.topOuter + s.arcY;
  const topLineEndY = s.topInner - s.arcY;
  const bottomLineStartY = s.bottomInner + s.arcY;
  const bottomArcStartY = s.bottomOuter - s.arcY;
  const innerArcX = s.depth - s.arcX;
  const radius = Math.max(1, s.arcY * 2.458);

  return [
    'M -0.5,-0.5',
    `L ${W + 0.5},-0.5`,
    `L ${W + 0.5},${H + 0.5}`,
    `L 768.11,${H + 0.01}`,
    `L 700.81,${H}`,
    `L 229.71,${H}`,
    `L 162.41,${H}`,
    `L -0.5,${H + 0.5}`,
    `L 0,${s.bottomOuter.toFixed(2)}`,
    `A ${radius.toFixed(2)},${radius.toFixed(2)} 0 0 1 ${s.arcX.toFixed(2)},${bottomArcStartY.toFixed(2)}`,
    `L ${innerArcX.toFixed(2)},${bottomLineStartY.toFixed(2)}`,
    `A ${radius.toFixed(2)},${radius.toFixed(2)} 0 0 0 ${s.depth.toFixed(2)},${s.bottomInner.toFixed(2)}`,
    `L ${s.depth.toFixed(2)},${s.topInner.toFixed(2)}`,
    `A ${radius.toFixed(2)},${radius.toFixed(2)} 0 0 0 ${innerArcX.toFixed(2)},${topLineEndY.toFixed(2)}`,
    `L ${s.arcX.toFixed(2)},${topArcEndY.toFixed(2)}`,
    `A ${radius.toFixed(2)},${radius.toFixed(2)} 0 0 1 -0.01,${s.topOuter.toFixed(2)}`,
    'L -0.5,-0.5'
  ].join(' ');
}

function getBottomMaskPath(progress: number) {
  if (progress <= 0) progress = 0;
  const scaled = clamp(progress, 0, 1) * (maskStates.length - 1);
  const index = Math.min(maskStates.length - 2, Math.floor(scaled));
  const t = ease(scaled - index);
  const a = maskStates[index];
  const b = maskStates[index + 1];

  const s = {
    depth: lerp(a.depth, b.depth, t),
    topOuter: lerp(a.topOuter, b.topOuter, t),
    topInner: lerp(a.topInner, b.topInner, t),
    bottomInner: lerp(a.bottomInner, b.bottomInner, t),
    bottomOuter: lerp(a.bottomOuter, b.bottomOuter, t),
    arcX: lerp(a.arcX, b.arcX, t),
    arcY: lerp(a.arcY, b.arcY, t),
  };

  const W = 1346;
  const H = 2244;
  
  const scale = W / H;
  
  const leftOuter = s.topOuter * scale;
  const leftInner = s.topInner * scale;
  const rightInner = s.bottomInner * scale;
  const rightOuter = s.bottomOuter * scale;
  
  // Scale up the depth and curve parameters by 3.5x to make the wave prominent on mobile's stacked ratio
  const multiplier = 3.5;
  const arcX = s.arcX * scale * multiplier;
  const arcY = s.arcY * 2.458 * multiplier;
  
  const cutY = H - (s.depth * multiplier);
  const radius = Math.max(1, arcY);

  return [
    'M -0.5,-0.5',
    `L ${W + 0.5},-0.5`,
    `L ${W + 0.5},2244.5`,
    `L ${rightOuter.toFixed(2)},2244`,
    `A ${radius.toFixed(2)},${radius.toFixed(2)} 0 0 1 ${(rightOuter - arcX).toFixed(2)}, ${(H - arcY).toFixed(2)}`,
    `L ${(rightInner + arcX).toFixed(2)}, ${(cutY + arcY).toFixed(2)}`,
    `A ${radius.toFixed(2)},${radius.toFixed(2)} 0 0 0 ${rightInner.toFixed(2)},${cutY.toFixed(2)}`,
    `L ${leftInner.toFixed(2)},${cutY.toFixed(2)}`,
    `A ${radius.toFixed(2)},${radius.toFixed(2)} 0 0 0 ${(leftInner - arcX).toFixed(2)},${(cutY + arcY).toFixed(2)}`,
    `L ${(leftOuter + arcX).toFixed(2)}, ${(H - arcY).toFixed(2)}`,
    `A ${radius.toFixed(2)},${radius.toFixed(2)} 0 0 1 ${leftOuter.toFixed(2)},2244`,
    `L -0.5,2244.5`,
    `L -0.5,-0.5`
  ].join(' ');
}

function SingleChoreographyCanvas({ progress, activeIndex }: { progress: number; activeIndex: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pathD = isMobile ? getBottomMaskPath(progress) : getMaskPath(progress);

  // Define allocated frame range per heading step (192 frames divided into 4 sections)
  const ranges = [
    { start: 0, end: 47 },     // Heading 1: Precision Machining
    { start: 48, end: 95 },    // Heading 2: Industrial Automation
    { start: 96, end: 143 },   // Heading 3: Quality Compliance
    { start: 144, end: 191 },  // Heading 4: Lifecycle Support
  ];

  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const loopRef = useRef<number | null>(null);
  const rectRef = useRef<{ width: number; height: number } | null>(null);

  const progressRef = useRef(progress);
  const activeIndexRef = useRef(activeIndex);
  const lastScrollTargetRef = useRef(0);
  const playSpeedRef = useRef(0.5);

  useEffect(() => {
    progressRef.current = progress;
    activeIndexRef.current = activeIndex;
  }, [progress, activeIndex]);

  const updateRect = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    rectRef.current = { width: rect.width, height: rect.height };
  };

  const drawFrame = (frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const idx = Math.min(
      TOTAL_CHOREOGRAPHY_FRAMES - 1,
      Math.max(0, Math.floor(frameIdx))
    );

    const img = loadedChoreographyImages[idx];
    if (!img) return;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      if (!rectRef.current) {
        const rect = canvas.getBoundingClientRect();
        rectRef.current = { width: rect.width, height: rect.height };
      }
      const rect = rectRef.current;

      const targetW = Math.round(rect.width * dpr);
      const targetH = Math.round(rect.height * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
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

    if (img.complete && img.naturalWidth !== 0) {
      render();
    } else {
      img.onload = render;
    }
  };

  // Single permanent frame-loop running continuously at 60fps
  useEffect(() => {
    preloadChoreographyImages();
    const t = setTimeout(updateRect, 100);
    window.addEventListener("resize", updateRect);

    const getFrameRange = (frame: number) => {
      const idx = Math.min(3, Math.max(0, Math.floor(frame / 48)));
      return {
        start: idx * 48,
        end: idx === 3 ? 191 : (idx + 1) * 48 - 1
      };
    };

    const tick = () => {
      const progressTarget = progressRef.current * (TOTAL_CHOREOGRAPHY_FRAMES - 1);
      
      // Calculate real-time scroll velocity (change per frame tick)
      const scrollDelta = progressTarget - lastScrollTargetRef.current;
      lastScrollTargetRef.current = progressTarget;

      // Active scroll is defined by a significant movement velocity (delta > 0.08 frames)
      const isScrollMoving = Math.abs(scrollDelta) > 0.08;

      if (isScrollMoving) {
        // User is actively scrolling: sync target directly to scroll position
        targetFrameRef.current = progressTarget;
        // Capture the scroll velocity (clamped between -2.5 and +2.5 to prevent motion blur)
        playSpeedRef.current = Math.max(-2.5, Math.min(2.5, scrollDelta));
      } else {
        // Scroll is static/decelerating: smoothly ease play speed towards the default speed (+0.35)
        playSpeedRef.current += (0.35 - playSpeedRef.current) * 0.05;
        targetFrameRef.current += playSpeedRef.current;

        // Find the range based on the frame where scrolling came to rest
        const range = getFrameRange(targetFrameRef.current);
        if (targetFrameRef.current >= range.end) {
          targetFrameRef.current = range.start;
          currentFrameRef.current = range.start; // snap immediately to prevent backward rewind lerp
        }
      }

      // Smoothly ease current frame towards the target using identical interpolation
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) < 0.01) {
        currentFrameRef.current = targetFrameRef.current;
      } else {
        currentFrameRef.current += diff * (isMobile ? 0.08 : 0.15); // Lerp factor
      }

      drawFrame(currentFrameRef.current);
      loopRef.current = requestAnimationFrame(tick);
    };

    loopRef.current = requestAnimationFrame(tick);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateRect);
      if (loopRef.current) cancelAnimationFrame(loopRef.current);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <svg className="w-full h-full block filter drop-shadow-2xl overflow-visible" viewBox="-0.5 -0.5 1347 2245" preserveAspectRatio="none">
        <defs>
          <clipPath id="terminalMorphClip" clipPathUnits="userSpaceOnUse">
            <path d={pathD} />
          </clipPath>
        </defs>

        <g clipPath="url(#terminalMorphClip)">
          <foreignObject x="-0.5" y="-0.5" width="100%" height="100%">
            <div className="w-full h-full relative bg-[#111]">
              <canvas ref={canvasRef} className="w-full h-full block object-cover" />
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}

const content = [
  {
    title: "Precision Machining",
    description:
      "High-tolerance 5-axis CNC machining, heavy structural welding, and advanced metal alloy fabrication. Engineered for zero-defect production in mission-critical applications.",
  },
  {
    title: "Industrial Automation",
    description:
      "Autonomous robotic assembly lines, high-torque pneumatic actuators, and automated material handling designed to maximize plant throughput and eliminate operational bottlenecks.",
  },
  {
    title: "Quality Compliance & Testing",
    description:
      "ISO 9001:2015 certified quality management. Laser metrology, ultrasonic non-destructive testing, and stress diagnostics ensuring 100% compliance before shipment.",
  },
  {
    title: "Lifecycle Support & Telemetry",
    description:
      "24/7 predictive IoT machine health telemetry, rapid OEM spare parts deployment, and field engineering support guaranteeing continuous, uninterrupted uptime.",
  },
];

export default function MasterBrand() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="master-brand"
      className="relative w-full bg-[#FAF6F0] text-[#1C1B1F] py-20 md:py-32 select-none border-t border-[#E5E1D3]"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 flex flex-col">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 text-left mb-12 sm:mb-16 lg:mb-24"
        >
          <div className="flex flex-col items-start">
            <Badge
              variant="outline"
              className="w-fit h-auto mb-4 border-[#1C1B1F]/15 text-[#1C1B1F]/70 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-transparent"
            >
              The System
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight max-w-[650px] text-[#1C1B1F] leading-tight">
              The <UnderlineToBackground>Production</UnderlineToBackground> Engine
            </h2>
            <p className="text-[#1C1B1F]/80 text-sm sm:text-base md:text-lg italic mt-3 max-w-[600px]">
              Integrated end-to-end industrial manufacturing. Built for high-volume efficiency & absolute precision.
            </p>
          </div>

          <p className="text-[#1C1B1F]/70 max-w-[500px] text-sm sm:text-base leading-relaxed text-left lg:text-left lg:pt-2 font-light">
            Standard suppliers deliver isolated component parts. We build connected manufacturing ecosystems—combining custom engineering, high-torque robotics, rigorous testing, and continuous telemetry into one unified production machine.
          </p>
        </motion.div>

        {/* Sticky Scroll Component */}
        <div className="w-full">
          <StickyScroll
            content={content}
            renderCard={(scrollProgress, activeIndex) => (
              <SingleChoreographyCanvas progress={scrollProgress} activeIndex={activeIndex} />
            )}
          />
        </div>

        {/* Call to Action Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="mt-10 sm:mt-12 lg:mt-16 flex justify-center w-full relative z-30"
        >
          <IconicButton
            href="#contact"
            className="w-fit sm:w-auto bg-[#D9692A] text-white hover:bg-[#c2581f]"
            iconWrapperClassName="bg-white text-[#D9692A] group-hover:bg-white"
          >
            BOOK A CALL WITH US
          </IconicButton>
        </motion.div>
      </div>
    </section>
  );
}
