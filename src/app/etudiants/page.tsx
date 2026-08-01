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
      title: "Un projet d'études crédible",
      body: "Choix d'école, lettre de motivation et parcours cohérent : nous construisons un dossier qui défend clairement votre projet auprès de Campus France et du consulat.",
    },
    en: {
      title: "A credible study project",
      body: "School choice, motivation letter and a coherent path: we build a file that clearly defends your project before Campus France and the consulate.",
    },
  },
  {
    fr: {
      title: "Moins de refus évitables",
      body: "Pièces incomplètes, entretien mal préparé, ressources mal justifiées : autant d'erreurs que nous anticipons avant le dépôt.",
    },
    en: {
      title: "Fewer avoidable refusals",
      body: "Incomplete documents, a poorly prepared interview, unclear funding: mistakes we anticipate before submission.",
    },
  },
  {
    fr: {
      title: "Une arrivée plus sereine",
      body: "Visa obtenu, il reste le logement, le compte bancaire et les premières démarches. Nous restons avec vous jusqu'à la rentrée.",
    },
    en: {
      title: "A calmer arrival",
      body: "Once the visa is granted, housing, a bank account and first admin steps remain. We stay with you through to day one.",
    },
  },
];

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

const PROMISE = [
  {
    fr: {
      title: "Réponse sous 48 heures",
      body: "Décrivez votre projet d'études. Un conseiller vous répond avec une lecture claire de votre situation.",
    },
    en: {
      title: "Reply within 48 hours",
      body: "Describe your study project. An advisor replies with a clear reading of your situation.",
    },
  },
  {
    fr: {
      title: "Parcours adapté à votre profil",
      body: "Licence, master ou formation professionnelle : l'accompagnement est calé sur votre niveau, votre destination et vos délais.",
    },
    en: {
      title: "A path fitted to your profile",
      body: "Bachelor, master's or vocational training: support is set to your level, destination and timeline.",
    },
  },
  {
    fr: {
      title: "Un interlocuteur dédié",
      body: "Vous avancez avec la même personne, de la candidature jusqu'à votre installation en Europe.",
    },
    en: {
      title: "A dedicated contact",
      body: "You work with the same person from application through to settling in Europe.",
    },
  },
];

export default function EtudiantsPage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Pack Student Care : études et mobilité académique.",
      body: "Depuis Dakar, Tooky Consulting prépare votre visa étudiant Schengen : accompagnement Campus France, contrôle des ressources et de l'hébergement, préparation à l'entretien. Tarif communiqué après évaluation.",
      whyTitle: "Un dossier étudiant solide maximise vos chances.",
      servicesTitle: "Ce que comprend le Pack Student Care.",
      promiseTitle: "Vous décrivez le projet. Nous sécurisons le parcours.",
      promiseBody:
        "Après votre demande, nous indiquons exactement ce qu'il faut pour votre visa étudiant, selon la destination et votre situation, avec double vérification avant dépôt.",
      ctaTitle: "Démarrez votre Pack Student Care.",
      ctaBody:
        "Admission et visa Schengen prennent plusieurs mois. Plus tôt vous commencez à Dakar, plus votre dossier est solide.",
      ctaButton: "Tester mon éligibilité",
    },
    en: {
      title: "Student Care Pack: studies and academic mobility.",
      body: "From Dakar, Tooky Consulting prepares your Schengen student visa: Campus France support, funding and housing checks, interview preparation. Pricing shared after assessment.",
      whyTitle: "A solid student file maximises your chances.",
      servicesTitle: "What the Student Care Pack includes.",
      promiseTitle: "You describe the project. We secure the path.",
      promiseBody:
        "After your request, we tell you exactly what is needed for your student visa, for your destination and situation, with double verification before submission.",
      ctaTitle: "Start your Student Care Pack.",
      ctaBody:
        "Admission and Schengen visa procedures take several months. The earlier you start in Dakar, the stronger your file.",
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
                src={SITE_IMAGES.students}
                alt="Étudiante accompagnée pour un visa Schengen études depuis le Sénégal"
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
                src={SITE_IMAGES.europeCity}
                alt=""
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
