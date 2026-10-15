import Section from "./Section";

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
    <Section id="educacion" title="Formación">
      <ol className="divide-y divide-line border-y border-line">
        {education.map((edu) => (
          <li key={edu.title} className="py-7 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6">
            <p className="text-sm text-faint sm:pt-1">{edu.period}</p>
            <div className="sm:col-span-3">
              <h3 className="text-lg font-semibold tracking-tight">{edu.title}</h3>
              <p className="text-sm text-navy font-medium mt-0.5">{edu.subtitle} · {edu.institution}</p>
              <p className="text-sm text-muted mt-3 leading-relaxed">{edu.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
