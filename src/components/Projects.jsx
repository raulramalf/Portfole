import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import GithubIcon from "./GithubIcon";
import MediaGallery from "./MediaGallery";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="proyectos" n="03" label="Proyectos" title="Proyectos">
      <div className="space-y-8">
        {projects.map((p) => (
          <Reveal key={p.name}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group rounded-2xl border border-line bg-panel overflow-hidden hover:border-accent/60 transition-colors"
            >
              <div className="p-5 sm:p-7 md:p-12">
                <div className="flex items-start justify-between gap-6 mb-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="label !text-muted">{p.tag}</span>
                    {p.private && <span className="tag !py-0.5 !text-xs">Código privado</span>}
                  </div>
                  <a href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.hrefLabel}: ${p.name}`}
                     className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-line flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-base transition-colors">
                    <ArrowUpRight size={22} className="group-hover:rotate-12 transition-transform" />
                  </a>
                </div>

                <h3 className="mega text-[clamp(2.5rem,13.5vw,8rem)] break-words">{p.name}</h3>
                <p className="text-muted text-base md:text-lg leading-relaxed mt-6 md:mt-8 max-w-2xl">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>

                <div className="flex flex-wrap gap-3 mt-10">
                  <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-primary">{p.hrefLabel} <ArrowUpRight size={16} /></a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline"><GithubIcon size={16} /> Código en GitHub</a>
                  )}
                </div>
              </div>

              {p.media?.length > 0 && (
                <div className="border-t border-line bg-base/60 p-3 sm:p-4 md:p-8">
                  <MediaGallery media={p.media} name={p.name} />
                </div>
              )}
              {(p.details?.length > 0 || p.notes) && (
                <div className="border-t border-line p-5 sm:p-7 md:p-12">
                  {p.details?.length > 0 && (
                    <>
                      <h4 className="label mb-6">Cómo está construido</h4>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
                        {p.details.map((d) => (
                          <div key={d.title}>
                            <dt className="font-semibold tracking-tight">{d.title}</dt>
                            <dd className="text-sm text-muted leading-relaxed mt-1.5">{d.text}</dd>
                          </div>
                        ))}
                      </dl>
                    </>
                  )}
                  {p.notes && <p className="text-xs text-faint mt-8">{p.notes}</p>}
                </div>
              )}
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
