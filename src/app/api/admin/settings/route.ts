import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/api";
import { getSettingsMap, upsertSettings } from "@/lib/admin/settings";

export const runtime = "nodejs";

export async function GET() {
  const { error } = await requireAdminApi();
  if (error) return error;
  const settings = await getSettingsMap();
  return NextResponse.json({ settings });
}

export async function PUT(request: Request) {
  const { error } = await requireAdminApi();
  if (error) return error;

  const body = (await request.json()) as { settings?: Record<string, string> };
  if (!body.settings || typeof body.settings !== "object") {
    return NextResponse.json({ error: "Settings invalides." }, { status: 400 });
  }

  const cleaned: Record<string, string> = {};
  for (const [key, value] of Object.entries(body.settings)) {
    cleaned[key] = String(value ?? "");
  }

  await upsertSettings(cleaned);
  const settings = await getSettingsMap();
  return NextResponse.json({ settings });
}
