"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, X, UserRound } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_INPUT = 800;

export function AiChat() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const t = {
    fr: {
      open: "Assistant Tooky",
      title: "Assistant Tooky",
      subtitle: "Questions visa & formules, avant un conseiller.",
      disclaimer:
        "Assistant IA. Ne remplace pas un conseiller. La décision visa appartient au consulat.",
      placeholder: "Posez votre question…",
      send: "Envoyer",
      close: "Fermer le chat",
      handoff: "Parler à un conseiller",
      thinking: "Réflexion…",
      error:
        "Je n'ai pas pu répondre. Utilisez le formulaire pour joindre un conseiller.",
      welcome:
        "Bonjour. Je peux vous orienter sur nos formules, le parcours Tooky et le cadre général du visa Schengen. Pour un devis ou un cas personnel, un conseiller vous répond sous 48 h via le formulaire.",
      suggestions: [
        "Quelle formule pour étudier en Europe ?",
        "Comment se déroule l'accompagnement ?",
        "Quels délais pour une réponse ?",
      ],
    },
    en: {
      open: "Tooky assistant",
      title: "Tooky assistant",
      subtitle: "Visa & plan questions, before a counsellor.",
      disclaimer:
        "AI assistant. Does not replace a counsellor. Visa decisions rest with the consulate.",
      placeholder: "Ask your question…",
      send: "Send",
      close: "Close chat",
      handoff: "Talk to a counsellor",
      thinking: "Thinking…",
      error: "I could not reply. Please use the form to reach a counsellor.",
      welcome:
        "Hello. I can guide you on our plans, the Tooky process and general Schengen visa framing. For a quote or a personal case, a counsellor replies within 48 hours via the form.",
      suggestions: [
        "Which plan for studying in Europe?",
        "How does the support process work?",
        "How soon will I get a reply?",
      ],
    },
  }[lang];

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const goToForm = () => {
    setOpen(false);
    const href = pathname === "/" ? "#eligibilite" : "/#eligibilite";
    if (pathname === "/") {
      document.getElementById("eligibilite")?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, "", "#eligibilite");
    } else {
      window.location.href = href;
    }
  };

  const sendMessage = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user" as const, content: content.slice(0, MAX_INPUT) },
    ].slice(-12);

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, lang }),
      });

      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data?.error || t.error },
        ]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistant = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistant += decoder.decode(value, { stream: true });
        const snapshot = assistant;
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: snapshot };
          return copy;
        });
      }

      if (!assistant.trim()) {
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: t.error };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  return (
    <div className="fixed right-5 bottom-5 z-[60] flex flex-col items-end gap-3 sm:right-8 sm:bottom-8">
      {open && (
        <div
          className="flex h-[min(560px,calc(100dvh-7.5rem))] w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border shadow-2xl"
          style={{
            background: "var(--surface-card)",
            borderColor: "var(--border-default)",
            boxShadow: "0 20px 50px rgba(7, 17, 31, 0.22)",
          }}
          role="dialog"
          aria-label={t.title}
        >
          <header
            className="flex items-start justify-between gap-3 px-4 py-3.5"
            style={{ background: "var(--c-cobalt-500)", color: "var(--c-white)" }}
          >
            <div className="min-w-0">
              <p
                className="text-[15px] font-semibold"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {t.title}
              </p>
              <p className="mt-0.5 text-[12px] leading-snug opacity-90">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="rounded-lg p-1.5 transition-opacity hover:opacity-80"
            >
              <X className="size-4" />
            </button>
          </header>

          <p
            className="border-b px-4 py-2 text-[11px] leading-snug"
            style={{
              borderColor: "var(--border-default)",
              color: "var(--text-secondary)",
              background: "var(--color-bg)",
            }}
          >
            {t.disclaimer}
          </p>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            <div
              className="rounded-2xl rounded-tl-md px-3 py-2.5 text-[14px] leading-relaxed"
              style={{
                background: "color-mix(in srgb, var(--c-cobalt-500) 10%, transparent)",
                color: "var(--text-primary)",
              }}
            >
              {t.welcome}
            </div>

            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[92%] rounded-2xl px-3 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${
                    message.role === "user" ? "rounded-tr-md" : "rounded-tl-md"
                  }`}
                  style={
                    message.role === "user"
                      ? {
                          background: "var(--c-cobalt-500)",
                          color: "var(--c-white)",
                        }
                      : {
                          background: "var(--color-bg)",
                          color: "var(--text-primary)",
                          border: "1px solid var(--border-default)",
                        }
                  }
                >
                  {message.content || (loading ? t.thinking : "")}
                </div>
              </div>
            ))}

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {t.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    disabled={loading}
                    onClick={() => void sendMessage(suggestion)}
                    className="rounded-full border px-3 py-1.5 text-left text-[12px] transition-colors hover:bg-white"
                    style={{
                      borderColor: "var(--border-default)",
                      color: "var(--text-secondary)",
                      background: "var(--surface-card)",
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t px-3 pt-2 pb-3" style={{ borderColor: "var(--border-default)" }}>
            <button
              type="button"
              onClick={goToForm}
              className="mb-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-3 py-2 text-[13px] font-semibold transition-colors"
              style={{
                fontFamily: "var(--font-ui)",
                borderColor: "color-mix(in srgb, var(--c-cobalt-500) 35%, transparent)",
                color: "var(--c-cobalt-500)",
                background: "color-mix(in srgb, var(--c-cobalt-500) 8%, transparent)",
              }}
            >
              <UserRound className="size-3.5" />
              {t.handoff}
            </button>

            <form onSubmit={onSubmit} className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void sendMessage(input);
                  }
                }}
                rows={2}
                maxLength={MAX_INPUT}
                placeholder={t.placeholder}
                disabled={loading}
                className="max-h-28 min-h-[44px] flex-1 resize-none rounded-xl border px-3 py-2 text-[14px] outline-none focus-visible:ring-2"
                style={{
                  borderColor: "var(--border-default)",
                  background: "var(--color-bg)",
                  color: "var(--text-primary)",
                }}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label={t.send}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl disabled:opacity-40"
                style={{ background: "var(--c-cobalt-500)", color: "var(--c-white)" }}
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.open}
        aria-expanded={open}
        className="flex h-14 items-center gap-2 rounded-full px-4 shadow-lg transition-transform hover:-translate-y-0.5 sm:h-12"
        style={{
          background: "var(--c-cobalt-500)",
          color: "var(--c-white)",
          boxShadow: "0 10px 28px rgba(36, 80, 232, 0.35)",
          fontFamily: "var(--font-ui)",
        }}
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
        <span className="hidden text-[14px] font-semibold sm:inline">{t.open}</span>
      </button>
    </div>
  );
}
