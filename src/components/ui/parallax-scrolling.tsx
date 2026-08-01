"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useLanguage } from "@/lib/language-context";

const CTA = { fr: "Tester mon éligibilité", en: "Check my eligibility" };

export function ParallaxHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  const t = {
    fr: {
      brand: "Fanienne",
      title: "Voyagez en Europe l'esprit tranquille.",
      body: "Accompagnement visa Schengen pour étudiants et PME sénégalaises, de Dakar jusqu'au départ.",
      ctaSecondary: "Découvrir nos services",
    },
    en: {
      brand: "Fanienne",
      title: "Travel to Europe with peace of mind.",
      body: "Schengen visa support for Senegalese students and SMEs, from Dakar to departure.",
      ctaSecondary: "Explore our services",
    },
  }[lang];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layers = root.querySelector("[data-parallax-layers]");
    const media = root.querySelector("[data-parallax-media]");
    const content = root.querySelector("[data-parallax-content]");

    const ctx = gsap.context(() => {
      if (!reduce && media) {
        gsap.to(media, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: layers,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (!reduce && content) {
        gsap.fromTo(
          content.children,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }
    }, root);

    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    if (!reduce) {
      lenis = new Lenis({ duration: 1.1 });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      ctx.revert();
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
    };
  }, [lang]);

  return (
    <div className="parallax relative" ref={rootRef}>
      <section
        data-parallax-layers
        className="relative flex min-h-[100dvh] items-end overflow-hidden"
        style={{ background: "var(--c-ink-950)" }}
      >
        <div data-parallax-media className="absolute inset-0 will-change-transform">
          <Image
            src="https://picsum.photos/seed/fanienne-atlantic-horizon/1920/1280"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.88 }}
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-veil)" }} />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(36,80,232,0.35), transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-14 lg:pb-24">
          <div
            data-parallax-content
            className="grid max-w-3xl grid-cols-1 gap-6"
            style={{ color: "var(--text-on-dark)" }}
          >
            <p
              className="text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.92] font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.brand}
            </p>
            <h1
              className="max-w-[16ch] text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.title}
            </h1>
            <p
              className="max-w-[42ch] text-[17px] leading-[1.65] sm:text-[18px]"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              {t.body}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#eligibilite"
                className="inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-ui)",
                  background: "var(--brand)",
                  color: "var(--text-on-dark)",
                  boxShadow: "0 12px 32px -12px rgba(36, 80, 232, 0.65)",
                }}
              >
                {CTA[lang]}
              </a>
              <a
                href="#services"
                className="inline-flex items-center text-[15px] font-medium transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: "var(--text-on-dark)",
                  borderBottom: "1px solid color-mix(in oklab, white 45%, transparent)",
                  paddingBottom: 2,
                }}
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--color-bg))",
          }}
        />
      </section>
    </div>
  );
}
