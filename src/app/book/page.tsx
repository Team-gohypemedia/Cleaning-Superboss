"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Bed,
  Bath,
  RotateCw,
  Layers,
  Calendar,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  Key,
  Car,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  Check,
  Plus,
  HelpCircle,
  ShieldCheck,
  Star,
  Tag,
  Flame,
  Refrigerator,
  DoorClosed,
  AppWindow,
  Lock,
  CheckCircle2,
} from "lucide-react";

type MethodType = "size" | "hourly";
type FrequencyType = "once" | "weekly" | "fortnightly" | "monthly";
type CleanType = "standard" | "deep" | "vacate";

interface ExtraItem {
  id: string;
  name: string;
  price: number;
  subtitle: string;
  icon: React.ReactNode;
}

const EXTRAS: ExtraItem[] = [
  {
    id: "oven",
    name: "Inside Oven",
    price: 105,
    subtitle: "Racks, glass door & deep degrease",
    icon: <Flame className="w-4 h-4 text-[#2196f3]" />,
  },
  {
    id: "fridge",
    name: "Inside Fridge",
    price: 105,
    subtitle: "Shelves, drawers & sanitisation",
    icon: <Refrigerator className="w-4 h-4 text-[#2196f3]" />,
  },
  {
    id: "cabinets",
    name: "Inside Cabinets",
    price: 30,
    subtitle: "Wipe clean shelves & drawers (per room)",
    icon: <DoorClosed className="w-4 h-4 text-[#2196f3]" />,
  },
  {
    id: "windows",
    name: "Inside Windows",
    price: 30,
    subtitle: "Interior glass & window tracks (per room)",
    icon: <AppWindow className="w-4 h-4 text-[#2196f3]" />,
  },
];

