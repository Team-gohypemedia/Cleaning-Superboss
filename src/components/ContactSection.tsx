"use client";

import React, { useState, useMemo } from "react";
import { Check, Phone, ShieldCheck, Clock, Award, Calendar } from "lucide-react";

interface ServicePriceConfig {
  [service: string]: {
    [size: string]: number;
  };
}

const PRICING_TABLE: ServicePriceConfig = {
  home: {
    "1-bed": 149,
    "2-bed": 189,
    "3-bed": 249,
    "4-bed": 309,
    "5-bed": 379,
    "hourly-2": 110,
    "hourly-3": 165,
    "hourly-4": 220,
  },
  deep: {
    "1-bed": 229,
    "2-bed": 289,
    "3-bed": 359,
    "4-bed": 439,
    "5-bed": 519,
    "hourly-2": 140,
    "hourly-3": 210,
    "hourly-4": 280,
  },
  bond: {
    "1-bed": 329,
    "2-bed": 419,
    "3-bed": 519,
    "4-bed": 639,
    "5-bed": 759,
    "hourly-2": 180,
    "hourly-3": 270,
    "hourly-4": 360,
  },
  airbnb: {
    "1-bed": 129,
    "2-bed": 169,
    "3-bed": 219,
    "4-bed": 279,
    "5-bed": 339,
    "hourly-2": 110,
    "hourly-3": 165,
    "hourly-4": 220,
  },
  commercial: {
    "1-bed": 199,
    "2-bed": 279,
    "3-bed": 369,
    "4-bed": 469,
    "5-bed": 589,
    "hourly-2": 130,
    "hourly-3": 195,
    "hourly-4": 260,
  },
};

