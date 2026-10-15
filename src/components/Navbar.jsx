import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Stack", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "GitHub", href: "#github" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled || open ? "bg-white/90 backdrop-blur border-b border-fog" : "bg-transparent"}`}>
      <div className="max-w-[1280px] mx-auto h-[60px] px-6 flex items-center justify-between">
        <a href="#" className="text-sm fw-600">Raúl Ramírez</a>

        <nav className="hidden lg:flex items-center gap-8 text-sm fw-440">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-graphite transition-colors">{l.label}</a>
          ))}
        </nav>

        <a href="#contacto" className="hidden lg:inline-flex btn btn-fill !py-1.5">Contactar</a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Abrir menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4 text-base fw-440">
          {[...links, { label: "Contacto", href: "#contacto" }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
