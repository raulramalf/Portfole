import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const ROLE = "Desarrollador de Software y Automatizador de procesos con IA";

export default function Hero() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduced ? ROLE.length : 0);

  useEffect(() => {
    if (n >= ROLE.length) return;
    const t = setTimeout(() => setN(n + 1), 40);
    return () => clearTimeout(t);
  }, [n]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
      <div className="w-16 h-16 rounded-3xl bg-ink text-white flex items-center justify-center text-xl fw-652 mb-8" aria-hidden="true">
        RR
      </div>

      <h1 className="display max-w-4xl">Raúl Ramírez Alfaro</h1>

      <p className="mt-6 text-lg md:text-xl fw-440 text-graphite max-w-xl min-h-[3.5rem] md:min-h-[3rem] leading-relaxed" aria-label={ROLE}>
        <span aria-hidden="true">{ROLE.slice(0, n)}</span>
        {n < ROLE.length && <span className="cursor-blink text-ink" aria-hidden="true">|</span>}
      </p>

      <p className="mt-2 text-sm text-ash fw-440">Sevilla · presencial, híbrido o remoto</p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#proyectos" className="btn btn-fill">Ver proyectos <ArrowRight size={16} /></a>
        <a href="#contacto" className="btn btn-line">Contactar</a>
      </div>
    </section>
  );
}
