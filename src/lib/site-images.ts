/** Default photos — overridable via back-office Médias. */

import { DEFAULT_IMAGE_MAP } from "@/lib/admin/image-catalog";

export const DEFAULT_SITE_IMAGES = {
  logoWhite: DEFAULT_IMAGE_MAP.logoWhite,
  logoBlack: DEFAULT_IMAGE_MAP.logoBlack,
  hero: DEFAULT_IMAGE_MAP.hero,
  trackStudents: DEFAULT_IMAGE_MAP.trackStudents,
  trackBusiness: DEFAULT_IMAGE_MAP.trackBusiness,
  passports: "/images/passeport-france-cover.png",
  passportDesk: DEFAULT_IMAGE_MAP.passportDesk,
  passportOpen: "/images/passeport-france-open.png",
  documents: DEFAULT_IMAGE_MAP.documents,
  interview: DEFAULT_IMAGE_MAP.interview,
  flight: DEFAULT_IMAGE_MAP.flight,
  luggage: DEFAULT_IMAGE_MAP.luggage,
  students: DEFAULT_IMAGE_MAP.students,
  business: DEFAULT_IMAGE_MAP.business,
  europeCity: DEFAULT_IMAGE_MAP.europeCity,
  professionalWoman: DEFAULT_IMAGE_MAP.trackBusiness,
  teamWomen: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80",
  visaIllustration: DEFAULT_IMAGE_MAP.visaIllustration,
  artists: DEFAULT_IMAGE_MAP.artists,
  artistsStudio: DEFAULT_IMAGE_MAP.artistsStudio,
  tourism: DEFAULT_IMAGE_MAP.tourism,
  tourismDetail: DEFAULT_IMAGE_MAP.tourismDetail,
  medical: DEFAULT_IMAGE_MAP.medical,
  medicalDetail: DEFAULT_IMAGE_MAP.medicalDetail,
  about: DEFAULT_IMAGE_MAP.about,
  og: DEFAULT_IMAGE_MAP.og,
} as const;

export type SiteImageKey = keyof typeof DEFAULT_SITE_IMAGES;

/** @deprecated Prefer useSiteImages() so back-office overrides apply. */
export const SITE_IMAGES = DEFAULT_SITE_IMAGES;
