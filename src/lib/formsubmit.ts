export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "meserigne@gmail.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://fabienne-visa-schengen.vercel.app";

export function buildClientAutoresponse(data: {
  name: string;
  profile: string;
  destination: string;
  lang: "fr" | "en";
}) {
  if (data.lang === "en") {
    return [
      `Hello ${data.name},`,
      "",
      "Thank you for your Schengen visa eligibility request on Fabienne.",
      "We have received your information and will get back to you shortly.",
      "",
      "Summary:",
      `- Profile: ${data.profile}`,
      `- Destination: ${data.destination}`,
      "",
      "Best regards,",
      "The Fabienne team",
      "Dakar · contact@fabienne.sn",
    ].join("\n");
  }

  return [
    `Bonjour ${data.name},`,
    "",
    "Merci pour votre demande d'éligibilité visa Schengen sur Fabienne.",
    "Nous avons bien reçu vos informations et nous vous reviendrons sous peu.",
    "",
    "Récapitulatif :",
    `- Profil : ${data.profile}`,
    `- Destination : ${data.destination}`,
    "",
    "Cordialement,",
    "L'équipe Fabienne",
    "Dakar · contact@fabienne.sn",
  ].join("\n");
}
