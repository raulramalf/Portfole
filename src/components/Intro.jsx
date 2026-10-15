export default function Intro() {
  return (
    <section className="pt-2 pb-12">
      <p className="text-sm font-medium text-accent mb-4">Desarrollador de software · Automatización de procesos con IA</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">Raúl Ramírez Alfaro</h1>
      <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
        Desarrollador con experiencia en entornos backend y frontend, principalmente con Java, PHP, Python y Node.js.
        Me centro en escribir código mantenible y en aplicar buenas prácticas de arquitectura. Actualmente busco
        oportunidades como desarrollador de software en Sevilla y alrededores.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#proyectos" className="btn btn-primary">Ver proyecto</a>
        <a href="#experiencia" className="btn btn-outline">Experiencia</a>
      </div>
    </section>
  );
}
