import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, ImageOff } from "lucide-react";
import Image from "next/image";
import { projects, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.description,
    },
  };
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <p className="eyebrow mb-4">{label}</p>
      {children}
    </div>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project, 2);

  return (
    <article className="py-16">
      <Container>
        <Link
          href="/#projetos"
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs text-ink-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          Voltar para projetos
        </Link>

        {/* Hero do projeto */}
        <header className="mb-4 max-w-3xl">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.category.map((c) => (
              <Badge key={c} variant="accent">
                {c}
              </Badge>
            ))}
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink-primary md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-ink-secondary">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-ink-primary transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Github size={15} />
                Código no GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
              >
                Ver demonstração
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.7fr_1fr]">
          <div>
            {project.context && (
              <Block label="Contexto">
                <p className="text-ink-secondary">{project.context}</p>
              </Block>
            )}

            <Block label="Problema">
              <p className="text-ink-secondary">{project.problem}</p>
            </Block>

            {project.objective && (
              <Block label="Objetivo">
                <p className="text-ink-secondary">{project.objective}</p>
              </Block>
            )}

            {project.architecture && (
              <Block label="Arquitetura da solução">
                <p className="text-ink-secondary">{project.architecture}</p>
              </Block>
            )}

            {project.pipeline && (
              <Block label="Pipeline">
                <ol className="space-y-3">
                  {project.pipeline.map((step, i) => (
                    <li
                      key={step.label}
                      className="flex items-center gap-3 font-mono text-sm text-ink-primary"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 text-[11px] text-accent">
                        {i + 1}
                      </span>
                      {step.label}
                    </li>
                  ))}
                </ol>
              </Block>
            )}

            {project.modeling && (
              <Block label="Modelagem">
                <p className="text-ink-secondary">{project.modeling}</p>
              </Block>
            )}

            {project.process && (
              <Block label="Processo técnico">
                <ul className="space-y-2.5">
                  {project.process.map((step) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-ink-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {step}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {project.queries && project.queries.length > 0 && (
              <Block label="Queries">
                <div className="space-y-4">
                  {project.queries.map((q) => (
                    <div
                      key={q.label}
                      className="rounded-lg border border-border bg-base-panel p-4"
                    >
                      <p className="mb-2 font-mono text-xs text-ink-muted">
                        {q.label}
                      </p>
                      <pre className="overflow-x-auto font-mono text-xs text-accent">
                        {q.sql}
                      </pre>
                    </div>
                  ))}
                </div>
              </Block>
            )}

            {project.insights && (
              <Block label="Insights">
                <ul className="space-y-2.5">
                  {project.insights.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-ink-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-green" />
                      {i}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            <Block label="Resultados">
              <p className="text-ink-secondary">{project.result}</p>
              {project.resultsDetail && (
                <ul className="mt-4 space-y-2.5">
                  {project.resultsDetail.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-ink-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              )}
            </Block>

            {project.limitations && (
              <Block label="Limitações">
                <ul className="space-y-2.5">
                  {project.limitations.map((l) => (
                    <li
                      key={l}
                      className="flex items-start gap-3 text-ink-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-amber" />
                      {l}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            <Block label={project.images ? "Visualizações" : "Screenshots"}>
              {project.images ? (
                <div className="space-y-6">
                  {project.images.map((img) => (
                    <figure key={img.src}>
                      <div className="overflow-hidden rounded-lg border border-border bg-white">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          sizes="(min-width: 1024px) 60vw, 100vw"
                          className="h-auto w-full"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="mt-2 font-mono text-xs text-ink-muted">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-3 rounded-lg border border-dashed border-border p-6 text-ink-muted">
                  <ImageOff size={18} />
                  <p className="font-mono text-xs">
                    Capturas de tela serão adicionadas em breve.
                  </p>
                </div>
              )}
            </Block>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="glow-card rounded-lg p-6">
              <p className="eyebrow mb-4">solução</p>
              <p className="text-sm text-ink-secondary">{project.solution}</p>
            </div>

            <div className="glow-card rounded-lg p-6">
              <p className="eyebrow mb-4">tecnologias</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t border-border pt-12">
            <p className="eyebrow mb-6">Projetos relacionados</p>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}
