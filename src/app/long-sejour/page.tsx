"use client";

import { ParcoursPage } from "@/components/parcours-page";

export default function LongSejourPage() {
  return (
    <ParcoursPage
      cmsKey="page.long-sejour"
      heroImageKey="longStay"
      promiseImageKey="longStayDetail"
      heroAlt={{
        fr: "Accompagnement visa long séjour et installation en Europe depuis Dakar",
        en: "Long-stay visa and settling-in support in Europe from Dakar",
      }}
    />
  );
}
