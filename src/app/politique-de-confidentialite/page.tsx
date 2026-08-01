"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

type Section = {
  fr: { title: string; paragraphs: string[] };
  en: { title: string; paragraphs: string[] };
};

const SECTIONS: Section[] = [
  {
    fr: {
      title: "1. Qui est responsable ?",
      paragraphs: [
        "Tooky Consulting, cabinet d'accompagnement visa Schengen basé à Dakar (Sénégal), est responsable du traitement des données personnelles collectées via ce site et lors de nos échanges (formulaire, e-mail).",
        "Contact : contact@tookyconsulting.com",
      ],
    },
    en: {
      title: "1. Who is responsible?",
      paragraphs: [
        "Tooky Consulting, a Schengen visa consultancy based in Dakar (Senegal), is responsible for personal data collected through this website and in our exchanges (form, email).",
        "Contact: contact@tookyconsulting.com",
      ],
    },
  },
  {
    fr: {
      title: "2. Quelles données collectons-nous ?",
      paragraphs: [
        "Selon votre demande, nous pouvons collecter : identité (nom, prénom), coordonnées (e-mail, téléphone), informations sur votre projet (type de visa, destination, profil étudiant, professionnel, tourisme/famille ou santé), et tout élément que vous nous transmettez volontairement pour l'évaluation ou le suivi de votre dossier.",
        "L'assistant IA du site peut traiter le texte que vous saisissez dans le chat uniquement pour générer une réponse. Ces échanges ne sont pas conservés sur nos serveurs. N'y envoyez pas de pièces sensibles (passeport, relevés, données médicales détaillées).",
        "Nous ne demandons pas de pièces sensibles via le formulaire public. Les documents du dossier sont collectés uniquement lorsque vous engagez un accompagnement, par des canaux sécurisés convenus avec vous.",
      ],
    },
    en: {
      title: "2. What data do we collect?",
      paragraphs: [
        "Depending on your request, we may collect: identity (first and last name), contact details (email, phone), information about your project (visa type, destination, student, business or artist profile), and any information you voluntarily share for assessment or file follow-up.",
        "The site's AI assistant may process the text you type in the chat solely to generate a reply. These exchanges are not stored on our servers. Do not send sensitive documents there (passport, bank statements, detailed medical data).",
        "We do not ask for sensitive documents through the public form. File documents are collected only once you engage our support, through secure channels agreed with you.",
      ],
    },
  },
  {
    fr: {
      title: "3. Pourquoi traitons-nous vos données ?",
      paragraphs: [
        "Vos données sont utilisées pour : répondre à votre demande d'éligibilité ou de devis, vous recontacter sous 48 heures, préparer et suivre votre accompagnement visa, améliorer la qualité de nos services, et respecter nos obligations légales.",
        "Nous ne vendons pas vos données à des tiers. Tooky Consulting est un cabinet de conseil indépendant, sans lien avec les consulats ; la décision de visa appartient uniquement aux autorités consulaires.",
      ],
    },
    en: {
      title: "3. Why do we process your data?",
      paragraphs: [
        "Your data is used to: answer your eligibility or quote request, contact you within 48 hours, prepare and follow your visa support, improve our services, and meet our legal obligations.",
        "We do not sell your data to third parties. Tooky Consulting is an independent advisory firm with no affiliation to consulates; visa decisions rest solely with consular authorities.",
      ],
    },
  },
  {
    fr: {
      title: "4. Combien de temps conservons-nous vos données ?",
      paragraphs: [
        "Les demandes via le formulaire sont conservées le temps nécessaire au traitement de votre demande, puis archivées de façon limitée pour le suivi commercial et les obligations légales.",
        "Les dossiers d'accompagnement sont conservés pendant la durée de la mission, puis selon les délais utiles au suivi post-visa et aux obligations applicables, avant suppression ou anonymisation.",
      ],
    },
    en: {
      title: "4. How long do we keep your data?",
      paragraphs: [
        "Form requests are kept for as long as needed to process your request, then archived in a limited way for follow-up and legal obligations.",
        "Support files are kept for the duration of the engagement, then according to post-visa follow-up needs and applicable obligations, before deletion or anonymisation.",
      ],
    },
  },
  {
    fr: {
      title: "5. Qui peut accéder à vos données ?",
      paragraphs: [
        "L'accès est limité aux personnes de Tooky Consulting habilitées à traiter votre dossier. Des prestataires techniques (hébergement du site, messagerie, fournisseur d'intelligence artificielle pour l'assistant chat) peuvent traiter des données uniquement pour faire fonctionner nos outils, dans le cadre de leurs obligations de confidentialité.",
        "Si votre dossier nécessite un échange avec un partenaire (école, organisme, assureur, etc.), cela se fait uniquement avec votre accord et dans la limite nécessaire à votre projet.",
      ],
    },
    en: {
      title: "5. Who can access your data?",
      paragraphs: [
        "Access is limited to Tooky Consulting staff authorised to handle your file. Technical providers (website hosting, email, AI provider for the chat assistant) may process data only to operate our tools, under confidentiality obligations.",
        "If your file requires exchange with a partner (school, organisation, insurer, etc.), this happens only with your consent and only as needed for your project.",
      ],
    },
  },
  {
    fr: {
      title: "6. Cookies et mesure d'audience",
      paragraphs: [
        "Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement (langue, session). Si des outils de mesure d'audience sont ajoutés, ils seront utilisés de façon proportionnée et, le cas échéant, avec votre consentement lorsque la réglementation l'exige.",
      ],
    },
    en: {
      title: "6. Cookies and analytics",
      paragraphs: [
        "The site may use technical cookies needed for proper operation (language, session). If audience measurement tools are added, they will be used proportionately and, where required, with your consent.",
      ],
    },
  },
  {
    fr: {
      title: "7. Vos droits",
      paragraphs: [
        "Selon le droit applicable, vous pouvez demander l'accès, la rectification, la suppression ou la limitation du traitement de vos données, ainsi que vous opposer à certains traitements.",
        "Pour exercer vos droits : contact@tookyconsulting.com. Nous répondons dans un délai raisonnable. Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir l'autorité compétente en matière de protection des données.",
      ],
    },
    en: {
      title: "7. Your rights",
      paragraphs: [
        "Under applicable law, you may request access to, correction, deletion or restriction of processing of your data, and object to certain processing.",
        "To exercise your rights: contact@tookyconsulting.com. We reply within a reasonable time. If you believe your rights are not respected, you may contact the competent data-protection authority.",
      ],
    },
  },
  {
    fr: {
      title: "8. Sécurité",
      paragraphs: [
        "Nous mettons en place des mesures raisonnables pour protéger vos données contre l'accès non autorisé, la perte ou l'altération. Aucun système n'étant totalement infaillible, nous vous invitons à ne transmettre des documents sensibles que via les canaux que nous vous indiquons.",
      ],
    },
    en: {
      title: "8. Security",
      paragraphs: [
        "We implement reasonable measures to protect your data against unauthorised access, loss or alteration. No system is fully infallible; please send sensitive documents only through the channels we indicate.",
      ],
    },
  },
  {
    fr: {
      title: "9. Mise à jour",
      paragraphs: [
        "Cette politique peut être mise à jour pour refléter l'évolution de nos pratiques ou de la réglementation. La date de dernière mise à jour figure en tête de page. En cas de changement important, nous adapterons cette page en conséquence.",
      ],
    },
    en: {
      title: "9. Updates",
      paragraphs: [
        "This policy may be updated to reflect changes in our practices or the law. The last update date appears at the top of the page. For material changes, we will update this page accordingly.",
      ],
    },
  },
];

