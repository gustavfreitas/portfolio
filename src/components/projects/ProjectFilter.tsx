"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";

const ALL = "Todos" as const;
type Filter = typeof ALL | ProjectCategory;

export function ProjectFilter() {
  const [active, setActive] = useState<Filter>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active]);

  const filters: Filter[] = [ALL, ...projectCategories];

  function countFor(f: Filter) {
    return f === ALL
      ? projects.length
      : projects.filter((p) => p.category.includes(f)).length;
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filtrar projetos por categoria"
        className="mb-10 flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "inline-flex items-center gap-2 rounded-md border px-3.5 py-2 font-mono text-xs transition-colors",
              active === f
                ? "border-accent/40 bg-accent-dim text-accent"
                : "border-border text-ink-secondary hover:border-accent/30 hover:text-ink-primary"
            )}
          >
            {f}
            <span
              className={cn(
                "text-[10px]",
                active === f ? "text-accent/70" : "text-ink-muted"
              )}
            >
              {countFor(f)}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-mono text-sm text-ink-muted">
          Nenhum projeto encontrado para este filtro ainda.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
