import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

export default function Section({ id, n, label, title, children, className = "" }) {
  return (
    <section id={id} className={`relative px-6 py-28 md:py-36 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="label mb-6">{n} — {label}</p>
        </Reveal>
        <h2 className="mega text-5xl md:text-7xl lg:text-8xl mb-16 md:mb-20">
          <WordReveal text={title} />
        </h2>
        {children}
      </div>
    </section>
  );
}
