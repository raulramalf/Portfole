import { stackGroups } from "../data/stack";

const items = stackGroups.flatMap((g) => g.items);

function Row() {
  return items.map((t, i) => (
    <span key={t} className="flex items-center gap-8 pr-8 whitespace-nowrap">
      <span className={`mega text-5xl md:text-7xl uppercase ${i % 2 ? "outline-text" : ""}`}>{t}</span>
      <span className="w-3 h-3 bg-accent rotate-45 shrink-0" />
    </span>
  ));
}

export default function Marquee() {
  return (
    <div className="marquee relative z-10 bg-base py-6" aria-label="Tecnologías con las que trabajo">
      <div className="marquee-track" aria-hidden="true">
        <Row />
        <span className="marquee-dup flex"><Row /></span>
      </div>
    </div>
  );
}
