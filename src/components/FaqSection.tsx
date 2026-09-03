"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategories {
  [key: string]: FaqItem[];
}

const faqData: FaqCategories = {
  "How It Works": [
    {
      question: "How does the 5-step cleaning process work?",
      answer: "Our seamless process is designed for maximum speed and simplicity: 1. Request a Quote → 2. Get Your Price → 3. Book Online → 4. Professional Cleaning → 5. Enjoy a Spotless Space.",
    },
    {
      question: "How fast do I get my price estimate?",
      answer: "Our automated quoting engine calculates instant, transparent pricing in under 30 seconds based on your property type, square footage, and chosen service—no waiting for manual callbacks.",
    },
    {
      question: "Can I schedule recurring cleanings?",
      answer: "Yes. You can select weekly, bi-weekly, or monthly recurring cleanings through your dashboard and receive exclusive membership discounts with guaranteed cleaner priority.",
    },
    {
      question: "How do I prepare for my cleaner's arrival?",
      answer: "Simply provide any entry instructions or gate/lockbox codes in your online dashboard. You can be home or away—our vetted pros handle everything.",
    },
  ],
  "Technology & Platform": [
    {
      question: "What makes Cleaning Superboss a technology-driven platform?",
      answer: "We replace outdated phone booking with an integrated platform featuring automated instant quotes, live cleaner tracking, real-time status notifications, and secure digital payments.",
    },
    {
      question: "Can I manage multiple properties or offices in one account?",
      answer: "Yes. Property managers, enterprise teams, and Airbnb hosts can view, schedule, and oversee cleaning operations across multiple locations from one centralized dashboard.",
    },
    {
      question: "How do live notifications and before/after verification work?",
      answer: "You receive real-time SMS and email alerts when your cleaner is en route, checks in at your address, and when the job is completed with verified before/after photos.",
    },
  ],
  "Our Services": [
    {
      question: "What is the difference between Residential and Deep Cleaning?",
      answer: "Residential cleaning covers routine upkeep, dusting, vacuuming, and surface sanitization. Deep cleaning involves intense scrubbing of grout, baseboards, behind appliances, and inside ovens/refrigerators.",
    },
    {
      question: "Do you offer commercial and office cleaning?",
      answer: "Yes. We service corporate headquarters, co-working spaces, retail stores, and commercial facilities with customized after-hours or daytime schedules.",
    },
    {
      question: "What is included in Airbnb turnover cleaning?",
      answer: "Our hotel-grade turnover service includes complete room sanitization, linen changing, towel staging, trash removal, restocking essentials, and guest-ready visual staging.",
    },
    {
      question: "Do you provide window and carpet cleaning?",
      answer: "Yes. We offer specialized streak-free architectural window washing and deep steam extraction for luxury carpets and upholstery.",
    },
  ],
  "Trust & Quality": [
    {
      question: "Are the cleaning professionals vetted and insured?",
      answer: "Yes. 100% of our cleaners undergo extensive background checks, identity verification, in-person training, and are fully insured and bonded.",
    },
    {
      question: "What is your Spotless Satisfaction Guarantee?",
      answer: "If you are not 100% satisfied with any aspect of your service, let us know within 24 hours and we will dispatch a team to re-clean the area free of charge.",
    },
    {
      question: "Are your cleaning products eco-friendly and safe?",
      answer: "Yes. We use premium, non-toxic, eco-certified cleaning solutions that are safe for pets, children, sensitive allergies, and luxury finishes.",
    },
  ],
};

export default function FaqSection() {
  const categories = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // default first item open

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(0); // open first question of newly selected tab
  };

  return (
    <section id="faq" className="w-full bg-[#f8fbfe] py-20 md:py-28 border-t border-[#d0e4f7] select-none">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column: Heading Block */}
        <div className="w-full lg:w-2/5 flex flex-col items-start gap-4">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#08295b] leading-none">
              How It Works & FAQs
            </h2>
            <p className="text-base text-[#08295b]/60 font-normal leading-relaxed max-w-[360px]">
              Everything you need to know about our smart platform, 5-step process, and spotless guarantee.
            </p>
          </div>
        </div>

        {/* Right Column: Tabbed Accordion */}
        <div className="w-full lg:w-3/5 flex flex-col gap-8 md:gap-10">
          {/* Tab Buttons (Horizontal scrollable track on mobile, matched to mockup style) */}
          <div className="w-full flex flex-row items-center gap-3 overflow-x-auto pb-2 scrollbar-none border-b border-[#d0e4f7]/30">
            {categories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => handleTabChange(category)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "bg-[#e3f2fd] text-[#08295b] border border-[#d0e4f7]"
                      : "bg-transparent text-[#08295b]/40 border border-[#d0e4f7]/80 hover:text-[#08295b]/80 hover:border-[#08295b]/40"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Accordion Questions List */}
          <div className="w-full flex flex-col">
            {faqData[activeTab].map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="py-7 relative group"
                >
                  {/* Accordion Header Trigger */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer"
                  >
                    <span className="text-lg md:text-xl font-medium text-[#08295b] group-hover:text-[#0d47a1] transition-colors duration-200">
                      {item.question}
                    </span>
                    {/* Expand/Collapse svg indicator */}
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#08295b]/30 group-hover:text-[#0d47a1] transition-colors duration-200">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="w-5 h-5"
                      >
                        <rect
                          x="11"
                          y="0"
                          width="2"
                          height="24"
                          fill="currentColor"
                        />
                        <rect
                          x="24"
                          y="11"
                          width="2"
                          height="24"
                          transform="rotate(90 24 11)"
                          fill="currentColor"
                        />
                      </motion.svg>
                    </div>
                  </button>

                  {/* Accordion Answer Content Container */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { height: { duration: 0.22 }, opacity: { duration: 0.18, delay: 0.04 } },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { height: { duration: 0.18 }, opacity: { duration: 0.12 } },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pr-6">
                          <p className="text-sm sm:text-base leading-relaxed text-[#08295b]/70 font-normal">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Thin, glowing blue bottom divider fading at left and right corners */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none z-10">
                    {/* Glowing blur shadow layer */}
                    <div
                      className={cn(
                        "absolute inset-x-0 h-[3px] -top-[1.5px] bg-gradient-to-r from-transparent via-[#2196f3]/50 to-transparent blur-[2px] transition-all duration-500",
                        isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50 group-hover:opacity-60 group-hover:scale-y-100"
                      )}
                    />
                    {/* Solid core line */}
                    <div
                      className={cn(
                        "absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent transition-all duration-500",
                        isOpen
                          ? "via-[#0d47a1] to-transparent"
                          : "via-[#0d47a1]/30 to-transparent group-hover:via-[#0d47a1]/70"
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
