import Section from "./Section";

const areas = [
  ["Backend", "Java, Python, PHP y Node.js; APIs y bases de datos relacionales."],
  ["Frontend", "JavaScript y React con Tailwind CSS."],
  ["ERP Odoo", "Módulos en Python, vistas XML/QWeb e integraciones."],
  ["Automatización e IA", "Flujos con n8n y Make; integración de IA en procesos de desarrollo."],
];

export default function About() {
  return (
    <Section id="perfil" title="Perfil">
      <p className="leading-relaxed text-ink/90">
        Prefiero comprender en profundidad una tecnología antes de incorporarla a un proyecto, priorizando la solidez
        técnica frente a la adopción apresurada de nuevas herramientas. En los últimos meses he dedicado tiempo a la
        automatización de procesos y a la integración de inteligencia artificial en flujos de desarrollo, con el
        objetivo de reducir tareas repetitivas y aportar valor real a los equipos.
      </p>
      <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
        {areas.map(([k, v]) => (
          <div key={k} className="bg-panel p-5">
            <dt className="font-medium">{k}</dt>
            <dd className="text-sm text-muted mt-1 leading-relaxed">{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
