"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EligibilityForm } from "@/components/eligibility-form";
import { ParallaxHero } from "@/components/ui/parallax-scrolling";
import { Reveal } from "@/components/reveal";
import { DreamMarquee } from "@/components/dream-marquee";
import { TrackPanels } from "@/components/track-panels";
import { ServiceStack, type ServiceItem } from "@/components/service-stack";
import { StepsPan, type StepItem } from "@/components/steps-pan";
import { SITE_IMAGES } from "@/lib/site-images";

const PARTNERS = [
  {
    name: "Sablux Immobilier",
    src: "/images/partners/sablux.png",
    width: 220,
    height: 72,
  },
  {
    name: "Mega",
    src: "/images/partners/mega.png",
    width: 160,
    height: 72,
  },
  {
    name: "THETA Ingénierie",
    src: "/images/partners/theta.png",
    width: 220,
    height: 72,
  },
] as const;

const SERVICES: ServiceItem[] = [
  {
    tone: "photo",
    image: SITE_IMAGES.passportDesk,
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
    tone: "photo",
    image: SITE_IMAGES.interview,
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
    tone: "photo",
    image: SITE_IMAGES.documents,
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
    tone: "photo",
    image: SITE_IMAGES.flight,
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
    tone: "dusk",
    image: SITE_IMAGES.luggage,
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

const STEPS: StepItem[] = [
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
      track1Title: "Visa étudiant Schengen",
      track1Body:
        "Admission, visa d'études, entretien Campus France et installation. De Dakar à votre rentrée en Europe.",
      track1Cta: "Parcours étudiant",
      track2Title: "Visa d'affaires PME & PMI",
      track2Body:
        "Votre entreprise ne doit plus perdre un salon, une négociation ou un partenariat à cause d'un visa. Fabienne prépare le visa Schengen affaires de vos dirigeants et équipes, de façon concrète et calendrier en tête.",
      track2Cta: "Parcours entreprise",
      servicesTitle: "Nos services d'accompagnement visa Schengen.",
      needTitle: "Un besoin particulier ?",
      needBody: "Chaque demande de visa est étudiée sur devis, sans engagement.",
      needCta: "Demander un devis",
      howTitle: "Comment obtenir votre visa Schengen avec Fabienne.",
      partnersLabel: "Sablux, Mega et THETA nous font confiance",
    },
    en: {
      track1Title: "Schengen student visa",
      track1Body:
        "Admission, study visa, Campus France interview and settling in. From Dakar to your first day in Europe.",
      track1Cta: "Student track",
      track2Title: "Business visa for SMEs",
      track2Body:
        "Your company should not lose a trade fair, negotiation or partnership because of a visa. Fabienne prepares Schengen business visas for your executives and teams, with a clear plan and calendar.",
      track2Cta: "Business track",
      servicesTitle: "Our Schengen visa support services.",
      needTitle: "A specific need?",
      needBody: "Every visa request is assessed with a free, no-obligation quote.",
      needCta: "Request a quote",
      howTitle: "How to get your Schengen visa with Fabienne.",
      partnersLabel: "Trusted by Sablux, Mega and THETA",
    },
  }[lang];

  return (
    <>
      <SiteHeader />
      <ParallaxHero />
      <DreamMarquee />

      <TrackPanels
        track1={{
          title: t.track1Title,
          body: t.track1Body,
          cta: t.track1Cta,
        }}
        track2={{
          title: t.track2Title,
          body: t.track2Body,
          cta: t.track2Cta,
        }}
      />

      <ServiceStack
        services={SERVICES}
        title={t.servicesTitle}
        needTitle={t.needTitle}
        needBody={t.needBody}
        needCta={t.needCta}
      />

      <StepsPan steps={STEPS} title={t.howTitle} />

      <section
        className="border-t px-6 py-16 text-center sm:px-10 lg:px-14"
        style={{ borderColor: "var(--border-default)", background: "var(--color-bg)" }}
      >
        <Reveal>
          <p
            className="mb-10 text-[15px] font-medium tracking-wide"
            style={{ fontFamily: "var(--font-ui)", color: "var(--text-secondary)" }}
          >
            {t.partnersLabel}
          </p>
          <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-5 sm:gap-8">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex h-[88px] w-[min(100%,240px)] items-center justify-center overflow-hidden rounded-xl border px-5"
                style={{ background: "var(--c-white)", borderColor: "var(--border-default)" }}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-12 w-auto max-w-full object-contain sm:h-14"
                />
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
