export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Estagiário de T.I. — Sistemas",
    company: "INBRANDS S/A",
    period: "Período: 06/2025 — 06/2026",
    summary:
      "Atuação em sistemas e processos internos, com envolvimento em dados, fornecedores, documentos e apoio a análises operacionais.",
    highlights: [
      "Apoio a processos de sistemas e integração com ERP",
      "Organização e tratamento de dados e documentos operacionais",
      "Relacionamento com fornecedores em fluxos de sistema",
      "Apoio na construção de relatórios em Power BI",
      "Suporte a análises operacionais do time de T.I.",
    ],
  },
];

export interface CertificationItem {
  name: string;
  institution: string;
  year: string;
  url?: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "Microsoft Power BI: Businesse Intelligence | ",
    institution: "Data Science Academy",
    year: "Ano: 06/2025 - 08/2025",
    url: "https://www.datascienceacademy.com.br/certificate_v2/6462fe1b2bb04988150abc99/user/68498b6b7c3b00c7730b110e",
  },
];
