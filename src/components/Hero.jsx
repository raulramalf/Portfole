import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { stack } from "../data/stack";
import { projects } from "../data/projects";

const ROLE = "Desarrollador de Software y Automatizador de procesos con IA";

export default function Hero() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduced ? ROLE.length : 0);

  useEffect(() => {
    if (n >= ROLE.length) return;
    const t = setTimeout(() => setN(n + 1), 38);
    return () => clearTimeout(t);
  }, [n]);

  const featured = projects[0];

  return (
    <section className="min-h-screen px-6 pt-32 pb-20 flex items-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <Reveal>
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Disponible · Sevilla
          </p>
          <h1 className="display">
            Raúl Ramírez<br /><em className="text-accent">Alfaro</em>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl min-h-[3.5rem] leading-relaxed" aria-label={ROLE}>
            <span aria-hidden="true">{ROLE.slice(0, n)}</span>
            {n < ROLE.length && <span className="cursor-blink text-accent" aria-hidden="true">|</span>}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn btn-fill">Ver proyecto <ArrowRight size={16} /></a>
            <a href="#contacto" className="btn btn-line">Contactar</a>
          </div>
        </Reveal>

        {/* Bento */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-3">
          <Reveal delay={80} className="md:col-span-7">
            <a href={featured.href} target="_blank" rel="noreferrer" className="tile group h-full p-7 flex flex-col justify-between min-h-[200px] block">
              <div className="flex items-start justify-between">
                <span className="eyebrow">Proyecto destacado</span>
                <ArrowUpRight className="text-subtle group-hover:text-accent transition-colors" size={20} />
              </div>
              <div className="mt-8">
                <h3 className="serif text-4xl mb-2">{featured.name}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-md">
                  Análisis SEO de una web con reglas deterministas; la IA local solo explica lo detectado.
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={140} className="md:col-span-5">
            <div className="tile h-full p-7 flex flex-col justify-between min-h-[200px]">
              <span className="eyebrow">Modalidad</span>
              <div className="mt-8">
                <p className="serif text-3xl leading-tight">Presencial, híbrido<br />o remoto</p>
                <p className="text-muted text-sm mt-2">Búsqueda activa en Sevilla y alrededores</p>
              </div>
            </div>
          </Reveal>

          {[
            { k: String(stack.length), v: "tecnologías en mi stack" },
            { k: "37", v: "reglas SEO deterministas en BrowseMe" },
            { k: "5", v: "meses desarrollando módulos para Odoo ERP" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={200 + i * 60} className="md:col-span-4">
              <div className="tile h-full p-6">
                <p className="serif text-5xl text-accent">{s.k}</p>
                <p className="text-muted text-sm mt-2">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
