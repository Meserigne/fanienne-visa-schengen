"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Block = {
  id: string;
  key: string;
  label: string;
  titleFr: string;
  titleEn: string;
  bodyFr: string;
  bodyEn: string;
};

export function ContentEditor({ blocks: initial }: { blocks: Block[] }) {
  const router = useRouter();
  const [blocks, setBlocks] = useState(initial);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function update(id: string, patch: Partial<Block>) {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...patch } : b)),
    );
  }

  async function save(block: Block) {
    setSavingId(block.id);
    setMessage("");
    const res = await fetch(`/api/admin/content/${block.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(block),
    });
    setSavingId(null);
    if (!res.ok) {
      setMessage("Erreur d’enregistrement.");
      return;
    }
    setMessage(`« ${block.label} » enregistré.`);
    router.refresh();
  }

  async function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: String(fd.get("key") || ""),
        label: String(fd.get("label") || ""),
        titleFr: String(fd.get("titleFr") || ""),
        titleEn: String(fd.get("titleEn") || ""),
        bodyFr: String(fd.get("bodyFr") || ""),
        bodyEn: String(fd.get("bodyEn") || ""),
      }),
    });
    if (!res.ok) {
      setMessage("Impossible de créer le bloc.");
      return;
    }
    e.currentTarget.reset();
    router.refresh();
  }

  return (
    <div className="space-y-6">
      {message ? (
        <p className="rounded-xl bg-[#e8f1f5] px-3 py-2 text-sm text-[#17455c]">
          {message}
        </p>
      ) : null}

      {blocks.map((block) => (
        <div
          key={block.id}
          className="space-y-3 rounded-2xl border border-[#d5e4eb] bg-white p-5"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#e84e1b]">
              {block.key}
            </p>
            <input
              value={block.label}
              onChange={(e) => update(block.id, { label: e.target.value })}
              className="mt-1 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2 text-base font-semibold"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              label="Titre FR"
              value={block.titleFr}
              onChange={(v) => update(block.id, { titleFr: v })}
            />
            <Field
              label="Titre EN"
              value={block.titleEn}
              onChange={(v) => update(block.id, { titleEn: v })}
            />
          </div>
          <label className="block text-sm font-medium">
            Texte FR
            <textarea
              value={block.bodyFr}
              onChange={(e) => update(block.id, { bodyFr: e.target.value })}
              rows={4}
              className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
            />
          </label>
          <label className="block text-sm font-medium">
            Texte EN
            <textarea
              value={block.bodyEn}
              onChange={(e) => update(block.id, { bodyEn: e.target.value })}
              rows={4}
              className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
            />
          </label>
          <button
            type="button"
            onClick={() => save(block)}
            disabled={savingId === block.id}
            className="rounded-xl bg-[#0a2b3e] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {savingId === block.id ? "Enregistrement…" : "Enregistrer"}
          </button>
        </div>
      ))}

      <form
        onSubmit={onCreate}
        className="space-y-3 rounded-2xl border border-dashed border-[#d5e4eb] bg-white p-5"
      >
        <h3 className="font-semibold">Ajouter un bloc de contenu</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Clé (ex: home.cta)" name="key" required />
          <Field label="Libellé" name="label" required />
          <Field label="Titre FR" name="titleFr" />
          <Field label="Titre EN" name="titleEn" />
        </div>
        <label className="block text-sm font-medium">
          Texte FR
          <textarea
            name="bodyFr"
            rows={3}
            className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
          />
        </label>
        <label className="block text-sm font-medium">
          Texte EN
          <textarea
            name="bodyEn"
            rows={3}
            className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
          />
        </label>
        <button
          type="submit"
          className="rounded-xl bg-[#e84e1b] px-4 py-2.5 text-sm font-semibold text-white"
        >
          Créer le bloc
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  name,
  required,
}: {
  label: string;
  value?: string;
  onChange?: (v: string) => void;
  name?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        name={name}
        required={required}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
      />
    </label>
  );
}
