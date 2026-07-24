import Reveal from "./Reveal";

const skills = [
  {
    category: "Backend",
    items: ["Java", "PHP", "Python", "Node.js", "Spring Boot", "FastAPI"],
  },
  {
    category: "Frontend",
    items: ["JavaScript (ES6+)", "React", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    category: "Automatización de Flujos",
    items: ["n8n", "Make"],
  },
  {
    category: "Inteligencia Artificial",
    items: ["OpenAI API", "LangChain", "Prompt Engineering"],
  },
  {
    category: "Herramientas & Ecosistemas",
    items: ["Odoo (Python/XML)", "Docker", "Git / GitHub", "Symfony", "Laravel", "JavaFX"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 bg-[#0B0D13] relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-semibold text-garnet-light text-xs mb-3 px-3.5 py-1.5 rounded-full bg-garnet/10 border border-garnet/20 uppercase tracking-wider">
            <span>Especialización Técnica</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-3">
            Habilidades & Tecnologías
          </h2>
          <p className="text-muted text-sm mb-12 max-w-xl">
            Herramientas y lenguajes con los que desarrollo habitualmente, organizados por área de especialidad.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className="group bg-slate-surface/80 rounded-xl p-6 border border-white/5 hover:border-garnet/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between shadow-xl">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-100 mb-4 pb-3 border-b border-white/5">
                    {group.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-slate-300 bg-[#07080C] px-3 py-1.5 rounded-md border border-white/10 group-hover:border-garnet/25 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}