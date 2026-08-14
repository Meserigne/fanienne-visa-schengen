export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "meserigne@gmail.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tookyconsulting.com";

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
      "Thank you. Your request has been received.",
      "A Tukki advisor will review your profile and get back to you shortly.",
      "",
      "Summary:",
      `- Profile: ${data.profile}`,
      `- Destination: ${data.destination}`,
      "",
      "Best regards,",
      "The Tukki Consulting team",
      "Dakar · contact@tookyconsulting.com",
    ].join("\n");
  }

  return [
    `Bonjour ${data.name},`,
    "",
    "Merci. Votre demande est bien reçue.",
    "Un conseiller Tukki analyse votre profil et vous recontacte sous peu.",
    "",
    "Récapitulatif :",
    `- Profil : ${data.profile}`,
    `- Destination : ${data.destination}`,
    "",
    "Cordialement,",
    "L'équipe Tukki Consulting",
    "Dakar · contact@tookyconsulting.com",
  ].join("\n");
}
