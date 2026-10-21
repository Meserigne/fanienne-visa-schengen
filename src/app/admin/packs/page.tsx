import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminPacksPage() {
  const packs = await prisma.pack.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Formules</h2>
          <p className="mt-1 text-sm text-[#5c8ca3]">
            Ajoutez, modifiez ou masquez les formules affichées sur le site.
          </p>
        </div>
        <Link
          href="/admin/packs/new"
          className="rounded-xl bg-[#e84e1b] px-4 py-2.5 text-sm font-semibold text-white"
        >
          + Nouvelle formule
        </Link>
      </div>

      <div className="grid gap-3">
        {packs.map((pack) => (
          <Link
            key={pack.id}
            href={`/admin/packs/${pack.id}`}
            className="rounded-2xl border border-[#d5e4eb] bg-white p-5 transition hover:shadow-md"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#e84e1b]">
                  {pack.audienceFr}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{pack.nameFr}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-[#5c8ca3]">
                  {pack.includesFr}
                </p>
              </div>
              <div className="text-right text-xs text-[#5c8ca3]">
                <p>{pack.published ? "Publiée" : "Masquée"}</p>
                <p>Ordre {pack.sortOrder}</p>
                {pack.priceFr ? <p className="mt-1 font-medium text-[#0a2b3e]">{pack.priceFr}</p> : null}
              </div>
            </div>
          </Link>
        ))}
        {packs.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-[#d5e4eb] bg-white p-8 text-center text-[#5c8ca3]">
            Aucune formule. Créez-en une pour commencer.
          </p>
        ) : null}
      </div>
    </div>
  );
}
