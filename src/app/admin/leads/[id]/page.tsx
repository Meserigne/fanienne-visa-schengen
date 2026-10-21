import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { LeadDetailForm } from "@/components/admin/lead-detail-form";

export const dynamic = "force-dynamic";

export default async function AdminLeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/leads" className="text-sm text-[#e84e1b] hover:underline">
          ← Retour aux demandes
        </Link>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{lead.name}</h2>
        <p className="text-sm text-[#5c8ca3]">
          Reçue le {new Date(lead.createdAt).toLocaleString("fr-FR")}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-[#d5e4eb] bg-white p-5 text-sm">
          <Row label="Email" value={lead.email} href={`mailto:${lead.email}`} />
          <Row
            label="Téléphone"
            value={lead.phone || "—"}
            href={lead.phone ? `tel:${lead.phone}` : undefined}
          />
          <Row label="Motif" value={lead.profile} />
          <Row label="Destination" value={lead.destination} />
          <Row label="Langue" value={lead.lang.toUpperCase()} />
          <div>
            <p className="text-[#5c8ca3]">Projet</p>
            <p className="mt-1 whitespace-pre-wrap leading-relaxed">
              {lead.project || "—"}
            </p>
          </div>
        </div>

        <LeadDetailForm
          id={lead.id}
          initialStatus={lead.status}
          initialNotes={lead.notes}
        />
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-[#5c8ca3]">{label}</p>
      {href ? (
        <a href={href} className="mt-0.5 font-medium text-[#0a2b3e] hover:underline">
          {value}
        </a>
      ) : (
        <p className="mt-0.5 font-medium">{value}</p>
      )}
    </div>
  );
}
