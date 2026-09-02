"use client";

import ParallaxLayer from "@/components/ParallaxLayer";
import { Sparkles, Move, Compass, ShieldCheck, Cpu, Code2 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "GSAP ScrollTrigger",
    description:
      "Ultra-smooth scroll position scrubbing, pinned element scenes, and multi-layer parallax depth animations.",
    speed: -0.2,
    color: "bg-white",
    border: "border-[#E5E1D3]",
    accent: "text-[#5680e9]",
    iconBg: "bg-[#5680e9]/10 border-[#5680e9]/20",
  },
  {
    icon: Move,
    title: "Lenis Smooth Scroll",
    description:
      "Inertia-based smooth wheel scrolling that seamlessly synchronizes with GSAP ticker for 60fps responsiveness.",
    speed: 0.4,
    color: "bg-white",
    border: "border-[#E5E1D3]",
    accent: "text-[#5680e9]",
    iconBg: "bg-[#5680e9]/10 border-[#5680e9]/20",
  },
  {
    icon: Compass,
    title: "Three.js & R3F Canvases",
    description:
      "Declarative WebGL scene rendering with React Three Fiber, physical lighting, floating geometries, and particle stars.",
    speed: -0.15,
    color: "bg-white",
    border: "border-[#E5E1D3]",
    accent: "text-[#5680e9]",
    iconBg: "bg-[#5680e9]/10 border-[#5680e9]/20",
  },
  {
    icon: Cpu,
    title: "Next.js App Router",
    description:
      "Built on Next.js 16 with full TypeScript support, server components, and client-side SSR hydration safety.",
    speed: 0.3,
    color: "bg-white",
    border: "border-[#E5E1D3]",
    accent: "text-[#5680e9]",
    iconBg: "bg-[#5680e9]/10 border-[#5680e9]/20",
  },
  {
    icon: ShieldCheck,
    title: "Tailwind CSS Design Tokens",
    description:
      "Glassmorphism cards, HSL color tokens, text gradients, glowing depth shadows, and responsive layout utilities.",
    speed: -0.3,
    color: "bg-white",
    border: "border-[#E5E1D3]",
    accent: "text-[#5680e9]",
    iconBg: "bg-[#5680e9]/10 border-[#5680e9]/20",
  },
  {
    icon: Code2,
    title: "Production Boilerplate",
    description:
      "Clean modular folder architecture ready to clone, customize, and extend for agency sites or product landing pages.",
    speed: 0.25,
    color: "bg-white",
    border: "border-[#E5E1D3]",
    accent: "text-[#5680e9]",
    iconBg: "bg-[#5680e9]/10 border-[#5680e9]/20",
  },
];

export default function FeatureParallax() {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden bg-[#FAF6F0]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5680e9]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#5680e9]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D3] text-[#5680e9] text-xs font-semibold uppercase tracking-wider shadow-2xs">
            Deep Parallax Architecture
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1C1B1F]">
            Engineered for <span className="text-gradient-primary">Immersion</span>
          </h2>
          <p className="text-[#1C1B1F]/70 text-base md:text-lg">
            Every layer in this grid moves at an independent scroll rate, giving your users a real sense of 3D spatial depth.
          </p>
        </div>

        {/* Parallax Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ParallaxLayer key={idx} speed={feature.speed}>
                <div
                  className={`glass-card p-8 rounded-3xl border ${feature.border} space-y-6 hover:scale-[1.02] transition-all duration-300 group ${feature.color}`}
                >
                  <div className={`w-12 h-12 rounded-2xl border ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.accent}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#1C1B1F] group-hover:text-[#5680e9] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#1C1B1F]/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t border-[#E5E1D3] text-xs font-mono text-[#1C1B1F]/60">
                    <span>Parallax Speed</span>
                    <span className={`font-bold ${feature.accent}`}>
                      {feature.speed > 0 ? `+${feature.speed}` : feature.speed}x
                    </span>
                  </div>
                </div>
              </ParallaxLayer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
