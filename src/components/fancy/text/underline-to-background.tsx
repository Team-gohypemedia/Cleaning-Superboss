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
        "relative inline-block align-baseline text-[#0d47a1] underline decoration-[#2196f3]/40 decoration-2 sm:decoration-4 underline-offset-4 transition-colors duration-300 hover:text-white hover:bg-[#0d47a1] px-1.5 rounded-md",
        className
      )}
    >
      {children}
    </span>
  );
}
