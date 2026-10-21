import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function requireAdminApi() {
  const session = await getSession();
  if (!session) {
    return {
      session: null as null,
      error: NextResponse.json({ error: "Non autorisé." }, { status: 401 }),
    };
  }
  return { session, error: null as null };
}
