export default function Contact() {
  return (
    <section id="contacto" className="px-6 md:px-16 py-24">
      <p className="font-mono text-teal text-sm mb-4">$ contacto --info</p>
      <h2 className="font-display font-semibold text-2xl md:text-3xl mb-6">
        Hablemos
      </h2>
      <p className="text-muted max-w-xl leading-relaxed mb-8">
        Estoy en busqueda activa de oportunidades como desarrollador de software
        en Sevilla y alrededores, en modalidad presencial, hibrida o remota.
        Si quieres charlar sobre alguna colaboracion, aqui me tienes.
      </p>
      <div className="flex flex-col gap-3 font-mono text-sm">
        <a href="mailto:raulramalf@gmail.com" className="text-amber hover:underline">
          raulramalf@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/raul-ramirez-alfaro-539433275"
          target="_blank"
          rel="noreferrer"
          className="text-teal hover:underline"
        >
          LinkedIn -&gt;
        </a>
        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noreferrer"
          className="text-teal hover:underline"
        >
          GitHub -&gt;
        </a>
      </div>
    </section>
  );
}