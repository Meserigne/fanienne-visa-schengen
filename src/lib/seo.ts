/** SEO config and page copy for Google indexing. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://fanienne.sn";

export const SITE_NAME = "Fanienne";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/passeport-france-cover.png`;

export const seo = {
  home: {
    title: "Accompagnement visa Schengen à Dakar | Étudiants, Artistes & PME",
    description:
      "Fanienne, cabinet d'accompagnement visa Schengen à Dakar. Visa étudiant, visa artiste et visa d'affaires pour PME sénégalaises. Évaluation gratuite sous 48 h.",
    keywords: [
      "visa Schengen Sénégal",
      "accompagnement visa Schengen Dakar",
      "visa étudiant France",
      "visa artiste Schengen",
      "visa affaires PME Sénégal",
      "demande visa Schengen",
      "cabinet visa Schengen Dakar",
      "Fanienne visa",
    ],
  },
  etudiants: {
    title: "Visa étudiant Schengen depuis le Sénégal | Fanienne",
    description:
      "Accompagnement visa étudiant Schengen depuis Dakar : admission, dossier Campus France, entretien consulaire et installation en Europe. Évaluation gratuite.",
    keywords: [
      "visa étudiant Schengen",
      "visa étudiant France Sénégal",
      "Campus France Dakar",
      "dossier visa études",
      "étudier en Europe depuis le Sénégal",
      "accompagnement visa étudiant Dakar",
    ],
  },
  entreprises: {
    title: "Visa d'affaires Schengen pour PME & PMI | Fanienne",
    description:
      "Visa d'affaires Schengen pour dirigeants et équipes de PME / PMI au Sénégal. Salons, missions et délégations en Europe. Devis gratuit sous 48 h.",
    keywords: [
      "visa affaires Schengen",
      "visa business Sénégal",
      "visa dirigeant PME",
      "déplacement professionnel Europe",
      "visa salon professionnel",
      "accompagnement visa entreprise Dakar",
    ],
  },
  artistes: {
    title: "Visa Schengen artistes & culture | Fanienne Dakar",
    description:
      "Accompagnement visa Schengen pour artistes sénégalais : festivals, résidences, tournées et projets culturels en Europe. Évaluation gratuite depuis Dakar.",
    keywords: [
      "visa artiste Schengen",
      "visa culturel Europe",
      "visa festival Sénégal",
      "résidence artistique Europe",
      "visa tournée artiste",
      "accompagnement visa artiste Dakar",
    ],
  },
  about: {
    title: "Qui nous sommes | Fanienne visa Schengen Dakar",
    description:
      "Fanienne est un cabinet d'accompagnement visa Schengen basé à Dakar. Notre mission : aider étudiants, artistes et PME sénégalaises à partir en Europe avec un dossier solide.",
    keywords: [
      "Fanienne Dakar",
      "cabinet visa Schengen Sénégal",
      "qui sommes nous Fanienne",
      "accompagnement visa Dakar",
      "conseil visa Schengen",
    ],
  },
  privacy: {
    title: "Politique de confidentialité | Fanienne",
    description:
      "Politique de confidentialité de Fanienne : comment nous collectons, utilisons et protégeons vos données personnelles dans le cadre de l'accompagnement visa Schengen.",
    keywords: [
      "politique de confidentialité Fanienne",
      "protection des données Fanienne",
      "données personnelles visa Schengen",
    ],
  },
} as const;
