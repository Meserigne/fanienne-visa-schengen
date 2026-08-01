import { SITE_NAME, SITE_URL } from "@/lib/seo";

/** Structured data for Google (ProfessionalService / LocalBusiness). */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    description:
      "Cabinet d'accompagnement visa Schengen à Dakar : étudiants, professionnels, tourisme & famille, soins médicaux.",
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
      "Visa d'affaires",
      "Visa tourisme et famille",
      "Visa médical",
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
