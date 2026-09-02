import React from "react";
import { IconicButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServicesWithAnimatedHoverModal } from "@/components/services-with-animated-hover-modal";
import UnderlineToBackground from "@/components/fancy/text/underline-to-background";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Meticulous recurring and standard home cleaning tailored for modern residences, penthouses, and luxury apartments.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Deep Cleaning",
    description:
      "Comprehensive top-to-bottom sanitization, detailed surface rejuvenation, and high-intensity precision detailing.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Office & Commercial Cleaning",
    description:
      "Scheduled commercial workspace, boardroom, and corporate facility maintenance for high-productivity teams.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Airbnb Cleaning",
    description:
      "Rapid hotel-grade turnover cleaning, linen refresh, restock management, and 5-star guest-ready staging.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Window Cleaning",
    description:
      "Streak-free interior and exterior glass, frame washing, and high-clarity architectural window treatment.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Deep steam extraction, stain removal, and fiber revitalization for luxury carpets and bespoke upholstery.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ServicesHoverModalSection() {
  return (
    <section id="services" className="w-full bg-[#1C1B1F] text-[#FAF6F0] py-20 md:py-32 border-t border-white/10 select-none">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center text-center lg:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="flex flex-col items-center lg:items-start">
            <Badge
              variant="outline"
              className="w-fit h-auto mb-6 border-[#5680e9] text-[#5680e9] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-transparent mx-auto lg:mx-0"
            >
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-[600px] text-center lg:text-left text-white leading-tight">
              Spotless{" "}
              <UnderlineToBackground>Precision.</UnderlineToBackground>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-[480px] leading-relaxed text-center lg:text-right">
            Interactive service tiers powered by smart technology. Every service includes instant online booking and transparent pricing.
          </p>
        </div>

        {/* Services List using Animated Hover Modal */}
        <div className="w-full mb-16">
          <ServicesWithAnimatedHoverModal services={services} />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <IconicButton
            href="#contact"
            className="w-fit sm:w-auto bg-[#5680e9] text-white hover:bg-[#466fd9]"
            iconWrapperClassName="bg-white text-[#5680e9] group-hover:bg-white"
          >
            BOOK YOUR CLEANING TODAY
          </IconicButton>
        </div>
      </div>
    </section>
  );
}
