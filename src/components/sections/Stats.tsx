"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{String(display).padStart(2, "0")}</span>;
}

const technologies = new Set(skillGroups.flatMap((g) => g.items)).size;
const withRepo = projects.filter((p) => p.github).length;

const stats = [
  { value: projects.length, label: "Projetos documentados" },
  { value: withRepo, label: "Com código no GitHub" },
  { value: technologies, label: "Tecnologias na stack" },
  { value: skillGroups.length, label: "Áreas de atuação" },
];

export function Stats() {
  return (
    <section
      aria-label="Resumo em números"
      className="border-b border-border bg-base-elevated/40"
    >
      <Container>
        <dl className="grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse md:border-l md:border-border md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="mt-1 font-mono text-xs text-ink-muted">
                {s.label}
              </dt>
              <dd className="font-display text-4xl font-semibold text-ink-primary">
                <Counter value={s.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
