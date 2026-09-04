"use client";

import React, { useState } from "react";
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
  MapPin,
  Calendar,
  Send,
} from "lucide-react";
import Footer from "@/components/Footer";

const PERTH_REAL_ESTATE_AGENCIES = [
  { name: "Ray White Perth", logoText: "Ray White." },
  { name: "LJ Hooker WA", logoText: "LJ Hooker" },
  { name: "Belle Property Perth", logoText: "ACTON | belle" },
  { name: "Realmark WA", logoText: "REALMARK" },
  { name: "Harcourts WA", logoText: "Harcourts" },
  { name: "Peard Real Estate", logoText: "PEARD" },
  { name: "Abel Property", logoText: "abel PROPERTY" },
  { name: "First National WA", logoText: "first national" },
];

const PERTH_SUBURB_REGIONS = [
  {
    region: "Perth CBD & Inner City",
    suburbs: [
      "Perth CBD",
      "East Perth",
      "West Perth",
      "Northbridge",
      "Subiaco",
      "Leederville",
      "Highgate",
      "Mount Lawley",
      "South Perth",
      "Victoria Park",
    ],
  },
  {
    region: "Northern Suburbs",
    suburbs: [
      "Joondalup",
      "Scarborough",
      "Innaloo",
      "Karrinyup",
      "Hillarys",
      "Clarkson",
      "Duncraig",
      "Balcatta",
      "Morley",
      "Wangara",
    ],
  },
  {
    region: "Southern Suburbs & Fremantle",
    suburbs: [
      "Fremantle",
      "Cockburn Central",
      "Cannington",
      "Melville",
      "Applecross",
      "Murdoch",
      "Rockingham",
      "Baldivis",
      "Mandurah",
      "Booragoon",
    ],
  },
  {
    region: "Eastern Suburbs & Hills",
    suburbs: [
      "Midland",
      "Bayswater",
      "Bassendean",
      "Guildford",
      "Belmont",
      "Ellenbrook",
      "Kalamunda",
      "Forrestfield",
      "Armadale",
      "Maddington",
    ],
  },
];

const CHECKLIST_SECTIONS = [
  {
    title: "Kitchen Deep Degreasing",
    icon: <Flame className="w-5 h-5 text-[#2196f3]" />,
    items: [
      "Oven interior, wire racks, trays, glass door & grill completely degreased",
      "Rangehood filters soaked, degreased & exhaust canopy wiped",
      "Stovetop burners, control knobs & splashbacks mirror-polished",
      "Inside, outside & top of all kitchen cupboards, drawers & pantry shelves",
      "Sink, tapware & drain descaled with limescale removal",
      "Dishwasher rubber seals, filter & front panel cleaned",
      "Benchtops sanitised and edge residue cleared",
    ],
  },
  {
    title: "Bathrooms, Ensuites & Laundry",
    icon: <Bath className="w-5 h-5 text-[#2196f3]" />,
    items: [
      "Shower glass screens descaled of heavy soap scum & water stains",
      "Wall tiles, floor tiles & grouting scrubbed and disinfected",
      "Toilet bowl, cistern, seat & behind-toilet floor sanitized",
      "Basins, vanity units, mirrors & drawers cleaned inside/out",
      "Bathtub scrubbed, polished & tapware descaled",
      "Laundry trough, washing machine recess & taps cleared",
      "Exhaust fan covers removed, washed & reinstalled",
    ],
  },
  {
    title: "Bedrooms & Living Areas",
    icon: <Home className="w-5 h-5 text-[#2196f3]" />,
    items: [
      "Built-in wardrobe tracks, mirrored sliding doors & internal shelving",
      "Window tracks, sills, frames & interior window panes cleaned",
      "Skirting boards, architraves & interior doors wiped free of dust",
      "Ceiling fans dusted & accessible light fixtures wiped",
      "Light switches, power points & door handles disinfected",
      "Full edge-to-edge vacuuming along baseboards & hard floor mopping",
      "Cobwebs removed from all room cornices and ceiling corners",
    ],
  },
  {
    title: "Walls, Fixtures & Details",
    icon: <Layers className="w-5 h-5 text-[#2196f3]" />,
    items: [
      "Spot cleaning fingerprints and scuff marks on interior walls",
      "Sliding patio door tracks cleared of Perth sand and grit",
      "Air conditioning exterior units & accessible filter screens dusted",
      "Balcony / alfresco tiled floors swept and mopped",
      "Internal doors, handles, latches & garage entrance threshold wiped",
      "Exhaust vents and air return grilles wiped clean",
    ],
  },
];

