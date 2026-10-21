import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminApi } from "@/lib/admin/api";
import { hashPassword, verifyPassword } from "@/lib/auth";

export const runtime = "nodejs";

export async function PUT(request: Request) {
  const { session, error } = await requireAdminApi();
  if (error || !session) return error;

  const body = (await request.json()) as {
    currentPassword?: string;
    newPassword?: string;
  };
  const currentPassword = String(body.currentPassword || "");
  const newPassword = String(body.newPassword || "");

  if (!currentPassword || newPassword.length < 8) {
    return NextResponse.json(
      { error: "Mot de passe actuel requis ; nouveau mot de passe : 8 caractères min." },
      { status: 400 },
    );
  }

  const user = await prisma.adminUser.findUnique({
    where: { id: session.sub },
  });
  if (!user) {
    return NextResponse.json({ error: "Utilisateur introuvable." }, { status: 404 });
  }

  const ok = await verifyPassword(currentPassword, user.passwordHash);
  if (!ok) {
    return NextResponse.json(
      { error: "Mot de passe actuel incorrect." },
      { status: 401 },
    );
  }

  await prisma.adminUser.update({
    where: { id: user.id },
    data: { passwordHash: await hashPassword(newPassword) },
  });

  return NextResponse.json({ ok: true });
}
