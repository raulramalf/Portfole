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
    <section id="contacto" className="px-6 pt-28 pb-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <p className="eyebrow mb-6"><span className="text-subtle mr-3">06</span>Contacto</p>
          <h2 className="display !text-[clamp(2.5rem,8vw,6rem)]">
            ¿Hablamos de <em className="text-accent">tu equipo</em>?
          </h2>
          <p className="text-muted text-lg max-w-xl mt-6 leading-relaxed">
            Busco oportunidades como desarrollador de software en Sevilla y alrededores (presencial, híbrido o remoto).
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <a href={`mailto:${EMAIL}`} className="serif text-3xl md:text-5xl break-all border-b border-accent/40 hover:border-accent transition-colors w-fit">
              {EMAIL}
            </a>
            <button onClick={copy} className="btn btn-fill w-fit">
              {copied ? <><Check size={16} /> ¡Copiado!</> : <><Copy size={16} /> Copiar email</>}
            </button>
            <span className="sr-only" role="status">{copied ? "Email copiado al portapapeles" : ""}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="btn btn-line">
                <Icon size={14} /> {label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-24 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2 text-xs text-subtle">
          <p>© {new Date().getFullYear()} Raúl Ramírez Alfaro</p>
          <p>Sevilla, España</p>
        </div>
      </div>
    </section>
  );
}
