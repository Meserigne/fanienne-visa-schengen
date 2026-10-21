import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminApi } from "@/lib/admin/api";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_request: Request, ctx: Ctx) {
  const { error } = await requireAdminApi();
  if (error) return error;
  const { id } = await ctx.params;

  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) {
    return NextResponse.json({ error: "Demande introuvable." }, { status: 404 });
  }
  return NextResponse.json({ lead });
}

export async function PATCH(request: Request, ctx: Ctx) {
  const { error } = await requireAdminApi();
  if (error) return error;
  const { id } = await ctx.params;
  const body = (await request.json()) as {
    status?: string;
    notes?: string;
  };

  const lead = await prisma.lead.update({
    where: { id },
    data: {
      ...(body.status ? { status: body.status } : {}),
      ...(typeof body.notes === "string" ? { notes: body.notes } : {}),
    },
  });

  return NextResponse.json({ lead });
}

export async function DELETE(_request: Request, ctx: Ctx) {
  const { error } = await requireAdminApi();
  if (error) return error;
  const { id } = await ctx.params;
  await prisma.lead.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
