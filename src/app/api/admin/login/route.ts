import { NextResponse } from "next/server";
import {
  createSessionToken,
  loginWithCredentials,
  setSessionCookie,
} from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      password?: string;
    };
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis." },
        { status: 400 },
      );
    }

    const user = await loginWithCredentials(email, password);
    if (!user) {
      return NextResponse.json(
        { error: "Identifiants incorrects." },
        { status: 401 },
      );
    }

    const token = await createSessionToken(user);
    await setSessionCookie(token);

    return NextResponse.json({
      ok: true,
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: "Connexion impossible. Vérifiez la base de données." },
      { status: 500 },
    );
  }
}
