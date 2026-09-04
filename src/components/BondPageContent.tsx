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
import PerthLiveBookingMap from "@/components/PerthLiveBookingMap";

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
    title: "Interior Living",
    tag: "Windows, Skirtings & Ledges",
    summary: "Full wipe-down of all internal glass, mirrored wardrobes, tracks, blinds, fly screens, skirting boards and edge-to-edge vacuuming.",
    icon: <Home className="w-4 h-4 sm:w-5 sm:h-5 text-[#2196f3]" />,
    items: [
      "Windows & Mirrors: Clean inside and outside window panes, sliding door tracks, and mirrored wardrobe doors",
      "Cupboards & Drawers: Wipe clean inside and out, including shelving and top ledges",
      "Ledges & Skirtings: Wipe clean all window sills, door frames, architraves & skirting boards",
      "Fly Screens: Remove, wash free of coastal grit, and reinstall securely",
      "Lights & Switches: Clean light switches, power points, accessible light fittings & ceiling fan blades",
      "Floors: Deep edge-to-edge vacuuming along baseboards followed by sanitised hard floor mopping",
      "Walls: Detailed spot cleaning of fingerprints, scuff marks and light stains on interior walls",
      "Cobwebs: Thorough removal of cobwebs from ceiling cornices, corners, and light fixtures",
    ],
  },
  {
    title: "Kitchen Deep Degreasing",
    tag: "Oven, Rangehood & Benches",
    summary: "Commercial degreasing of cooking appliances, exhaust canopy, grease filters, splashbacks, sink descaling and cabinetry.",
    icon: <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#2196f3]" />,
    items: [
      "Oven & Grill: Commercial degreasing of oven interior, wire racks, baking trays, glass door & grill",
      "Rangehood / Extractor Fan: Remove built-up oil marks, wipe canopy, and degrease filter mesh",
      "Cooking Stovetop: Burners, control knobs, trivets & splashbacks scrubbed and mirror-polished",
      "Sinks & Tapware: Clear food residue from drains, polish tapware, and remove hard water limescale",
      "Benches & Splashbacks: Sanitize bench surfaces, clear edge residues, and polish splashback tiles",
      "Dishwasher: Rinse filter, wipe and polish exterior casing, and sanitize rubber door seals",
      "Cupboards & Pantry: Empty, vacuum, and wipe clean all cupboard shelves, drawers, and pantry units",
      "Refrigerator (if requested): Clean internal fridge shelves, crisper bins, racks & wipe exterior",
    ],
  },
  {
    title: "Bathrooms & Laundry",
    tag: "Mould, Grout & Descaling",
    summary: "Complete sanitary disinfection, shower glass descaling, toilet sanitation, mould removal and laundry trough clearing.",
    icon: <Bath className="w-4 h-4 sm:w-5 sm:h-5 text-[#2196f3]" />,
    items: [
      "Shower Glass & Tiles: Descale heavy soap scum & water stains, polish glass, and treat grout mould",
      "Toilet Bowl & Cistern: Deep scrub, disinfect, and sanitize bowl, seat, hinges & behind-toilet floor",
      "Vanity, Basins & Mirrors: Clean basins, drains, bench-tops, drawers inside/out, and polish mirrors",
      "Bathtub & Tapware: Scrub bathtub surfaces, descale tapware, and polish chrome fittings",
      "Laundry Trough & Recess: Scrub laundry tub, wipe washing machine recesses, taps, and splashback",
      "Exhaust Fans & Fixtures: Wash ceiling exhaust fan covers, wipe towel rails, toilet paper & soap holders",
    ],
  },
  {
    title: "External & Patio Areas",
    tag: "Patio, Garage & Cobwebs",
    summary: "Outdoor sweep, patio cobweb clearing, garage entrance wiping and sliding door track grit extraction.",
    icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#2196f3]" />,
    items: [
      "Patios & Decks: Sweep, mop, and clear verandas, alfresco tiled areas or outdoor decks",
      "Sliding Patio Tracks: Clear and vacuum Perth sand, dirt, and grit from sliding patio door tracks",
      "Garage: Sweep or vacuum garage floor, clear spiderwebs, and wipe garage entrance threshold",
      "Outdoor Windows: Clear exterior spiderwebs, wipe window sills, and wash accessible external panes",
      "Rubbish Bins (if requested): Wash and dry interior/exterior of bins as requested by property manager",
      "Air Conditioning Units: Dust exterior AC units, accessible return grilles, and filter screens",
    ],
  },
];

