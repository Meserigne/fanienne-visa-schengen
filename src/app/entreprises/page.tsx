"use client";

import { ParcoursPage } from "@/components/parcours-page";

export default function EntreprisesPage() {
  return (
    <ParcoursPage
      cmsKey="page.entreprises"
      heroImageKey="business"
      promiseImageKey="visaIllustration"
      heroAlt={{
        fr: "Dirigeant PME accompagné pour un visa d'affaires Schengen",
        en: "SME executive supported for a Schengen business visa",
      }}
    />
  );
}
