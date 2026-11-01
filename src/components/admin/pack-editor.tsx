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
  imageUrl: string;
  sortOrder: number;
  published: boolean;
};

const ICONS = [
  "Plane",
  "GraduationCap",
  "BriefcaseBusiness",
  "HeartPulse",
  "Users",
  "CalendarDays",
  "Home",
  "Globe",
  "FileText",
  "Clock",
];

const empty: PackFormData = {
  slug: "",
  href: "/#eligibilite",
  icon: "CalendarDays",
  nameFr: "",
  nameEn: "",
  audienceFr: "",
  audienceEn: "",
  includesFr: "",
  includesEn: "",
  priceFr: "",
  priceEn: "",
  imageUrl: "",
  sortOrder: 0,
  published: true,
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function PackEditor({ initial }: { initial?: PackFormData }) {
  const router = useRouter();
  const isNew = !initial?.id;
  const [form, setForm] = useState<PackFormData>(initial || empty);
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof PackFormData>(key: K, value: PackFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onNameFrChange(value: string) {
    set("nameFr", value);
    if (!slugTouched) {
      set("slug", slugify(value.replace(/^formule\s+/i, "")));
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      slug: form.slug || slugify(form.nameFr),
      href: form.href.trim() || "/#eligibilite",
    };

    const url = form.id ? `/api/admin/packs/${form.id}` : "/api/admin/packs";
    const method = form.id ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-[#d5e4eb] bg-white p-5"
    >
      {isNew ? (
        <p className="rounded-xl bg-[#e8f1f5] px-3 py-2 text-sm text-[#17455c]">
          Créez autant de formules que vous voulez. Elles s’affichent
          automatiquement sur la page d’accueil dès qu’elles sont publiées.
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Nom FR"
          value={form.nameFr}
          onChange={onNameFrChange}
          required
        />
        <Field
          label="Nom EN"
          value={form.nameEn}
          onChange={(v) => set("nameEn", v)}
          required
        />
        <Field
          label="Slug (URL technique)"
          value={form.slug}
          onChange={(v) => {
            setSlugTouched(true);
            set("slug", slugify(v));
          }}
          required
        />
        <Field
          label="Lien (page ou #eligibilite)"
          value={form.href}
          onChange={(v) => set("href", v)}
        />
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
        <Field
          label="Tarif FR (optionnel)"
          value={form.priceFr}
          onChange={(v) => set("priceFr", v)}
        />
        <Field
          label="Tarif EN (optionnel)"
          value={form.priceEn}
          onChange={(v) => set("priceEn", v)}
        />
        <div className="sm:col-span-2">
          <Field
            label="URL image formule (optionnel)"
            value={form.imageUrl}
            onChange={(v) => set("imageUrl", v)}
          />
        </div>
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
