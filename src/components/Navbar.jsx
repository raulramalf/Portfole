import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "sobre-mi", href: "#sobre-mi" },
  { label: "experiencia", href: "#experiencia" },
  { label: "stack", href: "#skills" },
  { label: "proyectos", href: "#proyectos" },
  { label: "github", href: "#github" },
  { label: "blog", href: "#blog" },
  { label: "contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-3 border-b border-neon/20" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-sm font-bold text-neon">
          raul@portfolio<span className="text-subtle">:~$</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-xs">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted hover:text-neon transition-colors">
              ./{l.label}
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-neon" aria-label="Abrir menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-neon/20 px-6 py-5 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-neon">
              ./{l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
