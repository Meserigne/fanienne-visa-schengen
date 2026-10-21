import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminApi } from "@/lib/admin/api";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, ctx: Ctx) {
  const { error } = await requireAdminApi();
  if (error) return error;
  const { id } = await ctx.params;
  const body = (await request.json()) as Record<string, unknown>;

  const pack = await prisma.pack.update({
    where: { id },
    data: {
      ...(body.slug
        ? {
            slug: String(body.slug)
              .trim()
              .toLowerCase()
              .replace(/[^a-z0-9-]/g, "-"),
          }
        : {}),
      ...(body.href !== undefined ? { href: String(body.href) } : {}),
      ...(body.icon !== undefined ? { icon: String(body.icon) } : {}),
      ...(body.nameFr !== undefined ? { nameFr: String(body.nameFr) } : {}),
      ...(body.nameEn !== undefined ? { nameEn: String(body.nameEn) } : {}),
      ...(body.audienceFr !== undefined
        ? { audienceFr: String(body.audienceFr) }
        : {}),
      ...(body.audienceEn !== undefined
        ? { audienceEn: String(body.audienceEn) }
        : {}),
      ...(body.includesFr !== undefined
        ? { includesFr: String(body.includesFr) }
        : {}),
      ...(body.includesEn !== undefined
        ? { includesEn: String(body.includesEn) }
        : {}),
      ...(body.priceFr !== undefined ? { priceFr: String(body.priceFr) } : {}),
      ...(body.priceEn !== undefined ? { priceEn: String(body.priceEn) } : {}),
      ...(body.sortOrder !== undefined
        ? { sortOrder: Number(body.sortOrder) }
        : {}),
      ...(body.published !== undefined
        ? { published: Boolean(body.published) }
        : {}),
    },
  });

  return NextResponse.json({ pack });
}

export async function DELETE(_request: Request, ctx: Ctx) {
  const { error } = await requireAdminApi();
  if (error) return error;
  const { id } = await ctx.params;
  await prisma.pack.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
