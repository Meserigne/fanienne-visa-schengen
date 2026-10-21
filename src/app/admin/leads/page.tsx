import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const STATUS_LABELS: Record<string, string> = {
  new: "Nouvelle",
  contacted: "Contactée",
  in_progress: "En cours",
  won: "Gagnée",
  lost: "Perdue",
};

const STATUSES = ["all", "new", "contacted", "in_progress", "won", "lost"];

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const params = await searchParams;
  const status = params.status || "all";
  const q = params.q?.trim();

  const leads = await prisma.lead.findMany({
    where: {
      ...(status !== "all" ? { status } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q } },
              { email: { contains: q } },
              { phone: { contains: q } },
              { destination: { contains: q } },
              { profile: { contains: q } },
            ],
          }
        : {}),
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Demandes</h2>
        <p className="mt-1 text-sm text-[#5c8ca3]">
          Toutes les demandes reçues via le formulaire du site.
        </p>
      </div>

      <form className="flex flex-wrap gap-2" method="get">
        <input
          name="q"
          defaultValue={q || ""}
          placeholder="Rechercher…"
          className="min-w-[200px] flex-1 rounded-xl border border-[#d5e4eb] bg-white px-3.5 py-2.5 text-sm"
        />
        <select
          name="status"
          defaultValue={status}
          className="rounded-xl border border-[#d5e4eb] bg-white px-3.5 py-2.5 text-sm"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s === "all" ? "Tous les statuts" : STATUS_LABELS[s]}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-xl bg-[#0a2b3e] px-4 py-2.5 text-sm font-medium text-white"
        >
          Filtrer
        </button>
      </form>

      <div className="overflow-hidden rounded-2xl border border-[#d5e4eb] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-[#f3f8fa] text-[#5c8ca3]">
              <tr>
                <th className="px-5 py-3 font-medium">Client</th>
                <th className="px-5 py-3 font-medium">Contact</th>
                <th className="px-5 py-3 font-medium">Projet</th>
                <th className="px-5 py-3 font-medium">Statut</th>
                <th className="px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-[#5c8ca3]">
                    Aucune demande trouvée.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="border-t border-[#e8f1f5]">
                    <td className="px-5 py-3">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="font-medium hover:underline"
                      >
                        {lead.name}
                      </Link>
                    </td>
                    <td className="px-5 py-3">
                      <p>{lead.email}</p>
                      <p className="text-xs text-[#5c8ca3]">{lead.phone || "—"}</p>
                    </td>
                    <td className="px-5 py-3">
                      <p>{lead.profile}</p>
                      <p className="text-xs text-[#5c8ca3]">{lead.destination}</p>
                    </td>
                    <td className="px-5 py-3">
                      <span className="rounded-full bg-[#e8f1f5] px-2.5 py-1 text-xs font-medium">
                        {STATUS_LABELS[lead.status] || lead.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-[#5c8ca3]">
                      {new Date(lead.createdAt).toLocaleString("fr-FR")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
