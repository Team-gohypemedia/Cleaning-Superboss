"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Phone,
  ArrowRight,
  ArrowLeft,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Home,
  Flame,
  Layers,
  Bath,
  Plus,
  X,
  Mail,
} from "lucide-react";
import ServiceComparisonTable from "@/components/ServiceComparisonTable";
import Footer from "@/components/Footer";

const REAL_ESTATE_AGENCIES = [
  { name: "Ray White", logoText: "RayWhite." },
  { name: "LJ Hooker", logoText: "LJ Hooker" },
  { name: "Belle Property", logoText: "belle PROPERTY" },
  { name: "Harcourts", logoText: "Harcourts" },
  { name: "Century 21", logoText: "CENTURY 21" },
  { name: "McGrath", logoText: "McGrath" },
  { name: "Raine & Horne", logoText: "Raine&Horne" },
  { name: "First National", logoText: "first national" },
];

const PRICING_DATA = [
  {
    property: "1 Bedroom / 1 Bathroom Unit",
    durationApprox: "4.0 – 5.5 hrs",
    oneOff: "$329",
    recurring: "$299",
    popular: false,
  },
  {
    property: "2 Bedroom / 1-2 Bathroom Unit",
    durationApprox: "5.5 – 7.0 hrs",
    oneOff: "$419",
    recurring: "$389",
    popular: true,
  },
  {
    property: "3 Bedroom / 2 Bathroom House",
    durationApprox: "7.0 – 9.0 hrs",
    oneOff: "$519",
    recurring: "$489",
    popular: false,
  },
  {
    property: "4 Bedroom / 2+ Bathroom House",
    durationApprox: "9.0 – 11.0 hrs",
    oneOff: "$639",
    recurring: "$599",
    popular: false,
  },
  {
    property: "5+ Bedroom / Large Home",
    durationApprox: "11.0+ hrs",
    oneOff: "$759",
    recurring: "$719",
    popular: false,
  },
];

const CHECKLIST_SECTIONS = [
  {
    title: "Kitchen Cleaning",
    icon: <Flame className="w-5 h-5 text-[#2196f3]" />,
    items: [
      "Oven interior, wire racks, trays, glass door & grill degreased",
      "Rangehood filters, exhaust fan & stovetop scrubbed clean",
      "Inside & outside of all cupboards, drawers & pantry shelves",
      "Splashback, sink & tapware descaled & mirror-polished",
      "Dishwasher filter, rubber door seals & exterior cleaned",
      "Microwave inside, turntable & outside wiped",
      "Benchtops sanitised and edge grime cleared",
    ],
  },
  {
    title: "Bathroom & Laundry",
    icon: <Bath className="w-5 h-5 text-[#2196f3]" />,
    items: [
      "Shower glass screens descaled of soap scum & mineral buildup",
      "Wall tiles, floor tiles & grout scrubbed and sanitized",
      "Toilets disinfected inside bowl, outside, behind & cistern",
      "Basins, vanity units, mirrors & drawers cleaned inside/out",
      "Laundry trough, taps & washing machine cavity wiped",
      "Exhaust fan grilles removed and washed",
      "Drains cleared of surface buildup & hair",
    ],
  },
  {
    title: "Living Areas & Bedrooms",
    icon: <Home className="w-5 h-5 text-[#2196f3]" />,
    items: [
      "Window tracks, sills, frames & interior glass polished",
      "Built-in wardrobe tracks, shelves, drawers & mirrors cleaned",
      "Skirting boards, architraves & interior doors wiped down",
      "Ceiling fan blades & accessible light fittings dusted",
      "Light switches, power points & door handles sanitised",
      "Full edge-to-edge vacuuming & disinfectant mopping",
      "Cobwebs removed from all room cornices & corners",
    ],
  },
  {
    title: "Walls, Windows & Details",
    icon: <Layers className="w-5 h-5 text-[#2196f3]" />,
    items: [
      "Spot cleaning fingerprints and light scuffs from interior walls",
      "Internal windows & sliding door tracks completely cleared",
      "Air conditioning exterior & accessible filter dust removed",
      "Door frames, handles, locks & latches wiped",
      "Exhaust fans & air vents dusted",
      "Balcony / patio floor swept and cleared",
    ],
  },
];

