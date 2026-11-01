import type { CmsDocDefinition, CmsField } from "./types";
import { pair } from "./types";
import parcoursDefaults from "./parcours-defaults.json";

const bi = (
  key: string,
  label: string,
  kind: "text" | "textarea" = "text",
): CmsField => ({
  type: kind,
  key,
  label,
  bilingual: true,
});

const titleBodyList = (key: string, label: string): CmsField => ({
  type: "list",
  key,
  label,
  itemLabel: "Élément",
  itemFields: [bi("title", "Titre"), bi("body", "Texte", "textarea")],
});

const labelBodyList = (key: string, label: string): CmsField => ({
  type: "list",
  key,
  label,
  itemLabel: "Élément",
  itemFields: [bi("label", "Libellé"), bi("body", "Texte", "textarea")],
});

const parcoursFields: CmsField[] = [
  bi("brand", "Marque (eyebrow)"),
  bi("title", "Titre hero", "textarea"),
  bi("body", "Intro hero", "textarea"),
  bi("whyTitle", "Titre section « pourquoi »", "textarea"),
  titleBodyList("why", "Points « pourquoi »"),
  bi("servicesTitle", "Titre services", "textarea"),
  titleBodyList("services", "Services"),
  bi("promiseTitle", "Titre promesse", "textarea"),
  bi("promiseBody", "Texte promesse", "textarea"),
  titleBodyList("promise", "Points promesse"),
  bi("ctaTitle", "Titre CTA", "textarea"),
  bi("ctaBody", "Texte CTA", "textarea"),
  bi("ctaButton", "Bouton CTA"),
];

function parcoursDoc(
  key: string,
  label: string,
  slug: keyof typeof parcoursDefaults,
): CmsDocDefinition {
  return {
    key,
    label,
    group: "Parcours",
    fields: parcoursFields,
    defaults: parcoursDefaults[slug] as Record<string, unknown>,
  };
}

