export type SmsConfirmPayload = {
  name: string;
  phone: string;
  profile: string;
  destination: string;
  lang: "fr" | "en";
};

/** Normalize Senegal / international phone numbers to E.164. */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/[^\d+]/g, "").trim();
  if (!digits) return null;

  let normalized = digits;
  if (normalized.startsWith("00")) {
    normalized = `+${normalized.slice(2)}`;
  } else if (normalized.startsWith("221") && !normalized.startsWith("+")) {
    normalized = `+${normalized}`;
  } else if (/^7\d{8}$/.test(normalized)) {
    // Local Senegal mobile: 7X XXX XX XX
    normalized = `+221${normalized}`;
  } else if (!normalized.startsWith("+")) {
    normalized = `+${normalized}`;
  }

  if (!/^\+[1-9]\d{7,14}$/.test(normalized)) return null;
  return normalized;
}

export function buildClientSms(data: SmsConfirmPayload): string {
  if (data.lang === "en") {
    return [
      `Tooky Consulting: hello ${data.name}, we received your request (${data.profile} · ${data.destination}).`,
      "A counsellor will reply within 48h. Do not send documents by SMS.",
    ].join(" ");
  }

  return [
    `Tooky Consulting: bonjour ${data.name}, nous avons bien reçu votre demande (${data.profile} · ${data.destination}).`,
    "Un conseiller vous répond sous 48 h. N'envoyez pas de pièces par SMS.",
  ].join(" ");
}

export function buildAdminSms(data: SmsConfirmPayload): string {
  return `[Tooky] Nouvelle demande: ${data.name} · ${data.profile} · ${data.destination} · ${data.phone}`;
}

export async function sendSms(to: string, body: string): Promise<boolean> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !from) {
    console.error("SMS skipped: Twilio env vars missing");
    return false;
  }

  const credentials = Buffer.from(`${accountSid}:${authToken}`).toString("base64");
  const params = new URLSearchParams({
    To: to,
    From: from,
    Body: body.slice(0, 320),
  });

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    },
  );

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("Twilio SMS error:", response.status, detail.slice(0, 400));
    return false;
  }

  return true;
}