export default function PrivacyPage() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Politique de confidentialité",
      intro:
        "Chez Tooky Consulting, vos données personnelles sont traitées avec sérieux. Cette page explique quelles informations nous collectons, pourquoi, et quels sont vos droits.",
      updated: "Dernière mise à jour : 1er août 2026",
      back: "Retour à l'accueil",
    },
    en: {
      title: "Privacy policy",
      intro:
        "At Tooky Consulting, your personal data is handled carefully. This page explains what information we collect, why, and what your rights are.",
      updated: "Last updated: 1 August 2026",
      back: "Back to home",
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
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(36,80,232,0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 lg:px-14 lg:pb-20">
          <Reveal>
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
              className="mb-5 max-w-[16ch] text-[clamp(2.1rem,4.5vw,3.5rem)] leading-[1.05] font-semibold tracking-tight text-balance"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
            >
              {t.title}
            </h1>
            <p
              className="mb-4 max-w-[56ch] text-[18px] leading-[1.7]"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              {t.intro}
            </p>
            <p
              className="text-[14px]"
              style={{ fontFamily: "var(--font-ui)", color: "var(--c-ink-400)" }}
            >
              {t.updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
        <div className="flex flex-col gap-12">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.fr.title} delay={i * 0.03}>
              <article>
                <h2
                  className="mb-4 text-[22px] font-semibold tracking-tight sm:text-[24px]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {section[lang].title}
                </h2>
                <div className="flex flex-col gap-3">
                  {section[lang].paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="text-[17px] leading-[1.75]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 border-t pt-10" style={{ borderColor: "var(--border-default)" }}>
            <Link
              href="/"
              className="inline-flex text-[15px] font-semibold"
              style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-600)" }}
            >
              ← {t.back}
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter variant="compact" />
    </>
  );
}
