import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experiencia" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          query="SELECT * FROM experiencia ORDER BY periodo DESC"
          title="Experiência"
        />

        <div className="space-y-8">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.06}>
              <div className="glow-card rounded-lg p-6 md:p-8">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <h3 className="font-display text-xl font-medium text-ink-primary">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-accent">
                  {item.company}
                </p>
                <p className="mt-4 text-ink-secondary">{item.summary}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-ink-secondary"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
