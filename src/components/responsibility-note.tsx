"use client";

import { Reveal } from "@/components/reveal";
import { useCmsDoc } from "@/lib/cms-context";

type LegalDoc = {
  title: string;
  lead: string;
  items: { label: string; body: string }[];
};

export function ResponsibilityNote() {
  const t = useCmsDoc<LegalDoc>("home.legal");

  return (
    <section
      className="border-y px-6 py-14 sm:px-10 lg:px-14"
      style={{
        background: "var(--color-bg-sunken)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2
            className="mb-2 max-w-none text-[clamp(1.35rem,2.2vw,1.85rem)] font-semibold tracking-tight lg:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            {t.title}
          </h2>
          <p
            className="mb-8 text-[14px] font-medium uppercase"
            style={{
              fontFamily: "var(--font-ui)",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
            }}
          >
            {t.lead}
          </p>
          <ul className="flex flex-col gap-5">
            {(t.items || []).map((item) => (
              <li key={item.label} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--brand)" }}
                  aria-hidden
                />
                <p
                  className="text-[15px] leading-[1.7]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <strong style={{ color: "var(--text-primary)" }}>
                    {item.label} :
                  </strong>{" "}
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
