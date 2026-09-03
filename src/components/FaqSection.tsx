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
      question: "How do I book a cleaning service?",
      answer: "Booking takes under 60 seconds! Select your service (home, deep, bond, Airbnb or commercial), pick your property size or hours, select your preferred date/time slot, and enter your details. You will receive an instant confirmation without waiting for manual quotes.",
    },
    {
      question: "Do I need to be home during the clean?",
      answer: "No, you don't need to be home. Simply provide lockbox or key entry instructions during booking. Our vetted, police-checked cleaners will access your property securely and lock up when finished.",
    },
    {
      question: "Do your cleaners bring their own equipment and supplies?",
      answer: "Yes! All Cleaning Superboss cleaners arrive fully equipped with professional-grade vacuums, mops, microfibre cloths, and eco-friendly cleaning supplies.",
    },
    {
      question: "How long does a typical clean take?",
      answer: "Standard home cleans usually take between 2 to 4 hours depending on the property size. Deep cleans and bond cleans can take 4 to 8 hours depending on condition and room count.",
    },
  ],
  "Booking & Pricing": [
    {
      question: "How is pricing calculated?",
      answer: "Pricing is transparent and upfront based on your property size (bedrooms/bathrooms) or by hourly duration. No hidden fees, no quote wait times, and recurring cleans save up to $30 per visit.",
    },
    {
      question: "When and how do I pay?",
      answer: "No upfront payment is charged at booking. Payments are processed securely online once your cleaning service is completed to your satisfaction.",
    },
    {
      question: "Can I reschedule or cancel my booking?",
      answer: "Yes, you can cancel or reschedule for free up to 24 hours prior to your scheduled clean. Simply call or text +61 460 849 843.",
    },
  ],
  "Our Services": [
    {
      question: "What is included in a Bond Clean (End of Lease)?",
      answer: "Our bond clean follows a comprehensive real estate checklist designed to secure your 100% bond return. It includes inside oven, rangehood, stovetop, skirting boards, door frames, window tracks, cupboards inside/out, bathroom descaling, and deep floor sanitisation.",
    },
    {
      question: "What is the difference between Home Cleaning and Deep Cleaning?",
      answer: "Home cleaning is regular upkeep covering dusting, vacuuming, mopping, bathroom sanitisation, and kitchen wipe-down. Deep cleaning includes intensive scrub of grout, oven interior, behind appliances, and detailed surface rejuvenation.",
    },
    {
      question: "Do you offer Airbnb turnovers and commercial cleaning?",
      answer: "Yes! We specialize in fast hotel-grade Airbnb turnovers (with linen changes and guest staging) as well as regular office and commercial facility cleaning across Australia.",
    },
  ],
  "Trust & Guarantee": [
    {
      question: "Are your cleaners police-checked and insured?",
      answer: "Yes, 100%. Every single cleaner on our platform has passed a strict national police check, identity verification, and is covered by our comprehensive public liability insurance.",
    },
    {
      question: "What is your 100% Spotless Satisfaction Guarantee?",
      answer: "If you're ever unhappy with any area of your clean, let us know within 24 hours and we will send a team back to reclean that area completely free of charge. For bond cleans, we guarantee your bond return on our cleaning.",
    },
    {
      question: "What company operates Cleaning Superboss?",
      answer: "Cleaning Superboss Ltd is registered in Australia, California, and London, providing internationally benchmarked cleaning excellence and hotel-grade standards nationwide.",
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
