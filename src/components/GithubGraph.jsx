import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import GithubIcon from "./GithubIcon";

const USER = "raulramalf";

export default function GithubGraph() {
  const [failed, setFailed] = useState(false);

  return (
    <section id="github" className="px-6 py-20 bg-mist">
      <div className="max-w-[1280px] mx-auto">
        <SectionTitle label="GitHub" title="Actividad de contribuciones" />
        <Reveal>
          <div className="rounded-3xl border border-fog bg-white p-6 overflow-x-auto">
            {failed ? (
              <p className="text-graphite text-sm">No se pudo cargar el gráfico. Míralo directamente en GitHub.</p>
            ) : (
              <img
                src={`https://ghchart.rshah.org/141414/${USER}`}
                alt={`Gráfico de contribuciones de GitHub de ${USER}`}
                loading="lazy"
                onError={() => setFailed(true)}
                className="min-w-[640px] w-full"
              />
            )}
          </div>
          <a href={`https://github.com/${USER}`} target="_blank" rel="noreferrer" className="btn btn-line mt-5">
            <GithubIcon size={14} /> github.com/{USER}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
