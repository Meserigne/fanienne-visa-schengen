"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export type PackFormData = {
  id?: string;
  slug: string;
  href: string;
  icon: string;
  nameFr: string;
  nameEn: string;
  audienceFr: string;
  audienceEn: string;
  includesFr: string;
  includesEn: string;
  priceFr: string;
  priceEn: string;
  sortOrder: number;
  published: boolean;
};

const ICONS = ["Plane", "GraduationCap", "BriefcaseBusiness", "HeartPulse", "Users"];

const empty: PackFormData = {
  slug: "",
  href: "",
  icon: "Plane",
  nameFr: "",
  nameEn: "",
  audienceFr: "",
  audienceEn: "",
  includesFr: "",
  includesEn: "",
  priceFr: "",
  priceEn: "",
  sortOrder: 0,
  published: true,
};

export function PackEditor({ initial }: { initial?: PackFormData }) {
  const router = useRouter();
  const [form, setForm] = useState<PackFormData>(initial || empty);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof PackFormData>(key: K, value: PackFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const url = form.id ? `/api/admin/packs/${form.id}` : "/api/admin/packs";
    const method = form.id ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = (await res.json()) as { error?: string };
    setSaving(false);

    if (!res.ok) {
      setError(data.error || "Erreur d’enregistrement.");
      return;
    }

    router.push("/admin/packs");
    router.refresh();
  }

  async function onDelete() {
    if (!form.id || !confirm("Supprimer cette formule ?")) return;
    await fetch(`/api/admin/packs/${form.id}`, { method: "DELETE" });
    router.push("/admin/packs");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-[#d5e4eb] bg-white p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom FR" value={form.nameFr} onChange={(v) => set("nameFr", v)} required />
        <Field label="Nom EN" value={form.nameEn} onChange={(v) => set("nameEn", v)} required />
        <Field label="Slug" value={form.slug} onChange={(v) => set("slug", v)} required />
        <Field label="Lien (href)" value={form.href} onChange={(v) => set("href", v)} />
        <Field
          label="Audience FR"
          value={form.audienceFr}
          onChange={(v) => set("audienceFr", v)}
        />
        <Field
          label="Audience EN"
          value={form.audienceEn}
          onChange={(v) => set("audienceEn", v)}
        />
        <Field label="Tarif FR (optionnel)" value={form.priceFr} onChange={(v) => set("priceFr", v)} />
        <Field label="Tarif EN (optionnel)" value={form.priceEn} onChange={(v) => set("priceEn", v)} />
        <label className="block text-sm font-medium">
          Icône
          <select
            value={form.icon}
            onChange={(e) => set("icon", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
          >
            {ICONS.map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </label>
        <Field
          label="Ordre d’affichage"
          value={String(form.sortOrder)}
          onChange={(v) => set("sortOrder", Number(v) || 0)}
          type="number"
        />
      </div>

      <label className="block text-sm font-medium">
        Inclus FR
        <textarea
          value={form.includesFr}
          onChange={(e) => set("includesFr", e.target.value)}
          rows={3}
          className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
        />
      </label>
      <label className="block text-sm font-medium">
        Inclus EN
        <textarea
          value={form.includesEn}
          onChange={(e) => set("includesEn", e.target.value)}
          rows={3}
          className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
        />
      </label>

      <label className="flex items-center gap-2 text-sm font-medium">
        <input
          type="checkbox"
          checked={form.published}
          onChange={(e) => set("published", e.target.checked)}
        />
        Publiée sur le site
      </label>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-[#e84e1b] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {saving ? "Enregistrement…" : "Enregistrer"}
        </button>
        {form.id ? (
          <button
            type="button"
            onClick={onDelete}
            className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-700"
          >
            Supprimer
          </button>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
      />
    </label>
  );
}
