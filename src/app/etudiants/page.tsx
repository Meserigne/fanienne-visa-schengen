"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

const CTA = { fr: "Tester mon éligibilité", en: "Check my eligibility" };

const SERVICES = [
  {
    fr: {
      title: "Choix & admission",
      body: "Sélection des écoles et universités adaptées à votre profil, candidatures et obtention de l'attestation d'admission.",
    },
    en: {
      title: "School choice & admission",
      body: "Selecting schools and universities that fit your profile, handling applications and securing your admission letter.",
    },
  },
  {
    fr: {
      title: "Dossier visa étudiant",
      body: "Constitution du dossier de visa long séjour études : garant financier, hébergement, assurance ; le tout vérifié avant dépôt.",
    },
    en: {
      title: "Student visa file",
      body: "Building your long-stay study visa file: financial sponsor, housing proof, insurance; everything reviewed before submission.",
    },
  },
  {
    fr: {
      title: "Préparation à l'entretien",
      body: "Simulations d'entretien (Campus France, consulat) pour défendre votre projet d'études avec clarté et conviction.",
    },
    en: {
      title: "Interview coaching",
      body: "Mock interviews (Campus France, consulate) so you can defend your study project with clarity and confidence.",
    },
  },
  {
    fr: {
      title: "Installation sur place",
      body: "Recherche de logement, ouverture de compte, premières démarches administratives : une arrivée sereine en Europe.",
    },
    en: {
      title: "Settling in",
      body: "Housing search, bank account, first administrative steps: a smooth arrival in Europe.",
    },
  },
];

const CHECKLIST = {
  fr: [
    "Attestation d'admission ou de préinscription",
    "Justificatifs de ressources ou attestation de garant",
    "Justificatif d'hébergement pour les premiers mois",
    "Assurance santé et voyage conforme Schengen",
    "Diplômes, relevés de notes et lettre de motivation",
    "Passeport valide et photos aux normes",
  ],
  en: [
    "Admission or pre-enrolment letter",
    "Proof of funds or sponsor attestation",
    "Accommodation proof for the first months",
    "Schengen-compliant health & travel insurance",
    "Diplomas, transcripts and motivation letter",
    "Valid passport and compliant photos",
  ],
};

export default function EtudiantsPage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Étudier en Europe, de la candidature à la rentrée.",
      body: "Admission, visa d'études, entretien consulaire, logement : Fanienne vous accompagne pas à pas pour que votre projet d'études ne soit jamais bloqué par un dossier incomplet.",
      servicesTitle: "Un accompagnement complet du projet d'études.",
      checklistTitle: "Les pièces que nous préparons avec vous.",
      checklistBody:
        "Chaque consulat a ses exigences. Cette liste est indicative : lors de l'évaluation gratuite, nous établissons la liste exacte pour votre destination et votre situation.",
      ctaTitle: "Commencez votre projet d'études dès aujourd'hui.",
      ctaBody:
        "Les démarches d'admission et de visa prennent plusieurs mois. Plus tôt vous commencez, plus votre dossier est solide.",
    },
    en: {
      title: "Study in Europe, from application to day one.",
      body: "Admission, study visa, consular interview, housing: Fanienne supports you step by step so your study plans are never blocked by an incomplete file.",
      servicesTitle: "End-to-end support for your study project.",
      checklistTitle: "The documents we prepare with you.",
      checklistBody:
        "Every consulate has its own requirements. This list is indicative: during the free assessment, we draw up the exact list for your destination and situation.",
      ctaTitle: "Start your study project today.",
      ctaBody:
        "Admission and visa procedures take several months. The earlier you start, the stronger your file.",
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
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 85% 20%, rgba(36,80,232,0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-12 px-6 pb-16 sm:px-10 lg:grid-cols-12 lg:px-14 lg:pb-20">
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
              className="mb-6 max-w-[16ch] text-[clamp(2.1rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
            >
              {t.title}
            </h1>
            <p
              className="mb-8 max-w-[48ch] text-[17px] leading-[1.7]"
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
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/fanienne-etudiants-eu/900/1100"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
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
              className="mb-12 max-w-[22ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.servicesTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.fr.title} delay={i * 0.05}>
                <div
                  className={`border-t py-9 ${i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"}`}
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
                    {s[lang].title}
                  </h3>
                  <p
                    className="max-w-[46ch] text-[15px] leading-[1.7]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s[lang].body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-14 lg:py-28">
        <Reveal>
          <h2
            className="mb-5 max-w-[16ch] text-[clamp(1.85rem,3.5vw,2.75rem)] leading-[1.12] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.checklistTitle}
          </h2>
          <p className="max-w-[48ch]" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {t.checklistBody}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-col border-t" style={{ borderColor: "var(--border-strong)" }}>
            {CHECKLIST[lang].map((item) => (
              <div
                key={item}
                className="flex items-baseline gap-4 border-b py-4"
                style={{ borderColor: "var(--border-default)" }}
              >
                <span
                  className="text-[13px] font-semibold"
                  style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-500)" }}
                >
                  ✓
                </span>
                <span style={{ color: "var(--text-primary)" }}>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
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
            {CTA[lang]}
          </Link>
        </Reveal>
      </section>

      <SiteFooter variant="compact" />
    </>
  );
}
