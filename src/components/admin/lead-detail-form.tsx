"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const STATUSES = [
  { value: "new", label: "Nouvelle" },
  { value: "contacted", label: "Contactée" },
  { value: "in_progress", label: "En cours" },
  { value: "won", label: "Gagnée" },
  { value: "lost", label: "Perdue" },
];

export function LeadDetailForm({
  id,
  initialStatus,
  initialNotes,
}: {
  id: string;
  initialStatus: string;
  initialNotes: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState(initialStatus);
  const [notes, setNotes] = useState(initialNotes);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function onSave(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, notes }),
    });
    setSaving(false);
    if (!res.ok) {
      setMessage("Erreur lors de l’enregistrement.");
      return;
    }
    setMessage("Enregistré.");
    router.refresh();
  }

  async function onDelete() {
    if (!confirm("Supprimer cette demande ?")) return;
    await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    router.push("/admin/leads");
    router.refresh();
  }

  return (
    <form onSubmit={onSave} className="space-y-4 rounded-2xl border border-[#d5e4eb] bg-white p-5">
      <label className="block text-sm font-medium">
        Statut
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
        >
          {STATUSES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium">
        Notes internes
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={6}
          className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
          placeholder="Suivi, appels, prochaines étapes…"
        />
      </label>

      {message ? <p className="text-sm text-[#17455c]">{message}</p> : null}

      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-[#e84e1b] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? "Enregistrement…" : "Enregistrer"}
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-700"
        >
          Supprimer
        </button>
      </div>
    </form>
  );
}
