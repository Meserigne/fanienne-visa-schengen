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
import { PacksSection } from "@/components/packs-section";
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
      title: "Analyse & constitution du dossier",
      body: "Étude de votre profil, liste des pièces, constitution et mise en conformité avant dépôt au consulat.",
    },
    en: {
      title: "Profile review & file building",
      body: "We assess your profile, list required documents, then assemble and bring your file into compliance.",
    },
  },
  {
    tone: "photo",
    image: SITE_IMAGES.documents,
    fr: {
      title: "Double vérification qualité",
      body: "Chaque dossier passe par une double lecture (assistant + consultant) pour limiter les refus évitables.",
    },
    en: {
      title: "Double quality check",
      body: "Every file gets a dual review (assistant + senior consultant) to reduce avoidable refusals.",
    },
  },
  {
    tone: "photo",
    image: SITE_IMAGES.interview,
    fr: {
      title: "Préparation à l'entretien",
      body: "Simulations d'entretien consulaire et conseils pour présenter votre projet avec clarté.",
    },
    en: {
      title: "Interview coaching",
      body: "Mock consular interviews and guidance so you present your project clearly.",
    },
  },
  {
    tone: "photo",
    image: SITE_IMAGES.flight,
    fr: {
      title: "Assurance, réservations & RDV",
      body: "Assurance Schengen, réservations conformes et prise de rendez-vous au centre de visas.",
    },
    en: {
      title: "Insurance, bookings & appointments",
      body: "Schengen insurance, compliant bookings and visa-centre appointment booking.",
    },
  },
  {
    tone: "dusk",
    image: SITE_IMAGES.luggage,
    fr: {
      title: "Suivi jusqu'à la décision",
      body: "Relances, suivi après dépôt et information jusqu'à la réponse consulaire.",
    },
    en: {
      title: "Follow-up until the decision",
      body: "Reminders, post-submission tracking and updates until the consular decision.",
    },
  },
];

const STEPS: StepItem[] = [
  {
    fr: {
      label: "01",
      title: "Évaluation gratuite",
      body: "Vous décrivez votre projet ; nous analysons votre profil sous 48 h et vous indiquons le pack adapté.",
    },
    en: {
      label: "01",
      title: "Free assessment",
      body: "You describe your project; we review your profile within 48 hours and recommend the right pack.",
    },
  },
  {
    fr: {
      label: "02",
      title: "Préparation clé en main",
      body: "Constitution du dossier, réservations, assurance et pièces : tout est préparé pour le dépôt.",
    },
    en: {
      label: "02",
      title: "Turnkey preparation",
      body: "File building, bookings, insurance and documents: everything ready for submission.",
    },
  },
  {
    fr: {
      label: "03",
      title: "Contrôle & dépôt",
      body: "Double vérification, prise de RDV, préparation à l'entretien puis dépôt accompagné.",
    },
    en: {
      label: "03",
      title: "Review & submission",
      body: "Double check, appointment booking, interview prep, then supported submission.",
    },
  },
  {
    fr: {
      label: "04",
      title: "Décision & suite",
      body: "Suivi jusqu'à la décision. Pour les études ou les soins, accompagnement aussi après le visa.",
    },
    en: {
      label: "04",
      title: "Decision & next steps",
      body: "Follow-up until the decision. For studies or medical travel, support continues after the visa.",
    },
  },
];

export default function Home() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      tracksTitle: "Choisissez votre motif de voyage.",
      tracks: [
        {
          href: "/etudiants",
          image: SITE_IMAGES.trackStudents,
          imagePosition: "center 20%",
          number: "01",
          title: "Étudiants",
          body: "Études, stages, mobilité académique. Campus France, ressources, hébergement et entretien.",
          cta: "Pack Student Care",
        },
        {
          href: "/entreprises",
          image: SITE_IMAGES.trackBusiness,
          imagePosition: "center 18%",
          number: "02",
          title: "Professionnels",
          body: "Missions, foires, partenariats. Traitement prioritaire et vérification des invitations.",
          cta: "Pack Pro Executive",
        },
        {
          href: "/tourisme",
          image: SITE_IMAGES.tourism,
          imagePosition: "center 40%",
          number: "03",
          title: "Tourisme & famille",
          body: "Court séjour, visites familiales, événements. Réservations conformes et dossier complet.",
          cta: "Pack Classique",
        },
        {
          href: "/sante",
          image: SITE_IMAGES.medical,
          imagePosition: "center 35%",
          number: "04",
          title: "Santé & soins",
          body: "Soins spécialisés et évacuation. Coordination hospitalière et traitement accéléré.",
          cta: "Pack Urgence Santé",
        },
      ],
      servicesTitle: "Un accompagnement rigoureux, sur mesure.",
      needTitle: "Un besoin particulier ?",
      needBody: "Chaque demande est étudiée sans engagement. Nous vous orientons vers le pack le plus adapté.",
      needCta: "Demander un devis",
      howTitle: "Comment Tooky Consulting maximise vos chances.",
      partnersLabel: "Sablux, Mega et THETA nous font confiance",
    },
    en: {
      tracksTitle: "Choose your travel purpose.",
      tracks: [
        {
          href: "/etudiants",
          image: SITE_IMAGES.trackStudents,
          imagePosition: "center 20%",
          number: "01",
          title: "Students",
          body: "Studies, internships, academic mobility. Campus France, funding, housing and interview.",
          cta: "Student Care Pack",
        },
        {
          href: "/entreprises",
          image: SITE_IMAGES.trackBusiness,
          imagePosition: "center 18%",
          number: "02",
          title: "Professionals",
          body: "Missions, trade fairs, partnerships. Priority handling and invitation checks.",
          cta: "Pro Executive Pack",
        },
        {
          href: "/tourisme",
          image: SITE_IMAGES.tourism,
          imagePosition: "center 40%",
          number: "03",
          title: "Tourism & family",
          body: "Short stays, family visits, events. Compliant bookings and a complete file.",
          cta: "Classic Pack",
        },
        {
          href: "/sante",
          image: SITE_IMAGES.medical,
          imagePosition: "center 35%",
          number: "04",
          title: "Health & care",
          body: "Specialised care and medical evacuation. Hospital coordination and accelerated handling.",
          cta: "Health Emergency Pack",
        },
      ],
      servicesTitle: "Rigorous, tailored support.",
      needTitle: "A specific need?",
      needBody: "Every request is reviewed with no obligation. We guide you to the right pack.",
      needCta: "Request a quote",
      howTitle: "How Tooky Consulting maximises your chances.",
      partnersLabel: "Trusted by Sablux, Mega and THETA",
    },
  }[lang];

  return (
    <>
      <SiteHeader />
      <ParallaxHero />
      <DreamMarquee />

      <section className="px-6 pt-6 sm:px-10 lg:px-14">
        <Reveal>
          <h2
            className="mx-auto max-w-[1400px] text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold tracking-tight"
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
