import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

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
    <section id="educacion" className="px-6 py-28">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <SectionTitle index="05" label="Formación" title="Estudios" className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start" />

        <div className="lg:col-span-8 border-t border-line">
          {education.map((edu, i) => (
            <Reveal key={edu.title} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-7 border-b border-line">
                <p className="md:col-span-3 text-sm text-accent">{edu.period}</p>
                <div className="md:col-span-9">
                  <h3 className="serif text-2xl">{edu.title}</h3>
                  <p className="text-sm text-ivory/90 mt-1">{edu.subtitle} · <span className="text-muted">{edu.institution}</span></p>
                  <p className="text-sm text-muted leading-relaxed mt-3 max-w-xl">{edu.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
