"use client";

import { Reveal } from "@/components/reveal";

type Props = {
  title: string;
  body: string;
  items: string[];
};

export function LivingChecklist({ title, body, items }: Props) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <Reveal>
        <h2
          className="mb-5 max-w-[16ch] text-[clamp(2.15rem,4vw,3.15rem)] leading-[1.12] font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {title}
        </h2>
        <p
          className="mb-12 max-w-[52ch] text-[18px] leading-[1.7]"
          style={{ color: "var(--text-secondary)" }}
        >
          {body}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const featured = i === 0 || i === 3;
          return (
            <Reveal key={item} delay={i * 0.05}>
              <div
                className={`group relative overflow-hidden rounded-[1.25rem] border p-6 transition-transform duration-300 hover:-translate-y-1 ${
                  featured ? "sm:min-h-[180px]" : "min-h-[140px]"
                }`}
                style={{
                  borderColor: featured ? "transparent" : "var(--border-default)",
                  background: featured
                    ? i === 0
                      ? "linear-gradient(145deg, #0c1a2e 0%, #1a3cc4 100%)"
                      : "linear-gradient(145deg, #2450e8 0%, #4a70f5 100%)"
                    : i % 2 === 0
                      ? "var(--surface-card)"
                      : "var(--c-ink-100)",
                  boxShadow: featured
                    ? "0 20px 40px -24px rgba(36,80,232,0.55)"
                    : "var(--shadow-xs)",
                  color: featured ? "var(--text-on-dark)" : "var(--text-primary)",
                }}
              >
                <p
                  className="mb-4 text-[15px] font-semibold tabular-nums"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: featured ? "rgba(255,255,255,0.65)" : "var(--c-cobalt-600)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="text-[19px] leading-snug font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
