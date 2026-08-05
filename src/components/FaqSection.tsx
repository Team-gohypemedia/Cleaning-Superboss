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
  "Core Technology": [
    {
      question: "What does Terminal actually do?",
      answer: "Terminal is an AI-native Yard Operating System™ (YOS™) that uses computer vision to automate yard execution from gate to dock. It replaces manual logs with a system that proactively decides and executes the next best move in real-time.",
    },
    {
      question: "How is this different from a traditional Yard Management System (YMS)?",
      answer: "Traditional YMS are 'digital clipboards' that record what already happened; Terminal is an operating system that sees what is happening now and orchestrates what needs to happen next in the yard.",
    },
    {
      question: "What is 'Agentic AI' in the context of the yard?",
      answer: "It acts as a 24/7 autonomous supervisor that handles exceptions and reprioritizes tasks based on real-time conditions, ensuring the most critical moves happen first (e.g. how to prepare and reallocate resources for a late appointment)",
    },
    {
      question: "How accurate is the data captured by your system?",
      answer: "Our proprietary computer vision stack delivers 50% or more improvement in data accuracy vs. manual operations, virtually eliminating the human error and 'lost assets' common with manual entry.",
    },
    {
      question: "Can we manage multiple sites from a single login?",
      answer: "Yes; Terminal provides a 'Global Control Tower' view, allowing you to compare KPIs, dwell times, and performance across all facilities in your network in one place.",
    },
  ],
  "Value": [
    {
      question: "What is the typical return on investment (ROI)?",
      answer: "Most manufacturing plants realize full cost recovery within 9 to 12 months, driven by a 15% reduction in machinery downtime, 20% faster throughput cycles, and a near-zero defect rate on precision assemblies.",
    },
    {
      question: "How does it improve worker safety on the floor?",
      answer: "By monitoring real-time feeds from safety cages, our edge vision immediately halts hydraulic presses and robotic arms if an operator breaches safety boundaries, preventing critical floor accidents.",
    },
    {
      question: "Does it help in reducing energy and utility overhead?",
      answer: "Yes. The system schedules heavy-load operations (like furnace heating or forging presses) to run during off-peak energy hours and automatically shuts down idle equipment to reduce energy waste.",
    },
  ],
  "Implementation": [
    {
      question: "How long does the onboarding and deployment process take?",
      answer: "A typical facility deployment takes between 4 to 6 weeks. This includes edge hardware setup, camera mounts, model calibration, and integration with your existing ERP or scheduling database.",
    },
    {
      question: "Do we need to replace our existing CNC or robotic systems?",
      answer: "No. Industrial Edge is designed to overlay on top of legacy PLC controllers and machinery. We support standard protocol integrations including Modbus, OPC UA, EtherNet/IP, and MTConnect.",
    },
    {
      question: "What edge hardware is required on-site?",
      answer: "We deploy a pre-configured Edge Server node containing local AI accelerators (NVIDIA Tensor Core GPUs) that interfaces directly with your local network, ensuring sub-millisecond response latency.",
    },
  ],
  "Site Operations": [
    {
      question: "Does the system require active internet access to run?",
      answer: "No. The core computer vision and machine-coordination engines run entirely offline on local edge nodes. Internet connectivity is only needed for syncing global enterprise analytics and receiving OTA software updates.",
    },
    {
      question: "How is hardware maintenance and sensor drift handled?",
      answer: "Our software monitors telemetry deviations for sensor drift. It alerts engineers when a camera lens requires cleaning, a tool tip needs replacement, or a vibration sensor requires recalibration.",
    },
    {
      question: "What support is provided for site reliability engineering (SRE)?",
      answer: "We offer 24/7 dedicated engineering support, automated system heartbeats, and field technician dispatch protocols to maintain 99.99% uptime of our edge nodes.",
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
    <section id="faq" className="w-full bg-[#FAF6F0] py-20 md:py-28 border-t border-[#E5E1D3] select-none">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column: Heading Block */}
        <div className="w-full lg:w-2/5 flex flex-col items-start gap-4">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1B1F] leading-none">
              FAQs
            </h2>
            <p className="text-base text-[#1C1B1F]/60 font-normal leading-relaxed max-w-[360px]">
              Here are the most common questions teams have before getting started with Terminal.
            </p>
          </div>
        </div>

        {/* Right Column: Tabbed Accordion */}
        <div className="w-full lg:w-3/5 flex flex-col gap-8 md:gap-10">
          {/* Tab Buttons (Horizontal scrollable track on mobile, matched to mockup style) */}
          <div className="w-full flex flex-row items-center gap-3 overflow-x-auto pb-2 scrollbar-none border-b border-[#E5E1D3]/30">
            {categories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => handleTabChange(category)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "bg-[#1C1B1F]/5 text-[#1C1B1F] border border-transparent"
                      : "bg-transparent text-[#1C1B1F]/30 border border-[#E5E1D3]/80 hover:text-[#1C1B1F]/70 hover:border-[#1C1B1F]/40"
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
                    <span className="text-lg md:text-xl font-medium text-[#1C1B1F] group-hover:text-[#D9692A] transition-colors duration-200">
                      {item.question}
                    </span>
                    {/* Expand/Collapse svg indicator */}
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#1C1B1F]/30 group-hover:text-[#D9692A] transition-colors duration-200">
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
                          <p className="text-sm sm:text-base leading-relaxed text-[#1C1B1F]/70 font-normal">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Thin, glowing orange bottom divider fading at left and right corners */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none z-10">
                    {/* Glowing blur shadow layer */}
                    <div
                      className={cn(
                        "absolute inset-x-0 h-[3px] -top-[1.5px] bg-gradient-to-r from-transparent via-[#D9692A]/50 to-transparent blur-[2px] transition-all duration-500",
                        isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50 group-hover:opacity-60 group-hover:scale-y-100"
                      )}
                    />
                    {/* Solid core line */}
                    <div
                      className={cn(
                        "absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent transition-all duration-500",
                        isOpen
                          ? "via-[#D9692A] to-transparent"
                          : "via-[#D9692A]/30 to-transparent group-hover:via-[#D9692A]/70"
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
