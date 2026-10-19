// Configuração central do site.
// Campos marcados com "PLACEHOLDER" devem ser substituídos por dados reais
// antes do deploy em produção.

export const site = {
  name: "Gustavo Freitas",
  role: "Data Analytics | Business Intelligence | Python | SQL",
  tagline:
    "Transformo dados em análises, indicadores e soluções que apoiam decisões de negócio.",
  location: "São Paulo: SP — Brasil",
  availability: "Disponível para estágio e oportunidades júnior em Dados",
  email: "gu.gusta.freitas@hotmail.com",
  links: {
    github: "https://github.com/gustavfreitas",
    linkedin: "https://www.linkedin.com/in/gs-freitas/",
  },
  seo: {
    title: "Gustavo Freitas | Data Analytics & Business Intelligence",
    description:
      "Portfolio de Gustavo Freitas — projetos em Data Analytics, Business Intelligence, Python, SQL, ETL e Power BI.",
    url: "https://portfolio-tawny-one-99.vercel.app",
  },
  about: {
    summary:
      "Estudante de Ciência da Computação em formação profissional na área de Dados, com experiência prática na construção de soluções envolvendo análise de dados, Business Intelligence, ETL e visualização. Mais recentemente, venho levando esse repertório para Machine Learning e IA Generativa, sempre com foco em transformar dados brutos em informações que apoiam decisões de negócio, com base sólida em Python, SQL e Power BI.",
    focus: [
      "Análise de dados e geração de indicadores de negócio",
      "Construção de pipelines ETL e modelagem de dados",
      "Dashboards e relatórios em Power BI",
      "Consultas e modelagem em SQL / PostgreSQL",
      "Modelos de Machine Learning (classificação, regressão e clustering) e IA Generativa aplicada",
    ],
  },
  education: {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Centro Universitário Senac: Campus Santo Amaro",
    period: "Período: 2023 — em andamento",
  },
};

export type SiteConfig = typeof site;
