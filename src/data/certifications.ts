// data/certifications.ts
export const certifications = [
  {
    title: "Nome exato da certificação",
    issuer: "Udemy", // ou "Data Science Academy", "SENAI", "Fundação Bradesco"
    year: "2024",
    credentialUrl: "https://www.linkedin.com/in/gs-freitas/details/certifications/", // ou link direto do certificado, se tiver
  },
  // repita para cada certificação
];

<section id="certificacoes">
  <h2>$ SELECT * FROM certificacoes</h2>
  <ul>
    {certifications.map((cert) => (
      <li key={cert.title}>
        <strong>{cert.title}</strong> — {cert.issuer} ({cert.year})
        {cert.credentialUrl && <a href={cert.credentialUrl}>Ver credencial</a>}
      </li>
    ))}
  </ul>
</section>
