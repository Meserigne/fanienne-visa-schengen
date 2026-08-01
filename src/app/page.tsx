"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EligibilityForm } from "@/components/eligibility-form";
import { ParallaxHero } from "@/components/ui/parallax-scrolling";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    fr: {
      title: "Constitution & vérification du dossier",
      body: "Liste personnalisée des pièces, vérification ligne par ligne et mise en conformité avant dépôt au consulat.",
    },
    en: {
      title: "File preparation & review",
      body: "A personalised document checklist, line-by-line review and full compliance before submission.",
    },
  },
  {
    fr: {
      title: "Préparation à l'entretien",
      body: "Simulations d'entretien consulaire, questions types et conseils pour présenter votre projet avec assurance.",
    },
    en: {
      title: "Interview coaching",
      body: "Mock consular interviews, typical questions and guidance to present your project with confidence.",
    },
  },
  {
    fr: {
      title: "Suivi de la demande",
      body: "Suivi de votre dossier après dépôt, relances et information en temps réel jusqu'à la décision.",
    },
    en: {
      title: "Application tracking",
      body: "Follow-up after submission, reminders and real-time updates until the decision.",
    },
  },
  {
    fr: {
      title: "Assurance voyage & réservations",
      body: "Assurance conforme Schengen, réservations d'hébergement et de vol acceptées par les consulats.",
    },
    en: {
      title: "Travel insurance & bookings",
      body: "Schengen-compliant insurance, accommodation and flight bookings accepted by consulates.",
    },
  },
  {
    fr: {
      title: "Accompagnement post-visa",
      body: "Logement, installation et premières démarches sur place, pour un séjour serein dès l'arrivée.",
    },
    en: {
      title: "Post-visa support",
      body: "Housing, settling in and first administrative steps on arrival, for a smooth start.",
    },
  },
];

const STEPS = [
  {
    fr: {
      label: "01",
      title: "Évaluation gratuite",
      body: "Vous remplissez le formulaire d'éligibilité ; nous analysons votre profil sous 48 h.",
    },
    en: {
      label: "01",
      title: "Free assessment",
      body: "Fill in the eligibility form; we review your profile within 48 hours.",
    },
  },
  {
    fr: {
      label: "02",
      title: "Préparation du dossier",
      body: "Constitution, vérification et mise en conformité de chaque pièce de votre demande.",
    },
    en: {
      label: "02",
      title: "File preparation",
      body: "We assemble, review and bring every document of your application into compliance.",
    },
  },
  {
    fr: {
      label: "03",
      title: "Dépôt & entretien",
      body: "Rendez-vous au consulat, entretien préparé, dépôt accompagné de votre demande.",
    },
    en: {
      label: "03",
      title: "Submission & interview",
      body: "Consulate appointment, prepared interview, supported submission of your application.",
    },
  },
  {
    fr: {
      label: "04",
      title: "Décision & départ",
      body: "Suivi jusqu'à la décision, puis accompagnement pour votre installation en Europe.",
    },
    en: {
      label: "04",
      title: "Decision & departure",
      body: "Follow-up until the decision, then support for settling in Europe.",
    },
  },
];

