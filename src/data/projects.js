const BROWSEME_DOCS = "https://github.com/raulramalf/BrowseMe/blob/main/docs";

export const projects = [
  {
    name: "BrowseMe",
    tag: "Proyecto personal · Open source",
    featured: true,
    description:
      "Analiza la URL pública de un negocio, ejecuta comprobaciones SEO deterministas y usa IA local (Ollama) solo para explicar y priorizar lo detectado. Nota de 0 a 10 con fórmula pública.",
    stack: ["Java 25", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Ollama"],
    href: "https://browse-me.vercel.app",
    hrefLabel: "Ver la web",
    github: "https://github.com/raulramalf/BrowseMe",
    file: "domain/score/ScoreCalculator.java",
    lang: "java",
    code: `public static ScoreCard calculate(
        List<SeoIssue> issues, VisualStatus visual) {
    Map<RuleArea, Integer> penalties = new EnumMap<>(RuleArea.class);
    for (SeoIssue issue : issues) {
        penalties.merge(issue.area(),
            PENALTY_TENTHS.get(issue.severity()), Integer::sum);
    }
    int weighted = 0;
    for (RuleArea area : RuleArea.values()) {
        int tenths = Math.max(0, MAX_TENTHS
            - penalties.getOrDefault(area, 0));
        weighted += tenths * WEIGHT_PERCENT.get(area);
    }
    return new ScoreCard((weighted + 50) / 100, areas);
}`,
  },
];

export const posts = [
  {
    title: "Arquitectura hexagonal en BrowseMe: el dominio no conoce a nadie",
    summary: "Cómo se separan dominio, aplicación e infraestructura y cómo ArchUnit lo hace cumplir.",
    tags: ["java", "arquitectura"],
    href: `${BROWSEME_DOCS}/architecture.md`,
  },
  {
    title: "Seguridad anti-SSRF al descargar URLs de terceros",
    summary: "Medidas, tests y riesgos que siguen abiertos al analizar páginas que escribe cualquiera.",
    tags: ["seguridad", "backend"],
    href: `${BROWSEME_DOCS}/seguridad.md`,
  },
  {
    title: "Decisiones técnicas confirmadas de BrowseMe",
    summary: "OkHttp + Jsoup, PostgreSQL con Flyway, Ollama local y por qué se eligió cada pieza.",
    tags: ["decisiones", "ia-local"],
    href: `${BROWSEME_DOCS}/decisiones.md`,
  },
];
