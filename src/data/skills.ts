export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Data Analytics",
    description: "Exploração, tratamento e análise de dados",
    items: ["SQL", "Python", "Pandas", "Excel", "Power Query"],
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
    category: "Development",
    description: "Fundamentos de engenharia de software",
    items: ["Git", "GitHub", "C", "C++", "C#", "HTML", "CSS", "JavaScript"],
  },
];
