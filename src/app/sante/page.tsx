"use client";

import { ParcoursPage } from "@/components/parcours-page";

export default function SantePage() {
  return (
    <ParcoursPage
      cmsKey="page.sante"
      heroImageKey="medical"
      promiseImageKey="medicalDetail"
      heroAlt={{
        fr: "Accompagnement visa pour soins médicaux en Europe",
        en: "Visa support for medical care in Europe",
      }}
    />
  );
}
