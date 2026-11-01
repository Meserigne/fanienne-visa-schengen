"use client";

import type { CmsField } from "@/lib/cms/types";
import { isLangPair } from "@/lib/cms/helpers";

type Props = {
  fields: CmsField[];
  value: Record<string, unknown>;
  onChange: (next: Record<string, unknown>) => void;
};

function emptyForField(field: CmsField): unknown {
  if (field.type === "list") return [];
  if ("bilingual" in field && field.bilingual) return { fr: "", en: "" };
  return "";
}

function emptyItem(fields: CmsField[]): Record<string, unknown> {
  const item: Record<string, unknown> = {};
  for (const f of fields) item[f.key] = emptyForField(f);
  return item;
}

function TextInput({
  multiline,
  value,
  onChange,
}: {
  multiline?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5 text-sm text-[#0a2b3e]"
      />
    );
  }
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5 text-sm text-[#0a2b3e]"
    />
  );
}

export function CmsFieldEditor({ fields, value, onChange }: Props) {
  function setKey(key: string, next: unknown) {
    onChange({ ...value, [key]: next });
  }

  return (
    <div className="space-y-5">
      {fields.map((field) => {
        if (field.type === "list") {
          const items = Array.isArray(value[field.key])
            ? (value[field.key] as Record<string, unknown>[])
            : [];
          return (
            <div
              key={field.key}
              className="space-y-3 rounded-2xl border border-[#d5e4eb] bg-[#f8fbfd] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">{field.label}</p>
                <button
                  type="button"
                  onClick={() =>
                    setKey(field.key, [...items, emptyItem(field.itemFields)])
                  }
                  className="rounded-lg bg-[#0a2b3e] px-3 py-1.5 text-xs font-medium text-white"
                >
                  + Ajouter
                </button>
              </div>
              {items.length === 0 ? (
                <p className="text-sm text-[#5c8ca3]">Aucun élément.</p>
              ) : null}
              {items.map((item, index) => (
                <div
                  key={`${field.key}-${index}`}
                  className="space-y-3 rounded-xl border border-[#d5e4eb] bg-white p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#e84e1b]">
                      {field.itemLabel || "Élément"} {index + 1}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        setKey(
                          field.key,
                          items.filter((_, i) => i !== index),
                        )
                      }
                      className="text-xs text-red-600"
                    >
                      Supprimer
                    </button>
                  </div>
                  <CmsFieldEditor
                    fields={field.itemFields}
                    value={item}
                    onChange={(next) => {
                      const copy = [...items];
                      copy[index] = next;
                      setKey(field.key, copy);
                    }}
                  />
                </div>
              ))}
            </div>
          );
        }

        const bilingual = "bilingual" in field && field.bilingual;
        const multiline = field.type === "textarea";

        if (bilingual) {
          const raw = value[field.key];
          const fr = isLangPair(raw) ? raw.fr : "";
          const en = isLangPair(raw) ? raw.en : "";
          return (
            <div key={field.key} className="space-y-2">
              <p className="text-sm font-medium">{field.label}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c8ca3]">
                  FR
                  <TextInput
                    multiline={multiline}
                    value={fr}
                    onChange={(v) => setKey(field.key, { fr: v, en })}
                  />
                </label>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c8ca3]">
                  EN
                  <TextInput
                    multiline={multiline}
                    value={en}
                    onChange={(v) => setKey(field.key, { fr, en: v })}
                  />
                </label>
              </div>
            </div>
          );
        }

        return (
          <label key={field.key} className="block text-sm font-medium">
            {field.label}
            <TextInput
              multiline={multiline}
              value={String(value[field.key] ?? "")}
              onChange={(v) => setKey(field.key, v)}
            />
          </label>
        );
      })}
    </div>
  );
}
