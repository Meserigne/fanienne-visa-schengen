"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

const WHATSAPP = "+221 77 000 00 00";
const waLink = "https://wa.me/" + WHATSAPP.replace(/[^0-9]/g, "");

export function SiteFooter({ variant = "compact" }: { variant?: "full" | "compact" }) {
  const { lang } = useLanguage();

  if (variant === "compact") {
    return (
      <footer
        className="border-t px-6 py-10 sm:px-10 lg:px-14"
        style={{ background: "var(--c-ink-950)", borderColor: "var(--border-inverse)" }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-baseline justify-between gap-8">
          <p
            className="text-[24px] font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
          >
            Fanienne
          </p>
          <div className="flex flex-wrap gap-7 text-sm" style={{ fontFamily: "var(--font-ui)" }}>
            <Link href="/" style={{ color: "var(--text-on-dark-muted)" }}>
              {lang === "fr" ? "Accueil" : "Home"}
            </Link>
            <Link href="/etudiants" style={{ color: "var(--text-on-dark-muted)" }}>
              {lang === "fr" ? "Étudiants" : "Students"}
            </Link>
            <a href="mailto:contact@fanienne.sn" style={{ color: "var(--text-on-dark-muted)" }}>
              contact@fanienne.sn
            </a>
          </div>
          <p className="text-xs" style={{ fontFamily: "var(--font-ui)", color: "var(--c-ink-400)" }}>
            © 2026 Fanienne · {lang === "fr" ? "Dakar, Sénégal" : "Dakar, Senegal"}
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className="px-6 pb-10 pt-20 sm:px-10 lg:px-14"
      style={{ background: "var(--c-ink-950)", color: "var(--text-on-dark-muted)" }}
    >
      <div
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 border-b pb-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]"
        style={{ borderColor: "var(--border-inverse)" }}
      >
        <div>
          <p
            className="mb-4 text-[32px] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
          >
            Fanienne
          </p>
          <p className="max-w-[36ch] text-[15px] leading-[1.7]">
            {lang === "fr"
              ? "Cabinet d'accompagnement visa Schengen basé à Dakar. Étudiants, PME & PMI : voyagez librement, sans crainte du refus."
              : "Schengen visa consultancy based in Dakar. Students, SMEs: travel freely, without fearing refusal."}
          </p>
        </div>
        <div className="flex flex-col gap-2.5 text-sm" style={{ fontFamily: "var(--font-ui)" }}>
          <p
            className="mb-1.5 text-xs uppercase"
            style={{ letterSpacing: "0.18em", color: "var(--c-cobalt-300)" }}
          >
            {lang === "fr" ? "Parcours" : "Tracks"}
          </p>
          <Link href="/etudiants" className="transition-colors hover:text-white">
            {lang === "fr" ? "Étudiants" : "Students"}
          </Link>
          <Link href="/entreprises" className="transition-colors hover:text-white">
            {lang === "fr" ? "Entreprises, PME & PMI" : "Businesses, SMEs"}
          </Link>
        </div>
        <div className="flex flex-col gap-2.5 text-sm" style={{ fontFamily: "var(--font-ui)" }}>
          <p
            className="mb-1.5 text-xs uppercase"
            style={{ letterSpacing: "0.18em", color: "var(--c-cobalt-300)" }}
          >
            {lang === "fr" ? "Services" : "Services"}
          </p>
          <a href="#services" className="transition-colors hover:text-white">
            {lang === "fr" ? "Dossier & vérification" : "File preparation & review"}
          </a>
          <a href="#services" className="transition-colors hover:text-white">
            {lang === "fr" ? "Préparation entretien" : "Interview coaching"}
          </a>
          <a href="#services" className="transition-colors hover:text-white">
            {lang === "fr" ? "Suivi & post-visa" : "Tracking & post-visa"}
          </a>
        </div>
        <div className="flex flex-col gap-2.5 text-sm" style={{ fontFamily: "var(--font-ui)" }}>
          <p
            className="mb-1.5 text-xs uppercase"
            style={{ letterSpacing: "0.18em", color: "var(--c-cobalt-300)" }}
          >
            {lang === "fr" ? "Contact" : "Contact"}
          </p>
          <span>{lang === "fr" ? "Dakar, Sénégal" : "Dakar, Senegal"}</span>
          <a href={waLink} className="transition-colors hover:text-white">
            WhatsApp · {WHATSAPP}
          </a>
          <a href="mailto:contact@fanienne.sn" className="transition-colors hover:text-white">
            contact@fanienne.sn
          </a>
        </div>
      </div>
      <p
        className="mx-auto mt-7 max-w-[1400px] text-xs leading-relaxed"
        style={{ fontFamily: "var(--font-ui)", color: "var(--c-ink-400)" }}
      >
        {lang === "fr"
          ? "© 2026 Fanienne · Accompagnement visa Schengen. Fanienne est un cabinet de conseil indépendant, sans lien avec les consulats ; la décision de visa appartient aux autorités consulaires."
          : "© 2026 Fanienne · Schengen visa consultancy. Fanienne is an independent advisory firm with no affiliation to consulates; visa decisions rest with consular authorities."}
      </p>
    </footer>
  );
}
