import { buildChatSystemPrompt } from "@/lib/chat-system-prompt";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_MESSAGES = 12;
const MAX_CONTENT_LENGTH = 800;
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

type ChatRole = "user" | "assistant";

type IncomingMessage = {
  role: ChatRole;
  content: string;
};

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

function sanitizeMessages(raw: unknown): IncomingMessage[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_MESSAGES) {
    return null;
  }

  const messages: IncomingMessage[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object") return null;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;
    const trimmed = content.trim();
    if (!trimmed || trimmed.length > MAX_CONTENT_LENGTH) return null;
    messages.push({ role, content: trimmed });
  }

  if (messages[messages.length - 1]?.role !== "user") return null;
  return messages;
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  let body: { messages?: unknown; lang?: unknown };

  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }

  const lang = body.lang === "en" ? "en" : "fr";
  const messages = sanitizeMessages(body.messages);

  if (!messages) {
    return jsonError(
      lang === "fr"
        ? "Message invalide. Limite : 12 messages, 800 caractères."
        : "Invalid message. Limit: 12 messages, 800 characters.",
      400,
    );
  }

  if (!apiKey) {
    return jsonError(
      lang === "fr"
        ? "L'assistant est temporairement indisponible. Utilisez le formulaire d'éligibilité."
        : "The assistant is temporarily unavailable. Please use the eligibility form.",
      503,
    );
  }

  const openaiRes = await fetch(OPENAI_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      stream: true,
      temperature: 0.4,
      max_tokens: 500,
      messages: [
        { role: "system", content: buildChatSystemPrompt(lang) },
        ...messages,
      ],
    }),
  });

  if (!openaiRes.ok || !openaiRes.body) {
    const detail = await openaiRes.text().catch(() => "");
    console.error("OpenAI chat error:", openaiRes.status, detail.slice(0, 400));
    return jsonError(
      lang === "fr"
        ? "Impossible de répondre pour le moment. Un conseiller vous répond via le formulaire."
        : "Unable to reply right now. A counsellor can help via the form.",
      502,
    );
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = openaiRes.body!.getReader();
      let buffer = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data) as {
                choices?: { delta?: { content?: string } }[];
              };
              const token = parsed.choices?.[0]?.delta?.content;
              if (token) controller.enqueue(encoder.encode(token));
            } catch {
              // skip malformed SSE chunks
            }
          }
        }
      } catch (error) {
        console.error("Chat stream error:", error);
        controller.error(error);
        return;
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
