"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs text-accent">
            <span className="text-ink-muted">&gt;</span> perfil profissional
            <span className="animate-blink text-accent">_</span>
          </p>

          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-ink-primary md:text-7xl">
            {site.name}
          </h1>

          <p className="mt-5 font-mono text-sm text-ink-secondary md:text-[1rem] md:leading-6">
            {site.role}
          </p>

          <p className="mt-6 max-w-xl text-lg text-ink-secondary">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/#projetos"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              Ver projetos
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-ink-primary transition-colors hover:border-accent/40 hover:text-accent"
            >
              Contato
            </Link>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-ink-primary transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-ink-primary transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-6 font-mono text-xs text-ink-muted">
            <span>{site.location}</span>
            <span className="text-accent/70">{site.availability}</span>
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="animate-bounce text-ink-muted" size={20} />
      </motion.div>
    </section>
  );
}
