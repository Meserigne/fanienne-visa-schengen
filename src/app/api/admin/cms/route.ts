import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin/api";
import { getAllCmsDocuments } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const { error } = await requireAdminApi();
  if (error) return error;
  const documents = await getAllCmsDocuments();
  return NextResponse.json({ documents });
}
