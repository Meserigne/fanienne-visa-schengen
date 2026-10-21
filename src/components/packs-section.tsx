"use client";

import { useEffect, useState } from "react";
import { PacksSectionClient } from "@/components/packs-section-client";

type PackItem = {
  href: string;
  icon: string;
  fr: { name: string; audience: string; includes: string; price?: string };
  en: { name: string; audience: string; includes: string; price?: string };
};

const FALLBACK = {
  packs: [
    {
      href: "/tourisme",
      icon: "Plane",
      fr: {
        name: "Formule Essentielle",
        audience: "Court séjour · Tourisme · Famille",
        includes:
          "Analyse du profil, préparation du dossier, réservations d'hôtel/billets, assurance, prise de RDV.",
        price: "",
      },
      en: {
        name: "Essential Plan",
        audience: "Short stay · Tourism · Family",
        includes:
          "Profile review, file preparation, hotel/flight bookings, insurance, appointment booking.",
        price: "",
      },
    },
    {
      href: "/etudiants",
      icon: "GraduationCap",
      fr: {
        name: "Formule Student Care",
        audience: "Études · Mobilité académique",
        includes:
          "Accompagnement Campus France, contrôle des ressources et hébergement, préparation à l'entretien.",
        price: "",
      },
      en: {
        name: "Student Care Plan",
        audience: "Studies · Academic mobility",
        includes:
          "Campus France support, funding and housing checks, interview preparation.",
        price: "",
      },
    },
    {
      href: "/entreprises",
      icon: "BriefcaseBusiness",
      fr: {
        name: "Formule Pro Executive",
        audience: "Affaires · Business",
        includes:
          "Traitement prioritaire, vérification des ordres de mission et invitations d'entreprises européennes.",
        price: "",
      },
      en: {
        name: "Pro Executive Plan",
        audience: "Business · Professional travel",
        includes:
          "Priority handling, mission orders and European company invitation checks.",
        price: "",
      },
    },
    {
      href: "/sante",
      icon: "HeartPulse",
      fr: {
        name: "Formule Urgence Santé",
        audience: "Soins médicaux · C.I.A.",
        includes:
          "Traitement accéléré, vérification des devis et accords d'admission hospitaliers.",
        price: "",
      },
      en: {
        name: "Health Priority Plan",
        audience: "Medical care · Evacuation",
        includes:
          "Accelerated handling, hospital quotes and admission agreement checks.",
        price: "",
      },
    },
  ] as PackItem[],
  titleFr: "Quatre formules, un même niveau d'exigence.",
  titleEn: "Four plans, one standard of care.",
  bodyFr:
    "Chaque parcours est adapté à votre motif de voyage. Après évaluation, nous vous indiquons la formule et le tarif adaptés, sans engagement.",
  bodyEn:
    "Each path matches your travel purpose. After assessment, we recommend the right plan and fee, with no obligation.",
};

export function PacksSection() {
  const [data, setData] = useState(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/public/packs")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!cancelled && json?.packs?.length) {
          setData({
            packs: json.packs,
            titleFr: json.titleFr || FALLBACK.titleFr,
            titleEn: json.titleEn || FALLBACK.titleEn,
            bodyFr: json.bodyFr || FALLBACK.bodyFr,
            bodyEn: json.bodyEn || FALLBACK.bodyEn,
          });
        }
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PacksSectionClient
      packs={data.packs}
      titleFr={data.titleFr}
      titleEn={data.titleEn}
      bodyFr={data.bodyFr}
      bodyEn={data.bodyEn}
    />
  );
}
