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
            TOOKY CONSULTING
          </p>
          <div className="flex flex-wrap gap-7 text-sm" style={{ fontFamily: "var(--font-ui)" }}>
            <Link href="/etudiants" style={{ color: "var(--text-on-dark-muted)" }}>
              {lang === "fr" ? "Étudiants" : "Students"}
            </Link>
            <Link href="/entreprises" style={{ color: "var(--text-on-dark-muted)" }}>
              {lang === "fr" ? "Professionnels" : "Business"}
            </Link>
            <Link href="/tourisme" style={{ color: "var(--text-on-dark-muted)" }}>
              {lang === "fr" ? "Tourisme" : "Tourism"}
            </Link>
            <Link href="/sante" style={{ color: "var(--text-on-dark-muted)" }}>
              {lang === "fr" ? "Santé" : "Health"}
            </Link>
            <a href="mailto:contact@tookyconsulting.com" style={{ color: "var(--text-on-dark-muted)" }}>
              contact@tookyconsulting.com
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ fontFamily: "var(--font-ui)", color: "var(--c-ink-400)" }}>
            <span>© 2026 Tooky Consulting · {lang === "fr" ? "Dakar, Sénégal" : "Dakar, Senegal"}</span>
            <Link href="/qui-nous-sommes" className="transition-colors hover:text-white">
              {lang === "fr" ? "Qui nous sommes" : "About us"}
            </Link>
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-white">
              {lang === "fr" ? "Politique de confidentialité" : "Privacy policy"}
            </Link>
          </div>
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
            TOOKY CONSULTING
          </p>
          <p className="max-w-[36ch] text-[15px] leading-[1.7]">
            {lang === "fr"
              ? "Accompagnement visa Schengen à Dakar. Dossiers préparés pour convaincre."
              : "Schengen visa support in Dakar. Files built to convince."}
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
            {lang === "fr" ? "Étudiants · Student Care" : "Students · Student Care"}
          </Link>
          <Link href="/entreprises" className="transition-colors hover:text-white">
            {lang === "fr" ? "Professionnels · Pro Executive" : "Business · Pro Executive"}
          </Link>
          <Link href="/tourisme" className="transition-colors hover:text-white">
            {lang === "fr" ? "Tourisme & famille · Essentielle" : "Tourism & family · Essential"}
          </Link>
          <Link href="/sante" className="transition-colors hover:text-white">
            {lang === "fr" ? "Santé · Urgence Santé" : "Health · Emergency"}
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
          <a href="mailto:contact@tookyconsulting.com" className="transition-colors hover:text-white">
            contact@tookyconsulting.com
          </a>
        </div>
      </div>
      <div
        className="mx-auto mt-7 flex max-w-[1400px] flex-col gap-3 text-xs leading-relaxed sm:flex-row sm:items-start sm:justify-between"
        style={{ fontFamily: "var(--font-ui)", color: "var(--c-ink-400)" }}
      >
        <p className="max-w-[90ch]">
          {lang === "fr"
            ? "© 2026 Tooky Consulting · Accompagnement visa Schengen. Tooky Consulting est un cabinet de conseil indépendant, sans lien avec les consulats ; la décision de visa appartient aux autorités consulaires."
            : "© 2026 Tooky Consulting · Schengen visa consultancy. Tooky Consulting is an independent advisory firm with no affiliation to consulates; visa decisions rest with consular authorities."}
        </p>
        <div className="flex shrink-0 flex-wrap gap-5">
          <Link
            href="/qui-nous-sommes"
            className="transition-colors hover:text-white"
          >
            {lang === "fr" ? "Qui nous sommes" : "About us"}
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="transition-colors hover:text-white"
          >
            {lang === "fr" ? "Politique de confidentialité" : "Privacy policy"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
