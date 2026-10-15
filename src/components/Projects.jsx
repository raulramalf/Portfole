import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import GithubIcon from "./GithubIcon";
import MediaGallery from "./MediaGallery";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-28">
      <div className="max-w-[1200px] mx-auto">
        <SectionTitle index="04" label="Proyecto" title="Proyecto personal" className="mb-14">
          Lo que construyo fuera del trabajo, con su código abierto.
        </SectionTitle>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <Reveal key={p.name}>
              <article className="tile p-5 md:p-7 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="flex flex-col justify-center py-2 lg:pl-3">
                  <span className="chip w-fit mb-5 !text-accent !border-accent/30">{p.tag}</span>
                  <h3 className="serif text-5xl md:text-6xl mb-4">{p.name}</h3>
                  <p className="text-muted text-base leading-relaxed mb-6">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.stack.map((t) => <span key={t} className="chip">{t}</span>)}
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
                  <div className="rounded-2xl border border-line bg-base/70 overflow-hidden min-w-0">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line text-xs text-subtle">
                      <span className="flex gap-1.5"><i className="w-2 h-2 rounded-full bg-line-strong" /><i className="w-2 h-2 rounded-full bg-line-strong" /><i className="w-2 h-2 rounded-full bg-accent/70" /></span>
                      <span className="truncate font-mono ml-2">{p.file}</span>
                      <span className="ml-auto uppercase">{p.lang}</span>
                    </div>
                    <pre className="p-4 text-xs leading-relaxed text-ivory/90 overflow-x-auto font-mono"><code>{p.code}</code></pre>
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
