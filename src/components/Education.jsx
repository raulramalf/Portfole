import Section from "./Section";
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
    <Section id="educacion" n="05" label="Formación" title="Estudios">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {education.map((edu, i) => (
          <Reveal key={edu.title} delay={i * 60} className="h-full">
            <div className="card h-full p-6 flex flex-col">
              <span className="tag w-fit mb-5 !bg-butter">{edu.period}</span>
              <h3 className="font-display font-bold text-xl tracking-tight leading-tight">{edu.title}</h3>
              <p className="text-sm font-medium mt-2">{edu.subtitle}</p>
              <p className="text-sm text-moss">{edu.institution}</p>
              <p className="text-sm text-moss leading-relaxed mt-4 pt-4 border-t border-line mt-auto">{edu.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
