// Configuração central do site.
// Campos marcados com "PLACEHOLDER" devem ser substituídos por dados reais
// antes do deploy em produção.

export const site = {
  name: "Gustavo Freitas",
  role: "Data Analytics | Business Intelligence | Python | SQL",
  tagline:
    "Transformo dados em análises, indicadores e soluções que apoiam decisões de negócio.",
  location: "PLACEHOLDER: Cidade, UF — Brasil",
  availability: "Disponível para estágio e oportunidades júnior em Dados",
  email: "PLACEHOLDER_EMAIL@dominio.com",
  links: {
    github: "https://github.com/PLACEHOLDER_GITHUB",
    linkedin: "https://linkedin.com/in/PLACEHOLDER_LINKEDIN",
  },
  seo: {
    title: "Gustavo Freitas | Data Analytics & Business Intelligence",
    description:
      "Portfolio de Gustavo Freitas — projetos em Data Analytics, Business Intelligence, Python, SQL, ETL e Power BI.",
    url: "https://PLACEHOLDER-dominio.com",
  },
  about: {
    summary:
      "Estudante de Ciência da Computação em formação profissional na área de Dados, com experiência prática na construção de soluções envolvendo análise de dados, Business Intelligence, ETL e visualização. Interesse em transformar dados brutos em informações que apoiam decisões de negócio, com base sólida em Python, SQL e Power BI.",
    focus: [
      "Análise de dados e geração de indicadores de negócio",
      "Construção de pipelines ETL e modelagem de dados",
      "Dashboards e relatórios em Power BI",
      "Consultas e modelagem em SQL / PostgreSQL",
    ],
  },
  education: {
    degree: "Bacharelado em Ciência da Computação",
    institution: "PLACEHOLDER: Nome da instituição",
    period: "PLACEHOLDER: 20XX — em andamento",
  },
};

export type SiteConfig = typeof site;
