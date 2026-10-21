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

  const block = await prisma.contentBlock.update({
    where: { id },
    data: {
      ...(body.label !== undefined ? { label: String(body.label) } : {}),
      ...(body.titleFr !== undefined ? { titleFr: String(body.titleFr) } : {}),
      ...(body.titleEn !== undefined ? { titleEn: String(body.titleEn) } : {}),
      ...(body.bodyFr !== undefined ? { bodyFr: String(body.bodyFr) } : {}),
      ...(body.bodyEn !== undefined ? { bodyEn: String(body.bodyEn) } : {}),
    },
  });

  return NextResponse.json({ block });
}

export async function DELETE(_request: Request, ctx: Ctx) {
  const { error } = await requireAdminApi();
  if (error) return error;
  const { id } = await ctx.params;
  await prisma.contentBlock.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
