"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useSiteImages } from "@/lib/site-images-context";
import { useCmsDoc } from "@/lib/cms-context";

type AboutDoc = {
  title: string;
  subtitle: string;
  body: string;
  missionTitle: string;
  missionLead: string;
  missionBody: string;
  missionNote: string;
  missionPoints: { text: string }[];
  valuesTitle: string;
  values: { title: string; body: string }[];
  audiencesTitle: string;
  audiences: { href: string; title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

export default function AboutPage() {
  const { lang } = useLanguage();
  const SITE_IMAGES = useSiteImages();
  const t = useCmsDoc<AboutDoc>("page.about");
  const missionPoints = (t.missionPoints || []).map((p) => p.text);
  const values = t.values || [];
  const audiences = t.audiences || [];

  return (
    <>
      <SiteHeader />

      <section
        className="relative overflow-hidden pt-28"
        style={{ background: "var(--surface-inverse)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 20% 30%, rgba(232, 78, 27,0.4), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-12 px-6 pb-16 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:px-14 lg:pb-20">
          <Reveal className="lg:col-span-7">
            <p
              className="mb-5 text-[13px] font-semibold uppercase"
              style={{
                fontFamily: "var(--font-ui)",
                letterSpacing: "0.16em",
                color: "var(--c-cobalt-300)",
              }}
            >
              tukki CONSULTING
            </p>
            <h1
              className="mb-4 max-w-[16ch] text-[clamp(2.1rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-on-dark)",
              }}
            >
              {t.title}
            </h1>
            <p
              className="mb-5 max-w-[36ch] text-[18px] font-medium leading-[1.5]"
              style={{ color: "var(--c-cyan-300)" }}
            >
              {t.subtitle}
            </p>
            <p
              className="mb-8 max-w-[50ch] text-[18px] leading-[1.7]"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              {t.body}
            </p>
            <Link
              href="/#eligibilite"
              className="inline-flex rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-ui)",
                background: "var(--brand)",
                color: "var(--text-on-dark)",
              }}
            >
              {t.ctaButton}
            </Link>
          </Reveal>
          <Reveal className="relative lg:col-span-5" delay={0.1}>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={SITE_IMAGES.about}
                alt={
                  lang === "fr"
                    ? "Équipe Tukki Consulting - cabinet d'accompagnement visa Schengen à Dakar"
                    : "Tukki Consulting team - Schengen visa consultancy in Dakar"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_30%]"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <h2
              className="max-w-[10ch] text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              {t.missionTitle}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.06}>
            <p
              className="mb-7 max-w-[28ch] text-[clamp(1.65rem,3vw,2.35rem)] leading-[1.25] font-semibold tracking-tight text-balance"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              {t.missionLead}
            </p>
            <p
              className="mb-8 max-w-[52ch] text-[19px] leading-[1.8] sm:text-[21px]"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.missionBody}
            </p>
            <ul className="mb-10 flex max-w-[52ch] flex-col gap-4">
              {missionPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-4 text-[18px] leading-[1.6] sm:text-[19px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: "var(--c-cobalt-500)" }}
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p
              className="max-w-[52ch] border-t pt-7 text-[16px] leading-[1.75] sm:text-[17px]"
              style={{
                borderColor: "var(--border-default)",
                color: "var(--text-muted)",
              }}
            >
              {t.missionNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="border-y px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
        style={{
          background: "var(--color-bg-sunken)",
          borderColor: "var(--border-default)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2
              className="mb-12 max-w-[18ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              {t.valuesTitle}
            </h2>
          </Reveal>
          <div
            className="grid grid-cols-1 border-t md:grid-cols-3"
            style={{ borderColor: "var(--border-strong)" }}
          >
            {values.map((item, i) => (
              <Reveal key={`${item.title}-${i}`} delay={i * 0.06}>
                <div
                  className="border-b px-0 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
                  style={{ borderColor: "var(--border-default)" }}
                >
                  <h3
                    className="mb-3 text-[22px] font-semibold tracking-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[17px] leading-[1.7]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <Reveal>
          <h2
            className="mb-12 max-w-[18ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            {t.audiencesTitle}
          </h2>
        </Reveal>
        <div
          className="grid grid-cols-1 gap-0 border-t sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--border-strong)" }}
        >
          {audiences.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.05}>
              <Link
                href={item.href}
                className={`group block border-b px-0 py-9 transition-opacity hover:opacity-80 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0 sm:first:pl-0 sm:last:pr-0 ${
                  i === audiences.length - 1 ? "border-b-0" : ""
                }`}
                style={{ borderColor: "var(--border-default)" }}
              >
                <p
                  className="mb-3 text-[14px] font-semibold tabular-nums"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--c-cobalt-500)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="mb-3 text-[24px] font-semibold tracking-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-4 text-[17px] leading-[1.7]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.body}
                </p>
                <span
                  className="text-[15px] font-semibold"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "var(--c-cobalt-600)",
                  }}
                >
                  {lang === "fr" ? "Découvrir" : "Explore"} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="px-6 py-20 text-center sm:px-10 lg:px-14"
        style={{ background: "var(--surface-inverse)" }}
      >
        <Reveal>
          <h2
            className="mx-auto mb-5 max-w-[20ch] text-[clamp(1.85rem,3.5vw,3rem)] font-semibold tracking-tight text-balance"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-on-dark)",
            }}
          >
            {t.ctaTitle}
          </h2>
          <p
            className="mx-auto mb-8 max-w-[52ch] text-[17px] leading-[1.7]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {t.ctaBody}
          </p>
          <Link
            href="/#eligibilite"
            className="inline-flex rounded-full px-8 py-3.5 text-[15px] font-semibold"
            style={{
              fontFamily: "var(--font-ui)",
              background: "var(--brand)",
              color: "var(--text-on-dark)",
            }}
          >
            {t.ctaButton}
          </Link>
        </Reveal>
      </section>

      <SiteFooter variant="compact" />
    </>
  );
}
