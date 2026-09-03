import HeroMachineScroll from "@/components/HeroMachineScroll";
import RibbonSection from "@/components/RibbonSection";
import LogoGrid from "@/components/LogoGrid";
import MasterBrand from "@/components/MasterBrand";
import ServicesHoverModalSection from "@/components/ServicesHoverModalSection";
import ShowcaseBentoGallery from "@/components/ShowcaseBentoGallery";
import TestimonialBanner from "@/components/TestimonialBanner";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#f8fbfe] text-[#08295b] min-h-screen overflow-x-clip">
      {/* Hero 192-Frame Pinned Machine Scroll Sequence */}
      {/* @ts-ignore */}
      <HeroMachineScroll />

      {/* Infinite Ribbon Dual Marquee */}
      <RibbonSection />

      {/* Built by the Industry Logo Grid */}
      <LogoGrid />

      {/* The Authority Engine Sticky Scroll Section */}
      <MasterBrand />

      {/* Services with Animated Hover Modal */}
      <ServicesHoverModalSection />

      {/* Production Output Bento Grid Gallery */}
      <ShowcaseBentoGallery />

      {/* Testimonial Banner Section */}
      <TestimonialBanner />

      {/* Contact Form Section */}
      <ContactSection />

      {/* Interactive Tabbed FAQ Section */}
      <FaqSection />

      {/* Footer with Parallax CTA */}
      <Footer />
    </div>
  );
}
