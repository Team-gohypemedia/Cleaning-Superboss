import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airbnb Turnover Cleaning Australia | Cleaning Superboss",
  description:
    "Fast, hotel-grade turnover cleaning for Airbnb hosts across Australia. Linen change, restock, 5-star staging, and damage inspection. Book online in 60s.",
};

export default function AirbnbCleaningPage() {
  return (
    <ServicePageTemplate
      serviceTitle="Airbnb Cleaning"
      badge="Turnover & Guest-Ready Staging"
      tagline="Fast Airbnb Turnover Cleaning. 5-Star Cleanliness Ratings."
      description="Keep your Superhost status intact. We handle rapid guest turnovers, fresh linen changes, amenity restocking, and immaculate presentation between check-out and check-in."
      heroImage="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
      startingPrice="$129"
      hourlyRate="$50 / hour (flexible schedules)"
      pricingRows={[
        { property: "Studio / 1 Bed Apartment", durationApprox: "1.5 – 2.0 hrs", oneOff: "$129", recurring: "$109" },
        { property: "2 Bedroom / 1-2 Bath Apartment", durationApprox: "2.0 – 3.0 hrs", oneOff: "$169", recurring: "$149", popular: true },
        { property: "3 Bedroom / 2 Bath Holiday Home", durationApprox: "3.0 – 4.0 hrs", oneOff: "$219", recurring: "$189" },
        { property: "4 Bedroom Luxury Villa / Penthouse", durationApprox: "4.0 – 5.5 hrs", oneOff: "$279", recurring: "$249" },
        { property: "5+ Bedroom Estate", durationApprox: "5.5+ hrs", oneOff: "$339", recurring: "$299" },
      ]}
      included={[
        {
          category: "Linen & Bed Staging",
          tasks: [
            "Strip dirty bed linens & pillowcases",
            "Make beds with fresh guest-grade hospital corners",
            "Stage fresh bath towels, hand towels & bathmats",
            "Wash and fold on-site or manage turnover rotation",
          ],
        },
        {
          category: "Turnover Sanitisation",
          tasks: [
            "Disinfect high-touch areas (remotes, door handles, keypads)",
            "Deep clean bathrooms, showers, sinks & mirrors",
            "Clean kitchen counters, stovetop, coffee maker & kettle",
            "Empty all fridge leftovers & clean microwave interior",
            "Empty all trash bins & install fresh bin liners",
          ],
        },
        {
          category: "Host Inspection & Restock",
          tasks: [
            "Restock guest toiletries (shampoo, soap, toilet paper)",
            "Restock tea, coffee, sugar & kitchen essentials",
            "Visual inspection for guest damages or missing items",
            "Lock all windows & doors, set thermostat / lockbox",
            "Send host completion confirmation with checklist",
          ],
        },
      ]}
      testimonial={{
        quote: "Managing 4 Airbnb properties on the Gold Coast was burning me out until I found Cleaning Superboss. Cleaners are always on time between 10am and 2pm, the beds look like a 5-star hotel, and my cleanliness ratings are solid 5.0.",
        author: "Sarah Mitchell",
        location: "Airbnb Superhost · Gold Coast QLD",
        rating: 5,
      }}
      faqs={[
        {
          q: "How fast can you complete a turnover?",
          a: "Most turnovers are completed within the standard 10:00 AM check-out to 2:00 PM check-in window. We assign cleaners specifically dedicated to tight hospitality windows.",
        },
        {
          q: "Do you inspect for damages after guests check out?",
          a: "Yes! Our cleaners perform a visual walkthrough and immediately alert the host via SMS with photos if any property damage or smoking violations are found.",
        },
        {
          q: "Can you manage linen washing?",
          a: "Yes, we can wash and dry linen on-site during the clean if laundry facilities are available, or swap with host-provided backup linen sets.",
        },
      ]}
    />
  );
}
