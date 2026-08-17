import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center">
      <Container>
        <p className="font-mono text-xs text-accent">
          <span className="text-ink-muted">$</span> SELECT * FROM paginas
          WHERE rota = solicitada
        </p>
        <h1 className="mt-5 font-display text-6xl font-semibold text-ink-primary md:text-8xl">
          404
        </h1>
        <p className="mt-4 max-w-md text-ink-secondary">
          Nenhum resultado encontrado para esta rota. A página que você
          procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-ink-primary transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ArrowLeft size={15} />
          Voltar para o início
        </Link>
      </Container>
    </div>
  );
}
