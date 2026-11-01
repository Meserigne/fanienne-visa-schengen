"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/reveal";
import { DestinationSelect } from "@/components/destination-select";
import {
  buildClientAutoresponse,
  CONTACT_EMAIL,
  SITE_URL,
} from "@/lib/formsubmit";
import { useCmsDoc } from "@/lib/cms-context";

const fieldClass =
  "h-auto rounded-xl border px-3.5 py-3.5 text-[17px] focus-visible:ring-2";

const IFRAME_NAME = "fabienne_formsubmit_frame";

type FormDoc = {
  title: string;
  subtitle: string;
  body: string;
  body2: string;
  formTitle: string;
  points: { text: string }[];
  profile: string;
  profileOptions: { text: string }[];
  destination: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  project: string;
  projectPlaceholder: string;
  submit: string;
  sending: string;
  fineprint: string;
  sentTitle: string;
  sentBody: string;
};

export function EligibilityForm() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const submittedRef = useRef(false);
  const raw = useCmsDoc<FormDoc>("home.form");
  const t = {
    ...raw,
    points: (raw.points || []).map((p) => p.text),
    profileOptions: (raw.profileOptions || []).map((p) => p.text),
  };

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

  const handleIframeLoad = () => {
    if (!submittedRef.current) return;
    submittedRef.current = false;
    setLoading(false);
    setSent(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const profile = String(formData.get("Profil") || "").trim();
    const destination = String(formData.get("Destination") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("Telephone") || "").trim();

    const subject = form.elements.namedItem("_subject") as HTMLInputElement | null;
    const autoresponse = form.elements.namedItem(
      "_autoresponse"
    ) as HTMLInputElement | null;
    const replyto = form.elements.namedItem("_replyto") as HTMLInputElement | null;
    const next = form.elements.namedItem("_next") as HTMLInputElement | null;

    if (subject) {
      subject.value = `[Tukki] Nouvelle demande d'éligibilité - ${name}`;
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
    if (next) {
      // Fallback redirect if the iframe path is blocked.
      next.value = `${window.location.origin}/?sent=1`;
    }

    // SMS confirmation in parallel with FormSubmit email (fire-and-forget).
    if (phone) {
      void fetch("/api/sms-confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          profile,
          destination,
          lang,
        }),
      }).catch(() => {
        // Email path remains the primary confirmation channel.
      });
    }

    submittedRef.current = true;
    setLoading(true);

    // Safety: if iframe never loads, still show success after a short delay.
    window.setTimeout(() => {
      if (submittedRef.current) {
        submittedRef.current = false;
        setLoading(false);
        setSent(true);
      }
    }, 4000);
  };

  return (
    <section
      id="eligibilite"
      className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      style={{ background: "var(--surface-inverse)" }}
    >
      {/* FormSubmit response stays hidden — user never sees the "Thanks!" page */}
      <iframe
        name={IFRAME_NAME}
        title="form-submit"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        tabIndex={-1}
        onLoad={handleIframeLoad}
      />

      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(232, 78, 27,0.35), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2
            className="mb-3 max-w-none text-[clamp(1.55rem,2.6vw,2.45rem)] leading-[1.15] font-semibold tracking-tight lg:whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)" }}
          >
            {t.title}
          </h2>
          <p
            className="mb-4 max-w-[40ch] text-[18px] font-medium leading-[1.5]"
            style={{ color: "var(--c-cyan-300)" }}
          >
            {t.subtitle}
          </p>
          <p
            className="mb-4 max-w-[48ch] text-[17px] leading-[1.7]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {t.body}
          </p>
          <p
            className="mb-8 max-w-[48ch] text-[16px] leading-[1.7]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {t.body2}
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
                target={IFRAME_NAME}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4.5"
              >
                <p
                  className="mb-1 text-[15px] font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {t.formTitle}
                </p>
                <input
                  type="hidden"
                  name="_subject"
                  defaultValue="[Tukki] Nouvelle demande d'éligibilité"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${SITE_URL}/?sent=1`} />
                <input type="hidden" name="_replyto" defaultValue="" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  defaultValue="Bonjour, merci. Votre demande est bien reçue. Un conseiller Tukki vous recontacte sous peu. Cordialement, L'équipe Tukki Consulting"
                />
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

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
                    <DestinationSelect
                      id="destination"
                      name="Destination"
                      required
                    />
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
                      required
                      autoComplete="tel"
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
                    boxShadow: "0 12px 28px -12px rgba(232, 78, 27, 0.55)",
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
