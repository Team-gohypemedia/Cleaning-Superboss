"use client";

import React, { useState } from "react";
import { IconicButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServicesWithAnimatedHoverModal, ServiceItem } from "@/components/services-with-animated-hover-modal";
import UnderlineToBackground from "@/components/fancy/text/underline-to-background";
import { Home, Building2, KeyRound, LucideIcon } from "lucide-react";

type CategoryKey = "home" | "business" | "property";

interface CategoryData {
  id: CategoryKey;
  label: string;
  tagline: string;
  icon: LucideIcon;
  services: ServiceItem[];
}

const CATEGORIES: CategoryData[] = [
  {
    id: "home",
    label: "HOME",
    tagline: "Residential cleaning tailored for Australian houses, apartments & rentals",
    icon: Home,
    services: [
      {
        title: "Regular Cleaning",
        description: "Weekly or fortnightly recurring home upkeep. Kitchens, bathrooms, dusting, mopping, and vacuuming.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        href: "/services/home",
      },
      {
        title: "Deep Cleaning",
        description: "Comprehensive top-to-bottom scrub. Behind appliances, inside ovens, skirting boards, and tile grout.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
        href: "/services/deep",
      },
      {
        title: "One-Off Cleaning",
        description: "Single intensive refresh session before hosting guests, family visits, or after special events.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
        href: "/services/home",
      },
      {
        title: "Bond / End of Lease",
        description: "100% Bond Back Guarantee clean strictly meeting WA real estate inspection checklists.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop",
        href: "/services/bond",
      },
    ],
  },
  {
    id: "business",
    label: "BUSINESS",
    tagline: "Commercial sanitisation and maintenance for productive workplaces",
    icon: Building2,
    services: [
      {
        title: "Office Cleaning",
        description: "Routine office maintenance, sanitised workstations, meeting rooms, staff kitchens, and waste disposal.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        href: "/services/commercial",
      },
      {
        title: "Commercial Cleaning",
        description: "Facility maintenance for warehouses, studios, medical suites, and multi-storey corporate buildings.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
        href: "/services/commercial",
      },
      {
        title: "Retail Cleaning",
        description: "Showrooms, boutique retail floors, fitness studios, and customer-facing premises kept spotless.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        href: "/services/commercial",
      },
    ],
  },
  {
    id: "property",
    label: "PROPERTY",
    tagline: "Specialist turnovers, staging & exterior detailing for property managers",
    icon: KeyRound,
    services: [
      {
        title: "Airbnb Cleaning",
        description: "High-speed guest turnover, fresh hotel linen changeovers, toiletry restocking, and damage inspection.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
        href: "/services/airbnb",
      },
      {
        title: "Window Cleaning",
        description: "Streak-free interior & exterior glass polishing, frame wiping, and track vacuuming for crystal views.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
        href: "/services/deep",
      },
      {
        title: "Carpet Cleaning",
        description: "Commercial steam extraction, deep stain lifting, allergen removal, and deodorising for all carpet types.",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1200&auto=format&fit=crop",
        href: "/services/deep",
      },
    ],
  },
];

export default function ServicesHoverModalSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("home");
  const currentCategoryData = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <section id="services" className="w-full bg-[#08295b] text-[#f8fbfe] py-14 sm:py-24 md:py-32 border-t border-white/10 select-none">
      <div className="w-full max-w-[1920px] mx-auto px-3.5 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center text-center lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex flex-col items-center lg:items-start">
            <Badge
              variant="outline"
              className="w-fit h-auto mb-4 sm:mb-6 border-[#2196f3] text-[#2196f3] text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-transparent mx-auto lg:mx-0"
            >
              Our Cleaning Services
            </Badge>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-[600px] text-center lg:text-left text-white leading-tight">
              Spotless{" "}
              <UnderlineToBackground>Precision.</UnderlineToBackground>
            </h2>
          </div>
          <p className="text-xs sm:text-base md:text-lg text-[#e3f2fd]/80 max-w-[480px] leading-relaxed text-center lg:text-right">
            Australian standard cleaning across Home, Business, and Property sectors with upfront fixed pricing and 100% satisfaction guarantee.
          </p>
        </div>

        {/* 3 Core Australian Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#2196f3] text-white shadow-lg shadow-[#2196f3]/30 scale-105"
                    : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="text-xs sm:text-sm text-[#e3f2fd]/70 font-medium mb-6 px-1 text-center lg:text-left">
          {currentCategoryData.tagline}
        </div>

        {/* Services List using Animated Hover Modal */}
        <div className="w-full mb-12 sm:mb-16">
          <ServicesWithAnimatedHoverModal services={currentCategoryData.services} />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <IconicButton
            href="/services"
            className="w-fit sm:w-auto bg-[#0d47a1] text-white hover:bg-[#2196f3]"
            iconWrapperClassName="bg-white text-[#0d47a1] group-hover:bg-white"
          >
            VIEW ALL SERVICES
          </IconicButton>
        </div>
      </div>
    </section>
  );
}
