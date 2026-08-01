"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

const CTA = { fr: "Tester mon éligibilité", en: "Check my eligibility" };

const WHY = [
  {
    fr: {
      title: "Opportunités saisies à temps",
      body: "Un salon manqué ou une négociation reportée, c'est un marché perdu. Nous anticipons les délais consulaires pour que vous soyez présent au bon moment.",
    },
    en: {
      title: "Opportunities seized on time",
      body: "A missed trade fair or postponed negotiation is a lost market. We anticipate consular timelines so you are there at the right moment.",
    },
  },
  {
    fr: {
      title: "Crédibilité de l'entreprise",
      body: "Un dossier d'entreprise structuré (registre, bilans, lettres d'invitation) présente votre PME sous son meilleur jour auprès des consulats.",
    },
    en: {
      title: "Company credibility",
      body: "A structured company file (registration, financials, invitation letters) presents your SME at its best before consulates.",
    },
  },
  {
    fr: {
      title: "Historique de voyage propre",
      body: "Des demandes bien faites construisent un historique favorable, qui facilite chaque visa suivant, jusqu'aux visas de circulation longue durée.",
    },
    en: {
      title: "A clean travel record",
      body: "Well-made applications build a favourable history that eases every next visa, up to long-term multiple-entry visas.",
    },
  },
];

const SERVICES = [
  {
    fr: {
      title: "Visa d'affaires dirigeant",
      body: "Dossier complet du gérant ou dirigeant : documents d'entreprise, invitation du partenaire européen, itinéraire et justificatifs financiers.",
    },
    en: {
      title: "Executive business visa",
      body: "A complete file for the owner or executive: company documents, invitation from the European partner, itinerary and financial proof.",
    },
  },
  {
    fr: {
      title: "Délégations & équipes",
      body: "Gestion groupée des demandes pour vos équipes en déplacement : salons, foires, formations et missions techniques.",
    },
    en: {
      title: "Delegations & teams",
      body: "Grouped applications for travelling teams: trade fairs, exhibitions, training and technical missions.",
    },
  },
  {
    fr: {
      title: "Voyages récurrents",
      body: "Stratégie pour obtenir des visas à entrées multiples et de circulation, adaptée aux entreprises qui voyagent plusieurs fois par an.",
    },
    en: {
      title: "Frequent travel",
      body: "A strategy to obtain multiple-entry and circulation visas, designed for companies that travel several times a year.",
    },
  },
  {
    fr: {
      title: "Logistique du déplacement",
      body: "Assurance conforme Schengen, réservations d'hôtel et de vol, et accompagnement sur place si nécessaire.",
    },
    en: {
      title: "Trip logistics",
      body: "Schengen-compliant insurance, hotel and flight bookings, and on-site support when needed.",
    },
  },
];

const CHECKLIST = {
  fr: [
    "Registre de commerce (RCCM) et NINEA",
    "Bilans et relevés bancaires de l'entreprise",
    "Lettre d'invitation du partenaire ou du salon",
    "Ordre de mission et itinéraire du déplacement",
    "Assurance voyage conforme Schengen",
    "Réservations d'hébergement et de transport",
  ],
  en: [
    "Business registration (RCCM) and tax ID (NINEA)",
    "Company financial statements and bank records",
    "Invitation letter from the partner or trade fair",
    "Mission order and travel itinerary",
    "Schengen-compliant travel insurance",
    "Accommodation and transport bookings",
  ],
};

export default function EntreprisesPage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Vos affaires en Europe, sans frontière administrative.",
      body: "Salons professionnels, négociations, partenariats, prospection : Fanienne prépare les visas d'affaires de vos dirigeants et équipes pour que vos opportunités ne dépendent plus d'un refus de visa.",
      whyTitle: "Un refus de visa coûte plus cher qu'un dossier bien préparé.",
      servicesTitle: "Du dossier individuel à la délégation complète.",
      checklistTitle: "Ce que nous réunissons pour votre PME.",
      checklistBody:
        "Liste indicative : l'évaluation gratuite établit la liste exacte selon la destination, l'objet du voyage et la situation de votre entreprise.",
      ctaTitle: "Parlez-nous de votre prochain déplacement d'affaires.",
      ctaBody:
        "Chaque mission est étudiée sur devis. Décrivez votre projet : un conseiller vous répond sous 48 heures.",
      ctaButton: "Demander un devis gratuit",
    },
    en: {
      title: "Your business in Europe, without administrative borders.",
      body: "Trade fairs, negotiations, partnerships, prospecting: Fanienne prepares business visas for your executives and teams so your opportunities no longer depend on a visa refusal.",
      whyTitle: "A visa refusal costs more than a well-prepared file.",
      servicesTitle: "From a single file to a full delegation.",
      checklistTitle: "What we assemble for your SME.",
      checklistBody:
        "An indicative list: the free assessment establishes the exact list for your destination, travel purpose and company situation.",
      ctaTitle: "Tell us about your next business trip.",
      ctaBody:
        "Every mission is quoted individually. Describe your project: an advisor replies within 48 hours.",
      ctaButton: "Request a free quote",
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
              "radial-gradient(ellipse 65% 55% at 15% 30%, rgba(36,80,232,0.4), transparent 60%)",
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
              className="mb-6 max-w-[18ch] text-[clamp(2.1rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
            >
              {t.title}
            </h1>
            <p
              className="mb-8 max-w-[50ch] text-[17px] leading-[1.7]"
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
                src="https://picsum.photos/seed/fanienne-entreprises-eu/1000/800"
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

      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <Reveal>
          <h2
            className="mb-12 max-w-[24ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.whyTitle}
          </h2>
        </Reveal>
        <div
          className="grid grid-cols-1 border-t md:grid-cols-3"
          style={{ borderColor: "var(--border-strong)" }}
        >
          {WHY.map((item, i) => (
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
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                  {item[lang].body}
                </p>
              </div>
            </Reveal>
          ))}
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
          <div className="flex flex-col">
            {SERVICES.map((s, i) => (
              <Reveal key={s.fr.title} delay={i * 0.04}>
                <div
                  className="grid grid-cols-1 gap-3 border-t py-8 sm:grid-cols-[72px_1fr] sm:gap-8"
                  style={{ borderColor: "var(--border-default)" }}
                >
                  <p
                    className="text-[14px] font-semibold tabular-nums"
                    style={{ fontFamily: "var(--font-display)", color: "var(--c-cobalt-500)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3
                      className="mb-2 text-[22px] font-semibold tracking-tight sm:text-[24px]"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                    >
                      {s[lang].title}
                    </h3>
                    <p
                      className="max-w-[56ch] text-[15px] leading-[1.7]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {s[lang].body}
                    </p>
                  </div>
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
            className="mx-auto mb-5 max-w-[22ch] text-[clamp(1.85rem,3.5vw,3rem)] font-semibold tracking-tight text-balance"
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
