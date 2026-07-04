import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Ledgerly",
    category: "Full-Stack",
    description:
      "Plataforma de facturacion para autonomos y pymes: creacion de facturas, clientes, impuestos y exportacion a PDF.",
    stack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/tu-usuario/ledgerly",
    demo: "",
  },
  {
    name: "Driftboard",
    category: "Full-Stack",
    description:
      "Gestor de tareas estilo Kanban con arrastrar y soltar, notificaciones en tiempo real y dashboard de estadisticas.",
    stack: ["React", "Laravel", "MySQL"],
    github: "https://github.com/tu-usuario/driftboard",
    demo: "",
  },
  {
    name: "WheelFireClub",
    category: "Full-Stack",
    description:
      "Aplicacion web gamificada inspirada en Stranger Things, desarrollada bajo arquitectura MVC.",
    stack: ["Laravel", "MySQL", "PHP"],
    github: "https://github.com/tu-usuario/wheelfireclub",
    demo: "",
  },
  {
    name: "Momentum",
    category: "Full-Stack",
    description:
      "Aplicacion de seguimiento de habitos con graficas de progreso, recordatorios y modo offline.",
    stack: ["React", "Node.js", "DynamoDB"],
    github: "https://github.com/tu-usuario/momentum",
    demo: "",
  },
  {
    name: "Slotwise",
    category: "Full-Stack",
    description:
      "Sistema de reservas para negocios de servicios (peluquerias, clinicas) con calendario en tiempo real y recordatorios por email.",
    stack: ["React", "Node.js", "MySQL"],
    github: "https://github.com/tu-usuario/slotwise",
    demo: "",
  },
  {
    name: "Warehaus",
    category: "Backend · Escritorio",
    description:
      "Sistema de gestion de inventario multialmacen para escritorio, con control de stock en tiempo real y alertas de reposicion.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JavaFX"],
    github: "https://github.com/tu-usuario/warehaus",
    demo: "",
  },
  {
    name: "Fieldpin",
    category: "Backend · Movil",
    description:
      "App movil para tecnicos de campo: gestion de ordenes de trabajo, firma digital y sincronizacion offline con el backend.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React Native"],
    github: "https://github.com/tu-usuario/fieldpin",
    demo: "",
  },
  {
    name: "Payrix",
    category: "Backend · Escritorio",
    description:
      "Motor de calculo de nominas para pymes con generacion de recibos, integracion con Seguridad Social y app de escritorio para RRHH.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Electron"],
    github: "https://github.com/tu-usuario/payrix",
    demo: "",
  },
  {
    name: "Triagely",
    category: "Automatizacion IA",
    description:
      "Flujo que clasifica y prioriza tickets de soporte automaticamente usando un LLM, integrado con el helpdesk de la empresa.",
    stack: ["n8n", "OpenAI API", "Python"],
    github: "https://github.com/tu-usuario/triagely",
    demo: "",
  },
  {
    name: "Digestive",
    category: "Automatizacion IA",
    description:
      "Automatizacion que resume documentos largos (contratos, informes) subidos a una carpeta y envia el resumen por email.",
    stack: ["Make", "LangChain", "Python"],
    github: "https://github.com/tu-usuario/digestive",
    demo: "",
  },
  {
    name: "Pitchline",
    category: "Chatbot · Ventas",
    description:
      "Chatbot para equipos comerciales que cualifica leads, agenda reuniones y responde dudas de producto en tiempo real.",
    stack: ["Node.js", "OpenAI API", "WhatsApp API"],
    github: "https://github.com/tu-usuario/pitchline",
    demo: "",
  },
  {
    name: "Vitalis",
    category: "Chatbot · Salud",
    description:
      "Asistente virtual para clinicas privadas: gestion de citas, recordatorios y respuestas a preguntas frecuentes de pacientes.",
    stack: ["Python", "FastAPI", "OpenAI API"],
    github: "https://github.com/tu-usuario/vitalis",
    demo: "",
  },
  {
    name: "Ledgerbot",
    category: "Chatbot · Finanzas",
    description:
      "Chatbot para banca y fintech centrado en consultas de saldo, movimientos y productos, con salvaguardas de seguridad y cumplimiento.",
    stack: ["Python", "LangChain", "PostgreSQL"],
    github: "https://github.com/tu-usuario/ledgerbot",
    demo: "",
  },
];

const categories = [
  "Todos",
  "Full-Stack",
  "Backend · Escritorio",
  "Backend · Movil",
  "Automatizacion IA",
  "Chatbot · Ventas",
  "Chatbot · Salud",
  "Chatbot · Finanzas",
];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");

  const visibleProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="px-6 md:px-16 py-24">
      <Reveal>
        <p className="font-mono text-teal text-sm mb-4">$ ls proyectos/</p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl mb-2">
          Proyectos
        </h2>
        <p className="text-muted text-sm mb-8 max-w-2xl">
          Una muestra de aplicaciones full-stack, sistemas backend con clientes
          de escritorio y movil, automatizaciones con IA y chatbots orientados
          a distintos sectores.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs border transition-colors ${
                filter === cat
                  ? "bg-amber text-ink border-amber"
                  : "text-muted border-white/10 hover:border-white/30 hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 6) * 80}>
            <div className="bg-surface rounded-xl p-6 border border-white/5 hover:border-amber/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <span className="font-mono text-[11px] text-teal mb-3">
                {project.category}
              </span>
              <h3 className="font-display font-semibold text-lg mb-2">
                {project.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-amber border border-amber/30 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-mono">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal hover:underline"
                  >
                    GitHub -&gt;
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal hover:underline"
                  >
                    Demo -&gt;
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}