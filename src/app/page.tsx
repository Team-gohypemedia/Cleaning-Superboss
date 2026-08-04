import HeroMachineScroll from "@/components/HeroMachineScroll";
import RibbonSection from "@/components/RibbonSection";
import MasterBrand from "@/components/MasterBrand";
import ServicesHoverModalSection from "@/components/ServicesHoverModalSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#FAF6F0] text-[#1C1B1F] min-h-screen overflow-x-clip">
      {/* Hero 192-Frame Pinned Machine Scroll Sequence */}
      <HeroMachineScroll />

      {/* Infinite Ribbon Dual Marquee */}
      <RibbonSection />

      {/* The Authority Engine Sticky Scroll Section */}
      <MasterBrand />

      {/* Services with Animated Hover Modal */}
      <ServicesHoverModalSection />

      {/* Footer with Parallax CTA */}
      <Footer />
    </div>
  );
}
