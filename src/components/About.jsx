import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const highlights = [
  { title: "Automatización & IA", description: "Flujos con n8n, Make y modelos de IA para optimizar la operativa." },
  { title: "Full-Stack", description: "Aplicaciones robustas con Java, Python, PHP, Node.js y React." },
  { title: "A medida", description: "Sistemas como BrowseMe y extensiones personalizadas para Odoo ERP." },
  { title: "Criterio técnico", description: "Entender a fondo una tecnología antes de incorporarla a un proyecto." },
];

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-28">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <SectionTitle index="01" label="Perfil" title="Sobre mí" className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start" />

        <div className="lg:col-span-8 space-y-10">
          <Reveal>
            <p className="serif text-3xl md:text-4xl leading-[1.2]">
              Creo soluciones digitales robustas y mantenibles, con foco en la{" "}
              <em className="text-accent">automatización inteligente de procesos con IA</em>.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
              Trabajo con un ecosistema diverso: Java, Python, PHP, Node.js, React, n8n y bases de datos relacionales.
              Me interesa reducir tareas repetitivas y aportar valor real a los equipos.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 60}>
                <div className="tile h-full p-6">
                  <h3 className="text-base font-medium mb-1.5">{h.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
