"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    phone: "",
    email: "",
    company: "",
    helpOption: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        role: "",
        phone: "",
        email: "",
        company: "",
        helpOption: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="w-full bg-[#FAF6F0] py-12 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 border-t border-[#E5E1D3]">
      <div className="w-full max-w-[1240px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1B1F] tracking-tight leading-[1.15]">
            Ready for a Cleaner Future? <br className="hidden sm:inline" /> Get Your Free Quote or Book Today
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Information & Logos */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <p className="text-base sm:text-lg font-semibold text-[#1C1B1F]/80 leading-relaxed max-w-[450px]">
                Fill out the form below to get an instant automated quote or connect with our cleaning coordination team:
              </p>

              {/* Bullet List with Blue Indicators */}
              <div className="relative pl-6 border-l-2 border-[#5680e9]/50 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5680e9]" />
                  <span className="text-base sm:text-lg font-bold text-[#1C1B1F]">Instant automated quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5680e9]" />
                  <span className="text-base sm:text-lg font-bold text-[#1C1B1F]">Easy 60-second online booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5680e9]" />
                  <span className="text-base sm:text-lg font-bold text-[#1C1B1F]">100% Spotless Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            {/* Trusted Logos Section */}
            <div className="space-y-4 pt-4 border-t border-[#E5E1D3]/80">
              <span className="block text-sm font-semibold uppercase tracking-wider text-[#1C1B1F]/60">
                Trusted by modern residences & workspaces
              </span>
              
              {/* Logos Grid */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-80">
                <div className="text-lg font-black tracking-tight text-[#1C1B1F] italic flex items-center">
                  Airbnb<span className="text-[#5680e9] not-italic text-xs font-bold ml-1">HOSTS</span>
                </div>
                
                <div className="text-base font-bold tracking-widest text-[#1C1B1F]">
                  LUXURY CONDOS
                </div>
                
                <div className="text-base font-semibold tracking-tight text-[#1C1B1F] underline decoration-2 decoration-[#5680e9]">
                  TECH HUBS
                </div>
                
                <div className="text-lg font-extrabold tracking-tight text-[#1C1B1F]">
                  COMMERCIAL HQ
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#151518] text-[#E2E8F0] p-5 sm:p-10 rounded-[24px] sm:rounded-[32px] shadow-2xl border border-white/5 relative overflow-hidden">
              {/* Subtle background gradient overlay */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#5680e9]/10 via-[#8860d0]/5 to-transparent blur-[80px] pointer-events-none" />

              {submitted ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#5680e9]/10 rounded-full flex items-center justify-center mx-auto border border-[#5680e9]/30 animate-pulse">
                    <Check className="w-8 h-8 text-[#5680e9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
                  <p className="text-slate-400 max-w-sm mx-auto">
                    We&apos;ve calculated your initial estimate and sent your confirmation to your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Two Column Grid Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Full Name */}
                    <div className="space-y-2 border-b border-white/10 focus-within:border-[#5680e9] transition-colors pb-1">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/60 text-base font-medium"
                      />
                    </div>

                    {/* Property Type / Size */}
                    <div className="space-y-2 border-b border-white/10 focus-within:border-[#5680e9] transition-colors pb-1">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Property Type / Size *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 2-Bed Apt / 2500 sq ft Office"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/60 text-base font-medium"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2 border-b border-white/10 focus-within:border-[#5680e9] transition-colors pb-1">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-1234"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/60 text-base font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2 border-b border-white/10 focus-within:border-[#5680e9] transition-colors pb-1">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/60 text-base font-medium"
                      />
                    </div>
                  </div>

                  {/* Location / City */}
                  <div className="space-y-2 border-b border-white/10 focus-within:border-[#5680e9] transition-colors pb-1">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Los Angeles, CA / Zip Code"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/60 text-base font-medium"
                    />
                  </div>

                  {/* Select Service Dropdown */}
                  <div className="space-y-2 border-b border-white/10 focus-within:border-[#5680e9] transition-colors pb-1 relative">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Select Service *
                    </label>
                    <select
                      required
                      value={formData.helpOption}
                      onChange={(e) => setFormData({ ...formData, helpOption: e.target.value })}
                      className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 text-base appearance-none cursor-pointer pr-8 font-medium"
                    >
                      <option value="" className="bg-[#151518] text-white/60">Choose a cleaning service</option>
                      <option value="residential" className="bg-[#151518] text-white">Residential Cleaning</option>
                      <option value="deep" className="bg-[#151518] text-white">Deep Cleaning</option>
                      <option value="commercial" className="bg-[#151518] text-white">Office & Commercial Cleaning</option>
                      <option value="airbnb" className="bg-[#151518] text-white">Airbnb Turnover Cleaning</option>
                      <option value="window" className="bg-[#151518] text-white">Window Cleaning</option>
                      <option value="carpet" className="bg-[#151518] text-white">Carpet & Upholstery Cleaning</option>
                    </select>
                    {/* Custom Down Arrow icon */}
                    <div className="absolute right-0 bottom-2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-[#5680e9] hover:bg-[#466fd9] active:scale-[0.98] text-white font-extrabold uppercase tracking-widest text-xs shadow-lg shadow-[#5680e9]/25 transition-all cursor-pointer border border-[#5680e9]/30 text-center"
                  >
                    Get Your Free Quote
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
