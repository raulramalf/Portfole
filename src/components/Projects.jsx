import { useState } from "react";
import Reveal from "./Reveal";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 14, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

import { Link } from "react-router-dom";

const projects = [
  {
    name: "AI Support Chatbot",
    category: "Chatbots",
    description:
      "Un chatbot de soporte al cliente avanzado e intuitivo, con un diseño moderno glassmorphism y lógica de simulación de respuestas en tiempo real.",
    stack: ["React", "AI Integration", "Tailwind CSS"],
    github: "https://github.com/raulramalf",
    demo: "/demo/chatbot",
  },
  {
    name: "E-commerce Storefront",
    category: "E-commerce",
    description:
      "Plataforma de comercio electrónico moderna y dinámica con animaciones fluidas, visor de catálogo interactivo y carrito de compras integrado.",
    stack: ["React", "Framer Motion", "Context API"],
    github: "https://github.com/raulramalf",
    demo: "/demo/ecommerce",
  },
  {
    name: "CRM Dashboard",
    category: "Sistemas de Gestión",
    description:
      "Aplicación CRM enfocada en la experiencia de usuario, con visualización de embudo de ventas, lista de clientes y métricas de rendimiento.",
    stack: ["React", "Tailwind CSS", "Data Visualization"],
    github: "https://github.com/raulramalf",
    demo: "/demo/crm",
  },
];

const categories = [
  "Todos",
  "Chatbots",
  "E-commerce",
  "Sistemas de Gestión",
];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");

  const visibleProjects =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="px-6 md:px-16 py-24 bg-[#07080C] relative">


      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-semibold text-garnet-light text-xs mb-3 px-3.5 py-1.5 rounded-full bg-garnet/10 border border-garnet/20 uppercase tracking-wider">
            <span>Portafolio de Proyectos</span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-3">
            Proyectos Destacados
          </h2>
          <p className="text-muted text-sm mb-10 max-w-2xl">
            Proyectos desarrollados que abarcan aplicaciones full-stack, sistemas backend con clientes de escritorio y móvil, automatización de procesos con IA y asistentes conversacionales.
          </p>
        </Reveal>

        {/* Categorías de Filtro */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-300 ${
                  filter === cat
                    ? "bg-garnet text-white border-garnet shadow-lg shadow-garnet/30"
                    : "text-slate-400 bg-slate-surface/60 border-white/10 hover:border-garnet/40 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Contenedor de Proyectos Centrado */}
        <div className="flex flex-wrap justify-center gap-6">
          {visibleProjects.map((project, i) => (
            <div key={project.name} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md flex flex-col">
              <Reveal delay={(i % 6) * 80}>
                <div className="bg-slate-surface/80 rounded-xl p-6 border border-white/5 hover:border-garnet/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-xl group">

                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-garnet-light px-2.5 py-1 rounded bg-garnet/10 border border-garnet/20">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-100 mb-2 group-hover:text-garnet-light transition-colors">
                  {project.name}
                </h3>


                <p className="text-muted text-xs leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Stack de tecnologías */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-slate-300 bg-ink/70 border border-white/10 px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces de repositorio y demo */}
                <div className="flex items-center gap-4 text-xs font-mono pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-garnet-light transition flex items-center gap-1.5"
                    >
                      <GithubIcon size={14} />
                      <span>Código</span>
                    </a>
                  )}
                  {project.demo && (
                    project.demo.startsWith('/') ? (
                      <Link
                        to={project.demo}
                        className="text-garnet-light hover:underline flex items-center gap-1.5 ml-auto"
                      >
                        <span>Demo</span>
                        <ExternalLink size={14} />
                      </Link>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-garnet-light hover:underline flex items-center gap-1.5 ml-auto"
                      >
                        <span>Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )
                  )}
                </div>

              </div>
            </Reveal>
          </div>
          ))}
        </div>

      </div>
    </section>
  );
}