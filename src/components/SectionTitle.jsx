import Reveal from "./Reveal";

export default function SectionTitle({ label, title, children }) {
  return (
    <Reveal>
      <p className="text-xs fw-440 uppercase tracking-widest text-ash mb-3">{label}</p>
      <h2 className="heading-lg mb-4">{title}</h2>
      {children && <p className="text-graphite text-base fw-440 max-w-2xl mb-12 leading-relaxed">{children}</p>}
      {!children && <div className="mb-12" />}
    </Reveal>
  );
}
