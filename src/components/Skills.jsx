import { stack } from "../data/stack";
import SectionTitle from "./SectionTitle";

const half = Math.ceil(stack.length / 2);
const rows = [stack.slice(0, half), stack.slice(half)];

function Item({ t }) {
  return (
    <div className="group flex items-center gap-3 rounded-full border border-line bg-panel/70 backdrop-blur px-5 py-3 hover:border-accent/50 transition-colors">
      <svg viewBox="0 0 24 24" role="img" aria-label={t.title} className="w-5 h-5 fill-muted group-hover:fill-accent transition-colors">
        <path d={t.path} />
      </svg>
      <span className="text-sm text-muted group-hover:text-ivory transition-colors whitespace-nowrap">{t.title}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <SectionTitle index="03" label="Tech stack" title="Herramientas">
          También: DynamoDB, OpenAI API y prompt engineering.
        </SectionTitle>
      </div>

      <div className="space-y-3">
        {rows.map((row, r) => (
          <div key={r} className="marquee">
            <div className={`marquee-track ${r ? "reverse" : ""}`}>
              {row.map((t) => <Item key={t.slug} t={t} />)}
              {/* copia para el bucle continuo */}
              {row.map((t) => <div key={`d-${t.slug}`} className="marquee-dup" aria-hidden="true"><Item t={t} /></div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
