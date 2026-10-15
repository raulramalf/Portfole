import Reveal from "./Reveal";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-12">
      <Reveal>
        <h2 className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-8">
          {title}
          <span className="h-px flex-1 bg-line" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
