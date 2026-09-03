"use client";

import React from "react";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Modern Luxury Homes",
    desc: "Transforming residential living spaces into spotless, immaculate environments.",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-1 row-span-3",
  },
  {
    id: 2,
    type: "image",
    title: "Corporate Offices & HQs",
    desc: "High-productivity commercial environments maintained to pristine hygiene standards.",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-2 row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Luxury Apartments & Lofts",
    desc: "Hotel-grade detailing and premium care for high-end residential spaces.",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-1 row-span-3",
  },
  {
    id: 4,
    type: "image",
    title: "Boutique Hotels & Hospitality",
    desc: "Flawless turnover cleaning and guest-ready 5-star presentation.",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-2 row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Designer Kitchen Detailing",
    desc: "Deep sanitation of stainless steel, natural stone countertops, and appliances.",
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-1 row-span-3",
  },
  {
    id: 6,
    type: "image",
    title: "Commercial & Retail Spaces",
    desc: "High-traffic floor maintenance, showroom glass, and executive boardrooms.",
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-2 row-span-2",
  },
  {
    id: 7,
    type: "image",
    title: "Architectural Window Detailing",
    desc: "Streak-free clarity for floor-to-ceiling glass and panoramic view facades.",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-1 row-span-3",
  },
];

export default function ShowcaseBentoGallery() {
  return (
    <section id="proof-of-work" className="w-full bg-[#f8fbfe] py-16 md:py-24 border-t border-[#d0e4f7]">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="The Premium Experience"
        description="“More than cleaning. We deliver a better way to live and work.” Transforming modern homes, luxury apartments, offices, and commercial spaces."
      />
    </section>
  );
}
