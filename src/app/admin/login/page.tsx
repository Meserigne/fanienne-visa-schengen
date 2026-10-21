"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || "Connexion impossible.");
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("Erreur réseau.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a2b3e] px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e84e1b]">
          Tukki Consulting
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-[#0a2b3e]">
          Connexion back-office
        </h1>
        <p className="mt-2 text-sm text-[#5c8ca3]">
          Gérez les demandes, formules et contenus du site.
        </p>

        <label className="mt-6 block text-sm font-medium text-[#17455c]">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-3 text-[15px] outline-none focus:border-[#e84e1b]"
            placeholder="admin@tukkiconsulting.com"
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-[#17455c]">
          Mot de passe
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[#d5e4eb] px-3.5 py-3 text-[15px] outline-none focus:border-[#e84e1b]"
            placeholder="••••••••"
          />
        </label>

        {error ? (
          <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-[#e84e1b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c43d12] disabled:opacity-60"
        >
          {loading ? "Connexion…" : "Se connecter"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0a2b3e] text-white">
          Chargement…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
