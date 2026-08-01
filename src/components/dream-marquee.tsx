"use client";

import { useLanguage } from "@/lib/language-context";
import { CountryFlag } from "@/components/country-flag";

const COUNTRIES = [
  { code: "fr", fr: "France", en: "France" },
  { code: "es", fr: "Espagne", en: "Spain" },
  { code: "it", fr: "Italie", en: "Italy" },
  { code: "de", fr: "Allemagne", en: "Germany" },
  { code: "be", fr: "Belgique", en: "Belgium" },
  { code: "pt", fr: "Portugal", en: "Portugal" },
  { code: "nl", fr: "Pays-Bas", en: "Netherlands" },
  { code: "at", fr: "Autriche", en: "Austria" },
  { code: "se", fr: "Suède", en: "Sweden" },
  { code: "gr", fr: "Grèce", en: "Greece" },
] as const;

export function DreamMarquee() {
  const { lang } = useLanguage();
  const label =
    lang === "fr" ? "Destinations Schengen" : "Schengen destinations";

  const items = COUNTRIES.map((item) => ({
    code: item.code,
    text: item[lang],
  }));
  const loop = [...items, ...items];

  return (
    <section
      className="relative overflow-hidden border-y py-8 sm:py-9"
      style={{
        background: "var(--c-white)",
        borderColor: "var(--border-default)",
      }}
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
        style={{
          background: "linear-gradient(to right, var(--c-white), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
        style={{
          background: "linear-gradient(to left, var(--c-white), transparent)",
        }}
      />
      <div className="dream-marquee flex w-max items-center gap-10 whitespace-nowrap will-change-transform">
        {loop.map((item, i) => (
          <span
            key={`${item.code}-${item.text}-${i}`}
            className="inline-flex items-center gap-3.5 text-[clamp(1.5rem,3.2vw,2.15rem)] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            <CountryFlag code={item.code} name={item.text} size={32} />
            <span className="inline-block">{item.text}</span>
            <span
              className="ml-7 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: "var(--c-cobalt-500)" }}
              aria-hidden
            />
          </span>
        ))}
      </div>
    </section>
  );
}
