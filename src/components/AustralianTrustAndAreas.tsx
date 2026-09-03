import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  MapPin,
  Phone,
  CheckCircle2,
  FileCheck,
  Building2,
  Globe2,
} from "lucide-react";

function CountryFlagBadge({ country }: { country: string }) {
  if (country === "Australia") {
    return (
      <span className="inline-flex items-center justify-center w-6 h-4.5 rounded-xs overflow-hidden shadow-2xs border border-slate-300/60 shrink-0 bg-[#00008b] relative">
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <path fill="#00008b" d="M0 0h640v480H0z" />
          <path d="m0 0 320 240m0-240L0 240" stroke="#fff" strokeWidth="40" />
          <path d="m0 0 320 240m0-240L0 240" stroke="#c8102e" strokeWidth="24" />
          <path d="M160 0v240M0 120h320" stroke="#fff" strokeWidth="64" />
          <path d="M160 0v240M0 120h320" stroke="#c8102e" strokeWidth="40" />
          <circle cx="160" cy="360" r="36" fill="#fff" />
          <circle cx="480" cy="360" r="22" fill="#fff" />
          <circle cx="440" cy="200" r="18" fill="#fff" />
          <circle cx="520" cy="140" r="18" fill="#fff" />
          <circle cx="540" cy="240" r="14" fill="#fff" />
        </svg>
      </span>
    );
  }
  if (country.startsWith("California")) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-4.5 rounded-xs overflow-hidden shadow-2xs border border-slate-300/60 shrink-0 bg-white relative">
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <path fill="#b22234" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 37h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0z" />
          <path fill="#3c3b6e" d="M0 0h260v260H0z" />
          <circle cx="130" cy="130" r="28" fill="#fff" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-4.5 rounded-xs overflow-hidden shadow-2xs border border-slate-300/60 shrink-0 bg-[#00247d] relative">
      <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
        <path fill="#00247d" d="M0 0h640v480H0z" />
        <path d="m0 0 640 480m0-480L0 480" stroke="#fff" strokeWidth="60" />
        <path d="m0 0 640 480m0-480L0 480" stroke="#cf142b" strokeWidth="40" />
        <path d="M320 0v480M0 240h640" stroke="#fff" strokeWidth="100" />
        <path d="M320 0v480M0 240h640" stroke="#cf142b" strokeWidth="60" />
      </svg>
    </span>
  );
}

