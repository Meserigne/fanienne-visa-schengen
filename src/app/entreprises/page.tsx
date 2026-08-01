"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { SITE_IMAGES } from "@/lib/site-images";

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

const PROMISE = [
  {
    fr: {
      title: "Réponse sous 48 heures",
      body: "Décrivez votre mission. Un conseiller vous répond avec une lecture claire de votre situation.",
    },
    en: {
      title: "Reply within 48 hours",
      body: "Describe your mission. An advisor replies with a clear reading of your situation.",
    },
  },
  {
    fr: {
      title: "Devis adapté à votre déplacement",
      body: "Salon, négociation ou délégation : chaque accompagnement est chiffré selon votre réel besoin.",
    },
    en: {
      title: "A quote fitted to your trip",
      body: "Trade fair, negotiation or delegation: every engagement is priced to your actual need.",
    },
  },
  {
    fr: {
      title: "Un interlocuteur dédié",
      body: "Vous avancez avec la même personne, de la première prise de contact jusqu'à la décision consulaire.",
    },
    en: {
      title: "A dedicated contact",
      body: "You work with the same person from first contact through to the consular decision.",
    },
  },
];

export default function EntreprisesPage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Visa d'affaires Schengen pour PME et PMI.",
      body: "Depuis Dakar, Fabienne prépare le visa Schengen affaires de vos dirigeants et équipes : salons, négociations, partenariats. Pour que vos opportunités ne dépendent plus d'un refus de visa.",
      whyTitle: "Un refus de visa d'affaires coûte plus cher qu'un dossier bien préparé.",
      servicesTitle: "Du visa dirigeant à la délégation complète.",
      promiseTitle: "Vous décrivez la mission. Nous vous disons comment avancer.",
      promiseBody:
        "Pas de liste de pièces à l'avance. Après votre demande, nous indiquons exactement ce qu'il faut pour votre visa d'affaires, selon la destination et l'objet du voyage.",
      ctaTitle: "Parlez-nous de votre prochain déplacement d'affaires.",
      ctaBody:
        "Chaque mission professionnelle est étudiée sur devis. Décrivez votre projet : un conseiller Fabienne vous répond sous 48 heures.",
      ctaButton: "Demander un devis gratuit",
    },
    en: {
      title: "Schengen business visa for SMEs.",
      body: "From Dakar, Fabienne prepares Schengen business visas for your executives and teams: trade fairs, negotiations, partnerships. So your opportunities no longer depend on a visa refusal.",
      whyTitle: "A business visa refusal costs more than a well-prepared file.",
      servicesTitle: "From an executive visa to a full delegation.",
      promiseTitle: "You describe the mission. We tell you how to move forward.",
      promiseBody:
        "No document list upfront. After your request, we tell you exactly what is needed for your business visa, for your destination and travel purpose.",
      ctaTitle: "Tell us about your next business trip.",
      ctaBody:
        "Every professional mission is quoted individually. Describe your project: a Fabienne advisor replies within 48 hours.",
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
              Fabienne
            </p>
            <h1
              className="mb-6 max-w-[18ch] text-[clamp(2.1rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance"
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
                src={SITE_IMAGES.business}
                alt="Dirigeant PME accompagné pour un visa d'affaires Schengen"
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
                <p className="text-[17px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
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
              {lang === "fr" ? "Nos services" : "Our services"}
            </p>
            <h2
              className="max-w-[16ch] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.servicesTitle}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:col-span-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.fr.title} delay={i * 0.05}>
                <article
                  className={`border-t py-9 sm:py-10 ${
                    i % 2 === 0 ? "sm:border-r sm:pr-8 lg:pr-10" : "sm:pl-8 lg:pl-10"
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
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {s[lang].title}
                  </h3>
                  <p
                    className="max-w-[40ch] text-[17px] leading-[1.7]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s[lang].body}
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
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
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
            <div
              className="relative aspect-[5/4] overflow-hidden lg:aspect-[4/3]"
              style={{ background: "var(--c-ink-950)" }}
            >
              <Image
                src={SITE_IMAGES.visaIllustration}
                alt={lang === "fr" ? "Illustration visa Schengen" : "Schengen visa illustration"}
                fill
                unoptimized
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
          {PROMISE.map((item, i) => (
            <Reveal key={item.fr.title} delay={i * 0.06}>
              <div
                className="border-b px-0 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
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
