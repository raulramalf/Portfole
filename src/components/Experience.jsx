const experience = [
  {
    role: "Desarrollador Backend",
    company: "Ingetexia Projects",
    period: "feb. 2026 - jun. 2026",
    location: "Sevilla · Hibrido",
    description:
      "Desarrollo y mantenimiento del ERP Odoo, personalizando el software a los flujos de trabajo especificos de la empresa.",
    bullets: [
      "Creacion y modificacion de modulos personalizados en Python.",
      "Integracion de Odoo con plataformas externas y APIs de terceros.",
      "Diseno de vistas y reportes con XML y QWeb.",
      "Gestion y optimizacion de estructuras de datos en PostgreSQL.",
      "Debugging y mejora de rendimiento del codigo existente.",
    ],
  },
  {
    role: "Desarrollador Web",
    company: "CodeArts Solutions",
    period: "ene. 2025 - mar. 2025",
    location: "Sevilla · En remoto",
    description:
      "Formacion practica en desarrollo web full-stack, trabajando con multiples tecnologias.",
    bullets: [
      "React, PHP, Tailwind CSS, JavaScript, DynamoDB, Docker, Symfony y Laravel.",
      "Profundizacion en Git y GitHub: gestion de ramas y colaboracion en equipo.",
      "Vision amplia del desarrollo web al no enfocarme en una sola tecnologia.",
    ],
  },
  {
    role: "Operador de telemarketing",
    company: "Grupo ACERCA",
    period: "jun. 2025 - ago. 2025",
    location: "Sevilla, Andalucia",
    description:
      "Atencion telefonica y gestion de bases de datos de clientes.",
    bullets: [
      "Desarrollo de habilidades de comunicacion y resolucion de incidencias.",
      "Trabajo bajo objetivos, aplicable a entornos de equipo y atencion a stakeholders.",
    ],
  },
  {
    role: "Alumno de practicas",
    company: "Grupo MPE",
    period: "abr. 2024 - jun. 2024",
    location: "Sevilla, Andalucia",
    description:
      "Practicas en soporte tecnico.",
    bullets: [
      "Montaje y mantenimiento de hardware.",
      "Gestion de directorio activo y resolucion de incidencias de primer nivel.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="px-6 md:px-16 py-24 bg-surface">
      <p className="font-mono text-teal text-sm mb-4">$ git log --experiencia</p>
      <h2 className="font-display font-semibold text-2xl md:text-3xl mb-10">
        Experiencia
      </h2>
      <div className="flex flex-col gap-8 max-w-3xl">
        {experience.map((job, i) => (
          <div
            key={job.company}
            className="relative pl-8 border-l border-white/10"
          >
            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-amber" />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="font-display font-semibold text-lg">
                {job.role} · <span className="text-amber">{job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <p className="font-mono text-xs text-teal mb-3">{job.location}</p>
            <p className="text-muted text-sm leading-relaxed mb-3">
              {job.description}
            </p>
            <ul className="list-disc list-inside text-sm text-muted space-y-1">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}