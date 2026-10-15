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
    <section id="educacion" className="px-6 py-20">
      <div className="max-w-[1280px] mx-auto">
        <SectionTitle label="Formación" title="Estudios y titulaciones" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {education.map((edu, i) => (
            <Reveal key={edu.title} delay={i * 80} className="h-full">
              <div className="h-full border border-fog rounded-2xl p-6 bg-white flex flex-col">
                <span className="pill bg-mist text-xs fw-440 px-3 py-1 w-fit mb-4">{edu.period}</span>
                <h3 className="text-lg fw-652 tracking-tight leading-snug">{edu.title}</h3>
                <p className="text-sm fw-456 mt-1">{edu.subtitle}</p>
                <p className="text-sm text-graphite fw-440 mt-1 mb-4">{edu.institution}</p>
                <p className="text-sm text-graphite fw-440 leading-relaxed border-t border-fog pt-4 mt-auto">{edu.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
