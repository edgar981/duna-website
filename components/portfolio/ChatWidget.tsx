"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, Send, Loader2, Check } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    "Hola, me gustaría saber cómo Duna puede ayudarme a automatizar mi negocio y trabajar de forma más eficiente. ¿Podemos agendar una llamada?"
  );
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/chat-widget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  function resetAndClose() {
    setStatus("idle");
    setIsOpen(false);
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        {!isOpen && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
        )}
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Formulario de contacto"
          className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] origin-bottom-right overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-2xl sm:right-6 sm:w-96"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
            <div>
              <p className="text-sm font-semibold">¿En qué podemos ayudarte?</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                Escríbenos y te respondemos pronto
              </p>
            </div>
            <button
              type="button"
              onClick={resetAndClose}
              aria-label="Cerrar"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-5">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-4 text-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium">Mensaje enviado</p>
                <p className="text-sm text-muted-foreground">
                  Gracias por escribirnos. Te contactaremos pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cw-email"
                    className="font-mono text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    id="cw-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cw-phone"
                    className="font-mono text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    Teléfono *
                  </label>
                  <input
                    id="cw-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+57 300 123 4567"
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cw-message"
                    className="font-mono text-xs uppercase tracking-wide text-muted-foreground"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="cw-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    No pudimos enviar tu mensaje. Intenta de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending" || !email || !phone}
                  className="flex items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}