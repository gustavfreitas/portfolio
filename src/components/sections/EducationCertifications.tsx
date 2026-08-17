import { ExternalLink, GraduationCap, Award } from "lucide-react";
import { site } from "@/data/site";
import { certifications } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function EducationCertifications() {
  return (
    <section id="formacao" className="border-b border-border py-24">
      <Container>
        <SectionHeading
          query="SELECT * FROM formacao, certificacoes"
          title="Formação &amp; Certificações"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glow-card h-full rounded-lg p-6">
              <div className="mb-4 flex items-center gap-2 text-accent">
                <GraduationCap size={18} />
                <span className="font-mono text-xs uppercase tracking-wide">
                  Formação
                </span>
              </div>
              <h3 className="font-display text-lg font-medium text-ink-primary">
                {site.education.degree}
              </h3>
              <p className="mt-1 text-sm text-ink-secondary">
                {site.education.institution}
              </p>
              <p className="mt-1 font-mono text-xs text-ink-muted">
                {site.education.period}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glow-card h-full rounded-lg p-6">
              <div className="mb-4 flex items-center gap-2 text-accent">
                <Award size={18} />
                <span className="font-mono text-xs uppercase tracking-wide">
                  Certificações
                </span>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-start justify-between gap-3 border-b border-border-soft pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-ink-primary">
                        {cert.name}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-secondary">
                        {cert.institution} · {cert.year}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver certificação: ${cert.name}`}
                        className="mt-1 text-ink-muted transition-colors hover:text-accent"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