export default function BookPage() {
  // Step tracker: 1 = Request Details, 2 = Personal Details, 3 = Payment Details
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1: Cleaning Request Details
  const [method, setMethod] = useState<MethodType>("size");
  const [bedrooms, setBedrooms] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [hourlyHours, setHourlyHours] = useState<number>(3);
  const [frequency, setFrequency] = useState<FrequencyType>("once");
  const [cleanType, setCleanType] = useState<CleanType>("standard");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [bookingDate, setBookingDate] = useState<string>("2026-09-17");
  const [bookingTime, setBookingTime] = useState<string>("6:30 PM");

  // Step 2: Personal Details
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // Step 2: Address Details
  const [address, setAddress] = useState<string>("");
  const [suburb, setSuburb] = useState<string>("");
  const [accessMethod, setAccessMethod] = useState<string>("I will be home");
  const [parkingMethod, setParkingMethod] = useState<string>("Park in the driveway");

  // Step 3: Payment
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiry, setCardExpiry] = useState<string>("");
  const [cardCvc, setCardCvc] = useState<string>("");
  const [agreedTerms, setAgreedTerms] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Toggle Extra
  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Pricing & Duration Calculation
  const calculation = useMemo(() => {
    let base = 0;
    let duration = 2.0;

    if (method === "size") {
      const bedRates: { [k: number]: { price: number; dur: number } } = {
        1: { price: 149, dur: 2.0 },
        2: { price: 189, dur: 2.5 },
        3: { price: 249, dur: 3.5 },
        4: { price: 309, dur: 4.5 },
        5: { price: 379, dur: 5.5 },
        6: { price: 449, dur: 6.5 },
      };
      const bedInfo = bedRates[bedrooms] || { price: 149, dur: 2.0 };
      base += bedInfo.price;
      duration = bedInfo.dur;

      // Additional Bathrooms (1 is included, +$30 each after)
      if (bathrooms > 1) {
        base += (bathrooms - 1) * 30;
        duration += (bathrooms - 1) * 0.5;
      }

      // Type Adjustment
      if (cleanType === "deep") {
        base += 80;
        duration += 1.5;
      } else if (cleanType === "vacate") {
        base += 160;
        duration += 2.5;
      }

      // Extras
      selectedExtras.forEach((extraId) => {
        const item = EXTRAS.find((e) => e.id === extraId);
        if (item) {
          base += item.price;
          duration += 0.5;
        }
      });
    } else {
      base = hourlyHours * 50;
      duration = hourlyHours;
    }

    // Frequency Discount
    let freqDiscountPercent = 0;
    if (frequency === "weekly") freqDiscountPercent = 0.1;
    if (frequency === "fortnightly") freqDiscountPercent = 0.1;
    if (frequency === "monthly") freqDiscountPercent = 0.05;

    const discountAmount = Math.round(base * freqDiscountPercent);
    const subtotalAfterFreq = base - discountAmount;
    const finalTotal = Math.max(49, subtotalAfterFreq - appliedDiscount);

    return {
      subtotal: base,
      discountAmount,
      appliedDiscount,
      total: finalTotal,
      duration: Math.round(duration * 10) / 10,
    };
  }, [
    method,
    bedrooms,
    bathrooms,
    hourlyHours,
    frequency,
    cleanType,
    selectedExtras,
    appliedDiscount,
  ]);

  // Apply Coupon
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError("");
    const trimmed = couponCode.trim().toUpperCase();
    if (trimmed === "RECURRING50" || trimmed === "CLEAN50") {
      setAppliedDiscount(50);
    } else if (trimmed === "CLEAN30") {
      setAppliedDiscount(30);
    } else {
      setCouponError("Invalid promo code. Try CLEAN30 or RECURRING50");
    }
  };

  const formattedDate = useMemo(() => {
    if (!bookingDate) return "Date not selected";
    try {
      const parts = bookingDate.split("-");
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
      return bookingDate;
    } catch {
      return bookingDate;
    }
  }, [bookingDate]);

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#08295b] pt-24 sm:pt-28 pb-16">
      
      {/* Main Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Header & Progress Stepper */}
        <div className="mb-8 text-center max-w-2xl mx-auto space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#08295b]">
            Book Your Professional Clean
          </h1>

          <p className="text-xs sm:text-sm text-[#08295b]/70 font-normal max-w-lg mx-auto">
            Transparent upfront pricing, instant confirmation, and police-checked cleaners. No hidden fees.
          </p>

          {/* Stepper Progress Bar */}
          <div className="pt-3 max-w-md mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-6 right-6 top-3.5 h-[2px] bg-[#d0e4f7] -z-0" />
              <div
                className="absolute left-6 top-3.5 h-[2px] bg-[#0d47a1] transition-all duration-300 -z-0"
                style={{
                  width: step === 1 ? "0%" : step === 2 ? "50%" : "100%",
                }}
              />

              {[
                { s: 1, label: "Request Details" },
                { s: 2, label: "Personal Details" },
                { s: 3, label: "Payment Details" },
              ].map((item) => {
                const isActive = step === item.s;
                const isPassed = step > item.s;
                return (
                  <div key={item.s} className="flex flex-col items-center gap-1 z-10">
                    <button
                      type="button"
                      onClick={() => {
                        if (item.s < step) setStep(item.s as 1 | 2 | 3);
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isActive
                          ? "bg-[#0d47a1] text-white shadow-md shadow-[#0d47a1]/25 ring-2 ring-[#0d47a1]/20"
                          : isPassed
                          ? "bg-[#2196f3] text-white"
                          : "bg-white border border-[#d0e4f7] text-[#08295b]/40"
                      }`}
                    >
                      {isPassed ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : item.s}
                    </button>
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold tracking-tight ${
                        isActive ? "text-[#0d47a1]" : "text-[#08295b]/50"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Grid Layout: Left Scrolls, Right is STICKY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* Left Column: Form Steps (Normal border radius, scrolls naturally) */}
          <div className="lg:col-span-8 bg-white rounded-xl p-5 sm:p-8 border border-[#d0e4f7] shadow-sm">
            
            {/* ================= STEP 1 ================= */}
            {step === 1 && (
              <div className="space-y-7">
                <div className="flex items-center justify-between pb-3 border-b border-[#d0e4f7]">
                  <h2 className="text-lg sm:text-xl font-bold text-[#08295b]">
                    Cleaning Request Details
                  </h2>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#0d47a1] font-semibold bg-[#e3f2fd] px-3 py-1 rounded-md border border-[#d0e4f7]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2196f3]" />
                    <span>Best Price Guarantee</span>
                  </div>
                </div>

                {/* Method Selector: By Size vs Hourly */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#08295b]">
                      Method *
                    </label>
                    <span className="text-[11px] font-semibold text-[#2196f3] flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Which is right for me?
                    </span>
                  </div>

                  <div className="grid grid-cols-2 rounded-lg border border-[#d0e4f7] p-1 bg-[#f8fbfe] max-w-md">
                    <button
                      type="button"
                      onClick={() => setMethod("size")}
                      className={`py-2.5 rounded-md text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        method === "size"
                          ? "bg-[#0d47a1] text-white shadow-xs"
                          : "text-[#08295b]/70 hover:text-[#08295b]"
                      }`}
                    >
                      By Size
                    </button>
                    <button
                      type="button"
                      onClick={() => setMethod("hourly")}
                      className={`py-2.5 rounded-md text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        method === "hourly"
                          ? "bg-[#0d47a1] text-white shadow-xs"
                          : "text-[#08295b]/70 hover:text-[#08295b]"
                      }`}
                    >
                      Hourly
                    </button>
                  </div>
                </div>

                {method === "size" ? (
                  <>
                    {/* Bedrooms */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-[#2196f3]" />
                        <label className="text-xs font-bold text-[#08295b]">
                          Bedrooms (Include all rooms except the kitchen and living room) *
                        </label>
                      </div>
                      <div className="grid grid-cols-6 gap-2 max-w-xl">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setBedrooms(num)}
                            className={`py-2.5 rounded-lg text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                              bedrooms === num
                                ? "bg-[#0d47a1] text-white border-[#0d47a1] shadow-xs"
                                : "bg-white text-[#08295b] border-[#d0e4f7] hover:border-[#2196f3]"
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bathrooms */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Bath className="w-4 h-4 text-[#2196f3]" />
                        <label className="text-xs font-bold text-[#08295b]">
                          Bathrooms *
                        </label>
                      </div>
                      <div className="grid grid-cols-6 gap-2 max-w-xl">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setBathrooms(num)}
                            className={`py-2.5 rounded-lg text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                              bathrooms === num
                                ? "bg-[#0d47a1] text-white border-[#0d47a1] shadow-xs"
                                : "bg-white text-[#08295b] border-[#d0e4f7] hover:border-[#2196f3]"
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Hourly Selector */
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#2196f3]" />
                      <label className="text-xs font-bold text-[#08295b]">
                        Duration in Hours ($50 / hr) *
                      </label>
                    </div>
                    <div className="grid grid-cols-7 gap-2 max-w-xl">
                      {[2, 3, 4, 5, 6, 7, 8].map((hrs) => (
                        <button
                          key={hrs}
                          type="button"
                          onClick={() => setHourlyHours(hrs)}
                          className={`py-2.5 rounded-lg text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                            hourlyHours === hrs
                              ? "bg-[#0d47a1] text-white border-[#0d47a1] shadow-xs"
                              : "bg-white text-[#08295b] border-[#d0e4f7] hover:border-[#2196f3]"
                          }`}
                        >
                          {hrs}h
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Frequency Selector */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RotateCw className="w-4 h-4 text-[#2196f3]" />
                    <label className="text-xs font-bold text-[#08295b]">
                      Frequency *
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                    {[
                      { id: "once", title: "Once Off", discountBadge: null },
                      { id: "weekly", title: "Weekly", discountBadge: "10% OFF" },
                      { id: "fortnightly", title: "Fortnightly", discountBadge: "10% OFF" },
                      { id: "monthly", title: "Monthly", discountBadge: "5% OFF" },
                    ].map((f) => {
                      const isSelected = frequency === f.id;
                      return (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setFrequency(f.id as FrequencyType)}
                          className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-left ${
                            isSelected
                              ? "bg-[#0d47a1] text-white border-[#0d47a1] shadow-xs"
                              : "bg-white text-[#08295b] border-[#d0e4f7] hover:border-[#2196f3]"
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-bold">
                            {f.title}
                          </span>
                          {f.discountBadge && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                isSelected
                                  ? "bg-white/20 text-white"
                                  : "bg-emerald-100 text-emerald-800"
                              }`}
                            >
                              {f.discountBadge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Clean Type Selector */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#2196f3]" />
                      <label className="text-xs font-bold text-[#08295b]">
                        Type *
                      </label>
                    </div>
                    <Link href="/#services" className="text-xs font-semibold text-[#2196f3] hover:underline">
                      What&apos;s covered?
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl">
                    {[
                      { id: "standard", title: "Standard Clean" },
                      { id: "deep", title: "Deep Clean" },
                      { id: "vacate", title: "Vacate Clean" },
                    ].map((t) => {
                      const isSelected = cleanType === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setCleanType(t.id as CleanType)}
                          className={`py-3 px-3 rounded-lg border transition-all cursor-pointer text-center text-xs sm:text-sm font-bold ${
                            isSelected
                              ? "bg-[#0d47a1] text-white border-[#0d47a1] shadow-xs"
                              : "bg-white text-[#08295b] border-[#d0e4f7] hover:border-[#2196f3]"
                          }`}
                        >
                          {t.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Extras Addon Cards */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4 text-[#2196f3]" />
                    <label className="text-xs font-bold text-[#08295b]">
                      Extras for Standard Clean (Select all that apply)
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                    {EXTRAS.map((extra) => {
                      const isChecked = selectedExtras.includes(extra.id);
                      return (
                        <div
                          key={extra.id}
                          onClick={() => toggleExtra(extra.id)}
                          className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                            isChecked
                              ? "bg-[#e3f2fd] border-[#0d47a1] text-[#08295b]"
                              : "bg-white border-[#d0e4f7] hover:border-[#2196f3]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-md bg-[#f8fbfe] border border-[#d0e4f7] flex items-center justify-center shrink-0">
                              {extra.icon}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#08295b]">
                                {extra.name}
                              </div>
                              <div className="text-[10px] text-[#08295b]/60">
                                {extra.subtitle}
                              </div>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-bold text-[#0d47a1] block">
                              ${extra.price}
                            </span>
                            <span
                              className={`text-[9px] font-bold ${
                                isChecked ? "text-[#0d47a1]" : "text-[#08295b]/40"
                              }`}
                            >
                              {isChecked ? "Added ✓" : "+ Add"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Choose Date and Time */}
                <div className="space-y-3 pt-3 border-t border-[#d0e4f7]">
                  <h3 className="text-sm font-bold text-[#08295b]">
                    Choose a Date and Time
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2196f3]" />
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#2196f3]" />
                        Time *
                      </label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      >
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-[#d0e4f7] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#f8fbfe] border border-[#d0e4f7]">
                    <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center font-bold text-xs border border-[#d0e4f7]">
                      <span className="text-blue-600">G</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-[#08295b]">Cleaning Superboss</div>
                      <div className="flex items-center gap-1 text-[11px] text-[#08295b]/70">
                        <span className="font-bold text-[#08295b]">4.9</span>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] text-[#08295b]/50">(1,200+ reviews)</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Next: Personal Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 2 ================= */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="pb-3 border-b border-[#d0e4f7]">
                  <h2 className="text-lg sm:text-xl font-bold text-[#08295b]">
                    Personal Details
                  </h2>
                </div>

                {/* Personal Information */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#2196f3]" />
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jessica"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#2196f3]" />
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Taylor"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#2196f3]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jessica@email.com.au"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#2196f3]" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+61 460 849 843"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Details */}
                <div className="space-y-3 pt-3 border-t border-[#d0e4f7]">
                  <h3 className="text-sm font-bold text-[#08295b]">
                    Address Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#2196f3]" />
                        Address *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 142 Collins Street"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#2196f3]" />
                        Suburb *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Melbourne VIC"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <Key className="w-3.5 h-3.5 text-[#2196f3]" />
                        How can we get in? *
                      </label>
                      <select
                        value={accessMethod}
                        onChange={(e) => setAccessMethod(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      >
                        <option value="I will be home">I will be home</option>
                        <option value="Key in lockbox">Key in lockbox</option>
                        <option value="Leave key under doormat">Leave key under doormat</option>
                        <option value="Call me upon arrival">Call me upon arrival</option>
                        <option value="Concierge has key">Concierge has key</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-[#2196f3]" />
                        Where can we park? *
                      </label>
                      <select
                        value={parkingMethod}
                        onChange={(e) => setParkingMethod(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                      >
                        <option value="Park in the driveway">Park in the driveway</option>
                        <option value="Free street parking available">Free street parking available</option>
                        <option value="Visitor parking available">Visitor parking available</option>
                        <option value="Metered street parking">Metered street parking</option>
                        <option value="No parking available">No parking available</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Back / Next Buttons */}
                <div className="pt-4 border-t border-[#d0e4f7] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-lg border border-[#d0e4f7] text-[#08295b] font-bold text-xs sm:text-sm hover:bg-[#f8fbfe] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-7 py-3 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Next: Payment Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 3 ================= */}
            {step === 3 && (
              <div className="space-y-6">
                {isCompleted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#08295b]">
                        Booking Confirmed!
                      </h2>
                      <p className="text-xs sm:text-sm text-[#08295b]/70 max-w-md mx-auto">
                        Thank you, <strong>{firstName || "Customer"}</strong>. Your booking is set for{" "}
                        <strong>{formattedDate}</strong> at <strong>{bookingTime}</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#f8fbfe] border border-[#d0e4f7] max-w-md mx-auto text-xs text-[#08295b] space-y-2 text-left">
                      <div className="flex justify-between border-b border-[#d0e4f7] pb-1.5">
                        <span className="font-bold text-[#08295b]/60">Booking ID:</span>
                        <span className="font-mono font-bold text-[#0d47a1]">#CSB-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#d0e4f7] pb-1.5">
                        <span className="font-bold text-[#08295b]/60">Total:</span>
                        <span className="font-extrabold text-sm text-[#08295b]">${calculation.total} AUD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold text-[#08295b]/60">Payment Policy:</span>
                        <span className="font-medium text-emerald-700">Charged after clean completion</span>
                      </div>
                    </div>

                    <div className="pt-3 flex justify-center">
                      <Link
                        href="/"
                        className="px-6 py-2.5 rounded-lg bg-[#0d47a1] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2196f3] transition-all"
                      >
                        Back to Homepage
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div className="pb-3 border-b border-[#d0e4f7]">
                      <h2 className="text-lg sm:text-xl font-bold text-[#08295b]">
                        Payment Details
                      </h2>
                    </div>

                    {/* Promo Code Box */}
                    <div className="p-3.5 rounded-lg bg-[#f8fbfe] border border-[#d0e4f7] space-y-2">
                      <label className="text-xs font-bold text-[#08295b] flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-[#2196f3]" />
                        Promo Code
                      </label>
                      <form onSubmit={handleApplyCoupon} className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. CLEAN30 or RECURRING50"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1 p-2 rounded-lg border border-[#d0e4f7] bg-white text-xs font-mono uppercase text-[#08295b] outline-none focus:border-[#2196f3]"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-lg bg-[#08295b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0d47a1] transition-all cursor-pointer"
                        >
                          Apply
                        </button>
                      </form>
                      {appliedDiscount > 0 && (
                        <p className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Promo applied! Saved ${appliedDiscount} AUD
                        </p>
                      )}
                      {couponError && (
                        <p className="text-xs text-rose-600 font-medium">{couponError}</p>
                      )}
                    </div>

                    {/* Credit Card Details */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#08295b]">
                          Credit or Debit Card
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                          <Lock className="w-3 h-3" /> 256-Bit Encrypted
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Card Number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full p-2.5 pl-10 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                          />
                          <CreditCard className="w-4 h-4 text-[#08295b]/40 absolute left-3 top-3" />
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <input
                            type="text"
                            placeholder="MM / YY"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                          />
                          <input
                            type="text"
                            placeholder="CVC"
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value)}
                            className="w-full p-2.5 rounded-lg border border-[#d0e4f7] bg-white text-xs sm:text-sm font-medium text-[#08295b] outline-none focus:border-[#2196f3]"
                          />
                        </div>
                      </div>

                      <p className="text-[11px] text-[#08295b]/70 leading-relaxed">
                        🔒 <strong>Zero Risk Policy:</strong> You will not be charged today. Payment is cleared only after your clean is completed.
                      </p>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="mt-1 rounded text-[#0d47a1]"
                      />
                      <label htmlFor="terms" className="text-xs text-[#08295b]/75 leading-relaxed cursor-pointer select-none">
                        I agree to the Terms & Conditions and understand I can cancel or reschedule for free up to 24 hours prior to service.
                      </label>
                    </div>

                    {/* Complete Booking Button */}
                    <div className="pt-3 border-t border-[#d0e4f7] flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-2.5 rounded-lg border border-[#d0e4f7] text-[#08295b] font-bold text-xs sm:text-sm hover:bg-[#f8fbfe] transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>

                      <button
                        type="button"
                        disabled={!agreedTerms}
                        onClick={() => setIsCompleted(true)}
                        className={`px-7 py-3 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                          agreedTerms
                            ? "bg-[#0d47a1] hover:bg-[#2196f3] text-white"
                            : "bg-[#d0e4f7] text-[#08295b]/40 cursor-not-allowed"
                        }`}
                      >
                        <span>Complete Booking (${calculation.total} AUD)</span>
                        <Check className="w-4 h-4 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Right Column: TRUE STICKY "Booking Summary" Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-3">
            
            <div className="bg-white rounded-xl border border-[#d0e4f7] shadow-sm overflow-hidden">
              
              {/* Header */}
              <div className="bg-[#f0f7fe] p-4 text-center border-b border-[#d0e4f7]">
                <h3 className="text-base font-bold text-[#08295b] tracking-tight">
                  Booking Summary
                </h3>
              </div>

              {/* Summary Items List */}
              <div className="p-5 space-y-3 text-xs">
                
                {/* Method */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0 font-bold text-xs">
                    ⤹
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Method</div>
                    <div className="font-semibold text-[#08295b]">
                      {method === "size" ? "By Size" : "Hourly"}
                    </div>
                  </div>
                </div>

                {method === "size" ? (
                  <>
                    {/* Bedrooms */}
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                        <Bed className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Bedrooms</div>
                        <div className="font-semibold text-[#08295b]">{bedrooms} Bedrooms</div>
                      </div>
                    </div>

                    {/* Bathrooms */}
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                        <Bath className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Bathrooms</div>
                        <div className="font-semibold text-[#08295b]">{bathrooms} Bathrooms</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Duration</div>
                      <div className="font-semibold text-[#08295b]">{hourlyHours} Hours</div>
                    </div>
                  </div>
                )}

                {/* Frequency */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                    <RotateCw className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Frequency</div>
                    <div className="font-semibold text-[#08295b] capitalize">
                      {frequency === "once" ? "Once Off" : `${frequency}`}
                    </div>
                  </div>
                </div>

                {/* Tier Type */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Type</div>
                    <div className="font-semibold text-[#08295b] capitalize">
                      {cleanType === "standard" ? "Standard Clean" : cleanType === "deep" ? "Deep Clean" : "Vacate Clean"}
                    </div>
                  </div>
                </div>

                {/* Extras if selected */}
                {selectedExtras.length > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Extras</div>
                      <div className="font-semibold text-[#08295b]">
                        {selectedExtras
                          .map((id) => EXTRAS.find((e) => e.id === id)?.name)
                          .filter(Boolean)
                          .join(", ")}
                      </div>
                    </div>
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Date</div>
                    <div className="font-semibold text-[#08295b] font-mono">{formattedDate}</div>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Time</div>
                    <div className="font-semibold text-[#08295b]">{bookingTime}</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#f0f7fe] border border-[#d0e4f7] flex items-center justify-center text-[#08295b] shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#08295b]/50">Address</div>
                    <div className="font-semibold text-[#08295b] truncate max-w-[170px]">
                      {suburb || address ? `${address ? address + ", " : ""}${suburb}` : "No Address Entered"}
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Blue Bar matching reference */}
              <div className="bg-[#2563eb] text-white p-4 flex items-center justify-between font-semibold text-xs sm:text-sm">
                <div>
                  Total : <strong className="text-lg sm:text-xl font-bold ml-1">${calculation.total}</strong>
                </div>
                <div>
                  Duration : <strong className="font-bold">{calculation.duration} hours</strong>
                </div>
              </div>

            </div>

            {/* Assistance note */}
            <div className="bg-white rounded-lg p-3 border border-[#d0e4f7] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#08295b]/70">
                <Phone className="w-3.5 h-3.5 text-[#2196f3]" />
                <span>Questions? Call us</span>
              </div>
              <a href="tel:+61460849843" className="font-bold text-[#0d47a1] hover:underline">
                +61 460 849 843
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
