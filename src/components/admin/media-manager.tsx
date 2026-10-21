"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORY_LABELS } from "@/lib/admin/image-catalog";

type MediaItem = {
  id?: string;
  key: string;
  label: string;
  category: string;
  url: string;
  defaultUrl: string;
};

export function MediaManager({ initial }: { initial: MediaItem[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [filter, setFilter] = useState("all");
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return ["all", ...Array.from(set)];
  }, [items]);

  const visible = items.filter(
    (item) => filter === "all" || item.category === filter,
  );

  function updateLocal(key: string, url: string) {
    setItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, url } : item)),
    );
  }

  async function saveUrl(item: MediaItem) {
    setSavingKey(item.key);
    setMessage("");
    const res = await fetch("/api/admin/media", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: item.key, url: item.url }),
    });
    setSavingKey(null);
    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setMessage(data.error || "Erreur d’enregistrement.");
      return;
    }
    setMessage(`Photo « ${item.label} » enregistrée.`);
    router.refresh();
  }

  async function resetDefault(item: MediaItem) {
    updateLocal(item.key, item.defaultUrl);
    setSavingKey(item.key);
    const res = await fetch("/api/admin/media", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: item.key, url: item.defaultUrl }),
    });
    setSavingKey(null);
    if (res.ok) {
      setMessage(`« ${item.label} » restaurée.`);
      router.refresh();
    }
  }

  async function uploadFile(item: MediaItem, file: File) {
    setSavingKey(item.key);
    setMessage("");
    const fd = new FormData();
    fd.set("key", item.key);
    fd.set("file", file);
    const res = await fetch("/api/admin/media/upload", {
      method: "POST",
      body: fd,
    });
    const data = (await res.json()) as { url?: string; error?: string };
    setSavingKey(null);
    if (!res.ok || !data.url) {
      setMessage(data.error || "Échec de l’upload.");
      return;
    }
    updateLocal(item.key, data.url);
    setMessage(`Fichier uploadé pour « ${item.label} ».`);
    router.refresh();
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
              filter === cat
                ? "bg-[#0a2b3e] text-white"
                : "bg-white text-[#17455c] border border-[#d5e4eb]"
            }`}
          >
            {cat === "all" ? "Toutes" : CATEGORY_LABELS[cat] || cat}
          </button>
        ))}
      </div>

      {message ? (
        <p className="rounded-xl bg-[#e8f1f5] px-3 py-2 text-sm text-[#17455c]">
          {message}
        </p>
      ) : null}

      <p className="text-sm text-[#5c8ca3]">
        Collez une URL (Unsplash, CDN…) ou uploadez un fichier JPG/PNG/WebP.
        Les uploads locaux vont dans <code>/uploads</code> — sur Vercel, préférez
        une URL externe ou un stockage Blob.
      </p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((item) => (
          <article
            key={item.key}
            className="overflow-hidden rounded-2xl border border-[#d5e4eb] bg-white"
          >
            <div className="relative aspect-[4/3] bg-[#e8f1f5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.url}
                alt={item.label}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#e84e1b]">
                  {CATEGORY_LABELS[item.category] || item.category}
                </p>
                <h3 className="mt-1 text-sm font-semibold leading-snug">
                  {item.label}
                </h3>
                <p className="mt-0.5 text-[11px] text-[#5c8ca3]">{item.key}</p>
              </div>

              <label className="block text-xs font-medium text-[#17455c]">
                URL de l’image
                <input
                  value={item.url}
                  onChange={(e) => updateLocal(item.key, e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[#d5e4eb] px-3 py-2 text-sm"
                />
              </label>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={savingKey === item.key}
                  onClick={() => saveUrl(item)}
                  className="rounded-xl bg-[#e84e1b] px-3 py-2 text-xs font-semibold text-white disabled:opacity-60"
                >
                  {savingKey === item.key ? "…" : "Enregistrer"}
                </button>
                <label className="cursor-pointer rounded-xl border border-[#d5e4eb] px-3 py-2 text-xs font-semibold">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) void uploadFile(item, file);
                      e.target.value = "";
                    }}
                  />
                </label>
                <button
                  type="button"
                  disabled={savingKey === item.key}
                  onClick={() => resetDefault(item)}
                  className="rounded-xl border border-[#d5e4eb] px-3 py-2 text-xs font-medium text-[#5c8ca3]"
                >
                  Défaut
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
