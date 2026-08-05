"use client";

import React from "react";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Precision 5-Axis Milling",
    desc: "Titanium compressor housing machined to 5-micron tolerance boundaries.",
    url: "/bento_machining.png",
    span: "col-span-1 row-span-3",
  },
  {
    id: 2,
    type: "video",
    title: "Robotic Assembly Cells",
    desc: "Welding and mechanical joining cells configured for zero-defect output.",
    url: "/Industrial_robotic_manufacturing…_1080p_202608051508.mp4",
    span: "col-span-2 row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Laser Metrology Inspection",
    desc: "Non-destructive automated testing of mechanical gear profiles.",
    url: "/bento_metrology.png",
    span: "col-span-1 row-span-3",
  },
  {
    id: 4,
    type: "image",
    title: "High-Pressure Castings",
    desc: "Heavy manifolds for offshore deep-sea pressure vessels.",
    url: "/bento_valves.png",
    span: "col-span-2 row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "IoT Factory Telemetry",
    desc: "Real-time vibration and thermal dashboards feeding diagnostics directly to cloud systems.",
    url: "/bento_telemetry.png",
    span: "col-span-1 row-span-3",
  },
  {
    id: 6,
    type: "image",
    title: "Heavy Forging Presses",
    desc: "Hydraulic press cells forging heavy structural chassis elements.",
    url: "/bento_forging.png",
    span: "col-span-2 row-span-2",
  },
  {
    id: 7,
    type: "video",
    title: "Automated Assembly Line",
    desc: "High-speed multi-axis robotic arm welding cell in active production line.",
    url: "/Industrial_robotic_manufacturing…_1080p_202608051508.mp4",
    span: "col-span-1 row-span-3",
  },
];

export default function ShowcaseBentoGallery() {
  return (
    <section id="proof-of-work" className="w-full bg-[#FAF6F0] py-16 md:py-24 border-t border-[#E5E1D3]">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Our Production Output"
        description="Drag, reorder, and explore our high-precision custom engineering & fabrication proof of work."
      />
    </section>
  );
}
