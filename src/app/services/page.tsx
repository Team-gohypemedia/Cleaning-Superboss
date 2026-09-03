import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Clock, Calendar, Sparkles } from "lucide-react";
import ServiceComparisonTable from "@/components/ServiceComparisonTable";
import ServiceCardsSlider from "@/components/ServiceCardsSlider";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Cleaning Services & Inclusions | Cleaning Superboss Australia",
  description:
    "Compare Standard Home Cleaning, Deep Cleaning and Vacate/End of Lease Cleaning. Detailed room-by-room inclusions checklist and transparent upfront pricing across Australia.",
};

const SERVICE_CARDS = [
  {
    title: "Standard Cleaning",
    tag: "Most Popular for Regular Care",
    price: "$149",
    unit: "from",
    desc: "Designed for ongoing maintenance. Covers vacuuming, mopping, bathroom sanitisation, dusting and kitchen surfaces.",
    highlights: ["All general surfaces & floors", "Kitchen & bathroom sanitised", "Bins emptied & dusting", "10% off for weekly/fortnightly"],
    href: "/services/home",
  },
  {
    title: "Deep Cleaning",
    tag: "Intensive Seasonal Reset",
    price: "$229",
    unit: "from",
    desc: "For homes that haven't been cleaned in over a month. Includes baseboards, exhaust fans, inside oven, blinds and wall marks.",
    highlights: ["Everything in Standard Clean", "Inside oven & microwave included", "Skirting boards & door frames", "Detailed grout & scale removal"],
    href: "/services/deep",
  },
  {
    title: "Vacate / Bond Cleaning",
    tag: "100% Bond Back Guarantee",
    price: "$309",
    unit: "from",
    desc: "Complete real estate end-of-lease specification. Includes cupboards inside & out, window tracks, spot wall cleans, and 72h re-clean guarantee.",
    highlights: ["Real estate approved checklist", "Inside cabinets & wardrobes", "Window sills, tracks & frames", "Free re-clean within 72 hours"],
    href: "/services/bond",
  },
  {
    title: "Airbnb Turnover",
    tag: "Superhost 5-Star Standards",
    price: "$129",
    unit: "from",
    desc: "Rapid guest turnover cleaning with hotel-grade linen changing, amenity restocking, and guest-ready sanitisation.",
    highlights: ["Linen washing & bed making", "Guest toiletries replenishment", "Damage inspection report", "Flexible checkout scheduling"],
    href: "/services/airbnb",
  },
  {
    title: "Commercial & Office",
    tag: "Custom Commercial Specs",
    price: "Custom",
    unit: "quote",
    desc: "Tailored janitorial solutions for offices, clinics, retail stores, gyms, and commercial premises after hours.",
    highlights: ["After-hours scheduling", "Desk & workstation hygiene", "Kitchen & restroom facilities", "Tax invoices & compliance certs"],
    href: "/services/commercial",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#08295b] pt-20 sm:pt-24">
      
      {/* Top Notice Banner */}
      <div className="w-full bg-[#0d47a1] text-white text-xs py-2.5 px-4 text-center font-medium">
        <span>🎉 Save $30 on your first booking with coupon <strong>CLEAN30</strong></span>
        <span className="mx-2 opacity-40">|</span>
        <a href="tel:+61460849843" className="underline font-bold hover:text-[#2196f3]">
          Call +61 460 849 843
        </a>
      </div>

      {/* Main Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7]">
        <div className="max-w-[1360px] mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e3f2fd] border border-[#d0e4f7] text-[#0d47a1] text-xs font-mono font-bold uppercase tracking-widest">
            <span>Australian Cleaning Specifications</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#08295b] tracking-tight">
            Our Cleaning Services &amp; Inclusions
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#08295b]/70 max-w-2xl mx-auto font-normal leading-relaxed">
            Whether you need a quick domestic tidy-up, a seasonal deep cleanse, or a full end-of-lease bond clean, view our comprehensive room-by-room inclusions below.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book"
              className="px-7 py-3 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <span>Book Online in 60 Seconds</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+61460849843"
              className="px-6 py-3 rounded-lg bg-white border border-[#d0e4f7] text-[#08295b] hover:bg-[#e3f2fd] text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0d47a1]" />
              <span>+61 460 849 843</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5 Core Service Cards Grid */}
      <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <div className="text-center sm:text-left space-y-1">
            <h2 className="text-2xl font-extrabold text-[#08295b]">
              Select a Cleaning Service
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70">
              Transparent fixed rates with no hidden travel fees. Police-checked and insured cleaners.
            </p>
          </div>

          <ServiceCardsSlider cards={SERVICE_CARDS} />
        </div>
      </section>

      {/* Comprehensive Checklist Comparison Table matching reference */}
      <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-14 bg-white border-y border-[#d0e4f7]">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563eb]">
              Full Task Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b] tracking-tight">
              Standard vs Deep / Vacate Cleaning Comparison
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70">
              Review every room, surface, and appliance covered in each service tier so you know exactly what to expect.
            </p>
          </div>

          <ServiceComparisonTable />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-[1360px] mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
