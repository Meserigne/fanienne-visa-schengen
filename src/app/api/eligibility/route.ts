import { NextResponse } from "next/server";
import {
  CONTACT_EMAIL,
  EMAIL_FROM,
  buildAdminEmail,
  buildClientEmail,
  getResend,
  type EligibilityPayload,
} from "@/lib/email";

export const runtime = "nodejs";

type Body = Partial<EligibilityPayload>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendWithWeb3Forms(data: EligibilityPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const admin = buildAdminEmail(data);
  const client = buildClientEmail(data);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: admin.subject,
      from_name: "Tooky Consulting",
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      profile: data.profile,
      destination: data.destination,
      project: data.project || "",
      message: admin.text,
      replyto: data.email,
      autoresponse: "true",
      autoresponse_subject: client.subject,
      autoresponse_message: client.text,
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };
  if (!response.ok || !result.success) {
    throw new Error(result.message || "Web3Forms send failed");
  }

  return true;
}

async function sendWithResend(data: EligibilityPayload) {
  const resend = getResend();
  if (!resend) return false;

  const admin = buildAdminEmail(data);
  const client = buildClientEmail(data);

  const adminResult = await resend.emails.send({
    from: EMAIL_FROM,
    to: [CONTACT_EMAIL],
    replyTo: data.email,
    subject: admin.subject,
    text: admin.text,
    html: admin.html,
  });

  if (adminResult.error) {
    throw new Error(adminResult.error.message);
  }

  const clientResult = await resend.emails.send({
    from: EMAIL_FROM,
    to: [data.email],
    replyTo: CONTACT_EMAIL,
    subject: client.subject,
    text: client.text,
    html: client.html,
  });

  if (clientResult.error) {
    console.error("Client confirmation email error:", clientResult.error);
  }

  return true;
}

async function sendWithFormSubmit(data: EligibilityPayload) {
  const admin = buildAdminEmail(data);
  const client = buildClientEmail(data);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://fabienne-visa-schengen.vercel.app";

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // FormSubmit rejects server calls without a browser Origin/Referer.
        Origin: siteUrl,
        Referer: `${siteUrl}/`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "Non renseigné",
        profile: data.profile,
        destination: data.destination,
        project: data.project || "Non renseigné",
        message: admin.text,
        _subject: admin.subject,
        _template: "table",
        _captcha: "false",
        _replyto: data.email,
        _autoresponse: client.text,
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

export async function POST(request: Request) {
  let body: Body;

  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const data: EligibilityPayload = {
    profile: String(body.profile || "").trim(),
    destination: String(body.destination || "").trim(),
    name: String(body.name || "").trim(),
    email: String(body.email || "").trim().toLowerCase(),
    phone: String(body.phone || "").trim(),
    project: String(body.project || "").trim(),
    lang: body.lang === "en" ? "en" : "fr",
  };

  if (!data.name || !data.email || !data.profile || !data.destination) {
    return NextResponse.json(
      { error: data.lang === "fr" ? "Champs obligatoires manquants." : "Missing required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json(
      { error: data.lang === "fr" ? "Email invalide." : "Invalid email." },
      { status: 400 }
    );
  }

  try {
    let needsActivation = false;

    if (process.env.WEB3FORMS_ACCESS_KEY) {
      await sendWithWeb3Forms(data);
    } else if (process.env.RESEND_API_KEY) {
      await sendWithResend(data);
    } else {
      // Default: FormSubmit → CONTACT_EMAIL (+ client autoresponse)
      const result = await sendWithFormSubmit(data);
      needsActivation = result.needsActivation;
    }

    return NextResponse.json({
      ok: true,
      needsActivation,
      message: needsActivation
        ? data.lang === "fr"
          ? `Demande enregistrée. Activez FormSubmit via le lien reçu sur ${CONTACT_EMAIL} pour recevoir les prochaines notifications.`
          : `Request saved. Activate FormSubmit via the link sent to ${CONTACT_EMAIL} to receive further notifications.`
        : undefined,
    });
  } catch (error) {
    console.error("Eligibility email failure:", error);
    return NextResponse.json(
      {
        error:
          data.lang === "fr"
            ? "Impossible d'envoyer la demande pour le moment. Réessayez dans quelques instants."
            : "Unable to send the request right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }
}
