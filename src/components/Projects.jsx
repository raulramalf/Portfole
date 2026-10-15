import { ExternalLink } from "lucide-react";
import Section from "./Section";
import GithubIcon from "./GithubIcon";
import MediaGallery from "./MediaGallery";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyecto personal">
      <div className="space-y-8">
        {projects.map((p) => (
          <article key={p.name} className="border border-line bg-panel rounded-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-sm text-faint mb-2">{p.tag}</p>
              <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
              <p className="text-muted mt-3 leading-relaxed max-w-2xl">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-primary">{p.hrefLabel} <ExternalLink size={14} /></a>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline"><GithubIcon size={14} /> Código en GitHub</a>
                )}
              </div>
            </div>

            <div className="border-t border-line bg-base/50 p-4 md:p-6">
              {p.media?.length ? (
                <MediaGallery media={p.media} name={p.name} />
              ) : (
                <div className="rounded border border-line bg-base overflow-hidden min-w-0">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-line text-xs text-faint">
                    <span className="font-mono truncate">{p.file}</span>
                    <span className="uppercase">{p.lang}</span>
                  </div>
                  <pre className="p-4 text-xs leading-relaxed overflow-x-auto font-mono"><code>{p.code}</code></pre>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
