"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "@/components/reveal";

export type StepItem = {
  fr: { label: string; title: string; body: string };
  en: { label: string; title: string; body: string };
};

const ACCENTS = [
  "var(--c-cobalt-500)",
  "var(--c-cobalt-400)",
  "#3d8bfd",
  "#6ea8ff",
];

export function StepsPan({ steps, title }: { steps: StepItem[]; title: string }) {
  const { lang } = useLanguage();

  return (
    <section
      className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className="mb-12 max-w-[16ch] text-[clamp(2.15rem,4vw,3.4rem)] font-semibold tracking-tight text-balance"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.fr.title} delay={i * 0.06}>
              <article
                className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[1.5rem] border p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border-default)",
                  background:
                    i === 0
                      ? "linear-gradient(160deg, #0c1a2e 0%, #1a3cc4 100%)"
                      : i === 3
                        ? "linear-gradient(160deg, #2450e8 0%, #4a70f5 100%)"
                        : "var(--surface-card)",
                  color:
                    i === 0 || i === 3 ? "var(--text-on-dark)" : "var(--text-primary)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-40 blur-2xl"
                  style={{ background: ACCENTS[i % ACCENTS.length] }}
                />
                <p
                  className="relative text-[clamp(2.5rem,5vw,3.5rem)] leading-none font-semibold tabular-nums"
                  style={{
                    fontFamily: "var(--font-display)",
                    color:
                      i === 0 || i === 3
                        ? "rgba(255,255,255,0.55)"
                        : ACCENTS[i % ACCENTS.length],
                  }}
                >
                  {step[lang].label}
                </p>
                <div className="relative">
                  <h3
                    className="mb-2.5 text-[24px] font-semibold tracking-tight sm:text-[26px]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step[lang].title}
                  </h3>
                  <p
                    className="text-[17px] leading-[1.7]"
                    style={{
                      color:
                        i === 0 || i === 3
                          ? "var(--text-on-dark-muted)"
                          : "var(--text-secondary)",
                    }}
                  >
                    {step[lang].body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
