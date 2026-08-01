/** SEO config and page copy for Google indexing. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://fabienne.sn";

export const SITE_NAME = "Fabienne";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/passeport-france-cover.png`;

export const seo = {
  home: {
    title: "Accompagnement visa Schengen à Dakar | Fabienne",
    description:
      "Fabienne simplifie, sécurise et maximise vos chances de visa Schengen à Dakar. Étudiants, professionnels, familles et soins médicaux : accompagnement clé en main.",
    keywords: [
      "visa Schengen Sénégal",
      "accompagnement visa Schengen Dakar",
      "aide dossier visa Sénégal",
      "rdv visa Schengen Dakar",
      "visa étudiant France",
      "visa affaires Sénégal",
      "visa tourisme Schengen",
      "visa médical Europe",
      "Fabienne visa",
    ],
  },
  etudiants: {
    title: "Pack Student Care · Visa étudiant Schengen | Fabienne",
    description:
      "Accompagnement Campus France, contrôle des ressources et hébergement, préparation à l'entretien. Pack Student Care à 200 000 FCFA depuis Dakar.",
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
    title: "Pack Pro Executive · Visa d'affaires Schengen | Fabienne",
    description:
      "Traitement prioritaire des visas d'affaires : missions, foires, invitations d'entreprises. Pack Pro Executive à 250 000 FCFA à Dakar.",
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
    title: "Pack Classique · Visa tourisme & famille | Fabienne",
    description:
      "Court séjour, tourisme et visites familiales : analyse du profil, dossier, réservations, assurance et prise de RDV. Pack Classique à 150 000 FCFA.",
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
    title: "Pack Urgence Santé · Visa médical Schengen | Fabienne",
    description:
      "Soins spécialisés et évacuation sanitaire : traitement accéléré, devis hospitaliers et coordination avec les hôpitaux en Europe. Pack Urgence Santé à 300 000 FCFA.",
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
    title: "Qui nous sommes | Fabienne visa Schengen Dakar",
    description:
      "Fabienne accompagne les demandes de visa Schengen à Dakar : simplifier, sécuriser et maximiser le taux de réussite grâce à un accompagnement clé en main.",
    keywords: [
      "Fabienne Dakar",
      "cabinet visa Schengen Sénégal",
      "qui sommes nous Fabienne",
      "accompagnement visa Dakar",
      "conseil visa Schengen",
    ],
  },
  privacy: {
    title: "Politique de confidentialité | Fabienne",
    description:
      "Politique de confidentialité de Fabienne : comment nous collectons, utilisons et protégeons vos données personnelles dans le cadre de l'accompagnement visa Schengen.",
    keywords: [
      "politique de confidentialité Fabienne",
      "protection des données Fabienne",
      "données personnelles visa Schengen",
    ],
  },
} as const;
