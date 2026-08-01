"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Lightweight CSS reveal without GSAP pin/opacity traps that hide content. */
export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);

    // Safety: never leave content invisible
    const safety = window.setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
      el.style.opacity = "1";
      el.style.transform = "none";
    };
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
