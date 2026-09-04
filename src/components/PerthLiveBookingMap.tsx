"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface RecentBooking {
  id: string;
  suburb: string;
  postcode: string;
  service: string;
  timeAgo: string;
  clientName: string;
  status: string;
  agent: string;
  mapQuery: string;
}

const PERTH_RECENT_BOOKINGS: RecentBooking[] = [
  {
    id: "subiaco",
    suburb: "Subiaco",
    postcode: "6008",
    service: "3 Bed House Bond Clean",
    timeAgo: "12 mins ago",
    clientName: "Liam S.",
    status: "Quote Dispatched",
    agent: "Ray White Subiaco",
    mapQuery: "Subiaco WA 6008, Australia",
  },
  {
    id: "scarborough",
    suburb: "Scarborough",
    postcode: "6019",
    service: "2 Bed Unit Vacate + Carpet Clean",
    timeAgo: "26 mins ago",
    clientName: "Sarah T.",
    status: "Inspection-Ready",
    agent: "Peard Real Estate",
    mapQuery: "Scarborough WA 6019, Australia",
  },
  {
    id: "joondalup",
    suburb: "Joondalup",
    postcode: "6027",
    service: "4 Bed House End of Lease",
    timeAgo: "41 mins ago",
    clientName: "Mark D.",
    status: "Clean Scheduled",
    agent: "Harcourts Joondalup",
    mapQuery: "Joondalup WA 6027, Australia",
  },
  {
    id: "fremantle",
    suburb: "Fremantle",
    postcode: "6160",
    service: "2 Bed Apartment Vacate Clean",
    timeAgo: "1 hour ago",
    clientName: "Chloe R.",
    status: "100% Bond Guarantee Active",
    agent: "ACTON | Belle Fremantle",
    mapQuery: "Fremantle WA 6160, Australia",
  },
];

const SUBURB_QUICK_TABS = [
  { label: "All Perth Metro", query: "Perth WA, Australia", zoom: 11 },
  { label: "Subiaco", query: "Subiaco WA 6008, Australia", zoom: 14 },
  { label: "Scarborough", query: "Scarborough WA 6019, Australia", zoom: 14 },
  { label: "Joondalup", query: "Joondalup WA 6027, Australia", zoom: 13 },
  { label: "Fremantle", query: "Fremantle WA 6160, Australia", zoom: 14 },
  { label: "Perth CBD", query: "Perth CBD, Western Australia", zoom: 14 },
  { label: "Rockingham", query: "Rockingham WA 6168, Australia", zoom: 13 },
];

export default function PerthLiveBookingMap() {
  const [selectedTab, setSelectedTab] = useState(SUBURB_QUICK_TABS[0]);

  const scrollToQuoteForm = () => {
    const formEl = document.getElementById("quote-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 bg-white border-b border-[#d0e4f7]">
      <div className="max-w-[1360px] mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-4 py-1.5 rounded-full border border-[#d0e4f7] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <span>🗺️ LIVE BOOKING ACTIVITY</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08295b] tracking-tight">
            Recent Cleaning Bookings Across Perth
          </h2>
          <p className="text-xs sm:text-sm text-[#08295b]/70 leading-relaxed">
            See where Perth residents are booking our professional cleaning services throughout the metropolitan area
          </p>
        </div>

        {/* Clean, Full-Width Google Map Card */}
        <div className="bg-[#f8fbfe] border border-[#d0e4f7] rounded-3xl p-4 sm:p-6 shadow-xl space-y-4">
          
          {/* Suburb Filter Pills */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
              {SUBURB_QUICK_TABS.map((tab) => {
                const isSelected = selectedTab.label === tab.label;
                return (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setSelectedTab(tab)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                      isSelected
                        ? "bg-[#0d47a1] text-white shadow-xs scale-102"
                        : "bg-white border border-[#d0e4f7] text-[#08295b] hover:bg-[#e3f2fd]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Perth Coverage</span>
            </div>
          </div>

          {/* Google Map Frame */}
          <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#d0e4f7] bg-slate-100 shadow-inner">
            <iframe
              title="Perth Live Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                selectedTab.query
              )}&t=m&z=${selectedTab.zoom}&output=embed&iwloc=near`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Live Recent Bookings 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {PERTH_RECENT_BOOKINGS.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-2xl p-4 border border-[#d0e4f7] shadow-xs flex flex-col justify-between space-y-2 hover:border-[#2196f3] transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#08295b]">
                      <MapPin className="w-3.5 h-3.5 text-[#0d47a1]" />
                      <span>{booking.suburb} (WA {booking.postcode})</span>
                    </div>
                    <span className="text-[10px] text-[#08295b]/50 font-semibold">
                      {booking.timeAgo}
                    </span>
                  </div>
                  <div className="text-xs text-[#08295b]/80 font-medium">
                    {booking.service}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#d0e4f7]/70 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#0d47a1]">
                    {booking.agent}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[10px]">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="p-4 bg-white rounded-2xl border border-[#d0e4f7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#e3f2fd] flex items-center justify-center text-[#0d47a1] shrink-0 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#2196f3]" />
              </div>
              <div>
                <span className="font-extrabold text-[#08295b] block">
                  Moving out in Perth? 100% Bond Back Guarantee on all cleans
                </span>
                <span className="text-[11px] text-[#08295b]/70">
                  REIWA approved checklists with 72-hour free reclean guarantee
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToQuoteForm}
              className="px-5 py-2.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-all cursor-pointer shrink-0 flex items-center justify-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
