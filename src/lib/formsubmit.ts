export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "meserigne.ndiaye@mega-sn.com";

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
      "Thank you for your Schengen visa eligibility request on Fanienne.",
      "A Fanienne advisor will review your profile and reply within 48 hours.",
      "",
      "Summary of your request:",
      `- Profile: ${data.profile}`,
      `- Destination: ${data.destination}`,
      "",
      "Fanienne - Schengen visa support in Dakar",
      "contact@fanienne.sn",
    ].join("\n");
  }

  return [
    `Bonjour ${data.name},`,
    "",
    "Merci pour votre demande d'éligibilité visa Schengen sur Fanienne.",
    "Un conseiller Fanienne analyse votre profil et vous répond sous 48 heures.",
    "",
    "Récapitulatif de votre demande :",
    `- Profil : ${data.profile}`,
    `- Destination : ${data.destination}`,
    "",
    "Fanienne - Accompagnement visa Schengen à Dakar",
    "contact@fanienne.sn",
  ].join("\n");
}
