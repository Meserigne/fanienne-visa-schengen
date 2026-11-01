"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/lib/language-context";
import { useCmsDoc } from "@/lib/cms-context";

type FooterSettings = {
  contactEmail: string;
  whatsapp: string;
  address: string;
};

type FooterDoc = {
  tagline: string;
  navTitle: string;
  contactTitle: string;
  about: string;
  privacy: string;
  copyright: string;
  links: { href: string; label: string }[];
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
  const footer = useCmsDoc<FooterDoc>("footer");
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
  const links = footer.links || [];

  if (variant === "compact") {
    return (
      <footer
        className="border-t px-6 py-10 sm:px-10 lg:px-14"
        style={{
          background: "var(--c-ink-950)",
          borderColor: "var(--border-inverse)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-baseline justify-between gap-8">
          <BrandLogo variant="white" className="h-20 w-auto object-contain" />
          <div
            className="flex flex-wrap gap-7 text-sm"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "var(--text-on-dark-muted)" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${cfg.contactEmail}`}
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              {cfg.contactEmail}
            </a>
          </div>
          <div
            className="flex flex-wrap items-center gap-4 text-xs"
            style={{ fontFamily: "var(--font-ui)", color: "var(--c-ink-400)" }}
          >
            <span>
              {footer.copyright} · {addressLabel}
            </span>
            <Link
              href="/qui-nous-sommes"
              className="transition-colors hover:text-white"
            >
              {footer.about}
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-white"
            >
              {footer.privacy}
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className="px-6 pb-10 pt-20 sm:px-10 lg:px-14"
      style={{
        background: "var(--c-ink-950)",
        color: "var(--text-on-dark-muted)",
      }}
    >
      <div
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 border-b pb-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]"
        style={{ borderColor: "var(--border-inverse)" }}
      >
        <div>
          <BrandLogo
            variant="white"
            className="mb-4 h-24 w-auto object-contain"
          />
          <p className="max-w-[36ch] text-[15px] leading-[1.7]">
            {footer.tagline}
          </p>
        </div>
        <div
          className="flex flex-col gap-2.5 text-sm"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          <p
            className="mb-1.5 text-xs uppercase"
            style={{ letterSpacing: "0.18em", color: "var(--c-cobalt-300)" }}
          >
            {footer.navTitle}
          </p>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div
          className="flex flex-col gap-2.5 text-sm"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          <p
            className="mb-1.5 text-xs uppercase"
            style={{ letterSpacing: "0.18em", color: "var(--c-cobalt-300)" }}
          >
            {footer.contactTitle}
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
          {footer.copyright} · {footer.tagline}
        </p>
        <div className="flex shrink-0 flex-wrap gap-5">
          <Link
            href="/qui-nous-sommes"
            className="transition-colors hover:text-white"
          >
            {footer.about}
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="transition-colors hover:text-white"
          >
            {footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
