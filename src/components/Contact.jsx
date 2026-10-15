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
    <section id="contacto" className="px-6 pt-20 pb-10 bg-mist">
      <div className="max-w-[1280px] mx-auto text-center">
        <Reveal>
          <p className="text-xs fw-440 uppercase tracking-widest text-ash mb-3">Contacto</p>
          <h2 className="heading-lg mb-4">¿Hablamos?</h2>
          <p className="text-graphite text-lg fw-440 max-w-xl mx-auto mb-10 leading-relaxed">
            Busco oportunidades como desarrollador de software en Sevilla y alrededores (presencial, híbrido o remoto).
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white border border-fog rounded-3xl sm:rounded-full p-3 sm:pl-6">
            <span className="text-base fw-456 break-all">{EMAIL}</span>
            <button onClick={copy} className="btn btn-fill">
              {copied ? <><Check size={16} /> ¡Copiado!</> : <><Copy size={16} /> Copiar email</>}
            </button>
            <span className="sr-only" role="status">{copied ? "Email copiado al portapapeles" : ""}</span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="btn btn-line">
                <Icon size={14} /> {label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 pt-6 border-t border-silver/50 flex flex-col sm:flex-row justify-between gap-2 text-xs text-graphite fw-440">
          <p>© {new Date().getFullYear()} Raúl Ramírez Alfaro</p>
          <p>Sevilla, España</p>
        </div>
      </div>
    </section>
  );
}
