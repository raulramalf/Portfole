import { motion } from "framer-motion";
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
    <Section id="educacion" n="05" label="Formación" title="Estudios">
      <div className="border-t border-line">
        {education.map((edu, i) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-8 border-b border-line hover:bg-panel/70 transition-colors px-2"
          >
            <p className="md:col-span-3 mono text-sm text-muted pt-1">{edu.period}</p>
            <div className="md:col-span-9">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-accent-text transition-colors">{edu.title}</h3>
              <p className="text-sm text-accent-text mt-1">{edu.subtitle} · {edu.institution}</p>
              <p className="text-muted mt-3 leading-relaxed max-w-2xl">{edu.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
