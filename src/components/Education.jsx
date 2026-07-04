import Reveal from "./Reveal";

const education = [
  {
    title: "Ciclo Formativo de Grado Superior",
    subtitle: "Web/Multimedia Management and Webmaster",
    institution: "Cesur",
    period: "sept. 2024 - jun. 2026",
    note: "Cursando actualmente. Formacion enfocada en desarrollo web, gestion de sistemas multimedia y administracion de servidores.",
  },
  {
    title: "Ciclo Formativo de Grado Medio",
    subtitle: "Informatica, comunicaciones y servicios de asistencia",
    institution: "Cesur",
    period: "2022 - 2024",
  },
  {
    title: "Educacion General Basica",
    subtitle: "",
    institution: "IES Rodrigo Caro",
    period: "2017 - 2022",
  },
];

export default function Education() {
  return (
    <section id="educacion" className="px-6 md:px-16 py-24 bg-slate">
      <Reveal>
        <p className="font-mono text-teal text-sm mb-4">$ cat educacion.md</p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl mb-10">
          Educacion
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {education.map((edu, i) => (
          <Reveal key={edu.title} delay={i * 100}>
            <div className="bg-slate-surface rounded-lg p-6 border border-white/5 h-full">
              <p className="font-mono text-xs text-muted mb-2">{edu.period}</p>
              <h3 className="font-display font-semibold text-base mb-1">
                {edu.title}
              </h3>
              {edu.subtitle && (
                <p className="text-sm text-amber mb-2">{edu.subtitle}</p>
              )}
              <p className="font-mono text-xs text-teal mb-3">
                {edu.institution}
              </p>
              {edu.note && (
                <p className="text-muted text-xs leading-relaxed">{edu.note}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}