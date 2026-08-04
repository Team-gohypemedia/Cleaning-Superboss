"use client";

import ParallaxLayer from "@/components/ParallaxLayer";
import { Factory, Globe, Share2, ArrowUpRight, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#FAF6F0] text-[#1C1B1F] pt-24 pb-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 overflow-hidden border-t border-[#E5E1D3]">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-[#D9692A]/10 via-transparent to-transparent blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1920px] mx-auto space-y-16 relative z-10">
        {/* Top CTA Banner wrapped in Parallax */}
        <ParallaxLayer speed={-0.15}>
          <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl border border-[#E5E1D3] shadow-xl text-center space-y-4 sm:space-y-6 max-w-6xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-[#D9692A]/10 flex items-center justify-center mx-auto">
              <Factory className="w-6 h-6 text-[#D9692A]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C1B1F] tracking-tight">
              Ready to Build Your <br />
              <span className="text-gradient-orange">Industrial Experience?</span>
            </h2>
            <p className="text-[#1C1B1F]/70 text-sm sm:text-base max-w-xl mx-auto">
              Use this pre-configured boilerplate to build stunning 3D industrial product sites, mechanical landing pages, or agency web experiences.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <a
                href="#features"
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#D9692A] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#c2581f] hover:scale-105 transition-all flex items-center gap-2"
              >
                Start Coding Now
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </a>
            </div>
          </div>
        </ParallaxLayer>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#E5E1D3] text-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold text-[#1C1B1F] uppercase">
              <Factory className="w-5 h-5 text-[#D9692A]" />
              Industrial
            </div>
            <p className="text-[#1C1B1F]/60 text-xs leading-relaxed">
              Next.js 16 + Tailwind CSS + GSAP + Three.js + 192 Frame Scroll Parallax Template.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#1C1B1F] mb-4">Architecture</h4>
            <ul className="space-y-2 text-[#1C1B1F]/70 text-xs">
              <li>Next.js App Router</li>
              <li>React 19 & TypeScript</li>
              <li>Tailwind CSS v4</li>
              <li>192 Frame Motion Canvas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1C1B1F] mb-4">Animation Engine</h4>
            <ul className="space-y-2 text-[#1C1B1F]/70 text-xs">
              <li>GSAP ScrollTrigger</li>
              <li>Lenis Smooth Scroll Sync</li>
              <li>3D Object Cover Fit</li>
              <li>Multi-Speed Depth Layers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1C1B1F] mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white border border-[#E5E1D3] flex items-center justify-center text-[#1C1B1F] hover:text-[#D9692A] hover:border-[#D9692A] transition-colors shadow-2xs"
                aria-label="Code Repository"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white border border-[#E5E1D3] flex items-center justify-center text-[#1C1B1F] hover:text-[#D9692A] hover:border-[#D9692A] transition-colors shadow-2xs"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white border border-[#E5E1D3] flex items-center justify-center text-[#1C1B1F] hover:text-[#D9692A] hover:border-[#D9692A] transition-colors shadow-2xs"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5E1D3] flex flex-col md:flex-row items-center justify-between text-xs text-[#1C1B1F]/50 gap-4">
          <div>© 2026 Industrial 3D Parallax Boilerplate. MIT License.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1C1B1F]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1C1B1F]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
