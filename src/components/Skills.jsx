import Section from "./Section";
import { stackGroups } from "../data/stack";

export default function Skills() {
  return (
    <Section id="skills" title="Habilidades" alt>
      <dl className="border-t border-line">
        {stackGroups.map((g) => (
          <div key={g.name} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 py-5 border-b border-line">
            <dt className="font-medium">{g.name}</dt>
            <dd className="sm:col-span-3 flex flex-wrap gap-2">
              {g.items.map((t) => <span key={t} className="tag">{t}</span>)}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
