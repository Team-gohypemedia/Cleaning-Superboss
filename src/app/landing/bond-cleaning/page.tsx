"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Check, Star, ShieldCheck, Award, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export default function BondCleaningLandingPage() {
  const [propertyType, setPropertyType] = useState("2-bed");
  const [hasCarpetSteam, setHasCarpetSteam] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    moveDate: "",
    agentNotes: "",
  });

  const basePrice = {
    "1-bed": 329,
    "2-bed": 419,
    "3-bed": 519,
    "4-bed": 639,
    "5-bed": 759,
  }[propertyType] || 419;

  const totalPrice = basePrice + (hasCarpetSteam ? 99 : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#08295b]">
      {/* High Conversion Header */}
      <header className="w-full bg-white border-b border-[#d0e4f7] py-3.5 px-4 sm:px-8 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Cleaning Superboss" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-[10px] uppercase font-bold text-[#08295b]/60 tracking-wider">Fast 7-Day Dispatch</span>
              <span className="text-sm font-extrabold text-[#08295b]">+61 460 849 843</span>
            </div>
            <a
              href="tel:+61460849843"
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-bold uppercase tracking-wide transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call +61 460 849 843</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero & Quote Form Above the Fold */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-10 border-b border-[#d0e4f7] bg-gradient-to-b from-white to-[#f8fbfe]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#e3f2fd] border border-[#d0e4f7] px-3.5 py-1 rounded-full text-[#0d47a1] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              100% Bond Back Guarantee · Real Estate Approved
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08295b] tracking-tight leading-[1.12]">
              Australia&apos;s #1 End of Lease <br className="hidden sm:inline" />
              <span className="text-[#0d47a1]">Bond Cleaning</span> Specialists
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#08295b]/75 max-w-xl font-normal leading-relaxed">
              Don&apos;t risk losing your bond. Our professional cleaners follow strict real estate checklists with an unconditional <strong>72-hour free reclean guarantee</strong> so you get 100% of your deposit back.
            </p>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#08295b]">
                <Check className="w-4 h-4 text-[#2196f3] shrink-0" />
                <span>Inside oven, rangehood & stovetop degreased</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#08295b]">
                <Check className="w-4 h-4 text-[#2196f3] shrink-0" />
                <span>Shower screens & bathroom grout descaled</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#08295b]">
                <Check className="w-4 h-4 text-[#2196f3] shrink-0" />
                <span>Window tracks, sills & glass polished</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#08295b]">
                <Check className="w-4 h-4 text-[#2196f3] shrink-0" />
                <span>All cupboards, drawers & shelves inside/out</span>
              </div>
            </div>

            {/* Star Rating Strip */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#08295b]">
                4.9/5 from 1,200+ Bond Cleans Nationwide
              </span>
            </div>
          </div>

          {/* Right Column: High-Converting Free Quote & Booking Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#08295b] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 relative">
              <div className="mb-5 pb-4 border-b border-white/15">
                <span className="text-[10px] uppercase font-bold text-[#2196f3] tracking-widest block">
                  Instant Quote Calculator
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  Get Your Free Bond Quote
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#2196f3]/20 rounded-full flex items-center justify-center mx-auto border border-[#2196f3]">
                    <Check className="w-7 h-7 text-[#2196f3]" />
                  </div>
                  <h4 className="text-xl font-bold">Quote Request Received!</h4>
                  <p className="text-xs text-white/70 max-w-xs mx-auto">
                    Estimated Price: <strong className="text-white text-base">${totalPrice} AUD</strong>. We have sent confirmation to {form.phone}. Our bond coordinator will call or SMS you within 15 minutes!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Property size selector */}
                  <div>
                    <label className="block font-bold text-white/80 uppercase mb-1.5">
                      Property Size *
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white text-xs outline-none focus:border-[#2196f3]"
                    >
                      <option value="1-bed" className="bg-[#08295b]">1 Bed / 1 Bath ($329)</option>
                      <option value="2-bed" className="bg-[#08295b]">2 Bed / 1-2 Bath ($419) – Most Popular</option>
                      <option value="3-bed" className="bg-[#08295b]">3 Bed / 2 Bath ($519)</option>
                      <option value="4-bed" className="bg-[#08295b]">4 Bed / 2+ Bath ($639)</option>
                      <option value="5-bed" className="bg-[#08295b]">5+ Bed / Large House ($759)</option>
                    </select>
                  </div>

                  {/* Add Carpet Steam Cleaning */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer" onClick={() => setHasCarpetSteam(!hasCarpetSteam)}>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={hasCarpetSteam}
                        onChange={(e) => setHasCarpetSteam(e.target.checked)}
                        className="rounded text-[#0d47a1]"
                      />
                      <span className="font-semibold text-white/90">Add Carpet Steam Cleaning</span>
                    </div>
                    <span className="font-bold text-[#2196f3]">+$99 AUD</span>
                  </div>

                  {/* Live Total Estimate */}
                  <div className="p-3.5 rounded-xl bg-[#0d47a1]/40 border border-[#2196f3]/40 flex items-center justify-between">
                    <span className="text-white/80 font-semibold">Estimated Price:</span>
                    <span className="text-2xl font-black text-white">${totalPrice} <span className="text-[10px] font-normal text-white/70">AUD</span></span>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-white/80 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Liam O'Connor"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl p-2.5 text-white outline-none focus:border-[#2196f3]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-white/80 uppercase mb-1">AU Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0460 849 843"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl p-2.5 text-white outline-none focus:border-[#2196f3]"
                      />
                    </div>
                  </div>

                  {/* Email & Suburb */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-white/80 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com.au"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl p-2.5 text-white outline-none focus:border-[#2196f3]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-white/80 uppercase mb-1">Suburb / City *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. South Yarra, Melbourne"
                        value={form.suburb}
                        onChange={(e) => setForm({ ...form, suburb: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl p-2.5 text-white outline-none focus:border-[#2196f3]"
                      />
                    </div>
                  </div>

                  {/* Move Out Date */}
                  <div>
                    <label className="block font-bold text-white/80 uppercase mb-1">Lease End Date *</label>
                    <input
                      type="date"
                      required
                      value={form.moveDate}
                      onChange={(e) => setForm({ ...form, moveDate: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl p-2.5 text-white outline-none focus:border-[#2196f3]"
                    />
                  </div>

                  {/* Submit Quote CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#2196f3] hover:bg-[#0d47a1] text-white font-extrabold uppercase tracking-wider text-sm shadow-xl transition-all cursor-pointer mt-2"
                  >
                    Get Free Quote & Lock In Date (${totalPrice} AUD)
                  </button>

                  <p className="text-[10px] text-center text-white/60">
                    🔒 No payment required now. Full Bond Back Guarantee included.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3 Step Guarantee Process */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-[1100px] mx-auto text-center space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1 rounded-full border border-[#d0e4f7]">
            How We Guarantee Your Bond
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b]">
            Simple, Stress-Free Exit Cleaning
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-3xl border border-[#d0e4f7] shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0d47a1] text-white flex items-center justify-center font-black text-base">
              1
            </div>
            <h3 className="text-base font-bold text-[#08295b]">Lock In Your Date</h3>
            <p className="text-xs text-[#08295b]/70 leading-relaxed">
              Book online or call +61 460 849 843. You get upfront pricing and instant confirmation. No waiting for callbacks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#d0e4f7] shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0d47a1] text-white flex items-center justify-center font-black text-base">
              2
            </div>
            <h3 className="text-base font-bold text-[#08295b]">Inspection-Ready Clean</h3>
            <p className="text-xs text-[#08295b]/70 leading-relaxed">
              Our police-checked cleaners arrive fully equipped and detail every item on your real estate agency exit checklist.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#d0e4f7] shadow-lg space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0d47a1] text-white flex items-center justify-center font-black text-base">
              3
            </div>
            <h3 className="text-base font-bold text-[#08295b]">100% Bond Returned</h3>
            <p className="text-xs text-[#08295b]/70 leading-relaxed">
              Hand over your report. If the agent flags any clean item within 72 hours, we return and reclean it completely free of charge.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency / Last Minute Call Box */}
      <section className="py-10 px-4 sm:px-6 bg-[#08295b] text-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Need an Urgent Same-Day or Next-Day Bond Clean?
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            Moving dates shift unexpectedly. Call our Australian dispatch line directly for fast turnaround.
          </p>
          <div>
            <a
              href="tel:+61460849843"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2196f3] hover:bg-white hover:text-[#08295b] text-white font-extrabold uppercase tracking-wider text-sm transition-all shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call +61 460 849 843 Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-6 border-t border-[#d0e4f7] text-center text-xs text-[#08295b]/60">
        <p>&copy; {new Date().getFullYear()} Cleaning Superboss Ltd · Registered in Australia, California & London · Phone: +61 460 849 843</p>
      </footer>
    </div>
  );
}
