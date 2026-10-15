import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

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
    <section id="experiencia" className="px-6 py-20">
      <div className="max-w-[1280px] mx-auto">
        <SectionTitle label="Trayectoria" title="Experiencia profesional">
          Desarrollo backend, personalización ERP, desarrollo web full-stack y soporte técnico.
        </SectionTitle>

        <div className="grid gap-4">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 60}>
              <div className="border border-fog rounded-3xl p-6 md:p-8 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl fw-652 tracking-tight">{job.role}</h3>
                  <p className="text-graphite fw-440 mt-1">{job.company}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="pill bg-mist text-xs fw-440 px-3 py-1">{job.period}</span>
                    <span className="pill bg-mist text-xs fw-440 px-3 py-1">{job.location}</span>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base fw-456 leading-relaxed mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-graphite fw-440 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-ink mt-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
