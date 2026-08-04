"use client";

import React from "react";
import Image from "next/image";
import { IconicButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UnderlineToBackground from "@/components/fancy/text/underline-to-background";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";

const content = [
  {
    title: "Narrative",
    description:
      "The story your buyers need to hear. Your origin. Your philosophy. What you stand for. What you refuse to compromise on. We extract it. We sharpen it. It becomes the spine of everything that follows.",
    content: (
      <div className="h-full w-full relative">
        <Image
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1170&auto=format&fit=crop"
          alt="Narrative"
          fill
          className="object-cover"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "Visibility",
    description:
      "LinkedIn. Instagram. YouTube. Engineered to reach the exact buyers who should be paying premium for what you have built. Not reach for reach. Buyers for buyers.",
    content: (
      <div className="h-full w-full relative">
        <Image
          src="https://images.unsplash.com/photo-1573868396123-ef72a7f7b94f?q=80&w=1170&auto=format&fit=crop"
          alt="Visibility"
          fill
          className="object-cover"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "Infrastructure",
    description:
      "Authority website. Landing pages that convert. Hero video that plays before every meeting. A published book, if the positioning calls for it. The tangible proof that you are the real thing.",
    content: (
      <div className="h-full w-full relative">
        <Image
          src="https://images.unsplash.com/photo-1580205315096-62a817e927fd?q=80&w=1170&auto=format&fit=crop"
          alt="Infrastructure"
          fill
          className="object-cover"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "Amplification",
    description:
      "PR in the publications your buyers read. Podcast appearances that stack credibility. Paid distribution that puts you in front of buyers who do not yet know you exist.",
    content: (
      <div className="h-full w-full relative">
        <Image
          src="https://images.unsplash.com/photo-1540655037529-dec987208707?q=80&w=1521&auto=format&fit=crop"
          alt="Amplification"
          fill
          className="object-cover"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
      </div>
    ),
  },
];

export default function MasterBrand() {
  return (
    <section
      id="master-brand"
      className="relative w-full bg-[#FAF6F0] text-[#1C1B1F] py-20 md:py-32 select-none border-t border-[#E5E1D3]"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 flex flex-col">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-8 text-center lg:text-left mb-12 sm:mb-16 lg:mb-24"
        >
          <div className="flex flex-col items-center lg:items-start">
            <Badge
              variant="outline"
              className="w-fit h-auto mb-4 border-[#1C1B1F]/15 text-[#1C1B1F]/70 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-transparent"
            >
              The System
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight max-w-[650px] text-[#1C1B1F] leading-tight">
              The <UnderlineToBackground>Authority</UnderlineToBackground> Engine
            </h2>
            <p className="text-[#1C1B1F]/80 text-sm sm:text-base md:text-lg italic mt-3 max-w-[600px]">
              You do not pick the layers. The system runs them together. That is why it works.
            </p>
          </div>

          <p className="text-[#1C1B1F]/70 max-w-[500px] text-sm sm:text-base leading-relaxed lg:text-right lg:pt-14 font-light">
            Most companies sell services as line items. Posts. Videos. Websites. PR. We don't. Because pieces don't build authority. A system does. The Authority Engine is one connected machine. Four layers. Running together. Every month. Compounding.
          </p>
        </motion.div>

        {/* Sticky Scroll Component */}
        <div className="w-full">
          <StickyScroll
            content={content}
            contentClassName="shadow-xl border border-[#E5E1D3] bg-white"
          />
        </div>

        {/* Call to Action Container with generous top margin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="mt-28 sm:mt-36 lg:mt-48 flex justify-center w-full relative z-30"
        >
          <IconicButton
            href="#contact"
            className="w-fit sm:w-auto bg-[#D9692A] text-white hover:bg-[#c2581f]"
            iconWrapperClassName="bg-white text-[#D9692A] group-hover:bg-white"
          >
            BOOK A CALL WITH US
          </IconicButton>
        </motion.div>
      </div>
    </section>
  );
}
