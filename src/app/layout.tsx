import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import MobileStickyBottomBar from "@/components/MobileStickyBottomBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cleaning Superboss | Professional Home & Commercial Cleaning Australia",
  description:
    "Professional cleaning services across Australia. Home cleaning, deep cleaning, bond cleaning, Airbnb turnovers & commercial cleaning. Police checked, insured cleaners. Book online in 60 seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-[#f8fbfe] text-[#08295b] antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <MobileStickyBottomBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
