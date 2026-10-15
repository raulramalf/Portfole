import { useState } from "react";
import { Plus } from "lucide-react";
import Section from "./Section";
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
  const [open, setOpen] = useState(0);

  return (
    <Section id="experiencia" n="03" label="Experiencia" title="Dónde he trabajado">
      <div className="flex flex-col gap-3">
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={job.company} delay={i * 50}>
              <div className={`card transition-colors ${isOpen ? "!bg-sage/60" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 text-left p-5 md:p-6"
                >
                  <span className="text-xs text-moss w-20 shrink-0 hidden sm:block">{job.period}</span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-display font-bold text-xl md:text-2xl tracking-tight">{job.role}</span>
                    <span className="block text-sm text-moss">{job.company} · {job.location}<span className="sm:hidden"> · {job.period}</span></span>
                  </span>
                  <span className={`w-9 h-9 shrink-0 rounded-full border border-forest/30 flex items-center justify-center transition-transform ${isOpen ? "rotate-45 bg-coral border-coral text-white" : ""}`}>
                    <Plus size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 sm:pl-[7.5rem]">
                    <p className="text-sm md:text-base leading-relaxed mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-moss leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
