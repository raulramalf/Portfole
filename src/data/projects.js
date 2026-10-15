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
    media: [
      { src: "/projects/browseme/01-inicio.webp", alt: "Página de inicio de BrowseMe con un ejemplo de informe" },
      { src: "/projects/browseme/02-analizar.webp", alt: "Formulario para analizar la dirección de una web" },
      { src: "/projects/browseme/03-informe-nota.webp", alt: "Informe con la nota de 0 a 10 y el desglose por áreas" },
      { src: "/projects/browseme/04-plan-captacion.webp", alt: "Plan para conseguir más clientes ordenado por impacto en la nota" },
    ],
  },
  {
    name: "Selecto Asesores",
    tag: "Proyecto profesional · En desarrollo",
    private: true,
    description:
      "Plataforma web para una asesoría fiscal, contable y laboral: web pública con servicios y reserva de citas, área privada para clientes y panel de gestión para asesores. En desarrollo: calculadoras para clientes y automatización de contenidos con n8n.",
    stack: ["Laravel 12", "Vue 3", "Inertia", "Tailwind CSS", "PostgreSQL", "Redis", "Docker", "n8n"],
    href: "https://selectoasesores.es",
    hrefLabel: "Ver la web",
    media: [
      { src: "/projects/selecto/01-inicio.webp", alt: "Página de inicio de Selecto Asesores" },
      { src: "/projects/selecto/02-servicios.webp", alt: "Catálogo de servicios y tarifas" },
      { src: "/projects/selecto/03-reserva-cita.webp", alt: "Formulario público de reserva de cita" },
      { src: "/projects/selecto/04-area-cliente.webp", alt: "Área privada del cliente con citas y documentos" },
      { src: "/projects/selecto/05-panel-asesor.webp", alt: "Panel del asesor con clientes, citas y documentos" },
      { src: "/projects/selecto/06-analisis.webp", alt: "Panel de análisis con gráficas y KPIs" },
      { src: "/projects/selecto/07-noticias-n8n.webp", alt: "Cola de noticias fiscales recibidas desde n8n pendientes de aprobar" },
    ],
    notes: "Las capturas usan datos de demostración, no datos reales de clientes.",
    details: [
      { title: "Arquitectura", text: "Monolito Laravel 12 con Inertia y Vue 3: los controladores devuelven páginas Vue sin una API REST intermedia." },
      { title: "Tres áreas con permisos", text: "Web pública, área del cliente y panel del asesor, separadas por middleware de rol." },
      { title: "Acceso seguro", text: "Autenticación con verificación en dos pasos (TOTP con código QR) y recuperación de contraseña." },
      { title: "Datos", text: "PostgreSQL con migraciones versionadas: usuarios, empresas, citas, documentos, noticias, notificaciones e informes." },
      { title: "Panel de análisis", text: "KPIs y gráficas con Chart.js: clientes nuevos por mes, citas completadas frente a canceladas, servicios más demandados y retención." },
      { title: "Automatización con n8n", text: "Un flujo envía noticias fiscales por webhook a una cola; el asesor las aprueba antes de que se publiquen." },
      { title: "Entorno", text: "Docker Compose con Nginx, PHP, PostgreSQL, Redis y Node; pruebas de autenticación con Pest." },
    ],
  },
];