const PERTH_FAQS = [
  {
    q: "Do you provide a 100% Bond Back Guarantee?",
    a: "Yes. Getting your bond back requires meeting strict REIWA exit standards. If your Perth property manager or landlord flags any cleaning item on the exit condition report within our guarantee period, we return to the property and rectify it completely free of charge. We prioritize inspection re-cleans urgently to protect your deposit.",
  },
  {
    q: "Do you provide an itemised tax invoice for my Perth real estate agent?",
    a: "Yes, 100%. Immediately upon completion of your clean, we issue a formal digital tax invoice and a signed end-of-lease vacate checklist certificate. You can forward this receipt directly to your property manager to prove professional vacate cleaning compliance.",
  },
  {
    q: "I don't have time to be at the property, can you organise key pick-up and drop-off with my Perth real estate agent?",
    a: "Absolutely! We frequently coordinate key collection and return directly with Perth real estate agencies or lockboxes. You don't need to take time off work or wait around on cleaning day.",
  },
  {
    q: "Do you do pre-sale cleaning and move-in cleaning?",
    a: "Yes. In addition to tenant vacate cleaning, we specialize in pre-sale property detailing for homeowners preparing to sell, as well as fresh move-in sanitisation cleans across all Perth suburbs.",
  },
  {
    q: "The previous tenant left the property in bad condition, will you still clean?",
    a: "Yes! Our commercial Perth cleaning teams have heavy-duty equipment and professional chemicals to tackle heavy oven grime, neglected shower glass limescale, and full-property deep restorations.",
  },
  {
    q: "Can I customize the quote or exclude items to save cost?",
    a: "Yes. If certain rooms or areas have already been cleaned or are not required by your landlord, let us know in your quote enquiry and we will adjust your custom quote accordingly.",
  },
  {
    q: "My house is a 2-storey townhouse, can you clean 2nd-floor windows?",
    a: "Yes. We clean all interior windows and accessible external glass. For 2-storey homes, we use specialized extension water-fed poles for external upper-level windows as an add-on.",
  },
  {
    q: "Is vacate cleaning the same as end of lease cleaning or bond cleaning in Perth?",
    a: "Yes. In Western Australia, 'vacate cleaning', 'end of lease cleaning', and 'bond cleaning' all refer to the comprehensive deep clean required to return a rental property to its original condition under REIWA tenancy agreements.",
  },
  {
    q: "Can I add Carpet Steam Cleaning with a certificate for pet bond requirements?",
    a: "Yes! We offer hot-water extraction carpet steam cleaning and provide a certified receipt that satisfies WA real estate pet bond and flea treatment clauses.",
  },
  {
    q: "Does the rental property need electricity and hot water connected?",
    a: "Yes. To achieve a spotless finish that passes REIWA exit standards, active power and hot water are required to operate commercial vacuum systems and hot water degreasers.",
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
  const [activeChecklistTab, setActiveChecklistTab] = useState(0);

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
      {/* Hero Section with Dedicated Quote Enquiry Form */}
      <section className="relative w-full py-8 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Streamlined Heading, Value Cards & Reassurance */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e3f2fd] border border-[#d0e4f7] text-[#0d47a1] text-xs font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#2196f3]" />
              <span>REIWA Standard Approved · 100% Bond Back Guarantee</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-black text-[#08295b] tracking-tight leading-[1.15]">
                Perth Bond Cleaning &amp; <br className="hidden sm:inline" />
                <span className="text-[#0d47a1]">End Of Lease Specialists</span>
              </h1>
              <p className="text-sm sm:text-base text-[#08295b]/75 max-w-xl font-medium leading-relaxed">
                Pass your Perth property manager&apos;s exit inspection first time. Includes full oven degreasing, window tracks, sanitisation, and a 72-hour free re-clean guarantee.
              </p>
            </div>

            {/* 3 Modern Feature Cards (Replaces dense bullet list) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white border border-[#d0e4f7] shadow-xs hover:border-[#2196f3] transition-colors space-y-1">
                <div className="w-8 h-8 rounded-xl bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#2196f3]" />
                </div>
                <h4 className="text-xs font-extrabold text-[#08295b]">72-Hr Free Re-Clean</h4>
                <p className="text-[11px] text-[#08295b]/70 leading-snug">Zero cost if your agent flags any cleaning item.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#d0e4f7] shadow-xs hover:border-[#2196f3] transition-colors space-y-1">
                <div className="w-8 h-8 rounded-xl bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center font-bold">
                  <Flame className="w-4 h-4 text-[#2196f3]" />
                </div>
                <h4 className="text-xs font-extrabold text-[#08295b]">Oven &amp; Tracks Included</h4>
                <p className="text-[11px] text-[#08295b]/70 leading-snug">Full degreasing, rangehood &amp; glass descaling standard.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#d0e4f7] shadow-xs hover:border-[#2196f3] transition-colors space-y-1">
                <div className="w-8 h-8 rounded-xl bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center font-bold">
                  <Award className="w-4 h-4 text-[#2196f3]" />
                </div>
                <h4 className="text-xs font-extrabold text-[#08295b]">Agent Tax Receipt</h4>
                <p className="text-[11px] text-[#08295b]/70 leading-snug">Itemised compliance invoice for speedy bond return.</p>
              </div>
            </div>

            {/* CTAs & Quick Call Action */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={scrollToForm}
                className="px-6 py-3 rounded-full bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+61460849843"
                className="px-5 py-3 rounded-full bg-white border border-[#d0e4f7] text-[#08295b] hover:bg-[#e3f2fd] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0d47a1]" />
                <span>+61 460 849 843</span>
              </a>
            </div>

            {/* Clean Rating & Trust Proof */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#08295b]/75">
              <div className="flex items-center gap-1.5 font-semibold">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#08295b]">4.9/5.0</span>
                <span>(850+ Perth Moves)</span>
              </div>
              <span className="text-[#d0e4f7] font-bold select-none">•</span>
              <div className="flex items-center gap-1 font-bold text-[#0d47a1]">
                <Check className="w-3.5 h-3.5 text-[#2196f3] stroke-[3]" />
                <span>100% Bond Pass Rate</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2-Step Quote Form Card */}
          <div id="quote-form" className="lg:col-span-5 scroll-mt-24">
            <div className="relative rounded-3xl bg-white border border-[#d0e4f7] shadow-lg shadow-[#0d47a1]/5 p-5 sm:p-7 overflow-hidden transition-all">
              
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
                <form onSubmit={handleProceedToStepTwo} className="space-y-3.5">
                  <div className="text-center pb-0.5 space-y-0.5">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#08295b]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Smith"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#d0e4f7] bg-[#fcfdff] text-xs font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/15 transition-all placeholder:text-[#08295b]/35 shadow-2xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#08295b]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#d0e4f7] bg-[#fcfdff] text-xs font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/15 transition-all placeholder:text-[#08295b]/35 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1 text-left">
                    <label className="text-[11px] font-bold text-[#08295b]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="liam@example.com.au (for tax quote & invoice)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#d0e4f7] bg-[#fcfdff] text-xs font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/15 transition-all placeholder:text-[#08295b]/35 shadow-2xs"
                    />
                  </div>

                  {/* Perth Suburb / Postcode */}
                  <div className="space-y-1 text-left">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-bold text-[#08295b]">
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
                      className="w-full px-3 py-2 rounded-xl border border-[#d0e4f7] bg-[#fcfdff] text-xs font-medium text-[#08295b] outline-none focus:border-[#2196f3] focus:ring-2 focus:ring-[#2196f3]/15 transition-all placeholder:text-[#08295b]/35 shadow-2xs"
                    />
                    {/* Quick Suburb Suggestions */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
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
                  <div className="space-y-1 text-left">
                    <label className="text-[11px] font-bold text-[#08295b]">
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
                  <div className="grid grid-cols-2 gap-2.5 text-left">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#08295b]">
                        Bedrooms
                      </label>
                      <select
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#d0e4f7] bg-white text-xs font-medium text-[#08295b] outline-none focus:border-[#2196f3] cursor-pointer shadow-2xs"
                      >
                        <option value="Studio">Studio</option>
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedrooms">2 Bedrooms</option>
                        <option value="3 Bedrooms">3 Bedrooms</option>
                        <option value="4 Bedrooms">4 Bedrooms</option>
                        <option value="5+ Bedrooms">5+ Bedrooms</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#08295b]">
                        Bathrooms
                      </label>
                      <select
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#d0e4f7] bg-white text-xs font-medium text-[#08295b] outline-none focus:border-[#2196f3] cursor-pointer shadow-2xs"
                      >
                        <option value="1 Bathroom">1 Bathroom</option>
                        <option value="2 Bathrooms">2 Bathrooms</option>
                        <option value="3 Bathrooms">3 Bathrooms</option>
                        <option value="4+ Bathrooms">4+ Bathrooms</option>
                      </select>
                    </div>
                  </div>

                  {/* Next Step CTA */}
                  <div className="pt-1.5 space-y-1.5">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0d47a1]/20 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                    >
                      <span>Continue to Date &amp; Options</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-[#08295b]/60 text-center">
                      🔒 Free quote · Fast 15-min response · No obligation
                    </p>
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
                  title: "100% Bond Return Guarantee",
                  desc: "If your Perth property fails inspection on any cleaning item, we return to fix it completely free of charge. Your deposit return is guaranteed with an official REIWA-compliant invoice.",
                },
                {
                  num: "2",
                  title: "Local Perth Expertise & Suburb Knowledge",
                  desc: "From coastal salt residue and grit in Fremantle to heavy hard water stains in Joondalup, we understand each suburb's unique cleaning challenges.",
                },
                {
                  num: "3",
                  title: "Transparent Quotes & No Hidden Fees",
                  desc: "Upfront, transparent quote tailored specifically to your property size and tenancy requirements. No surprise surcharges on cleaning day.",
                },
                {
                  num: "4",
                  title: "Trusted by 50+ Real Estate Agencies & Key Drop-off",
                  desc: "Perth real estate agents recommend us as their preferred cleaning provider. We can even coordinate key pick-up and drop-off directly with your agency.",
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
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-4 py-1.5 rounded-full border border-[#d0e4f7]">
                REIWA Vacate Standard
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b] tracking-tight">
              What Does Our Perth Vacate Clean Include?
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70 leading-relaxed">
              Our comprehensive move-out cleaning standard is designed to cover every area required for rental bond release, pre-sale property detailing, and move-in cleans.
            </p>
          </div>

          {/* Interactive Room Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-1.5 sm:p-2 bg-[#f0f7ff] border border-[#d0e4f7] rounded-2xl sm:rounded-3xl">
            {CHECKLIST_SECTIONS.map((section, idx) => {
              const isActive = activeChecklistTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveChecklistTab(idx)}
                  className={`flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0d47a1] text-white shadow-md shadow-[#0d47a1]/25 scale-[1.01]"
                      : "bg-white/80 hover:bg-white text-[#08295b] hover:text-[#0d47a1] border border-[#d0e4f7]/60"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-white/15 text-white" : "bg-[#e3f2fd] text-[#0d47a1]"
                    }`}
                  >
                    {section.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs sm:text-sm font-bold truncate">
                      {section.title}
                    </span>
                    <span
                      className={`block text-[10px] font-medium truncate ${
                        isActive ? "text-white/80" : "text-[#08295b]/60"
                      }`}
                    >
                      {section.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Checklist Card */}
          <div className="bg-[#f8fbfe] border border-[#d0e4f7] rounded-3xl p-5 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#d0e4f7]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0d47a1] text-white flex items-center justify-center shadow-sm shrink-0">
                  {CHECKLIST_SECTIONS[activeChecklistTab].icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#08295b]">
                    {CHECKLIST_SECTIONS[activeChecklistTab].title} Standard
                  </h3>
                  <p className="text-xs text-[#08295b]/70">
                    {CHECKLIST_SECTIONS[activeChecklistTab].summary}
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3f2fd] border border-[#d0e4f7] text-[11px] font-bold text-[#0d47a1] shrink-0 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2196f3]" />
                <span>100% REIWA Inspection Pass Standard</span>
              </div>
            </div>

            {/* Clean 2-Column Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {CHECKLIST_SECTIONS[activeChecklistTab].items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#d0e4f7]/80 hover:border-[#2196f3] transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#2196f3] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-medium text-[#08295b] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Reassurance Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#e3f2fd]/60 border border-[#d0e4f7]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white text-[#0d47a1] flex items-center justify-center border border-[#d0e4f7] shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#2196f3]" />
                </div>
                <p className="text-xs font-semibold text-[#08295b] leading-snug">
                  <span className="font-extrabold text-[#0d47a1]">72-Hour Free Re-Clean Guarantee:</span> If your Perth property manager marks anything on this checklist, we return within 72 hours for free.
                </p>
              </div>
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-sm text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* Add-Ons & Transparent Exclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Add-Ons Available */}
            <div className="bg-white border border-[#d0e4f7] rounded-3xl p-5 sm:p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#d0e4f7]">
                <div className="w-8 h-8 rounded-xl bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center font-bold">
                  <Plus className="w-4 h-4 text-[#2196f3] stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#08295b]">
                    Move-Out Cleaning Add-Ons (Selectable in Quote)
                  </h4>
                  <p className="text-[11px] text-[#08295b]/70">Customise your vacate package with specialised extras</p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-semibold text-[#08295b]/85">
                {[
                  "Carpet Steam Cleaning (Hot water extraction with real estate pet flea certificate)",
                  "External Window Cleaning & Fly Screens (Deep wash of all external glass)",
                  "Blinds Wiping & Dusting (Detailed slat washing & heavy dust removal)",
                  "Full Wall Washing (Removal of heavy nicotine, marker or scuff marks)",
                  "High-Pressure Washing for Balconies, Decks & Outdoor Pavers",
                ].map((addon, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2">
                    <Plus className="w-3.5 h-3.5 text-[#2196f3] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{addon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Exclusions (Builds Trust) */}
            <div className="bg-[#f8fbfe] border border-[#d0e4f7] rounded-3xl p-5 sm:p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#d0e4f7]">
                <div className="w-8 h-8 rounded-xl bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#0d47a1]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#08295b]">
                    Standard Service Exclusions & Custom Work
                  </h4>
                  <p className="text-[11px] text-[#08295b]/70">Clear transparency on what requires separate specialized booking</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#08295b]/75">
                {[
                  "Full-house tile & grout restoration (shower tiles included; other areas on custom quote)",
                  "Ceiling washing and curtain dry cleaning (requires specialised restoration)",
                  "Heavy garden weeding, mowing or landscaping maintenance",
                  "Mould remediation caused by internal structural plumbing leaks",
                ].map((exclusion, eIdx) => (
                  <div key={eIdx} className="flex items-start gap-2">
                    <span className="text-[#0d47a1] font-bold shrink-0">•</span>
                    <span>{exclusion}</span>
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

      {/* Recent Cleaning Bookings Across Perth (Live Activity Map) */}
      <PerthLiveBookingMap />

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
