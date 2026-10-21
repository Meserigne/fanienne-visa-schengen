import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { PackEditor } from "@/components/admin/pack-editor";

export const dynamic = "force-dynamic";

export default async function AdminEditPackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pack = await prisma.pack.findUnique({ where: { id } });
  if (!pack) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/packs" className="text-sm text-[#e84e1b] hover:underline">
          ← Retour aux formules
        </Link>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{pack.nameFr}</h2>
      </div>
      <PackEditor
        initial={{
          id: pack.id,
          slug: pack.slug,
          href: pack.href,
          icon: pack.icon,
          nameFr: pack.nameFr,
          nameEn: pack.nameEn,
          audienceFr: pack.audienceFr,
          audienceEn: pack.audienceEn,
          includesFr: pack.includesFr,
          includesEn: pack.includesEn,
          priceFr: pack.priceFr,
          priceEn: pack.priceEn,
          imageUrl: pack.imageUrl,
          sortOrder: pack.sortOrder,
          published: pack.published,
        }}
      />
    </div>
  );
}
