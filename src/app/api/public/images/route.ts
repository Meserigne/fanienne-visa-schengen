import { NextResponse } from "next/server";
import { getImageMap } from "@/lib/admin/images";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const images = await getImageMap();
  return NextResponse.json({ images });
}
