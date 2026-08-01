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
      title: "Un projet artistique clair",
      body: "Invitation, contrat, programme de tournée ou résidence : nous structurons votre dossier culturel pour qu'il soit lisible par le consulat.",
    },
    en: {
      title: "A clear artistic project",
      body: "Invitation, contract, tour schedule or residency: we structure your cultural file so consulates can read it clearly.",
    },
  },
  {
    fr: {
      title: "Preuves de professionnalisme",
      body: "Portfolio, presse, cachets, lettres d'organismes : nous réunissons les éléments qui montrent que vous êtes attendu en Europe pour créer, pas pour y rester illégalement.",
    },
    en: {
      title: "Proof of professionalism",
      body: "Portfolio, press, fees, organiser letters: we gather what shows you are expected in Europe to create, not to stay unlawfully.",
    },
  },
  {
    fr: {
      title: "Des délais respectés",
      body: "Festivals et tournées ne se reportent pas. Nous anticipons les délais consulaires pour que vous soyez sur scène à la bonne date.",
    },
    en: {
      title: "Deadlines kept",
      body: "Festivals and tours do not wait. We anticipate consular timelines so you are on stage on the right date.",
    },
  },
];

const SERVICES = [
  {
    fr: {
      title: "Festivals & représentations",
      body: "Visa pour concerts, expositions, festivals et spectacles en Europe, avec invitation de l'organisateur et itinerary du séjour.",
    },
    en: {
      title: "Festivals & performances",
      body: "Visa for concerts, exhibitions, festivals and shows in Europe, with organiser invitation and stay itinerary.",
    },
  },
  {
    fr: {
      title: "Résidences artistiques",
      body: "Dossier pour résidences, workshops et programmes culturels : lettre d'accueil, durée, financement et retour au Sénégal.",
    },
    en: {
      title: "Artist residencies",
      body: "File for residencies, workshops and cultural programmes: host letter, duration, funding and return to Senegal.",
    },
  },
  {
    fr: {
      title: "Tournées & délégations",
      body: "Gestion des demandes pour groupes, troupes et équipes techniques en déplacement sur plusieurs villes européennes.",
    },
    en: {
      title: "Tours & delegations",
      body: "Managing applications for groups, companies and technical crews travelling across several European cities.",
    },
  },
  {
    fr: {
      title: "Logistique du séjour",
      body: "Assurance conforme Schengen, hébergement, billets et suivi jusqu'à la décision pour partir l'esprit libre.",
    },
    en: {
      title: "Trip logistics",
      body: "Schengen-compliant insurance, housing, tickets and follow-up until the decision, so you leave with a clear mind.",
    },
  },
];

const PROMISE = [
  {
    fr: {
      title: "Réponse sous 48 heures",
      body: "Décrivez votre projet culturel. Un conseiller vous répond avec une lecture claire de votre situation.",
    },
    en: {
      title: "Reply within 48 hours",
      body: "Describe your cultural project. An advisor replies with a clear reading of your situation.",
    },
  },
  {
    fr: {
      title: "Dossier calé sur votre art",
      body: "Musique, arts visuels, danse, cinéma ou littérature : l'accompagnement s'adapte à votre discipline et à vos dates.",
    },
    en: {
      title: "A file fitted to your art",
      body: "Music, visual arts, dance, film or literature: support adapts to your discipline and your dates.",
    },
  },
  {
    fr: {
      title: "Un interlocuteur dédié",
      body: "Vous avancez avec la même personne, de la première invitation jusqu'à la décision consulaire.",
    },
    en: {
      title: "A dedicated contact",
      body: "You work with the same person from the first invitation through to the consular decision.",
    },
  },
];

export default function ArtistesPage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Visa Schengen pour artistes et projets culturels.",
      body: "Festivals, résidences, tournées, expositions : depuis Dakar, Fabienne prépare le visa Schengen des artistes sénégalais pour que la scène européenne ne soit plus bloquée par un dossier incomplet.",
      whyTitle: "Un projet culturel mérite un dossier à la hauteur.",
      servicesTitle: "De la scène solo à la tournée complète.",
      promiseTitle: "Vous décrivez le projet. Nous vous disons comment avancer.",
      promiseBody:
        "Pas de liste de pièces à l'avance. Après votre demande, nous indiquons exactement ce qu'il faut pour votre visa artiste, selon la destination et le type de projet.",
      ctaTitle: "Parlez-nous de votre prochain projet en Europe.",
      ctaBody:
        "Chaque dossier artistique est étudié sur devis. Décrivez votre invitation ou votre résidence : un conseiller vous répond sous 48 heures.",
      ctaButton: "Tester mon éligibilité",
    },
    en: {
      title: "Schengen visa for artists and cultural projects.",
      body: "Festivals, residencies, tours, exhibitions: from Dakar, Fabienne prepares Schengen visas for Senegalese artists so the European stage is no longer blocked by an incomplete file.",
      whyTitle: "A cultural project deserves a file that matches it.",
      servicesTitle: "From a solo stage to a full tour.",
      promiseTitle: "You describe the project. We tell you how to move forward.",
      promiseBody:
        "No document list upfront. After your request, we tell you exactly what is needed for your artist visa, for your destination and project type.",
      ctaTitle: "Tell us about your next project in Europe.",
      ctaBody:
        "Every artistic file is quoted individually. Describe your invitation or residency: an advisor replies within 48 hours.",
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
              "radial-gradient(ellipse 65% 55% at 85% 25%, rgba(36,80,232,0.4), transparent 60%)",
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
                src={SITE_IMAGES.artists}
                alt={
                  lang === "fr"
                    ? "Danse africaine traditionnelle avec masque - visa Schengen artistes"
                    : "Traditional African masked dance - Schengen artist visa"
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
                src={SITE_IMAGES.artistsStudio}
                alt={
                  lang === "fr"
                    ? "Atelier d'artiste et préparation de visa culturel Schengen"
                    : "Artist studio and Schengen cultural visa preparation"
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
