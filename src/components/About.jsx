import Reveal from "./Reveal";

export default function About() {
  const highlights = [
    {
      title: "Desarrollo de Software Multitecnología",
      description:
        "Creación de aplicaciones web, sistemas de escritorio y soluciones digitales utilizando Java, Python, PHP, Node.js, React y bases de datos relacionales/NoSQL.",
    },
    {
      title: "Automatización de Procesos con IA",
      description:
        "Diseño e implementación de flujos automatizados avanzados con n8n y Make, integrando modelos de IA para optimizar tiempos y operativas complejas.",
    },
    {
      title: "Amplio Portafolio de Proyectos",
      description:
        "Trayectoria práctica demostrada con multitud de proyectos desarrollados y en curso que abarcan diferentes sectores y arquitecturas.",
    },
  ];

  return (
    <section id="sobre-mi" className="px-6 md:px-16 py-24 bg-[#0B0D13] relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-semibold text-garnet-light text-xs mb-3 px-3.5 py-1.5 rounded-full bg-garnet/10 border border-garnet/20 uppercase tracking-wider">
            <span>Perfil Profesional</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            Sobre mí
          </h2>
          <div className="w-12 h-1 bg-garnet rounded-full mb-8" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7 space-y-5">
            <Reveal delay={100}>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Como <strong className="text-slate-100 font-semibold">desarrollador de software</strong>, me especializo en crear soluciones digitales robustas y mantenibles. Mi gran enfoque profesional actual se centra en la <strong className="text-slate-100 font-semibold">automatización inteligente de procesos con Inteligencia Artificial</strong>, optimizando la operativa y reduciendo cargas de trabajo repetitivas.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-muted text-base leading-relaxed">
                Cuento con una amplia variedad de <strong className="text-slate-200">proyectos desarrollados y en curso</strong> que abarcan desde sistemas de facturación y gestión hasta plataformas interactivas y asistentes virtuales. Trabajo habitualmente con un ecosistema técnico diverso que incluye <strong className="text-slate-200">Java, Python, PHP, Node.js, React, n8n y bases de datos relacionales</strong>.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-5 rounded-xl bg-slate-surface/60 border border-white/10">
                <h4 className="text-sm font-semibold text-slate-100 mb-1">Disponibilidad Profesional</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Ubicado en Sevilla y abierto a incorporarme a equipos de desarrollo en modalidad presencial, híbrida o remota.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={150 + i * 100}>
                <div className="p-5 rounded-xl bg-slate-surface/80 border border-white/5 hover:border-garnet/40 transition-all duration-300">
                  <h3 className="font-display font-semibold text-sm text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}