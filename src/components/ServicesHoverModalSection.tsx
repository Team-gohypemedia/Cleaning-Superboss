import React from "react";
import { IconicButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServicesWithAnimatedHoverModal } from "@/components/services-with-animated-hover-modal";
import UnderlineToBackground from "@/components/fancy/text/underline-to-background";

const services = [
  {
    title: "Home Cleaning",
    description:
      "Regular home cleaning for ongoing upkeep. Kitchens, bathrooms, living areas, bedrooms and routine household chores.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    href: "/services/home",
  },
  {
    title: "Deep Cleaning",
    description:
      "A meticulous top-to-bottom clean. Behind appliances, inside ovens, detailed surface rejuvenation and grout scrubbing.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    href: "/services/deep",
  },
  {
    title: "Bond Cleaning (Vacate)",
    description:
      "End-of-lease vacate clean with a 100% Bond Back Guarantee. Strict real estate checklist standard to secure your bond.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop",
    href: "/services/bond",
  },
  {
    title: "Airbnb Cleaning",
    description:
      "Fast turnover cleaning, linen refresh, restock management, and 5-star guest-ready staging between bookings.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    href: "/services/airbnb",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Offices, boardrooms, retail spaces and corporate facility maintenance. Flexible scheduling and after-hours available.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    href: "/services/commercial",
  },
];

export default function ServicesHoverModalSection() {
  return (
    <section id="services" className="w-full bg-[#08295b] text-[#f8fbfe] py-20 md:py-32 border-t border-white/10 select-none">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center text-center lg:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="flex flex-col items-center lg:items-start">
            <Badge
              variant="outline"
              className="w-fit h-auto mb-6 border-[#2196f3] text-[#2196f3] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-transparent mx-auto lg:mx-0"
            >
              Our Cleaning Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-[600px] text-center lg:text-left text-white leading-tight">
              Spotless{" "}
              <UnderlineToBackground>Precision.</UnderlineToBackground>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#e3f2fd]/80 max-w-[480px] leading-relaxed text-center lg:text-right">
            From regular home maintenance to end-of-lease bond cleans — upfront pricing, vetted cleaners, and guaranteed satisfaction.
          </p>
        </div>

        {/* Services List using Animated Hover Modal */}
        <div className="w-full mb-16">
          <ServicesWithAnimatedHoverModal services={services} />
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
