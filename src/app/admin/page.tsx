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

export default async function AdminDashboardPage() {
  const [leadCount, newLeads, packCount, recent] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "new" } }),
    prisma.pack.count({ where: { published: true } }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 8,
    }),
  ]);

  const cards = [
    { label: "Demandes totales", value: leadCount, href: "/admin/leads" },
    { label: "Nouvelles", value: newLeads, href: "/admin/leads?status=new" },
    { label: "Formules actives", value: packCount, href: "/admin/packs" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Tableau de bord</h2>
        <p className="mt-1 text-sm text-[#5c8ca3]">
          Vue d’ensemble de l’activité Tukki Consulting.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-2xl border border-[#d5e4eb] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-sm text-[#5c8ca3]">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold">{card.value}</p>
          </Link>
        ))}
      </div>

      <section className="rounded-2xl border border-[#d5e4eb] bg-white">
        <div className="flex items-center justify-between border-b border-[#d5e4eb] px-5 py-4">
          <h3 className="font-semibold">Dernières demandes</h3>
          <Link href="/admin/leads" className="text-sm font-medium text-[#e84e1b]">
            Tout voir →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-[#f3f8fa] text-[#5c8ca3]">
              <tr>
                <th className="px-5 py-3 font-medium">Nom</th>
                <th className="px-5 py-3 font-medium">Motif</th>
                <th className="px-5 py-3 font-medium">Destination</th>
                <th className="px-5 py-3 font-medium">Statut</th>
                <th className="px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recent.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-[#5c8ca3]">
                    Aucune demande pour le moment.
                  </td>
                </tr>
              ) : (
                recent.map((lead) => (
                  <tr key={lead.id} className="border-t border-[#e8f1f5]">
                    <td className="px-5 py-3">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="font-medium text-[#0a2b3e] hover:underline"
                      >
                        {lead.name}
                      </Link>
                      <p className="text-xs text-[#5c8ca3]">{lead.email}</p>
                    </td>
                    <td className="px-5 py-3">{lead.profile}</td>
                    <td className="px-5 py-3">{lead.destination}</td>
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
      </section>
    </div>
  );
}
