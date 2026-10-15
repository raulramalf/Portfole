import Reveal from "./Reveal";

export default function SectionTitle({ cmd, title, children }) {
  return (
    <Reveal>
      <p className="font-mono text-sm text-neon mb-2">
        <span className="text-subtle">$</span> {cmd}
      </p>
      <h2 className="font-bold text-2xl md:text-4xl text-slate-50 mb-3">{title}</h2>
      {children && <p className="text-muted text-sm mb-10 max-w-2xl">{children}</p>}
    </Reveal>
  );
}
