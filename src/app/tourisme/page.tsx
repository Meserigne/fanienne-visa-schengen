"use client";

import { ParcoursPage } from "@/components/parcours-page";

export default function TourismePage() {
  return (
    <ParcoursPage
      cmsKey="page.tourisme"
      heroImageKey="tourism"
      promiseImageKey="tourismDetail"
      heroAlt={{
        fr: "Voyage tourisme et famille préparé avec Tukki Consulting",
        en: "Tourism and family travel prepared with Tukki Consulting",
      }}
    />
  );
}
