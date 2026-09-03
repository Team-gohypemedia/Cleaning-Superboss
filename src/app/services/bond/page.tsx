import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bond Cleaning & End of Lease Cleaning Australia | Cleaning Superboss",
  description:
    "100% Bond Back Guarantee! Professional end-of-lease vacate cleaning across Australia. Real estate checklist approved. Free reclean if required. Book online in 60s.",
};

export default function BondCleaningPage() {
  return (
    <ServicePageTemplate
      serviceTitle="Bond Cleaning (Vacate Clean)"
      badge="100% Bond Back Guarantee"
      tagline="End of Lease Bond Cleaning. 100% Deposit Back Guarantee."
      description="Moving out? Don't risk losing your bond money. Our vacate specialists clean to strict Australian real estate agent inspection standards with an unconditional 72-hour free reclean guarantee."
      heroImage="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop"
      startingPrice="$329"
      hourlyRate="$65 / hour (min 4 hours)"
      pricingRows={[
        { property: "1 Bedroom / 1 Bathroom Unit", durationApprox: "4.0 – 5.5 hrs", oneOff: "$329", recurring: "$299" },
        { property: "2 Bedroom / 1-2 Bathroom Unit", durationApprox: "5.5 – 7.0 hrs", oneOff: "$419", recurring: "$389", popular: true },
        { property: "3 Bedroom / 2 Bathroom House", durationApprox: "7.0 – 9.0 hrs", oneOff: "$519", recurring: "$489" },
        { property: "4 Bedroom / 2+ Bathroom House", durationApprox: "9.0 – 11.0 hrs", oneOff: "$639", recurring: "$599" },
        { property: "5+ Bedroom / Large Home", durationApprox: "11.0+ hrs", oneOff: "$759", recurring: "$719" },
      ]}
      included={[
        {
          category: "Bond Kitchen Checklist",
          tasks: [
            "Oven interior, racks, trays, glass door & grill degreased",
            "Rangehood filters, exhaust fan & stovetop scrubbed",
            "Inside and outside of all cupboards, drawers & shelves",
            "Dishwasher filter, door seal & exterior cleaned",
            "Sink & tapware descaled & polished to mirror finish",
          ],
        },
        {
          category: "Bond Bathroom & Laundry",
          tasks: [
            "Shower screens scrubbed completely clear of soap scum",
            "Tile grout descaled & bleached of mould / mildew",
            "Toilets disinfected including pipework & cistern",
            "Laundry trough, washing machine space & taps wiped",
            "Exhaust fan grilles removed and washed",
          ],
        },
        {
          category: "Interior Walls, Windows & Floors",
          tasks: [
            "Window tracks, sills & interior glass cleaned",
            "Spot mark removal on interior walls & around switches",
            "Skirting boards, door frames, architraves & doors wiped",
            "Built-in wardrobe tracks, shelves & mirrors polished",
            "Full edge-to-edge vacuum and disinfectant mop",
          ],
        },
      ]}
      testimonial={{
        quote: "Our property manager was notoriously picky, but Cleaning Superboss passed the exit condition report on the very first inspection. Full bond refunded within 48 hours. Could not recommend them more!",
        author: "Liam O'Connor",
        location: "Tenant · Melbourne VIC",
        rating: 5,
      }}
      faqs={[
        {
          q: "How does the 100% Bond Back Guarantee work?",
          a: "If your real estate agent or property manager flags any cleaning issues on the exit condition report within 72 hours of our clean, our team will return to the property and reclean the flagged items completely FREE of charge until approved.",
        },
        {
          q: "Do you provide an invoice for the property manager?",
          a: "Yes! Immediately upon completion, you receive a full tax invoice and itemised digital checklist certificate that you can forward directly to your agent.",
        },
        {
          q: "Does the property need to be empty?",
          a: "Yes, for an end-of-lease bond clean, all furniture and personal belongings should be removed beforehand so our cleaners can access all corners, skirting boards, and wardrobes.",
        },
        {
          q: "Do you offer carpet steam cleaning as an add-on?",
          a: "Yes, professional hot water extraction carpet steam cleaning can be included upon request to satisfy pet or tenancy lease agreements.",
        },
      ]}
    />
  );
}
