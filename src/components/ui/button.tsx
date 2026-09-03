import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "bg-[#0d47a1] text-white hover:bg-[#2196f3] shadow-md shadow-[#0d47a1]/25",
          variant === "outline" &&
            "border border-[#d0e4f7] bg-transparent text-[#08295b] hover:bg-[#e3f2fd]",
          variant === "ghost" && "hover:bg-[#e3f2fd] text-[#08295b]",
          size === "default" && "px-6 py-3 text-xs tracking-wider uppercase",
          size === "sm" && "px-4 py-2 text-xs",
          size === "lg" && "px-8 py-4 text-sm tracking-wider uppercase",
          size === "icon" && "h-10 w-10 rounded-full",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export interface IconicButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  iconWrapperClassName?: string;
}

export function IconicButton({
  href = "#",
  children,
  className,
  iconWrapperClassName,
  ...props
}: IconicButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-[#0d47a1] px-7 py-3.5 text-xs font-black tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#2196f3] shadow-lg shadow-[#0d47a1]/25",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <div
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0d47a1] transition-transform duration-300 group-hover:translate-x-1",
          iconWrapperClassName
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export { Button };
