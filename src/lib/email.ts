import { Resend } from "resend";

export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "meserigne@gmail.com";

export const EMAIL_FROM =
  process.env.EMAIL_FROM || "Fabienne <onboarding@resend.dev>";

export type EligibilityPayload = {
  profile: string;
  destination: string;
  name: string;
  email: string;
  phone?: string;
  project?: string;
  lang: "fr" | "en";
};

export function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export function buildAdminEmail(data: EligibilityPayload) {
  const subject = `[Fabienne] Nouvelle demande d'éligibilité - ${data.name}`;
  const text = [
    "Nouvelle demande d'éligibilité visa Schengen",
    "",
    `Nom : ${data.name}`,
    `Email : ${data.email}`,
    `Téléphone : ${data.phone || "Non renseigné"}`,
    `Profil : ${data.profile}`,
    `Destination : ${data.destination}`,
    `Projet : ${data.project || "Non renseigné"}`,
    `Langue : ${data.lang === "fr" ? "Français" : "English"}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0c1a2e">
      <h2 style="color:#2450e8;margin:0 0 16px">Nouvelle demande d'éligibilité</h2>
      <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(data.phone || "Non renseigné")}</p>
      <p><strong>Profil :</strong> ${escapeHtml(data.profile)}</p>
      <p><strong>Destination :</strong> ${escapeHtml(data.destination)}</p>
      <p><strong>Projet :</strong><br/>${escapeHtml(data.project || "Non renseigné").replace(/\n/g, "<br/>")}</p>
      <p style="color:#5c718c;font-size:13px">Langue du formulaire : ${data.lang === "fr" ? "Français" : "English"}</p>
    </div>
  `;

  return { subject, text, html };
}

export function buildClientEmail(data: EligibilityPayload) {
  if (data.lang === "en") {
    return {
      subject: "We received your Fabienne eligibility request",
      text: [
        `Hello ${data.name},`,
        "",
        "Thank you for your Schengen visa eligibility request.",
        "A Fabienne advisor will review your profile and reply within 48 hours.",
        "",
        "Summary:",
        `- Profile: ${data.profile}`,
        `- Destination: ${data.destination}`,
        "",
        "Fabienne - Schengen visa support in Dakar",
        "contact@fabienne.sn",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;color:#0c1a2e">
          <h2 style="color:#2450e8;margin:0 0 12px">Request received</h2>
          <p>Hello ${escapeHtml(data.name)},</p>
          <p>Thank you for your Schengen visa eligibility request. A Fabienne advisor will review your profile and reply within <strong>48 hours</strong>.</p>
          <p><strong>Profile:</strong> ${escapeHtml(data.profile)}<br/>
          <strong>Destination:</strong> ${escapeHtml(data.destination)}</p>
          <p style="color:#5c718c;font-size:13px">Fabienne · Dakar<br/>contact@fabienne.sn</p>
        </div>
      `,
    };
  }

  return {
    subject: "Nous avons bien reçu votre demande Fabienne",
    text: [
      `Bonjour ${data.name},`,
      "",
      "Merci pour votre demande d'éligibilité visa Schengen.",
      "Un conseiller Fabienne analyse votre profil et vous répond sous 48 heures.",
      "",
      "Récapitulatif :",
      `- Profil : ${data.profile}`,
      `- Destination : ${data.destination}`,
      "",
      "Fabienne - Accompagnement visa Schengen à Dakar",
      "contact@fabienne.sn",
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.7;color:#0c1a2e">
        <h2 style="color:#2450e8;margin:0 0 12px">Demande bien reçue</h2>
        <p>Bonjour ${escapeHtml(data.name)},</p>
        <p>Merci pour votre demande d'éligibilité visa Schengen. Un conseiller Fabienne analyse votre profil et vous répond sous <strong>48 heures</strong>.</p>
        <p><strong>Profil :</strong> ${escapeHtml(data.profile)}<br/>
        <strong>Destination :</strong> ${escapeHtml(data.destination)}</p>
        <p style="color:#5c718c;font-size:13px">Fabienne · Dakar<br/>contact@fabienne.sn</p>
      </div>
    `,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
