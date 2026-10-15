import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { posts } from "../data/projects";

export default function Blog() {
  return (
    <section id="blog" className="px-6 py-20">
      <div className="max-w-[1280px] mx-auto">
        <SectionTitle label="Blog" title="Notas técnicas">
          Decisiones de diseño de mis proyectos.
        </SectionTitle>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((p, i) => (
            <li key={p.href}>
              <Reveal delay={i * 80} className="h-full">
                <a href={p.href} target="_blank" rel="noreferrer"
                   className="group h-full flex flex-col rounded-2xl border border-fog bg-white p-6 hover:border-ink transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg fw-600 leading-snug">{p.title}</h3>
                    <ArrowUpRight size={18} className="shrink-0 text-ash group-hover:text-ink transition-colors" />
                  </div>
                  <p className="text-graphite text-sm fw-440 leading-relaxed flex-1">{p.summary}</p>
                  <div className="flex gap-2 mt-5">
                    {p.tags.map((t) => <span key={t} className="pill bg-mist text-xs fw-440 px-3 py-1">{t}</span>)}
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
