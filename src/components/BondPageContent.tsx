"use client";

import React, { useState, useEffect } from "react";
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
  Clock,
  Send,
  Building2,
  KeyRound,
  FileCheck2,
  Sofa,
  Utensils,
  Trees,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/Footer";
import PerthLiveBookingMap from "@/components/PerthLiveBookingMap";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";

const BOND_SLIDER_IMAGES = [
  {
    src: "/bond/WhatsApp Image 2026-09-04 at 5.06.41 AM.jpeg",
    tag: "Perth Vacate Specialists",
    title: "Real Estate Inspection-Ready Standards",
    desc: "Every nook, cranny, and appliance cleaned to perfection.",
  },
  {
    src: "/bond/WhatsApp Image 2026-09-04 at 5.06.42 AM (1).jpeg",
    tag: "Deep Oven & Rangehood",
    title: "Heavy Degreasing & Burnt Carbon Removal",
    desc: "Pristine glass doors, wire racks, and exhaust filters.",
  },
  {
    src: "/bond/WhatsApp Image 2026-09-04 at 5.06.42 AM (2).jpeg",
    tag: "Bathroom & Grout Polish",
    title: "Limescale & Soap Scum Elimination",
    desc: "Sparkling shower screens, tiles, mirrors, and drains.",
  },
  {
    src: "/bond/WhatsApp Image 2026-09-04 at 5.06.42 AM.jpeg",
    tag: "Full Tenancy Handover",
    title: "Spotless Windows, Tracks & Skirtings",
    desc: "Detailed dust removal from flyscreens to door frames.",
  },
  {
    src: "/bond/WhatsApp Image 2026-09-04 at 5.06.43 AM (1).jpeg",
    tag: "Kitchen Sanitisation",
    title: "Cupboards & Benchtop Deep Disinfection",
    desc: "Inside and out cleaning of all cupboards, drawers & sinks.",
  },
  {
    src: "/bond/WhatsApp Image 2026-09-04 at 5.06.43 AM (2).jpeg",
    tag: "Agent Approved Finish",
    title: "High Standard Move-Out Presentation",
    desc: "Ready for immediate final inspection by property managers.",
  },
  {
    src: "/bond/WhatsApp Image 2026-09-04 at 5.06.43 AM.jpeg",
    tag: "100% Bond Guarantee",
    title: "Pristine Exit Clean Guaranteed",
    desc: "Complete 72-hour re-clean support with every booking.",
  },
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

const PERTH_REVIEWS = [
  {
    quote:
      "Our property manager in Subiaco was notoriously strict, but Cleaning Superboss passed the exit condition report on the very first inspection. Full $2,400 bond refunded within 48 hours.",
    author: "Sarah T.",
    loc: "Subiaco WA",
    service: "3 Bed House Bond Clean",
  },
  {
    quote:
      "Moving out of our Scarborough rental was super stressful until we hired this team. The oven and shower screens looked brand new. Got our quote in 15 mins and clean done the next day.",
    author: "Mark & Dan",
    loc: "Scarborough WA",
    service: "2 Bed Unit Vacate Clean",
  },
  {
    quote:
      "Booked their end of lease clean with carpet steam cleaning in Joondalup. The tax invoice and carpet certificate were accepted by the real estate agent immediately with zero fuss.",
    author: "Chloe R.",
    loc: "Joondalup WA",
    service: "Townhouse + Carpet Steam",
  },
  {
    quote:
      "Pass first time guarantee was the main reason we booked. The team arrived on time in Fremantle, deep cleaned every window track and grease filter. Got 100% of our deposit back.",
    author: "James & Emma",
    loc: "Fremantle WA",
    service: "4 Bed House Move-Out",
  },
  {
    quote:
      "Ray White property manager did the final walk-through and signed off with zero cleaning issues. Best vacate cleaning service in Perth!",
    author: "David L.",
    loc: "South Perth WA",
    service: "Apartment Bond Clean",
  },
];

const PERTH_FAQS = [
  {
    q: "Do you provide a 100% Bond Back Guarantee?",
    a: "Yes. Getting your bond back requires meeting strict Real Estate exit inspection standards. If your Perth property manager or landlord flags any cleaning item on the exit condition report within our guarantee period, we return to the property and rectify it completely free of charge. We prioritize inspection re-cleans urgently to protect your deposit.",
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
    a: "Yes. In Western Australia, 'vacate cleaning', 'end of lease cleaning', and 'bond cleaning' all refer to the comprehensive deep clean required to return a rental property to its original condition under WA real estate tenancy agreements.",
  },
  {
    q: "Can I add Carpet Steam Cleaning with a certificate for pet bond requirements?",
    a: "Yes! We offer hot-water extraction carpet steam cleaning and provide a certified receipt that satisfies WA real estate pet bond and flea treatment clauses.",
  },
  {
    q: "Does the rental property need electricity and hot water connected?",
    a: "Yes. To achieve a spotless finish that passes Real Estate exit standards, active power and hot water are required to operate commercial vacuum systems and hot water degreasers.",
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
  const [showAllSuburbs, setShowAllSuburbs] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Multi-Step Quote Form State: 1 = Property & Contact, 2 = Date & Add-ons, 3 = Confirmation
  const [formStep, setFormStep] = useState<1 | 2 | 3>(1);

  // Bond Image Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  useEffect(() => {
    if (isSliderHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BOND_SLIDER_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isSliderHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BOND_SLIDER_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BOND_SLIDER_IMAGES.length) % BOND_SLIDER_IMAGES.length);
  };

  // Perth Reviews Slider State
  const [reviewSlide, setReviewSlide] = useState(0);
  const [isReviewHovered, setIsReviewHovered] = useState(false);

  useEffect(() => {
    if (isReviewHovered) return;
    const interval = setInterval(() => {
      setReviewSlide((prev) => (prev + 1) % PERTH_REVIEWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isReviewHovered]);

  const nextReview = () => {
    setReviewSlide((prev) => (prev + 1) % PERTH_REVIEWS.length);
  };

  const prevReview = () => {
    setReviewSlide((prev) => (prev - 1 + PERTH_REVIEWS.length) % PERTH_REVIEWS.length);
  };

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

  // Single-Step Form Submission
  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !suburb.trim()) {
      setFormError("Please fill in your name, phone number, and Perth suburb.");
      return;
    }
    setFormError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(2);
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
    <div className="min-h-screen bg-[#f8fbfe] text-[#08295b]">
      {/* Hero Section with Dedicated Quote Enquiry Form */}
      <section className="relative w-full pt-20 sm:pt-24 pb-8 sm:pb-14 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7] overflow-hidden">
        {/* Background Video with Clean Visible Presentation & Left Blur */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/Short_ready_to_paste_version_C_gwr_video_mvp.mp4" type="video/mp4" />
          </video>
          {/* Left-side targeted blur & gradient for crisp headline legibility */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[62%] bg-gradient-to-r from-[#f8fbfe]/85 via-[#f8fbfe]/60 to-transparent backdrop-blur-[6px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/10 to-white/20" />
          <div className="absolute inset-0 bg-[#08295b]/5" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Streamlined Heading, Value Cards & Reassurance */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#e3f2fd]/90 backdrop-blur-xs border border-[#d0e4f7] text-[#0d47a1] text-[11px] sm:text-xs font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2196f3]" />
              <span>PERTH BOND CLEANING • FAST QUOTE RESPONSE</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-black text-[#08295b] tracking-tight leading-[1.15]">
                Perth Bond Cleaning &amp; <br className="hidden sm:inline" />
                <span className="text-[#0d47a1]">End Of Lease Specialists</span>
              </h1>
              <p className="text-xs sm:text-base text-[#08295b]/80 max-w-xl font-medium leading-relaxed">
                Pass your Perth property manager&apos;s exit inspection first time. Includes full oven degreasing, window tracks, sanitisation, and a 72-hour free re-clean guarantee.
              </p>
            </div>

            {/* 3 Modern Feature Cards (Icon + Title in one line) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
              <div className="px-2.5 sm:px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-[#d0e4f7] shadow-sm hover:border-[#2196f3] transition-colors flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2196f3]" />
                </div>
                <h4 className="text-[11px] sm:text-sm font-extrabold text-[#08295b] leading-tight truncate">Detailed Cleaning</h4>
              </div>

              <div className="px-2.5 sm:px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-[#d0e4f7] shadow-sm hover:border-[#2196f3] transition-colors flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center font-bold shrink-0">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2196f3]" />
                </div>
                <h4 className="text-[11px] sm:text-sm font-extrabold text-[#08295b] leading-tight truncate">Oven &amp; Tracks</h4>
              </div>

              <div className="px-2.5 sm:px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-[#d0e4f7] shadow-sm hover:border-[#2196f3] transition-colors flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#e3f2fd] text-[#0d47a1] flex items-center justify-center font-bold shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2196f3]" />
                </div>
                <h4 className="text-[11px] sm:text-sm font-extrabold text-[#08295b] leading-tight truncate">Agent Receipt</h4>
              </div>
            </div>

            {/* Reassurance Feature Line */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-bold text-[#08295b]">
              <span className="flex items-center gap-1 text-[#0d47a1]">
                <Check className="w-3.5 h-3.5 text-[#2196f3] stroke-[3]" />
                Perth-Wide Service
              </span>
              <span className="flex items-center gap-1 text-[#0d47a1]">
                <Check className="w-3.5 h-3.5 text-[#2196f3] stroke-[3]" />
                Detailed Cleaning Checklist
              </span>
              <span className="flex items-center gap-1 text-[#0d47a1]">
                <Check className="w-3.5 h-3.5 text-[#2196f3] stroke-[3]" />
                Free Quote
              </span>
            </div>
          </div>

          {/* Right Column: Direct 1-Step Quote Form Card */}
          <div id="quote-form" className="lg:col-span-5 scroll-mt-24 mt-4 sm:mt-6 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-[#d0e4f7] shadow-xl shadow-[#0d47a1]/10 px-5 sm:px-7 pt-6 sm:pt-7 pb-5 sm:pb-7 overflow-hidden transition-all">
              
              {/* ================= STEP 1: SINGLE-STEP DIRECT QUOTE FORM ================= */}
              {formStep === 1 && (
                <form onSubmit={handleDirectSubmit} className="space-y-3.5">
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
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
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

                  {/* Submit Button */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#0d47a1] hover:bg-[#2196f3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0d47a1]/25 transition-all cursor-pointer active:scale-98 flex items-center justify-center disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">SUBMITTING QUOTE REQUEST...</span>
                      ) : (
                        <span>REQUEST A QUOTE</span>
                      )}
                    </button>
                    <p className="text-[10px] text-[#08295b]/60 text-center">
                      Free quote • No obligation • Our team will get back to you
                    </p>
                  </div>
                </form>
              )}

              {/* ================= SUCCESS / CONFIRMATION SCREEN ================= */}
              {formStep === 2 && (
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
                    Thank you, <strong>{fullName || "there"}</strong>! We have received your bond cleaning enquiry for your <strong>{propertyType} in {suburb || "Perth"}</strong>. We will contact you within 15–30 minutes with a fixed, transparent quote.
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
                  </div>

                  {/* Immediate Response Info */}
                  <div className="pt-2">
                    <div className="p-3 bg-[#e3f2fd] rounded-xl border border-[#d0e4f7] text-xs font-bold text-[#0d47a1] flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2196f3]" />
                      <span>Priority Dispatch: We will reach out within 15–30 minutes</span>
                    </div>
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

      {/* Why Choose Cleaning Superboss for Perth Bond Cleaning */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 border-b border-[#d0e4f7] bg-[#f8fbfe]">
        <div className="max-w-[1360px] mx-auto space-y-8 lg:space-y-0">
          
          {/* Mobile Title (Appears before photo slider on mobile screens) */}
          <div className="space-y-2 sm:space-y-3 lg:hidden">
            <div className="flex items-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3.5 py-1.5 rounded-full border border-[#d0e4f7]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08295b] tracking-tight">
              Why Perth Tenants Choose Cleaning Superboss for Vacate Cleans
            </h2>
            <p className="text-xs sm:text-sm text-[#08295b]/70 leading-relaxed">
              We take the stress out of moving in Perth by delivering property manager-approved cleans backed by our unconditional guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Left Column: Action Photo Carousel */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-24">
              <div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#d0e4f7] aspect-[4/3] sm:aspect-[4/5] bg-[#08295b] group select-none"
                onMouseEnter={() => setIsSliderHovered(true)}
                onMouseLeave={() => setIsSliderHovered(false)}
              >
                {/* Slides */}
                {BOND_SLIDER_IMAGES.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={`Perth bond cleaning showcase ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}

                {/* Slider Controls Overlay */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/20">
                    {currentSlide + 1} / {BOND_SLIDER_IMAGES.length}
                  </span>
                </div>

                {/* Nav Arrows */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-[#08295b] shadow-lg backdrop-blur-md flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-[#08295b] shadow-lg backdrop-blur-md flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {BOND_SLIDER_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide
                          ? "w-5 bg-[#2196f3]"
                          : "w-1.5 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: 4 Feature Value Pillars (Desktop title inside) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hidden lg:block space-y-3 sm:space-y-4">
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
                  desc: "If your Perth property fails inspection on any cleaning item, we return to fix it completely free of charge. Your deposit return is guaranteed with an official Real Estate-compliant tax invoice.",
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
        </div>
      </section>

      {/* Interactive Before & After Transformation Showcase */}
      <BeforeAfterShowcase />

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PERTH_SUBURB_REGIONS.map((regionData, idx) => {
              const isHiddenOnMobile = !showAllSuburbs && idx >= 1;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#d0e4f7] shadow-sm hover:border-[#2196f3] transition-all space-y-3.5 ${
                    isHiddenOnMobile ? "hidden md:block" : "block"
                  }`}
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
              );
            })}
          </div>

          {/* Mobile "See More / Show Less" Suburb Toggle Button */}
          <div className="md:hidden flex justify-center pt-1">
            <button
              type="button"
              onClick={() => setShowAllSuburbs((prev) => !prev)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#d0e4f7] hover:border-[#2196f3] text-[#0d47a1] text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              <span>{showAllSuburbs ? "Show Fewer Areas" : "See More Perth Suburbs & Areas (+3)"}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showAllSuburbs ? "rotate-180" : ""}`} />
            </button>
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
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#2196f3] uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
                Verified Perth Reviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Trusted by Hundreds of Perth Tenants &amp; Landlords
            </h2>
            <div className="flex items-center justify-center gap-2 text-xs text-white/80">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-white/60">· 850+ Verified Perth Vacates</span>
            </div>
          </div>

          {/* ================= MOBILE REVIEWS SLIDER (< md) ================= */}
          <div
            className="md:hidden relative"
            onMouseEnter={() => setIsReviewHovered(true)}
            onMouseLeave={() => setIsReviewHovered(false)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/15 p-5 text-left min-h-[200px] flex flex-col justify-between shadow-lg">
              {PERTH_REVIEWS.map((rev, idx) => (
                <div
                  key={idx}
                  className={`transition-opacity duration-500 ease-in-out flex flex-col justify-between h-full ${
                    idx === reviewSlide ? "opacity-100 relative z-10" : "opacity-0 absolute inset-0 p-5 pointer-events-none"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-[#2196f3] bg-white/10 px-2.5 py-0.5 rounded-full">
                        {rev.service}
                      </span>
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed italic">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-white">{rev.author}</div>
                      <div className="text-xs text-[#2196f3] font-semibold">{rev.loc}</div>
                    </div>
                    <span className="text-[11px] font-mono text-white/50">
                      {idx + 1} / {PERTH_REVIEWS.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between pt-3 px-1">
              <div className="flex items-center gap-1.5">
                {PERTH_REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setReviewSlide(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === reviewSlide
                        ? "w-6 bg-[#2196f3]"
                        : "w-1.5 bg-white/40 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevReview}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next review"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= DESKTOP REVIEWS CAROUSEL / GRID (>= md) ================= */}
          <div
            className="hidden md:block relative space-y-4"
            onMouseEnter={() => setIsReviewHovered(true)}
            onMouseLeave={() => setIsReviewHovered(false)}
          >
            <div className="grid grid-cols-3 gap-5 text-left">
              {[0, 1, 2].map((offset) => {
                const itemIdx = (reviewSlide + offset) % PERTH_REVIEWS.length;
                const rev = PERTH_REVIEWS[itemIdx];
                return (
                  <div
                    key={itemIdx}
                    className="bg-white/5 border border-white/10 hover:border-[#2196f3]/60 transition-all rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-md group"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex text-amber-400 gap-0.5">
                          {[...Array(5)].map((_, sIdx) => (
                            <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-[#2196f3] bg-white/10 px-2 py-0.5 rounded-full">
                          {rev.service}
                        </span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed italic">
                        &ldquo;{rev.quote}&rdquo;
                      </p>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xs text-white">{rev.author}</div>
                        <div className="text-[10px] text-[#2196f3] font-semibold">{rev.loc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Carousel Indicators & Controls */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={prevReview}
                aria-label="Previous reviews"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {PERTH_REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setReviewSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === reviewSlide
                        ? "w-6 bg-[#2196f3]"
                        : "w-1.5 bg-white/30 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextReview}
                aria-label="Next reviews"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
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
              Everything you need to know about your bond clean, real estate inspection checklists, and guarantee.
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#d0e4f7] shadow-sm space-y-3">
            <div className="divide-y divide-[#d0e4f7]">
              {(showAllFaqs ? PERTH_FAQS : PERTH_FAQS.slice(0, 5)).map((faq, idx) => (
                <div key={idx} className="py-3.5 sm:py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-3 text-left font-bold text-xs sm:text-sm md:text-base text-[#08295b] hover:text-[#0d47a1] cursor-pointer transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-[#2196f3] transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180 text-[#0d47a1]" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <p className="mt-2.5 text-xs sm:text-sm text-[#08295b]/75 leading-relaxed bg-[#f8fbfe] p-3 rounded-xl border border-[#d0e4f7]/60">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Toggle View More / Fewer FAQs */}
            <div className="pt-3 border-t border-[#d0e4f7] flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllFaqs((prev) => !prev)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f8fbfe] border border-[#d0e4f7] hover:border-[#2196f3] text-[#0d47a1] text-xs font-bold shadow-2xs active:scale-95 transition-all cursor-pointer"
              >
                <span>{showAllFaqs ? "Show Fewer Questions" : `View More FAQs (+${PERTH_FAQS.length - 5})`}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showAllFaqs ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Operating Hours Section (Perth / WA Timezone) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden border-b border-[#d0e4f7]">
        
        {/* Background Stock Image with Clean Visible Presentation */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/contact_support_bg.jpg"
            alt="Perth Customer Support Team"
            className="w-full h-full object-cover object-center"
          />
          {/* Translucent overlay for vibrant visibility & crisp contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/35 to-white/60" />
          <div className="absolute inset-0 bg-[#08295b]/10" />
        </div>

        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#d0e4f7] text-[#0d47a1] text-xs font-mono font-bold uppercase tracking-widest shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Perth Customer Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08295b] tracking-tight drop-shadow-xs">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base text-[#08295b] font-bold">
              Multiple ways to reach our friendly team across Western Australia
            </p>
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Column: Direct Contact Details (7 cols) */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#d0e4f7] shadow-xl shadow-[#08295b]/5 flex flex-col justify-between space-y-6">
              <div className="space-y-5 sm:space-y-6">
                
                <div className="border-b border-[#d0e4f7]/70 pb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#08295b]">
                    Contact Information
                  </h3>
                  <p className="text-xs sm:text-sm text-[#08295b]/60 mt-0.5">
                    Reach out for vacate quotes, scheduling, or real estate inspection inquiries.
                  </p>
                </div>

                {/* Address Card */}
                <div className="group flex items-start gap-4 p-4 rounded-2xl bg-[#f8fbfe] border border-[#d0e4f7]/80 hover:border-[#2196f3]/60 hover:bg-white transition-all duration-200">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200/80 flex items-center justify-center text-rose-500 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="pt-0.5 space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#08295b]">Perth Office</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100/70 text-rose-700 px-2 py-0.5 rounded-full border border-rose-200">WA Hub</span>
                    </div>
                    <div className="text-sm font-medium text-[#08295b]/80 leading-snug">
                      Unit 3, 25 Morrison Street, Como WA 6152
                    </div>
                    <div className="text-[11px] text-[#08295b]/60">
                      Metro coverage across North & South of the Swan River
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <a
                  href="mailto:support@cleaningsuperboss.com.au"
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-[#f8fbfe] border border-[#d0e4f7]/80 hover:border-[#2196f3]/60 hover:bg-white transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200/80 flex items-center justify-center text-indigo-500 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div className="pt-0.5 space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#08295b]">Email Support</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100/70 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200">Fast Reply</span>
                    </div>
                    <div className="text-sm font-semibold text-[#0d47a1] group-hover:underline break-all">
                      support@cleaningsuperboss.com.au
                    </div>
                    <div className="text-[11px] text-[#08295b]/60">
                      Average response time under 15 minutes during operating hours
                    </div>
                  </div>
                </a>

                {/* Bookings Card */}
                <div
                  onClick={scrollToForm}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-[#f8fbfe] border border-[#d0e4f7]/80 hover:border-[#2196f3]/60 hover:bg-white transition-all duration-200 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200/80 flex items-center justify-center text-[#2196f3] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Calendar className="w-5 h-5 text-[#2196f3]" />
                  </div>
                  <div className="pt-0.5 space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#08295b]">Bookings & Quotes</span>
                      <span className="text-[11px] font-bold text-[#0d47a1] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                        Get Quote ↑
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[#0d47a1] group-hover:underline">
                      Instant Online Quote / Booking
                    </div>
                    <div className="text-[11px] text-[#08295b]/60">
                      Calculate your bond clean price and lock in your move-out date
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Working Hours Card (5 cols) */}
            <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#d0e4f7] shadow-xl shadow-[#08295b]/5 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* Hours Header with Live Badge */}
                <div className="flex items-center justify-between border-b border-[#d0e4f7]/70 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-2xs">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#08295b]">
                        Working Hours
                      </h3>
                      <div className="text-[11px] font-medium text-[#08295b]/60">
                        WA Time (AWST)
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Open 7 Days
                  </span>
                </div>

                {/* Day-by-day Timetable */}
                <div className="space-y-2 text-xs sm:text-sm">
                  {[
                    { day: "Monday", time: "7:00 am - 8:00 pm" },
                    { day: "Tuesday", time: "7:00 am - 8:00 pm" },
                    { day: "Wednesday", time: "7:00 am - 8:00 pm" },
                    { day: "Thursday", time: "7:00 am - 8:00 pm" },
                    { day: "Friday", time: "7:00 am - 8:00 pm" },
                    { day: "Saturday", time: "7:00 am - 7:00 pm", isWeekend: true },
                    { day: "Sunday", time: "8:00 am - 6:00 pm", isWeekend: true },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
                        item.isWeekend
                          ? "bg-[#e3f2fd]/40 font-semibold text-[#08295b]"
                          : "bg-[#f8fbfe] hover:bg-[#e3f2fd]/30 text-[#08295b]"
                      }`}
                    >
                      <span className="font-bold">{item.day}</span>
                      <span className="font-mono text-xs text-[#08295b]/80 font-medium">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Guarantee Reassurance */}
              <div className="pt-2 border-t border-[#d0e4f7]/60 flex items-center gap-2.5 text-xs text-[#08295b]/70">
                <ShieldCheck className="w-4 h-4 text-[#2196f3] shrink-0" />
                <span>Backed by our 72-Hour Inspection Re-clean Guarantee</span>
              </div>

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
