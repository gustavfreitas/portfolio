import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  query: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Cabeçalho de seção com um "eyebrow" em formato de pseudo-consulta SQL.
 * É o elemento de assinatura visual do site: reforça o tema de dados
 * sem depender de ícones decorativos ou gráficos sem significado.
 */
export function SectionHeading({
  query,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <p className="font-mono text-xs text-accent/90">
        <span className="text-ink-muted">$</span> {query}
      </p>
      <h2 className="font-display text-3xl font-semibold text-ink-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-ink-secondary",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
