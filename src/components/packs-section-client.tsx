"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Plane,
  Users,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "@/components/reveal";

const ICONS: Record<string, LucideIcon> = {
  Plane,
  GraduationCap,
  BriefcaseBusiness,
  HeartPulse,
  Users,
};

type PackCopy = {
  name: string;
  audience: string;
  includes: string;
  price?: string;
};

type PackItem = {
  href: string;
  icon: string;
  fr: PackCopy;
  en: PackCopy;
};

export function PacksSectionClient({
  packs,
  titleFr,
  titleEn,
  bodyFr,
  bodyEn,
}: {
  packs: PackItem[];
  titleFr: string;
  titleEn: string;
  bodyFr: string;
  bodyEn: string;
}) {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: titleFr,
      body: bodyFr,
      cta: "En savoir plus",
    },
    en: {
      title: titleEn,
      body: bodyEn,
      cta: "Learn more",
    },
  }[lang];

  return (
    <section
      id="formules"
      className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className="mb-4 max-w-[18ch] text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.1] font-semibold tracking-tight text-balance"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.title}
          </h2>
          <p
            className="mb-12 max-w-[54ch] text-[18px] leading-[1.7]"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.body}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {packs.map((pack, i) => {
            const copy = pack[lang];
            const Icon = ICONS[pack.icon] || Plane;
            return (
              <Reveal key={`${pack.href}-${i}`} delay={i * 0.06}>
                <article
                  className="group flex h-full flex-col rounded-[1.5rem] border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
                  style={{
                    background: "var(--surface-card)",
                    borderColor: "var(--border-default)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <span
                    className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "color-mix(in srgb, var(--c-cobalt-500) 12%, transparent)",
                      color: "var(--c-cobalt-500)",
                    }}
                    aria-hidden
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <p
                    className="mb-2 text-[12px] font-semibold uppercase"
                    style={{
                      fontFamily: "var(--font-ui)",
                      letterSpacing: "0.14em",
                      color: "var(--c-cobalt-500)",
                    }}
                  >
                    {copy.audience}
                  </p>
                  <h3
                    className="mb-4 text-[1.55rem] font-semibold tracking-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {copy.name}
                  </h3>
                  <p
                    className="mb-4 flex-1 text-[15px] leading-[1.65]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {copy.includes}
                  </p>
                  {copy.price ? (
                    <p
                      className="mb-6 text-[15px] font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {copy.price}
                    </p>
                  ) : (
                    <div className="mb-6" />
                  )}
                  <Link
                    href={pack.href}
                    className="text-[14px] font-semibold transition-colors hover:underline"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--c-cobalt-500)",
                    }}
                  >
                    {t.cta} →
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
