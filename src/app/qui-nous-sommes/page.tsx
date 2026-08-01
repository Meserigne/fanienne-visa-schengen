"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { SITE_IMAGES } from "@/lib/site-images";

const CTA = { fr: "Tester mon éligibilité", en: "Check my eligibility" };

const VALUES = [
  {
    fr: {
      title: "Clarté",
      body: "Pas de jargon inutile. Nous vous disons ce qui est réaliste, ce qui manque, et la prochaine étape concrète.",
    },
    en: {
      title: "Clarity",
      body: "No useless jargon. We tell you what is realistic, what is missing, and the next concrete step.",
    },
  },
  {
    fr: {
      title: "Rigueur",
      body: "Chaque pièce est vérifiée. Un dossier soigné réduit les refus évitables et renforce votre historique de voyage.",
    },
    en: {
      title: "Rigour",
      body: "Every document is checked. A careful file reduces avoidable refusals and strengthens your travel record.",
    },
  },
  {
    fr: {
      title: "Proximité",
      body: "Basés à Dakar, nous connaissons le terrain sénégalais, les délais locaux et les attentes des consulats européens.",
    },
    en: {
      title: "Proximity",
      body: "Based in Dakar, we know the Senegalese context, local timelines and what European consulates expect.",
    },
  },
];

const AUDIENCES = [
  {
    href: "/etudiants",
    fr: { title: "Étudiants", body: "Admission, visa d'études, Campus France et installation." },
    en: { title: "Students", body: "Admission, study visa, Campus France and settling in." },
  },
  {
    href: "/entreprises",
    fr: { title: "Entreprises", body: "Visa d'affaires pour dirigeants, équipes et délégations." },
    en: { title: "Businesses", body: "Business visas for executives, teams and delegations." },
  },
  {
    href: "/artistes",
    fr: { title: "Artistes", body: "Festivals, résidences, tournées et projets culturels." },
    en: { title: "Artists", body: "Festivals, residencies, tours and cultural projects." },
  },
];

export default function AboutPage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Qui nous sommes.",
      body: "Fanienne est un cabinet d'accompagnement visa Schengen basé à Dakar. Nous aidons étudiants, artistes et PME sénégalaises à préparer des dossiers solides pour l'Europe.",
      missionTitle: "Notre mission.",
      missionLead:
        "Transformer un projet de voyage, d'études, d'affaires ou de création en dossier consulaire clair, complet et crédible.",
      missionBody:
        "Depuis Dakar, nous accompagnons chaque étape : lecture de votre situation, préparation des pièces, préparation à l'entretien, suivi jusqu'à la décision. Vous avancez avec une méthode concrète, des délais anticipés et un interlocuteur dédié.",
      missionNote:
        "Fanienne est un cabinet de conseil indépendant. Nous ne délivrons pas de visas : la décision appartient aux autorités consulaires. Notre rôle est de vous mettre dans les meilleures conditions pour réussir.",
      missionPoints: [
        "Évaluer votre profil et vous dire clairement ce qui est réaliste",
        "Structurer un dossier lisible pour le consulat, sans pièce inutile",
        "Vous préparer à l'entretien et suivre la demande jusqu'à la réponse",
      ],
      valuesTitle: "Ce qui nous guide.",
      audiencesTitle: "Pour qui nous travaillons.",
      ctaTitle: "Parlez-nous de votre projet.",
      ctaBody:
        "Évaluation gratuite sous 48 heures. Décrivez votre situation : un conseiller Fanienne vous répond.",
      ctaButton: "Tester mon éligibilité",
    },
    en: {
      title: "Who we are.",
      body: "Fanienne is a Schengen visa consultancy based in Dakar. We help Senegalese students, artists and SMEs prepare solid files for Europe.",
      missionTitle: "Our mission.",
      missionLead:
        "Turn a travel, study, business or creative project into a clear, complete and credible consular file.",
      missionBody:
        "From Dakar, we support every step: reading your situation, preparing documents, interview coaching, follow-up until the decision. You move forward with a concrete method, anticipated timelines and a dedicated contact.",
      missionNote:
        "Fanienne is an independent advisory firm. We do not issue visas: decisions belong to consular authorities. Our role is to put you in the best position to succeed.",
      missionPoints: [
        "Assess your profile and tell you clearly what is realistic",
        "Structure a file consulates can read, without unnecessary documents",
        "Prepare you for the interview and follow the application until the answer",
      ],
      valuesTitle: "What guides us.",
      audiencesTitle: "Who we work with.",
      ctaTitle: "Tell us about your project.",
      ctaBody:
        "Free assessment within 48 hours. Describe your situation: a Fanienne advisor replies.",
      ctaButton: "Check my eligibility",
    },
  }[lang];

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
              "radial-gradient(ellipse 65% 55% at 20% 30%, rgba(36,80,232,0.4), transparent 60%)",
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
              Fanienne
            </p>
            <h1
              className="mb-6 max-w-[14ch] text-[clamp(2.1rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
            >
              {t.title}
            </h1>
            <p
              className="mb-8 max-w-[50ch] text-[19px] leading-[1.7]"
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
              {CTA[lang]}
            </Link>
          </Reveal>
          <Reveal className="relative lg:col-span-5" delay={0.1}>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={SITE_IMAGES.about}
                alt={
                  lang === "fr"
                    ? "Équipe Fanienne - cabinet d'accompagnement visa Schengen à Dakar"
                    : "Fanienne team - Schengen visa consultancy in Dakar"
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
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.missionTitle}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.06}>
            <p
              className="mb-7 max-w-[28ch] text-[clamp(1.65rem,3vw,2.35rem)] leading-[1.25] font-semibold tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
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
              {t.missionPoints.map((point) => (
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
              style={{ borderColor: "var(--border-default)", color: "var(--text-muted)" }}
            >
              {t.missionNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="border-y px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
        style={{ background: "var(--color-bg-sunken)", borderColor: "var(--border-default)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2
              className="mb-12 max-w-[18ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.valuesTitle}
            </h2>
          </Reveal>
          <div
            className="grid grid-cols-1 border-t md:grid-cols-3"
            style={{ borderColor: "var(--border-strong)" }}
          >
            {VALUES.map((item, i) => (
              <Reveal key={item.fr.title} delay={i * 0.06}>
                <div
                  className="border-b px-0 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"
                  style={{ borderColor: "var(--border-default)" }}
                >
                  <h3
                    className="mb-3 text-[22px] font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {item[lang].title}
                  </h3>
                  <p className="text-[17px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                    {item[lang].body}
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
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.audiencesTitle}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-0 border-t sm:grid-cols-3" style={{ borderColor: "var(--border-strong)" }}>
          {AUDIENCES.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.05}>
              <Link
                href={item.href}
                className={`group block border-b px-0 py-9 transition-opacity hover:opacity-80 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0 sm:first:pl-0 sm:last:pr-0 ${
                  i === AUDIENCES.length - 1 ? "border-b-0" : ""
                }`}
                style={{ borderColor: "var(--border-default)" }}
              >
                <p
                  className="mb-3 text-[14px] font-semibold tabular-nums"
                  style={{ fontFamily: "var(--font-display)", color: "var(--c-cobalt-500)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="mb-3 text-[24px] font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {item[lang].title}
                </h3>
                <p className="mb-4 text-[17px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                  {item[lang].body}
                </p>
                <span
                  className="text-[15px] font-semibold"
                  style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-600)" }}
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
            style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
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
