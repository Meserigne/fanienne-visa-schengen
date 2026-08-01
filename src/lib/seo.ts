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
      "Tooky Consulting simplifie, sécurise et maximise vos chances de visa Schengen à Dakar. Étudiants, professionnels, familles et soins médicaux : accompagnement clé en main. Devis après évaluation.",
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
    title: "Pack Student Care · Visa étudiant Schengen | Tooky Consulting",
    description:
      "Accompagnement Campus France, contrôle des ressources et hébergement, préparation à l'entretien. Pack Student Care depuis Dakar. Tarif communiqué après évaluation.",
    keywords: [
      "visa étudiant Schengen",
      "visa étudiant France Sénégal",
      "Campus France Dakar",
      "dossier visa études",
      "Pack Student Care",
      "accompagnement visa étudiant Dakar",
    ],
  },
  entreprises: {
    title: "Pack Pro Executive · Visa d'affaires Schengen | Tooky Consulting",
    description:
      "Traitement prioritaire des visas d'affaires : missions, foires, invitations d'entreprises. Pack Pro Executive à Dakar. Tarif après évaluation.",
    keywords: [
      "visa affaires Schengen",
      "visa business Sénégal",
      "visa dirigeant PME",
      "Pack Pro Executive",
      "visa salon professionnel",
      "accompagnement visa entreprise Dakar",
    ],
  },
  tourisme: {
    title: "Pack Classique · Visa tourisme & famille | Tooky Consulting",
    description:
      "Court séjour, tourisme et visites familiales : analyse du profil, dossier, réservations, assurance et prise de RDV. Tarif communiqué après évaluation.",
    keywords: [
      "visa tourisme Schengen",
      "visa visite familiale Europe",
      "visa court séjour Sénégal",
      "Pack Classique visa",
      "réservation hôtel visa Schengen",
      "accompagnement visa tourisme Dakar",
    ],
  },
  sante: {
    title: "Pack Urgence Santé · Visa médical Schengen | Tooky Consulting",
    description:
      "Soins spécialisés et évacuation sanitaire : traitement accéléré, devis hospitaliers et coordination avec les hôpitaux en Europe. Tarif après évaluation.",
    keywords: [
      "visa médical Schengen",
      "visa soins Europe Sénégal",
      "évacuation sanitaire visa",
      "Pack Urgence Santé",
      "C.I.A médicale Europe",
      "accompagnement visa médical Dakar",
    ],
  },
  about: {
    title: "Qui nous sommes | Tooky Consulting visa Schengen Dakar",
    description:
      "Tooky Consulting accompagne les demandes de visa Schengen à Dakar : simplifier, sécuriser et maximiser le taux de réussite grâce à un accompagnement clé en main.",
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
      "Politique de confidentialité de Tooky Consulting : comment nous collectons, utilisons et protégeons vos données personnelles dans le cadre de l'accompagnement visa Schengen.",
    keywords: [
      "politique de confidentialité Tooky Consulting",
      "protection des données Tooky Consulting",
      "données personnelles visa Schengen",
    ],
  },
} as const;
