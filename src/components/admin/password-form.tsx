"use client";

import { FormEvent, useState } from "react";

export function PasswordForm() {
  const [currentPassword, setCurrent] = useState("");
  const [newPassword, setNew] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage("");
    setError("");
    if (newPassword !== confirm) {
      setError("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }
    setSaving(true);
    const res = await fetch("/api/admin/password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    const data = (await res.json()) as { error?: string };
    setSaving(false);
    if (!res.ok) {
      setError(data.error || "Erreur.");
      return;
    }
    setMessage("Mot de passe mis à jour.");
    setCurrent("");
    setNew("");
    setConfirm("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl space-y-4 rounded-2xl border border-[#d5e4eb] bg-white p-5"
    >
      <h3 className="font-semibold">Changer le mot de passe admin</h3>
      <label className="block text-sm font-medium">
        Mot de passe actuel
        <input
          type="password"
          required
          value={currentPassword}
          onChange={(e) => setCurrent(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
        />
      </label>
      <label className="block text-sm font-medium">
        Nouveau mot de passe
        <input
          type="password"
          required
          minLength={8}
          value={newPassword}
          onChange={(e) => setNew(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
        />
      </label>
      <label className="block text-sm font-medium">
        Confirmer
        <input
          type="password"
          required
          minLength={8}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-2.5"
        />
      </label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {message ? <p className="text-sm text-[#17455c]">{message}</p> : null}
      <button
        type="submit"
        disabled={saving}
        className="rounded-xl bg-[#0a2b3e] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {saving ? "Enregistrement…" : "Mettre à jour le mot de passe"}
      </button>
    </form>
  );
}