export const CMS_CATALOG: CmsDocDefinition[] = [
  {
    key: "nav",
    label: "Navigation & boutons globaux",
    group: "Global",
    fields: [
      {
        type: "list",
        key: "links",
        label: "Liens du menu",
        itemLabel: "Lien",
        itemFields: [
          { type: "text", key: "href", label: "URL" },
          bi("label", "Libellé"),
        ],
      },
      bi("cta", "Bouton CTA header"),
      bi("menuOpen", "Ouvrir le menu (mobile)"),
      bi("menuClose", "Fermer le menu (mobile)"),
    ],
    defaults: {
      links: [
        { href: "/", label: pair("Accueil", "Home") },
        { href: "/etudiants", label: pair("Étudiants", "Students") },
        { href: "/entreprises", label: pair("Professionnels", "Business") },
        {
          href: "/tourisme",
          label: pair("Tourisme & famille", "Tourism & family"),
        },
        { href: "/sante", label: pair("Santé", "Health") },
      ],
      cta: pair("Envoyer ma demande", "Send my request"),
      menuOpen: pair("Menu", "Menu"),
      menuClose: pair("Fermer", "Close"),
    },
  },
  {
    key: "footer",
    label: "Pied de page",
    group: "Global",
    fields: [
      bi("tagline", "Accroche", "textarea"),
      bi("navTitle", "Titre colonne parcours"),
      bi("contactTitle", "Titre colonne contact"),
      bi("about", "Lien Qui nous sommes"),
      bi("privacy", "Lien Politique de confidentialité"),
      bi("copyright", "Copyright (avant l’adresse)"),
      {
        type: "list",
        key: "links",
        label: "Liens parcours",
        itemLabel: "Lien",
        itemFields: [
          { type: "text", key: "href", label: "URL" },
          bi("label", "Libellé"),
        ],
      },
    ],
    defaults: {
      tagline: pair(
        "Accompagnement visa Schengen à Dakar. Dossiers préparés pour convaincre.",
        "Schengen visa support in Dakar. Files built to convince.",
      ),
      navTitle: pair("Parcours", "Paths"),
      contactTitle: pair("Contact", "Contact"),
      about: pair("Qui nous sommes", "About us"),
      privacy: pair("Politique de confidentialité", "Privacy policy"),
      copyright: pair("© 2026 Tukki Consulting", "© 2026 Tukki Consulting"),
      links: [
        { href: "/etudiants", label: pair("Étudiants", "Students") },
        { href: "/entreprises", label: pair("Professionnels", "Business") },
        { href: "/tourisme", label: pair("Tourisme", "Tourism") },
        { href: "/sante", label: pair("Santé", "Health") },
      ],
    },
  },
  {
    key: "home.hero",
    label: "Accueil · Hero",
    group: "Accueil",
    fields: [
      bi("brandLine1", "Marque ligne 1"),
      bi("brandLine2", "Marque ligne 2"),
      bi("title", "Titre", "textarea"),
      bi("body", "Sous-titre", "textarea"),
      bi("ctaPrimary", "Bouton principal"),
      bi("ctaSecondary", "Bouton secondaire"),
      bi("imageAlt", "Texte alternatif image"),
    ],
    defaults: {
      brandLine1: pair("tukki", "tukki"),
      brandLine2: pair("CONSULTING", "CONSULTING"),
      title: pair(
        "Votre dossier Schengen, préparé pour convaincre.",
        "Your Schengen file, built to convince.",
      ),
      body: pair(
        "Depuis Dakar, Tukki Consulting prépare, vérifie et suit votre demande : études, affaires, famille ou soins.",
        "From Dakar, Tukki Consulting prepares, reviews and tracks your application: studies, business, family or medical care.",
      ),
      ctaPrimary: pair("Envoyer ma demande", "Send my request"),
      ctaSecondary: pair("Découvrir nos formules", "Explore our plans"),
      imageAlt: pair(
        "Tukki Consulting, accompagnement visa Schengen depuis Dakar",
        "Tukki Consulting, Schengen visa support from Dakar",
      ),
    },
  },
  {
    key: "home.marquee",
    label: "Accueil · Bandeau destinations",
    group: "Accueil",
    fields: [
      bi("label", "Libellé accessibilité"),
      {
        type: "list",
        key: "countries",
        label: "Pays",
        itemLabel: "Pays",
        itemFields: [
          { type: "text", key: "code", label: "Code ISO (fr, es…)" },
          bi("name", "Nom"),
        ],
      },
    ],
    defaults: {
      label: pair("Destinations Schengen", "Schengen destinations"),
      countries: [
        { code: "fr", name: pair("France", "France") },
        { code: "es", name: pair("Espagne", "Spain") },
        { code: "it", name: pair("Italie", "Italy") },
        { code: "de", name: pair("Allemagne", "Germany") },
        { code: "be", name: pair("Belgique", "Belgium") },
        { code: "pt", name: pair("Portugal", "Portugal") },
        { code: "nl", name: pair("Pays-Bas", "Netherlands") },
        { code: "at", name: pair("Autriche", "Austria") },
        { code: "se", name: pair("Suède", "Sweden") },
        { code: "gr", name: pair("Grèce", "Greece") },
      ],
    },
  },
  {
    key: "home.tracks",
    label: "Accueil · Parcours (cartes)",
    group: "Accueil",
    fields: [
      bi("title", "Titre de section", "textarea"),
      {
        type: "list",
        key: "items",
        label: "Cartes",
        itemLabel: "Carte",
        itemFields: [
          { type: "text", key: "href", label: "URL" },
          { type: "text", key: "imageKey", label: "Clé image (media)" },
          { type: "text", key: "imagePosition", label: "Position image CSS" },
          { type: "text", key: "number", label: "Numéro" },
          bi("title", "Titre"),
          bi("body", "Texte", "textarea"),
          bi("cta", "Lien CTA"),
        ],
      },
    ],
    defaults: {
      title: pair(
        "Pour quel voyage préparez-vous votre visa ?",
        "What kind of trip are you preparing for?",
      ),
      items: [
        {
          href: "/etudiants",
          imageKey: "trackStudents",
          imagePosition: "center 20%",
          number: "01",
          title: pair("Étudiants", "Students"),
          body: pair(
            "Études et mobilité : Campus France, ressources, hébergement, entretien.",
            "Studies and mobility: Campus France, funding, housing, interview.",
          ),
          cta: pair(
            "Voir la formule Student Care",
            "See the Student Care plan",
          ),
        },
        {
          href: "/entreprises",
          imageKey: "trackBusiness",
          imagePosition: "center 22%",
          number: "02",
          title: pair("Professionnels", "Professionals"),
          body: pair(
            "Missions et foires : invitations, ordres de mission, traitement prioritaire.",
            "Missions and trade fairs: invitations, mission orders, priority handling.",
          ),
          cta: pair(
            "Voir la formule Pro Executive",
            "See the Pro Executive plan",
          ),
        },
        {
          href: "/tourisme",
          imageKey: "tourism",
          imagePosition: "center 40%",
          number: "03",
          title: pair("Tourisme & famille", "Tourism & family"),
          body: pair(
            "Court séjour : dossier conforme, réservations et RDV.",
            "Short stay: a compliant file, bookings and appointment.",
          ),
          cta: pair("Voir la formule Essentielle", "See the Essential plan"),
        },
        {
          href: "/sante",
          imageKey: "medical",
          imagePosition: "center 35%",
          number: "04",
          title: pair("Santé & soins", "Health & care"),
          body: pair(
            "Soins et urgences médicales : coordination hospitalière, dossier accéléré.",
            "Medical care and emergencies: hospital coordination, accelerated file.",
          ),
          cta: pair(
            "Voir la formule Urgence Santé",
            "See the Health Priority plan",
          ),
        },
      ],
    },
  },
  {
    key: "home.services",
    label: "Accueil · Services",
    group: "Accueil",
    fields: [
      bi("title", "Titre", "textarea"),
      bi("needTitle", "Titre encart besoin"),
      bi("needBody", "Texte encart besoin", "textarea"),
      bi("needCta", "Bouton encart besoin"),
      {
        type: "list",
        key: "items",
        label: "Services",
        itemLabel: "Service",
        itemFields: [
          { type: "text", key: "tone", label: "Ton (photo | dusk)" },
          { type: "text", key: "imageKey", label: "Clé image" },
          bi("title", "Titre"),
          bi("body", "Texte", "textarea"),
        ],
      },
    ],
    defaults: {
      title: pair(
        "Ce que nous faisons, concrètement.",
        "What we do, concretely.",
      ),
      needTitle: pair("Un besoin particulier ?", "A specific need?"),
      needBody: pair(
        "Chaque demande est étudiée sans engagement. Nous vous orientons vers la formule adaptée.",
        "Every request is reviewed with no obligation. We guide you to the right plan.",
      ),
      needCta: pair("Demander un devis", "Request a quote"),
      items: [
        {
          tone: "photo",
          imageKey: "passportDesk",
          title: pair("Analyse du profil", "Profile review"),
          body: pair(
            "Nous lisons votre situation, listons les pièces utiles et construisons un dossier cohérent.",
            "We read your situation, list the right documents and build a coherent file.",
          ),
        },
        {
          tone: "photo",
          imageKey: "documents",
          title: pair("Double contrôle", "Double check"),
          body: pair(
            "Assistant + consultant relisent chaque dossier avant dépôt pour limiter les erreurs évitables.",
            "An assistant and a consultant review every file before submission to cut avoidable errors.",
          ),
        },
        {
          tone: "photo",
          imageKey: "interview",
          title: pair("Préparation à l'entretien", "Interview prep"),
          body: pair(
            "Vous répétez les questions clés pour présenter votre projet avec clarté.",
            "You rehearse the key questions so you present your project with clarity.",
          ),
        },
        {
          tone: "photo",
          imageKey: "flight",
          title: pair(
            "Assurance, réservations & RDV",
            "Insurance, bookings & appointments",
          ),
          body: pair(
            "Assurance Schengen, réservations conformes et prise de rendez-vous.",
            "Schengen insurance, compliant bookings and appointment booking.",
          ),
        },
        {
          tone: "dusk",
          imageKey: "luggage",
          title: pair(
            "Suivi jusqu'à la décision",
            "Follow-up until the decision",
          ),
          body: pair(
            "Nous restons avec vous après le dépôt, jusqu'à la réponse du consulat.",
            "We stay with you after submission, until the consulate replies.",
          ),
        },
      ],
    },
  },
  {
    key: "home.steps",
    label: "Accueil · Étapes",
    group: "Accueil",
    fields: [
      bi("title", "Titre", "textarea"),
      {
        type: "list",
        key: "items",
        label: "Étapes",
        itemLabel: "Étape",
        itemFields: [
          bi("label", "Numéro / label"),
          bi("title", "Titre"),
          bi("body", "Texte", "textarea"),
        ],
      },
    ],
    defaults: {
      title: pair(
        "Un parcours simple, du premier message à la décision.",
        "A simple path, from first message to decision.",
      ),
      items: [
        {
          label: pair("01", "01"),
          title: pair("Vous nous écrivez", "You write to us"),
          body: pair(
            "Décrivez votre projet. Nous vous répondons sous 48 heures.",
            "Describe your project. We reply within 48 hours.",
          ),
        },
        {
          label: pair("02", "02"),
          title: pair("Nous construisons le dossier", "We build the file"),
          body: pair(
            "Pièces, réservations, assurance : tout est préparé pour le dépôt.",
            "Documents, bookings, insurance: everything prepared for submission.",
          ),
        },
        {
          label: pair("03", "03"),
          title: pair(
            "Nous contrôlons, puis vous déposez",
            "We check, then you submit",
          ),
          body: pair(
            "Double vérification, RDV, entretien préparé, puis dépôt.",
            "Double check, appointment, prepared interview, then submission.",
          ),
        },
        {
          label: pair("04", "04"),
          title: pair(
            "Nous suivons jusqu'à la décision",
            "We follow until the decision",
          ),
          body: pair(
            "Suivi après dépôt. Pour les études ou les soins, accompagnement aussi après.",
            "Post-submission tracking. For studies or medical care, support continues after.",
          ),
        },
      ],
    },
  },
  {
    key: "home.why",
    label: "Accueil · Pourquoi Tukki",
    group: "Accueil",
    fields: [
      bi("title", "Titre", "textarea"),
      bi("subtitle", "Sous-titre", "textarea"),
      bi("intro", "Intro", "textarea"),
      bi("listTitle", "Titre liste"),
      bi("cta", "Bouton CTA"),
      titleBodyList("items", "Engagements"),
    ],
    defaults: {
      title: pair(
        "Pourquoi choisir tukki CONSULTING ?",
        "Why choose tukki CONSULTING?",
      ),
      subtitle: pair(
        "La confiance, l'écoute et l'expertise au service de votre projet",
        "Trust, listening and expertise for your project",
      ),
      intro: pair(
        "Nous transformons la complexité des démarches administratives en un parcours simple, fluide et sécurisé.",
        "We turn complex administrative steps into a simple, smooth and secure path.",
      ),
      listTitle: pair(
        "Nos engagements pour votre réussite",
        "Our commitments to your success",
      ),
      cta: pair("Démarrer mon accompagnement", "Start my support"),
      items: [
        {
          title: pair(
            "Accompagnement personnalisé",
            "Personalised support",
          ),
          body: pair(
            "Chaque parcours est unique. Nous analysons votre profil en détail pour vous proposer une stratégie sur mesure.",
            "Every path is unique. We analyse your profile in detail to propose a tailored strategy.",
          ),
        },
        {
          title: pair("Transparence totale", "Full transparency"),
          body: pair(
            "Pas de mauvaises surprises. Nous vous donnons un avis clair et honnête sur la faisabilité de votre dossier dès le départ.",
            "No unpleasant surprises. We give a clear, honest view of your file’s feasibility from the start.",
          ),
        },
        {
          title: pair("Gain de temps précieux", "Valuable time saved"),
          body: pair(
            "Fini le stress des formulaires complexes. Nous gérons la constitution et l'optimisation de votre dossier de A à Z.",
            "No more stress over complex forms. We handle building and optimising your file from A to Z.",
          ),
        },
        {
          title: pair(
            "Suivi rigoureux et réactif",
            "Rigorous, responsive follow-up",
          ),
          body: pair(
            "Restez informé à chaque étape. Notre équipe est à vos côtés pour répondre à vos questions jusqu'au dépôt de votre demande.",
            "Stay informed at every step. Our team stays with you until your application is filed.",
          ),
        },
        {
          title: pair(
            "Conseils d'experts adaptés",
            "Expert, tailored advice",
          ),
          body: pair(
            "Bénéficiez de recommandations ciblées et conformes aux dernières exigences des services consulaires.",
            "Get targeted recommendations aligned with the latest consular requirements.",
          ),
        },
      ],
    },
  },
  {
    key: "home.form",
    label: "Accueil · Formulaire",
    group: "Accueil",
    fields: [
      bi("title", "Titre"),
      bi("subtitle", "Sous-titre"),
      bi("body", "Intro", "textarea"),
      bi("body2", "Intro 2", "textarea"),
      bi("formTitle", "Titre du formulaire"),
      {
        type: "list",
        key: "points",
        label: "Points forts",
        itemLabel: "Point",
        itemFields: [bi("text", "Texte")],
      },
      bi("profile", "Label motif"),
      {
        type: "list",
        key: "profileOptions",
        label: "Options motif",
        itemLabel: "Option",
        itemFields: [bi("text", "Libellé")],
      },
      bi("destination", "Label destination"),
      bi("name", "Label nom"),
      bi("namePlaceholder", "Placeholder nom"),
      bi("email", "Label e-mail"),
      bi("emailPlaceholder", "Placeholder e-mail"),
      bi("phone", "Label téléphone"),
      bi("phonePlaceholder", "Placeholder téléphone"),
      bi("project", "Label projet"),
      bi("projectPlaceholder", "Placeholder projet", "textarea"),
      bi("submit", "Bouton envoyer"),
      bi("sending", "Bouton envoi en cours"),
      bi("fineprint", "Mentions sous le bouton", "textarea"),
      bi("sentTitle", "Titre confirmation"),
      bi("sentBody", "Texte confirmation", "textarea"),
    ],
    defaults: {
      title: pair("Formulaire de contact", "Contact form"),
      subtitle: pair(
        "Parlez-nous de votre projet de mobilité",
        "Tell us about your mobility project",
      ),
      body: pair(
        "Chaque situation est unique. Complétez le formulaire ci-dessous : notre équipe analysera votre demande avec attention et vous recontactera dans les plus brefs délais pour vous proposer un accompagnement adapté.",
        "Every situation is unique. Complete the form below: our team will review your request carefully and get back to you promptly with tailored support.",
      ),
      body2: pair(
        "Votre projet de mobilité mérite une attention particulière. Faites le premier pas, nous vous accompagnons pour la suite.",
        "Your mobility project deserves careful attention. Take the first step — we support you from there.",
      ),
      formTitle: pair(
        "Formulaire de demande d'accompagnement",
        "Support request form",
      ),
      points: [
        {
          text: pair(
            "Évaluation gratuite et sans engagement",
            "Free, no-obligation assessment",
          ),
        },
        {
          text: pair(
            "Réponse sous 48 h avec la formule adaptée",
            "Reply within 48 hours with the right plan",
          ),
        },
        {
          text: pair(
            "Confidentialité totale de vos informations",
            "Your information stays fully confidential",
          ),
        },
      ],
      profile: pair("Motif du voyage", "Purpose of travel"),
      profileOptions: [
        { text: pair("Tourisme", "Tourism") },
        { text: pair("Affaires", "Business") },
        { text: pair("Études", "Studies") },
        { text: pair("Travail", "Work") },
        { text: pair("Long séjour", "Long stay") },
        { text: pair("Regroupement", "Family reunification") },
      ],
      destination: pair("Destination souhaitée", "Desired destination"),
      name: pair("Nom & prénom", "First & last name"),
      namePlaceholder: pair("Votre nom et prénom", "Your full name"),
      email: pair("Adresse e-mail", "Email address"),
      emailPlaceholder: pair("vous@exemple.com", "you@example.com"),
      phone: pair("Téléphone (WhatsApp)", "Phone (WhatsApp)"),
      phonePlaceholder: pair("+221 77 000 00 00", "+221 77 000 00 00"),
      project: pair(
        "Présentez-nous votre projet",
        "Tell us about your project",
      ),
      projectPlaceholder: pair(
        "Décrivez vos dates de voyage prévues, votre situation actuelle et vos interrogations…",
        "Describe your planned travel dates, current situation and questions…",
      ),
      submit: pair("Envoyer ma demande", "Send my request"),
      sending: pair("Envoi en cours…", "Sending…"),
      fineprint: pair(
        "Gratuit · Sans engagement · Confirmation e-mail + SMS · Réponse sous 48 h",
        "Free · No obligation · Email + SMS confirmation · Reply within 48 h",
      ),
      sentTitle: pair("Demande bien reçue", "Request received"),
      sentBody: pair(
        "Merci. Votre demande est bien reçue. Un e-mail et un SMS de confirmation vous sont envoyés. Nous vous recontactons sous peu.",
        "Thank you. Your request has been received. A confirmation email and SMS are on the way. We will get back to you shortly.",
      ),
    },
  },
  {
    key: "home.legal",
    label: "Accueil · Note responsabilité",
    group: "Accueil",
    fields: [
      bi("title", "Titre", "textarea"),
      bi("lead", "Chapô"),
      labelBodyList("items", "Clauses"),
    ],
    defaults: {
      title: pair(
        "Engagement, responsabilité et périmètre d'intervention",
        "Commitment, responsibility and scope of work",
      ),
      lead: pair(
        "Note d'information et clause de non-responsabilité",
        "Information note and disclaimer",
      ),
      items: [
        {
          label: pair("Nature de la prestation", "Nature of the service"),
          body: pair(
            "tukki CONSULTING fournit un service de conseil, d'assistance administrative et d'accompagnement jusqu'au dépôt du dossier auprès du prestataire officiel VFS Global.",
            "tukki CONSULTING provides consulting, administrative assistance and support up to filing with the official provider VFS Global.",
          ),
        },
        {
          label: pair(
            "Avis des autorités consulaires",
            "Consular decisions",
          ),
          body: pair(
            "La décision finale d'octroi ou de refus de visa appartient exclusivement au Consulat. tukki CONSULTING ne peut interférer dans ce processus ni garantir l'obtention du visa.",
            "The final decision to grant or refuse a visa rests exclusively with the Consulate. tukki CONSULTING cannot interfere in that process or guarantee a visa will be issued.",
          ),
        },
        {
          label: pair("Sincérité des documents", "Document authenticity"),
          body: pair(
            "Le client est seul responsable de l'authenticité et de la véracité des documents fournis. tukki CONSULTING décline toute responsabilité en cas de documents falsifiés, de fausses déclarations ou d'omissions de la part du demandeur.",
            "The client alone is responsible for the authenticity and truthfulness of documents provided. tukki CONSULTING accepts no liability for forged documents, false statements or omissions by the applicant.",
          ),
        },
        {
          label: pair("Refus de visa", "Visa refusal"),
          body: pair(
            "tukki CONSULTING ne saurait être tenu responsable en cas de refus de visa par les autorités consulaires.",
            "tukki CONSULTING cannot be held responsible if consular authorities refuse a visa.",
          ),
        },
      ],
    },
  },
  parcoursDoc("page.etudiants", "Page Étudiants", "etudiants"),
  parcoursDoc("page.entreprises", "Page Professionnels", "entreprises"),
  parcoursDoc("page.tourisme", "Page Tourisme & famille", "tourisme"),
  parcoursDoc("page.sante", "Page Santé", "sante"),
  {
    key: "page.about",
    label: "Page Qui sommes-nous",
    group: "Pages",
    fields: [
      bi("title", "Titre"),
      bi("subtitle", "Sous-titre"),
      bi("body", "Intro", "textarea"),
      bi("missionTitle", "Titre mission"),
      bi("missionLead", "Lead mission", "textarea"),
      bi("missionBody", "Corps mission", "textarea"),
      bi("missionNote", "Note mission", "textarea"),
      {
        type: "list",
        key: "missionPoints",
        label: "Points mission",
        itemLabel: "Point",
        itemFields: [bi("text", "Texte", "textarea")],
      },
      bi("valuesTitle", "Titre valeurs"),
      titleBodyList("values", "Valeurs / chiffres"),
      bi("audiencesTitle", "Titre audiences"),
      {
        type: "list",
        key: "audiences",
        label: "Audiences",
        itemLabel: "Audience",
        itemFields: [
          { type: "text", key: "href", label: "URL" },
          bi("title", "Titre"),
          bi("body", "Texte", "textarea"),
        ],
      },
      bi("ctaTitle", "Titre CTA"),
      bi("ctaBody", "Texte CTA", "textarea"),
      bi("ctaButton", "Bouton CTA"),
    ],
    defaults: {
      title: pair("Qui sommes-nous ?", "Who we are"),
      subtitle: pair(
        "Vos démarches de visa, guidées par des experts du domaine",
        "Your visa steps, guided by field experts",
      ),
      body: pair(
        "La préparation d'un dossier Schengen demande de la précision et une excellente connaissance des exigences consulaires. Grâce à notre expérience terrain, nous simplifions chaque étape de vos démarches administratives.",
        "Preparing a Schengen file demands precision and strong knowledge of consular requirements. With our field experience, we simplify every step of your administrative process.",
      ),
      missionTitle: pair("Notre engagement.", "Our commitment."),
      missionLead: pair(
        "Transformer une procédure souvent perçue comme complexe en un parcours serein, fluide et parfaitement maîtrisé.",
        "Turning a process often seen as complex into a calm, smooth and fully mastered path.",
      ),
      missionBody: pair(
        "Ensemble, nous créons un dossier solide et maximisons vos chances d'obtenir votre visa.",
        "Together, we build a solid file and maximise your chances of obtaining your visa.",
      ),
      missionNote: pair(
        "tukki CONSULTING est un cabinet de conseil indépendant. Nous ne délivrons pas de visas : la décision appartient aux autorités consulaires. Notre rôle est de vous mettre dans les meilleures conditions pour réussir.",
        "tukki CONSULTING is an independent consultancy. We do not issue visas: the decision belongs to consular authorities. Our role is to put you in the best position to succeed.",
      ),
      missionPoints: [
        {
          text: pair(
            "Une méthode claire, adaptée à votre motif de voyage",
            "A clear method, adapted to your travel purpose",
          ),
        },
        {
          text: pair(
            "Double vérification avant dépôt pour limiter les refus évitables",
            "Double verification before filing to limit avoidable refusals",
          ),
        },
        {
          text: pair(
            "Quatre formules : Essentielle, Student Care, Pro Executive, Urgence Santé",
            "Four plans: Essential, Student Care, Pro Executive, Health Priority",
          ),
        },
      ],
      valuesTitle: pair(
        "tukki CONSULTING en chiffres",
        "tukki CONSULTING in figures",
      ),
      values: [
        {
          title: pair("100% de rigueur", "100% rigour"),
          body: pair(
            "Dans le traitement de votre dossier, chaque pièce et chaque étape sont vérifiées avec exigence.",
            "In processing your file, every document and every step is checked with high standards.",
          ),
        },
        {
          title: pair("< 48h", "< 48h"),
          body: pair(
            "Pour prendre en compte votre demande et vous répondre avec une première lecture claire.",
            "To acknowledge your request and reply with a clear first reading.",
          ),
        },
        {
          title: pair("Proximité", "Proximity"),
          body: pair(
            "Basés à Dakar, nous connaissons le terrain sénégalais, les délais locaux et les attentes des consulats européens.",
            "Based in Dakar, we know the Senegalese context, local timelines and what European consulates expect.",
          ),
        },
      ],
      audiencesTitle: pair(
        "Pour qui nous travaillons.",
        "Who we work with.",
      ),
      audiences: [
        {
          href: "/etudiants",
          title: pair("Étudiants", "Students"),
          body: pair(
            "Formule Student Care · Campus France, ressources, entretien.",
            "Student Care Plan · Campus France, funding, interview.",
          ),
        },
        {
          href: "/entreprises",
          title: pair("Professionnels", "Professionals"),
          body: pair(
            "Formule Pro Executive · missions, foires, invitations.",
            "Pro Executive Plan · missions, fairs, invitations.",
          ),
        },
        {
          href: "/tourisme",
          title: pair("Tourisme & famille", "Tourism & family"),
          body: pair(
            "Formule Essentielle · court séjour, visites, événements.",
            "Essential Plan · short stay, visits, events.",
          ),
        },
        {
          href: "/sante",
          title: pair("Santé", "Health"),
          body: pair(
            "Formule Urgence Santé · soins, C.I.A., coordination hospitalière.",
            "Health Priority Plan · care, evacuation, hospital coordination.",
          ),
        },
      ],
      ctaTitle: pair(
        "Parlez-nous de votre projet.",
        "Tell us about your project.",
      ),
      ctaBody: pair(
        "Évaluation gratuite sous 48 heures. Décrivez votre situation : un conseiller Tukki vous répond.",
        "Free assessment within 48 hours. Describe your situation: a Tukki advisor replies.",
      ),
      ctaButton: pair("Envoyer ma demande", "Send my request"),
    },
  },
];

export const CMS_BY_KEY = Object.fromEntries(
  CMS_CATALOG.map((doc) => [doc.key, doc]),
) as Record<string, CmsDocDefinition>;

export function getCmsDefaults(key: string): Record<string, unknown> {
  return (CMS_BY_KEY[key]?.defaults ?? {}) as Record<string, unknown>;
}

export function listCmsGroups() {
  const groups = new Map<string, CmsDocDefinition[]>();
  for (const doc of CMS_CATALOG) {
    const list = groups.get(doc.group) ?? [];
    list.push(doc);
    groups.set(doc.group, list);
  }
  return groups;
}
