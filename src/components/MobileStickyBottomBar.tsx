"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Phone, FileText } from "lucide-react";

export default function MobileStickyBottomBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isHomePage = pathname === "/";
      
      // Threshold: only activate after passing the hero section
      // Home page hero has longer scroll distance, other pages have standard hero
      const heroThreshold = isHomePage ? window.innerHeight * 0.6 : 280;

      // Check if user has scrolled past hero section
      if (currentScrollY > heroThreshold) {
        // If scrolling UP by more than 4px, reveal the bar
        if (currentScrollY < lastScrollY.current - 4) {
          setIsVisible(true);
        }
        // If scrolling DOWN by more than 4px, hide the bar
        else if (currentScrollY > lastScrollY.current + 4) {
          setIsVisible(false);
        }
      } else {
        // Inside or above hero section -> always keep hidden
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Handle Get Quote click (scroll to quote form if present on bond page, else route to /book)
  const handleGetQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const quoteEl = document.getElementById("quote-form");
    if (quoteEl) {
      e.preventDefault();
      quoteEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      aria-label="Quick contact and quote options"
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ease-in-out pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5 px-4 bg-white/95 backdrop-blur-xl border-t border-[#d0e4f7] shadow-[0_-8px_30px_rgba(8,41,91,0.12)] ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href={pathname === "/services/bond" ? "#quote-form" : "/book"}
          onClick={handleGetQuoteClick}
          className="flex-1 py-3.5 px-4 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 flex items-center justify-center gap-2 active:scale-95 transition-all text-center cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>GET QUOTE</span>
        </a>
        <a
          href="tel:+61460849843"
          className="flex-1 py-3.5 px-4 rounded-xl bg-white border-2 border-[#0d47a1] text-[#0d47a1] hover:bg-[#e3f2fd] font-extrabold text-xs uppercase tracking-wider shadow-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#0d47a1]" />
          <span>CALL</span>
        </a>
      </div>
    </aside>
  );
}
