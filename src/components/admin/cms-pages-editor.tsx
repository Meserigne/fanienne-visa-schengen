"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CMS_CATALOG } from "@/lib/cms/catalog";
import { deepMerge } from "@/lib/cms/helpers";
import { CmsFieldEditor } from "@/components/admin/cms-field-editor";

type DocRow = {
  id: string;
  key: string;
  label: string;
  group: string;
  data: Record<string, unknown>;
  updatedAt: string | Date | null;
};

export function CmsPagesEditor({ documents }: { documents: DocRow[] }) {
  const router = useRouter();
  const byKey = useMemo(() => {
    const map = new Map(documents.map((d) => [d.key, d]));
    return map;
  }, [documents]);

  const groups = useMemo(() => {
    const map = new Map<string, typeof CMS_CATALOG>();
    for (const doc of CMS_CATALOG) {
      const list = map.get(doc.group) ?? [];
      list.push(doc);
      map.set(doc.group, list);
    }
    return [...map.entries()];
  }, []);

  const [activeKey, setActiveKey] = useState(CMS_CATALOG[0]?.key ?? "");
  const activeDef = CMS_CATALOG.find((d) => d.key === activeKey);
  const activeRow = byKey.get(activeKey);

  const [draft, setDraft] = useState<Record<string, unknown>>(
    () =>
      deepMerge(
        activeDef?.defaults ?? {},
        activeRow?.data ?? {},
      ) as Record<string, unknown>,
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  function select(key: string) {
    const def = CMS_CATALOG.find((d) => d.key === key);
    const row = byKey.get(key);
    setActiveKey(key);
    setDraft(
      deepMerge(def?.defaults ?? {}, row?.data ?? {}) as Record<
        string,
        unknown
      >,
    );
    setMessage("");
  }

  async function save() {
    if (!activeKey) return;
    setSaving(true);
    setMessage("");
    const res = await fetch(`/api/admin/cms/${encodeURIComponent(activeKey)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: draft }),
    });
    setSaving(false);
    if (!res.ok) {
      setMessage("Erreur d’enregistrement.");
      return;
    }
    setMessage("Enregistré. Les changements sont visibles sur le site.");
    router.refresh();
  }

  async function resetDefaults() {
    if (!activeDef) return;
    if (
      !confirm(
        "Réinitialiser ce bloc avec le texte d’origine du site ? Vos modifications seront perdues.",
      )
    ) {
      return;
    }
    setDraft(structuredClone(activeDef.defaults) as Record<string, unknown>);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-4 rounded-2xl border border-[#d5e4eb] bg-white p-4">
        {groups.map(([group, docs]) => (
          <div key={group}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#e84e1b]">
              {group}
            </p>
            <div className="flex flex-col gap-1">
              {docs.map((doc) => (
                <button
                  key={doc.key}
                  type="button"
                  onClick={() => select(doc.key)}
                  className={`rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                    activeKey === doc.key
                      ? "bg-[#0a2b3e] text-white"
                      : "text-[#17455c] hover:bg-[#e8f1f5]"
                  }`}
                >
                  {doc.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>

      <div className="space-y-4 rounded-2xl border border-[#d5e4eb] bg-white p-5 sm:p-6">
        {activeDef ? (
          <>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#e84e1b]">
                  {activeDef.key}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{activeDef.label}</h3>
                <p className="mt-1 text-sm text-[#5c8ca3]">
                  Tous les textes FR / EN de cette section. Les listes
                  (cartes, étapes, services…) sont aussi modifiables.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={resetDefaults}
                  className="rounded-xl border border-[#d5e4eb] px-3.5 py-2 text-sm"
                >
                  Réinitialiser
                </button>
                <button
                  type="button"
                  onClick={save}
                  disabled={saving}
                  className="rounded-xl bg-[#e84e1b] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {saving ? "Enregistrement…" : "Enregistrer"}
                </button>
              </div>
            </div>

            {message ? (
              <p className="rounded-xl bg-[#e8f1f5] px-3 py-2 text-sm text-[#17455c]">
                {message}
              </p>
            ) : null}

            <CmsFieldEditor
              fields={activeDef.fields}
              value={draft}
              onChange={setDraft}
            />
          </>
        ) : (
          <p className="text-sm text-[#5c8ca3]">Sélectionnez une section.</p>
        )}
      </div>
    </div>
  );
}
