import { NextResponse } from "next/server";
import { getPublicCmsMap } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const documents = await getPublicCmsMap();
  return NextResponse.json(
    { documents },
    {
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
      },
    },
  );
}
