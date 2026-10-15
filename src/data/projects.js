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
  {
    name: "AI Support Chatbot",
    tag: "Demo · Chatbots",
    description:
      "Chatbot de soporte al cliente con diseño glassmorphism y lógica de respuestas simuladas en tiempo real.",
    stack: ["React", "Tailwind CSS"],
    href: "/demo/chatbot",
    hrefLabel: "Ver demo",
    file: "apps/SupportChatbotDemo.jsx",
    lang: "jsx",
    code: `const handleSend = (e) => {
  e.preventDefault();
  if (!input.trim()) return;

  const userMessage = { id: Date.now(), text: input, sender: "user" };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setIsTyping(true);
  // ...respuesta simulada con setTimeout
};`,
  },
  {
    name: "E-commerce Storefront",
    tag: "Demo · E-commerce",
    description:
      "Tienda moderna con animaciones fluidas, visor de catálogo interactivo y carrito de compras integrado.",
    stack: ["React", "Framer Motion"],
    href: "/demo/ecommerce",
    hrefLabel: "Ver demo",
    file: "apps/EcommerceDemo.jsx",
    lang: "jsx",
    code: `const [cart, setCart] = useState([]);
const [addedId, setAddedId] = useState(null);

const addToCart = (product) => {
  setCart([...cart, product]);
  setAddedId(product.id);
  setTimeout(() => setAddedId(null), 2000);
};`,
  },
  {
    name: "CRM Dashboard",
    tag: "Demo · Sistemas de gestión",
    description:
      "CRM enfocado en la experiencia de usuario, con embudo de ventas, lista de clientes y métricas de rendimiento.",
    stack: ["React", "Tailwind CSS"],
    href: "/demo/crm",
    hrefLabel: "Ver demo",
    file: "apps/CRMDemo.jsx",
    lang: "jsx",
    code: `export default function CRMDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Sidebar + dashboard + embudo de ventas */}
    </div>
  );
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
