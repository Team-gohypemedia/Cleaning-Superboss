"use client";

import React from "react";
import { motion } from "motion/react";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
  rating?: number;
  location?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, rating = 5, location }, i) => (
                <div
                  className="p-6 sm:p-7 rounded-2xl border border-[#d0e4f7] bg-white shadow-md shadow-[#08295b]/5 max-w-xs sm:max-w-sm w-full space-y-4 hover:border-[#2196f3] transition-colors"
                  key={i}
                >
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rating)].map((_, starI) => (
                      <span key={starI} className="text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#08295b]/80 leading-relaxed font-normal">
                    &ldquo;{text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#d0e4f7]/70">
                    <img
                      width={42}
                      height={42}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-[#2196f3]/30 shrink-0"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-xs sm:text-sm text-[#08295b] tracking-tight leading-snug">
                        {name}
                      </div>
                      <div className="text-[11px] text-[#0d47a1] font-semibold tracking-tight">
                        {role} {location ? `· ${location}` : ""}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
