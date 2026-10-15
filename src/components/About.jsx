import Section from "./Section";

const areas = [
  ["Desarrollo backend", "Java, Python, PHP y Node.js; APIs y bases de datos relacionales."],
  ["Desarrollo frontend", "JavaScript y React con Tailwind CSS."],
  ["ERP Odoo", "Módulos personalizados en Python, vistas XML/QWeb e integraciones."],
  ["Automatización e IA", "Flujos con n8n y Make; integración de modelos de IA en procesos de desarrollo."],
];

export default function About() {
  return (
    <Section id="perfil" title="Perfil" alt>
      <p className="text-lg leading-relaxed">
        Prefiero comprender en profundidad una tecnología antes de incorporarla a un proyecto, priorizando la solidez
        técnica frente a la adopción apresurada de nuevas herramientas. En los últimos meses he dedicado tiempo a la
        automatización de procesos y a la integración de inteligencia artificial en flujos de desarrollo, con el
        objetivo de reducir tareas repetitivas y aportar valor real a los equipos.
      </p>
      <dl className="mt-10 border-t border-line">
        {areas.map(([k, v]) => (
          <div key={k} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-4 border-b border-line">
            <dt className="font-medium">{k}</dt>
            <dd className="sm:col-span-2 text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
