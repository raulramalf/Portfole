import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import GithubIcon from "./GithubIcon";

const USER = "raulramalf";

export default function GithubGraph() {
  const [failed, setFailed] = useState(false);

  return (
    <section id="github" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle cmd="git log --contributions" title="Actividad en GitHub" />
        <Reveal>
          <div className="rounded-lg border border-neon/20 bg-slate-surface/80 p-5 overflow-x-auto">
            {failed ? (
              <p className="text-muted text-sm">No se pudo cargar el gráfico. Míralo directamente en GitHub.</p>
            ) : (
              <img
                src={`https://ghchart.rshah.org/39ff14/${USER}`}
                alt={`Gráfico de contribuciones de GitHub de ${USER}`}
                loading="lazy"
                onError={() => setFailed(true)}
                className="min-w-[640px] w-full"
              />
            )}
          </div>
          <a href={`https://github.com/${USER}`} target="_blank" rel="noreferrer"
             className="mt-4 inline-flex items-center gap-2 text-xs text-neon hover:underline">
            <GithubIcon size={14} /> github.com/{USER}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