const FAQS = [
  {
    q: "How does the 100% Bond Back Guarantee work?",
    a: "Our bond clean strictly follows the standard Australian Residential Tenancies exit condition report checklist. If your real estate agent or property manager flags any cleaning items within 72 hours of completion, our team will return to the property and re-clean the flagged items completely FREE of charge until approved.",
  },
  {
    q: "Do you provide an itemised tax invoice for my property manager?",
    a: "Yes, absolutely! Immediately upon job completion, you will receive a comprehensive digital tax invoice and a signed exit cleaning checklist certificate that you can forward straight to your real estate agent.",
  },
  {
    q: "Does the property need to have electricity and hot water connected?",
    a: "Yes. For our team to operate high-powered vacuums, steam cleaners, and achieve hot-water degreasing, active electricity and running water are required at the property on the day of the clean.",
  },
  {
    q: "Should the property be completely empty of furniture?",
    a: "For an unfurnished bond clean, all furniture and personal items must be removed prior to the clean so our cleaners have unobstructed access to all corners, cupboards, wardrobes, and skirting boards. For furnished rentals, please let us know in advance.",
  },
  {
    q: "Can I combine Carpet Steam Cleaning with my Bond Clean?",
    a: "Yes! We provide professional hot-water extraction carpet steam cleaning as an add-on or package bundle, complete with an official steam cleaning receipt that satisfies tenancy pet and end-of-lease carpet requirements.",
  },
  {
    q: "How far in advance should I book my End of Lease Clean?",
    a: "We recommend booking 3 to 7 days prior to your lease handover date to secure your preferred time slot. However, we also cater to urgent same-day and next-day bookings across all major Australian metro areas.",
  },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BondPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Multi-Step Quote Form State: 1 = Form Inputs, 2 = Date Picker, 3 = Thank You
  const [formStep, setFormStep] = useState<1 | 2 | 3>(1);

  // Step 1 Fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [formError, setFormError] = useState("");

  // Step 2 Calendar State
  const [currentCalendarDate, setCurrentCalendarDate] = useState(() => new Date(2026, 8, 4)); // Sept 2026
  const [selectedDates, setSelectedDates] = useState<string[]>(["2026-09-24"]); // Default Thu, 24 Sept as in ref screenshot
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calendar calculations
  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();

  // Days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // First day of month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayIndex = new Date(year, month, 1).getDay();
  // Adjust so Monday is column 0, Sunday is column 6
  const startOffset = (firstDayIndex + 6) % 7;

  const handlePrevMonth = () => {
    setCurrentCalendarDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentCalendarDate(new Date(year, month + 1, 1));
  };

  const toggleDate = (dayNum: number) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
    setSelectedDates((prev) => {
      if (prev.includes(formattedDate)) {
        return prev.filter((d) => d !== formattedDate);
      } else {
        return [...prev, formattedDate];
      }
    });
  };

  const removeSelectedDate = (dateStr: string) => {
    setSelectedDates((prev) => prev.filter((d) => d !== dateStr));
  };

  const formatPillDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    const dayName = DAY_NAMES[dateObj.getDay()];
    const monthShort = MONTH_NAMES[m - 1].slice(0, 4);
    return `${dayName}, ${d} ${monthShort}`;
  };

  // Step 1 Validation & Proceed to Step 2
  const handleProceedToDates = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !propertyAddress.trim()) {
      setFormError("Please fill in all required fields marked with *");
      return;
    }
    setFormError("");
    setFormStep(2);
  };

  // Step 2 Submission to Thank You Screen
  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(3);
    }, 600);
  };

  const handleResetForm = () => {
    setFormStep(1);
    setFullName("");
    setEmail("");
    setPhone("");
    setPropertyAddress("");
    setAdditionalInfo("");
    setSelectedDates(["2026-09-24"]);
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#08295b] pt-20 sm:pt-24">
      {/* Top Banner */}
      <div className="w-full bg-[#0d47a1] text-white text-xs py-2 px-4 text-center font-medium">
        <span>🎉 100% Bond Back Guarantee · Real Estate Approved · 72-Hour Free Re-Clean</span>
        <span className="mx-2 opacity-40">|</span>
        <a href="tel:+61460849843" className="underline font-bold hover:text-[#2196f3]">
          Call / SMS +61 460 849 843
        </a>
      </div>

      {/* Hero Section with Integrated 2-Step Quote Form */}
      <section className="relative w-full py-10 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Guarantee & Checklist Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1 rounded-full border border-[#d0e4f7]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
                100% Bond Back Guarantee
              </span>
              <span className="inline-block text-[11px] font-bold text-[#0d47a1] bg-[#e3f2fd] px-3 py-1 rounded-full border border-[#d0e4f7]">
                Real Estate Approved
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#08295b] tracking-tight leading-[1.1]">
                Professional End Of Lease Cleaning
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#0d47a1]">
                Inspection-Ready & 72-Hour Free Recleaning Guarantee
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#08295b]/75 max-w-xl font-normal leading-relaxed">
              Moving out? Don&apos;t risk losing your bond money. Cleaning Superboss vacate cleaning specialists adhere to strict Australian real estate exit inspection checklists with our unconditional 72-hour free reclean policy.
            </p>

            {/* Checklist Points with Brand Blue Checks */}
            <div className="space-y-2.5 pt-1">
              {[
                "Real estate approved 100% bond back exit checklist",
                "72-Hour free re-clean guarantee if anything is flagged",
                "Oven, rangehood, window tracks & deep limescale removal included",
                "100% police checked, vetted & $10M public liability insured",
                "Official digital tax invoice & receipt for your property manager",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#08295b]/90">
                  <div className="w-5 h-5 rounded-full bg-[#e3f2fd] border border-[#d0e4f7] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0d47a1] stroke-[3]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs - Side-by-side & Compact on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3 pt-2">
              <a
                href="#checklist"
                className="px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#0d47a1] hover:bg-[#2196f3] text-white text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wider shadow-md sm:shadow-lg shadow-[#0d47a1]/25 transition-all active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 text-center"
              >
                <span>View Checklist</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </a>
              <a
                href="tel:+61460849843"
                className="px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white border border-[#d0e4f7] text-[#08295b] hover:bg-[#e3f2fd] text-[11px] sm:text-xs md:text-sm font-bold tracking-wide transition-all shadow-xs flex items-center justify-center gap-1.5 sm:gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0d47a1] shrink-0" />
                <span className="truncate">Call +61 460 849 843</span>
              </a>
            </div>

            {/* Micro rating strip */}
            <div className="pt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#08295b]/70 border-t border-[#d0e4f7]">
              <div className="flex items-center gap-1.5 font-semibold">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>4.9 / 5.0 (1,200+ Reviews)</span>
              </div>
              <span className="text-[#d0e4f7] font-bold select-none">•</span>
              <div className="flex items-center gap-1 font-bold text-[#0d47a1]">
                <Check className="w-3.5 h-3.5 text-[#2196f3] stroke-[3]" />
                <span>100% Bond Return Rate</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2-Step Quote Form Card */}
          <div id="quote-form" className="lg:col-span-5 scroll-mt-24">
            <div className="relative rounded-3xl bg-white border border-[#d0e4f7] shadow-xl p-6 sm:p-7 overflow-hidden transition-all">
              
              {/* ================= STEP 1: REQUEST A QUOTE ================= */}
              {formStep === 1 && (
                <form onSubmit={handleProceedToDates} className="space-y-4">
                  <div className="text-center pb-2 space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#08295b] tracking-tight">
                      Request a Quote
                    </h3>
                  </div>

                  {formError && (
                    <div className="p-2.5 rounded-xl bg-[#e3f2fd] border border-[#d0e4f7] text-[#0d47a1] text-xs font-semibold text-center">
                      {formError}
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-[#08295b]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam O'Connor"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/35 shadow-xs"
                    />
                  </div>

                  {/* Email & Phone side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#08295b]">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="liam@example.com.au"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/35 shadow-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#08295b]">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+61 460 849 843"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/35 shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Property Address */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-[#08295b]">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 142 Collins St, Melbourne VIC 3000"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/35 shadow-xs"
                    />
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-[#08295b]">
                      Additional Information
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please include any specific requirements or areas of focus for your cleaning service"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/40 resize-none shadow-xs"
                    />
                  </div>

                  {/* Submit / Next Step Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                    >
                      <span>SELECT DATE (NEXT STEP)</span>
                    </button>
                  </div>
                </form>
              )}

              {/* ================= STEP 2: SELECT PREFERRED DATES ================= */}
              {formStep === 2 && (
                <div className="space-y-4">
                  <div className="text-center space-y-0.5">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#08295b] tracking-tight">
                      Select Preferred Dates
                    </h3>
                    <p className="text-xs italic text-[#08295b]/60">
                      You can choose multiple dates
                    </p>
                  </div>

                  {/* Custom Clean Calendar Card */}
                  <div className="rounded-2xl border border-[#d0e4f7] bg-[#e3f2fd]/50 p-4 space-y-3">
                    
                    {/* Calendar Month & Navigation */}
                    <div className="flex items-center justify-between px-1">
                      <span className="font-bold text-sm text-[#08295b]">
                        {MONTH_NAMES[month]} {year}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="w-7 h-7 rounded-full bg-white border border-[#d0e4f7] flex items-center justify-center text-[#08295b] hover:bg-[#e3f2fd] transition-all cursor-pointer shadow-xs"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="w-7 h-7 rounded-full bg-white border border-[#d0e4f7] flex items-center justify-center text-[#08295b] hover:bg-[#e3f2fd] transition-all cursor-pointer shadow-xs"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Weekday Header (Mon - Sun) */}
                    <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-[#08295b]/60">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                        <div key={i} className="py-1">
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Day Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {/* Blank offset days */}
                      {Array.from({ length: startOffset }).map((_, i) => (
                        <div key={`blank-${i}`} className="h-9 w-full" />
                      ))}

                      {/* Month Days */}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const dayNum = i + 1;
                        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
                        const isSelected = selectedDates.includes(dateStr);
                        const isToday = dayNum === 4 && month === 8 && year === 2026; // Highlight today (Sept 4)

                        return (
                          <button
                            key={dayNum}
                            type="button"
                            onClick={() => toggleDate(dayNum)}
                            className={`h-9 w-full rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                              isSelected
                                ? "bg-[#0d47a1] text-white shadow-sm ring-2 ring-[#2196f3]/40"
                                : isToday
                                ? "bg-white text-[#0d47a1] border-2 border-[#2196f3] shadow-xs"
                                : "bg-white text-[#08295b] hover:bg-[#e3f2fd] border border-transparent shadow-xs"
                            }`}
                          >
                            {dayNum}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Dates Display Box */}
                  <div className="rounded-xl border border-[#d0e4f7] bg-white p-3 space-y-2 text-left">
                    <span className="text-xs font-bold text-[#08295b] block">
                      Selected Dates:
                    </span>
                    <div className="flex flex-wrap gap-1.5 min-h-[30px] items-center">
                      {selectedDates.length === 0 ? (
                        <span className="text-xs text-[#08295b]/40 italic">
                          Click any date in the calendar above to select
                        </span>
                      ) : (
                        selectedDates.map((dStr) => (
                          <span
                            key={dStr}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d47a1] text-white font-bold text-xs shadow-xs"
                          >
                            <span>{formatPillDate(dStr)}</span>
                            <button
                              type="button"
                              onClick={() => removeSelectedDate(dStr)}
                              className="hover:text-white/70 transition-colors cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5 stroke-[2.5]" />
                            </button>
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleFinalSubmit}
                      className="w-full py-3.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">SUBMITTING QUOTE REQUEST...</span>
                      ) : (
                        <span>SUBMIT QUOTE REQUEST</span>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormStep(1)}
                      className="w-full py-1.5 text-xs text-[#08295b]/60 hover:text-[#0d47a1] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to details</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ================= STEP 3: THANK YOU SCREEN ================= */}
              {formStep === 3 && (
                <div className="py-6 text-center space-y-4">
                  {/* Brand Blue Check Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#0d47a1] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#0d47a1]/25">
                    <Check className="w-9 h-9 stroke-[3]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#08295b] tracking-tight">
                      Thank You!
                    </h3>
                    <h4 className="text-base sm:text-lg font-bold text-[#0d47a1]">
                      Want Your Quote Even Faster?
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[#08295b]/75 max-w-sm mx-auto leading-relaxed">
                    While we prepare your customized quote, you can get{" "}
                    <strong className="text-[#0d47a1] font-bold">instant pricing and book online right now!</strong> Our online system takes just 20 seconds and provides accurate quotes for immediate booking.
                  </p>

                  <div className="p-3 bg-[#f8fbfe] rounded-2xl border border-[#d0e4f7] text-left text-xs space-y-1">
                    <div className="font-bold text-[#08295b]">Property: {propertyAddress}</div>
                    <div className="text-[#08295b]/70">
                      Preferred Date(s):{" "}
                      <span className="font-semibold text-[#0d47a1]">
                        {selectedDates.map((d) => formatPillDate(d)).join(", ") || "Flexible"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <Link
                      href="/book"
                      className="w-full py-3.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <span>Book Online Now & Save 10%</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="tel:+61460849843"
                      className="w-full py-3 rounded-xl bg-white border border-[#d0e4f7] hover:bg-[#e3f2fd] text-[#08295b] font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0d47a1]" />
                      <span>Call +61 460 849 843</span>
                    </a>
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-[11px] text-[#08295b]/50 hover:text-[#0d47a1] underline"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Real Estate Agencies Partner Strip */}
      <section className="py-8 sm:py-10 bg-white border-b border-[#d0e4f7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center space-y-1 mb-6">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#08295b]">
              Trusted by 100+ Real Estate Agencies Across Australia
            </h4>
            <p className="text-xs text-[#08295b]/60 max-w-xl mx-auto">
              Our vacate checklists are tailored to satisfy property managers from Australia&apos;s leading agencies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
            {REAL_ESTATE_AGENCIES.map((agency, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-[#f8fbfe] border border-[#d0e4f7] flex items-center justify-center text-center group hover:border-[#2196f3] hover:shadow-sm transition-all"
              >
                <span className="font-serif font-black text-xs sm:text-sm text-[#08295b]/70 group-hover:text-[#0d47a1] tracking-tight transition-colors">
                  {agency.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cleaning Superboss Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7] bg-[#f8fbfe]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Action Photo & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#d0e4f7] aspect-[4/5] bg-white group">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
                alt="Professional Bond Cleaner scrubbing oven"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08295b]/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#2196f3] px-2.5 py-0.5 rounded-full">
                    Vacate Specialists
                  </span>
                  <h3 className="text-lg font-bold">Rigorous Real Estate Standards</h3>
                  <p className="text-xs text-white/80">Every nook, cranny, and appliance cleaned to perfection.</p>
                </div>
              </div>
            </div>

            {/* Floating Metric Card 1 */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl border border-[#d0e4f7] shadow-xl flex items-center gap-3 animate-bounce-short">
              <div className="w-10 h-10 rounded-xl bg-[#e3f2fd] flex items-center justify-center text-[#0d47a1] font-bold shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#2196f3]" />
              </div>
              <div>
                <div className="text-xs font-black text-[#08295b]">100% Bond Return</div>
                <div className="text-[10px] text-[#08295b]/60">72-Hour Free Reclean</div>
              </div>
            </div>

            {/* Floating Metric Card 2 */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl border border-[#d0e4f7] shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e3f2fd] flex items-center justify-center text-[#0d47a1] font-bold shrink-0">
                <Award className="w-5 h-5 text-[#2196f3]" />
              </div>
              <div>
                <div className="text-xs font-black text-[#08295b]">12,500+ Homes Handed Over</div>
                <div className="text-[10px] text-[#08295b]/60">Across All Australian Metros</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Value Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1 rounded-full border border-[#d0e4f7]">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b]">
                Why Choose Cleaning Superboss for End Of Lease Cleaning?
              </h2>
              <p className="text-xs sm:text-sm text-[#08295b]/70">
                We take the stress out of moving by delivering property manager-ready cleans backed by our unconditional guarantee.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "100% Bond Back Guarantee",
                  desc: "We clean strictly to property manager standards. If your agent flags any item on the exit condition report within 72 hours, we return and reclean the flagged areas free of charge.",
                },
                {
                  num: "2",
                  title: "Real Estate Approved Checklist",
                  desc: "Comprehensive exit condition cleaning covering every inch - oven interior, rangehood filters, window tracks, deep limescale, door frames, and skirting boards.",
                },
                {
                  num: "3",
                  title: "Fully Insured & Police Checked",
                  desc: "Every cleaner is thoroughly vetted, police-cleared, and insured with $10M public liability coverage for complete peace of mind.",
                },
                {
                  num: "4",
                  title: "Same-Day & Flexible Scheduling",
                  desc: "Available 7 days a week, including weekends and public holidays. Short-notice emergency moves accommodated with transparent fixed upfront pricing.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#d0e4f7] shadow-sm flex items-start gap-4 hover:border-[#2196f3] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0d47a1] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-md shadow-[#0d47a1]/20">
                    {item.num}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#08295b]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#08295b]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#0d47a1]/25 transition-all"
              >
                <span>Book Your Vacate Clean Online</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* What Does an End Of Lease Clean Include? Section */}
      <section id="checklist" className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 bg-white border-b border-[#d0e4f7]">
        <div className="max-w-[1360px] mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1 rounded-full border border-[#d0e4f7]">
              Room-By-Room Standard
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b]">
              What Does an End Of Lease Clean Include?
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70">
              Our comprehensive vacate cleaning checklist covers every detail required by property managers across Australia.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHECKLIST_SECTIONS.map((section, idx) => (
              <div
                key={idx}
                className="bg-[#f8fbfe] rounded-3xl p-6 border border-[#d0e4f7] shadow-md flex flex-col justify-between space-y-4 hover:border-[#2196f3] transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-[#d0e4f7]">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#d0e4f7] flex items-center justify-center shrink-0">
                      {section.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#08295b]">{section.title}</h3>
                  </div>

                  <ul className="space-y-2.5">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 text-xs text-[#08295b]/80">
                        <Check className="w-3.5 h-3.5 text-[#2196f3] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#d0e4f7]/70 text-[11px] font-bold text-[#0d47a1] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2196f3]" />
                  <span>100% Inspection-Ready</span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Comparison 2 Banners (What We Always Include vs Optional Add-Ons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Box 1: What We Always Include */}
            <div className="bg-[#e3f2fd]/60 border border-[#d0e4f7] rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0d47a1] text-white flex items-center justify-center font-black">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#08295b]">
                    What We Always Include in Every Bond Clean
                  </h3>
                  <p className="text-xs text-[#08295b]/70">Standard in all our fixed-price vacate packages</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#08295b]/90">
                {[
                  "Full oven, grill & racks degreased",
                  "Rangehood filter & exhaust clean",
                  "Inside & out of all cupboards & drawers",
                  "Internal window tracks, sills & glass",
                  "Deep shower glass soap scum removal",
                  "Skirting boards, switches & doors wiped",
                  "Spot cleaning light wall scuffs",
                  "72-Hour free re-clean guarantee",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2196f3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 2: Optional Add-on Services */}
            <div className="bg-[#e3f2fd]/60 border border-[#d0e4f7] rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0d47a1] text-white flex items-center justify-center font-black">
                  <Plus className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#08295b]">
                    Optional Add-On Services Available
                  </h3>
                  <p className="text-xs text-[#08295b]/70">Add during booking for a complete move-out bundle</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#08295b]/90">
                {[
                  "Carpet steam cleaning (Hot water extraction)",
                  "External window washing & fly screens",
                  "Full wall washing (heavy nicotine/marks)",
                  "Balcony & patio pressure wash",
                  "Blinds & curtain deep treatment",
                  "Garage sweep & oil stain treatment",
                  "Furnished rental turnover staging",
                  "Urgent same-day emergency clean",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Plus className="w-3.5 h-3.5 text-[#2196f3] shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Table Component */}
      <section className="w-full py-12 sm:py-16 bg-[#f8fbfe] border-b border-[#d0e4f7]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3 py-1 rounded-full border border-[#d0e4f7]">
              Upfront Rates
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b]">
              Bond Cleaning Pricing
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70">
              Upfront fixed pricing based on property size. All commercial-grade degreasers, chemicals, and equipment included.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#d0e4f7] bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#08295b] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-bold">Property Size</th>
                    <th className="py-4 px-6 font-bold">Approx Time</th>
                    <th className="py-4 px-6 font-bold">Once-Off Bond Clean</th>
                    <th className="py-4 px-6 font-bold text-[#2196f3]">
                      With Carpet Steam Clean
                    </th>
                    <th className="py-4 px-6 font-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d0e4f7] text-xs sm:text-sm">
                  {PRICING_DATA.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`transition-colors hover:bg-[#e3f2fd]/40 ${
                        row.popular ? "bg-[#2196f3]/5 font-semibold" : ""
                      }`}
                    >
                      <td className="py-4 px-6 text-[#08295b] font-bold flex items-center gap-2">
                        {row.property}
                        {row.popular && (
                          <span className="text-[10px] bg-[#0d47a1] text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
                            Most Popular
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-[#08295b]/70 font-mono">
                        {row.durationApprox}
                      </td>
                      <td className="py-4 px-6 text-[#08295b] font-bold text-base">
                        {row.oneOff}
                      </td>
                      <td className="py-4 px-6 text-[#0d47a1] font-extrabold text-base">
                        ${parseInt(row.oneOff.replace("$", "")) + 99}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <a
                          href="/book"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hourly Option Banner */}
            <div className="p-4 sm:p-6 bg-[#e3f2fd]/60 border-t border-[#d0e4f7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-[#08295b]">
                <div className="w-2 h-2 rounded-full bg-[#2196f3] shrink-0" />
                <span>
                  Need custom vacate tasks or partial cleaning? Hourly rate is <strong>$65 / hour (min 4 hours)</strong>.
                </span>
              </div>
              <a
                href="tel:+61460849843"
                className="text-[#0d47a1] font-bold hover:underline shrink-0"
              >
                Call +61 460 849 843 for Custom Bookings →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 bg-white border-b border-[#d0e4f7]">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3 py-1 rounded-full border border-[#d0e4f7]">
              Service Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b]">
              Compare What&apos;s Included in Bond Cleaning
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70">
              See how Bond Cleaning provides the exhaustive depth required to pass exit condition reports compared to regular and deep cleans.
            </p>
          </div>

          <ServiceComparisonTable />
        </div>
      </section>

      {/* Testimonial Quote Spotlight */}
      <section className="py-12 sm:py-16 bg-[#08295b] text-white px-4 sm:px-6 border-y border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold italic leading-relaxed">
            &ldquo;Our property manager was notoriously picky, but Cleaning Superboss passed the exit condition report on the very first inspection. Full bond refunded within 48 hours. Could not recommend them more!&rdquo;
          </blockquote>
          <div className="pt-2">
            <div className="font-bold text-sm sm:text-base">Liam O&apos;Connor</div>
            <div className="text-xs text-white/60">Tenant · Melbourne VIC</div>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7] bg-[#f8fbfe]">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3 py-1 rounded-full border border-[#d0e4f7]">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08295b]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70">
              Everything you need to know about your bond clean and guarantee.
            </p>
          </div>

          <div className="divide-y divide-[#d0e4f7] border-y border-[#d0e4f7] bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-[#08295b] hover:text-[#0d47a1]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-[#2196f3] transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <p className="mt-3 text-xs sm:text-sm text-[#08295b]/70 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Cleaning Superboss & Operating Hours Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 bg-white border-b border-[#d0e4f7]">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1 rounded-full border border-[#d0e4f7]">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08295b]">
              Contact Cleaning Superboss
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70">
              Have questions about your bond clean or need a fast custom quote? Our Aussie support team is standing by 7 days a week.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-[#f8fbfe] rounded-3xl p-6 sm:p-8 border border-[#d0e4f7] shadow-xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-[#d0e4f7]">
              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-2xl border border-[#d0e4f7]">
                <div className="w-10 h-10 rounded-xl bg-[#e3f2fd] flex items-center justify-center text-[#0d47a1] shrink-0">
                  <Phone className="w-5 h-5 text-[#2196f3]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#08295b]/60">Call / SMS</div>
                  <a href="tel:+61460849843" className="text-xs sm:text-sm font-bold text-[#0d47a1] hover:underline">
                    +61 460 849 843
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-2xl border border-[#d0e4f7]">
                <div className="w-10 h-10 rounded-xl bg-[#e3f2fd] flex items-center justify-center text-[#0d47a1] shrink-0">
                  <Mail className="w-5 h-5 text-[#2196f3]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#08295b]/60">Email Support</div>
                  <a href="mailto:support@cleaningsuperboss.com.au" className="text-xs sm:text-sm font-bold text-[#0d47a1] hover:underline">
                    support@cleaningsuperboss.com.au
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#08295b]">
                Operating Hours (7 Days a Week)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#d0e4f7]">
                  <div className="font-bold text-[#08295b]">Monday – Friday</div>
                  <div className="text-[#08295b]/70 font-mono text-[11px]">7:00 AM – 8:00 PM</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d0e4f7]">
                  <div className="font-bold text-[#08295b]">Saturday</div>
                  <div className="text-[#08295b]/70 font-mono text-[11px]">7:00 AM – 7:00 PM</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d0e4f7]">
                  <div className="font-bold text-[#08295b]">Sunday</div>
                  <div className="text-[#08295b]/70 font-mono text-[11px]">8:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Nationwide Coverage */}
            <div className="pt-2 text-center text-xs text-[#08295b]/70">
              📍 <strong>Nationwide Coverage:</strong> Sydney · Melbourne · Brisbane · Perth · Adelaide · Gold Coast · Canberra · Newcastle · Sunshine Coast · Geelong · Hobart
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0d47a1] text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-white uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
            100% Bond Back Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
            Need an Urgent or Same-Day Bond Clean?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto">
            Book online in 60 seconds or speak directly to our bond cleaning team. Inspection-ready results guaranteed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/book"
              className="px-8 py-4 rounded-full bg-white hover:bg-[#e3f2fd] text-[#0d47a1] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg transition-all"
            >
              Book Now Online
            </a>
            <a
              href="tel:+61460849843"
              className="px-7 py-4 rounded-full bg-transparent border border-white/40 text-white hover:bg-white/10 text-xs sm:text-sm font-bold tracking-wide transition-all"
            >
              Call +61 460 849 843
            </a>
          </div>
        </div>
      </section>

      {/* Shared Global Footer (with padding for mobile sticky bar) */}
      <div className="pb-16 md:pb-0">
        <Footer />
      </div>
    </div>
  );
}
