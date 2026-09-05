import React from "react";
import BondPageContent from "@/components/BondPageContent";
import type { Metadata } from "next";

// Previous Home page components commented out as requested
// import HeroMachineScroll from "@/components/HeroMachineScroll";
// import RibbonSection from "@/components/RibbonSection";
// import InstantQuoteHero from "@/components/InstantQuoteHero";
// import LogoGrid from "@/components/LogoGrid";
// import MasterBrand from "@/components/MasterBrand";
// import ServicesHoverModalSection from "@/components/ServicesHoverModalSection";
// import ShowcaseBentoGallery from "@/components/ShowcaseBentoGallery";
// import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
// import TestimonialBanner from "@/components/TestimonialBanner";
// import AustralianTrustAndAreas from "@/components/AustralianTrustAndAreas";
// import ContactSection from "@/components/ContactSection";
// import FaqSection from "@/components/FaqSection";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "End of Lease Cleaning Perth | Bond Cleaning WA | Cleaning Superboss",
  description:
    "100% Bond Back Guarantee in Perth & Western Australia! Professional end-of-lease vacate cleaning tailored for WA real estate checklists. Free re-clean if required. Get a free quote online in 60s.",
  keywords: [
    "End of Lease Cleaning Perth",
    "Bond Cleaning Perth",
    "Vacate Cleaning Perth WA",
    "Bond Cleaners Perth",
    "End of Tenancy Cleaning Western Australia",
    "Real Estate Vacate Cleaning Perth",
    "End Of Lease Cleaning Services",
  ],
};

export default function Home() {
  return (
    <main>
      {/* Dedicated End-of-Lease Cleaning Services Page on Home */}
      <BondPageContent />

      {/* 
      ========================================================
      PREVIOUS HOME PAGE SECTIONS (COMMENTED OUT)
      ========================================================
      <div className="relative bg-[#f8fbfe] text-[#08295b] min-h-screen overflow-x-clip">
        <HeroMachineScroll />
        <RibbonSection />
        <InstantQuoteHero />
        <LogoGrid />
        <MasterBrand />
        <ServicesHoverModalSection />
        <BeforeAfterShowcase />
        <AustralianTrustAndAreas />
        <ShowcaseBentoGallery />
        <TestimonialBanner />
        <ContactSection />
        <FaqSection />
        <Footer />
      </div> 
      */}
    </main>
  );
}
