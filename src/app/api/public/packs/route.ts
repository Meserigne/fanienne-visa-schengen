import { NextResponse } from "next/server";
import { getPublishedPacks } from "@/lib/admin/public-data";
import { getContentBlock } from "@/lib/admin/public-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const [packs, block] = await Promise.all([
    getPublishedPacks(),
    getContentBlock("home.packs"),
  ]);

  return NextResponse.json({
    packs: packs.map((pack) => ({
      href: pack.href,
      icon: pack.icon,
      fr: {
        name: pack.nameFr,
        audience: pack.audienceFr,
        includes: pack.includesFr,
        price: pack.priceFr,
      },
      en: {
        name: pack.nameEn,
        audience: pack.audienceEn,
        includes: pack.includesEn,
        price: pack.priceEn,
      },
    })),
    titleFr: block?.titleFr || "Quatre formules, un même niveau d'exigence.",
    titleEn: block?.titleEn || "Four plans, one standard of care.",
    bodyFr:
      block?.bodyFr ||
      "Chaque parcours est adapté à votre motif de voyage. Après évaluation, nous vous indiquons la formule et le tarif adaptés, sans engagement.",
    bodyEn:
      block?.bodyEn ||
      "Each path matches your travel purpose. After assessment, we recommend the right plan and fee, with no obligation.",
  });
}
