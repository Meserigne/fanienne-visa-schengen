"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/reveal";
import { DESTINATIONS } from "@/lib/destinations";

const fieldClass =
  "h-auto rounded-xl border px-3.5 py-3.5 text-[17px] focus-visible:ring-2";

export function EligibilityForm() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);

  const t = {
    fr: {
      title: "Testez votre éligibilité au visa Schengen",
      body: "Répondez en deux minutes. Un conseiller Fanienne analyse votre profil et vous répond sous 48 heures avec un avis honnête et un devis personnalisé.",
      points: [
        "Évaluation gratuite et sans engagement",
        "Réponse personnalisée sous 48 h",
        "Confidentialité totale de vos informations",
      ],
      profile: "Profil",
      profileOptions: ["Étudiant", "Entreprise (PME / PMI)", "Autre"],
      destination: "Destination",
      name: "Nom complet",
      namePlaceholder: "Votre nom et prénom",
      email: "Email",
      emailPlaceholder: "vous@exemple.com",
      phone: "Téléphone",
      phonePlaceholder: "+221 77 000 00 00",
      project: "Votre projet en quelques mots",
      projectPlaceholder: "Études, salon professionnel, mission d'affaires…",
      submit: "Tester mon éligibilité",
      fineprint: "Gratuit · Sans engagement · Réponse sous 48 h",
      sentTitle: "Demande bien reçue",
      sentBody:
        "Merci ! Un conseiller Fanienne vous contacte sous 48 heures avec l'analyse de votre profil.",
    },
    en: {
      title: "Check your Schengen visa eligibility",
      body: "Answer in two minutes. A Fanienne advisor reviews your profile and replies within 48 hours with an honest assessment and a personalised quote.",
      points: [
        "Free, no-obligation assessment",
        "Personalised reply within 48 hours",
        "Your information stays fully confidential",
      ],
      profile: "Profile",
      profileOptions: ["Student", "Business (SME)", "Other"],
      destination: "Destination",
      name: "Full name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      phone: "Phone",
      phonePlaceholder: "+221 77 000 00 00",
      project: "Your project in a few words",
      projectPlaceholder: "Studies, trade fair, business trip…",
      submit: "Check my eligibility",
      fineprint: "Free · No obligation · Reply within 48 h",
      sentTitle: "Request received",
      sentBody:
        "Thank you! A Fanienne advisor will contact you within 48 hours with your profile assessment.",
    },
  }[lang];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="eligibilite"
      className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      style={{ background: "var(--surface-inverse)" }}
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(36,80,232,0.35), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2
            className="mb-5 max-w-[18ch] text-[clamp(2.15rem,4vw,3.4rem)] leading-[1.1] font-semibold tracking-tight text-balance"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
          >
            {t.title}
          </h2>
          <p
            className="mb-8 max-w-[48ch] text-[19px] leading-[1.7]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {t.body}
          </p>
          <div
            className="flex flex-col gap-3.5 text-[17px]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {t.points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--c-cobalt-400)" }}
                />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="rounded-2xl p-7 sm:p-10"
            style={{
              background: "var(--surface-card)",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border-default)",
            }}
          >
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.profile}
                    </Label>
                    <select
                      className={fieldClass}
                      style={{
                        borderColor: "var(--border-strong)",
                        color: "var(--text-primary)",
                        background: "var(--c-white)",
                      }}
                    >
                      {t.profileOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.destination}
                    </Label>
                    <select
                      className={fieldClass}
                      style={{
                        borderColor: "var(--border-strong)",
                        color: "var(--text-primary)",
                        background: "var(--c-white)",
                      }}
                    >
                      {DESTINATIONS.map((dest) => (
                        <option key={dest.code} value={dest.code}>
                          {dest.flag} {lang === "fr" ? dest.fr : dest.en}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    className="text-[15px] font-medium"
                    style={{ fontFamily: "var(--font-ui)", color: "var(--text-secondary)" }}
                  >
                    {t.name}
                  </Label>
                  <Input
                    type="text"
                    placeholder={t.namePlaceholder}
                    required
                    className={fieldClass}
                    style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.email}
                    </Label>
                    <Input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      required
                      className={fieldClass}
                      style={{
                        borderColor: "var(--border-strong)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.phone}
                    </Label>
                    <Input
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      className={fieldClass}
                      style={{
                        borderColor: "var(--border-strong)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    className="text-[15px] font-medium"
                    style={{ fontFamily: "var(--font-ui)", color: "var(--text-secondary)" }}
                  >
                    {t.project}
                  </Label>
                  <Textarea
                    rows={3}
                    placeholder={t.projectPlaceholder}
                    className={fieldClass}
                    style={{
                      borderColor: "var(--border-strong)",
                      color: "var(--text-primary)",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer rounded-full py-4 text-[17px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    fontFamily: "var(--font-ui)",
                    background: "var(--brand)",
                    color: "var(--text-on-dark)",
                    boxShadow: "0 12px 28px -12px rgba(36, 80, 232, 0.55)",
                  }}
                >
                  {t.submit}
                </button>
                <p
                  className="text-center text-xs"
                  style={{ fontFamily: "var(--font-ui)", color: "var(--text-muted)" }}
                >
                  {t.fineprint}
                </p>
              </form>
            ) : (
              <div className="px-3 py-10 text-center">
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold"
                  style={{ background: "var(--status-success-bg)", color: "var(--status-success)" }}
                >
                  ✓
                </div>
                <h3
                  className="mb-3 text-[28px] font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {t.sentTitle}
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{t.sentBody}</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
