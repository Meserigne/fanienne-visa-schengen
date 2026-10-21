import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { requireAdminApi } from "@/lib/admin/api";
import { upsertImage } from "@/lib/admin/images";
import { IMAGE_CATALOG } from "@/lib/admin/image-catalog";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const { error } = await requireAdminApi();
  if (error) return error;

  try {
    const form = await request.formData();
    const key = String(form.get("key") || "").trim();
    const file = form.get("file");

    if (!key || !IMAGE_CATALOG.some((i) => i.key === key)) {
      return NextResponse.json({ error: "Clé image invalide." }, { status: 400 });
    }
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Fichier manquant." }, { status: 400 });
    }
    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Fichier trop volumineux (max 8 Mo)." },
        { status: 400 },
      );
    }

    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json(
        { error: "Format non supporté (JPG, PNG, WebP, GIF, SVG)." },
        { status: 400 },
      );
    }

    const ext =
      file.type === "image/png"
        ? "png"
        : file.type === "image/webp"
          ? "webp"
          : file.type === "image/gif"
            ? "gif"
            : file.type === "image/svg+xml"
              ? "svg"
              : "jpg";

    const filename = `${key}-${Date.now()}.${ext}`;
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(uploadsDir, filename), buffer);

    const url = `/uploads/${filename}`;
    const image = await upsertImage(key, url);

    return NextResponse.json({ image, url });
  } catch (e) {
    console.error("Upload error:", e);
    return NextResponse.json(
      { error: "Échec de l’upload." },
      { status: 500 },
    );
  }
}
