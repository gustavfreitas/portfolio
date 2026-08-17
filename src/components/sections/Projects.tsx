import { getFeaturedProject } from "@/data/projects";
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
      </Container>
    </section>
  );
}
