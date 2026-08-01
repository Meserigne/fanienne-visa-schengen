"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

export type TrackCard = {
  href: string;
  image: string;
  imagePosition?: string;
  number: string;
  title: string;
  body: string;
  cta: string;
};

export function TrackPanels({ tracks }: { tracks: TrackCard[] }) {
  return (
    <section className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4">
        {tracks.map((track, i) => (
          <Reveal key={track.href} delay={i * 0.06} className="h-full">
            <Link
              href={track.href}
              className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl sm:min-h-[280px] lg:min-h-[300px]"
            >
              <Image
                src={track.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: track.imagePosition ?? "center center" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(7,17,31,0.05) 0%, rgba(7,17,31,0.18) 40%, rgba(7,17,31,0.72) 70%, rgba(7,17,31,0.96) 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute -right-2 top-4 text-[clamp(2.5rem,8vw,4rem)] leading-none font-semibold tabular-nums opacity-20"
                style={{ fontFamily: "var(--font-display)", color: "var(--c-white)" }}
                aria-hidden
              >
                {track.number}
              </div>

              <div className="relative z-10 flex flex-col gap-1.5 p-5 pt-0 sm:p-6 sm:pt-0">
                <p
                  className="text-[13px] font-semibold tabular-nums"
                  style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-300)" }}
                >
                  {track.number}
                </p>
                <h2
                  className="max-w-[16ch] text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.1] font-semibold tracking-tight text-balance"
                  style={{ fontFamily: "var(--font-display)", color: "var(--c-white)" }}
                >
                  {track.title}
                </h2>
                <p
                  className="max-w-[42ch] text-[14px] leading-[1.5]"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  {track.body}
                </p>
                <span
                  className="mt-1 text-[13px] font-semibold"
                  style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-200)" }}
                >
                  {track.cta} →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
