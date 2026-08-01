"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "@/components/reveal";
import { SITE_IMAGES } from "@/lib/site-images";

type Track = {
  href: string;
  image: string;
  imagePosition?: string;
  number: string;
  title: string;
  body: string;
  points?: string[];
  cta: string;
  tone: "light" | "dark";
};

export function TrackPanels({
  track1,
  track2,
}: {
  track1: Omit<Track, "number" | "tone" | "href" | "image" | "imagePosition">;
  track2: Omit<Track, "number" | "tone" | "href" | "image" | "imagePosition">;
}) {
  const { lang } = useLanguage();

  const tracks: Track[] = [
    {
      ...track1,
      href: "/etudiants",
      image: SITE_IMAGES.trackStudents,
      imagePosition: "center 20%",
      number: "01",
      tone: "light",
    },
    {
      ...track2,
      href: "/entreprises",
      image: SITE_IMAGES.trackBusiness,
      imagePosition: "center 18%",
      number: "02",
      tone: "dark",
    },
  ];

  return (
    <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        {tracks.map((track, i) => {
          const isDark = track.tone === "dark";
          return (
            <Reveal key={track.href} delay={i * 0.08} className="h-full">
              <Link
                href={track.href}
                className="group relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[1.75rem] sm:min-h-[600px] lg:min-h-[680px]"
              >
                <Image
                  src={track.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: track.imagePosition ?? "center center" }}
                />
                {/* Light top so the person stays visible; text zone only at the bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isDark
                      ? "linear-gradient(180deg, rgba(7,17,31,0.08) 0%, rgba(7,17,31,0.18) 38%, rgba(7,17,31,0.72) 68%, rgba(7,17,31,0.96) 100%)"
                      : "linear-gradient(180deg, rgba(7,17,31,0.05) 0%, rgba(7,17,31,0.15) 40%, rgba(7,17,31,0.7) 70%, rgba(7,17,31,0.94) 100%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute -right-6 top-8 text-[clamp(5rem,14vw,8rem)] leading-none font-semibold tabular-nums opacity-20"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--c-white)",
                  }}
                  aria-hidden
                >
                  {track.number}
                </div>

                <div className="relative z-10 flex flex-col gap-4 p-7 pt-0 sm:p-9 sm:pt-0 lg:p-11 lg:pt-0">
                  <p
                    className="text-[15px] font-semibold tabular-nums"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--c-cobalt-300)",
                    }}
                  >
                    {track.number}
                  </p>
                  <h2
                    className="max-w-[16ch] text-[clamp(2.15rem,4vw,3.15rem)] leading-[1.08] font-semibold tracking-tight text-balance"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-on-dark)",
                    }}
                  >
                    {track.title}
                  </h2>
                  <p
                    className="max-w-[44ch] text-[17px] leading-[1.7] sm:text-[18px]"
                    style={{ color: "var(--text-on-dark-muted)" }}
                  >
                    {track.body}
                  </p>
                  {track.points && track.points.length > 0 && (
                    <ul className="mt-1 flex max-w-[46ch] flex-col gap-2.5">
                      {track.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-[15px] leading-[1.55] sm:text-[16px]"
                          style={{
                            fontFamily: "var(--font-ui)",
                            color: "var(--text-on-dark)",
                          }}
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--c-cobalt-300)" }}
                            aria-hidden
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <span
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-[16px] font-semibold transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      fontFamily: "var(--font-ui)",
                      background: isDark ? "var(--brand)" : "var(--c-white)",
                      color: isDark ? "var(--text-on-dark)" : "var(--text-primary)",
                    }}
                  >
                    {track.cta}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <p className="sr-only">
        {lang === "fr"
          ? "Choisissez votre parcours : étudiants ou entreprises."
          : "Choose your track: students or businesses."}
      </p>
    </section>
  );
}
