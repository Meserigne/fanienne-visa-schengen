"use client";

import { ParcoursPage } from "@/components/parcours-page";

export default function EtudiantsPage() {
  return (
    <ParcoursPage
      cmsKey="page.etudiants"
      heroImageKey="students"
      promiseImageKey="europeCity"
      showHeroCta={false}
      showBottomCta={false}
      heroAlt={{
        fr: "Étudiante accompagnée pour un visa Schengen études depuis le Sénégal",
        en: "Student supported for a Schengen study visa from Senegal",
      }}
    />
  );
}
