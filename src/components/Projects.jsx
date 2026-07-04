const projects = [
  {
    name: "WheelFireClub",
    description:
      "Aplicacion web gamificada inspirada en Stranger Things, desarrollada bajo arquitectura MVC.",
    stack: ["Laravel", "MySQL", "PHP"],
    github: "https://github.com/tu-usuario/wheelfireclub",
    demo: "",
  },
  {
    name: "Task Manager Full-Stack",
    description:
      "Gestor de tareas con autenticacion, roles de usuario y dashboard con estadisticas.",
    stack: ["React", "Node.js", "MySQL"],
    github: "",
    demo: "",
  },
  {
    name: "Flujo de automatizacion de leads",
    description:
      "Automatizacion que recoge leads de un formulario y los centraliza con notificacion en tiempo real.",
    stack: ["n8n", "API REST"],
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 md:px-16 py-24 bg-surface">
      <p className="font-mono text-teal text-sm mb-4">$ ls proyectos/</p>
      <h2 className="font-display font-semibold text-2xl md:text-3xl mb-10">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-ink rounded-lg p-6 border border-white/5 hover:border-amber/40 transition"
          >
            <h3 className="font-display font-semibold text-lg mb-2">
              {project.name}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-teal border border-teal/30 px-2 py-1 rounded"
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
                  className="text-amber hover:underline"
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
        ))}
      </div>
    </section>
  );
}