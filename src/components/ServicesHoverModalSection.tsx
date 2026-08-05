import React from "react";
import { IconicButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServicesWithAnimatedHoverModal } from "@/components/services-with-animated-hover-modal";
import UnderlineToBackground from "@/components/fancy/text/underline-to-background";

const services = [
  {
    title: "5-Axis CNC Precision Machining",
    description:
      "Ultra-high precision CNC milling & turning for critical aerospace, defense, and heavy automotive equipment components.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Custom Industrial Robotics Integration",
    description:
      "End-to-end robotic arm cells, pick-and-place automation, and autonomous factory floor transport systems.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Pneumatic & Hydraulic Power Engineering",
    description:
      "Heavy-duty pneumatic actuation cylinders, high-pressure hydraulic manifolds, and fluid power distribution systems.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Heavy Structural Steel Fabrication",
    description:
      "Certified AWS welding, custom sheet metal enclosures, structural beams, and heavy machinery chassis production.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Smart Factory Telemetry & IoT",
    description:
      "Embedded vibration and thermal sensors, real-time telemetry dashboards, and predictive maintenance algorithms.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Turnkey OEM Equipment Manufacturing",
    description:
      "Full contract manufacturing from design blueprinting to final sub-assembly, testing, and global logistics dispatch.",
    image:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Industrial Additive Manufacturing",
    description:
      "3D metal printing, rapid prototype tooling, and complex internal flow channel fabrication using advanced superalloys.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Plant SCADA & PLC Automation",
    description:
      "Plant-wide Allen-Bradley & Siemens PLC programming, SCADA HMI interface design, and zero-downtime line commissioning.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1170&auto=format&fit=crop",
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
              Our Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-[600px] text-center lg:text-left text-white leading-tight">
              Manufacturing{" "}
              <UnderlineToBackground>Excellence.</UnderlineToBackground>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-[480px] leading-relaxed text-center lg:text-right">
            We deliver turnkey industrial solutions—from custom prototype engineering and high-tolerance CNC machining to plant-wide SCADA automation.
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
            REQUEST ENGINEERING SPECIFICATIONS
          </IconicButton>
        </div>
      </div>
    </section>
  );
}
