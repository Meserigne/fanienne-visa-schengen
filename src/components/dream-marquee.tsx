"use client";

import { CountryFlag } from "@/components/country-flag";
import { useCmsDoc } from "@/lib/cms-context";

type MarqueeDoc = {
  label: string;
  countries: { code: string; name: string }[];
};

export function DreamMarquee() {
  const t = useCmsDoc<MarqueeDoc>("home.marquee");
  const items = (t.countries || []).map((item) => ({
    code: item.code,
    text: item.name,
  }));
  const loop = [...items, ...items];

  return (
    <section
      className="relative overflow-hidden border-y py-8 sm:py-9"
      style={{
        background: "var(--c-white)",
        borderColor: "var(--border-default)",
      }}
      aria-label={t.label}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
        style={{
          background:
            "linear-gradient(to right, var(--c-white), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
        style={{
          background:
            "linear-gradient(to left, var(--c-white), transparent)",
        }}
      />
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 px-6">
        {loop.map((item, i) => (
          <span
            key={`${item.code}-${i}`}
            className="inline-flex items-center gap-2.5 text-[15px] font-medium tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "var(--font-ui)",
              color: "var(--text-secondary)",
            }}
          >
            <CountryFlag code={item.code} name={item.text} />
            {item.text}
          </span>
        ))}
      </div>
    </section>
  );
}
