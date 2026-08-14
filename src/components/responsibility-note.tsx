"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "@/components/reveal";

export function ResponsibilityNote() {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Engagement, responsabilité et périmètre d'intervention",
      lead: "Note d'information et clause de non-responsabilité",
      items: [
        {
          label: "Nature de la prestation",
          body: "tukki CONSULTING fournit un service de conseil, d'assistance administrative et d'accompagnement jusqu'au dépôt du dossier auprès du prestataire officiel VFS Global.",
        },
        {
          label: "Avis des autorités consulaires",
          body: "La décision finale d'octroi ou de refus de visa appartient exclusivement au Consulat. tukki CONSULTING ne peut interférer dans ce processus ni garantir l'obtention du visa.",
        },
        {
          label: "Sincérité des documents",
          body: "Le client est seul responsable de l'authenticité et de la véracité des documents fournis. tukki CONSULTING décline toute responsabilité en cas de documents falsifiés, de fausses déclarations ou d'omissions de la part du demandeur.",
        },
        {
          label: "Refus de visa",
          body: "tukki CONSULTING ne saurait être tenu responsable en cas de refus de visa par les autorités consulaires.",
        },
      ],
    },
    en: {
      title: "Commitment, responsibility and scope of work",
      lead: "Information note and disclaimer",
      items: [
        {
          label: "Nature of the service",
          body: "tukki CONSULTING provides consulting, administrative assistance and support up to filing with the official provider VFS Global.",
        },
        {
          label: "Consular decisions",
          body: "The final decision to grant or refuse a visa rests exclusively with the Consulate. tukki CONSULTING cannot interfere in that process or guarantee a visa will be issued.",
        },
        {
          label: "Document authenticity",
          body: "The client alone is responsible for the authenticity and truthfulness of documents provided. tukki CONSULTING accepts no liability for forged documents, false statements or omissions by the applicant.",
        },
        {
          label: "Visa refusal",
          body: "tukki CONSULTING cannot be held responsible if consular authorities refuse a visa.",
        },
      ],
    },
  }[lang];

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
            className="mb-2 text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
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
            {t.items.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--brand)" }}
                  aria-hidden
                />
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>{item.label} :</strong>{" "}
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
