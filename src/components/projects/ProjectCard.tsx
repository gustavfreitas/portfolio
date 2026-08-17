import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="glow-card group flex h-full flex-col rounded-lg p-6"
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {project.category.map((c) => (
          <Badge key={c} variant="accent">
            {c}
          </Badge>
        ))}
      </div>

      <h3 className="font-display text-xl font-medium text-ink-primary transition-colors group-hover:text-accent">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.technologies.length > 5 && (
          <Badge>+{project.technologies.length - 5}</Badge>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">
          Ver detalhes
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
        {project.github && (
          <span className="text-ink-muted">
            <Github size={16} />
          </span>
        )}
      </div>
    </Link>
  );
}
