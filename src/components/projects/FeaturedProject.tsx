import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="glow-card mb-16 overflow-hidden rounded-lg">
      <div className="border-b border-border bg-base-elevated/60 px-6 py-3">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Projeto em destaque
        </span>
      </div>

      <div className="grid gap-10 p-6 md:grid-cols-2 md:p-10">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-display text-2xl font-medium text-ink-primary md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 text-ink-secondary">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              Ver estudo de caso
              <ArrowUpRight size={15} />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-ink-primary transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Github size={15} />
                GitHub
              </a>
            )}
          </div>
        </div>

        {project.pipeline && (
          <div className="rounded-lg border border-border bg-base-panel/70 p-6">
            <p className="mb-5 font-mono text-xs text-ink-muted">
              pipeline.flow
            </p>
            <ol className="space-y-0">
              {project.pipeline.map((step, i) => (
                <li key={step.label} className="relative pl-8">
                  {i !== project.pipeline!.length - 1 && (
                    <span className="absolute left-[9px] top-6 h-full w-px bg-border" />
                  )}
                  <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-accent/40 bg-base font-mono text-[9px] text-accent">
                    {i + 1}
                  </span>
                  <p className="pb-6 font-mono text-sm text-ink-primary">
                    {step.label}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
