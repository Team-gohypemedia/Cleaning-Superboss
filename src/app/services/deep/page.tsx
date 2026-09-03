import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Deep Cleaning Services Australia | Cleaning Superboss",
  description:
    "Comprehensive top-to-bottom deep cleaning for homes across Australia. Detailed oven, grout, behind appliance sanitisation. Upfront pricing & 100% guarantee.",
};

export default function DeepCleaningPage() {
  return (
    <ServicePageTemplate
      serviceTitle="Deep Cleaning"
      badge="Intensive Top-To-Bottom Detailing"
      tagline="Comprehensive Deep Cleaning. Restorative Perfection."
      description="Designed for homes that need extra attention. We scrub deep into neglected areas: inside ovens, tile grout, behind appliances, and detailed baseboards across all major Australian cities."
      heroImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
      startingPrice="$229"
      hourlyRate="$60 / hour (min 3 hours)"
      pricingRows={[
        { property: "1 Bedroom / 1 Bathroom", durationApprox: "3.5 – 4.5 hrs", oneOff: "$229", recurring: "$199" },
        { property: "2 Bedroom / 1-2 Bathroom", durationApprox: "4.5 – 5.5 hrs", oneOff: "$289", recurring: "$259", popular: true },
        { property: "3 Bedroom / 2 Bathroom", durationApprox: "5.5 – 6.5 hrs", oneOff: "$359", recurring: "$329" },
        { property: "4 Bedroom / 2+ Bathroom", durationApprox: "6.5 – 7.5 hrs", oneOff: "$439", recurring: "$409" },
        { property: "5+ Bedroom / Luxury Estate", durationApprox: "7.5+ hrs", oneOff: "$519", recurring: "$489" },
      ]}
      included={[
        {
          category: "Deep Kitchen Restoration",
          tasks: [
            "Inside & outside of oven, trays & racks detailed",
            "Inside microwave & rangehood filters degreased",
            "Cabinet fronts scrubbed & degreased",
            "Behind & underneath reachable heavy appliances",
            "Tile splashback grout deep scrub & descaling",
          ],
        },
        {
          category: "Deep Bathroom Rejuvenation",
          tasks: [
            "Intensive grout scrub & shower glass lime descaling",
            "Exhaust fan cover dusted & cleaned",
            "Vanity cupboards inside and out sanitized",
            "Toilet deep sanitisation including plumbing base",
            "Floor tiles scrubbed with specialized tile restoration solution",
          ],
        },
        {
          category: "Living, Bedrooms & Detailed Detailing",
          tasks: [
            "Skirting boards, door frames & architraves wiped",
            "Interior window glass & window sills cleaned",
            "Light fixtures, ceiling fan blades dusted",
            "Spot wipe marks off high-touch wall areas",
            "High-power vacuuming including under sofas & bed frames",
          ],
        },
      ]}
      testimonial={{
        quote: "We hadn't done a proper deep clean since moving into our house two years ago. The oven looks like it was bought yesterday and the bathroom tiles are glowing. Remarkable standard of work.",
        author: "Mark & Chloe Davis",
        location: "Homeowners · Perth WA",
        rating: 5,
      }}
      faqs={[
        {
          q: "How does Deep Cleaning differ from Standard Home Cleaning?",
          a: "A deep clean includes heavy-duty tasks that aren't part of routine upkeep: interior oven cleaning, lime and calcium descaling on bathroom glass, scrubbing tile grout, wiping skirting boards, and cleaning behind movable appliances.",
        },
        {
          q: "How long does a deep clean take?",
          a: "Deep cleans generally take between 4 to 8 hours depending on the property size and current condition. For larger properties, we dispatch a team of 2 experienced cleaners to ensure thoroughness.",
        },
        {
          q: "Is inside the fridge included?",
          a: "Inside fridge cleaning can easily be requested during online booking or mentioned in your booking notes.",
        },
      ]}
    />
  );
}
