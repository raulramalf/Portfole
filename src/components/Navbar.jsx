import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Educación", href: "#educacion" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080C]/90 backdrop-blur-md py-3.5 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
        {/* Logo Profesional */}
        <a
          href="#"
          className="font-display text-base font-bold tracking-tight text-slate-100 hover:text-garnet-light transition flex items-center gap-2.5 group"
        >
          <span className="w-8 h-8 rounded-lg bg-garnet/20 border border-garnet/40 text-garnet-light flex items-center justify-center font-mono text-xs font-bold group-hover:bg-garnet group-hover:text-white transition-all">
            RR
          </span>
          <span className="flex items-center gap-1">
            <span>Raúl Ramírez</span>
            <span className="w-1.5 h-1.5 rounded-full bg-garnet-light inline-block"></span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-slate-100 transition-colors relative py-1 group tracking-wide"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-garnet-light group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contacto"
            className="px-4 py-2 rounded-lg bg-garnet hover:bg-garnet-light text-white text-xs font-medium transition shadow-md shadow-garnet/20"
          >
            Hablemos
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-300 hover:text-garnet-light transition"
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#0C0E15]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 hover:text-garnet-light py-2 transition flex items-center justify-between font-medium"
            >
              <span>{link.label}</span>
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 w-full text-center py-3 bg-garnet hover:bg-garnet-light text-white text-xs font-medium rounded-lg transition shadow-md shadow-garnet/20"
          >
            Contactar
          </a>
        </div>
      )}
    </header>
  );
}