"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function BackToTop() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const label = lang === "fr" ? "Remonter en haut" : "Back to top";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label={label}
      title={label}
      className="fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 sm:right-8 sm:bottom-8"
      style={{
        background: "var(--c-cobalt-500)",
        color: "var(--c-white)",
        boxShadow: "0 10px 28px rgba(36, 80, 232, 0.35)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 5v14M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
