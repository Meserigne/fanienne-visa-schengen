export type Destination = {
  code: string;
  flag: string;
  fr: string;
  en: string;
};

/** ISO country codes + emoji flags for Schengen destinations shown on the site. */
export const DESTINATIONS: Destination[] = [
  { code: "fr", flag: "🇫🇷", fr: "France", en: "France" },
  { code: "es", flag: "🇪🇸", fr: "Espagne", en: "Spain" },
  { code: "it", flag: "🇮🇹", fr: "Italie", en: "Italy" },
  { code: "de", flag: "🇩🇪", fr: "Allemagne", en: "Germany" },
  { code: "be", flag: "🇧🇪", fr: "Belgique", en: "Belgium" },
  { code: "pt", flag: "🇵🇹", fr: "Portugal", en: "Portugal" },
  { code: "eu", flag: "🇪🇺", fr: "Autre pays Schengen", en: "Other Schengen country" },
];

export type CityDestination = {
  city: { fr: string; en: string };
  code: string;
  flag: string;
};

export const CITY_DESTINATIONS: CityDestination[] = [
  { city: { fr: "Paris", en: "Paris" }, code: "fr", flag: "🇫🇷" },
  { city: { fr: "Madrid", en: "Madrid" }, code: "es", flag: "🇪🇸" },
  { city: { fr: "Berlin", en: "Berlin" }, code: "de", flag: "🇩🇪" },
  { city: { fr: "Rome", en: "Rome" }, code: "it", flag: "🇮🇹" },
  { city: { fr: "Bruxelles", en: "Brussels" }, code: "be", flag: "🇧🇪" },
  { city: { fr: "Lisbonne", en: "Lisbon" }, code: "pt", flag: "🇵🇹" },
  { city: { fr: "Amsterdam", en: "Amsterdam" }, code: "nl", flag: "🇳🇱" },
  { city: { fr: "Vienne", en: "Vienna" }, code: "at", flag: "🇦🇹" },
  { city: { fr: "Stockholm", en: "Stockholm" }, code: "se", flag: "🇸🇪" },
  { city: { fr: "Athènes", en: "Athens" }, code: "gr", flag: "🇬🇷" },
];
