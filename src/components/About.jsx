import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const highlights = [
  { title: "Automatización & IA", description: "Flujos de trabajo inteligentes con n8n, Make y modelos de IA para optimizar la operativa empresarial." },
  { title: "Desarrollo Full-Stack", description: "Aplicaciones digitales robustas y escalables creadas con Java, Python, PHP, Node.js y React." },
  { title: "Soluciones a medida", description: "Sistemas de gestión y análisis web como BrowseMe, además de extensiones personalizadas para Odoo ERP." },
  { title: "Sevilla · Presencial / Remoto", description: "Disponibilidad completa para incorporarme a equipos tecnológicos de forma inmediata." },
];

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-20 bg-mist">
      <div className="max-w-[1280px] mx-auto">
        <SectionTitle label="Perfil" title="Sobre mí" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <p className="text-xl md:text-2xl fw-456 leading-snug">
                Como desarrollador de software, me especializo en crear soluciones digitales robustas y mantenibles. Mi enfoque actual se centra en la <strong className="fw-652">automatización inteligente de procesos con Inteligencia Artificial</strong>, optimizando la operativa y reduciendo cargas de trabajo repetitivas.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-graphite text-base md:text-lg fw-440 leading-relaxed">
                Trabajo habitualmente con un ecosistema técnico diverso que incluye <strong className="fw-600 text-ink">Java, Python, PHP, Node.js, React, n8n y bases de datos relacionales</strong>. Prefiero comprender en profundidad una tecnología antes de incorporarla a un proyecto.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#contacto" className="btn btn-fill">Contactar conmigo</a>
                <a href="#experiencia" className="btn btn-line">Ver trayectoria</a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 grid gap-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 60}>
                <div className="bg-white border border-fog rounded-2xl p-5">
                  <h3 className="text-sm fw-600 mb-1">{h.title}</h3>
                  <p className="text-sm text-graphite fw-440 leading-relaxed">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
