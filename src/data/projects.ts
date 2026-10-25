export type ProjectCategory =
  | "Data Analytics"
  | "BI"
  | "ETL"
  | "Python"
  | "SQL"
  | "Machine Learning"
  | "IA Generativa";

export interface PipelineStep {
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
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
  limitations?: string[];
  images?: ProjectImage[];
  // Projetos de contexto profissional: oculta screenshots e exibe aviso.
  confidential?: boolean;
}

export const projects: Project[] = [
  {
    slug: "feedbacks-bancarios",
    title: "Pipeline ETL para Feedbacks Bancários utilizando IA e PostgreSQL",
    description:
      "Pipeline completo de Customer Experience sobre feedbacks sintéticos de um banco fictício (45 registros): ETL em PostgreSQL, auditoria de dados, KPIs de CX, score de priorização por tipo e canal e dashboard interativo de 4 páginas.",
    category: ["ETL", "Data Analytics", "BI", "SQL", "Python"],
    technologies: [
      "Python",
      "Pandas",
      "Excel",
      "PostgreSQL",
      "SQL",
      "ETL",
      "IA Generativa",
      "Prompt Engineering",
      "Chart.js",
      "GitHub Pages",
    ],
    featured: true,
    github: "https://github.com/gustavfreitas/feedback-bancario",
    demo: "https://gustavfreitas.github.io/feedback-bancario/",
    problem:
      "Bancos recebem grandes volumes de feedback de clientes, mas raramente possuem um processo estruturado para transformar esse material em indicadores acionáveis de Customer Experience.",
    solution:
      "Construção de um pipeline ponta a ponta: geração de dados sintéticos realistas com IA, tratamento e padronização em Python, carga estruturada em PostgreSQL via ETL e análise em SQL orientada a insights de negócio.",
    result:
      "CSAT de 37,8% e 42,2% de feedbacks negativos; reclamações via Telefone e WhatsApp são os dois únicos grupos críticos (score 0,74 e 0,73), e a ausência de dado de produto é a maior lacuna da base.",
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
      { label: "Dashboard" },
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
      "Reclamações via Telefone e WhatsApp são os dois únicos grupos de prioridade Crítica (score 0,742 e 0,733), com recorrência de 2 a 3 meses, e concentram 6 dos 19 casos de Reclamação e Problema Técnico",
      "Agosto/2026 foi o pior mês da série (nota 1,5 e 100% de feedbacks negativos), mas com apenas 4 registros: tratado como alerta, não como tendência",
      "O campo de produto está vazio nas 45 linhas, o que impede saber se Pix, cartão ou app geram mais atrito; um tópico derivado do texto serve só como hipótese",
      "Não há concentração 80/20: os 3 canais mais afetados somam 63,3% dos feedbacks negativos, então uma correção em um único canal não resolveria a maior parte do problema",
    ],
    resultsDetail: [
      "KPIs: CSAT 37,8% (nota maior ou igual a 4), nota média 3,0/5, 42,2% de feedbacks negativos e taxa de reclamação de 26,7%; NPS não calculável (escala de 1 a 5)",
      "Auditoria de dados documentada: 0% de nulos, 0 duplicidades e categorias padronizadas",
      "Score de priorização por tipo e canal (volume 30%, impacto 30%, urgência 25%, recorrência 15%) com classes Crítico, Alto, Médio e Baixo",
      "Dashboard interativo de 4 páginas (Visão Executiva, Customer Experience, Análise de Problemas e Recomendações), publicado no GitHub Pages",
      "Relatório final com recomendações por área responsável e script de análise reproduzível",
    ],
    limitations: [
      "Dados 100% fictícios, gerados por IA: o resultado serve para estudo e demonstração, não para decisões reais",
      "Amostra pequena (45 registros): os percentuais por grupo são indicativos, não conclusivos",
      "Sem campos de produto, tempo de resolução, região ou perfil do cliente",
    ],
    images: [
      { src: "/projects/feedbacks-bancarios/dashboard-pagina-1.png", alt: "Dashboard, página Visão Executiva", width: 1440, height: 1864, caption: "Visão Executiva: KPIs, evolução da satisfação e ranking de prioridade" },
      { src: "/projects/feedbacks-bancarios/dashboard-pagina-2.png", alt: "Dashboard, página Customer Experience", width: 1440, height: 1582, caption: "Customer Experience: satisfação por categoria, distribuição de notas e comparação por canal" },
      { src: "/projects/feedbacks-bancarios/dashboard-pagina-3.png", alt: "Dashboard, página Análise de Problemas", width: 1440, height: 1788, caption: "Análise de Problemas: ranking tipo × canal, matriz impacto × urgência e Pareto" },
      { src: "/projects/feedbacks-bancarios/dashboard-pagina-4.png", alt: "Dashboard, página Recomendações", width: 1440, height: 2500, caption: "Recomendações: insights executivos e ações por área responsável" },
    ],
  },
  {
    slug: "telecom-churn-ltv",
    title: "Telco Churn & Pricing: previsão de cancelamento com Machine Learning",
    description:
      "Dois problemas de negócio em uma operadora de telecom (7.043 clientes): prever o churn com XGBoost e validar a consistência da precificação com Regressão Linear, gerando insights de retenção.",
    category: ["Machine Learning", "Data Analytics", "Python"],
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "Regressão Linear",
      "pytest",
      "GitHub Actions",
      "Ruff",
    ],
    featured: false,
    github: "https://github.com/gustavfreitas/telecom-churn-ltv",
    problem:
      "A operadora perde clientes sem saber onde atuar primeiro, e não há como confirmar se a cobrança mensal segue a tabela de preços dos serviços contratados.",
    solution:
      "Pipelines do scikit-learn com XGBoost (churn, desbalanceamento tratado com scale_pos_weight) e Regressão Linear (MonthlyCharges), com análise exploratória e interpretabilidade para transformar o modelo em ações de negócio.",
    result:
      "XGBoost com AUC-ROC de 0,845 no teste e recall de 0,79 para churn; regressão com R² de 0,999, que redescobre a tabela de preços e permite auditar cobranças atípicas pelos resíduos.",
    context:
      "Dataset público Telco Customer Churn (IBM Sample Data Sets), com 7.043 clientes, 21 colunas e 26,5% de cancelamentos. O objetivo vai além de rodar algoritmos: extrair insights acionáveis para reduzir a perda de clientes e identificar inconsistências de faturamento.",
    objective:
      "Resolver dois problemas com algoritmos diferentes: classificação (churn) para retenção e regressão (MonthlyCharges) para consistência de precificação.",
    architecture:
      "Código modular em src/ (dados, features, regressão, classificação, interpretabilidade e avaliação), scripts de treino, notebook de EDA, testes automatizados e integração contínua no GitHub Actions.",
    pipeline: [
      { label: "Dados brutos (CSV)" },
      { label: "Limpeza e EDA" },
      { label: "Pré-processamento (One-Hot, escala)" },
      { label: "Regressão Linear / XGBoost" },
      { label: "Validação cruzada 5-fold" },
      { label: "Interpretabilidade e lista de risco" },
    ],
    process: [
      "Análise exploratória do churn por contrato, tempo de casa, internet e pagamento",
      "Pré-processamento dentro de Pipeline do scikit-learn, sem vazamento entre treino e teste",
      "Baseline com Regressão Logística para comparar com o XGBoost",
      "Importâncias por gain e por permutation, lado a lado",
      "18 testes automatizados e lint com Ruff rodando em CI (Python 3.10 e 3.12)",
    ],
    insights: [
      "O tipo de contrato é a principal alavanca de retenção: churn de 42,7% no plano mensal, 11,3% no anual e 2,8% no bienal",
      "O risco se concentra no primeiro ano: 47,4% de churn entre 0 e 12 meses de casa contra 9,5% após 49 meses",
      "Fibra ótica (41,9%) e cheque eletrônico (45,3%) merecem investigação de qualidade, suporte e atrito de pagamento",
      "Combinar probabilidade de churn com a mensalidade ordena a fila de retenção por receita em risco",
    ],
    resultsDetail: [
      "Classificação: XGBoost com AUC-ROC de 0,845 no teste (0,846 ± 0,011 em CV), precision de 0,52, recall de 0,79 e F1 de 0,63",
      "Leitura honesta: o XGBoost empata com a Regressão Logística (0,842), pois o sinal está em poucas variáveis quase lineares",
      "Regressão: MAE de 0,79 e R² de 0,999 contra baseline da média com R² de 0,000",
    ],
    limitations: [
      "Associação não é causalidade: confirmar o efeito de um desconto em contrato exigiria teste A/B",
      "O R² próximo de 1 reflete a precificação aditiva do dataset, não um problema difícil resolvido por ML",
      "Sem dados comportamentais, o teto de AUC do dataset fica perto de 0,85, e o limiar de decisão fixo em 0,5 não foi otimizado por custo",
    ],
    images: [
      {
        src: "/projects/telecom-churn-ltv/classificacao_confusao_roc.png",
        alt: "Matriz de confusão e curva ROC do modelo de churn",
        width: 1529,
        height: 659,
        caption: "Matriz de confusão e curva ROC (conjunto de teste)",
      },
      {
        src: "/projects/telecom-churn-ltv/eda_churn_segmentos.png",
        alt: "Taxa de churn por contrato, serviço de internet e forma de pagamento",
        width: 2376,
        height: 646,
        caption: "Taxa de churn por segmento",
      },
      {
        src: "/projects/telecom-churn-ltv/importancia_variaveis.png",
        alt: "Importância das variáveis do modelo XGBoost",
        width: 2231,
        height: 1034,
        caption: "Importância das variáveis",
      },
    ],
  },
  {
    slug: "data-vigil",
    title: "Data-Vigil: detecção de anomalias em transações de cartão",
    description:
      "Pipeline reprodutível de ciência de dados para sinalizar transações potencialmente fraudulentas em uma base com apenas 0,17% de fraudes, da exploração dos dados até a explicabilidade do modelo.",
    category: ["Machine Learning", "Python", "Data Analytics"],
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "Jupyter",
    ],
    featured: false,
    github: "https://github.com/gustavfreitas/data-vigil",
    problem:
      "Como identificar transações que fogem do comportamento esperado, minimizando tanto fraudes não detectadas quanto bloqueios indevidos de clientes legítimos, quando a fraude representa uma fração minúscula dos dados.",
    solution:
      "Pipeline em quatro notebooks (EDA, pré-processamento, modelagem e avaliação) que compara Regressão Logística, Random Forest e XGBoost, ajusta o threshold de decisão e gera faixas de risco com explicabilidade via SHAP.",
    result:
      "XGBoost ajustado selecionado por PR-AUC de 0,814; com threshold otimizado para F1, atinge 97,2% de precisão e 73,9% de recall na detecção de fraude no conjunto de teste.",
    context:
      "Base pública Credit Card Fraud Detection (ULB/Kaggle): 284.807 transações de portadores europeus, com variáveis V1–V28 anonimizadas via PCA e apenas 492 fraudes (0,173%). Projeto com finalidade educacional.",
    objective:
      "Construir o ciclo completo de ciência de dados sobre uma classe extremamente rara, tratando anomalias como sinais potenciais, e não como veredito automático de fraude.",
    architecture:
      "O modelo gera um score de anomalia e o converte em faixa de risco (LOW, MEDIUM, HIGH, CRITICAL), tratada como recomendação de ação. Modelo, threshold e lista de features são serializados juntos.",
    pipeline: [
      { label: "EDA e validação" },
      { label: "Pré-processamento sem vazamento" },
      { label: "Modelagem (LR, RF, XGBoost)" },
      { label: "Tuning com GridSearchCV" },
      { label: "Avaliação por PR-AUC" },
      { label: "Threshold e faixas de risco" },
      { label: "Explicabilidade (SHAP)" },
    ],
    process: [
      "Remoção de duplicatas e engenharia de atributos, com scaler ajustado apenas no treino",
      "Comparação por PR-AUC em vez de acurácia: prever sempre 'normal' acertaria cerca de 99,8% e seria inútil",
      "Ajuste do threshold de decisão para maximizar o F1 (score ≥ 0,96)",
      "Matriz de confusão, faixas de risco e importância das variáveis com SHAP",
    ],
    insights: [
      "Acurácia engana em classes raras: a métrica certa aqui é PR-AUC",
      "A Regressão Logística tem recall alto (0,887), mas precision de 0,051, o que geraria alarmes demais",
      "Anomalia não é fraude: a confirmação exige contexto adicional e investigação humana",
    ],
    resultsDetail: [
      "XGBoost ajustado: precision 0,872, recall 0,768, F1 0,816, ROC-AUC 0,966 e PR-AUC 0,814",
      "Conjunto de teste com 85.443 transações, das quais 142 fraudes após remoção de duplicatas",
    ],
    limitations: [
      "Concept drift: o padrão de fraude muda e o modelo reflete o período do dataset (2013)",
      "Um agente com conhecimento do modelo poderia desenhar transações abaixo do threshold",
      "Dataset público e anonimizado, usado estritamente para fins educacionais",
    ],
    images: [
      {
        src: "/projects/data-vigil/04_pr_curves.png",
        alt: "Curvas Precision-Recall comparando os modelos",
        width: 770,
        height: 550,
        caption: "Curvas Precision-Recall dos modelos",
      },
      {
        src: "/projects/data-vigil/05_confusion_matrix.png",
        alt: "Matriz de confusão do modelo final",
        width: 550,
        height: 550,
        caption: "Matriz de confusão do modelo final",
      },
      {
        src: "/projects/data-vigil/06_shap_importance.png",
        alt: "Importância das variáveis com SHAP",
        width: 880,
        height: 1045,
        caption: "Importância das variáveis (SHAP)",
      },
    ],
  },
  {
    slug: "persona-vibe-engine",
    title: "Persona Vibe Engine: recomendação musical por mood",
    description:
      "Motor de recomendação que agrupa faixas do Spotify Tracks Dataset com K-Means a partir de características acústicas e recomenda músicas do mesmo cluster em uma aplicação Streamlit.",
    category: ["Machine Learning", "Python", "Data Analytics"],
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "K-Means",
      "Streamlit",
      "pytest",
    ],
    featured: false,
    github: "https://github.com/gustavfreitas/persona-vibe-engine",
    demo: "https://persona-vibe-engine-wrs26wkrbfjbtzbqzr48s8.streamlit.app",
    problem:
      "Recomendar músicas pelo clima (mood) sem depender de histórico de usuários, apenas das características acústicas das faixas.",
    solution:
      "Limpeza e normalização de sete features acústicas, clustering com K-Means (k=5, reprodutível), nomes automáticos para cada cluster e ranking por distância euclidiana dentro do cluster.",
    result:
      "Aplicação online funcional; as recomendações acertam o mesmo gênero da faixa de partida em cerca de 9% dos casos, contra 1,6% no cluster e 0,8% no dataset ao acaso.",
    context:
      "Projeto 100% offline sobre o Spotify Tracks Dataset (Kaggle). A aplicação publicada usa uma amostra de 30.000 faixas; as métricas foram calculadas sobre o dataset completo.",
    objective:
      "Explorar clustering não supervisionado como base de um recomendador simples, documentando as escolhas de k e de transformação das features.",
    pipeline: [
      { label: "Limpeza e deduplicação" },
      { label: "StandardScaler (7 features)" },
      { label: "K-Means (k=5)" },
      { label: "Nomes automáticos dos clusters" },
      { label: "Ranking por distância" },
      { label: "App Streamlit" },
    ],
    process: [
      "Escolha de k por silhouette (k=5 com 0,218, melhor valor a partir de k=3)",
      "Comparação com GaussianMixture, que teve silhouette de 0,042 contra 0,222 do K-Means em k=5",
      "Teste de binarização e Yeo-Johnson nas features, mantendo o StandardScaler pela simplicidade",
      "Avaliação em 200 faixas de partida e 22 testes automatizados com pytest",
    ],
    insights: [
      "Silhouette próximo de 0,2 indica clusters sobrepostos, esperado em audio features que formam um contínuo",
      "A opção de preferir populares quase dobrou a popularidade média das sugestões (de 33 para 61)",
    ],
    limitations: [
      "O clustering usa só features acústicas e não captura idioma, época nem estilo",
      "Um dos clusters concentra cerca de um terço das faixas",
      "O gênero é um proxy ruidoso (114 gêneros), por isso os valores absolutos de avaliação são baixos",
    ],
  },
  {
    slug: "axel",
    title: "A.X.E.L: assistente técnico com IA generativa local",
    description:
      "Assistente de linha de comando para debug e otimização de Python e SQL, com IA generativa local (Ollama) e arquitetura de Engenharia de Prompt em camadas.",
    category: ["IA Generativa", "Python", "SQL"],
    technologies: [
      "Python",
      "Ollama",
      "Prompt Engineering",
      "LLM",
      "pytest",
      "SQLite",
    ],
    featured: false,
    github: "https://github.com/gustavfreitas/A.X.E.L",
    problem:
      "Transformar descrições informais de bugs, lentidão ou erros em diagnósticos objetivos e acionáveis, sem exigir que a pessoa formule a pergunta de forma técnica.",
    solution:
      "Pipeline desacoplado: classificação de intenção, montagem de prompt em camadas, chamada ao LLM (Ollama por padrão, agnóstico de provider) e resposta estruturada que não inventa causas quando falta contexto.",
    result:
      "CLI funcional com memória opcional em SQLite e dataset de casos de teste que mede a classificação de intenção, pedidos ambíguos e tentativas de prompt injection.",
    context:
      "Nasceu como desafio do bootcamp DIO (Dados, IA Generativa e Cibersegurança) e evoluiu para uma implementação autoral, com foco em Engenharia de Prompt e arquitetura desacoplada.",
    objective:
      "Construir um assistente que roda localmente, com prompts organizados por responsabilidade e avaliação reprodutível a cada iteração.",
    pipeline: [
      { label: "Entrada em linguagem natural" },
      { label: "Classificação de intenção" },
      { label: "Prompt em camadas" },
      { label: "LLM local (Ollama)" },
      { label: "Resposta estruturada" },
    ],
    process: [
      "Prompts separados por responsabilidade: identidade, segurança, intenção e formato de resposta",
      "Regra de segurança que protege o system prompt mesmo sob tentativa de prompt injection",
      "Sem execução de código arbitrário fornecido pelo usuário",
      "Avaliação com pytest e relatório de accuracy gerado por script a cada mudança de prompt",
    ],
    insights: [
      "Versionar e medir prompts permite saber se uma mudança melhorou ou piorou o resultado",
      "Persistir histórico é opt-in de propósito, pois significa guardar trechos de código em texto puro em disco",
    ],
    limitations: [
      "Versão atual restrita a Python e SQL, com Ollama rodando localmente como pré-requisito",
      "Roadmap: v2 com análise de dados como segundo domínio e v3 com API REST",
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
    confidential: true,
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
    confidential: true,
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
  {
    slug: "simulacoes-fisicas-python",
    title: "Simulações Físicas Interativas em Python",
    description:
      "Projeto acadêmico em grupo que traduz conceitos de Física (lançamento de projéteis e Leis de Newton) em simulações interativas com sliders e botões.",
    category: ["Python"],
    technologies: ["Python", "NumPy", "Matplotlib", "Tkinter", "Jupyter"],
    featured: false,
    github: "https://github.com/gustavfreitas/pi_fisica_extensiva",
    problem:
      "Conceitos de cinemática e dinâmica ficam abstratos quando só existem como equações; falta uma forma de variar parâmetros e ver o efeito imediato.",
    solution:
      "Modelagem de sistemas físicos a partir de fórmulas fechadas, avaliadas com vetores de tempo em NumPy, e interfaces com Matplotlib.widgets e Tkinter para alterar parâmetros em tempo real.",
    result:
      "Duas atividades entregues: lançamento de projéteis sem resistência do ar e simulação de Plano Inclinado, Força Centrípeta e Força de Arrasto, ambas com gráficos que se atualizam ao mudar os parâmetros.",
    context:
      "Desenvolvido na disciplina de Física Práticas Extensivas, em grupo de estudantes de Ciência da Computação.",
    objective:
      "Aplicar modelagem matemática e engenharia de software para visualizar sistemas físicos em tempo real.",
    process: [
      "ADO 01: trajetória parabólica com velocidade inicial, ângulo e gravidade ajustáveis, calculando alcance, altura máxima e tempo de voo",
      "ADO 02: Segunda Lei de Newton aplicada a plano inclinado, força centrípeta e força de arrasto",
      "Cálculo vetorizado com NumPy, sem laços de integração numérica passo a passo",
    ],
  },
  {
    slug: "computacao-cientifica",
    title: "Computação Científica: Série de Taylor e Simulação de Eventos Discretos",
    description:
      "Dois exercícios-programa em grupo: aproximação numérica de sin(x²) por Série de Taylor em tempo linear e simulação estocástica de um sistema de bicicletas compartilhadas com SimPy.",
    category: ["Python"],
    technologies: ["Python", "SimPy", "Simulação Estocástica", "Métodos Numéricos"],
    featured: false,
    github: "https://github.com/gustavfreitas/pi_comp_cientifica",
    problem:
      "Calcular funções por aproximação polinomial de forma eficiente e analisar fluxos e gargalos em um sistema com comportamento aleatório.",
    solution:
      "EP1 com algoritmo numérico linear O(N) para aproximar y = sin(x²) por Série de Taylor; EP2 com modelagem estocástica de eventos discretos em SimPy para um sistema de bicicletas compartilhadas.",
    result:
      "Dois exercícios-programa implementados em Python e versionados no repositório do projeto integrador.",
    context:
      "Projeto Integrador da disciplina de Computação Científica, desenvolvido em grupo.",
    objective:
      "Aplicar métodos numéricos e simulação de eventos discretos a problemas concretos.",
    process: [
      "EP1: aproximação polinomial da função y = sin(x²) com custo linear",
      "EP2: modelagem do sistema de bicicletas compartilhadas como processo estocástico no SimPy",
      "Análise de fluxos e gargalos a partir da simulação",
    ],
  },
  {
    slug: "estudo-notebooklm-web",
    title: "Estudo de caso com NotebookLM: Tim Berners-Lee e a Web",
    description:
      "Caderno temático sobre a origem e a evolução da World Wide Web, usado para documentar de forma reprodutível a curadoria de fontes e a engenharia de prompts no NotebookLM.",
    category: ["IA Generativa"],
    technologies: ["NotebookLM", "RAG", "Prompt Engineering", "Markdown"],
    featured: false,
    github: "https://github.com/gustavfreitas/miniguia-estudos-notebooklm",
    problem:
      "Estudar um tema complexo com apoio de IA sem cair em alucinações nem perder a rastreabilidade das fontes.",
    solution:
      "Curadoria de fontes abertas carregadas no NotebookLM (respostas restritas a elas, no formato RAG), registro dos prompts testados, dificuldades e ajustes, e revisão humana de todo o conteúdo gerado.",
    result:
      "Miniguia de estudo com resumos estruturados, glossário, prompts reutilizáveis para revisão e o registro do processo de troubleshooting.",
    context:
      "O tema liga a história da Ciência da Computação à engenharia de sistemas distribuídos abertos, servindo também como estudo prático do NotebookLM como ferramenta de Engenharia de IA.",
    objective:
      "Documentar um fluxo de curadoria de conhecimento assistida por IA, da fonte bruta à documentação final.",
    process: [
      "Seleção de fontes confiáveis e ingestão no NotebookLM",
      "Prompts testados com registro de dificuldade encontrada e ajuste aplicado",
      "Lições de troubleshooting: investigar a causa estrutural antes de corrigir sintomas",
      "Curadoria humana e validação factual antes de compor o material final",
    ],
    insights: [
      "Restringir as respostas às fontes carregadas reduz alucinações",
      "Pedir ao modelo um papel e um critério de evidência melhora análises equilibradas",
    ],
  },
];

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 2): Project[] {
  return projects
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({
      p,
      score: p.category.filter((c) => project.category.includes(c)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => p);
}

export const projectCategories: ProjectCategory[] = [
  "Data Analytics",
  "Machine Learning",
  "IA Generativa",
  "BI",
  "ETL",
  "Python",
  "SQL",
];
