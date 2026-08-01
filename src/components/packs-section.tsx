"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "@/components/reveal";

const PACKS = [
  {
    href: "/tourisme",
    fr: {
      name: "Formule Essentielle",
      audience: "Court séjour · Tourisme · Famille",
      includes:
        "Analyse du profil, préparation du dossier, réservations d'hôtel/billets, assurance, prise de RDV.",
    },
    en: {
      name: "Essential Plan",
      audience: "Short stay · Tourism · Family",
      includes:
        "Profile review, file preparation, hotel/flight bookings, insurance, appointment booking.",
    },
  },
  {
    href: "/etudiants",
    fr: {
      name: "Formule Student Care",
      audience: "Études · Mobilité académique",
      includes:
        "Accompagnement Campus France, contrôle des ressources et hébergement, préparation à l'entretien.",
    },
    en: {
      name: "Student Care Plan",
      audience: "Studies · Academic mobility",
      includes:
        "Campus France support, funding and housing checks, interview preparation.",
    },
  },
  {
    href: "/entreprises",
    fr: {
      name: "Formule Pro Executive",
      audience: "Affaires · Business",
      includes:
        "Traitement prioritaire, vérification des ordres de mission et invitations d'entreprises européennes.",
    },
    en: {
      name: "Pro Executive Plan",
      audience: "Business · Professional travel",
      includes:
        "Priority handling, mission orders and European company invitation checks.",
    },
  },
  {
    href: "/sante",
    fr: {
      name: "Formule Urgence Santé",
      audience: "Soins médicaux · C.I.A.",
      includes:
        "Traitement accéléré, vérification des devis et accords d'admission hospitaliers.",
    },
    en: {
      name: "Health Priority Plan",
      audience: "Medical care · Evacuation",
      includes:
        "Accelerated handling, hospital quotes and admission agreement checks.",
    },
  },
] as const;

export function PacksSection() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Quatre formules, un même niveau d'exigence.",
      body: "Chaque parcours est adapté à votre motif de voyage. Après évaluation, nous vous indiquons la formule et le tarif adaptés — sans engagement.",
      cta: "En savoir plus",
    },
    en: {
      title: "Four plans, one standard of care.",
      body: "Each path matches your travel purpose. After assessment, we recommend the right plan and fee — with no obligation.",
      cta: "Learn more",
    },
  }[lang];

  return (
    <section
      id="formules"
      className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className="mb-4 max-w-[18ch] text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.1] font-semibold tracking-tight text-balance"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.title}
          </h2>
          <p
            className="mb-12 max-w-[54ch] text-[18px] leading-[1.7]"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.body}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PACKS.map((pack, i) => {
            const copy = pack[lang];
            return (
              <Reveal key={pack.href} delay={i * 0.06}>
                <Link
                  href={pack.href}
                  className="group flex h-full flex-col rounded-[1.5rem] border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
                  style={{
                    background: "var(--surface-card)",
                    borderColor: "var(--border-default)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <p
                    className="mb-2 text-[12px] font-semibold uppercase"
                    style={{
                      fontFamily: "var(--font-ui)",
                      letterSpacing: "0.14em",
                      color: "var(--c-cobalt-500)",
                    }}
                  >
                    {copy.audience}
                  </p>
                  <h3
                    className="mb-4 text-[1.55rem] font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {copy.name}
                  </h3>
                  <p
                    className="mb-8 flex-1 text-[15px] leading-[1.65]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {copy.includes}
                  </p>
                  <span
                    className="text-[14px] font-semibold transition-colors group-hover:underline"
                    style={{ fontFamily: "var(--font-ui)", color: "var(--c-cobalt-500)" }}
                  >
                    {t.cta} →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
