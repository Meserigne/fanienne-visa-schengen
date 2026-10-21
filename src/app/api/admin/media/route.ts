import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/api";
import { listManagedImages, upsertImage } from "@/lib/admin/images";
import { IMAGE_CATALOG } from "@/lib/admin/image-catalog";

export const runtime = "nodejs";

export async function GET() {
  const { error } = await requireAdminApi();
  if (error) return error;

  try {
    const images = await listManagedImages();
    return NextResponse.json({ images });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Impossible de charger les médias." },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  const { error } = await requireAdminApi();
  if (error) return error;

  const body = (await request.json()) as { key?: string; url?: string };
  const key = String(body.key || "").trim();
  const url = String(body.url || "").trim();

  if (!key || !IMAGE_CATALOG.some((i) => i.key === key)) {
    return NextResponse.json({ error: "Clé image invalide." }, { status: 400 });
  }
  if (!url) {
    return NextResponse.json({ error: "URL requise." }, { status: 400 });
  }

  const image = await upsertImage(key, url);
  return NextResponse.json({ image });
}
