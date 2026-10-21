import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { IMAGE_CATALOG } from "../src/lib/admin/image-catalog";

const prisma = new PrismaClient();

const packs = [
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
  },
];

const contentBlocks = [
  {
    key: "home.packs",
    label: "Accueil · Formules (titre)",
    titleFr: "Quatre formules, un même niveau d'exigence.",
    titleEn: "Four plans, one standard of care.",
    bodyFr:
      "Chaque parcours est adapté à votre motif de voyage. Après évaluation, nous vous indiquons la formule et le tarif adaptés, sans engagement.",
    bodyEn:
      "Each path matches your travel purpose. After assessment, we recommend the right plan and fee, with no obligation.",
  },
  {
    key: "home.why",
    label: "Accueil · Pourquoi tukki",
    titleFr: "Pourquoi choisir tukki",
    titleEn: "Why choose tukki",
    bodyFr:
      "Un accompagnement rigoureux, humain et orienté résultats pour vos démarches visa Schengen.",
    bodyEn:
      "Rigorous, human, results-oriented support for your Schengen visa process.",
  },
  {
    key: "about.intro",
    label: "Qui sommes-nous · Introduction",
    titleFr: "Qui sommes-nous",
    titleEn: "About us",
    bodyFr:
      "Tukki Consulting accompagne les projets de mobilité depuis Dakar avec exigence et proximité.",
    bodyEn:
      "Tukki Consulting supports mobility projects from Dakar with rigor and care.",
  },
];

const settings: Record<string, string> = {
  contactEmail: "contact@tookyconsulting.com",
  contactPhone: "+221 77 000 00 00",
  whatsapp: "+221 77 000 00 00",
  address: "Dakar, Sénégal",
  companyName: "Tukki Consulting",
  replyHours: "48",
};

async function main() {
  const email = (process.env.ADMIN_EMAIL || "admin@tukkiconsulting.com")
    .trim()
    .toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "TukkiAdmin2026!";
  const name = process.env.ADMIN_NAME || "Administrateur Tukki";

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.adminUser.upsert({
    where: { email },
    create: { email, name, passwordHash },
    update: { name, passwordHash },
  });

  for (const pack of packs) {
    await prisma.pack.upsert({
      where: { slug: pack.slug },
      create: pack,
      update: pack,
    });
  }

  for (const block of contentBlocks) {
    await prisma.contentBlock.upsert({
      where: { key: block.key },
      create: block,
      update: {
        label: block.label,
        titleFr: block.titleFr,
        titleEn: block.titleEn,
        bodyFr: block.bodyFr,
        bodyEn: block.bodyEn,
      },
    });
  }

  for (const [key, value] of Object.entries(settings)) {
    await prisma.siteSetting.upsert({
      where: { key },
      create: { key, value },
      update: { value },
    });
  }

  for (const image of IMAGE_CATALOG) {
    await prisma.siteImage.upsert({
      where: { key: image.key },
      create: {
        key: image.key,
        label: image.label,
        category: image.category,
        url: image.defaultUrl,
      },
      update: {
        label: image.label,
        category: image.category,
        // Ne pas écraser une URL déjà personnalisée au re-seed
      },
    });
  }

  console.log("Seed OK");
  console.log(`Admin: ${email}`);
  console.log(`Password: ${password}`);
  console.log(`Images: ${IMAGE_CATALOG.length}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
