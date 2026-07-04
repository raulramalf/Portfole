import {
  Server,
  Layout,
  Database,
  Workflow,
  Wrench,
  Brain,
} from "lucide-react";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Backend",
    icon: Server,
    items: ["Java", "PHP", "Python", "Node.js"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Bases de datos",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "DynamoDB"],
  },
  {
    category: "Automatizacion",
    icon: Workflow,
    items: ["n8n", "Make"],
  },
  {
    category: "IA y automatizacion inteligente",
    icon: Brain,
    items: ["OpenAI API", "LangChain", "Prompt engineering"],
  },
  {
    category: "Herramientas y frameworks",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Symfony", "Laravel", "Odoo"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 bg-slate">
      <Reveal>
        <p className="font-mono text-teal text-sm mb-4">$ ls habilidades/</p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl mb-2">
          Stack tecnico
        </h2>
        <p className="text-muted text-sm mb-10 max-w-xl">
          Herramientas y lenguajes con los que trabajo de forma habitual,
          organizados por area.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.category} delay={i * 80}>
              <div className="group bg-slate-surface rounded-xl p-6 border border-white/5 hover:border-amber/40 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                    <Icon size={18} className="text-amber" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-text">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono text-muted bg-slate px-3 py-1.5 rounded-md border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}