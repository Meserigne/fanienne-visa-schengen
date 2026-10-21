"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const FIELDS = [
  { key: "companyName", label: "Nom de l’entreprise" },
  { key: "contactEmail", label: "Email de contact" },
  { key: "contactPhone", label: "Téléphone" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "address", label: "Adresse" },
  { key: "replyHours", label: "Délai de réponse (heures)" },
] as const;

export function SettingsForm({
  initial,
}: {
  initial: Record<string, string>;
}) {
  const router = useRouter();
  const [values, setValues] = useState(initial);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ settings: values }),
    });
    setSaving(false);
    if (!res.ok) {
      setMessage("Erreur d’enregistrement.");
      return;
    }
    setMessage("Paramètres enregistrés.");
    router.refresh();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl space-y-4 rounded-2xl border border-[#d5e4eb] bg-white p-5"
    >
      {FIELDS.map((field) => (
        <label key={field.key} className="block text-sm font-medium">
          {field.label}
          <input
            value={values[field.key] || ""}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
            }
            className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
          />
        </label>
      ))}

      {message ? <p className="text-sm text-[#17455c]">{message}</p> : null}

      <button
        type="submit"
        disabled={saving}
        className="rounded-xl bg-[#e84e1b] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {saving ? "Enregistrement…" : "Enregistrer"}
      </button>
    </form>
  );
}