export default function Home() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      track1Title: "Étudiants",
      track1Body:
        "Admissions, visa d'études, préparation à l'entretien et installation en Europe. Un accompagnement complet, de la candidature à votre première rentrée.",
      track1Cta: "Parcours étudiant",
      track2Title: "Entreprises, PME & PMI",
      track2Body:
        "Visas d'affaires pour vos dirigeants et équipes : salons, négociations, partenariats. Voyagez pour affaires sans refus évitable.",
      track2Cta: "Parcours entreprise",
      servicesTitle: "Un dossier préparé avec rigueur, à chaque étape.",
      needTitle: "Un besoin particulier ?",
      needBody: "Chaque situation est étudiée sur devis, sans engagement.",
      needCta: "Demander un devis",
      howTitle: "Quatre étapes, un seul interlocuteur.",
      partnersLabel: "Ils nous font confiance",
      partnerLogo: "Partenaire",
    },
    en: {
      track1Title: "Students",
      track1Body:
        "Admissions, study visa, interview coaching and settling in Europe. Full support from application to your first day of class.",
      track1Cta: "Student track",
      track2Title: "Businesses, SMEs",
      track2Body:
        "Business visas for your executives and teams: trade fairs, negotiations, partnerships. Travel without avoidable refusals.",
      track2Cta: "Business track",
      servicesTitle: "A rigorously prepared file, at every step.",
      needTitle: "A specific need?",
      needBody: "Every situation is assessed with a free, no-obligation quote.",
      needCta: "Request a quote",
      howTitle: "Four steps, one point of contact.",
      partnersLabel: "Trusted by schools, agencies and partners",
      partnerLogo: "Partner",
    },
  }[lang];

  return (
    <>
      <SiteHeader />
      <ParallaxHero />

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Link
              href="/etudiants"
              className="group flex h-full flex-col justify-between border-t pt-8 transition-colors"
              style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
            >
              <div>
                <p
                  className="mb-4 text-xs uppercase"
                  style={{
                    fontFamily: "var(--font-ui)",
                    letterSpacing: "0.16em",
                    color: "var(--text-accent)",
                  }}
                >
                  01
                </p>
                <h2
                  className="mb-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.track1Title}
                </h2>
                <p
                  className="max-w-[42ch] text-[16px] leading-[1.7]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t.track1Body}
                </p>
              </div>
              <span
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1"
                style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-600)" }}
              >
                {t.track1Cta}
                <span aria-hidden>→</span>
              </span>
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <Link
              href="/entreprises"
              className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden px-8 py-10 sm:px-12 sm:py-12"
              style={{ background: "var(--surface-inverse)", color: "var(--text-on-dark)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(36,80,232,0.55), transparent 70%)",
                }}
              />
              <div className="relative">
                <p
                  className="mb-4 text-xs uppercase"
                  style={{
                    fontFamily: "var(--font-ui)",
                    letterSpacing: "0.16em",
                    color: "var(--c-cobalt-300)",
                  }}
                >
                  02
                </p>
                <h2
                  className="mb-4 max-w-[16ch] text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.track2Title}
                </h2>
                <p
                  className="max-w-[46ch] text-[16px] leading-[1.7]"
                  style={{ color: "var(--text-on-dark-muted)" }}
                >
                  {t.track2Body}
                </p>
              </div>
              <span
                className="relative mt-10 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1"
                style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-300)" }}
              >
                {t.track2Cta}
                <span aria-hidden>→</span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section
        id="services"
        className="border-y px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
        style={{ background: "var(--color-bg-sunken)", borderColor: "var(--border-default)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2
              className="mb-14 max-w-[22ch] text-[clamp(1.85rem,3.5vw,3rem)] font-semibold tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.servicesTitle}
            </h2>
          </Reveal>

          <div className="flex flex-col">
            {SERVICES.map((s, i) => (
              <Reveal key={s.fr.title} delay={i * 0.04}>
                <div
                  className="grid grid-cols-1 gap-4 border-t py-8 sm:grid-cols-[88px_1fr] sm:gap-10 lg:grid-cols-[88px_minmax(0,0.9fr)_minmax(0,1.1fr)]"
                  style={{ borderColor: "var(--border-default)" }}
                >
                  <p
                    className="text-[15px] font-semibold tabular-nums"
                    style={{ fontFamily: "var(--font-display)", color: "var(--c-cobalt-500)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="text-[22px] font-semibold tracking-tight sm:text-[26px]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {s[lang].title}
                  </h3>
                  <p
                    className="max-w-[56ch] text-[15px] leading-[1.7] sm:col-span-2 lg:col-span-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s[lang].body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-[15px]" style={{ color: "var(--text-secondary)" }}>
            {t.needTitle} {t.needBody}{" "}
            <a href="#eligibilite" className="fanienne-link font-semibold">
              {t.needCta} →
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <Reveal>
          <h2
            className="mb-14 text-[clamp(1.85rem,3.5vw,3rem)] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.howTitle}
          </h2>
        </Reveal>
        <div
          className="grid grid-cols-1 border-t sm:grid-cols-2 xl:grid-cols-4"
          style={{ borderColor: "var(--border-strong)" }}
        >
          {STEPS.map((step, i) => (
            <Reveal key={step.fr.title} delay={i * 0.06}>
              <div
                className="border-b px-0 py-9 sm:border-b-0 sm:border-r sm:px-7 xl:min-h-[280px]"
                style={{
                  borderColor: "var(--border-default)",
                  borderRightWidth: i === STEPS.length - 1 ? 0 : undefined,
                }}
              >
                <p
                  className="mb-5 text-[13px] font-semibold tabular-nums"
                  style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-600)" }}
                >
                  {step[lang].label}
                </p>
                <h3
                  className="mb-3 text-[22px] font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {step[lang].title}
                </h3>
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                  {step[lang].body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="border-t px-6 py-16 text-center sm:px-10 lg:px-14"
        style={{ borderColor: "var(--border-default)" }}
      >
        <Reveal>
          <p
            className="mb-10 text-[14px]"
            style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)" }}
          >
            {t.partnersLabel}
          </p>
          <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex h-14 w-[160px] items-center justify-center border border-dashed text-[12px] uppercase tracking-[0.14em]"
                style={{
                  borderColor: "var(--border-strong)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                {t.partnerLogo}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <EligibilityForm />
      <SiteFooter variant="full" />
    </>
  );
}
