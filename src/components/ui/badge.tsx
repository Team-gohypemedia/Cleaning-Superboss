import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold tracking-wider uppercase transition-colors focus:outline-none",
        variant === "default" &&
          "border-transparent bg-[#0d47a1] text-white hover:bg-[#2196f3]",
        variant === "secondary" &&
          "border-transparent bg-[#e3f2fd] text-[#08295b] hover:bg-[#d0e4f7]",
        variant === "destructive" &&
          "border-transparent bg-red-600 text-white hover:bg-red-500",
        variant === "outline" &&
          "border-[#0d47a1] text-[#0d47a1] bg-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