export default function AustralianTrustAndAreas() {
  const serviceAreas = [
    {
      region: "Australia",
      flag: "🇦🇺",
      badge: "Primary Registered Hub",
      phone: "+61 460 849 843",
      hubs: [
        "Greater Sydney (CBD, Eastern Suburbs, Inner West, North Shore)",
        "Greater Melbourne (CBD, South Yarra, Richmond, St Kilda, Brighton)",
        "Brisbane & Gold Coast (CBD, New Farm, Surfers Paradise, Broadbeach)",
        "Perth (CBD, Fremantle, Subiaco) & Adelaide Metro",
        "Canberra & ACT Central",
      ],
      ctaText: "Book in Australia",
    },
    {
      region: "California, USA",
      flag: "🇺🇸",
      badge: "State Registered Entity",
      phone: "+61 460 849 843",
      hubs: [
        "Los Angeles & West Hollywood",
        "San Francisco & Bay Area",
        "Silicon Valley & San Jose",
        "San Diego & La Jolla",
        "Orange County & Newport Beach",
      ],
      ctaText: "Book in California",
    },
    {
      region: "London, UK",
      flag: "🇬🇧",
      badge: "Registered UK Office",
      phone: "+61 460 849 843",
      hubs: [
        "Central London & City of London",
        "Westminster, Kensington & Chelsea",
        "Camden, Islington & Highbury",
        "Canary Wharf & Docklands",
        "Greater London Postcodes",
      ],
      ctaText: "Book in London",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-14 bg-[#f8fbfe] border-t border-[#d0e4f7]">
      <div className="max-w-[1360px] mx-auto space-y-16">
        
        {/* Top Trust Banner: Registered in Australia, California and London */}
        <div className="bg-white rounded-xl border border-[#d0e4f7] p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-[#d0e4f7] pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e3f2fd] text-[#0d47a1] text-xs font-mono font-bold uppercase">
                <Building2 className="w-3.5 h-3.5 text-[#2196f3]" />
                <span>Verified Corporate Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08295b] tracking-tight">
                Cleaning Superboss Ltd
              </h2>
              <p className="text-xs sm:text-sm text-[#08295b]/80 max-w-xl font-medium">
                Officially registered in <strong className="text-[#0d47a1]">Australia, California and London</strong>. Providing hotel-grade domestic, bond, and commercial cleaning with upfront pricing and police-checked specialists.
              </p>
            </div>

            {/* Direct Contact & Phone Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+61460849843"
                className="px-5 py-3 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +61 460 849 843</span>
              </a>
              <Link
                href="/book"
                className="px-5 py-3 rounded-lg bg-white border border-[#d0e4f7] hover:bg-[#f0f7fe] text-[#08295b] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
              >
                Book Online
              </Link>
            </div>
          </div>

          {/* 4 Trust Pillars Grid (Swipeable snap slider on mobile) */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory no-scrollbar w-full max-w-full">
            
            {/* 1. Business Registration */}
            <div className="w-[78vw] max-w-[280px] sm:w-auto sm:max-w-none snap-center space-y-2 p-4 rounded-lg bg-[#f8fbfe] border border-[#d0e4f7] shrink-0 sm:shrink">
              <div className="flex items-center gap-2 text-[#0d47a1]">
                <FileCheck className="w-5 h-5 text-[#2196f3]" />
                <h3 className="text-xs font-bold uppercase tracking-wider">Business Identity</h3>
              </div>
              <p className="text-sm font-extrabold text-[#08295b]">ABN: 48 642 918 203</p>
              <p className="text-xs text-[#08295b]/60">
                Registered in Australia, California &amp; London with full tax invoice and legal compliance.
              </p>
            </div>

            {/* 2. $10M Insurance */}
            <div className="w-[78vw] max-w-[280px] sm:w-auto sm:max-w-none snap-center space-y-2 p-4 rounded-lg bg-[#f8fbfe] border border-[#d0e4f7] shrink-0 sm:shrink">
              <div className="flex items-center gap-2 text-[#0d47a1]">
                <ShieldCheck className="w-5 h-5 text-[#2196f3]" />
                <h3 className="text-xs font-bold uppercase tracking-wider">$10M Public Liability</h3>
              </div>
              <p className="text-sm font-extrabold text-[#08295b]">Comprehensive Protection</p>
              <p className="text-xs text-[#08295b]/60">
                Total property and contents damage insurance cover on every scheduled residential and commercial clean.
              </p>
            </div>

            {/* 3. Google Reviews */}
            <div className="w-[78vw] max-w-[280px] sm:w-auto sm:max-w-none snap-center space-y-2 p-4 rounded-lg bg-[#f8fbfe] border border-[#d0e4f7] shrink-0 sm:shrink">
              <div className="flex items-center gap-2 text-[#0d47a1]">
                <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider">Google Rating</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-[#08295b]">4.9 / 5.0</span>
                <span className="text-xs font-semibold text-[#08295b]/60">(1,200+ Reviews)</span>
              </div>
              <p className="text-xs text-[#08295b]/60">
                Verified five-star reviews from satisfied domestic and commercial customers across all locations.
              </p>
            </div>

            {/* 4. Guarantee Terms */}
            <div className="w-[78vw] max-w-[280px] sm:w-auto sm:max-w-none snap-center space-y-2 p-4 rounded-lg bg-[#f8fbfe] border border-[#d0e4f7] shrink-0 sm:shrink">
              <div className="flex items-center gap-2 text-[#0d47a1]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider">Clear Guarantee Terms</h3>
              </div>
              <p className="text-sm font-extrabold text-[#08295b]">100% Spotless Guarantee</p>
              <p className="text-xs text-[#08295b]/60">
                72-Hour free re-clean on bond/vacate jobs. If any detail is questioned, we return and re-clean for free.
              </p>
            </div>

          </div>

        </div>

        {/* Global Serving Areas Directory: Australia, California and London */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#e3f2fd] text-[#0d47a1] text-xs font-mono font-bold uppercase">
              <Globe2 className="w-3.5 h-3.5 text-[#2196f3]" />
              <span>International Service Presence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b] tracking-tight">
              Serving Australia, California and London
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70">
              Operating across our three core registered jurisdictions with dedicated local teams and uniform excellence.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible pb-3 md:pb-0 snap-x snap-mandatory no-scrollbar w-full max-w-full">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="w-[84vw] max-w-[340px] md:w-auto md:max-w-none snap-center bg-white rounded-xl border border-[#d0e4f7] p-5 sm:p-6 shadow-xs space-y-4 hover:shadow-md transition-all flex flex-col justify-between shrink-0 md:shrink"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#d0e4f7] pb-3">
                    <div className="flex items-center gap-2.5">
                      <CountryFlagBadge country={area.region} />
                      <h3 className="font-extrabold text-base sm:text-lg text-[#08295b] tracking-tight leading-tight">
                        {area.region}
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold text-[#0d47a1] bg-[#e3f2fd] px-2.5 py-1 rounded-md">
                      {area.badge}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-[#0d47a1] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2196f3]" />
                    <span>Dispatch: {area.phone}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-[#08295b]/75">
                    {area.hubs.map((hub, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#2196f3] shrink-0 mt-0.5" />
                        <span>{hub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#d0e4f7]">
                  <Link
                    href="/book"
                    className="block text-center py-2.5 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                  >
                    {area.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
