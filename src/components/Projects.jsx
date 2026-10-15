import { useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Minus } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import GithubIcon from "./GithubIcon";
import MediaGallery from "./MediaGallery";
import { projects } from "../data/projects";

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const panelId = useId();
  const hasMore = p.media?.length > 0 || p.details?.length > 0 || p.notes;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    // Al minimizar, se vuelve al inicio de la tarjeta para no perder la posición.
    if (!next) ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.article
      ref={ref}
      whileHover={open ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group scroll-mt-24 rounded-2xl border border-line bg-panel overflow-hidden hover:border-accent/60 transition-colors"
    >
      <div className="p-5 sm:p-7 md:p-12">
        <div className="flex items-start justify-between gap-6 mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label !text-muted">{p.tag}</span>
            {p.private && <span className="tag !py-0.5 !text-xs">Código privado</span>}
          </div>
          <a href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.hrefLabel}: ${p.name}`}
             className="w-12 h-12 shrink-0 rounded-full border border-line flex items-center justify-center hover:bg-accent hover:border-accent hover:text-base transition-colors">
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:gap-12 items-center">
          <div className="min-w-0">
            <h3 className="mega text-[clamp(2.25rem,9.5vw,5.5rem)] break-words">{p.name}</h3>
            <p className="text-muted text-base md:text-lg leading-relaxed mt-5 md:mt-6 max-w-2xl">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-primary">{p.hrefLabel} <ArrowUpRight size={16} /></a>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline"><GithubIcon size={16} /> Código en GitHub</a>
              )}
              {hasMore && (
                <button type="button" onClick={toggle} aria-expanded={open} aria-controls={panelId} className="btn btn-outline">
                  {open ? "Menos detalles" : "Más detalles"}
                  <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>
          </div>

          {p.logo && (
            <div className="order-first md:order-last justify-self-start md:justify-self-end w-32 h-32 sm:w-44 sm:h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
              <img src={p.logo} alt={`Logo de ${p.name}`} width={256} height={256} className="w-full h-full object-contain" />
            </div>
          )}
        </div>
      </div>

      {hasMore && (
        <motion.div
          id={panelId}
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
          inert={!open}
        >
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

          <div className="border-t border-line px-5 sm:px-7 md:px-12 py-4">
            <button type="button" onClick={toggle} className="btn btn-outline !py-2 text-sm">
              <Minus size={16} /> Minimizar
            </button>
          </div>
        </motion.div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="proyectos" n="03" label="Proyectos" title="Proyectos">
      <div className="space-y-6 md:space-y-8">
        {projects.map((p) => (
          <Reveal key={p.name}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
