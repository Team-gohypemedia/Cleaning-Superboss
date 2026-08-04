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
          "border-transparent bg-[#D9692A] text-white hover:bg-[#c2581f]",
        variant === "secondary" &&
          "border-transparent bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
        variant === "destructive" &&
          "border-transparent bg-red-600 text-white hover:bg-red-500",
        variant === "outline" &&
          "border-[#D9692A] text-[#D9692A] bg-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
