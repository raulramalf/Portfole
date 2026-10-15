import { motion } from "framer-motion";
import Section from "./Section";
import { stackGroups } from "../data/stack";

export default function Skills() {
  return (
    <Section id="skills" n="04" label="Stack" title="Habilidades">
      <div className="border-t border-line">
        {stackGroups.map((g, gi) => (
          <div key={g.name} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-line">
            <h3 className="md:col-span-3 text-xl font-bold tracking-tight">{g.name}</h3>
            <motion.ul
              className="md:col-span-9 flex flex-wrap gap-2.5"
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: gi * 0.03 } } }}
            >
              {g.items.map((t) => (
                <motion.li
                  key={t} className="tag"
                  variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
