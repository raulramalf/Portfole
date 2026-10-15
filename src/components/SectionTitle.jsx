import Reveal from "./Reveal";

export default function SectionTitle({ index, label, title, children, className = "" }) {
  return (
    <Reveal className={className}>
      <p className="eyebrow mb-4">
        <span className="text-subtle mr-3">{index}</span>{label}
      </p>
      <h2 className="heading">{title}</h2>
      {children && <p className="text-muted text-base mt-5 max-w-md leading-relaxed">{children}</p>}
    </Reveal>
  );
}
