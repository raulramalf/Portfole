import Reveal from "./Reveal";

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
    <section id="experiencia" className="px-6 md:px-16 py-24 bg-[#07080C] relative">


      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-semibold text-garnet-light text-xs mb-3 px-3.5 py-1.5 rounded-full bg-garnet/10 border border-garnet/20 uppercase tracking-wider">
            <span>Trayectoria Laboral</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-3">
            Experiencia Profesional
          </h2>
          <p className="text-muted text-sm mb-12 max-w-xl">
            Trayectoria en desarrollo backend, personalización ERP, desarrollo web full-stack y soporte técnico.
          </p>
        </Reveal>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div className="relative pl-8 md:pl-10 group">
                {/* Nodo de línea de tiempo granate */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#07080C] border-2 border-garnet group-hover:bg-garnet-light group-hover:border-garnet-light transition-colors shadow-md shadow-garnet/40" />

                {/* Tarjeta de la experiencia */}
                <div className="p-6 rounded-xl bg-slate-surface/70 border border-white/5 group-hover:border-garnet/30 transition-all duration-300 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-100 flex items-center gap-2">
                        <span>{job.role}</span>
                        <span className="text-garnet-light text-sm font-normal">@ {job.company}</span>
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                      <span className="px-2.5 py-1 rounded bg-ink/70 border border-white/10">
                        {job.period}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-ink/70 border border-white/10">
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-garnet-light mt-1.5 shrink-0" />
                        <span>{bullet}</span>
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