import Section from "./Section";

const experience = [
  {
    role: "Desarrollador Backend",
    company: "Ingetexia Projects",
    period: "Feb. 2026 - Jun. 2026",
    location: "Sevilla · Híbrido",
    description:
      "Desarrollo, personalización y mantenimiento del ERP Odoo, adaptando el software a flujos de trabajo empresariales complejos.",
    bullets: [
      "Desarrollo de módulos personalizados en Python para extender funcionalidades nativas de Odoo.",
      "Integración de Odoo con plataformas externas y consumo/exposición de APIs REST.",
      "Diseño y personalización de vistas e interfaces de usuario utilizando XML y QWeb.",
      "Gestión y optimización de consultas en bases de datos PostgreSQL.",
      "Mantenimiento, debugging técnico y optimización del rendimiento del código existente.",
    ],
  },
  {
    role: "Desarrollador Web Full-Stack",
    company: "CodeArts Solutions",
    period: "Ene. 2025 - Mar. 2025",
    location: "Sevilla · Remoto",
    description:
      "Formación práctica intensiva en desarrollo web colaborando en proyectos reales de la empresa.",
    bullets: [
      "Desarrollo con React, PHP, Tailwind CSS, JavaScript, DynamoDB, Docker, Symfony y Laravel.",
      "Flujos avanzados con Git/GitHub: gestión de ramas (Gitflow), pull requests y code reviews.",
      "Adquisición de una perspectiva completa del ciclo de vida del software en equipos ágiles.",
    ],
  },
  {
    role: "Operador de Telemarketing",
    company: "Grupo ACERCA",
    period: "Jun. 2025 - Ago. 2025",
    location: "Sevilla",
    description:
      "Atención profesional a clientes y gestión de bases de datos operativas.",
    bullets: [
      "Desarrollo avanzado de comunicación asertiva y negociación.",
      "Trabajo por objetivos diarios y resolución proactiva de incidencias de clientes.",
    ],
  },
  {
    role: "Alumno de Prácticas",
    company: "Grupo MPE",
    period: "Abr. 2024 - Jun. 2024",
    location: "Sevilla",
    description:
      "Soporte técnico y mantenimiento de infraestructura informática.",
    bullets: [
      "Mantenimiento preventivo/correctivo de equipos informáticos y redes de área local.",
      "Administración de Active Directory y soporte de primer y segundo nivel a usuarios.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="relative border-l border-line ml-1.5 space-y-10">
        {experience.map((job) => (
          <li key={job.company} className="pl-7 relative">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-base" />
            <p className="text-xs text-faint">{job.period}</p>
            <h3 className="text-lg font-semibold tracking-tight mt-1">{job.role}</h3>
            <p className="text-sm text-accent mt-0.5">{job.company} · {job.location}</p>
            <p className="text-muted mt-3 leading-relaxed">{job.description}</p>
            <ul className="mt-3 space-y-1.5 list-disc pl-5 marker:text-faint text-sm text-muted leading-relaxed">
              {job.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
