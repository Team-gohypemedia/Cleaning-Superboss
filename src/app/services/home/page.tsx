import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Home Cleaning Australia | Cleaning Superboss",
  description:
    "Reliable, police-checked home cleaners for regular or one-off home cleaning across Australia. Upfront pricing, 100% satisfaction guarantee. Book online in 60s.",
};

export default function HomeCleaningPage() {
  return (
    <ServicePageTemplate
      serviceTitle="Home Cleaning"
      badge="Regular & Once-Off Home Cleans"
      tagline="Professional Home Cleaning. Exceptional Results."
      description="Enjoy coming home to a spotless house. Our police-checked, insured cleaners handle regular maintenance or one-off cleans across all major Australian cities."
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
      startingPrice="$149"
      hourlyRate="$50 / hour (min 2 hours)"
      pricingRows={[
        { property: "1 Bedroom / 1 Bathroom", durationApprox: "2.0 – 2.5 hrs", oneOff: "$149", recurring: "$119" },
        { property: "2 Bedroom / 1-2 Bathroom", durationApprox: "2.5 – 3.5 hrs", oneOff: "$189", recurring: "$159", popular: true },
        { property: "3 Bedroom / 2 Bathroom", durationApprox: "3.5 – 4.5 hrs", oneOff: "$249", recurring: "$219" },
        { property: "4 Bedroom / 2+ Bathroom", durationApprox: "4.5 – 5.5 hrs", oneOff: "$309", recurring: "$279" },
        { property: "5+ Bedroom / Luxury Home", durationApprox: "5.5+ hrs", oneOff: "$379", recurring: "$349" },
      ]}
      included={[
        {
          category: "Kitchen & Dining",
          tasks: [
            "Wipe down all benchtops & splashbacks",
            "Clean exterior of stovetop, oven & microwave",
            "Clean exterior of fridge & dishwasher",
            "Scrub & disinfect sink and chrome tapware",
            "Empty kitchen bins & wipe outside of cabinets",
          ],
        },
        {
          category: "Bathrooms & Toilets",
          tasks: [
            "Scrub, disinfect & descale showers & tubs",
            "Sanitise toilet bowls inside and out",
            "Clean bathroom vanities, sinks & taps",
            "Polish mirrors streak-free",
            "Mop and disinfect tile floors",
          ],
        },
        {
          category: "Bedrooms & Living Areas",
          tasks: [
            "Dust all furniture, shelves & light switches",
            "Make beds & tidy surfaces (linens changed on request)",
            "Vacuum carpets, rugs & all floor areas",
            "Mop all hard floors with eco-safe disinfectant",
            "Empty all interior waste baskets",
          ],
        },
      ]}
      testimonial={{
        quote: "Our fortnightly home clean has been a game changer. The cleaner is always on time, incredibly polite, and pays attention to every little detail. Worth every dollar.",
        author: "Sarah Jenkins",
        location: "Homeowner · Perth WA",
        rating: 5,
      }}
      faqs={[
        {
          q: "How often can I schedule a home clean?",
          a: "You can book as a once-off clean or choose recurring schedules (weekly, fortnightly, or monthly). Recurring customers save up to $30 on every single clean.",
        },
        {
          q: "Do I need to be home for the cleaner?",
          a: "No. Many of our clients leave a key in a lockbox or let the cleaner in before heading to work. All cleaners are thoroughly police-checked and insured.",
        },
        {
          q: "What if something is not cleaned to my satisfaction?",
          a: "We back every service with our 100% Spotless Satisfaction Guarantee. Let us know within 24 hours and we will send our team back to reclean the area free of charge.",
        },
        {
          q: "Are cleaning products included?",
          a: "Yes! Our cleaners bring all equipment, vacuums, microfibre mops, and eco-friendly cleaning supplies.",
        },
      ]}
    />
  );
}
