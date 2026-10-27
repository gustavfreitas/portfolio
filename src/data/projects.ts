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
    title: "Telco Churn & Pricing: quem vale a pena contatar para reter",
    description:
      "Previsão de cancelamento em uma operadora (7.043 clientes) transformada em decisão: probabilidades calibradas, regra de ganho esperado para escolher quem contatar e fila de retenção com os motivos de cada cliente.",
    category: ["Machine Learning", "Data Analytics", "Python"],
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "Regressão Linear",
      "SHAP",
      "pytest",
      "GitHub Actions",
      "Ruff",
    ],
    featured: false,
    github: "https://github.com/gustavfreitas/telecom-churn-ltv",
    problem:
      "Saber a probabilidade de churn não diz quem vale a pena contatar: cada ação de retenção custa dinheiro, e o XGBoost com scale_pos_weight superestima as probabilidades, o que distorce qualquer conta de retorno.",
    solution:
      "Pipelines do scikit-learn com XGBoost e baseline logístico, calibração das probabilidades (Platt) ajustada só com o treino e uma regra de ganho esperado (probabilidade × taxa de sucesso × receita de 12 meses − custo da ação). O resultado é uma fila de retenção em CSV com os 3 principais motivos de cada cliente (SHAP) e uma análise de sensibilidade às premissas. Uma Regressão Linear de MonthlyCharges complementa com uma lista de cobranças atípicas.",
    result:
      "Com premissas ilustrativas, a decisão por ganho esperado rende cerca de 15% a mais que o corte de 0,5 e cerca de 10% a mais que contatar todos os clientes (US$ 54,7 mil contra 47,7 mil e 49,5 mil por 1.000 clientes). A calibração leva a probabilidade média de 40,1% para 26,7%, perto do churn real de 26,5%.",
    context:
      "Dataset público Telco Customer Churn (IBM Sample Data Sets), com 7.043 clientes, 21 colunas e 26,5% de cancelamentos. As premissas de custo e de sucesso da ação são ilustrativas, não vêm de uma operação real.",
    objective:
      "Ir além da métrica do modelo: definir quem receber a ação de retenção pelo retorno esperado e mostrar o quanto essa conclusão depende das premissas.",
    architecture:
      "Código modular em src/ (dados, features, regressão, classificação, interpretabilidade, avaliação e negócio), scripts de treino, notebook de EDA, testes automatizados e integração contínua no GitHub Actions. O calibrador é ajustado em previsões out-of-fold do treino e o teste é usado uma única vez, para medir.",
    pipeline: [
      { label: "Dados brutos (CSV)" },
      { label: "Limpeza e EDA" },
      { label: "Pré-processamento (One-Hot, escala)" },
      { label: "XGBoost + baseline logístico" },
      { label: "Calibração (out-of-fold)" },
      { label: "Ganho esperado e fila de retenção" },
    ],
    process: [
      "Análise exploratória do churn por contrato, tempo de casa, internet e pagamento",
      "Pré-processamento dentro de Pipeline do scikit-learn, sem vazamento entre treino e teste",
      "Baseline com Regressão Logística para comparar com o XGBoost",
      "Calibração Platt com previsões out-of-fold do treino e comparação de 6 estratégias de retenção no teste",
      "Análise de sensibilidade ao custo da ação e à taxa de sucesso",
      "29 testes automatizados (incluindo contas de ganho conferidas à mão) e lint com Ruff rodando em CI (Python 3.10 e 3.12)",
    ],
    insights: [
      "O tipo de contrato é a principal alavanca de retenção: churn de 42,7% no plano mensal, 11,3% no anual e 2,8% no bienal",
      "O risco se concentra no primeiro ano: 47,4% de churn entre 0 e 12 meses de casa contra 9,5% após 49 meses",
      "Fibra ótica (41,9%) e cheque eletrônico (45,3%) merecem investigação de qualidade, suporte e atrito de pagamento",
      "A probabilidade bruta do XGBoost é inflada (média de 40,1% contra 26,5% de churn real); sem calibrar, a conta de retorno da campanha fica distorcida",
      "Com ação barata (US$ 5), contatar todos empata com o modelo; quanto mais cara a ação, maior a vantagem de escolher quem contatar",
    ],
    resultsDetail: [
      "Classificação: XGBoost com AUC-ROC de 0,845 no teste (0,846 ± 0,011 em CV), recall de 0,79 e precision de 0,52 no corte de 0,5",
      "Benefício por 1.000 clientes: US$ 54,7 mil (XGBoost calibrado), 47,7 mil (corte de 0,5), 49,5 mil (contatar todos) e 64,2 mil no limite teórico",
      "Com ação de US$ 200, a regra antiga dá prejuízo (−US$ 25,5 mil) e o modelo calibrado ainda fica positivo (US$ 2,6 mil)",
      "Leitura honesta: a Regressão Logística calibrada rende praticamente o mesmo (US$ 54,6 mil); o XGBoost empata com ela neste dataset",
      "Regressão de MonthlyCharges com R² de 0,999 redescobre a tabela de preços; o maior desvio é de US$ 4,84, então a lista de auditoria é fraca como detector de erro",
    ],
    limitations: [
      "Associação não é causalidade: confirmar o efeito de um desconto em contrato exigiria teste A/B",
      "O R² próximo de 1 reflete a precificação aditiva do dataset, não um problema difícil resolvido por ML",
      "Sem dados comportamentais, o teto de AUC do dataset fica perto de 0,85",
      "Custo da ação, taxa de sucesso (30%) e horizonte (12 meses) são premissas ilustrativas, e a receita em risco ignora margem e desconto",
    ],
    images: [
      {
        src: "/projects/telecom-churn-ltv/sensibilidade_retencao.png",
        alt: "Benefício da campanha de retenção variando custo da ação e taxa de sucesso",
        width: 1784,
        height: 665,
        caption: "Sensibilidade do benefício às premissas de negócio",
      },
      {
        src: "/projects/telecom-churn-ltv/calibracao.png",
        alt: "Curva de calibração das probabilidades do XGBoost antes e depois da calibração",
        width: 809,
        height: 731,
        caption: "Calibração das probabilidades",
      },
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
      "Pipeline reprodutível para sinalizar transações potencialmente fraudulentas em uma base com apenas 0,17% de fraudes: avaliação sem vazamento, custo de negócio e explicabilidade do modelo.",
    category: ["Machine Learning", "Python", "Data Analytics"],
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "pytest",
      "GitHub Actions",
    ],
    featured: false,
    github: "https://github.com/gustavfreitas/data-vigil",
    problem:
      "Como identificar transações que fogem do comportamento esperado, minimizando tanto fraudes não detectadas quanto bloqueios indevidos de clientes legítimos, quando a fraude representa uma fração minúscula dos dados.",
    solution:
      "Código modular com testes e CI que compara Regressão Logística, Random Forest e XGBoost por PR-AUC em validação cruzada, escolhe modelo e thresholds só com o treino e mede o teste uma única vez, incluindo custo de negócio, faixas de risco e SHAP.",
    result:
      "Sem vazamento de dados, o XGBoost detecta 108 das 142 fraudes do teste (recall de 76,1%, IC 95% de 68,6% a 82,5%) com 90,0% de precisão e reduz o custo total em cerca de 77% frente a não sinalizar nada.",
    context:
      "Base pública Credit Card Fraud Detection (ULB/Kaggle): 284.807 transações de portadores europeus, com variáveis V1–V28 anonimizadas via PCA e apenas 492 fraudes (0,173%). Projeto com finalidade educacional.",
    objective:
      "Construir o ciclo completo de ciência de dados sobre uma classe extremamente rara, tratando anomalias como sinais potenciais, e não como veredito automático de fraude.",
    architecture:
      "O modelo gera um score de anomalia e o converte em faixa de risco (LOW, MEDIUM, HIGH, CRITICAL), tratada como recomendação de ação. O pipeline tem duas fases: a primeira usa só o treino para escolher modelo e thresholds; a segunda mede no teste, uma única vez. Modelo, thresholds e lista de features são serializados juntos.",
    pipeline: [
      { label: "Limpeza e atributos" },
      { label: "Split treino/teste" },
      { label: "Modelos (LR, RF, XGBoost)" },
      { label: "Validação cruzada no treino" },
      { label: "Thresholds (F1 e custo) só no treino" },
      { label: "Medição única no teste" },
      { label: "Sensibilidade ao custo e SHAP" },
    ],
    process: [
      "Split treino/teste antes de qualquer decisão; modelo e thresholds escolhidos só com probabilidades out-of-fold do treino",
      "Comparação por PR-AUC em vez de acurácia: prever sempre 'normal' acertaria cerca de 99,8% e seria inútil",
      "Threshold por F1 e por custo de negócio: fraude perdida custa o valor da transação e revisar um alerta custa 5",
      "Intervalos de confiança por bootstrap, porque o teste tem só 142 fraudes",
      "Análise de sensibilidade ao custo de revisão (1, 5, 25, 100 e 500)",
      "Testes automatizados e integração contínua com GitHub Actions",
    ],
    insights: [
      "Acurácia engana em classes raras: a métrica certa aqui é PR-AUC",
      "Corrigir o vazamento da primeira versão reduziu a precisão de 97,2% para 90,0% no mesmo teste: o threshold tinha sido escolhido olhando o próprio teste",
      "O ajuste de hiperparâmetros não trouxe ganho: o XGBoost com parâmetros padrão empata com o ajustado (PR-AUC de 0,852 contra 0,850 na validação cruzada)",
      "O ganho depende do custo de revisão: economiza de 66% a 79% com revisão de 1 a 25, encolhe perto do valor médio de uma fraude (cerca de 140) e some com revisão a 500",
      "Anomalia não é fraude: a confirmação exige contexto adicional e investigação humana",
    ],
    resultsDetail: [
      "XGBoost com threshold de máx. F1 escolhido no treino: precision de 90,0%, recall de 76,1% e F1 de 0,824; PR-AUC de 0,810 (IC 95%: 0,748 a 0,870) e ROC-AUC de 0,976",
      "Teste com 85.118 transações e 142 fraudes: 120 alertas, dos quais 108 eram fraudes",
      "Custo total de 4.537 contra 19.878 se nada fosse sinalizado, uma redução de cerca de 77% com revisão a 5 por alerta",
      "Seleção na validação cruzada (PR-AUC): XGBoost 0,852, Random Forest 0,827 e Regressão Logística 0,736",
    ],
    limitations: [
      "Poucas fraudes no teste (142): os intervalos de confiança são largos, e diferenças pequenas entre modelos ou thresholds não são conclusivas",
      "O custo de revisão é uma premissa; escolher o threshold por custo no treino não garantiu custo menor no teste em todos os cenários",
      "Concept drift: o padrão de fraude muda e o modelo reflete o período do dataset (2013); o split aleatório não simula isso",
      "Um agente com conhecimento do modelo poderia desenhar transações abaixo do threshold",
      "Dataset público e anonimizado, usado estritamente para fins educacionais",
    ],
    images: [
      {
        src: "/projects/data-vigil/v2_pr_curves_oof.png",
        alt: "Curvas Precision-Recall comparando os modelos na validação cruzada",
        width: 770,
        height: 550,
        caption: "Curvas Precision-Recall dos modelos (validação cruzada no treino)",
      },
      {
        src: "/projects/data-vigil/v2_cost_curve.png",
        alt: "Custo total no teste em função do threshold de decisão",
        width: 770,
        height: 550,
        caption: "Custo total no teste em função do threshold",
      },
      {
        src: "/projects/data-vigil/v2_sensitivity.png",
        alt: "Threshold ótimo e custo total conforme o custo de revisar um alerta",
        width: 1210,
        height: 495,
        caption: "Sensibilidade ao custo de revisão de um alerta",
      },
      {
        src: "/projects/data-vigil/v2_shap_importance.png",
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
      "GitHub Actions",
      "Ruff",
    ],
    featured: false,
    github: "https://github.com/gustavfreitas/A.X.E.L",
    problem:
      "Transformar descrições informais de bugs, lentidão ou erros em diagnósticos objetivos e acionáveis, sem exigir que a pessoa formule a pergunta de forma técnica.",
    solution:
      "Pipeline desacoplado: classificação de intenção, montagem de prompt em camadas, chamada ao LLM (Ollama por padrão, agnóstico de provider) e resposta estruturada que não inventa causas quando falta contexto.",
    result:
      "O classificador de intenção acerta 14 de 16 pedidos (88%, IC 95% de 64% a 97%) com um modelo de 1,5 bilhão de parâmetros rodando local, e nenhuma das 10 tentativas de extrair o prompt interno vazou. 47 testes rodam em CI sem precisar do Ollama.",
    context:
      "Nasceu como desafio do bootcamp DIO (Dados, IA Generativa e Cibersegurança) e evoluiu para uma implementação autoral, com foco em Engenharia de Prompt e arquitetura desacoplada.",
    objective:
      "Construir um assistente que roda localmente, com prompts organizados por responsabilidade, avaliação reprodutível a cada iteração e uma suíte de testes que roda sem o modelo.",
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
      "Defesa em camadas contra vazamento do prompt: instrução de segurança, classificação de intenção e checagem da resposta no código",
      "47 testes unitários com um LLM simulado (pipeline, parsing, memória, prompts, segurança) rodando em CI nas versões 3.11, 3.12 e 3.13 do Python, mais lint com Ruff",
      "Relatório de accuracy por script, com intervalo de confiança e quebra por intenção, a cada mudança de prompt",
    ],
    insights: [
      "Versionar e medir prompts permite saber se uma mudança melhorou ou piorou o resultado",
      "Persistir histórico é opt-in de propósito, pois significa guardar trechos de código em texto puro em disco",
      "Simular o LLM nos testes permite validar o pipeline inteiro de forma determinística e em milissegundos, deixando a avaliação com o modelo real para um script à parte",
    ],
    resultsDetail: [
      "Classificação de intenção: 88% (14/16) com qwen2.5:1.5b; os dois erros foram pedidos em que o modelo se apoiou na palavra \"erro\" ou em KeyError",
      "Segurança: 10 de 10 tentativas de extração sem vazamento no pipeline completo",
      "Com 16 casos, o intervalo de confiança é largo, então o número serve para acompanhar mudanças de prompt, não como taxa geral de acerto",
    ],
    limitations: [
      "A avaliação mede só a classificação da intenção, não a qualidade do diagnóstico gerado; o dataset é pequeno e escrito pelo próprio autor",
      "A checagem de vazamento compara trechos literais: um vazamento traduzido ou parafraseado não seria detectado",
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
