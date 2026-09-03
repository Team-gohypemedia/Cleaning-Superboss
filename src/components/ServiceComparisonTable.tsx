"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

interface ChecklistItem {
  name: string;
  standard: boolean;
  deepVacate: boolean;
}

interface ChecklistCategory {
  category: string;
  items: ChecklistItem[];
}

const COMPARISON_DATA: ChecklistCategory[] = [
  {
    category: "Cleaning Tasks (All Rooms)",
    items: [
      { name: "Vacuuming", standard: true, deepVacate: true },
      { name: "Mopping", standard: true, deepVacate: true },
      { name: "Emptying bins", standard: true, deepVacate: true },
      { name: "Wiping surfaces", standard: true, deepVacate: true },
      { name: "Dusting", standard: true, deepVacate: true },
    ],
  },
  {
    category: "Surfaces & Fixtures (All Rooms)",
    items: [
      { name: "Skirting Boards", standard: true, deepVacate: true },
      { name: "Ceiling Fans", standard: true, deepVacate: true },
      { name: "Shelves", standard: true, deepVacate: true },
      { name: "Outside Cabinets", standard: true, deepVacate: true },
      { name: "Inside Cabinets (must be emptied)", standard: false, deepVacate: true },
      { name: "Blinds", standard: false, deepVacate: true },
      { name: "Inside Windows and Tracks", standard: false, deepVacate: true },
      { name: "Wall Marks", standard: false, deepVacate: true },
      { name: "Exhaust Fans", standard: false, deepVacate: true },
    ],
  },
  {
    category: "Kitchen / Living",
    items: [
      { name: "Washing Up", standard: true, deepVacate: true },
      { name: "Stove Top", standard: true, deepVacate: true },
      { name: "Microwave", standard: true, deepVacate: true },
      { name: "Sinks", standard: true, deepVacate: true },
      { name: "Countertops", standard: true, deepVacate: true },
      { name: "Blinds", standard: false, deepVacate: true },
      { name: "Inside Microwave", standard: false, deepVacate: true },
      { name: "Inside Oven", standard: false, deepVacate: true },
    ],
  },
  {
    category: "Bathroom / Laundry",
    items: [
      { name: "Toilet", standard: true, deepVacate: true },
      { name: "Shower / Bath", standard: true, deepVacate: true },
      { name: "Sinks", standard: true, deepVacate: true },
      { name: "Mirrors", standard: true, deepVacate: true },
    ],
  },
];

export default function ServiceComparisonTable() {
  const [activeFilter, setActiveFilter] = useState<"all" | "standard" | "deep">("all");

  return (
    <div className="w-full bg-white rounded-xl border border-[#d0e4f7] shadow-sm overflow-hidden">
      
      {/* Top Banner Notice matching reference copy */}
      <div className="p-6 sm:p-8 bg-[#f8fbfe] border-b border-[#d0e4f7] space-y-4">
        <div className="max-w-4xl mx-auto space-y-3 text-xs sm:text-sm text-[#08295b]/80 leading-relaxed">
          <p>
            We can provide domestic cleaning at a <strong>standard</strong>, <strong>deep</strong> or <strong>vacate</strong> level. We have provided a comprehensive table below outlining the differences between the 3 services. This applies to <strong>&apos;by size&apos; cleans only</strong>. For hourly cleaning, we focus on your specified areas or clean for the booked duration.
          </p>
          <p>
            For <strong>commercial</strong> jobs, we prefer to provide a customized quote. For more info{" "}
            <Link href="/services/commercial" className="text-[#2563eb] font-bold underline hover:text-[#0d47a1]">
              click here
            </Link>.
          </p>
          <p className="font-medium text-[#08295b] bg-[#e3f2fd] p-3 rounded-lg border border-[#d0e4f7]">
            💡 All cleans can be booked as once-off or recurring. Recurring jobs are either <strong>weekly</strong>, <strong>fortnightly</strong> or <strong>monthly</strong> and receive a further <strong>10% discount</strong> on once off cleans.
          </p>
        </div>

        <div className="pt-2 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2563eb] tracking-tight">
            Compare our services to see what best fits your needs.
          </h2>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-[#d0e4f7] bg-white">
              <th className="py-4 px-6 text-xs sm:text-sm font-bold text-[#08295b] w-1/2">
                Task / Area
              </th>
              <th className="py-4 px-6 text-center text-xs sm:text-sm font-bold text-[#08295b] w-1/4">
                <div className="flex items-center justify-center gap-1.5 text-[#2563eb]">
                  <span>✦</span>
                  <span>Standard Cleaning</span>
                </div>
              </th>
              <th className="py-4 px-6 text-center text-xs sm:text-sm font-bold text-[#08295b] w-1/4">
                <div className="flex items-center justify-center gap-1.5 text-[#0d47a1]">
                  <span>🧽</span>
                  <span>Deep/Vacate Cleaning</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((section, sIdx) => (
              <React.Fragment key={sIdx}>
                {/* Category Header Row */}
                <tr className="bg-[#f0f7fe] border-t-2 border-b border-[#d0e4f7]">
                  <td colSpan={3} className="py-3 px-6 text-xs sm:text-sm font-black text-[#08295b] uppercase tracking-wider">
                    {section.category}
                  </td>
                </tr>

                {/* Items in Category */}
                {section.items.map((item, iIdx) => (
                  <tr
                    key={iIdx}
                    className="border-b border-[#e2e8f0] hover:bg-[#fbfcfe] transition-colors"
                  >
                    <td className="py-3.5 px-6 text-xs sm:text-sm font-medium text-[#08295b]">
                      {item.name}
                    </td>
                    
                    {/* Standard Cleaning Checkmark */}
                    <td className="py-3.5 px-6 text-center">
                      {item.standard ? (
                        <div className="inline-flex items-center justify-center text-[#2563eb]">
                          <Check className="w-5 h-5 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-[#cbd5e1] font-bold text-sm">—</span>
                      )}
                    </td>

                    {/* Deep / Vacate Cleaning Checkmark */}
                    <td className="py-3.5 px-6 text-center">
                      {item.deepVacate ? (
                        <div className="inline-flex items-center justify-center text-[#2563eb]">
                          <Check className="w-5 h-5 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-[#cbd5e1] font-bold text-sm">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom CTA bar */}
      <div className="p-6 sm:p-8 bg-[#f8fbfe] border-t border-[#d0e4f7] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-[#08295b]/80">
          Ready to book your clean? Select your property size and get an instant transparent quote in 60 seconds.
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="px-6 py-3 rounded-lg bg-[#0d47a1] hover:bg-[#2196f3] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
          >
            <span>Book Now Online</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
