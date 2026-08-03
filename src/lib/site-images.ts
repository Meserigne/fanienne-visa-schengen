/** Curated photos: mix of people (kept light) + places / documents / travel. */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SITE_IMAGES = {
  /** Official Tooky Consulting logo (local) */
  logo: "/images/tooky-logo.png",

  /** Hero: Paris / Tour Eiffel at dusk */
  hero: u("1502602898657-3e91760cbb34", 1920),

  /** Track students: young Black man */
  trackStudents: u("1522529599102-193c0d76b5b6", 1200),

  /** Track business: Black woman in suit */
  trackBusiness: u("1636144896336-b056be4a8dfe", 1200),

  /** French biometric passport cover */
  passports: "/images/passeport-france-cover.png",

  /** French passport (desk / document view) */
  passportDesk: "/images/passeport-france.jpg",

  /** French passport open pages */
  passportOpen: "/images/passeport-france-open.png",

  /** Documents flat lay (no people) */
  documents: u("1586281380349-632531db7ed4", 1400),

  /** Black professionals in a meeting */
  interview: u("1573164574511-73c773193279", 1400),

  /** Airplane window (no people) */
  flight: u("1436491865332-7a61a109cc05", 1400),

  /** Keys + home (no people) */
  luggage: u("1560518883-ce09059eeffa", 1400),

  /** Students page: Black woman portrait */
  students: u("1531123897727-8f129e1688ce", 1000),

  /** Business page: Black man in suit with phone */
  business: u("1589114207353-1fc98a11070b", 1200),

  /** European city (no people) */
  europeCity: u("1552832230-c0197dd311b5", 1400),

  /** Black woman in suit */
  professionalWoman: u("1636144896336-b056be4a8dfe", 1200),

  /** Madrid skyline (no people) */
  teamWomen: u("1539037116277-4db20889f2d4", 1400),

  /** Stylized Schengen visa sticker illustration */
  visaIllustration: "/images/visa-schengen.svg",

  /** Artists page: West African masked dance / ceremony */
  artists: u("1722481746744-c6c95b900003", 1400),

  /** Artists detail: paintbrushes studio */
  artistsStudio: u("1460661419201-fd4cecdf8a8b", 1200),

  /** Tourism / family: European street travel */
  tourism: u("1488646953014-85cb44e25828", 1400),

  /** Tourism detail: suitcase travel */
  tourismDetail: u("1469854523086-cc02fe5d8800", 1200),

  /** Medical / health care */
  medical: u("1576091160399-112ba8d25d1d", 1400),

  /** Medical detail: hospital corridor calm */
  medicalDetail: u("1586773860418-d37222d8fce3", 1200),

  /** About page: Black professional team in meeting */
  about: u("1573164574511-73c773193279", 1400),
} as const;
