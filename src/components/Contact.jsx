import { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
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
    <section id="contacto" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle cmd="./contactar.sh" title="¿Hablamos?">
          Busco oportunidades como desarrollador de software en Sevilla y alrededores (presencial, híbrido o remoto).
        </SectionTitle>

        <Reveal>
          <div className="rounded-lg border border-neon/30 bg-black p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-[0_0_40px_-12px_rgba(57,255,20,0.4)]">
            <Mail size={20} className="text-neon shrink-0 hidden sm:block" />
            <code className="flex-1 text-neon text-base md:text-lg break-all">{EMAIL}</code>
            <button onClick={copy}
              className="px-5 py-2.5 bg-neon text-black font-semibold text-sm rounded-md flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] transition">
              {copied ? <><Check size={16} /> ¡Copiado!</> : <><Copy size={16} /> Copiar email</>}
            </button>
            <span className="sr-only" role="status">{copied ? "Email copiado al portapapeles" : ""}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                 className="px-4 py-2 text-xs rounded-md border border-neon/25 text-muted hover:text-neon hover:border-neon transition flex items-center gap-2">
                <Icon size={14} /> {label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 pt-6 border-t border-neon/15 flex flex-col sm:flex-row justify-between gap-2 text-xs text-subtle">
          <p>© {new Date().getFullYear()} Raúl Ramírez Alfaro</p>
          <p>Sevilla, España</p>
        </div>
      </div>
    </section>
  );
}
