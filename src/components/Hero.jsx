import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const LINES = [
  { cmd: "whoami", out: "Raúl Ramírez Alfaro" },
  { cmd: "cat role.txt", out: "Desarrollador de Software y Automatizador de procesos con IA" },
  { cmd: "echo $STACK", out: "Java · Python · PHP · Node.js · React · n8n" },
  { cmd: "echo $LOCATION", out: "Sevilla, ES — presencial / híbrido / remoto" },
];

const TYPE_MS = 45;
const PAUSE_MS = 350;

export default function Hero() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  // `typed` = caracteres escritos en total sobre la secuencia de comandos
  const total = LINES.reduce((n, l) => n + l.cmd.length, 0);
  const [typed, setTyped] = useState(reduced ? total : 0);

  useEffect(() => {
    if (typed >= total) return;
    // Pausa más larga al terminar cada comando
    let acc = 0;
    const atEnd = LINES.some((l) => (acc += l.cmd.length) === typed);
    const t = setTimeout(() => setTyped((n) => n + 1), atEnd ? PAUSE_MS + TYPE_MS : TYPE_MS);
    return () => clearTimeout(t);
  }, [typed, total]);

  let remaining = typed;
  const rows = LINES.map((l) => {
    const n = Math.max(0, Math.min(l.cmd.length, remaining));
    remaining -= l.cmd.length;
    return { ...l, shown: l.cmd.slice(0, n), done: n === l.cmd.length };
  });
  const activeIdx = rows.findIndex((r) => !r.done);
  const finished = activeIdx === -1;

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-28 pb-16">
      <div className="max-w-4xl mx-auto w-full">
        <div className="rounded-lg border border-neon/30 bg-black shadow-[0_0_40px_-10px_rgba(57,255,20,0.35)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon/20 bg-slate-surface">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-neon/80" />
            <span className="ml-3 text-xs text-subtle">raul@portfolio: ~</span>
          </div>

          <div className="p-5 md:p-8 text-sm md:text-lg leading-relaxed min-h-[320px]" aria-label="Terminal de presentación">
            {rows.map((r, i) => {
              if (i > (activeIdx === -1 ? LINES.length : activeIdx)) return null;
              return (
                <div key={r.cmd} className="mb-3">
                  <p>
                    <span className="text-neon">raul@portfolio</span>
                    <span className="text-subtle">:~$ </span>
                    <span className="text-slate-100">{r.shown}</span>
                    {i === activeIdx && <span className="cursor-blink text-neon">█</span>}
                  </p>
                  {r.done && <p className="text-muted pl-1 break-words">{r.out}</p>}
                </div>
              );
            })}
            {finished && (
              <p>
                <span className="text-neon">raul@portfolio</span>
                <span className="text-subtle">:~$ </span>
                <span className="cursor-blink text-neon">█</span>
              </p>
            )}
          </div>
        </div>

        <div className={`mt-8 flex flex-wrap gap-4 transition-opacity duration-700 ${finished ? "opacity-100" : "opacity-0"}`}>
          <a href="#proyectos" className="px-6 py-3 bg-neon text-black font-semibold text-sm rounded-md hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition flex items-center gap-2">
            ./ver-proyectos <ArrowRight size={16} />
          </a>
          <a href="#contacto" className="px-6 py-3 border border-neon/40 text-neon text-sm rounded-md hover:bg-neon/10 transition">
            ./contactar
          </a>
        </div>
      </div>
    </section>
  );
}
