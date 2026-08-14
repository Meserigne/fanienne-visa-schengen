/** SEO config and page copy for Google indexing. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.tukkiconsulting.com";

export const SITE_NAME = "Tukki Consulting";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-tukki.png`;

export const seo = {
  home: {
    title: "Accompagnement visa Schengen à Dakar | Tukki Consulting",
    description:
      "Tukki Consulting prépare, vérifie et suit votre dossier visa Schengen depuis Dakar. Études, affaires, famille ou soins. Évaluation gratuite sous 48 h.",
    keywords: [
      "visa Schengen Sénégal",
      "accompagnement visa Schengen Dakar",
      "aide dossier visa Sénégal",
      "rdv visa Schengen Dakar",
      "visa étudiant France",
      "visa affaires Sénégal",
      "visa tourisme Schengen",
      "visa médical Europe",
      "Tukki Consulting visa",
    ],
  },
  etudiants: {
    title: "Visa étudiant Schengen · Formule Student Care | Tukki Consulting",
    description:
      "Étudier en Europe avec un dossier qui tient. Campus France, ressources, hébergement et entretien. Tukki Consulting à Dakar.",
    keywords: [
      "visa étudiant Schengen",
      "visa étudiant France Sénégal",
      "Campus France Dakar",
      "dossier visa études",
      "Formule Student Care",
      "accompagnement visa étudiant Dakar",
    ],
  },
  entreprises: {
    title: "Visa d'affaires Schengen · Formule Pro Executive | Tukki Consulting",
    description:
      "Vos opportunités business ne doivent pas attendre un visa. Missions, foires, invitations. Tukki Consulting à Dakar.",
    keywords: [
      "visa affaires Schengen",
      "visa business Sénégal",
      "visa dirigeant PME",
      "Formule Pro Executive",
      "visa salon professionnel",
      "accompagnement visa entreprise Dakar",
    ],
  },
  tourisme: {
    title: "Visa tourisme & famille · Formule Essentielle | Tukki Consulting",
    description:
      "Partir en famille ou en vacances sans dossier approximatif. Court séjour Schengen préparé depuis Dakar.",
    keywords: [
      "visa tourisme Schengen",
      "visa visite familiale Europe",
      "visa court séjour Sénégal",
      "Formule Essentielle visa",
      "réservation hôtel visa Schengen",
      "accompagnement visa tourisme Dakar",
    ],
  },
  sante: {
    title: "Visa médical Schengen · Formule Urgence Santé | Tukki Consulting",
    description:
      "Quand les soins ne peuvent pas attendre, le dossier non plus. Visa médical accéléré depuis Dakar.",
    keywords: [
      "visa médical Schengen",
      "visa soins Europe Sénégal",
      "évacuation sanitaire visa",
      "Formule Urgence Santé",
      "C.I.A médicale Europe",
      "accompagnement visa médical Dakar",
    ],
  },
  about: {
    title: "Qui nous sommes | Tukki Consulting Dakar",
    description:
      "Tukki Consulting : le cabinet qui structure votre départ. Dossiers Schengen lisibles, complets et crédibles depuis Dakar.",
    keywords: [
      "Tukki Consulting Dakar",
      "cabinet visa Schengen Sénégal",
      "qui sommes nous Tukki Consulting",
      "accompagnement visa Dakar",
      "conseil visa Schengen",
    ],
  },
  privacy: {
    title: "Politique de confidentialité | Tukki Consulting",
    description:
      "Politique de confidentialité de Tukki Consulting : collecte, usage et protection de vos données personnelles.",
    keywords: [
      "politique de confidentialité Tukki Consulting",
      "protection des données Tukki Consulting",
      "données personnelles visa Schengen",
    ],
  },
} as const;
