import { prisma } from "@/lib/db";
import { getSettingsMap } from "@/lib/admin/settings";

const FALLBACK_PACKS = [
  {
    slug: "essentielle",
    href: "/tourisme",
    icon: "Plane",
    nameFr: "Formule Essentielle",
    nameEn: "Essential Plan",
    audienceFr: "Court séjour · Tourisme · Famille",
    audienceEn: "Short stay · Tourism · Family",
    includesFr:
      "Analyse du profil, préparation du dossier, réservations d'hôtel/billets, assurance, prise de RDV.",
    includesEn:
      "Profile review, file preparation, hotel/flight bookings, insurance, appointment booking.",
    priceFr: "",
    priceEn: "",
    sortOrder: 1,
    published: true,
  },
  {
    slug: "student-care",
    href: "/etudiants",
    icon: "GraduationCap",
    nameFr: "Formule Student Care",
    nameEn: "Student Care Plan",
    audienceFr: "Études · Mobilité académique",
    audienceEn: "Studies · Academic mobility",
    includesFr:
      "Accompagnement Campus France, contrôle des ressources et hébergement, préparation à l'entretien.",
    includesEn:
      "Campus France support, funding and housing checks, interview preparation.",
    priceFr: "",
    priceEn: "",
    sortOrder: 2,
    published: true,
  },
  {
    slug: "pro-executive",
    href: "/entreprises",
    icon: "BriefcaseBusiness",
    nameFr: "Formule Pro Executive",
    nameEn: "Pro Executive Plan",
    audienceFr: "Affaires · Business",
    audienceEn: "Business · Professional travel",
    includesFr:
      "Traitement prioritaire, vérification des ordres de mission et invitations d'entreprises européennes.",
    includesEn:
      "Priority handling, mission orders and European company invitation checks.",
    priceFr: "",
    priceEn: "",
    sortOrder: 3,
    published: true,
  },
  {
    slug: "urgence-sante",
    href: "/sante",
    icon: "HeartPulse",
    nameFr: "Formule Urgence Santé",
    nameEn: "Health Priority Plan",
    audienceFr: "Soins médicaux · C.I.A.",
    audienceEn: "Medical care · Evacuation",
    includesFr:
      "Traitement accéléré, vérification des devis et accords d'admission hospitaliers.",
    includesEn:
      "Accelerated handling, hospital quotes and admission agreement checks.",
    priceFr: "",
    priceEn: "",
    sortOrder: 4,
    published: true,
  },
];

export async function getPublishedPacks() {
  try {
    const packs = await prisma.pack.findMany({
      where: { published: true },
      orderBy: { sortOrder: "asc" },
    });
    return packs.length > 0 ? packs : FALLBACK_PACKS;
  } catch {
    return FALLBACK_PACKS;
  }
}

export async function getContentBlock(key: string) {
  try {
    return await prisma.contentBlock.findUnique({ where: { key } });
  } catch {
    return null;
  }
}

export async function getPublicSettings() {
  return getSettingsMap();
}
