"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Track scroll position past the pinned Hero section
    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "+=500%",
      onLeave: () => setIsPastHero(true),
      onEnterBack: () => setIsPastHero(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 transition-all duration-300 ${
        isPastHero
          ? "bg-[#FAF6F0]/90 backdrop-blur-xl border-b border-[#E5E1D3]/80 shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-1 group select-none">
          <div className="leading-none tracking-tighter text-left">
            <div
              className={`text-lg md:text-xl font-black italic transition-colors duration-300 ${
                isPastHero ? "text-[#1C1B1F]" : "text-white drop-shadow-md"
              }`}
            >
              INDUSTRIAL
            </div>
            <div
              className={`flex items-center gap-1 text-sm md:text-base font-black italic -mt-1 transition-colors duration-300 ${
                isPastHero ? "text-[#1C1B1F]" : "text-white drop-shadow-md"
              }`}
            >
              <span>EDGE</span>
              <span className="w-2 h-1 bg-[#D9692A] rounded-full inline-block" />
            </div>
          </div>
        </a>

        {/* Center: Floating Dark Nav Pill */}
        <nav className="hidden lg:flex items-center bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-full px-6 xl:px-12 py-3.5 shadow-2xl text-xs font-bold text-zinc-300 gap-6 xl:gap-10">
          <a href="#" className="text-white hover:text-[#D9692A] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#case-studies" className="hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#blogs" className="hover:text-white transition-colors">
            Blogs
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md ${
              isPastHero
                ? "bg-[#1C1B1F]/10 border-[#1C1B1F]/15 text-[#1C1B1F] hover:bg-[#1C1B1F]/20"
                : "bg-white/10 border-white/15 text-zinc-200 hover:text-white hover:bg-white/20"
            }`}
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md ${
              isPastHero
                ? "bg-[#1C1B1F]/10 border-[#1C1B1F]/15 text-[#1C1B1F] hover:bg-[#1C1B1F]/20"
                : "bg-white/10 border-white/15 text-zinc-200 hover:text-white hover:bg-white/20"
            }`}
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* YouTube Icon */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md ${
              isPastHero
                ? "bg-[#1C1B1F]/10 border-[#1C1B1F]/15 text-[#1C1B1F] hover:bg-[#1C1B1F]/20"
                : "bg-white/10 border-white/15 text-zinc-200 hover:text-white hover:bg-white/20"
            }`}
            aria-label="YouTube"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isPastHero ? "text-[#1C1B1F]" : "text-zinc-300 hover:text-white drop-shadow-md"
          }`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-4 text-white shadow-2xl">
          <a href="#" className="block text-sm font-semibold hover:text-[#D9692A]">
            Home
          </a>
          <a href="#about" className="block text-sm font-semibold hover:text-[#D9692A]">
            About
          </a>
          <a href="#services" className="block text-sm font-semibold hover:text-[#D9692A]">
            Services
          </a>
          <a href="#case-studies" className="block text-sm font-semibold hover:text-[#D9692A]">
            Case Studies
          </a>
          <a href="#blogs" className="block text-sm font-semibold hover:text-[#D9692A]">
            Blogs
          </a>
          <a href="#contact" className="block text-sm font-semibold hover:text-[#D9692A]">
            Contact
          </a>

          <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
