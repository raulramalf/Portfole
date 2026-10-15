import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Perfil", href: "#perfil" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#skills" },
  { label: "Formación", href: "#educacion" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !open);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 bg-base/80 backdrop-blur-md border-b border-line"
      >
        <div className="max-w-7xl mx-auto h-16 px-5 sm:px-6 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-lg py-2 pr-4">RR<span className="text-accent-text">.</span></a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="u-link py-2.5 hover:text-ink transition-colors">{l.label}</a>
            ))}
          </nav>

          <a href="#contacto" className="hidden md:inline-flex btn btn-primary !py-2.5">Contacto</a>

          <button onClick={() => setOpen(true)} className="md:hidden p-3 -mr-3" aria-label="Abrir menú"><Menu size={24} /></button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] bg-base flex flex-col"
          >
            <div className="h-16 px-6 flex items-center justify-between">
              <span className="font-extrabold text-lg">RR<span className="text-accent-text">.</span></span>
              <button onClick={() => setOpen(false)} className="p-3 -mr-3" aria-label="Cerrar menú"><X size={24} /></button>
            </div>
            <nav className="flex-1 px-6 flex flex-col justify-center gap-2">
              {[...links, { label: "Contacto", href: "#contacto" }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  className="mega text-[clamp(2.5rem,12vw,3.5rem)] py-2 hover:text-accent-text transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
