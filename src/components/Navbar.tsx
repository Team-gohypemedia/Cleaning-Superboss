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
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-10 transition-all duration-300 ${
        isPastHero
          ? "bg-[#FAF6F0]/90 backdrop-blur-xl border-b border-[#E5E1D3]/80 shadow-md py-2 sm:py-2.5"
          : "bg-transparent py-2.5 sm:py-3.5"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center group select-none relative overflow-visible">
          <div className="h-8 sm:h-9 md:h-10 w-[150px] sm:w-[185px] md:w-[215px] flex items-center justify-start overflow-visible">
            <img
              src="/logo.png"
              alt="Cleaning Superboss"
              className="h-full w-auto max-w-none object-contain scale-[1.45] sm:scale-[1.65] origin-left transition-transform duration-300 group-hover:scale-[1.75] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
            />
          </div>
        </a>

        {/* Center: Floating Dark Nav Pill */}
        <nav className="hidden lg:flex items-center bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-full px-5 xl:px-6 py-2 shadow-xl text-xs font-semibold text-zinc-300 gap-4 xl:gap-5">
          <a href="#" className="text-white hover:text-[#5680e9] transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#master-brand" className="hover:text-white transition-colors">
            Platform
          </a>
          <a href="#partners" className="hover:text-white transition-colors">
            Why Us
          </a>
          <a href="#proof-of-work" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: Social Icons */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-8 h-8 md:w-9 md:h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-sm ${
              isPastHero
                ? "bg-[#1C1B1F]/10 border-[#1C1B1F]/15 text-[#1C1B1F] hover:bg-[#1C1B1F]/20"
                : "bg-white/10 border-white/15 text-zinc-200 hover:text-white hover:bg-white/20"
            }`}
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-8 h-8 md:w-9 md:h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-sm ${
              isPastHero
                ? "bg-[#1C1B1F]/10 border-[#1C1B1F]/15 text-[#1C1B1F] hover:bg-[#1C1B1F]/20"
                : "bg-white/10 border-white/15 text-zinc-200 hover:text-white hover:bg-white/20"
            }`}
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* YouTube Icon */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-8 h-8 md:w-9 md:h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-sm ${
              isPastHero
                ? "bg-[#1C1B1F]/10 border-[#1C1B1F]/15 text-[#1C1B1F] hover:bg-[#1C1B1F]/20"
                : "bg-white/10 border-white/15 text-zinc-200 hover:text-white hover:bg-white/20"
            }`}
            aria-label="YouTube"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
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
          <a href="#" className="block text-sm font-semibold hover:text-[#5680e9]">
            Home
          </a>
          <a href="#services" className="block text-sm font-semibold hover:text-[#5680e9]">
            Services
          </a>
          <a href="#master-brand" className="block text-sm font-semibold hover:text-[#5680e9]">
            Platform
          </a>
          <a href="#partners" className="block text-sm font-semibold hover:text-[#5680e9]">
            Why Us
          </a>
          <a href="#proof-of-work" className="block text-sm font-semibold hover:text-[#5680e9]">
            Experience
          </a>
          <a href="#faq" className="block text-sm font-semibold hover:text-[#5680e9]">
            How It Works
          </a>
          <a href="#contact" className="block text-sm font-semibold hover:text-[#5680e9]">
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
