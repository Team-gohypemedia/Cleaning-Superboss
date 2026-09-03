import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial & Office Cleaning Australia | Cleaning Superboss",
  description:
    "Professional office and commercial cleaning services across Australia. Flexible daytime or after-hours schedules. Police-checked, insured cleaners. Transparent pricing.",
};

export default function CommercialCleaningPage() {
  return (
    <ServicePageTemplate
      serviceTitle="Commercial Cleaning"
      badge="Offices, Studios & Workspaces"
      tagline="Commercial & Office Cleaning. Pristine Workplace Hygiene."
      description="Keep your team healthy and make the best impression on visiting clients. We provide regular recurring after-hours or daytime cleaning for modern corporate offices, creative studios, and retail spaces."
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
      startingPrice="$199"
      hourlyRate="$55 / hour (contract rates available)"
      pricingRows={[
        { property: "Small Office (<100 sqm, 1–10 desks)", durationApprox: "2.0 – 2.5 hrs", oneOff: "$199", recurring: "$159" },
        { property: "Medium Office (100–250 sqm, 10–30 desks)", durationApprox: "3.0 – 4.0 hrs", oneOff: "$279", recurring: "$239", popular: true },
        { property: "Large Office (250–500 sqm, 30–60 desks)", durationApprox: "4.5 – 6.0 hrs", oneOff: "$369", recurring: "$319" },
        { property: "Commercial Floor (500–1000 sqm)", durationApprox: "6.0 – 8.0 hrs", oneOff: "$469", recurring: "$419" },
        { property: "Enterprise / Multi-Site HQ", durationApprox: "Custom Scope", oneOff: "$589+", recurring: "Custom Quote" },
      ]}
      included={[
        {
          category: "Workstations & Boardrooms",
          tasks: [
            "Sanitise all desktop surfaces & conference tables",
            "Disinfect high-touch areas, phone handsets & touchscreens",
            "Dust monitor backs, shelving, frames & window sills",
            "Empty all individual desk bins & central recycling stations",
            "Straighten chairs & restore presentation order",
          ],
        },
        {
          category: "Kitchenette & Breakrooms",
          tasks: [
            "Wipe down lunch tables, benchtops & splashbacks",
            "Clean microwave interior & coffee station",
            "Scrub, disinfect & polish stainless steel sinks & taps",
            "Wipe exterior of fridges, dishwashers & cabinets",
            "Restock paper towels & hand soap dispensers",
          ],
        },
        {
          category: "Restrooms & High-Traffic Floors",
          tasks: [
            "Hospital-grade sanitisation of all toilet cubicles & urinals",
            "Clean vanities, mirrors, faucets & partitions",
            "Mop and disinfect restroom tile floors",
            "Edge-to-edge vacuuming of carpeted open-plan floors",
            "Hard floor damp mop with anti-slip commercial disinfectant",
          ],
        },
      ]}
      testimonial={{
        quote: "We manage a 40-person tech office in Brisbane CBD. Cleaning Superboss comes after 6pm three times a week. The team is trustworthy, punctual, and our office has never felt cleaner or more professional.",
        author: "Daniel Zhang",
        location: "Operations Director · Brisbane QLD",
        rating: 5,
      }}
      faqs={[
        {
          q: "Can you clean outside our normal business hours?",
          a: "Yes! The majority of our commercial clients prefer after-hours cleaning (e.g. 6:00 PM – 10:00 PM) or early mornings before staff arrive. Weekend scheduling is also available.",
        },
        {
          q: "Are the cleaners insured and security-screened?",
          a: "Yes. Every cleaner has passed a comprehensive Australian police check and is covered by our $10,000,000 public liability insurance policy.",
        },
        {
          q: "Do you supply all commercial chemicals and equipment?",
          a: "Yes, we bring commercial HEPA-filter vacuums, microfibre flat mops, and commercial hospital-grade disinfectants at no extra cost.",
        },
        {
          q: "Do you require long-term lock-in contracts?",
          a: "No lock-in contracts! You can pause, modify schedule, or cancel with 14 days written notice.",
        },
      ]}
    />
  );
}
