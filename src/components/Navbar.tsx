"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const serviceLinks = [
  { label: "Home Cleaning", href: "/services/home" },
  { label: "Deep Cleaning", href: "/services/deep" },
  { label: "Bond Cleaning", href: "/end-of-lease-cleaning-services" },
  { label: "Airbnb Cleaning", href: "/services/airbnb" },
  { label: "Commercial Cleaning", href: "/services/commercial" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSolid = isPastHero || pathname !== "/";

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

  // Close services dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isBondPage =
    pathname === "/end-of-lease-cleaning-services" ||
    pathname === "/services/bond" ||
    pathname?.startsWith("/end-of-lease-cleaning");

  const handleScrollToQuoteForm = () => {
    const formEl = document.getElementById("quote-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/end-of-lease-cleaning-services#quote-form";
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isBondPage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-10 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-xl border-b border-[#d0e4f7]/80 shadow-xs py-2 sm:py-2.5"
          : "bg-transparent py-2.5 sm:py-3.5"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center group select-none relative py-1 cursor-pointer">
          <div className="h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-start">
            <img
              src="/logo.png"
              alt="Cleaning Superboss"
              className="h-full w-auto max-h-[42px] sm:max-h-[50px] md:max-h-[58px] lg:max-h-[66px] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
            />
          </div>
        </Link>

        {/* Center: Floating Dark Nav Pill (Hidden on Bond Page) */}
        {!isBondPage && (
          <nav className="hidden lg:flex items-center bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-full px-5 xl:px-6 py-2 shadow-xl text-xs font-semibold text-zinc-300 gap-4 xl:gap-5">
            <Link href="/" className="text-white hover:text-[#2196f3] transition-colors">
              Home
            </Link>

            <Link href="/book" className="text-[#2196f3] font-bold hover:text-white transition-colors">
              Book
            </Link>

            {/* Services Dropdown with Click to /services and Hover to show dropdown */}
            <div
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                onClick={() => setServicesOpen(false)}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60 z-50 transition-all duration-200 ${
                  servicesOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2 shadow-2xl space-y-0.5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-3.5 py-2 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="/#partners" className="hover:text-white transition-colors">
              Why Us
            </a>
            <a href="/#proof-of-work" className="hover:text-white transition-colors">
              Reviews
            </a>
            <a href="/#faq" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="/#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        )}

        {/* Right Corner Button(s) */}
        {isBondPage ? (
          <button
            type="button"
            onClick={handleScrollToQuoteForm}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#0d47a1] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:bg-[#2196f3] transition-all shadow-md hover:shadow-[#2196f3]/30 active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <span>Request a Quote</span>
          </button>
        ) : (
          <>
            {/* Right: Phone + Book Now CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Phone Number */}
              <a
                href="tel:+61460849843"
                className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${
                  isSolid
                    ? "text-[#08295b] hover:text-[#0d47a1]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                +61 460 849 843
              </a>

              {/* Book Now Button */}
              <Link
                href="/book"
                className="px-5 py-2 rounded-full bg-[#0d47a1] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2196f3] transition-all shadow-lg hover:shadow-[#2196f3]/30 active:scale-95"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isSolid ? "text-[#08295b]" : "text-zinc-300 hover:text-white drop-shadow-md"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </>
        )}
      </div>

      {/* Mobile Drawer (Only when not on Bond page) */}
      {!isBondPage && mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-4 text-white shadow-2xl">
          <Link href="/" className="block text-sm font-semibold hover:text-[#2196f3]">
            Home
          </Link>
          <Link href="/book" className="block text-sm font-semibold text-[#2196f3]">
            Book Online
          </Link>

          {/* Mobile Services Accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between w-full text-sm font-semibold hover:text-[#2196f3]"
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 space-y-2 border-l border-white/10">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-zinc-300 hover:text-[#2196f3] py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <a href="/#partners" className="block text-sm font-semibold hover:text-[#2196f3]">
            Why Us
          </a>
          <a href="/#proof-of-work" className="block text-sm font-semibold hover:text-[#2196f3]">
            Reviews
          </a>
          <a href="/#faq" className="block text-sm font-semibold hover:text-[#2196f3]">
            How It Works
          </a>
          <a href="/#contact" className="block text-sm font-semibold hover:text-[#2196f3]">
            Contact
          </a>

          {/* Mobile Phone + Book Now */}
          <div className="pt-3 border-t border-white/10 space-y-3">
            <a
              href="tel:+61460849843"
              className="flex items-center justify-center gap-2 text-sm font-bold text-white"
            >
              <Phone className="w-4 h-4" />
              +61 460 849 843
            </a>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-6 py-3 rounded-full bg-[#0d47a1] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#2196f3] transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
