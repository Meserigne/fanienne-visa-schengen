"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { SITE_IMAGES } from "@/lib/site-images";

const CTA = { fr: "Envoyer ma demande", en: "Send my request" };

const WHY = [
  {
    fr: {
      title: "Des délais qui comptent vraiment",
      body: "Quand les soins ne peuvent pas attendre, un dossier mal cadré fait perdre des semaines. Nous priorisons les pièces et le calendrier consulaire.",
    },
    en: {
      title: "Timelines that truly matter",
      body: "When care cannot wait, a poorly framed file costs weeks. We prioritise documents and the consular calendar.",
    },
  },
  {
    fr: {
      title: "Un parcours médical crédible",
      body: "Devis, lettre d'admission, C.I.A. : nous structurons les preuves hospitalières pour que le motif médical soit incontestable.",
    },
    en: {
      title: "A credible medical path",
      body: "Quotes, admission letter, evacuation paperwork: we structure hospital proofs so the medical purpose is beyond doubt.",
    },
  },
  {
    fr: {
      title: "Une coordination jusqu'en Europe",
      body: "Hôpitaux, accompagnants, dates de traitement : nous restons l'interlocuteur unique entre Dakar et l'établissement européen.",
    },
    en: {
      title: "Coordination through to Europe",
      body: "Hospitals, companions, treatment dates: we remain the single contact between Dakar and the European facility.",
    },
  },
];

const SERVICES = [
  {
    fr: {
      title: "Urgence & priorisation",
      body: "Traitement accéléré de votre demande : lecture rapide du dossier, priorisation des pièces critiques et calendrier adapté à l'urgence médicale.",
    },
    en: {
      title: "Urgency & prioritisation",
      body: "Accelerated handling of your request: a fast file review, prioritising critical documents and a timeline fitted to medical urgency.",
    },
  },
  {
    fr: {
      title: "Accords hospitaliers",
      body: "Vérification des devis, lettres d'admission et accords d'établissement en Europe, pour un motif de soins clairement documenté.",
    },
    en: {
      title: "Hospital agreements",
      body: "Checking quotes, admission letters and facility agreements in Europe, so the care purpose is clearly documented.",
    },
  },
  {
    fr: {
      title: "Constitution du dossier médical",
      body: "Assemblage du dossier visa médical Schengen : pièces médicales, financières et de voyage, contrôlées avant dépôt.",
    },
    en: {
      title: "Building the medical file",
      body: "Assembling your Schengen medical visa file: medical, financial and travel documents, reviewed before submission.",
    },
  },
  {
    fr: {
      title: "Coordination Europe",
      body: "Suivi avec les hôpitaux européens, les accompagnants et le centre de visa jusqu'à la décision, pour que le parcours de soins démarre à temps.",
    },
    en: {
      title: "Europe coordination",
      body: "Follow-up with European hospitals, companions and the visa centre until the decision, so care can start on time.",
    },
  },
];

const PROMISE = [
  {
    fr: {
      title: "Réponse sous 48 heures",
      body: "Décrivez la situation médicale. Un conseiller vous répond avec une lecture claire de votre dossier et des prochaines étapes.",
    },
    en: {
      title: "Reply within 48 hours",
      body: "Describe the medical situation. An advisor replies with a clear reading of your file and next steps.",
    },
  },
  {
    fr: {
      title: "Formule Urgence Santé",
      body: "Un accompagnement accéléré pour les soins spécialisés et la C.I.A., avec un périmètre de prestation clair dès le premier échange.",
    },
    en: {
      title: "Health Priority Plan",
      body: "Accelerated support for specialised care and medical evacuation, with a clear service scope from the first exchange.",
    },
  },
  {
    fr: {
      title: "Un interlocuteur dédié",
      body: "Vous avancez avec la même personne, de la première pièce médicale jusqu'à la décision consulaire.",
    },
    en: {
      title: "A dedicated contact",
      body: "You work with the same person from the first medical document through to the consular decision.",
    },
  },
];

export default function SantePage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Quand les soins ne peuvent pas attendre, le dossier non plus.",
      body: "Depuis Dakar, Tooky Consulting accélère votre visa pour soins spécialisés ou C.I.A. : devis hospitaliers, admission et coordination avec les établissements en Europe.",
      whyTitle: "La santé impose le rythme. Le dossier doit suivre.",
      servicesTitle: "La formule Urgence Santé, de l'hôpital au visa.",
      promiseTitle: "Vous décrivez la situation. Nous structurons le dossier.",
      promiseBody:
        "Après votre demande, nous indiquons exactement ce qu'il faut pour votre visa médical, selon l'établissement, la destination et l'urgence.",
      ctaTitle: "Parlez-nous de la situation médicale.",
      ctaBody:
        "Délais serrés : plus tôt le dossier est structuré à Dakar, plus vite le parcours de soins peut démarrer. Tarif communiqué après évaluation.",
      ctaButton: "Envoyer ma demande",
    },
    en: {
      title: "When care cannot wait, neither can the file.",
      body: "From Dakar, Tooky Consulting accelerates your visa for specialised care or medical evacuation: hospital quotes, admission and coordination with facilities in Europe.",
      whyTitle: "Health sets the pace. The file must keep up.",
      servicesTitle: "The Health Priority plan, from hospital to visa.",
      promiseTitle: "You describe the situation. We structure the file.",
      promiseBody:
        "After your request, we tell you exactly what is needed for your medical visa, for the facility, destination and urgency.",
      ctaTitle: "Tell us about the medical situation.",
      ctaBody:
        "Tight timelines: the earlier the file is structured in Dakar, the sooner care can begin. Pricing shared after assessment.",
      ctaButton: "Send my request",
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
                src={SITE_IMAGES.medical}
                alt={
                  lang === "fr"
                    ? "Soins médicaux en Europe, visa Schengen médical depuis le Sénégal"
                    : "Medical care in Europe, Schengen medical visa from Senegal"
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
                src={SITE_IMAGES.medicalDetail}
                alt={
                  lang === "fr"
                    ? "Parcours hospitalier, Formule Urgence Santé visa médical Schengen"
                    : "Hospital pathway, Health Priority Plan Schengen medical visa"
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
