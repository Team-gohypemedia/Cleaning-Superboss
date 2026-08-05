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
            Contact us and we will be in touch <br className="hidden sm:inline" /> same day, your way
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Information & Logos */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <p className="text-base sm:text-lg font-semibold text-[#1C1B1F]/80 leading-relaxed max-w-[450px]">
                Fill out the form, and we&apos;ll be happy to discuss how Industrial Edge can help you with your factory of the future:
              </p>

              {/* Bullet List with Orange Indicators */}
              <div className="relative pl-6 border-l-2 border-[#D9692A]/50 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D9692A]" />
                  <span className="text-base sm:text-lg font-bold text-[#1C1B1F]">30-minute demo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D9692A]" />
                  <span className="text-base sm:text-lg font-bold text-[#1C1B1F]">Needs discovery call</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D9692A]" />
                  <span className="text-base sm:text-lg font-bold text-[#1C1B1F]">Factory ROI assessment</span>
                </div>
              </div>
            </div>

            {/* Trusted Logos Section */}
            <div className="space-y-4 pt-4 border-t border-[#E5E1D3]/80">
              <span className="block text-sm font-semibold uppercase tracking-wider text-[#1C1B1F]/60">
                Trusted by those in the know.
              </span>
              
              {/* Logos Grid (Sleek typographic/monochrome SVG icons) */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-80 grayscale">
                {/* Ryder */}
                <div className="text-lg font-black tracking-tighter text-[#1C1B1F] italic flex items-center">
                  Ryder<span className="text-[#D9692A] not-italic">.</span>
                </div>
                
                {/* Honda */}
                <div className="text-lg font-bold tracking-widest text-[#1C1B1F]">
                  HONDA
                </div>
                
                {/* Ocean Spray */}
                <div className="text-md font-semibold tracking-tight text-[#1C1B1F] underline decoration-2 decoration-[#D9692A]">
                  OceanSpray
                </div>
                
                {/* DSV */}
                <div className="text-xl font-extrabold tracking-tight text-[#1C1B1F]">
                  DSV
                </div>
                
                {/* NFI */}
                <div className="text-lg font-bold italic text-[#1C1B1F]">
                  NFI<span className="text-xs font-normal align-super">®</span>
                </div>
                
                {/* Goodyear */}
                <div className="text-md font-extrabold uppercase tracking-tight text-[#1C1B1F] italic">
                  GOOD YEAR
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#151518] text-[#E2E8F0] p-5 sm:p-10 rounded-[24px] sm:rounded-[32px] shadow-2xl border border-white/5 relative overflow-hidden">
              {/* Subtle background gradient overlay */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#D9692A]/5 to-transparent blur-[80px] pointer-events-none" />

              {submitted ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#D9692A]/10 rounded-full flex items-center justify-center mx-auto border border-[#D9692A]/30 animate-pulse">
                    <Check className="w-8 h-8 text-[#D9692A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-slate-400 max-w-sm mx-auto">
                    We&apos;ve received your request and will contact you within the next hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Two Column Grid Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Full Name */}
                    <div className="space-y-2 border-b border-white/10 focus-within:border-[#D9692A] transition-colors pb-1">
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

                    {/* Role or Position */}
                    <div className="space-y-2 border-b border-white/10 focus-within:border-[#D9692A] transition-colors pb-1">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Role or position *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Project manager"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/60 text-base font-medium"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2 border-b border-white/10 focus-within:border-[#D9692A] transition-colors pb-1">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        placeholder="(323) 555-0147"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/60 text-base font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2 border-b border-white/10 focus-within:border-[#D9692A] transition-colors pb-1">
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

                  {/* Company Name */}
                  <div className="space-y-2 border-b border-white/10 focus-within:border-[#D9692A] transition-colors pb-1">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Company name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 placeholder-white/60 text-base font-medium"
                    />
                  </div>

                  {/* How Can We Help Dropdown Selector */}
                  <div className="space-y-2 border-b border-white/10 focus-within:border-[#D9692A] transition-colors pb-1 relative">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      How Can We Help? *
                    </label>
                    <select
                      required
                      value={formData.helpOption}
                      onChange={(e) => setFormData({ ...formData, helpOption: e.target.value })}
                      className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 text-base appearance-none cursor-pointer pr-8 font-medium"
                    >
                      <option value="" className="bg-[#151518] text-white/60">Select options</option>
                      <option value="demo" className="bg-[#151518] text-white">Request a 30-Minute Demo</option>
                      <option value="call" className="bg-[#151518] text-white">Schedule a Discovery Call</option>
                      <option value="roi" className="bg-[#151518] text-white">Get a Factory ROI Assessment</option>
                      <option value="custom" className="bg-[#151518] text-white">General Inquiry</option>
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
                    className="w-full py-4 px-6 rounded-2xl bg-[#D9692A] hover:bg-[#c2581f] active:scale-[0.98] text-white font-extrabold uppercase tracking-widest text-xs shadow-lg transition-all cursor-pointer border border-[#D9692A]/30 text-center"
                  >
                    Submit
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
