export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 relative">
      <p className="font-mono text-teal text-sm mb-4 tracking-wide">
        raul@dev:~$ whoami
      </p>
      <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-4">
        Raul Ramirez Alfaro
      </h1>
      <p className="font-mono text-amber text-lg md:text-xl mb-6">
        Desarrollador de Software · Sevilla y alrededores
      </p>
      <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mb-2">
        Construyo software mantenible en backend con Java, PHP, Python y Node.js,
        complementando con React y MySQL en frontend y base de datos.
      </p>
      <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed">
        Actualmente automatizando procesos con n8n y explorando la integracion
        de inteligencia artificial en flujos de desarrollo reales.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#proyectos"
          className="px-6 py-3 bg-amber text-ink font-mono text-sm rounded-md hover:opacity-90 transition"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="px-6 py-3 border border-teal text-teal font-mono text-sm rounded-md hover:bg-teal/10 transition"
        >
          Contactar
        </a>
        <a
          href="https://www.linkedin.com/in/raul-ramirez-alfaro-539433275"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-white/10 text-muted font-mono text-sm rounded-md hover:border-white/30 hover:text-text transition"
        >
          LinkedIn
        </a>
      </div>

      <div className="mt-16 flex gap-8 font-mono text-xs text-muted">
        <span>ES / EN (Professional)</span>
        <span>Disponibilidad: presencial · hibrido · remoto</span>
      </div>
    </section>
  );
}