"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { TestimonialsColumn, TestimonialItem } from "@/components/ui/testimonials-columns-1";
import { Star, ShieldCheck, ArrowRight, CheckCircle2, Clock } from "lucide-react";

const testimonials: TestimonialItem[] = [
  {
    text: "Cleaning Superboss has been a game-changer for our busy household. Our cleaner arrives on the dot every alternate Tuesday, meticulously details the bathrooms and kitchen, and leaves the whole place smelling fresh.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Sarah Jenkins",
    role: "Fortnightly Home Clean",
    location: "Bondi, Sydney NSW",
    rating: 5,
  },
  {
    text: "Booked an end-of-lease vacate clean for our 2-bed apartment. The property manager was blown away by the oven and shower glass. Full bond returned in 48 hours without a single question.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "Marcus Vance",
    role: "100% Bond Back Clean",
    location: "South Yarra, Melbourne VIC",
    rating: 5,
  },
  {
    text: "Managing 4 luxury short-stay apartments requires razor-sharp turnaround times. Cleaning Superboss handles linen changes, restocks guest toiletries, and consistently earns us 5-star cleanliness ratings.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    name: "Elena Rostova",
    role: "Airbnb Superhost Portfolio",
    location: "Surfers Paradise, Gold Coast QLD",
    rating: 5,
  },
  {
    text: "We contracted Cleaning Superboss for our 40-desk office space. Coming into a sanitised, fresh office every Wednesday and Friday morning has elevated our team morale. Very reliable team.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    name: "Liam O'Donnell",
    role: "Commercial Office Client",
    location: "Brisbane CBD, QLD",
    rating: 5,
  },
  {
    text: "With long hospital shifts, I needed cleaners I could trust blindly. All staff are police-checked and insured, and the online booking took less than a minute. Cannot recommend them enough.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    name: "Dr. Priya Sharma",
    role: "Weekly Domestic Clean",
    location: "Subiaco, Perth WA",
    rating: 5,
  },
  {
    text: "Needed a comprehensive deep spring clean before hosting family. The team arrived on time with industrial equipment, detailed skirting boards, window tracks, and all kitchen cabinetry. Exceptional job!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Harrison Blake",
    role: "Deep Spring Clean",
    location: "North Adelaide, SA",
    rating: 5,
  },
  {
    text: "Exceptional bond cleaning in Manly. Our real estate agent is notoriously strict with inspections, but Superboss left zero room for fault. Received our complete $3,200 bond back promptly.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    name: "Jessica Miller",
    role: "End of Lease Vacate",
    location: "Manly, Sydney NSW",
    rating: 5,
  },
  {
    text: "Moved into a new rental that wasn't cleaned properly by previous tenants. Cleaning Superboss arrived next day and sanitized all bathrooms, kitchen appliances, and polished the hardwood floors.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    name: "Lachlan Cooper",
    role: "Apartment Move-In Clean",
    location: "Fitzroy, Melbourne VIC",
    rating: 5,
  },
  {
    text: "High-volume holiday bookings require 100% dependable turnover service. Superboss has never missed a booking window in 18 months, with spotless 5-star guest reviews every single week.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop",
    name: "Chloe Anderson",
    role: "Holiday Rental Host",
    location: "Broadbeach, Gold Coast QLD",
    rating: 5,
  },
];

const credentials = [
  {
    icon: Star,
    title: "4.9 / 5.0 Google Rating",
    desc: "Over 1,200+ verified Australian customer reviews with authentic 5-star feedback.",
    badge: "★★★★★ Google Reviews",
  },
  {
    icon: ShieldCheck,
    title: "$10M Public Liability",
    desc: "Comprehensive Australia-wide insurance coverage protecting your home & premises.",
    badge: "Fully Insured",
  },
  {
    icon: Clock,
    title: "7+ Years Operating",
    desc: "Trusted by Australian homeowners, property managers, and businesses since 2017.",
    badge: "Established Standard",
  },
  {
    icon: CheckCircle2,
    title: "100% Satisfaction Guarantee",
    desc: "If any corner is not spotless, our team will re-clean within 72 hours free of charge.",
    badge: "Bond Back Guarantee",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialBanner() {
  return (
    <section id="proof-of-work" className="bg-[#f8fbfe] py-14 sm:py-24 md:py-28 relative overflow-hidden border-t border-[#d0e4f7]">
      
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#2196f3]/10 via-[#0d47a1]/5 to-transparent blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-[1360px] z-10 mx-auto px-3.5 sm:px-6 md:px-10 lg:px-12 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 px-1"
        >
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-[#d0e4f7] shadow-xs">
            {/* Google G Logo icon */}
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="text-amber-500 font-black text-xs sm:text-sm tracking-wider">★★★★★</span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#08295b]">
              Google Reviews
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#08295b]">
            Trusted by Thousands Across Australia
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#08295b]/75 max-w-2xl font-normal leading-relaxed">
            Real feedback from verified Australian homeowners, tenants, real estate agents, and commercial partners in Sydney, Melbourne, Brisbane, Perth, Gold Coast, and Adelaide.
          </p>
        </motion.div>

        {/* Verified Credentials 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mt-8 sm:mt-10">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-[#d0e4f7] p-4.5 sm:p-5 shadow-sm hover:shadow-md hover:border-[#2196f3] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#e3f2fd] border border-[#d0e4f7] flex items-center justify-center text-[#0d47a1]">
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#0d47a1]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#0d47a1] bg-[#e3f2fd] px-2.5 py-0.5 rounded-full border border-[#d0e4f7]">
                      {cred.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#08295b]">
                      {cred.title}
                    </h3>
                    <p className="text-xs text-[#08295b]/70 mt-1 leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3-Column Infinite Vertical Scrolling Carousel */}
        <div className="flex justify-center gap-6 mt-10 sm:mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] sm:max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={21} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-8 sm:mt-12 text-center flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
          <Link
            href="/book"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Book Your Clean in 60 Seconds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+61460849843"
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-lg bg-white border border-[#d0e4f7] hover:bg-[#f0f7fe] text-[#08295b] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all text-center"
          >
            Call +61 460 849 843
          </a>
        </div>

      </div>
    </section>
  );
}
