"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Skills", href: "/#skills" },
  { label: "Contato", href: "/#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-base/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          href="/#top"
          className="font-display text-sm font-semibold tracking-wide text-ink-primary"
        >
          gustavo<span className="text-accent">.freitas</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-mono text-xs uppercase tracking-wide text-ink-secondary transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Gustavo Freitas"
            className="text-ink-secondary transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Gustavo Freitas"
            className="text-ink-secondary transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <Link
            href="/#projetos"
            className="group inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent-dim px-3.5 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent/15"
          >
            Ver projetos
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="text-ink-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-base px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-wide text-ink-secondary hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-5">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-secondary hover:text-accent"
            >
              <Github size={18} />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-secondary hover:text-accent"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