const PERTH_FAQS = [
  {
    q: "How does the 100% Bond Back Guarantee work in Western Australia?",
    a: "Our Perth vacate cleans strictly adhere to the standard REIWA and WA Department of Mines, Industry Regulation and Safety (Consumer Protection) exit condition checklists. If your Perth property manager or landlord flags any cleaning-related items within 72 hours of inspection, our team will return to the property and reclean those specific items completely free of charge.",
  },
  {
    q: "Do you provide an itemised tax invoice for my Perth real estate agent?",
    a: "Yes, 100%. Immediately upon completion of your clean, we issue a formal digital tax invoice and a signed end-of-lease vacate checklist certificate. You can send this receipt directly to your property manager to prove professional vacate cleaning compliance.",
  },
  {
    q: "Do you cover all suburbs in Greater Perth (North and South of the River)?",
    a: "Yes! We service the entire Perth metropolitan area, including Perth CBD, Joondalup, Scarborough, Fremantle, Victoria Park, Cannington, Midland, Armadale, Rockingham, and surrounding Western Australian suburbs.",
  },
  {
    q: "Can I add Carpet Steam Cleaning with a certificate for pet bond requirements?",
    a: "Absolutely. We offer professional hot-water extraction carpet steam cleaning that meets all Western Australian pet bond and end-of-lease tenancy requirements, complete with a certified steam cleaning receipt for your real estate agent.",
  },
  {
    q: "Does the rental property need electricity and hot water connected?",
    a: "Yes. To achieve a spotless bond clean that meets REIWA standards, our team requires active electricity and hot water at the property to operate commercial vacuum systems and hot water degreasers.",
  },
  {
    q: "How quickly can I get a free quote for my Perth bond clean?",
    a: "Once you submit our quote form, our local Perth team reviews your property details and provides a transparent quote within 15 to 30 minutes. If you need an urgent quote right away, you can also call us directly on +61 460 849 843.",
  },
];

