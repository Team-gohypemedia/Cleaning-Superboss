import React from "react";
import { Check, ArrowRight } from "lucide-react";

export interface PricingRow {
  property: string;
  oneOff: string;
  recurring: string;
  durationApprox: string;
  popular?: boolean;
}

interface PricingTableProps {
  title?: string;
  subtitle?: string;
  rows: PricingRow[];
  hourlyRate?: string;
}

export default function PricingTable({
  title = "Transparent Upfront Pricing",
  subtitle = "Simple rates with no hidden fees. All cleaning products and equipment included.",
  rows,
  hourlyRate = "$50 / hr (min 2 hours)",
}: PricingTableProps) {
  return (
    <div className="w-full py-12 sm:py-16 bg-[#f8fbfe]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0d47a1] uppercase bg-[#e3f2fd] px-3 py-1 rounded-full border border-[#d0e4f7]">
            Upfront Rates
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08295b]">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[#08295b]/70">
            {subtitle}
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="overflow-hidden rounded-3xl border border-[#d0e4f7] bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#08295b] text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Property Size</th>
                  <th className="py-4 px-6 font-bold">Approx Time</th>
                  <th className="py-4 px-6 font-bold">Once-Off Price</th>
                  <th className="py-4 px-6 font-bold text-[#2196f3]">
                    Recurring Clean <span className="text-[10px] text-white/70 font-normal">(Save $30)</span>
                  </th>
                  <th className="py-4 px-6 font-bold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d0e4f7] text-xs sm:text-sm">
                {rows.map((row, idx) => (
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
                      {row.recurring}
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
                Prefer to book by the hour? Standard rate is <strong>{hourlyRate}</strong>. Custom tasks catered on request.
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
    </div>
  );
}
