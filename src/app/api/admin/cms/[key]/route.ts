import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/api";
import { CMS_BY_KEY } from "@/lib/cms/catalog";
import { getCmsDocument, saveCmsDocument } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ key: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { error } = await requireAdminApi();
  if (error) return error;
  const { key } = await params;
  if (!CMS_BY_KEY[key]) {
    return NextResponse.json({ error: "Document inconnu." }, { status: 404 });
  }
  const doc = await getCmsDocument(key);
  return NextResponse.json({ document: doc, fields: CMS_BY_KEY[key].fields });
}

export async function PUT(req: Request, { params }: Params) {
  const { error } = await requireAdminApi();
  if (error) return error;
  const { key } = await params;
  if (!CMS_BY_KEY[key]) {
    return NextResponse.json({ error: "Document inconnu." }, { status: 404 });
  }
  const body = await req.json().catch(() => null);
  if (!body || typeof body.data !== "object" || body.data == null) {
    return NextResponse.json({ error: "Données invalides." }, { status: 400 });
  }
  const saved = await saveCmsDocument(key, body.data);
  return NextResponse.json({
    document: {
      key: saved.key,
      label: saved.label,
      group: saved.group,
      data: JSON.parse(saved.data),
      updatedAt: saved.updatedAt,
      id: saved.id,
    },
  });
}
