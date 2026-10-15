import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Reveal from "./Reveal";
import { stackCount } from "../data/stack";

const ROLES = ["backend", "automatización con IA", "ERP Odoo", "full-stack"];

export default function Hero() {
  const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [i, setI] = useState(0);
  const [n, setN] = useState(reduced ? ROLES[0].length : 0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = ROLES[i];
    const t = setTimeout(() => {
      if (!del && n < word.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % ROLES.length); }
    }, !del && n === word.length ? 1400 : del ? 28 : 65);
    return () => clearTimeout(t);
  }, [n, del, i, reduced]);

  return (
    <section id="inicio" className="min-h-screen flex items-center px-6 md:px-12 pt-24 pb-16">
      <div className="max-w-3xl">
        <Reveal>
          <p className="kicker mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" /> Disponible · Sevilla y alrededores
          </p>
          <h1 className="title">
            Hola, soy Raúl.<br />
            Construyo software de{" "}
            <span className="relative inline-block text-coral">
              {ROLES[i].slice(0, n)}
              <span className="cursor-blink">|</span>
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-moss max-w-xl leading-relaxed">
            Desarrollador de software y automatizador de procesos con IA. Creo soluciones robustas, mantenibles y pensadas para reducir tareas repetitivas.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn btn-coral">Ver mi proyecto <ArrowDown size={16} /></a>
            <a href="#contacto" className="btn btn-line">Hablemos</a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <dl className="mt-16 grid grid-cols-3 gap-4 max-w-xl">
            {[
              [String(stackCount), "tecnologías"],
              ["37", "reglas SEO en BrowseMe"],
              ["5", "meses con Odoo ERP"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display font-bold text-4xl md:text-5xl tracking-tight">{k}</dt>
                <dd className="text-xs md:text-sm text-moss mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
