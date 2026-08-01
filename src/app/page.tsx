"use client";

import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EligibilityForm } from "@/components/eligibility-form";
import { ParallaxHero } from "@/components/ui/parallax-scrolling";
import { Reveal } from "@/components/reveal";
import { DreamMarquee } from "@/components/dream-marquee";
import { TrackPanels } from "@/components/track-panels";
import { PacksSection } from "@/components/packs-section";
import { ServiceStack, type ServiceItem } from "@/components/service-stack";
import { StepsPan, type StepItem } from "@/components/steps-pan";
import { SITE_IMAGES } from "@/lib/site-images";

const SERVICES: ServiceItem[] = [
  {
    tone: "photo",
    image: SITE_IMAGES.passportDesk,
    fr: {
      title: "Analyse du profil",
      body: "Nous lisons votre situation, listons les pièces utiles et construisons un dossier cohérent.",
    },
    en: {
      title: "Profile review",
      body: "We read your situation, list the right documents and build a coherent file.",
    },
  },
  {
    tone: "photo",
    image: SITE_IMAGES.documents,
    fr: {
      title: "Double contrôle",
      body: "Assistant + consultant relisent chaque dossier avant dépôt pour limiter les erreurs évitables.",
    },
    en: {
      title: "Double check",
      body: "An assistant and a consultant review every file before submission to cut avoidable errors.",
    },
  },
  {
    tone: "photo",
    image: SITE_IMAGES.interview,
    fr: {
      title: "Préparation à l'entretien",
      body: "Vous répétez les questions clés pour présenter votre projet avec clarté.",
    },
    en: {
      title: "Interview prep",
      body: "You rehearse the key questions so you present your project with clarity.",
    },
  },
  {
    tone: "photo",
    image: SITE_IMAGES.flight,
    fr: {
      title: "Assurance, réservations & RDV",
      body: "Assurance Schengen, réservations conformes et prise de rendez-vous.",
    },
    en: {
      title: "Insurance, bookings & appointments",
      body: "Schengen insurance, compliant bookings and appointment booking.",
    },
  },
  {
    tone: "dusk",
    image: SITE_IMAGES.luggage,
    fr: {
      title: "Suivi jusqu'à la décision",
      body: "Nous restons avec vous après le dépôt, jusqu'à la réponse du consulat.",
    },
    en: {
      title: "Follow-up until the decision",
      body: "We stay with you after submission, until the consulate replies.",
    },
  },
];

const STEPS: StepItem[] = [
  {
    fr: {
      label: "01",
      title: "Vous nous écrivez",
      body: "Décrivez votre projet. Nous vous répondons sous 48 heures.",
    },
    en: {
      label: "01",
      title: "You write to us",
      body: "Describe your project. We reply within 48 hours.",
    },
  },
  {
    fr: {
      label: "02",
      title: "Nous construisons le dossier",
      body: "Pièces, réservations, assurance : tout est préparé pour le dépôt.",
    },
    en: {
      label: "02",
      title: "We build the file",
      body: "Documents, bookings, insurance: everything prepared for submission.",
    },
  },
  {
    fr: {
      label: "03",
      title: "Nous contrôlons, puis vous déposez",
      body: "Double vérification, RDV, entretien préparé, puis dépôt.",
    },
    en: {
      label: "03",
      title: "We check, then you submit",
      body: "Double check, appointment, prepared interview, then submission.",
    },
  },
  {
    fr: {
      label: "04",
      title: "Nous suivons jusqu'à la décision",
      body: "Suivi après dépôt. Pour les études ou les soins, accompagnement aussi après.",
    },
    en: {
      label: "04",
      title: "We follow until the decision",
      body: "Post-submission tracking. For studies or medical care, support continues after.",
    },
  },
];

export default function Home() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      tracksTitle: "Pour quel voyage préparez-vous votre visa ?",
      tracks: [
        {
          href: "/etudiants",
          image: SITE_IMAGES.trackStudents,
          imagePosition: "center 20%",
          number: "01",
          title: "Étudiants",
          body: "Études et mobilité : Campus France, ressources, hébergement, entretien.",
          cta: "Voir la formule Student Care",
        },
        {
          href: "/entreprises",
          image: SITE_IMAGES.trackBusiness,
          imagePosition: "center 18%",
          number: "02",
          title: "Professionnels",
          body: "Missions et foires : invitations, ordres de mission, traitement prioritaire.",
          cta: "Voir la formule Pro Executive",
        },
        {
          href: "/tourisme",
          image: SITE_IMAGES.tourism,
          imagePosition: "center 40%",
          number: "03",
          title: "Tourisme & famille",
          body: "Court séjour : dossier conforme, réservations et RDV.",
          cta: "Voir la formule Essentielle",
        },
        {
          href: "/sante",
          image: SITE_IMAGES.medical,
          imagePosition: "center 35%",
          number: "04",
          title: "Santé & soins",
          body: "Soins et urgences médicales : coordination hospitalière, dossier accéléré.",
          cta: "Voir la formule Urgence Santé",
        },
      ],
      servicesTitle: "Ce que nous faisons, concrètement.",
      needTitle: "Un besoin particulier ?",
      needBody: "Chaque demande est étudiée sans engagement. Nous vous orientons vers la formule adaptée.",
      needCta: "Demander un devis",
      howTitle: "Un parcours simple, du premier message à la décision.",
    },
    en: {
      tracksTitle: "What kind of trip are you preparing for?",
      tracks: [
        {
          href: "/etudiants",
          image: SITE_IMAGES.trackStudents,
          imagePosition: "center 20%",
          number: "01",
          title: "Students",
          body: "Studies and mobility: Campus France, funding, housing, interview.",
          cta: "See the Student Care plan",
        },
        {
          href: "/entreprises",
          image: SITE_IMAGES.trackBusiness,
          imagePosition: "center 18%",
          number: "02",
          title: "Professionals",
          body: "Missions and trade fairs: invitations, mission orders, priority handling.",
          cta: "See the Pro Executive plan",
        },
        {
          href: "/tourisme",
          image: SITE_IMAGES.tourism,
          imagePosition: "center 40%",
          number: "03",
          title: "Tourism & family",
          body: "Short stay: a compliant file, bookings and appointment.",
          cta: "See the Essential plan",
        },
        {
          href: "/sante",
          image: SITE_IMAGES.medical,
          imagePosition: "center 35%",
          number: "04",
          title: "Health & care",
          body: "Medical care and emergencies: hospital coordination, accelerated file.",
          cta: "See the Health Priority plan",
        },
      ],
      servicesTitle: "What we do, concretely.",
      needTitle: "A specific need?",
      needBody: "Every request is reviewed with no obligation. We guide you to the right plan.",
      needCta: "Request a quote",
      howTitle: "A simple path, from first message to decision.",
    },
  }[lang];

  return (
    <>
      <SiteHeader />
      <ParallaxHero />
      <DreamMarquee />

      <section className="px-6 pt-4 sm:px-10 lg:px-14">
        <Reveal>
          <h2
            className="mx-auto max-w-[1100px] text-[clamp(1.45rem,2.8vw,2rem)] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.tracksTitle}
          </h2>
        </Reveal>
      </section>

      <TrackPanels tracks={t.tracks} />

      <PacksSection />

      <ServiceStack
        services={SERVICES}
        title={t.servicesTitle}
        needTitle={t.needTitle}
        needBody={t.needBody}
        needCta={t.needCta}
      />

      <StepsPan steps={STEPS} title={t.howTitle} />

      <EligibilityForm />
      <SiteFooter variant="full" />
    </>
  );
}
