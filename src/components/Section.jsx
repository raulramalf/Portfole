import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

export default function Section({ id, n, label, title, children, className = "" }) {
  return (
    <section id={id} className={`relative px-5 sm:px-6 py-20 md:py-36 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="label mb-6">{n} — {label}</p>
        </Reveal>
        <h2 className="mega text-[clamp(2.25rem,11.5vw,6rem)] mb-12 md:mb-20">
          <WordReveal text={title} />
        </h2>
        {children}
      </div>
    </section>
  );
}
