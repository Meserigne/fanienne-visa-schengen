"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/reveal";
import { DESTINATIONS } from "@/lib/destinations";
import { buildClientAutoresponse, CONTACT_EMAIL } from "@/lib/formsubmit";

const fieldClass =
  "h-auto rounded-xl border px-3.5 py-3.5 text-[17px] focus-visible:ring-2";

export function EligibilityForm() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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
      profileOptions: ["Étudiant", "Entreprise (PME / PMI)", "Artiste", "Autre"],
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
      sending: "Envoi en cours…",
      fineprint: "Gratuit · Sans engagement · Réponse sous 48 h",
      sentTitle: "Demande bien reçue",
      sentBody:
        "Merci ! Un e-mail de confirmation vous a été envoyé. Un conseiller Fanienne vous contacte sous 48 heures.",
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
      profileOptions: ["Student", "Business (SME)", "Artist", "Other"],
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
      sending: "Sending…",
      fineprint: "Free · No obligation · Reply within 48 h",
      sentTitle: "Request received",
      sentBody:
        "Thank you! A confirmation email has been sent. A Fanienne advisor will contact you within 48 hours.",
    },
  }[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSent(true);
      const url = new URL(window.location.href);
      url.searchParams.delete("sent");
      window.history.replaceState({}, "", `${url.pathname}${url.search}#eligibilite`);
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const profile = String(formData.get("Profil") || "").trim();
    const destination = String(formData.get("Destination") || "").trim();

    const next = form.elements.namedItem("_next") as HTMLInputElement | null;
    const subject = form.elements.namedItem("_subject") as HTMLInputElement | null;
    const autoresponse = form.elements.namedItem(
      "_autoresponse"
    ) as HTMLInputElement | null;
    const replyto = form.elements.namedItem("_replyto") as HTMLInputElement | null;
    const email = String(formData.get("email") || "").trim();

    if (next) {
      next.value = `${window.location.origin}/?sent=1#eligibilite`;
    }
    if (subject) {
      subject.value = `[Fanienne] Nouvelle demande d'éligibilité - ${name}`;
    }
    if (autoresponse) {
      autoresponse.value = buildClientAutoresponse({
        name,
        profile,
        destination,
        lang,
      });
    }
    if (replyto) {
      replyto.value = email;
    }

    setLoading(true);
    // Native FormSubmit POST (required for admin email + client autoresponse).
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
              <form
                action={`https://formsubmit.co/${CONTACT_EMAIL}`}
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4.5"
              >
                {/* FormSubmit: https://formsubmit.co — admin mail + client autoresponse */}
                <input type="hidden" name="_subject" defaultValue="[Fanienne] Nouvelle demande d'éligibilité" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" defaultValue="" />
                <input type="hidden" name="_replyto" defaultValue="" />
                <input type="hidden" name="_autoresponse" defaultValue="" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="profile"
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.profile}
                    </Label>
                    <select
                      id="profile"
                      name="Profil"
                      required
                      className={fieldClass}
                      style={{
                        borderColor: "var(--border-strong)",
                        color: "var(--text-primary)",
                        background: "var(--c-white)",
                      }}
                    >
                      {t.profileOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="destination"
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.destination}
                    </Label>
                    <select
                      id="destination"
                      name="Destination"
                      required
                      className={fieldClass}
                      style={{
                        borderColor: "var(--border-strong)",
                        color: "var(--text-primary)",
                        background: "var(--c-white)",
                      }}
                    >
                      {DESTINATIONS.map((dest) => {
                        const label = lang === "fr" ? dest.fr : dest.en;
                        return (
                          <option key={dest.code} value={label}>
                            {dest.flag} {label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="name"
                    className="text-[15px] font-medium"
                    style={{ fontFamily: "var(--font-ui)", color: "var(--text-secondary)" }}
                  >
                    {t.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
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
                      htmlFor="email"
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.email}
                    </Label>
                    <Input
                      id="email"
                      name="email"
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
                      htmlFor="phone"
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t.phone}
                    </Label>
                    <Input
                      id="phone"
                      name="Telephone"
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
                    htmlFor="project"
                    className="text-[15px] font-medium"
                    style={{ fontFamily: "var(--font-ui)", color: "var(--text-secondary)" }}
                  >
                    {t.project}
                  </Label>
                  <Textarea
                    id="project"
                    name="Projet"
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
                  disabled={loading}
                  className="cursor-pointer rounded-full py-4 text-[17px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  style={{
                    fontFamily: "var(--font-ui)",
                    background: "var(--brand)",
                    color: "var(--text-on-dark)",
                    boxShadow: "0 12px 28px -12px rgba(36, 80, 232, 0.55)",
                  }}
                >
                  {loading ? t.sending : t.submit}
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
