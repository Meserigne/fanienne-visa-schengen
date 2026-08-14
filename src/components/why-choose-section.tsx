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
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "@/components/reveal";

const ITEMS: {
  icon: LucideIcon;
  fr: { title: string; body: string };
  en: { title: string; body: string };
}[] = [
  {
    icon: Target,
    fr: {
      title: "Accompagnement personnalisé",
      body: "Chaque parcours est unique. Nous analysons votre profil en détail pour vous proposer une stratégie sur mesure.",
    },
    en: {
      title: "Personalised support",
      body: "Every path is unique. We analyse your profile in detail to propose a tailored strategy.",
    },
  },
  {
    icon: Search,
    fr: {
      title: "Transparence totale",
      body: "Pas de mauvaises surprises. Nous vous donnons un avis clair et honnête sur la faisabilité de votre dossier dès le départ.",
    },
    en: {
      title: "Full transparency",
      body: "No unpleasant surprises. We give a clear, honest view of your file’s feasibility from the start.",
    },
  },
  {
    icon: Zap,
    fr: {
      title: "Gain de temps précieux",
      body: "Fini le stress des formulaires complexes. Nous gérons la constitution et l'optimisation de votre dossier de A à Z.",
    },
    en: {
      title: "Valuable time saved",
      body: "No more stress over complex forms. We handle building and optimising your file from A to Z.",
    },
  },
  {
    icon: TrendingUp,
    fr: {
      title: "Suivi rigoureux et réactif",
      body: "Restez informé à chaque étape. Notre équipe est à vos côtés pour répondre à vos questions jusqu'au dépôt de votre demande.",
    },
    en: {
      title: "Rigorous, responsive follow-up",
      body: "Stay informed at every step. Our team stays with you until your application is filed.",
    },
  },
  {
    icon: Lightbulb,
    fr: {
      title: "Conseils d'experts adaptés",
      body: "Bénéficiez de recommandations ciblées et conformes aux dernières exigences des services consulaires.",
    },
    en: {
      title: "Expert, tailored advice",
      body: "Get targeted recommendations aligned with the latest consular requirements.",
    },
  },
];

export function WhyChooseSection() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Pourquoi choisir tukki CONSULTING ?",
      subtitle: "La confiance, l'écoute et l'expertise au service de votre projet",
      intro:
        "Nous transformons la complexité des démarches administratives en un parcours simple, fluide et sécurisé.",
      listTitle: "Nos engagements pour votre réussite",
      cta: "Démarrer mon accompagnement",
    },
    en: {
      title: "Why choose tukki CONSULTING?",
      subtitle: "Trust, listening and expertise for your project",
      intro:
        "We turn complex administrative steps into a simple, smooth and secure path.",
      listTitle: "Our commitments to your success",
      cta: "Start my support",
    },
  }[lang];

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
            tukki CONSULTING
          </p>
          <h2
            className="mb-4 max-w-[20ch] text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.1] font-semibold tracking-tight text-balance"
            style={{ fontFamily: "var(--font-display)", color: "var(--c-white)" }}
          >
            {t.title}
          </h2>
          <p
            className="mb-3 max-w-[42ch] text-[18px] font-medium leading-[1.5]"
            style={{ color: "var(--c-cyan-300)" }}
          >
            {t.subtitle}
          </p>
          <p
            className="mb-12 max-w-[52ch] text-[17px] leading-[1.7]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {t.intro}
          </p>
        </Reveal>

        <p
          className="mb-6 text-[13px] font-semibold uppercase"
          style={{
            fontFamily: "var(--font-ui)",
            letterSpacing: "0.14em",
            color: "var(--c-cobalt-400)",
          }}
        >
          {t.listTitle}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            const copy = item[lang];
            return (
              <Reveal key={copy.title}>
                <article
                  className="flex h-full flex-col gap-3 rounded-[1.25rem] border p-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "var(--border-inverse)",
                  }}
                >
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(232, 78, 27, 0.15)",
                      color: "var(--c-cobalt-400)",
                    }}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3
                    className="text-[17px] font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--c-white)" }}
                  >
                    {copy.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65]" style={{ color: "var(--text-on-dark-muted)" }}>
                    {copy.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12">
            <Link
              href="/#eligibilite"
              className="inline-flex items-center rounded-full px-8 py-4 text-[16px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-ui)",
                background: "var(--brand)",
                color: "var(--c-white)",
                boxShadow: "0 12px 32px -12px rgba(232, 78, 27, 0.65)",
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
