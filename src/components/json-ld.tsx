import { SITE_NAME, SITE_URL } from "@/lib/seo";

/** Structured data for Google (ProfessionalService / LocalBusiness). */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    description:
      "Cabinet d'accompagnement visa Schengen à Dakar pour étudiants et PME / PMI sénégalaises.",
    url: SITE_URL,
    email: "contact@fabienne.sn",
    areaServed: {
      "@type": "Country",
      name: "Sénégal",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    serviceType: [
      "Accompagnement visa Schengen",
      "Visa étudiant",
      "Visa artiste",
      "Visa d'affaires",
    ],
    knowsLanguage: ["fr", "en"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
