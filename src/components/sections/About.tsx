import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="sobre" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          query="SELECT * FROM profissional WHERE nome = 'Gustavo Freitas'"
          title="Sobre"
        />

        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-secondary">
              {site.about.summary}
            </p>

            <ul className="mt-8 space-y-3">
              {site.about.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-ink-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glow-card rounded-lg p-6">
              <p className="eyebrow mb-4">metadata</p>
              <dl className="space-y-4 font-mono text-sm">
                <div>
                  <dt className="text-ink-muted">formação</dt>
                  <dd className="mt-1 text-ink-primary">
                    {site.education.degree}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">instituição</dt>
                  <dd className="mt-1 text-ink-primary">
                    {site.education.institution}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">localização</dt>
                  <dd className="mt-1 text-ink-primary">{site.location}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">status</dt>
                  <dd className="mt-1 text-signal-green">
                    {site.availability}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
