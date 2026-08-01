export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "meserigne.ndiaye@mega-sn.com";

export type EligibilityFormData = {
  profile: string;
  destination: string;
  name: string;
  email: string;
  phone?: string;
  project?: string;
  lang: "fr" | "en";
};

export async function sendEligibilityViaFormSubmit(data: EligibilityFormData) {
  const adminSubject = `[Fanienne] Nouvelle demande d'éligibilité - ${data.name}`;
  const adminMessage = [
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

  const clientAutoresponse =
    data.lang === "en"
      ? [
          `Hello ${data.name},`,
          "",
          "Thank you for your Schengen visa eligibility request.",
          "A Fanienne advisor will review your profile and reply within 48 hours.",
          "",
          "Summary:",
          `- Profile: ${data.profile}`,
          `- Destination: ${data.destination}`,
          "",
          "Fanienne - Schengen visa support in Dakar",
          "contact@fanienne.sn",
        ].join("\n")
      : [
          `Bonjour ${data.name},`,
          "",
          "Merci pour votre demande d'éligibilité visa Schengen.",
          "Un conseiller Fanienne analyse votre profil et vous répond sous 48 heures.",
          "",
          "Récapitulatif :",
          `- Profil : ${data.profile}`,
          `- Destination : ${data.destination}`,
          "",
          "Fanienne - Accompagnement visa Schengen à Dakar",
          "contact@fanienne.sn",
        ].join("\n");

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "Non renseigné",
        profile: data.profile,
        destination: data.destination,
        project: data.project || "Non renseigné",
        message: adminMessage,
        _subject: adminSubject,
        _template: "table",
        _captcha: "false",
        _replyto: data.email,
        _autoresponse: clientAutoresponse,
      }),
    }
  );

  const result = (await response.json().catch(() => ({}))) as {
    success?: string | boolean;
    message?: string;
  };

  const message = String(result.message || "");
  const needsActivation = /activat/i.test(message);
  const ok =
    result.success === true ||
    result.success === "true" ||
    needsActivation;

  if (!ok) {
    throw new Error(message || "FormSubmit send failed");
  }

  return { needsActivation };
}
