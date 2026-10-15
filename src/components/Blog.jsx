import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { posts } from "../data/projects";

export default function Blog() {
  return (
    <section id="blog" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle cmd="ls ./blog" title="Blog">
          Notas técnicas sobre decisiones de diseño de mis proyectos.
        </SectionTitle>
        <ul className="divide-y divide-neon/15 border-y border-neon/15">
          {posts.map((p, i) => (
            <li key={p.href}>
              <Reveal delay={i * 80}>
                <a href={p.href} target="_blank" rel="noreferrer"
                   className="group flex items-start gap-4 py-5 px-2 hover:bg-neon/5 transition">
                  <span className="text-subtle text-xs pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-100 group-hover:text-neon font-semibold transition">{p.title}</h3>
                    <p className="text-muted text-xs mt-1">{p.summary}</p>
                    <div className="flex gap-2 mt-2">
                      {p.tags.map((t) => <span key={t} className="text-[11px] text-neon/80">#{t}</span>)}
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-subtle group-hover:text-neon transition shrink-0 mt-1" />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
