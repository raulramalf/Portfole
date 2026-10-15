import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import GithubIcon from "./GithubIcon";
import { projects } from "../data/projects";

function ProjectLink({ href, children, className }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>;
}

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle cmd="ls ./proyectos" title="Proyectos">
          Mi proyecto personal, con un fragmento real de su código.
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.name} className={p.featured ? "lg:col-span-2" : ""}>
              <Reveal delay={(i % 2) * 80} className="h-full">
                <article className={`h-full flex flex-col rounded-lg border bg-slate-surface/80 overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_0_30px_-8px_rgba(57,255,20,0.4)] ${p.featured ? "border-neon/50" : "border-neon/15 hover:border-neon/50"}`}>
                  <div className={`grid grid-cols-1 ${p.featured ? "lg:grid-cols-2" : ""} flex-1`}>
                    <div className="p-6 flex flex-col">
                      <span className="text-[11px] text-neon mb-3">[{p.tag}]</span>
                      <h3 className="font-bold text-xl text-slate-50 mb-2">{p.name}</h3>
                      <p className="text-muted text-xs leading-relaxed mb-5 flex-1">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {p.stack.map((t) => (
                          <span key={t} className="text-[11px] text-neon/90 border border-neon/25 px-2 py-0.5 rounded">{t}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-5 text-xs pt-4 border-t border-neon/10">
                        <ProjectLink href={p.href} className="text-neon hover:underline flex items-center gap-1.5">
                          {p.hrefLabel} <ExternalLink size={13} />
                        </ProjectLink>
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer" className="text-muted hover:text-neon flex items-center gap-1.5">
                            <GithubIcon size={13} /> Código
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="bg-black border-t lg:border-t-0 lg:border-l border-neon/15 min-w-0">
                      <div className="flex items-center gap-2 px-4 py-2 border-b border-neon/10 text-[11px] text-subtle">
                        <span className="w-2 h-2 rounded-full bg-neon/70" />
                        <span className="truncate">{p.file}</span>
                        <span className="ml-auto uppercase">{p.lang}</span>
                      </div>
                      <pre className="p-4 text-[11px] leading-relaxed text-neon/85 overflow-x-auto"><code>{p.code}</code></pre>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
