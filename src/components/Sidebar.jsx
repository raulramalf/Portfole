import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import GithubIcon from "./GithubIcon";

const links = [
  { n: "01", label: "Inicio", id: "inicio" },
  { n: "02", label: "Proyecto", id: "proyectos" },
  { n: "03", label: "Experiencia", id: "experiencia" },
  { n: "04", label: "Stack", id: "skills" },
  { n: "05", label: "Formación", id: "educacion" },
  { n: "06", label: "Contacto", id: "contacto" },
];

export default function Sidebar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState("/profile.jpg");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const nav = (onClick) => (
    <nav className="flex flex-col gap-1">
      {links.map((l) => (
        <a key={l.id} href={`#${l.id}`} onClick={onClick}
           className={`group flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === l.id ? "bg-forest text-cream" : "hover:bg-forest/5"}`}>
          <span className={`text-xs ${active === l.id ? "text-coral" : "text-moss"}`}>{l.n}</span>
          {l.label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Móvil / tablet */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-cream/85 backdrop-blur border-b border-line">
        <div className="flex items-center justify-between px-5 h-14">
          <a href="#inicio" className="font-display font-bold text-lg">Raúl Ramírez<span className="text-coral">.</span></a>
          <button onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open} className="p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && <div className="px-4 pb-4">{nav(() => setOpen(false))}</div>}
      </header>

      {/* Escritorio */}
      <aside className="hidden lg:flex sticky top-0 h-screen flex-col justify-between p-8 border-r border-line bg-paper/60 backdrop-blur-sm">
        <div>
          <div className="w-28 h-28 rounded-[32px] overflow-hidden border-2 border-forest rotate-[-4deg] bg-sage mb-6">
            <img src={photo} onError={() => setPhoto("/avatar.svg")} alt="Raúl Ramírez Alfaro" className="w-full h-full object-cover object-[center_20%] scale-125" />
          </div>
          <p className="font-display font-bold text-3xl leading-none tracking-tight">Raúl Ramírez<br />Alfaro<span className="text-coral">.</span></p>
          <p className="text-sm text-moss mt-3 leading-relaxed">Desarrollador de software y automatizador de procesos con IA</p>
          <div className="mt-8">{nav()}</div>
        </div>

        <div className="flex items-center gap-2">
          <a href="mailto:raulramalf@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"><Mail size={16} /></a>
          <a href="https://github.com/raulramalf" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"><GithubIcon size={16} /></a>
          <span className="ml-auto text-xs text-moss">Sevilla · ES</span>
        </div>
      </aside>
    </>
  );
}
