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
    // Añade aquí tus capturas y vídeos (ver public/projects/README.md).
    // Si hay elementos, la tarjeta los muestra en lugar del fragmento de código.
    media: [],
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
