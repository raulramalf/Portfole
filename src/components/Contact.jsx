import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Section from "./Section";

const EMAIL = "raulramalf@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const rows = [
    ["LinkedIn", "linkedin.com/in/raul-ramírezalfaro", "https://www.linkedin.com/in/raul-ram%C3%ADrezalfaro-539433275"],
    ["GitHub", "github.com/raulramalf", "https://github.com/raulramalf"],
    ["Teléfono", "+34 665 50 32 51", "tel:665503251"],
  ];

  return (
    <>
      <Section id="contacto" title="Contacto" alt>
        <p className="text-lg leading-relaxed max-w-2xl">
          Estoy en búsqueda activa de oportunidades como desarrollador de software en Sevilla y alrededores
          (presencial, híbrida o remota).
        </p>

        <dl className="mt-8 border-t border-line">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 py-4 border-b border-line items-center">
            <dt className="text-faint text-sm">Email</dt>
            <dd className="sm:col-span-3 flex flex-wrap items-center gap-3">
              <a href={`mailto:${EMAIL}`} className="font-medium text-navy hover:underline">{EMAIL}</a>
              <button onClick={copy} className="btn btn-outline !py-1.5 !px-3 text-xs">
                {copied ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar</>}
              </button>
              <span className="sr-only" role="status">{copied ? "Email copiado al portapapeles" : ""}</span>
            </dd>
          </div>
          {rows.map(([k, label, href]) => (
            <div key={k} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 py-4 border-b border-line">
              <dt className="text-faint text-sm">{k}</dt>
              <dd className="sm:col-span-3">
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-navy hover:underline break-all">{label}</a>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <footer className="px-6 py-8 border-t border-line">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-faint">
          <p>© {new Date().getFullYear()} Raúl Ramírez Alfaro</p>
          <p>Sevilla, España</p>
        </div>
      </footer>
    </>
  );
}
