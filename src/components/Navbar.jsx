import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "sobre-mi", href: "#sobre-mi" },
    { label: "experiencia", href: "#experiencia" },
    { label: "skills", href: "#skills" },
    { label: "proyectos", href: "#proyectos" },
    { label: "educacion", href: "#educacion" },
    { label: "contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-16 py-4 bg-ink/80 backdrop-blur-md border-b border-white/5 z-50">
      <span className="font-mono text-amber text-sm">raul@dev:~$</span>

      <div className="hidden md:flex gap-6 font-mono text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted hover:text-teal transition"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden font-mono text-teal text-sm"
        aria-label="Abrir menu"
      >
        {open ? "close" : "menu"}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-ink border-b border-white/5 flex flex-col md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3 font-mono text-sm text-muted hover:text-teal transition border-t border-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}