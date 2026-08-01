"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "@/components/reveal";

export type ServiceItem = {
  fr: { title: string; body: string };
  en: { title: string; body: string };
  image?: string;
  tone: "photo" | "ink" | "mist" | "cobalt" | "dusk";
};

type Props = {
  services: ServiceItem[];
  title: string;
  needTitle: string;
  needBody: string;
  needCta: string;
};

const toneStyles: Record<
  ServiceItem["tone"],
  { panel: string; title: string; body: string; num: string; veil?: string }
> = {
  photo: {
    panel: "var(--c-ink-950)",
    title: "var(--text-on-dark)",
    body: "var(--text-on-dark-muted)",
    num: "var(--c-cobalt-300)",
    veil: "linear-gradient(120deg, rgba(7,17,31,0.88) 0%, rgba(7,17,31,0.4) 100%)",
  },
  ink: {
    panel: "var(--c-ink-900)",
    title: "var(--text-on-dark)",
    body: "var(--text-on-dark-muted)",
    num: "var(--c-cobalt-400)",
  },
  mist: {
    panel: "var(--c-ink-100)",
    title: "var(--text-primary)",
    body: "var(--text-secondary)",
    num: "var(--c-cobalt-600)",
  },
  cobalt: {
    panel: "linear-gradient(145deg, #152f96 0%, #2450e8 55%, #4a70f5 100%)",
    title: "var(--text-on-dark)",
    body: "rgba(242,245,249,0.85)",
    num: "rgba(255,255,255,0.7)",
  },
  dusk: {
    panel: "var(--c-ink-950)",
    title: "var(--text-on-dark)",
    body: "var(--text-on-dark-muted)",
    num: "var(--c-cobalt-300)",
    veil: "linear-gradient(105deg, rgba(7,17,31,0.9) 5%, rgba(26,60,196,0.35) 100%)",
  },
};

export function ServiceStack({
  services,
  title,
  needTitle,
  needBody,
  needCta,
}: Props) {
  const { lang } = useLanguage();

  return (
    <section
      id="services"
      className="border-y px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      style={{ background: "var(--color-bg-sunken)", borderColor: "var(--border-default)" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className="mb-12 max-w-[18ch] text-[clamp(2.15rem,4vw,3.5rem)] font-semibold tracking-tight text-balance"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {title}
          </h2>
        </Reveal>

        {/* 5 cells: hero + 2 + 2, bento with visual variety */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {services.map((service, i) => {
            const tone = toneStyles[service.tone];
            const showPhoto = Boolean(service.image);
            const span =
              i === 0
                ? "md:col-span-2 lg:col-span-4 lg:row-span-2 min-h-[320px] lg:min-h-[440px]"
                : i === 1 || i === 2
                  ? "lg:col-span-2 min-h-[220px]"
                  : "lg:col-span-3 min-h-[240px]";

            return (
              <Reveal key={service.fr.title} delay={i * 0.05} className={span}>
                <article
                  className="group relative flex h-full min-h-[inherit] flex-col justify-between overflow-hidden rounded-[1.5rem] border p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
                  style={{
                    borderColor:
                      service.tone === "mist"
                        ? "var(--border-default)"
                        : "transparent",
                    background: tone.panel,
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  {showPhoto && service.image && (
                    <>
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            tone.veil ??
                            "linear-gradient(120deg, rgba(7,17,31,0.88) 0%, rgba(7,17,31,0.45) 100%)",
                        }}
                      />
                    </>
                  )}

                  <div className="relative z-10">
                    <p
                      className="mb-5 text-[clamp(2rem,4vw,3rem)] leading-none font-semibold tabular-nums"
                      style={{ fontFamily: "var(--font-display)", color: tone.num }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className="mb-3 max-w-[18ch] text-[clamp(1.55rem,2.6vw,2.1rem)] leading-[1.15] font-semibold tracking-tight"
                      style={{ fontFamily: "var(--font-display)", color: tone.title }}
                    >
                      {service[lang].title}
                    </h3>
                    <p
                      className="max-w-[42ch] text-[17px] leading-[1.7]"
                      style={{ color: tone.body }}
                    >
                      {service[lang].body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-10 text-[17px]" style={{ color: "var(--text-secondary)" }}>
          {needTitle} {needBody}{" "}
          <a href="#eligibilite" className="fanienne-link font-semibold">
            {needCta} →
          </a>
        </p>
      </div>
    </section>
  );
}
