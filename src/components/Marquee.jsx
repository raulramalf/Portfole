import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { stackGroups } from "../data/stack";

const items = stackGroups.flatMap((g) => g.items);

function Row() {
  return items.map((t, i) => (
    <span key={t} className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8 whitespace-nowrap">
      <span className={`mega text-4xl sm:text-5xl md:text-7xl uppercase ${i % 2 ? "outline-text" : ""}`}>{t}</span>
      <span className="w-3 h-3 bg-accent rotate-45 shrink-0" />
    </span>
  ));
}

export default function Marquee() {
  // Con «reducir movimiento» la marquesina sigue animándose (más lenta, ver index.css),
  // pero se ofrece un botón para pausarla (WCAG 2.2.2).
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);

  return (
    <div className="marquee relative z-10 bg-base py-6" data-paused={paused} aria-label="Tecnologías con las que trabajo">
      <div className="marquee-track" aria-hidden="true">
        <Row />
        <span className="marquee-dup flex"><Row /></span>
      </div>
      {reduced && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Reanudar la animación de tecnologías" : "Pausar la animación de tecnologías"}
          className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full border border-line bg-base/90 text-muted hover:text-accent hover:border-accent transition-colors"
        >
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}
