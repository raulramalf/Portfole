import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Perfil", id: "sobre-mi" },
  { label: "Experiencia", id: "experiencia" },
  { label: "Stack", id: "skills" },
  { label: "Proyecto", id: "proyectos" },
  { label: "Formación", id: "educacion" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [...links.map((l) => l.id), "contacto"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const cls = (id) =>
    `px-3.5 py-1.5 rounded-full text-sm transition-colors ${active === id ? "bg-accent-soft text-accent" : "text-muted hover:text-ivory"}`;

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-fit rounded-3xl lg:rounded-full border border-line bg-panel/70 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2 p-1.5 pl-5">
          <a href="#" className="serif text-xl mr-4 lg:mr-6">Raúl<span className="text-accent">.</span></a>

          <nav className="hidden lg:flex items-center">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={cls(l.id)}>{l.label}</a>
            ))}
          </nav>

          <a href="#contacto" className="hidden lg:inline-flex btn btn-fill !py-1.5 ml-2">Contacto</a>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 mr-1 text-ivory" aria-label="Abrir menú" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden flex flex-col gap-1 px-3 pb-4 pt-1 min-w-[220px]">
            {[...links, { label: "Contacto", id: "contacto" }].map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={cls(l.id)}>{l.label}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
