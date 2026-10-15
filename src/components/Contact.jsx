import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

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

  const links = [
    ["LinkedIn", "https://www.linkedin.com/in/raul-ram%C3%ADrezalfaro-539433275"],
    ["GitHub", "https://github.com/raulramalf"],
    ["+34 665 50 32 51", "tel:665503251"],
  ];

  return (
    <section id="contacto" className="relative px-6 pt-28 md:pt-40 pb-10 bg-accent text-base">
      <div className="max-w-7xl mx-auto">
        <p className="mono text-xs tracking-[0.14em] uppercase mb-6">06 — Contacto</p>
        <h2 className="mega text-[clamp(3.5rem,13vw,11rem)]">
          <span className="block"><WordReveal text="¿Hablamos?" /></span>
        </h2>

        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <p className="lg:col-span-5 text-lg md:text-xl font-medium leading-relaxed">
            Busco oportunidades como desarrollador de software en Sevilla y alrededores, en modalidad presencial, híbrida o remota.
          </p>
          <div className="lg:col-span-7">
            <a href={`mailto:${EMAIL}`} className="block text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight break-all border-b-4 border-base/30 hover:border-base transition-colors pb-2">
              {EMAIL}
            </a>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={copy} className="btn bg-base text-ink hover:bg-raised">
                {copied ? <><Check size={16} /> ¡Copiado!</> : <><Copy size={16} /> Copiar email</>}
              </button>
              {links.map(([label, href]) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                   className="btn border border-base/40 hover:bg-base hover:text-ink">
                  {label} {href.startsWith("http") && <ArrowUpRight size={14} />}
                </a>
              ))}
              <span className="sr-only" role="status">{copied ? "Email copiado al portapapeles" : ""}</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 pt-6 border-t border-base/25 flex flex-col sm:flex-row justify-between gap-2 text-xs mono">
          <p>© {new Date().getFullYear()} Raúl Ramírez Alfaro</p>
          <p>Sevilla, España</p>
        </div>
      </div>
    </section>
  );
}
