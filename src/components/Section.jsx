import Reveal from "./Reveal";

export default function Section({ id, title, children, alt = false }) {
  return (
    <section id={id} className={`px-6 py-20 ${alt ? "bg-surface border-y border-line" : ""}`}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-8">
        <Reveal className="md:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-navy md:sticky md:top-24">{title}</h2>
        </Reveal>
        <div className="md:col-span-9 min-w-0">{children}</div>
      </div>
    </section>
  );
}
