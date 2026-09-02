"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, ShieldCheck, Zap, Activity, Loader2 } from "lucide-react";

const TOTAL_FRAMES = 240;
const FRAME_PATH = (index: number) =>
  `/fix_morphing_frames_webp/frame_${String(index).padStart(6, "0")}.webp`;

export default function IndustrialMachineScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Store preloaded image instances
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameObj = useRef({ frame: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    // Preload all 192 frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;

    // Draw frame function on canvas
    const drawFrame = (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      // Handle high DPI crisp canvas rendering & contain fit
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw image contained inside canvas aspect ratio
      const imgAspect = img.width / img.height;
      const canvasAspect = rect.width / rect.height;

      let renderWidth = rect.width;
      let renderHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasAspect > imgAspect) {
        renderHeight = rect.height;
        renderWidth = rect.height * imgAspect;
        offsetX = (rect.width - renderWidth) / 2;
      } else {
        renderWidth = rect.width;
        renderHeight = rect.width / imgAspect;
        offsetY = (rect.height - renderHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      ctx.restore();
    };

    // Draw initial first frame
    if (imagesRef.current[0]) {
      imagesRef.current[0].onload = () => drawFrame(0);
    }

    // Bind GSAP ScrollTrigger timeline to scrub through frames 0..191
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.floor(self.progress * (TOTAL_FRAMES - 1))
            );
            currentFrameObj.current.frame = frameIndex;
            drawFrame(frameIndex);
          },
        },
      });

      // Synchronize floating feature callouts based on scroll progress
      tl.to(".feature-1", { opacity: 1, y: 0, duration: 0.25 })
        .to(".feature-1", { opacity: 0, y: -20, duration: 0.25 }, "+=0.5")
        .to(".feature-2", { opacity: 1, y: 0, duration: 0.25 })
        .to(".feature-2", { opacity: 0, y: -20, duration: 0.25 }, "+=0.5")
        .to(".feature-3", { opacity: 1, y: 0, duration: 0.25 })
        .to(".feature-3", { opacity: 0, y: -20, duration: 0.25 }, "+=0.5")
        .to(".feature-4", { opacity: 1, y: 0, duration: 0.25 });
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
      id="machine-sequence"
      className="h-screen relative flex items-center justify-center bg-zinc-50 overflow-hidden border-y border-zinc-200 select-none"
    >
      {/* Background Soft Studio Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-zinc-50 to-zinc-50 pointer-events-none" />

      {/* Frame Loading Progress Overlay */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md transition-opacity duration-500">
          <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mb-4" />
          <div className="text-sm font-semibold text-zinc-900">
            Loading Industrial 3D Frames... {loadProgress}%
          </div>
          <div className="w-48 h-1.5 bg-zinc-200 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-200"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 py-12">
        {/* Left Column: Fixed Header & Scroll Callouts */}
        <div className="lg:col-span-5 space-y-6 z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            Interactive 3D Machine Scrub
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.1]">
            Precision <br />
            <span className="text-gradient">Industrial Motion</span>
          </h2>

          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            Scroll down to scrub through 192 ultra-high-definition rendered 3D frames with real-time hardware acceleration.
          </p>

          {/* Synchronized Callout Cards */}
          <div className="relative min-h-[140px]">
            {/* Feature 1 */}
            <div className="feature-1 absolute inset-x-0 top-0 opacity-0 translate-y-4 transition-all duration-300 glass-card p-5 rounded-2xl border border-zinc-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-xs font-bold text-zinc-900">
                  01. Autonomous CNC Mechanics
                </span>
              </div>
              <p className="text-xs text-zinc-600">
                Heavy-duty multi-axis robotic articulation designed for high-tolerance manufacturing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-2 absolute inset-x-0 top-0 opacity-0 translate-y-4 transition-all duration-300 glass-card p-5 rounded-2xl border border-zinc-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-sky-600" />
                </div>
                <span className="text-xs font-bold text-zinc-900">
                  02. High-Torque Pneumatics
                </span>
              </div>
              <p className="text-xs text-zinc-600">
                Integrated pressure stabilization valves delivering continuous peak operational power.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-3 absolute inset-x-0 top-0 opacity-0 translate-y-4 transition-all duration-300 glass-card p-5 rounded-2xl border border-zinc-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-xs font-bold text-zinc-900">
                  03. IoT Sensor Array Telemetry
                </span>
              </div>
              <p className="text-xs text-zinc-600">
                Real-time thermal monitoring, vibration feedback, and predictive maintenance analysis.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-4 absolute inset-x-0 top-0 opacity-0 translate-y-4 transition-all duration-300 glass-card p-5 rounded-2xl border border-zinc-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs font-bold text-zinc-900">
                  04. Industrial Grade Safety Rating
                </span>
              </div>
              <p className="text-xs text-zinc-600">
                Encapsulated protective housing with automatic emergency cut-offs and zero fail-state design.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Frame Canvas */}
        <div className="lg:col-span-7 h-[65vh] lg:h-[80vh] relative flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain pointer-events-none drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
