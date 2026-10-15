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
      <ol className="relative border-l border-line ml-1.5 space-y-8">
        {education.map((edu) => (
          <li key={edu.title} className="pl-7 relative">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-faint ring-4 ring-base" />
            <p className="text-xs text-faint">{edu.period}</p>
            <h3 className="text-lg font-semibold tracking-tight mt-1">{edu.title}</h3>
            <p className="text-sm text-accent mt-0.5">{edu.subtitle} · {edu.institution}</p>
            <p className="text-sm text-muted mt-3 leading-relaxed">{edu.note}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
