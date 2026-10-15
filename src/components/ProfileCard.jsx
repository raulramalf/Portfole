import { useState } from "react";
import { Copy, Check, MapPin, Mail, Phone } from "lucide-react";
import GithubIcon from "./GithubIcon";

const EMAIL = "raulramalf@gmail.com";

export default function ProfileCard() {
  const [photo, setPhoto] = useState("/profile.jpg");
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
    { icon: MapPin, text: "Sevilla, España", sub: "Presencial, híbrida o remota" },
    { icon: Phone, text: "+34 665 50 32 51", href: "tel:665503251" },
    { icon: GithubIcon, text: "github.com/raulramalf", href: "https://github.com/raulramalf" },
  ];

  return (
    <aside id="contacto" className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-lg border border-line bg-panel overflow-hidden">
        <div className="aspect-square bg-raised overflow-hidden">
          <img src={photo} onError={() => setPhoto("/avatar.svg")} alt="Raúl Ramírez Alfaro" className="w-full h-full object-cover object-[center_20%] scale-[1.2]" />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold tracking-tight">Raúl Ramírez Alfaro</h2>
          <p className="text-sm text-muted mt-1">Desarrollador de software</p>

          <ul className="mt-6 space-y-3 text-sm">
            {rows.map(({ icon: Icon, text, sub, href }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={16} className="mt-0.5 text-faint shrink-0" />
                <div className="min-w-0">
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-accent break-all">{text}</a>
                  ) : <p>{text}</p>}
                  {sub && <p className="text-faint text-xs mt-0.5">{sub}</p>}
                </div>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-faint shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent break-all">{EMAIL}</a>
            </li>
          </ul>

          <div className="mt-6 grid grid-cols-1 gap-2">
            <button onClick={copy} className="btn btn-primary">
              {copied ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar email</>}
            </button>
            <a href="https://www.linkedin.com/in/raul-ram%C3%ADrezalfaro-539433275" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          </div>
          <span className="sr-only" role="status">{copied ? "Email copiado al portapapeles" : ""}</span>
        </div>
      </div>
    </aside>
  );
}
