import React from "react";
import { IconicButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServicesWithAnimatedHoverModal } from "@/components/services-with-animated-hover-modal";
import UnderlineToBackground from "@/components/fancy/text/underline-to-background";

const services = [
  {
    title: "Personal Brand Strategy",
    description:
      "Define your positioning, narrative, and competitive edge so the right audience recognizes your value instantly.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Founder Positioning",
    description:
      "Establish yourself as the go-to authority in your industry through strategic thought leadership and credibility.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Content Systems",
    description:
      "A repeatable engine for LinkedIn, Instagram, and YouTube content that builds trust and drives inbound leads.",
    image:
      "https://images.unsplash.com/photo-1573868396123-ef72a7f7b94f?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "PR and Media Visibility",
    description:
      "Get featured in publications your buyers read. Podcast placements, press coverage, and earned media.",
    image:
      "https://images.unsplash.com/photo-1580205315096-62a817e927fd?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "LinkedIn and Social Authority",
    description:
      "Turn your LinkedIn profile into a client acquisition channel with optimized content and engagement strategy.",
    image:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Video and Short Form Content",
    description:
      "Hero videos, brand commercials, and short-form content that position you as premium before the first meeting.",
    image:
      "https://images.unsplash.com/photo-1540655037529-dec987208707?q=80&w=1521&auto=format&fit=crop",
  },
  {
    title: "Community and Trust Building",
    description:
      "Build a community of ideal clients who already trust you, so selling becomes a conversation, not a pitch.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Lead Generation Through Authority",
    description:
      "Authority-driven lead generation that attracts premium buyers who want to work with you, not just compare prices.",
    image:
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1170&auto=format&fit=crop",
  },
];

export default function ServicesHoverModalSection() {
  return (
    <section className="w-full bg-[#1C1B1F] text-[#FAF6F0] py-20 md:py-32 border-t border-white/10 select-none">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center text-center lg:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="flex flex-col items-center lg:items-start">
            <Badge
              variant="outline"
              className="w-fit h-auto mb-6 border-[#D9692A] text-[#D9692A] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-transparent mx-auto lg:mx-0"
            >
              What We Do
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-[600px] text-center lg:text-left text-white leading-tight">
              Comprehensive Brand{" "}
              <UnderlineToBackground>Execution.</UnderlineToBackground>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-[480px] leading-relaxed text-center lg:text-right">
            We do not just advise. We execute. From your foundational positioning to your daily content, premium website, and PR strategy.
          </p>
        </div>

        {/* Services List using Animated Hover Modal */}
        <div className="w-full mb-16">
          <ServicesWithAnimatedHoverModal services={services} />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <IconicButton
            href="#services"
            className="w-fit sm:w-auto bg-[#D9692A] text-white hover:bg-[#c2581f]"
            iconWrapperClassName="bg-white text-[#D9692A] group-hover:bg-white"
          >
            EXPLORE ALL SERVICES
          </IconicButton>
        </div>
      </div>
    </section>
  );
}
