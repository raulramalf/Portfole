import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <Section id="experiencia" n="02" label="Trayectoria" title="Experiencia">
      <ol ref={ref} className="relative ml-2 md:ml-0 space-y-14">
        <span className="absolute left-0 md:left-[23%] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
        <motion.span style={{ scaleY }} className="absolute left-0 md:left-[23%] top-2 bottom-2 w-px bg-accent origin-top" aria-hidden="true" />

        {experience.map((job) => (
          <li key={job.company} className="relative grid grid-cols-1 md:grid-cols-[23%_1fr] gap-4 md:gap-0 pl-8 md:pl-0">
            <motion.span
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 1 }}
              className="absolute -left-[5px] md:left-[23%] md:-ml-[5px] top-2 w-[11px] h-[11px] rounded-full bg-accent ring-4 ring-base"
            />
            <Reveal className="md:pr-10 md:text-right">
              <p className="mono text-sm text-muted">{job.period}</p>
              <p className="text-xs text-faint mt-1">{job.location}</p>
            </Reveal>
            <Reveal className="md:pl-12" delay={80}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">{job.role}</h3>
              <p className="text-accent-text mt-1">{job.company}</p>
              <p className="text-muted mt-4 leading-relaxed max-w-2xl">{job.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed max-w-2xl">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3"><span className="mt-2 w-1.5 h-px bg-accent shrink-0 scale-x-[2]" />{b}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
