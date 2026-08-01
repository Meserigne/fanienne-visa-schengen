"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";

const NAV = [
  { href: "/", fr: "Accueil", en: "Home" },
  { href: "/etudiants", fr: "Étudiants", en: "Students" },
  { href: "/entreprises", fr: "Professionnels", en: "Business" },
  { href: "/tourisme", fr: "Tourisme & famille", en: "Tourism & family" },
  { href: "/sante", fr: "Santé", en: "Health" },
  { href: "/qui-nous-sommes", fr: "Qui nous sommes", en: "About us" },
];

export function SiteHeader() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const eligibilityHref = pathname === "/" ? "#eligibilite" : "/#eligibilite";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu on navigation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !onHome || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 transition-[background,border-color,backdrop-filter] duration-300"
      style={{
        borderBottom: solid ? "1px solid var(--border-default)" : "1px solid transparent",
        background: solid ? "var(--surface-glass)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
        WebkitBackdropFilter: solid ? "blur(16px)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="flex items-baseline gap-2.5"
          style={{ color: solid ? "var(--text-primary)" : "var(--text-on-dark)" }}
        >
          <span
            className="text-[26px] font-semibold tracking-tight sm:text-[28px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Fabienne
          </span>
          <span
            className="hidden h-1.5 w-1.5 self-center rounded-full sm:block"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="hidden text-[11px] uppercase sm:inline"
            style={{
              fontFamily: "var(--font-ui)",
              letterSpacing: "0.18em",
              color: solid ? "var(--text-secondary)" : "var(--text-on-dark-muted)",
            }}
          >
            {lang === "fr" ? "Visa Schengen" : "Schengen Visa"}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 text-[14px] lg:gap-7 lg:text-[15px] md:flex"
          style={{
            fontFamily: "var(--font-ui)",
            color: solid ? "var(--text-secondary)" : "var(--text-on-dark-muted)",
          }}
        >
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="pb-0.5 transition-colors"
                style={{
                  color: active
                    ? solid
                      ? "var(--text-primary)"
                      : "var(--text-on-dark)"
                    : undefined,
                  borderBottom: active
                    ? `2px solid ${solid ? "var(--accent)" : "var(--c-cobalt-300)"}`
                    : "2px solid transparent",
                }}
              >
                {lang === "fr" ? item.fr : item.en}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className="flex rounded-full border p-[3px]"
            style={{
              borderColor: solid ? "var(--border-strong)" : "var(--border-inverse)",
            }}
          >
            {(["fr", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className="cursor-pointer rounded-full px-3 py-1.5 text-[12px] font-medium uppercase"
                style={{
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.06em",
                  background: lang === code ? "var(--brand)" : "transparent",
                  color:
                    lang === code
                      ? "var(--text-on-dark)"
                      : solid
                        ? "var(--text-secondary)"
                        : "var(--text-on-dark-muted)",
                }}
              >
                {code}
              </button>
            ))}
          </div>

          <Link
            href={eligibilityHref}
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
            style={{
              fontFamily: "var(--font-ui)",
              background: "var(--brand)",
              color: "var(--text-on-dark)",
            }}
          >
            {lang === "fr" ? "Éligibilité" : "Eligibility"}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              borderColor: solid ? "var(--border-strong)" : "var(--border-inverse)",
              color: solid ? "var(--text-primary)" : "var(--text-on-dark)",
            }}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className="absolute left-0 h-[1.5px] w-full transition-transform duration-200"
                style={{
                  background: "currentColor",
                  top: open ? "50%" : 2,
                  transform: open ? "translateY(-50%) rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 h-[1.5px] w-full transition-opacity duration-200"
                style={{
                  background: "currentColor",
                  top: "50%",
                  transform: "translateY(-50%)",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="absolute left-0 h-[1.5px] w-full transition-transform duration-200"
                style={{
                  background: "currentColor",
                  bottom: open ? "auto" : 2,
                  top: open ? "50%" : "auto",
                  transform: open ? "translateY(-50%) rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="border-t px-6 py-5 md:hidden"
          style={{
            borderColor: "var(--border-default)",
            background: "var(--surface-card)",
          }}
        >
          <nav className="flex flex-col gap-4" style={{ fontFamily: "var(--font-ui)" }}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[17px] font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {lang === "fr" ? item.fr : item.en}
              </Link>
            ))}
            <Link
              href={eligibilityHref}
              className="mt-1 inline-flex w-fit rounded-full px-5 py-3 text-sm font-semibold"
              style={{ background: "var(--brand)", color: "var(--text-on-dark)" }}
            >
              {lang === "fr" ? "Tester mon éligibilité" : "Check my eligibility"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
