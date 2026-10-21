import { NextResponse } from "next/server";
import { getPublicSettings } from "@/lib/admin/public-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const settings = await getPublicSettings();
  return NextResponse.json({
    settings: {
      contactEmail: settings.contactEmail,
      contactPhone: settings.contactPhone,
      whatsapp: settings.whatsapp,
      address: settings.address,
      companyName: settings.companyName,
      replyHours: settings.replyHours,
    },
  });
}
