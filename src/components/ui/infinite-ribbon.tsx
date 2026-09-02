import type * as React from "react";
import { cn } from "@/lib/utils";

export interface InfiniteRibbonProps {
  repeat?: number;
  duration?: number;
  reverse?: boolean;
  rotation?: number;
  children: React.ReactNode;
  className?: string;
  separator?: React.ReactNode;
  autoPlay?: boolean;
}

const ribbonAnimationStyles = `
@keyframes iconiq-infinite-ribbon {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes iconiq-infinite-ribbon-reverse {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
`;

export function InfiniteRibbon({
  repeat = 16,
  duration = 30,
  reverse = false,
  rotation = 0,
  children,
  className,
  separator = "✦",
  autoPlay = true,
}: InfiniteRibbonProps) {
  const repeatCount = Math.max(12, Math.floor(repeat));
  const animationName = reverse
    ? "iconiq-infinite-ribbon-reverse"
    : "iconiq-infinite-ribbon";

  return (
    <div
      className={cn(
        "w-full max-w-full overflow-hidden bg-[#5680e9] py-3.5 text-white text-base md:text-lg font-black tracking-widest select-none shadow-xl",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <span className="sr-only">{children}</span>
      <div
        aria-hidden="true"
        className="iconiq-infinite-ribbon-track flex w-max whitespace-nowrap items-center"
        style={
          autoPlay
            ? ({
                "--ribbon-duration": `${Math.max(0.1, duration)}s`,
                animation: `${animationName} var(--ribbon-duration) linear infinite`,
              } as React.CSSProperties)
            : undefined
        }
      >
        {Array.from({ length: repeatCount * 3 }, (_, index) => (
          <span className="mr-8 inline-flex items-center gap-6 select-none" key={index}>
            <span>{children}</span>
            <span className="opacity-70 text-sm">{separator}</span>
          </span>
        ))}
      </div>
      {autoPlay && <style>{ribbonAnimationStyles}</style>}
    </div>
  );
}
