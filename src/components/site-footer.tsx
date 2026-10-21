"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/lib/language-context";

type FooterSettings = {
  contactEmail: string;
  whatsapp: string;
  address: string;
};

const DEFAULTS: FooterSettings = {
  contactEmail: "contact@tookyconsulting.com",
  whatsapp: "+221 77 000 00 00",
  address: "Dakar, Sénégal",
};

export function SiteFooter({
  variant = "compact",
  settings,
}: {
  variant?: "full" | "compact";
  settings?: Partial<FooterSettings>;
}) {
  const { lang } = useLanguage();
  const [live, setLive] = useState<FooterSettings>({ ...DEFAULTS, ...settings });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/public/settings")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!cancelled && json?.settings) {
          setLive({
            contactEmail: json.settings.contactEmail || DEFAULTS.contactEmail,
            whatsapp: json.settings.whatsapp || DEFAULTS.whatsapp,
            address: json.settings.address || DEFAULTS.address,
          });
        }
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  const cfg = live;
  const waLink = "https://wa.me/" + cfg.whatsapp.replace(/[^0-9]/g, "");
  const addressLabel =
    lang === "fr" ? cfg.address : cfg.address.replace("Sénégal", "Senegal");

  if (variant === "compact") {
    return (
      <footer
        className="border-t px-6 py-10 sm:px-10 lg:px-14"
        style={{ background: "var(--c-ink-950)", borderColor: "var(--border-inverse)" }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-baseline justify-between gap-8">
          <BrandLogo variant="white" className="h-20 w-auto object-contain" />
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
            <a href={`mailto:${cfg.contactEmail}`} style={{ color: "var(--text-on-dark-muted)" }}>
              {cfg.contactEmail}
            </a>
          </div>
          <div
            className="flex flex-wrap items-center gap-4 text-xs"
            style={{ fontFamily: "var(--font-ui)", color: "var(--c-ink-400)" }}
          >
            <span>
              © 2026 Tukki Consulting · {addressLabel}
            </span>
            <Link href="/qui-nous-sommes" className="transition-colors hover:text-white">
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
          <BrandLogo variant="white" className="mb-4 h-24 w-auto object-contain" />
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
          <span>{addressLabel}</span>
          <a href={waLink} className="transition-colors hover:text-white">
            WhatsApp · {cfg.whatsapp}
          </a>
          <a
            href={`mailto:${cfg.contactEmail}`}
            className="transition-colors hover:text-white"
          >
            {cfg.contactEmail}
          </a>
        </div>
      </div>
      <div
        className="mx-auto mt-7 flex max-w-[1400px] flex-col gap-3 text-xs leading-relaxed sm:flex-row sm:items-start sm:justify-between"
        style={{ fontFamily: "var(--font-ui)", color: "var(--c-ink-400)" }}
      >
        <p className="max-w-[90ch]">
          {lang === "fr"
            ? "© 2026 Tukki Consulting · Accompagnement visa Schengen. Tukki Consulting est un cabinet de conseil indépendant, sans lien avec les consulats ; la décision de visa appartient aux autorités consulaires."
            : "© 2026 Tukki Consulting · Schengen visa consultancy. Tukki Consulting is an independent advisory firm with no affiliation to consulates; visa decisions rest with consular authorities."}
        </p>
        <div className="flex shrink-0 flex-wrap gap-5">
          <Link href="/qui-nous-sommes" className="transition-colors hover:text-white">
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
