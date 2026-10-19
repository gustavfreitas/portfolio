import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          query="SELECT categoria, tecnologias FROM stack"
          title="Stack &amp; Tecnologias"
          description="Ferramentas organizadas por área de aplicação — da análise à engenharia de dados."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="glow-card h-full rounded-lg p-6">
                <div className="mb-4 flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-medium text-ink-primary">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="mb-5 text-sm text-ink-secondary">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
