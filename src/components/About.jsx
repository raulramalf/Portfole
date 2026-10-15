import { motion } from "framer-motion";
import Section from "./Section";
import ScrollText from "./ScrollText";

const STATEMENT =
  "Prefiero comprender en profundidad una tecnología antes de incorporarla a un proyecto, priorizando la solidez técnica frente a la adopción apresurada de nuevas herramientas. Me interesa automatizar procesos y reducir tareas repetitivas para aportar valor real a los equipos.";

const areas = [
  ["Backend", "Java, Python, PHP y Node.js; APIs y bases de datos relacionales."],
  ["Frontend", "JavaScript y React con Tailwind CSS."],
  ["ERP Odoo", "Módulos en Python, vistas XML/QWeb e integraciones."],
  ["Automatización e IA", "Flujos con n8n y Make; integración de IA en procesos de desarrollo."],
];

export default function About() {
  return (
    <Section id="perfil" n="01" label="Perfil" title="Sobre mí">
      <ScrollText text={STATEMENT} className="text-[1.4rem] sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.25] max-w-5xl" />

      <dl className="mt-14 md:mt-20 border-t border-line">
        {areas.map(([k, v], i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-7 border-b border-line hover:bg-panel/70 transition-colors px-2"
          >
            <dt className="md:col-span-4 text-xl md:text-2xl font-bold tracking-tight group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">{k}</dt>
            <dd className="md:col-span-8 text-muted self-center">{v}</dd>
          </motion.div>
        ))}
      </dl>
    </Section>
  );
}
