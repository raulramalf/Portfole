export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 relative">
      <p className="font-mono text-teal text-sm mb-4">
        raul@dev:~$ whoami
      </p>
      <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-4">
        Raul Ramirez Alfaro
      </h1>
      <p className="font-mono text-amber text-lg md:text-xl mb-6">
        Desarrollador de Software
      </p>
      <p className="text-muted max-w-xl text-base md:text-lg leading-relaxed">
        Construyo software mantenible en backend con Java, PHP, Python y Node.js,
        y automatizo procesos para que los equipos pierdan menos tiempo en tareas repetitivas.
      </p>
      <div className="mt-8 flex gap-4">
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
      </div>
    </section>
  );
}