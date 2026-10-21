import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminApi } from "@/lib/admin/api";

export const runtime = "nodejs";

export async function GET() {
  const { error } = await requireAdminApi();
  if (error) return error;

  const blocks = await prisma.contentBlock.findMany({
    orderBy: { key: "asc" },
  });
  return NextResponse.json({ blocks });
}

export async function POST(request: Request) {
  const { error } = await requireAdminApi();
  if (error) return error;

  const body = (await request.json()) as Record<string, unknown>;
  const key = String(body.key || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "");

  if (!key || !body.label) {
    return NextResponse.json(
      { error: "Clé et libellé requis." },
      { status: 400 },
    );
  }

  const block = await prisma.contentBlock.create({
    data: {
      key,
      label: String(body.label),
      titleFr: String(body.titleFr || ""),
      titleEn: String(body.titleEn || ""),
      bodyFr: String(body.bodyFr || ""),
      bodyEn: String(body.bodyEn || ""),
    },
  });

  return NextResponse.json({ block }, { status: 201 });
}
