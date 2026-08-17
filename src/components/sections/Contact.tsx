"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check, Send } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard indisponível — sem ação necessária, o e-mail já é visível na tela.
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Formulário preparado para integração futura (ex.: rota de API + serviço de e-mail).
    // Por enquanto, apenas confirma o envio na interface.
    setSubmitted(true);
  }

  return (
    <section id="contato" className="py-24">
      <Container>
        <SectionHeading
          query="INSERT INTO contatos (nome, mensagem) VALUES (?, ?)"
          title="Vamos conversar?"
          description="Aberto a oportunidades de estágio e posições júnior em Dados. Envie uma mensagem ou entre em contato pelos canais abaixo."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glow-card flex items-center gap-4 rounded-lg p-5 transition-colors hover:border-accent/40"
            >
              <Linkedin className="text-accent" size={20} />
              <div>
                <p className="text-sm font-medium text-ink-primary">
                  LinkedIn
                </p>
                <p className="font-mono text-xs text-ink-muted">
                  Conecte-se profissionalmente
                </p>
              </div>
            </a>

            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="glow-card flex items-center gap-4 rounded-lg p-5 transition-colors hover:border-accent/40"
            >
              <Github className="text-accent" size={20} />
              <div>
                <p className="text-sm font-medium text-ink-primary">
                  GitHub
                </p>
                <p className="font-mono text-xs text-ink-muted">
                  Veja o código dos projetos
                </p>
              </div>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="glow-card flex w-full items-center gap-4 rounded-lg p-5 text-left transition-colors hover:border-accent/40"
            >
              <Mail className="text-accent" size={20} />
              <div className="flex-1">
                <p className="text-sm font-medium text-ink-primary">
                  {site.email}
                </p>
                <p className="font-mono text-xs text-ink-muted">
                  Clique para copiar
                </p>
              </div>
              {copied ? (
                <Check size={16} className="text-signal-green" />
              ) : (
                <Copy size={16} className="text-ink-muted" />
              )}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="glow-card rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-mono text-xs text-ink-secondary"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-border bg-base-elevated px-3.5 py-2.5 text-sm text-ink-primary outline-none transition-colors focus:border-accent/50"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-xs text-ink-secondary"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-border bg-base-elevated px-3.5 py-2.5 text-sm text-ink-primary outline-none transition-colors focus:border-accent/50"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-xs text-ink-secondary"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-border bg-base-elevated px-3.5 py-2.5 text-sm text-ink-primary outline-none transition-colors focus:border-accent/50"
                  placeholder="Como posso ajudar?"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
              >
                {submitted ? (
                  <>
                    <Check size={16} />
                    Mensagem enviada
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensagem
                  </>
                )}
              </button>
              {submitted && (
                <p className="text-center font-mono text-xs text-ink-muted">
                  Este formulário ainda não está conectado a um backend —
                  use e-mail ou LinkedIn por enquanto.
                </p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