export default function ContactSection() {
  const [serviceType, setServiceType] = useState("home");
  const [propertySize, setPropertySize] = useState("2-bed");
  const [frequency, setFrequency] = useState("recurring"); // "onceoff" or "recurring"
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("morning");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    suburb: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Calculate live dynamic price upfront
  const livePrice = useMemo(() => {
    const base = PRICING_TABLE[serviceType]?.[propertySize] || 189;
    const discount = frequency === "recurring" ? 30 : 0;
    return Math.max(89, base - discount);
  }, [serviceType, propertySize, frequency]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        suburb: "",
        notes: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full bg-[#f8fbfe] py-10 sm:py-20 px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 border-t border-[#d0e4f7] overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto space-y-3.5 sm:space-y-4 pb-2 sm:pb-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1.5 rounded-full border border-[#d0e4f7] inline-block shadow-2xs">
              Online Booking System
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#08295b] tracking-tight leading-[1.2] pt-1">
            Book Your Clean in 60 Seconds
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#08295b]/70 font-normal max-w-xl mx-auto leading-relaxed pt-0.5">
            Transparent upfront pricing. Police-checked &amp; fully insured Australian cleaners. No hidden fees.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Trust Signals, Price Summary & Phone */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Pricing Highlight Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#d0e4f7] shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#d0e4f7]">
                <div>
                  <span className="text-xs font-bold text-[#08295b]/60 uppercase tracking-wider block">
                    Estimated Price
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08295b]">
                      ${livePrice}
                    </span>
                    <span className="text-xs font-bold text-[#08295b]/60 uppercase">
                      AUD {frequency === "recurring" ? "/ clean" : "once-off"}
                    </span>
                  </div>
                </div>
                {frequency === "recurring" && (
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-300">
                    $30 OFF RECURRING
                  </span>
                )}
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#08295b]/80">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2196f3] shrink-0" />
                  <span>All cleaning supplies &amp; equipment included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2196f3] shrink-0" />
                  <span>100% Police Checked &amp; Insured Cleaners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2196f3] shrink-0" />
                  <span>100% Spotless Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2196f3] shrink-0" />
                  <span>Free 24hr cancellation &amp; reschedule</span>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-2.5 border-t border-[#d0e4f7]">
                <a
                  href="tel:+61460849843"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#e3f2fd] text-[#08295b] hover:bg-[#0d47a1] hover:text-white transition-all text-xs sm:text-sm font-bold tracking-wide"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Need Help? Call +61 460 849 843
                </a>
              </div>
            </div>

            {/* Corporate Registration & Trust Badges */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white/80 p-3 rounded-xl border border-[#d0e4f7] flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#0d47a1] shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-[#08295b]">Fully Insured</span>
                    <span className="text-[10px] text-[#08295b]/60">Comprehensive cover</span>
                  </div>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-[#d0e4f7] flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#0d47a1] shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-[#08295b]">Bond Back</span>
                    <span className="text-[10px] text-[#08295b]/60">100% Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#08295b]/5 border border-[#d0e4f7] text-xs text-[#08295b]/70 space-y-1">
                <p className="font-bold text-[#08295b]">
                  Cleaning Superboss Ltd
                </p>
                <p className="text-[11px]">
                  Registered company in Australia, California and London. Delivering trusted hotel-grade cleaning services nationwide across Australia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#08295b] text-[#e3f2fd] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#0d47a1]/40 via-[#2196f3]/20 to-transparent blur-[80px] pointer-events-none" />

              {submitted ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#2196f3]/20 rounded-full flex items-center justify-center mx-auto border border-[#2196f3]/40 animate-pulse">
                    <Check className="w-8 h-8 text-[#2196f3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Booking Confirmed!</h3>
                  <p className="text-slate-300 max-w-sm mx-auto text-sm">
                    Thank you! We have received your booking request for ${livePrice} AUD. Our dispatch team will send an SMS confirmation shortly to your number.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10 w-full">
                  
                  {/* Service Type Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                      1. Choose Cleaning Service *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {[
                        { id: "home", label: "Home Cleaning", full: false },
                        { id: "deep", label: "Deep Clean", full: false },
                        { id: "bond", label: "Bond / Vacate", full: false },
                        { id: "airbnb", label: "Airbnb Turnover", full: false },
                        { id: "commercial", label: "Commercial Office", full: true },
                      ].map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setServiceType(s.id)}
                          className={`px-2.5 py-2 rounded-lg text-xs font-bold transition-all border text-center ${
                            s.full ? "col-span-2 sm:col-span-1" : ""
                          } ${
                            serviceType === s.id
                              ? "bg-[#2196f3] text-white border-[#2196f3] shadow-sm"
                              : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Size Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                      2. Property Size or Duration *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {[
                        { id: "1-bed", label: "1 Bed / 1 Bath" },
                        { id: "2-bed", label: "2 Bed / 1-2 Bath" },
                        { id: "3-bed", label: "3 Bed / 2 Bath" },
                        { id: "4-bed", label: "4 Bed / 2+ Bath" },
                        { id: "5-bed", label: "5+ Bed / Large" },
                        { id: "hourly-2", label: "By Time: 2 Hours" },
                        { id: "hourly-3", label: "By Time: 3 Hours" },
                        { id: "hourly-4", label: "By Time: 4 Hours" },
                      ].map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPropertySize(p.id)}
                          className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all border text-center ${
                            propertySize === p.id
                              ? "bg-white text-[#08295b] border-white font-bold shadow-sm"
                              : "bg-white/5 text-white/75 border-white/10 hover:bg-white/10"
                          }`}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Frequency Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                      3. Frequency *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFrequency("recurring")}
                        className={`p-2.5 rounded-lg transition-all border text-left flex flex-col justify-center gap-0.5 cursor-pointer ${
                          frequency === "recurring"
                            ? "bg-[#2196f3]/25 border-[#2196f3] text-white ring-1 ring-[#2196f3]"
                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 w-full">
                          <span className="text-xs font-bold text-white">Recurring</span>
                          <span className="text-[9px] bg-emerald-400 text-emerald-950 font-black px-1.5 py-0.5 rounded-full shrink-0 tracking-wider">
                            SAVE $30
                          </span>
                        </div>
                        <span className="text-[10px] text-[#e3f2fd]/70 font-normal">
                          Weekly / Fortnightly
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFrequency("onceoff")}
                        className={`p-2.5 rounded-lg transition-all border text-left flex flex-col justify-center gap-0.5 cursor-pointer ${
                          frequency === "onceoff"
                            ? "bg-[#2196f3]/25 border-[#2196f3] text-white ring-1 ring-[#2196f3]"
                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        <span className="text-xs font-bold text-white">Once-Off Clean</span>
                        <span className="text-[10px] text-[#e3f2fd]/70 font-normal">
                          Single one-time service
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1 border-b border-white/15 focus-within:border-[#2196f3] pb-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 text-xs sm:text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-1 border-b border-white/15 focus-within:border-[#2196f3] pb-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                        Preferred Time Slot *
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 text-xs sm:text-sm font-medium pr-8"
                      >
                        <option value="morning" className="bg-[#08295b] text-white">Morning (8:00 AM – 12:00 PM)</option>
                        <option value="afternoon" className="bg-[#08295b] text-white">Afternoon (12:00 PM – 4:00 PM)</option>
                        <option value="evening" className="bg-[#08295b] text-white">Late Afternoon / Evening (4:00 PM – 7:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1 border-b border-white/15 focus-within:border-[#2196f3] pb-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica Taylor"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/50 text-xs sm:text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-1 border-b border-white/15 focus-within:border-[#2196f3] pb-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                        Phone Number (AU Mobile) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+61 460 849 843"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/50 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1 border-b border-white/15 focus-within:border-[#2196f3] pb-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@email.com.au"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/50 text-xs sm:text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-1 border-b border-white/15 focus-within:border-[#2196f3] pb-1">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                        City / Suburb &amp; Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bondi, Sydney NSW 2026"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/50 text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Special Notes / Entry */}
                  <div className="space-y-1 border-b border-white/15 focus-within:border-[#2196f3] pb-1">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#e3f2fd]/80">
                      Entry Instructions or Special Requests (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Key in lockbox code 1234, focus on kitchen oven"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/50 text-xs sm:text-sm font-medium"
                    />
                  </div>

                  {/* Submit Booking Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] active:scale-[0.98] text-white font-extrabold uppercase tracking-widest text-xs sm:text-sm shadow-xl shadow-[#0d47a1]/40 transition-all cursor-pointer border border-[#2196f3]/50 text-center flex items-center justify-center gap-2"
                  >
                    <span>Confirm &amp; Book Clean (${livePrice} AUD)</span>
                  </button>

                  {/* Security and reassurance note */}
                  <p className="text-[11px] text-center text-[#e3f2fd]/60">
                    🔒 No payment charged now. Pay securely upon completion. 100% Satisfaction Guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
