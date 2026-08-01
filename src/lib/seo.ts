/** SEO config and page copy for Google indexing. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://fabienne-visa-schengen.vercel.app";

export const SITE_NAME = "Tooky Consulting";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/passeport-france-cover.png`;

export const seo = {
  home: {
    title: "Accompagnement visa Schengen à Dakar | Tooky Consulting",
    description:
      "Tooky Consulting prépare, vérifie et suit votre dossier visa Schengen depuis Dakar. Études, affaires, famille ou soins. Évaluation gratuite sous 48 h.",
    keywords: [
      "visa Schengen Sénégal",
      "accompagnement visa Schengen Dakar",
      "aide dossier visa Sénégal",
      "rdv visa Schengen Dakar",
      "visa étudiant France",
      "visa affaires Sénégal",
      "visa tourisme Schengen",
      "visa médical Europe",
      "Tooky Consulting visa",
    ],
  },
  etudiants: {
    title: "Visa étudiant Schengen · Formule Student Care | Tooky Consulting",
    description:
      "Étudier en Europe avec un dossier qui tient. Campus France, ressources, hébergement et entretien. Tooky Consulting à Dakar.",
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
    title: "Visa d'affaires Schengen · Formule Pro Executive | Tooky Consulting",
    description:
      "Vos opportunités business ne doivent pas attendre un visa. Missions, foires, invitations. Tooky Consulting à Dakar.",
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
    title: "Visa tourisme & famille · Formule Essentielle | Tooky Consulting",
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
    title: "Visa médical Schengen · Formule Urgence Santé | Tooky Consulting",
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
    title: "Qui nous sommes | Tooky Consulting Dakar",
    description:
      "Tooky Consulting : le cabinet qui structure votre départ. Dossiers Schengen lisibles, complets et crédibles depuis Dakar.",
    keywords: [
      "Tooky Consulting Dakar",
      "cabinet visa Schengen Sénégal",
      "qui sommes nous Tooky Consulting",
      "accompagnement visa Dakar",
      "conseil visa Schengen",
    ],
  },
  privacy: {
    title: "Politique de confidentialité | Tooky Consulting",
    description:
      "Politique de confidentialité de Tooky Consulting : collecte, usage et protection de vos données personnelles.",
    keywords: [
      "politique de confidentialité Tooky Consulting",
      "protection des données Tooky Consulting",
      "données personnelles visa Schengen",
    ],
  },
} as const;
