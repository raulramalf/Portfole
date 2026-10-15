import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Perfil", href: "#perfil" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyecto", href: "#proyectos" },
  { label: "Habilidades", href: "#skills" },
  { label: "Formación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-5xl mx-auto h-16 px-6 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">Raúl Ramírez Alfaro</a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-navy transition-colors">{l.label}</a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Abrir menú" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 py-3 flex flex-col text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2.5 text-muted hover:text-navy">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
