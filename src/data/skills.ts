export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Data Analytics",
    description: "Exploração, tratamento e análise de dados",
    items: [
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
      "Excel",
      "Power Query",
    ],
  },
  {
    category: "Business Intelligence",
    description: "Modelagem e visualização orientada a decisão",
    items: ["Power BI", "DAX", "Power BI Service"],
  },
  {
    category: "Data Engineering",
    description: "Pipelines, modelagem e armazenamento de dados",
    items: [
      "ETL",
      "PostgreSQL",
      "SQLAlchemy",
      "APIs",
      "Data Warehouse",
      "Star Schema",
    ],
  },
  {
    category: "Machine Learning & IA",
    description: "Modelos preditivos, clustering e IA generativa aplicada",
    items: [
      "scikit-learn",
      "XGBoost",
      "K-Means",
      "SHAP",
      "Streamlit",
      "Ollama",
      "Prompt Engineering",
    ],
  },
  {
    category: "Qualidade de código",
    description: "Testes, automação e reprodutibilidade",
    items: ["pytest", "Ruff", "GitHub Actions", "Git", "GitHub"],
  },
  {
    category: "Development",
    description: "Fundamentos de engenharia de software",
    items: ["C", "C++", "C#", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
];
