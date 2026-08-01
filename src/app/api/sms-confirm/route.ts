import { NextResponse } from "next/server";
import {
  buildAdminSms,
  buildClientSms,
  normalizePhone,
  sendSms,
  type SmsConfirmPayload,
} from "@/lib/sms";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Partial<SmsConfirmPayload>;

  try {
    body = (await request.json()) as Partial<SmsConfirmPayload>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const data: SmsConfirmPayload = {
    name: String(body.name || "").trim(),
    phone: String(body.phone || "").trim(),
    profile: String(body.profile || "").trim(),
    destination: String(body.destination || "").trim(),
    lang: body.lang === "en" ? "en" : "fr",
  };

  if (!data.name || !data.phone) {
    return NextResponse.json(
      {
        error:
          data.lang === "fr"
            ? "Nom et téléphone requis pour le SMS."
            : "Name and phone are required for SMS.",
      },
      { status: 400 },
    );
  }

  const to = normalizePhone(data.phone);
  if (!to) {
    return NextResponse.json(
      {
        error:
          data.lang === "fr"
            ? "Numéro de téléphone invalide. Utilisez le format +221…"
            : "Invalid phone number. Use +221… format.",
      },
      { status: 400 },
    );
  }

  const configured =
    !!process.env.TWILIO_ACCOUNT_SID &&
    !!process.env.TWILIO_AUTH_TOKEN &&
    !!process.env.TWILIO_PHONE_NUMBER;

  if (!configured) {
    return NextResponse.json(
      {
        error:
          data.lang === "fr"
            ? "Service SMS temporairement indisponible."
            : "SMS service temporarily unavailable.",
        configured: false,
      },
      { status: 503 },
    );
  }

  try {
    const clientOk = await sendSms(to, buildClientSms({ ...data, phone: to }));

    const adminTo = process.env.SMS_ADMIN_TO
      ? normalizePhone(process.env.SMS_ADMIN_TO)
      : null;
    if (adminTo) {
      await sendSms(adminTo, buildAdminSms({ ...data, phone: to }));
    }

    if (!clientOk) {
      return NextResponse.json(
        {
          error:
            data.lang === "fr"
              ? "Impossible d'envoyer le SMS pour le moment."
              : "Unable to send the SMS right now.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("SMS confirm failure:", error);
    return NextResponse.json(
      {
        error:
          data.lang === "fr"
            ? "Impossible d'envoyer le SMS pour le moment."
            : "Unable to send the SMS right now.",
      },
      { status: 502 },
    );
  }
}
