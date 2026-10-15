import Reveal from "./Reveal";
import Section from "./Section";
import { stackGroups } from "../data/stack";

const tints = ["bg-sage", "bg-butter", "bg-[#FFD9CC]", "bg-sage", "bg-butter"];

export default function Skills() {
  return (
    <Section id="skills" n="04" label="Stack" title="Con qué trabajo">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stackGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 50} className={i === 0 ? "sm:col-span-2" : ""}>
            <div className={`h-full rounded-[28px] p-6 ${tints[i]}`}>
              <h3 className="font-display font-bold text-xl mb-4">{g.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li key={t.title} className="inline-flex items-center gap-2 rounded-full bg-paper/80 border border-forest/10 px-3.5 py-1.5 text-sm font-medium hover:-translate-y-0.5 hover:bg-paper transition">
                    {t.path && (
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-forest"><path d={t.path} /></svg>
                    )}
                    {t.title}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
