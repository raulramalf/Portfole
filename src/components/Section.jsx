import Reveal from "./Reveal";

export default function Section({ id, n, label, title, children, className = "" }) {
  return (
    <section id={id} className={`px-6 md:px-12 py-24 ${className}`}>
      <div className="max-w-4xl">
        <Reveal>
          <p className="kicker mb-4">{n} — {label}</p>
          <h2 className="h2 mb-12">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
