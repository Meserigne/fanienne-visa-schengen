/** Catalogue des images éditables dans le back-office. */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type ImageCatalogItem = {
  key: string;
  label: string;
  category: string;
  defaultUrl: string;
};

export const IMAGE_CATALOG: ImageCatalogItem[] = [
  {
    key: "hero",
    label: "Accueil · Photo hero (fond)",
    category: "accueil",
    defaultUrl: u("1502602898657-3e91760cbb34", 1920),
  },
  {
    key: "trackStudents",
    label: "Accueil · Panneau Étudiants",
    category: "accueil",
    defaultUrl: u("1522529599102-193c0d76b5b6", 1200),
  },
  {
    key: "trackBusiness",
    label: "Accueil · Panneau Professionnels",
    category: "accueil",
    defaultUrl: u("1765607476292-886bc1e648a1", 1200),
  },
  {
    key: "tourism",
    label: "Accueil / Tourisme · Photo principale",
    category: "accueil",
    defaultUrl: u("1488646953014-85cb44e25828", 1400),
  },
  {
    key: "medical",
    label: "Accueil / Santé · Photo principale",
    category: "accueil",
    defaultUrl: u("1576091160399-112ba8d25d1d", 1400),
  },
  {
    key: "passportDesk",
    label: "Services · Analyse du profil",
    category: "services",
    defaultUrl: "/images/passeport-france.jpg",
  },
  {
    key: "documents",
    label: "Services · Double contrôle",
    category: "services",
    defaultUrl: u("1586281380349-632531db7ed4", 1400),
  },
  {
    key: "interview",
    label: "Services · Préparation entretien",
    category: "services",
    defaultUrl: u("1573164574511-73c773193279", 1400),
  },
  {
    key: "flight",
    label: "Services · Assurance & RDV",
    category: "services",
    defaultUrl: u("1436491865332-7a61a109cc05", 1400),
  },
  {
    key: "luggage",
    label: "Services · Suivi jusqu’à la décision",
    category: "services",
    defaultUrl: u("1560518883-ce09059eeffa", 1400),
  },
  {
    key: "students",
    label: "Page Étudiants · Hero",
    category: "pages",
    defaultUrl: u("1531123897727-8f129e1688ce", 1000),
  },
  {
    key: "europeCity",
    label: "Page Étudiants · Photo secondaire",
    category: "pages",
    defaultUrl: u("1552832230-c0197dd311b5", 1400),
  },
  {
    key: "business",
    label: "Page Professionnels · Hero",
    category: "pages",
    defaultUrl: u("1589114207353-1fc98a11070b", 1200),
  },
  {
    key: "visaIllustration",
    label: "Page Professionnels · Illustration visa",
    category: "pages",
    defaultUrl: "/images/visa-schengen.svg",
  },
  {
    key: "tourismDetail",
    label: "Page Tourisme · Photo secondaire",
    category: "pages",
    defaultUrl: u("1469854523086-cc02fe5d8800", 1200),
  },
  {
    key: "medicalDetail",
    label: "Page Santé · Photo secondaire",
    category: "pages",
    defaultUrl: u("1586773860418-d37222d8fce3", 1200),
  },
  {
    key: "about",
    label: "Page Qui sommes-nous",
    category: "pages",
    defaultUrl: u("1573164574511-73c773193279", 1400),
  },
  {
    key: "artists",
    label: "Page Artistes · Hero",
    category: "pages",
    defaultUrl: u("1722481746744-c6c95b900003", 1400),
  },
  {
    key: "artistsStudio",
    label: "Page Artistes · Studio",
    category: "pages",
    defaultUrl: u("1460661419201-fd4cecdf8a8b", 1200),
  },
  {
    key: "logoWhite",
    label: "Logo sur fond sombre",
    category: "marque",
    defaultUrl: "/images/tukki-logo-on-dark.png",
  },
  {
    key: "logoBlack",
    label: "Logo sur fond clair",
    category: "marque",
    defaultUrl: "/images/tukki-logo-on-light.png",
  },
  {
    key: "og",
    label: "Image de partage (réseaux sociaux)",
    category: "marque",
    defaultUrl: "/images/og-tukki.png",
  },
];

export const DEFAULT_IMAGE_MAP: Record<string, string> = Object.fromEntries(
  IMAGE_CATALOG.map((item) => [item.key, item.defaultUrl]),
);

export const CATEGORY_LABELS: Record<string, string> = {
  accueil: "Accueil",
  services: "Services",
  pages: "Pages",
  marque: "Marque",
  general: "Général",
};