const POPULAR_PERTH_SUBURBS = [
  "Perth CBD",
  "Subiaco",
  "Scarborough",
  "Joondalup",
  "Fremantle",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BondPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Multi-Step Quote Form State: 1 = Property & Contact, 2 = Date & Add-ons, 3 = Confirmation
  const [formStep, setFormStep] = useState<1 | 2 | 3>(1);

  // Step 1 Fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [propertyType, setPropertyType] = useState("House");
  const [bedrooms, setBedrooms] = useState("3 Bedrooms");
  const [bathrooms, setBathrooms] = useState("2 Bathrooms");
  const [formError, setFormError] = useState("");

  // Step 2 Fields & Calendar State
  const [addCarpetSteam, setAddCarpetSteam] = useState(true);
  const [hasPets, setHasPets] = useState(false);
  const [addWindowCleaning, setAddWindowCleaning] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [currentCalendarDate, setCurrentCalendarDate] = useState(() => new Date(2026, 8, 4));
  const [selectedDate, setSelectedDate] = useState<string>("2026-09-15");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calendar calculations
  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const startOffset = (firstDayIndex + 6) % 7;

  const handlePrevMonth = () => {
    setCurrentCalendarDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentCalendarDate(new Date(year, month + 1, 1));
  };

  const handleSelectDate = (dayNum: number) => {
    const formatted = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      dayNum
    ).padStart(2, "0")}`;
    setSelectedDate(formatted);
  };

  const formatPillDate = (dateStr: string) => {
    if (!dateStr) return "Not selected";
    const [y, m, d] = dateStr.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    const dayName = DAY_NAMES[dateObj.getDay()];
    const monthShort = MONTH_NAMES[m - 1].slice(0, 3);
    return `${dayName}, ${d} ${monthShort} ${y}`;
  };

  // Step 1 Validation & Proceed to Step 2
  const handleProceedToStepTwo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !suburb.trim()) {
      setFormError("Please fill in your name, phone number, and Perth suburb.");
      return;
    }
    setFormError("");
    setFormStep(2);
  };

  // Step 2 Submission to Thank You Screen
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(3);
    }, 600);
  };

  const handleResetForm = () => {
    setFormStep(1);
    setFullName("");
    setPhone("");
    setEmail("");
    setSuburb("");
    setPropertyType("House");
    setBedrooms("3 Bedrooms");
    setBathrooms("2 Bathrooms");
    setAddCarpetSteam(true);
    setHasPets(false);
    setAddWindowCleaning(false);
    setAdditionalNotes("");
    setSelectedDate("2026-09-15");
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("quote-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#08295b] pt-20 sm:pt-24">
      {/* Top Banner - Perth & WA Specific */}
      <div className="w-full bg-[#0d47a1] text-white text-xs py-2 px-4 text-center font-medium shadow-xs">
        <span>
          🇦🇺 Perth & WA #1 Vacate Cleaning Specialists · REIWA Checklist Approved · 72-Hour Free Re-Clean
        </span>
        <span className="mx-2 opacity-40">|</span>
        <a
          href="tel:+61460849843"
          className="underline font-bold hover:text-[#2196f3] transition-colors"
        >
          Call / SMS: +61 460 849 843
        </a>
      </div>

      {/* Hero Section with Dedicated Quote Enquiry Form */}
      <section className="relative w-full py-10 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Perth Value Proposition & Guarantee */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1 rounded-full border border-[#d0e4f7]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
                100% Bond Back Guarantee
              </span>
              <span className="inline-block text-[11px] font-bold text-[#0d47a1] bg-[#e3f2fd] px-3 py-1 rounded-full border border-[#d0e4f7]">
                Perth & WA Real Estate Approved
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#08295b] tracking-tight leading-[1.1]">
                Perth Bond Cleaning & End Of Lease Cleaning
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#0d47a1]">
                Inspection-Ready & 72-Hour Free Recleaning Guarantee
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#08295b]/75 max-w-xl font-normal leading-relaxed">
              Moving out? Don&apos;t risk losing your bond money. Cleaning Superboss vacate cleaning specialists adhere strictly to REIWA and Western Australian real estate exit inspection checklists with our unconditional 72-hour free reclean policy.
            </p>

            {/* Checklist Points with Brand Blue Checks */}
            <div className="space-y-2.5 pt-1">
              {[
                "Real estate & REIWA approved 100% bond back exit checklist",
                "72-Hour free re-clean guarantee if anything is flagged by your agent",
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

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3 pt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className="px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#0d47a1] hover:bg-[#2196f3] text-white text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wider shadow-md sm:shadow-lg shadow-[#0d47a1]/25 transition-all active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 text-center cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>
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
                <span>4.9 / 5.0 (850+ Perth Reviews)</span>
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
              
              {/* Form Step Indicator */}
              {formStep < 3 && (
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#d0e4f7]/70 text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                        formStep === 1
                          ? "bg-[#0d47a1] text-white"
                          : "bg-[#e3f2fd] text-[#0d47a1]"
                      }`}
                    >
                      1
                    </span>
                    <span
                      className={`font-bold ${
                        formStep === 1 ? "text-[#08295b]" : "text-[#08295b]/60"
                      }`}
                    >
                      Property &amp; Contact
                    </span>
                  </div>
                  <div className="h-0.5 w-8 bg-[#d0e4f7]" />
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                        formStep === 2
                          ? "bg-[#0d47a1] text-white"
                          : "bg-[#e3f2fd] text-[#0d47a1]/60"
                      }`}
                    >
                      2
                    </span>
                    <span
                      className={`font-bold ${
                        formStep === 2 ? "text-[#08295b]" : "text-[#08295b]/60"
                      }`}
                    >
                      Date &amp; Add-ons
                    </span>
                  </div>
                </div>
              )}

              {/* ================= STEP 1: PROPERTY & CONTACT (REQUEST A QUOTE) ================= */}
              {formStep === 1 && (
                <form onSubmit={handleProceedToStepTwo} className="space-y-4">
                  <div className="text-center pb-1 space-y-0.5">
                    <h3 className="text-xl sm:text-2xl font-black text-[#08295b] tracking-tight">
                      Request a Quote
                    </h3>
                    <p className="text-xs text-[#08295b]/70">
                      Perth Bond Cleaning · Fast 15-Min Response
                    </p>
                  </div>

                  {formError && (
                    <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold text-center">
                      {formError}
                    </div>
                  )}

                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#08295b]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Smith"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/35 shadow-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#08295b]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/35 shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-[#08295b]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="liam@example.com.au (for tax quote & invoice)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/35 shadow-xs"
                    />
                  </div>

                  {/* Perth Suburb / Postcode */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-[#08295b]">
                        Perth Suburb / Postcode *
                      </label>
                      <span className="text-[10px] text-[#0d47a1] font-semibold">
                        WA Metro Area
                      </span>
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Subiaco 6008, Joondalup 6027, Fremantle..."
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/20 transition-all placeholder:text-[#08295b]/35 shadow-xs"
                    />
                    {/* Quick Suburb Suggestions */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {POPULAR_PERTH_SUBURBS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSuburb(s)}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#e3f2fd] text-[#0d47a1] hover:bg-[#2196f3] hover:text-white transition-colors cursor-pointer"
                        >
                          +{s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Type */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-[#08295b]">
                      Property Type
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {["House", "Unit / Apt", "Townhouse", "Villa"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setPropertyType(type)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                            propertyType === type
                              ? "bg-[#0d47a1] text-white shadow-xs"
                              : "bg-[#f8fbfe] border border-[#d0e4f7] text-[#08295b] hover:bg-[#e3f2fd]"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bedrooms & Bathrooms */}
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#08295b]">
                        Bedrooms
                      </label>
                      <select
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] cursor-pointer shadow-xs"
                      >
                        <option value="Studio">Studio</option>
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedrooms">2 Bedrooms</option>
                        <option value="3 Bedrooms">3 Bedrooms</option>
                        <option value="4 Bedrooms">4 Bedrooms</option>
                        <option value="5+ Bedrooms">5+ Bedrooms</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#08295b]">
                        Bathrooms
                      </label>
                      <select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3] cursor-pointer shadow-xs"
                      >
                        <option value="1 Bathroom">1 Bathroom</option>
                        <option value="2 Bathrooms">2 Bathrooms</option>
                        <option value="3 Bathrooms">3 Bathrooms</option>
                        <option value="4+ Bathrooms">4+ Bathrooms</option>
                      </select>
                    </div>
                  </div>

                  {/* Next Step CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                    >
                      <span>NEXT: DATE &amp; QUOTE OPTIONS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* ================= STEP 2: DATE & ADD-ONS ================= */}
              {formStep === 2 && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="text-center pb-1 space-y-0.5">
                    <h3 className="text-xl sm:text-2xl font-black text-[#08295b] tracking-tight">
                      Preferred Cleaning Date
                    </h3>
                    <p className="text-xs text-[#08295b]/70">
                      When do you hand keys back to your Perth agent?
                    </p>
                  </div>

                  {/* Calendar Widget */}
                  <div className="rounded-2xl border border-[#d0e4f7] bg-[#e3f2fd]/40 p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between px-1">
                      <span className="font-bold text-xs sm:text-sm text-[#08295b]">
                        {MONTH_NAMES[month]} {year}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="w-6 h-6 rounded-full bg-white border border-[#d0e4f7] flex items-center justify-center text-[#08295b] hover:bg-[#e3f2fd] transition-all cursor-pointer shadow-xs"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="w-6 h-6 rounded-full bg-white border border-[#d0e4f7] flex items-center justify-center text-[#08295b] hover:bg-[#e3f2fd] transition-all cursor-pointer shadow-xs"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-[#08295b]/60">
                      {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d, i) => (
                        <div key={i} className="py-0.5">
                          {d}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center">
                      {Array.from({ length: startOffset }).map((_, i) => (
                        <div key={`blank-${i}`} className="h-7 w-full" />
                      ))}

                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const dayNum = i + 1;
                        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
                          dayNum
                        ).padStart(2, "0")}`;
                        const isSelected = selectedDate === dateStr;

                        return (
                          <button
                            key={dayNum}
                            type="button"
                            onClick={() => handleSelectDate(dayNum)}
                            className={`h-7 w-full rounded-md text-[11px] font-bold transition-all cursor-pointer flex items-center justify-center ${
                              isSelected
                                ? "bg-[#0d47a1] text-white shadow-xs"
                                : "bg-white text-[#08295b] hover:bg-[#e3f2fd] border border-transparent shadow-xs"
                            }`}
                          >
                            {dayNum}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Date Summary */}
                  <div className="p-2.5 rounded-xl bg-[#f8fbfe] border border-[#d0e4f7] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#08295b]/80">Selected Date:</span>
                    <span className="font-bold text-[#0d47a1]">{formatPillDate(selectedDate)}</span>
                  </div>

                  {/* Add-on Options Checkboxes */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-[#08295b] block">
                      Optional Add-Ons (Recommended for Bond Return)
                    </label>
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2.5 p-2 rounded-xl border border-[#d0e4f7] bg-white cursor-pointer hover:bg-[#f8fbfe]">
                        <input
                          type="checkbox"
                          checked={addCarpetSteam}
                          onChange={(e) => setAddCarpetSteam(e.target.checked)}
                          className="w-4 h-4 rounded text-[#0d47a1] focus:ring-[#2196f3]"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-[#08295b]">
                            Carpet Steam Cleaning
                          </span>
                          <span className="text-[#08295b]/60 block text-[11px]">
                            Hot-water extraction + official receipt for agent
                          </span>
                        </div>
                      </label>

                      <label className="flex items-center gap-2.5 p-2 rounded-xl border border-[#d0e4f7] bg-white cursor-pointer hover:bg-[#f8fbfe]">
                        <input
                          type="checkbox"
                          checked={hasPets}
                          onChange={(e) => setHasPets(e.target.checked)}
                          className="w-4 h-4 rounded text-[#0d47a1] focus:ring-[#2196f3]"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-[#08295b]">
                            Pet Bond / Flea Treatment Compliance
                          </span>
                          <span className="text-[#08295b]/60 block text-[11px]">
                            Required for WA tenancy pet agreements
                          </span>
                        </div>
                      </label>

                      <label className="flex items-center gap-2.5 p-2 rounded-xl border border-[#d0e4f7] bg-white cursor-pointer hover:bg-[#f8fbfe]">
                        <input
                          type="checkbox"
                          checked={addWindowCleaning}
                          onChange={(e) => setAddWindowCleaning(e.target.checked)}
                          className="w-4 h-4 rounded text-[#0d47a1] focus:ring-[#2196f3]"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-[#08295b]">
                            External Windows &amp; Screens
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-[#08295b]">
                      Special Requirements / Property Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. key collection from Ray White Subiaco, furnished unit, carpeted bedrooms only..."
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#d0e4f7] bg-white text-xs font-medium text-[#08295b] outline-none focus:border-[#2196f3] resize-none shadow-xs"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="space-y-2 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">SENDING QUOTE REQUEST...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SUBMIT QUOTE REQUEST</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormStep(1)}
                      className="w-full py-1 text-xs text-[#08295b]/60 hover:text-[#0d47a1] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to property details</span>
                    </button>
                  </div>
                </form>
              )}

              {/* ================= STEP 3: SUCCESS / CONFIRMATION SCREEN ================= */}
              {formStep === 3 && (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#0d47a1] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#0d47a1]/25">
                    <Check className="w-9 h-9 stroke-[3]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-[#08295b] tracking-tight">
                      Quote Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#0d47a1]">
                      Our Perth team is preparing your custom quote.
                    </p>
                  </div>

                  <p className="text-xs text-[#08295b]/75 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{fullName || "there"}</strong>! We have received your bond cleaning enquiry for your <strong>{propertyType} in {suburb || "Perth"}</strong> for <strong>{formatPillDate(selectedDate)}</strong>. We will contact you within 15–30 minutes with a fixed, transparent quote.
                  </p>

                  <div className="p-3.5 bg-[#f8fbfe] rounded-2xl border border-[#d0e4f7] text-left text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#08295b]">
                      <MapPin className="w-3.5 h-3.5 text-[#2196f3]" />
                      <span>Location: {suburb}, Perth WA</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#08295b]/80">
                      <Home className="w-3.5 h-3.5 text-[#2196f3]" />
                      <span>{bedrooms} · {bathrooms} · {propertyType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#08295b]/80">
                      <Calendar className="w-3.5 h-3.5 text-[#2196f3]" />
                      <span>Preferred Date: {formatPillDate(selectedDate)}</span>
                    </div>
                  </div>

                  {/* Immediate Direct Contact Option */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-bold text-[#08295b]">
                      Need an Urgent Response or Same-Day Clean?
                    </div>
                    <a
                      href="tel:+61460849843"
                      className="w-full py-3.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call +61 460 849 843 Now</span>
                    </a>
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-[11px] text-[#08295b]/50 hover:text-[#0d47a1] underline cursor-pointer"
                    >
                      Submit another Perth quote enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Real Estate Agencies Partner Strip - WA Specific */}
      <section className="py-8 sm:py-10 bg-white border-b border-[#d0e4f7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center space-y-1 mb-6">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#08295b]">
              Trusted by Leading Real Estate Agencies Across Perth & WA
            </h4>
            <p className="text-xs text-[#08295b]/60 max-w-xl mx-auto">
              Our vacate checklists are tailored to satisfy property managers from Western Australia&apos;s most demanding real estate agencies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
            {PERTH_REAL_ESTATE_AGENCIES.map((agency, i) => (
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

      {/* Why Choose Cleaning Superboss for Perth Bond Cleaning */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7] bg-[#f8fbfe]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Action Photo & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#d0e4f7] aspect-[4/5] bg-white group">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
                alt="Professional Bond Cleaner in Perth scrubbing oven"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08295b]/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#2196f3] px-2.5 py-0.5 rounded-full">
                    Perth Vacate Specialists
                  </span>
                  <h3 className="text-lg font-bold">REIWA Inspection-Ready Standards</h3>
                  <p className="text-xs text-white/80">Every nook, cranny, and appliance cleaned to perfection.</p>
                </div>
              </div>
            </div>

            {/* Floating Metric Card 1 */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl border border-[#d0e4f7] shadow-xl flex items-center gap-3">
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
                <div className="text-xs font-black text-[#08295b]">3,800+ Perth Homes</div>
                <div className="text-[10px] text-[#08295b]/60">Handed Over Successfully</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Value Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1.5 rounded-full border border-[#d0e4f7]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b] tracking-tight">
                Why Perth Tenants Choose Cleaning Superboss for Vacate Cleans
              </h2>
              <p className="text-xs sm:text-sm text-[#08295b]/70 leading-relaxed">
                We take the stress out of moving in Perth by delivering property manager-approved cleans backed by our unconditional guarantee.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "100% Bond Back Guarantee (REIWA Checklist)",
                  desc: "We clean strictly to Western Australian real estate standards. If your Perth property manager flags any item on the exit condition report within 72 hours, we return and reclean the flagged areas free of charge.",
                },
                {
                  num: "2",
                  title: "Exhaustive Room-by-Room Detailing",
                  desc: "Comprehensive vacate cleaning covering oven interior, rangehood filters, window tracks, deep limescale, door frames, skirting boards, and fly screens.",
                },
                {
                  num: "3",
                  title: "Local Perth Cleaners, Police Checked & Insured",
                  desc: "Every cleaner on our Perth team is thoroughly vetted, police-cleared, and insured with $10M public liability coverage for complete peace of mind.",
                },
                {
                  num: "4",
                  title: "Fast Free Quotes & 7-Day Flexible Scheduling",
                  desc: "Operating 7 days a week across all Perth suburbs (North & South of the Swan River). Short-notice and urgent move-outs accommodated seamlessly.",
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
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#0d47a1]/25 transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Room-By-Room End of Lease Checklist Section */}
      <section id="checklist" className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 bg-white border-b border-[#d0e4f7]">
        <div className="max-w-[1360px] mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-4 py-1.5 rounded-full border border-[#d0e4f7]">
                Room-By-Room Standard
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b] tracking-tight">
              What Does Our Perth Bond Clean Include?
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70 leading-relaxed">
              Our exhaustive vacate cleaning checklist covers every detail required by property managers across Western Australia.
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

          {/* Summary 2 Banners: Standard Inclusions & Move-Out Add-Ons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Box 1: What We Always Include */}
            <div className="bg-[#e3f2fd]/60 border border-[#d0e4f7] rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0d47a1] text-white flex items-center justify-center font-black">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#08295b]">
                    Always Included in Every Perth Bond Clean
                  </h3>
                  <p className="text-xs text-[#08295b]/70">Standard in all our Western Australian vacate cleans</p>
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
                    Optional Move-Out Add-Ons Available
                  </h3>
                  <p className="text-xs text-[#08295b]/70">Request in your quote for a complete vacate package</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#08295b]/90">
                {[
                  "Carpet steam cleaning (Hot water extraction)",
                  "Pet bond & flea treatment certificate",
                  "External window washing & fly screens",
                  "Full wall washing (heavy marks/nicotine)",
                  "Balcony & patio pressure wash",
                  "Blinds & shutter deep dust treatment",
                  "Garage sweep & oil stain spot clearing",
                  "Urgent next-day vacate service",
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

      {/* Perth Suburbs & Greater WA Metro Coverage Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7] bg-[#f8fbfe]">
        <div className="max-w-[1360px] mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-4 py-1.5 rounded-full border border-[#d0e4f7]">
                Service Area
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b] tracking-tight">
              Perth Suburbs & Areas We Service
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70 leading-relaxed">
              Covering all suburbs North and South of the Swan River, from Joondalup down to Mandurah and east to the Perth Hills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERTH_SUBURB_REGIONS.map((regionData, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#d0e4f7] shadow-sm hover:border-[#2196f3] transition-all space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-[#d0e4f7]">
                  <MapPin className="w-4 h-4 text-[#0d47a1]" />
                  <h3 className="font-bold text-sm text-[#08295b]">{regionData.region}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {regionData.suburbs.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#f8fbfe] border border-[#d0e4f7] text-[#08295b]/80 font-medium"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-[#08295b]/70 mb-3">
              Don&apos;t see your suburb listed? We cover 100% of the Greater Perth Metropolitan Area.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
            >
              <span>Get a Quote for Your Suburb</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Perth Customer Testimonials */}
      <section className="py-14 sm:py-20 bg-[#08295b] text-white px-4 sm:px-6 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#2196f3] uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
                Verified Perth Reviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Trusted by Hundreds of Perth Tenants & Landlords
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                quote:
                  "Our property manager in Subiaco was notoriously strict, but Cleaning Superboss passed the exit condition report on the very first inspection. Full $2,400 bond refunded within 48 hours.",
                author: "Sarah T.",
                loc: "Subiaco WA",
              },
              {
                quote:
                  "Moving out of our Scarborough rental was super stressful until we hired this team. The oven and shower screens looked brand new. Got our quote in 15 mins and clean done the next day.",
                author: "Mark & Dan",
                loc: "Scarborough WA",
              },
              {
                quote:
                  "Booked their end of lease clean with carpet steam cleaning in Joondalup. The tax invoice and carpet certificate were accepted by the real estate agent immediately with zero fuss.",
                author: "Chloe R.",
                loc: "Joondalup WA",
              },
            ].map((rev, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <div className="font-bold text-xs text-white">{rev.author}</div>
                  <div className="text-[10px] text-[#2196f3] font-semibold">{rev.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs (Perth & WA Focused) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7] bg-[#f8fbfe]">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-4 py-1.5 rounded-full border border-[#d0e4f7]">
                Common Questions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08295b] tracking-tight">
              Frequently Asked Questions (Perth Bond Cleaning)
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70 leading-relaxed">
              Everything you need to know about your bond clean, REIWA checklists, and guarantee.
            </p>
          </div>

          <div className="divide-y divide-[#d0e4f7] border-y border-[#d0e4f7] bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            {PERTH_FAQS.map((faq, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-[#08295b] hover:text-[#0d47a1] cursor-pointer"
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

      {/* Contact & Operating Hours Section (Perth / WA Timezone) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 bg-white border-b border-[#d0e4f7]">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-4 py-1.5 rounded-full border border-[#d0e4f7] shadow-2xs">
                Perth Support
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08295b] tracking-tight pt-1">
              Contact Our Perth Cleaning Team
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70 max-w-xl mx-auto leading-relaxed">
              Have questions about your Western Australia tenancy exit clean? Our local support team is here 7 days a week.
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
                  <div className="text-[10px] uppercase font-bold text-[#08295b]/60">Call / SMS (Perth Direct)</div>
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

            {/* Operating Hours Table (AWST) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#08295b]">
                Operating Hours (Western Australia Time - AWST)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#d0e4f7]">
                  <div className="font-bold text-[#08295b]">Monday – Friday</div>
                  <div className="text-[#08295b]/70 font-mono text-[11px]">7:00 AM – 8:00 PM AWST</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d0e4f7]">
                  <div className="font-bold text-[#08295b]">Saturday</div>
                  <div className="text-[#08295b]/70 font-mono text-[11px]">7:00 AM – 7:00 PM AWST</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d0e4f7]">
                  <div className="font-bold text-[#08295b]">Sunday</div>
                  <div className="text-[#08295b]/70 font-mono text-[11px]">8:00 AM – 6:00 PM AWST</div>
                </div>
              </div>
            </div>

            {/* Coverage Summary */}
            <div className="pt-2 text-center text-xs text-[#08295b]/70">
              📍 <strong>Perth Metro Coverage:</strong> North & South of Swan River · Inner City · Coastal Suburbs · Eastern Suburbs · Peel Region (Rockingham & Mandurah)
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Conversion CTA Banner */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0d47a1] text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-white uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
            100% Bond Back Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
            Moving Out in Perth? Claim Your Free Vacate Quote Today
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto">
            Get an itemised quote tailored to your Perth rental. 100% inspection-ready results backed by our 72-hour free reclean policy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={scrollToForm}
              className="px-8 py-4 rounded-full bg-white hover:bg-[#e3f2fd] text-[#0d47a1] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Request a Quote
            </button>
            <a
              href="tel:+61460849843"
              className="px-7 py-4 rounded-full bg-transparent border border-white/40 text-white hover:bg-white/10 text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +61 460 849 843</span>
            </a>
          </div>
        </div>
      </section>

      {/* Shared Global Footer */}
      <div className="pb-16 md:pb-0">
        <Footer />
      </div>
    </div>
  );
}
