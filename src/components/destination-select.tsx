"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CountryFlag } from "@/components/country-flag";
import { DESTINATIONS } from "@/lib/destinations";
import { useLanguage } from "@/lib/language-context";

type Props = {
  id?: string;
  name: string;
  required?: boolean;
  className?: string;
};

export function DestinationSelect({ id, name, required, className }: Props) {
  const { lang } = useLanguage();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState(DESTINATIONS[0].code);

  const selected =
    DESTINATIONS.find((d) => d.code === code) ?? DESTINATIONS[0];
  const selectedLabel = lang === "fr" ? selected.fr : selected.en;
  const value = selectedLabel;

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className ?? ""}`}>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 rounded-xl border px-3.5 py-3.5 text-left text-[17px]"
        style={{
          borderColor: "var(--border-strong)",
          color: "var(--text-primary)",
          background: "var(--c-white)",
          fontFamily: "var(--font-ui)",
        }}
      >
        <CountryFlag code={selected.code} name={selectedLabel} size={24} />
        <span className="flex-1">{selectedLabel}</span>
        <ChevronDown
          className="h-4 w-4 shrink-0 transition-transform"
          style={{
            color: "var(--text-secondary)",
            transform: open ? "rotate(180deg)" : undefined,
          }}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute inset-x-0 top-[calc(100%+6px)] z-20 max-h-64 overflow-auto rounded-xl border py-1 shadow-lg"
          style={{
            borderColor: "var(--border-default)",
            background: "var(--c-white)",
            fontFamily: "var(--font-ui)",
          }}
        >
          {DESTINATIONS.map((dest) => {
            const label = lang === "fr" ? dest.fr : dest.en;
            const active = code === dest.code;
            return (
              <li key={dest.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-3.5 py-2.5 text-left text-[16px] transition-colors"
                  style={{
                    background: active ? "rgba(36, 80, 232, 0.08)" : "transparent",
                    color: "var(--text-primary)",
                  }}
                  onClick={() => {
                    setCode(dest.code);
                    setOpen(false);
                  }}
                >
                  <CountryFlag code={dest.code} name={label} size={24} />
                  <span>{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
