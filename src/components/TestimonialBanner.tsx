"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { TestimonialsColumn, TestimonialItem } from "@/components/ui/testimonials-columns-1";
import { Star, ShieldCheck, ArrowRight } from "lucide-react";

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
    location: "Surfers Paradise, Gold Coast",
    rating: 5,
  },
  {
    text: "Their California dispatch team is top notch. Clear upfront pricing, police-checked cleaners, and immaculate attention to detail. We now recommend them to all our incoming and outgoing tenants.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "David Sterling",
    role: "Residential Property Manager",
    location: "Los Angeles, California",
    rating: 5,
  },
  {
    text: "Outstanding standard of clean. They scrubbed baseboards, exhaust fans, and detailed behind appliances that hadn't been touched in years. Truly living up to the Superboss name!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    name: "Charlotte Higgins",
    role: "Deep Spring Cleaning",
    location: "Kensington, London UK",
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
    text: "After a major kitchen renovation, the fine drywall dust was everywhere. Their team brought industrial HEPA vacuums and detailed every drawer, track, and fixture. Outstanding service.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    name: "Thomas Wright",
    role: "Post-Renovation Clean",
    location: "San Francisco, California",
    rating: 5,
  },
  {
    text: "From booking on their slick site to the flawless finish in my townhouse, everything was effortless. The cleaners are respectful, thorough, and use premium eco-safe products.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop",
    name: "Sophie Montgomery",
    role: "Fortnightly Home Clean",
    location: "Westminster, London UK",
    rating: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialBanner() {
  return (
    <section id="proof-of-work" className="bg-[#f8fbfe] py-20 sm:py-28 relative overflow-hidden border-t border-[#d0e4f7]">
      
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#2196f3]/10 via-[#0d47a1]/5 to-transparent blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-[1360px] z-10 mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e3f2fd] border border-[#d0e4f7] text-[#0d47a1] text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
            Verified Customer Reviews
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#08295b]">
            Loved by Thousands Across Australia, California &amp; London
          </h2>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#08295b]/70 font-medium">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-[#08295b]">4.9 / 5.0 Google Rating</span>
            <span className="text-[#08295b]/40">·</span>
            <span>Based on 1,200+ verified customer cleans</span>
          </div>
        </motion.div>

        {/* 3-Column Infinite Vertical Scrolling Carousel */}
        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={21} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="px-8 py-3.5 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
          >
            <span>Book Your Clean in 60 Seconds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+61460849843"
            className="px-6 py-3.5 rounded-lg bg-white border border-[#d0e4f7] hover:bg-[#f0f7fe] text-[#08295b] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
          >
            Call +61 460 849 843
          </a>
        </div>

      </div>
    </section>
  );
}
