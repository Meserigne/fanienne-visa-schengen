"use client";

import Link from "next/link";
import {
  Target,
  Search,
  Zap,
  TrendingUp,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useCmsDoc } from "@/lib/cms-context";

const ICONS: LucideIcon[] = [Target, Search, Zap, TrendingUp, Lightbulb];

type WhyDoc = {
  title: string;
  subtitle: string;
  intro: string;
  listTitle: string;
  cta: string;
  items: { title: string; body: string }[];
};

export function WhyChooseSection() {
  const t = useCmsDoc<WhyDoc>("home.why");

  return (
    <section
      className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      style={{ background: "var(--c-ink-950)" }}
    >
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "rgba(232, 78, 27, 0.35)" }}
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "rgba(152, 225, 248, 0.25)" }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p
            className="mb-3 text-[12px] font-semibold uppercase"
            style={{
              fontFamily: "var(--font-ui)",
              letterSpacing: "0.2em",
              color: "var(--c-cyan-300)",
            }}
          >
            tukki
          </p>
          <h2
            className="mb-4 max-w-[22ch] text-[clamp(1.85rem,3.5vw,2.85rem)] font-semibold tracking-tight text-balance"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-on-dark)",
            }}
          >
            {t.title}
          </h2>
          <p
            className="mb-3 max-w-[48ch] text-[18px] font-medium"
            style={{ color: "var(--c-cyan-200)" }}
          >
            {t.subtitle}
          </p>
          <p
            className="mb-10 max-w-[54ch] text-[16px] leading-[1.7]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {t.intro}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h3
            className="mb-8 text-[15px] font-semibold uppercase"
            style={{
              fontFamily: "var(--font-ui)",
              letterSpacing: "0.12em",
              color: "var(--c-cobalt-300)",
            }}
          >
            {t.listTitle}
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {(t.items || []).map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={`${item.title}-${i}`} delay={i * 0.05}>
                <article
                  className="h-full rounded-2xl border p-6"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Icon
                    className="mb-4 size-6"
                    style={{ color: "var(--c-cyan-300)" }}
                  />
                  <h4
                    className="mb-2 text-[19px] font-semibold tracking-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-on-dark)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-[15px] leading-[1.65]"
                    style={{ color: "var(--text-on-dark-muted)" }}
                  >
                    {item.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Link
              href="/#eligibilite"
              className="inline-flex rounded-full px-7 py-3.5 text-[15px] font-semibold"
              style={{
                fontFamily: "var(--font-ui)",
                background: "var(--brand)",
                color: "var(--text-on-dark)",
              }}
            >
              {t.cta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
