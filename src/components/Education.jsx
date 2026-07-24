import Reveal from "./Reveal";

const education = [
  {
    title: "Ciclo Formativo de Grado Superior",
    subtitle: "Web/Multimedia Management and Webmaster",
    institution: "Cesur",
    period: "Sept. 2024 - Jun. 2026",
    note: "Formación especializada en arquitectura web, integración de multimedia, gestión de servidores y desarrollo full-stack.",
  },
  {
    title: "Ciclo Formativo de Grado Medio",
    subtitle: "Informática, Comunicaciones y Asistencia Técnica",
    institution: "Cesur",
    period: "2022 - 2024",
    note: "Fundamentos de redes de comunicación, montaje de sistemas informáticos, bases de datos y soporte a usuarios.",
  },
  {
    title: "Educación Secundaria Obligatoria",
    subtitle: "Orientación Científico-Tecnológica",
    institution: "IES Rodrigo Caro",
    period: "2017 - 2022",
    note: "Formación básica con orientación hacia tecnología, razonamiento lógico y ciencias aplicadas.",
  },
];

export default function Education() {
  return (
    <section id="educacion" className="px-6 md:px-16 py-24 bg-[#0B0D13]/90 backdrop-blur-md relative">


      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-semibold text-garnet-light text-xs mb-3 px-3.5 py-1.5 rounded-full bg-garnet/10 border border-garnet/20 uppercase tracking-wider">
            <span>Formación Académica</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-3">
            Estudios & Titulaciones
          </h2>
          <p className="text-muted text-sm mb-12 max-w-xl">
            Estudios y especializaciones técnicas cursadas en desarrollo de software y sistemas informáticos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <Reveal key={edu.title} delay={i * 100}>
              <div className="bg-slate-surface/80 rounded-xl p-6 border border-white/5 hover:border-garnet/40 transition-all duration-300 h-full flex flex-col justify-between shadow-xl group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-muted px-2.5 py-1 rounded bg-ink/70 border border-white/10">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-100 mb-1">
                    {edu.title}
                  </h3>

                  {edu.subtitle && (
                    <p className="text-xs text-garnet-light font-medium mb-3">
                      {edu.subtitle}
                    </p>
                  )}

                  <div className="text-xs text-slate-400 mb-4 font-semibold">
                    <span>{edu.institution}</span>
                  </div>

                  {edu.note && (
                    <p className="text-muted text-xs leading-relaxed border-t border-white/5 pt-3">
                      {edu.note}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}