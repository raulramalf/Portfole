import Section from "./Section";
import { stackGroups } from "../data/stack";

export default function Skills() {
  return (
    <Section id="skills" title="Habilidades">
      <dl className="space-y-5">
        {stackGroups.map((g) => (
          <div key={g.name}>
            <dt className="text-sm font-medium mb-2">{g.name}</dt>
            <dd className="flex flex-wrap gap-2">
              {g.items.map((t) => <span key={t} className="tag">{t}</span>)}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
