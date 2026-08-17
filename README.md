# Gustavo Freitas — Portfolio

Portfolio profissional construído em Next.js 14 (App Router), TypeScript e
Tailwind CSS, posicionado para **Data Analytics | Business Intelligence |
Python | SQL | ETL**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (tema dark/grafite com acento ciano, tokens customizados)
- Framer Motion (reveal on scroll, microinterações)
- lucide-react (ícones)
- Fontes self-hosted via `@fontsource` (Space Grotesk, Inter, JetBrains Mono)
  — evita dependência de rede em tempo de build para o Google Fonts

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para build de produção:

```bash
npm run build
npm run start
```

## Estrutura do projeto

```text
src/
├── app/
│   ├── page.tsx                # Home: compõe todas as seções
│   ├── layout.tsx              # Layout raiz, fontes, metadata global
│   ├── globals.css
│   ├── not-found.tsx           # Página 404 customizada
│   ├── sitemap.ts              # Sitemap dinâmico (inclui projetos)
│   ├── robots.ts
│   └── projects/[slug]/page.tsx  # Template reutilizável de projeto
│
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/                # Hero, About, Skills, Projects, Experience...
│   ├── projects/                # ProjectCard, ProjectFilter, FeaturedProject
│   └── ui/                      # Container, Badge, SectionHeading, Reveal
│
├── data/
│   ├── site.ts                  # Config central: nome, links, SEO, sobre
│   ├── projects.ts               # Todos os projetos (fonte única de dados)
│   ├── skills.ts                 # Stack por categoria
│   └── experience.ts             # Experiência profissional + certificações
│
└── lib/
    └── utils.ts                  # Helper `cn` (clsx + tailwind-merge)
```

## Decisões de arquitetura

- **Conteúdo separado de apresentação**: todo o texto editável (nome, bio,
  links, projetos, experiência, certificações) vive em `src/data/*.ts`.
  Nenhum componente precisa ser tocado para atualizar conteúdo.
- **Projetos data-driven**: a página `/projects/[slug]` é um único template
  (`generateStaticParams` + `generateMetadata`) que renderiza qualquer
  projeto presente em `data/projects.ts`.
- **Sem métricas inventadas**: onde não havia dado real (e-mail, LinkedIn,
  GitHub, instituição de ensino, datas de experiência, certificações), o
  campo foi preenchido com `PLACEHOLDER` — busque por esse termo antes do
  deploy.
- **Sem barras de progresso de skill**: a seção de stack usa cards
  organizados por categoria, não barras "Python 80%", que não comunicam
  competência real.
- **Assinatura visual**: eyebrows em formato de pseudo-consulta SQL
  (`SELECT * FROM ...`) reforçam o posicionamento em dados sem depender de
  gráficos decorativos.

## Como adicionar um novo projeto

Edite `src/data/projects.ts` e adicione um novo objeto ao array `projects`.
Apenas `slug`, `title`, `description`, `category`, `technologies`,
`featured`, `problem`, `solution` e `result` são obrigatórios — os demais
campos (`context`, `pipeline`, `process`, `queries`, `insights` etc.) são
opcionais e só renderizam se preenchidos. Nenhum componente precisa ser
alterado.

## Antes do deploy — checklist de conteúdo real

Busque por `PLACEHOLDER` no projeto e substitua por dados reais:

- `src/data/site.ts` — e-mail, LinkedIn, GitHub, localização, URL do site,
  instituição de ensino
- `src/data/experience.ts` — datas da experiência na INBRANDS S/A,
  certificações reais (ou remova o array se ainda não houver nenhuma)
- `src/data/projects.ts` — URLs reais dos repositórios no GitHub

## Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com):

1. Suba o repositório para o GitHub.
2. Importe o repositório na Vercel (framework detectado automaticamente
   como Next.js).
3. Atualize `site.seo.url` em `src/data/site.ts` para o domínio final antes
   do deploy — ele alimenta o sitemap, robots.txt e Open Graph.

## Possíveis melhorias futuras

- Adicionar screenshots reais dos projetos (a página de projeto já reserva
  o espaço)
- Conectar o formulário de contato a um backend real (ex.: rota de API +
  Resend/SendGrid)
- Dark/light mode (atualmente dark-only, por decisão de identidade visual)
- Integração com a API do GitHub para exibir atividade recente
- Busca de projetos por texto livre, além dos filtros por categoria
