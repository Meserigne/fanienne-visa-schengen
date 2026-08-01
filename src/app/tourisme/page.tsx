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
      title: "Un motif de voyage lisible",
      body: "Tourisme ou visite familiale : nous clarifions l'itinéraire, les liens familiaux et le retour au Sénégal pour que le consulat comprenne immédiatement votre projet.",
    },
    en: {
      title: "A readable travel purpose",
      body: "Tourism or family visit: we clarify the itinerary, family ties and return to Senegal so the consulate immediately understands your plan.",
    },
  },
  {
    fr: {
      title: "Des pièces vraiment conformes",
      body: "Réservations d'hôtel et de billets, assurance, preuves de ressources : nous vérifions chaque élément avant le dépôt pour éviter les refus évitables.",
    },
    en: {
      title: "Documents that actually comply",
      body: "Hotel and flight bookings, insurance, proof of funds: we check every item before submission to avoid preventable refusals.",
    },
  },
  {
    fr: {
      title: "Un RDV sans improviser",
      body: "Prise de rendez-vous, checklist personnalisée et suivi jusqu'à la décision : vous avancez avec un interlocuteur, pas une liste générique.",
    },
    en: {
      title: "An appointment without improvising",
      body: "Appointment booking, a personalised checklist and follow-up until the decision: you move forward with one contact, not a generic list.",
    },
  },
];

const SERVICES = [
  {
    fr: {
      title: "Analyse du profil",
      body: "Lecture de votre situation (historique de visas, ressources, motif) pour identifier les points faibles avant même de constituer le dossier.",
    },
    en: {
      title: "Profile review",
      body: "A reading of your situation (visa history, funds, purpose) to spot weak points before the file is even built.",
    },
  },
  {
    fr: {
      title: "Préparation du dossier",
      body: "Constitution et contrôle du dossier de court séjour : pièces personnelles, financières et justificatifs de voyage, prêts pour le dépôt.",
    },
    en: {
      title: "File preparation",
      body: "Building and checking your short-stay file: personal and financial documents plus travel proofs, ready for submission.",
    },
  },
  {
    fr: {
      title: "Réservations conformes",
      body: "Aide aux réservations d'hôtel et de billets alignées sur votre itinéraire, pour des preuves cohérentes aux yeux du consulat.",
    },
    en: {
      title: "Compliant bookings",
      body: "Help with hotel and flight bookings aligned to your itinerary, so your proofs stay coherent for the consulate.",
    },
  },
  {
    fr: {
      title: "Assurance & prise de RDV",
      body: "Souscription d'une assurance voyage Schengen conforme et prise de rendez-vous auprès du centre compétent.",
    },
    en: {
      title: "Insurance & appointment",
      body: "Arranging Schengen-compliant travel insurance and booking your appointment at the right centre.",
    },
  },
];

const PROMISE = [
  {
    fr: {
      title: "Réponse sous 48 heures",
      body: "Décrivez votre projet de voyage. Un conseiller vous répond avec une lecture claire de votre situation.",
    },
    en: {
      title: "Reply within 48 hours",
      body: "Describe your travel plan. An advisor replies with a clear reading of your situation.",
    },
  },
  {
    fr: {
      title: "Formule Essentielle",
      body: "Un accompagnement clé en main pour le court séjour : tourisme ou famille, avec un périmètre de prestation clair dès le départ.",
    },
    en: {
      title: "Essential Plan",
      body: "End-to-end support for short stays: tourism or family, with a clear service scope from day one.",
    },
  },
  {
    fr: {
      title: "Un interlocuteur dédié",
      body: "Vous avancez avec la même personne, de l'analyse du profil jusqu'à la décision consulaire.",
    },
    en: {
      title: "A dedicated contact",
      body: "You work with the same person from the profile review through to the consular decision.",
    },
  },
];

export default function TourismePage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Visa tourisme & famille : un dossier conforme, sans stress.",
      body: "Depuis Dakar, Tooky Consulting accompagne votre visa Schengen de court séjour pour le tourisme ou les visites familiales : analyse du profil, réservations d'hôtel et de billets, assurance et prise de RDV. Tarif communiqué après évaluation.",
      whyTitle: "Un séjour en Europe commence par un dossier solide.",
      servicesTitle: "Le Formule Essentielle, de l'analyse au rendez-vous.",
      promiseTitle: "Vous décrivez le voyage. Nous vous disons comment avancer.",
      promiseBody:
        "Pas de liste de pièces à l'avance. Après votre demande, nous indiquons exactement ce qu'il faut pour votre visa tourisme ou famille, selon la destination et votre situation.",
      ctaTitle: "Démarrez votre Formule Essentielle dès aujourd'hui.",
      ctaBody:
        "Court séjour, tourisme ou visite familiale : plus tôt vous structurez le dossier à Dakar, plus il est cohérent le jour du dépôt.",
      ctaButton: "Tester mon éligibilité",
    },
    en: {
      title: "Tourism & family visa: a compliant file, without the stress.",
      body: "From Dakar, Tooky Consulting supports your Schengen short-stay visa for tourism or family visits: profile review, hotel and flight bookings, insurance and appointment booking. Pricing shared after assessment.",
      whyTitle: "A trip to Europe starts with a solid file.",
      servicesTitle: "The Essential Plan, from review to appointment.",
      promiseTitle: "You describe the trip. We tell you how to move forward.",
      promiseBody:
        "No document list upfront. After your request, we tell you exactly what is needed for your tourism or family visa, for your destination and situation.",
      ctaTitle: "Start your Essential Plan today.",
      ctaBody:
        "Short stay, tourism or family visit: the earlier you structure the file in Dakar, the more coherent it is on submission day.",
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
              TOOKY CONSULTING
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
                src={SITE_IMAGES.tourism}
                alt={
                  lang === "fr"
                    ? "Voyage en Europe — visa Schengen tourisme et famille depuis le Sénégal"
                    : "Travel in Europe — Schengen tourism and family visa from Senegal"
                }
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
            <div className="relative aspect-[5/4] overflow-hidden lg:aspect-[4/3]">
              <Image
                src={SITE_IMAGES.tourismDetail}
                alt={
                  lang === "fr"
                    ? "Préparation d'un voyage — Formule Essentielle visa tourisme Schengen"
                    : "Trip preparation — Essential Plan Schengen tourism visa"
                }
                fill
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
