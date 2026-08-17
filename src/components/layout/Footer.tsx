import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-display text-sm font-semibold text-ink-primary">
            gustavo<span className="text-accent">.freitas</span>
          </p>
          <p className="mt-1 font-mono text-xs text-ink-muted">
            {site.role}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-secondary transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-secondary transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="E-mail"
            className="text-ink-secondary transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
