import React from "react";
import { ShieldCheck, Award, Sparkles, CheckCircle2, Clock } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2196f3]" />,
      title: "Police Checked",
      desc: "Every cleaner rigorously vetted",
    },
    {
      icon: <Award className="w-5 h-5 text-[#2196f3]" />,
      title: "Fully Insured",
      desc: "$10M public liability cover",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#2196f3]" />,
      title: "100% Satisfaction",
      desc: "Free reclean if not spotless",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#2196f3]" />,
      title: "Fully Equipped",
      desc: "Professional products & vacuums",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#2196f3]" />,
      title: "Fast 60s Booking",
      desc: "Instant upfront pricing",
    },
  ];

  return (
    <div className="w-full py-6 sm:py-8 bg-white border-y border-[#d0e4f7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#e3f2fd] flex items-center justify-center shrink-0 border border-[#d0e4f7]">
                {b.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#08295b]">
                  {b.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-[#08295b]/60">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
