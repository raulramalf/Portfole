import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import GithubIcon from "./GithubIcon";
import MediaGallery from "./MediaGallery";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-20 bg-mist">
      <div className="max-w-[1280px] mx-auto">
        <SectionTitle label="Proyectos" title="Proyecto personal">
          Lo que construyo fuera del trabajo, con su código abierto.
        </SectionTitle>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <Reveal key={p.name}>
              <article className="bg-white border border-fog rounded-3xl p-5 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                <div className="flex flex-col justify-center py-2 lg:pl-4">
                  <span className="pill bg-ink text-white text-xs fw-600 px-3 py-0.5 w-fit mb-4">{p.tag}</span>
                  <h3 className="text-3xl fw-652 tracking-tight mb-3">{p.name}</h3>
                  <p className="text-graphite text-base fw-440 leading-relaxed mb-6">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.stack.map((t) => (
                      <span key={t} className="pill border border-fog text-xs fw-440 px-3 py-1">{t}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-fill">
                      {p.hrefLabel} <ExternalLink size={14} />
                    </a>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-line">
                        <GithubIcon size={14} /> Código
                      </a>
                    )}
                  </div>
                </div>

                {p.media?.length ? (
                  <MediaGallery media={p.media} name={p.name} />
                ) : (
                  <div className="rounded-2xl border border-fog bg-mist overflow-hidden min-w-0">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-fog text-xs text-graphite">
                      <span className="truncate font-mono">{p.file}</span>
                      <span className="ml-auto uppercase">{p.lang}</span>
                    </div>
                    <pre className="p-4 text-xs leading-relaxed text-ink overflow-x-auto font-mono"><code>{p.code}</code></pre>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
