export default function About() {
  return (
    <section id="sobre-mi" className="px-6 md:px-16 py-24 bg-surface">
      <p className="font-mono text-teal text-sm mb-4">$ cat sobre-mi.md</p>
      <h2 className="font-display font-semibold text-2xl md:text-3xl mb-6">
        Sobre mi
      </h2>
      <p className="text-muted max-w-2xl leading-relaxed mb-4">
        Trabajo principalmente con Java, PHP, Python y Node.js en el backend,
        complementando con JavaScript, React y MySQL cuando el proyecto lo requiere.
        Me enfoco en escribir codigo mantenible y en aplicar buenas practicas de
        arquitectura que faciliten la evolucion de los proyectos a largo plazo.
      </p>
      <p className="text-muted max-w-2xl leading-relaxed">
        En los ultimos meses he dedicado tiempo a la automatizacion de procesos
        y a la integracion de inteligencia artificial en flujos de desarrollo,
        buscando reducir tareas repetitivas y aportar valor real a los equipos de trabajo.
      </p>
    </section>
  );
}