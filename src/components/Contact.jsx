import { useState } from "react";
import { Copy, Check, Phone, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import GithubIcon from "./GithubIcon";

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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raul-ram%C3%ADrezalfaro-539433275", icon: ArrowUpRight },
    { label: "GitHub", href: "https://github.com/raulramalf", icon: GithubIcon },
    { label: "+34 665 50 32 51", href: "tel:665503251", icon: Phone },
  ];

  return (
    <section id="contacto" className="px-6 md:px-12 pt-24 pb-10">
      <div className="max-w-4xl">
        <Reveal>
          <div className="rounded-[36px] bg-coral text-white p-8 md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80 mb-4">06 — Contacto</p>
            <h2 className="font-display font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl mb-6">¿Trabajamos juntos?</h2>
            <p className="text-white/90 text-lg max-w-xl leading-relaxed mb-8">
              Busco oportunidades como desarrollador de software en Sevilla y alrededores (presencial, híbrido o remoto).
            </p>

            <a href={`mailto:${EMAIL}`} className="block font-display font-semibold text-2xl sm:text-3xl md:text-4xl break-all underline decoration-white/40 underline-offset-8 hover:decoration-white transition mb-6">
              {EMAIL}
            </a>

            <div className="flex flex-wrap gap-3">
              <button onClick={copy} className="btn bg-white text-forest hover:bg-cream">
                {copied ? <><Check size={16} /> ¡Copiado!</> : <><Copy size={16} /> Copiar email</>}
              </button>
              {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                   className="btn border-[1.5px] border-white/60 hover:bg-white hover:text-forest">
                  <Icon size={14} /> {label}
                </a>
              ))}
              <span className="sr-only" role="status">{copied ? "Email copiado al portapapeles" : ""}</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2 text-xs text-moss">
          <p>© {new Date().getFullYear()} Raúl Ramírez Alfaro</p>
          <p>Sevilla, España</p>
        </div>
      </div>
    </section>
  );
}
