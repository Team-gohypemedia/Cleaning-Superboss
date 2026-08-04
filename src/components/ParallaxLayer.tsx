"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // e.g., -0.5 for background (slower), 0.5 for foreground (faster)
  direction?: "vertical" | "horizontal";
  rotate?: number;
  scale?: boolean;
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = 0.2,
  direction = "vertical",
  rotate = 0,
  scale = false,
  className = "",
}: ParallaxLayerProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = targetRef.current;
    if (!element) return;

    const distance = speed * 300;

    const animationProps: gsap.TweenVars = {
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    };

    if (direction === "vertical") {
      animationProps.y = -distance;
    } else {
      animationProps.x = -distance;
    }

    if (rotate !== 0) {
      animationProps.rotate = rotate;
    }

    if (scale) {
      animationProps.scale = 1 + Math.abs(speed) * 0.2;
    }

    const ctx = gsap.context(() => {
      gsap.to(element, animationProps);
    });

    return () => ctx.revert();
  }, [speed, direction, rotate, scale]);

  return (
    <div ref={targetRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
