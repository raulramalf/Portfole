import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import GithubIcon from "./GithubIcon";
import MediaGallery from "./MediaGallery";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="proyectos" n="02" label="Proyecto" title="Lo que construyo fuera del trabajo">
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <Reveal key={p.name}>
            <article className="rounded-[32px] bg-forest text-cream p-6 md:p-10 overflow-hidden relative">
              <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-coral/25 blur-3xl pointer-events-none" />
              <div className="relative">
                <span className="inline-block rounded-full bg-butter text-forest text-xs font-semibold px-3 py-1 mb-5">{p.tag}</span>
                <h3 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-5">{p.name}</h3>
                <p className="text-cream/75 text-base md:text-lg leading-relaxed max-w-2xl mb-6">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.stack.map((t) => <span key={t} className="rounded-full border border-cream/25 text-xs px-3 py-1">{t}</span>)}
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-coral">{p.hrefLabel} <ExternalLink size={14} /></a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn border-[1.5px] border-cream/40 hover:bg-cream hover:text-forest">
                      <GithubIcon size={14} /> Código
                    </a>
                  )}
                </div>

                {p.media?.length ? (
                  <div className="rounded-3xl bg-paper p-3 text-forest"><MediaGallery media={p.media} name={p.name} /></div>
                ) : (
                  <div className="rounded-2xl bg-black/30 border border-cream/10 overflow-hidden min-w-0">
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-cream/10 text-xs text-cream/50">
                      <span className="flex gap-1.5"><i className="w-2.5 h-2.5 rounded-full bg-coral" /><i className="w-2.5 h-2.5 rounded-full bg-butter" /><i className="w-2.5 h-2.5 rounded-full bg-sage" /></span>
                      <span className="truncate font-mono ml-2">{p.file}</span>
                      <span className="ml-auto uppercase">{p.lang}</span>
                    </div>
                    <pre className="p-4 text-xs leading-relaxed text-cream/90 overflow-x-auto font-mono"><code>{p.code}</code></pre>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
