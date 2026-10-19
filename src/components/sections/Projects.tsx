import { ArrowUpRight, Github } from "lucide-react";
import { getFeaturedProject } from "@/data/projects";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectFilter } from "@/components/projects/ProjectFilter";

export function Projects() {
  const featured = getFeaturedProject();

  return (
    <section id="projetos" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          query="SELECT * FROM projetos ORDER BY relevancia DESC"
          title="Projetos"
          description="Soluções construídas de ponta a ponta — do problema de negócio à entrega técnica."
        />

        {featured && <FeaturedProject project={featured} />}

        <ProjectFilter />

        <div className="mt-12 flex justify-center">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-ink-primary transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Github size={16} />
            Ver todos os repositórios no GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
