"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useCmsDoc } from "@/lib/cms-context";
import { useLanguage } from "@/lib/language-context";
import { useSiteImages } from "@/lib/site-images-context";

type TitleBody = { title: string; body: string };

type ParcoursContent = {
  brand: string;
  title: string;
  body: string;
  whyTitle: string;
  why: TitleBody[];
  servicesTitle: string;
  services: TitleBody[];
  promiseTitle: string;
  promiseBody: string;
  promise: TitleBody[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

export function ParcoursPage({
  cmsKey,
  heroImageKey,
  promiseImageKey,
  heroAlt,
  servicesEyebrow,
  showHeroCta = false,
  showBottomCta = false,
}: {
  cmsKey: string;
  heroImageKey: string;
  promiseImageKey: string;
  heroAlt: { fr: string; en: string };
  servicesEyebrow?: { fr: string; en: string };
  showHeroCta?: boolean;
  showBottomCta?: boolean;
}) {
  const { lang } = useLanguage();
  const images = useSiteImages();
  const t = useCmsDoc<ParcoursContent>(cmsKey);
  const eyebrow = servicesEyebrow ?? {
    fr: "Nos services",
    en: "Our services",
  };

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
              "radial-gradient(ellipse 65% 55% at 15% 30%, rgba(232, 78, 27,0.4), transparent 60%)",
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
              {t.brand}
            </p>
            <h1
              className="mb-6 max-w-[18ch] text-[clamp(2.1rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-on-dark)",
              }}
            >
              {t.title}
            </h1>
            <p
              className={`max-w-[50ch] text-[19px] leading-[1.7] ${showHeroCta ? "mb-8" : ""}`}
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              {t.body}
            </p>
            {showHeroCta ? (
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
            ) : null}
          </Reveal>
          <Reveal className="relative lg:col-span-5" delay={0.1}>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={images[heroImageKey] || ""}
                alt={heroAlt[lang]}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <Reveal>
          <h2
            className="mb-12 max-w-[24ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            {t.whyTitle}
          </h2>
        </Reveal>
        <div
          className="grid grid-cols-1 border-t md:grid-cols-3"
          style={{ borderColor: "var(--border-strong)" }}
        >
          {(t.why || []).map((item, i) => (
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
      </section>

      <section
        className="border-y px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
        style={{
          background: "var(--color-bg-sunken)",
          borderColor: "var(--border-default)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p
              className="mb-4 text-[13px] font-semibold uppercase"
              style={{
                fontFamily: "var(--font-ui)",
                letterSpacing: "0.14em",
                color: "var(--c-cobalt-500)",
              }}
            >
              {eyebrow[lang]}
            </p>
            <h2
              className="max-w-[16ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-balance"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              {t.servicesTitle}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:col-span-8">
            {(t.services || []).map((s, i) => (
              <Reveal key={`${s.title}-${i}`} delay={i * 0.05}>
                <article
                  className={`border-t py-9 sm:py-10 ${
                    i % 2 === 0
                      ? "sm:border-r sm:pr-8 lg:pr-10"
                      : "sm:pl-8 lg:pl-10"
                  }`}
                  style={{ borderColor: "var(--border-default)" }}
                >
                  <p
                    className="mb-5 text-[clamp(2.5rem,4vw,3.25rem)] leading-none font-semibold tabular-nums tracking-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--c-cobalt-500)",
                      opacity: 0.85,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="mb-3 text-[22px] font-semibold tracking-tight sm:text-[24px]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="max-w-[40ch] text-[17px] leading-[1.7]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mb-14 grid grid-cols-1 items-center gap-10 lg:mb-16 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <h2
              className="mb-5 max-w-[20ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-balance"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              {t.promiseTitle}
            </h2>
            <p
              className="max-w-[48ch] text-[18px] leading-[1.7]"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.promiseBody}
            </p>
          </Reveal>
          <Reveal className="relative lg:col-span-6" delay={0.08}>
            <div className="relative aspect-[5/4] overflow-hidden lg:aspect-[4/3]">
              <Image
                src={images[promiseImageKey] || ""}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
        <div
          className="grid grid-cols-1 border-t md:grid-cols-3"
          style={{ borderColor: "var(--border-strong)" }}
        >
          {(t.promise || []).map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={i * 0.06}>
              <div
                className="border-b px-0 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
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
      </section>

      {showBottomCta ? (
        <section
          className="px-6 py-20 text-center sm:px-10 lg:px-14"
          style={{ background: "var(--surface-inverse)" }}
        >
          <Reveal>
            <h2
              className="mx-auto mb-5 max-w-[22ch] text-[clamp(1.85rem,3.5vw,3rem)] font-semibold tracking-tight text-balance"
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
      ) : null}

      <SiteFooter variant="compact" />
    </>
  );
}
