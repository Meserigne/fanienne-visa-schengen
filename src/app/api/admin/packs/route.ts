import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminApi } from "@/lib/admin/api";

export const runtime = "nodejs";

export async function GET() {
  const { error } = await requireAdminApi();
  if (error) return error;

  const packs = await prisma.pack.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json({ packs });
}

export async function POST(request: Request) {
  const { error } = await requireAdminApi();
  if (error) return error;

  const body = (await request.json()) as Record<string, unknown>;
  const slug = String(body.slug || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!slug || !body.nameFr || !body.nameEn) {
    return NextResponse.json(
      { error: "Slug et noms FR/EN requis." },
      { status: 400 },
    );
  }

  const maxOrder = await prisma.pack.aggregate({ _max: { sortOrder: true } });
  const requestedOrder =
    body.sortOrder === undefined || body.sortOrder === null || body.sortOrder === ""
      ? NaN
      : Number(body.sortOrder);
  const nextOrder = Number.isFinite(requestedOrder)
    ? requestedOrder
    : (maxOrder._max.sortOrder ?? 0) + 1;

  try {
    const pack = await prisma.pack.create({
      data: {
        slug,
        href: String(body.href || "/#eligibilite"),
        icon: String(body.icon || "Plane"),
        nameFr: String(body.nameFr),
        nameEn: String(body.nameEn),
        audienceFr: String(body.audienceFr || ""),
        audienceEn: String(body.audienceEn || ""),
        includesFr: String(body.includesFr || ""),
        includesEn: String(body.includesEn || ""),
        priceFr: String(body.priceFr || ""),
        priceEn: String(body.priceEn || ""),
        imageUrl: String(body.imageUrl || ""),
        sortOrder: nextOrder,
        published: body.published !== false,
      },
    });

    return NextResponse.json({ pack }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Impossible de créer cette formule (slug déjà utilisé ?)." },
      { status: 409 },
    );
  }
}
