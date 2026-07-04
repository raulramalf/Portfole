const skills = [
  { category: "Backend", items: ["Java", "PHP", "Python", "Node.js"] },
  { category: "Frontend", items: ["JavaScript", "React", "Tailwind CSS"] },
  { category: "Bases de datos", items: ["MySQL", "PostgreSQL", "DynamoDB"] },
  { category: "Automatizacion", items: ["n8n", "Make"] },
  {
    category: "Herramientas y frameworks",
    items: ["Git", "GitHub", "Docker", "Symfony", "Laravel", "Odoo"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 bg-surface">
      <p className="font-mono text-teal text-sm mb-4">$ ls habilidades/</p>
      <h2 className="font-display font-semibold text-2xl md:text-3xl mb-10">
        Stack tecnico
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-ink rounded-lg p-6 border border-white/5"
          >
            <h3 className="font-mono text-amber text-sm mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-text bg-surface px-3 py-1 rounded-md border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}