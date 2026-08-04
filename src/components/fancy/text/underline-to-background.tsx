import React from "react";
import { cn } from "@/lib/utils";

interface UnderlineToBackgroundProps {
  children: React.ReactNode;
  className?: string;
  targetBgColor?: string;
}

export default function UnderlineToBackground({
  children,
  className,
}: UnderlineToBackgroundProps) {
  return (
    <span
      className={cn(
        "relative inline-block text-[#D9692A] underline decoration-[#D9692A]/40 decoration-4 underline-offset-8 transition-colors duration-300 hover:text-white hover:bg-[#D9692A] px-2 rounded-md",
        className
      )}
    >
      {children}
    </span>
  );
}
