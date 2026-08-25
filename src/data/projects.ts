export type ProjectCategory =
  | "Data Analytics"
  | "BI"
  | "ETL"
  | "Python"
  | "SQL";

export interface PipelineStep {
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory[];
  technologies: string[];
  featured: boolean;
  github?: string;
  demo?: string;

  // Resumo usado no card
  problem: string;
  solution: string;
  result: string;

  // Conteúdo estendido usado na página individual do projeto
  context?: string;
  objective?: string;
  architecture?: string;
  pipeline?: PipelineStep[];
  modeling?: string;
  process?: string[];
  queries?: { label: string; sql: string }[];
  insights?: string[];
  resultsDetail?: string[];
}

export const projects: Project[] = [
  {
    slug: "feedbacks-bancarios",
    title: "Pipeline ETL para Feedbacks Bancários utilizando IA e PostgreSQL",
    description:
      "Pipeline completo de Customer Experience que utiliza dados sintéticos gerados por IA, tratamento de dados, ETL, PostgreSQL e análise orientada à geração de insights de negócio.",
    category: ["ETL", "Data Analytics", "SQL", "Python"],
    technologies: [
      "Python",
      "Pandas",
      "Excel",
      "PostgreSQL",
      "SQL",
      "ETL",
      "IA Generativa",
      "Prompt Engineering",
    ],
    featured: true,
    github: "https://github.com/gustavfreitas/feedback-bancario",
    problem:
      "Bancos recebem grandes volumes de feedback de clientes, mas raramente possuem um processo estruturado para transformar esse material em indicadores acionáveis de Customer Experience.",
    solution:
      "Construção de um pipeline ponta a ponta: geração de dados sintéticos realistas com IA, tratamento e padronização em Python, carga estruturada em PostgreSQL via ETL e análise em SQL orientada a insights de negócio.",
    result:
      "Base de dados consistente e consultável, pronta para gerar indicadores de satisfação, categorização de reclamações e apoio a decisões de CX.",
    context:
      "Feedbacks de clientes bancários costumam estar espalhados, sem padronização e sem estrutura analítica. Este projeto simula esse cenário de ponta a ponta, desde a origem do dado até a geração de insight.",
    objective:
      "Construir um pipeline reprodutível capaz de transformar texto não estruturado em uma base relacional analisável, aplicando boas práticas de ETL e modelagem de dados.",
    architecture:
      "Arquitetura em camadas: geração/ingestão de dados brutos, tratamento e padronização em Python/Pandas, carga estruturada em PostgreSQL e camada analítica acessada via SQL.",
    pipeline: [
      { label: "IA Generativa" },
      { label: "Dados Sintéticos" },
      { label: "Excel" },
      { label: "Tratamento" },
      { label: "ETL" },
      { label: "PostgreSQL" },
      { label: "SQL" },
      { label: "Análise" },
      { label: "Insights de Negócio" },
    ],
    modeling:
      "Modelagem relacional simples orientada à análise de feedbacks: tabelas de clientes, interações e categorias de feedback, normalizadas o suficiente para consultas analíticas diretas.",
    process: [
      "Geração de dados sintéticos de feedback com prompt engineering",
      "Padronização e limpeza dos textos e campos estruturados em Python/Pandas",
      "Carga dos dados tratados em PostgreSQL através do pipeline de ETL",
      "Escrita de queries SQL para segmentação e geração de indicadores",
      "Consolidação dos resultados em insights de negócio",
    ],
    insights: [
      "Identificação de categorias recorrentes de reclamação por segmento de cliente",
      "Visão consolidada de volume de feedback ao longo do tempo",
      "Base pronta para consumo por ferramentas de BI",
    ],
    resultsDetail: [
      "Pipeline reprodutível, com etapas isoladas e testáveis",
      "Base estruturada em PostgreSQL pronta para consultas analíticas",
      "Fundação reutilizável para outros projetos de análise textual",
    ],
  },
  {
    slug: "etl-api-verdanadesk",
    title: "ETL da API VerdanaDesk",
    description:
      "Pipeline de ETL que consome uma API externa, trata e modela os dados em um esquema dimensional preparado para consumo em BI.",
    category: ["ETL", "SQL", "Python"],
    technologies: [
      "Python",
      "Requests",
      "Pandas",
      "SQLAlchemy",
      "PostgreSQL",
      "API",
      "ETL",
      "Star Schema",
      "Data Warehouse",
    ],
    featured: false,
    github: "https://github.com/PLACEHOLDER_GITHUB/etl-api-verdanadesk",
    problem:
      "Dados de atendimento disponíveis apenas via API, sem estrutura histórica nem modelagem preparada para análise.",
    solution:
      "Pipeline de ETL que consome a API, realiza staging dos dados brutos, aplica transformações e deduplicação, gera surrogate keys e organiza o resultado em um esquema estrela (star schema).",
    result:
      "Data warehouse simples, consistente e pronto para ser consumido por ferramentas de BI.",
    context:
      "A VerdanaDesk expõe dados de atendimento via API REST. Sem um processo de ingestão estruturado, esses dados ficam limitados ao consumo pontual, sem histórico nem padronização.",
    objective:
      "Criar um pipeline de ETL que transforme os dados da API em um modelo dimensional, permitindo análises históricas confiáveis.",
    architecture:
      "Camada de staging para os dados brutos da API, camada de transformação em Python/Pandas e camada final modelada em star schema, persistida via SQLAlchemy em PostgreSQL.",
    pipeline: [
      { label: "API VerdanaDesk" },
      { label: "Extração (Requests)" },
      { label: "Staging" },
      { label: "Transformação" },
      { label: "Deduplicação" },
      { label: "Surrogate Keys" },
      { label: "Star Schema" },
      { label: "PostgreSQL" },
    ],
    modeling:
      "Modelagem dimensional (star schema) com tabelas fato de atendimentos e tabelas dimensão de clientes, agentes e tempo, usando surrogate keys para garantir integridade histórica.",
    process: [
      "Extração dos dados via requisições autenticadas à API (Requests)",
      "Staging dos dados brutos sem transformação",
      "Tratamento, deduplicação e padronização com Pandas",
      "Geração de surrogate keys e carga no modelo dimensional",
      "Persistência em PostgreSQL via SQLAlchemy",
    ],
    insights: [
      "Estrutura pronta para métricas de volume e tempo de atendimento",
      "Modelo preparado para conexão direta com Power BI",
    ],
    resultsDetail: [
      "Camada de staging isolada, facilitando reprocessamento",
      "Data warehouse dimensional consumível por ferramentas de BI",
    ],
  },
  {
    slug: "conectividade-de-lojas",
    title: "Conectividade de Lojas",
    description:
      "Projeto de contexto empresarial focado em análise operacional, integrando dados de ERP a relatórios e dashboards de apoio à decisão.",
    category: ["BI", "Data Analytics"],
    technologies: ["Power BI", "Excel", "Power Query", "SQL", "LINX ERP"],
    featured: false,
    problem:
      "Processos operacionais distribuídos entre lojas, com dados dispersos no ERP e baixa visibilidade consolidada para tomada de decisão.",
    solution:
      "Estruturação de relatórios e dashboards em Power BI a partir de dados extraídos do ERP (LINX), com tratamento em Power Query e consultas em SQL.",
    result:
      "Maior visibilidade operacional entre lojas, com relatórios consolidados e mais fáceis de interpretar pelas áreas de negócio.",
    context:
      "Projeto desenvolvido em contexto profissional, relacionado à integração e análise de dados operacionais provenientes do sistema ERP utilizado pela empresa.",
    objective:
      "Consolidar dados operacionais dispersos em relatórios e dashboards que apoiem decisões do time de negócio.",
    process: [
      "Extração e tratamento de dados do ERP (LINX) com Power Query",
      "Modelagem dos dados para consumo em Power BI",
      "Construção de relatórios e dashboards operacionais",
      "Validação de indicadores junto às áreas de negócio",
    ],
    insights: [
      "Maior padronização na leitura de indicadores entre lojas",
      "Redução do esforço manual na consolidação de relatórios",
    ],
  },
];

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories: ProjectCategory[] = [
  "Data Analytics",
  "BI",
  "ETL",
  "Python",
  "SQL",
];
