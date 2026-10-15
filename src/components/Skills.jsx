import {
  siOpenjdk, siPython, siPhp, siNodedotjs, siSpringboot, siFastapi, siLaravel, siSymfony,
  siReact, siJavascript, siTailwindcss, siHtml5, siCss, siPostgresql, siMysql, siDocker,
  siGit, siGithub, siOdoo, siN8n, siMake, siLangchain,
} from "simple-icons";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const stack = [
  siOpenjdk, siPython, siPhp, siNodedotjs, siSpringboot, siFastapi, siLaravel, siSymfony,
  siReact, siJavascript, siTailwindcss, siHtml5, siCss, siPostgresql, siMysql, siDocker,
  siGit, siGithub, siOdoo, siN8n, siMake, siLangchain,
].map((i) => ({ ...i, title: i.title === "OpenJDK" ? "Java" : i.title }));

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle cmd="cat stack.json" title="Tech stack">
          Lenguajes, frameworks y herramientas con los que trabajo. También: DynamoDB, OpenAI API y prompt engineering.
        </SectionTitle>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {stack.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 8) * 40}>
              <div className="group aspect-square flex flex-col items-center justify-center gap-2 rounded-lg border border-neon/15 bg-slate-surface/70 hover:border-neon hover:shadow-[0_0_20px_-4px_rgba(57,255,20,0.5)] transition">
                <svg viewBox="0 0 24 24" role="img" aria-label={t.title} className="w-8 h-8 fill-muted group-hover:fill-[#39FF14] transition">
                  <path d={t.path} />
                </svg>
                <span className="text-[10px] text-muted group-hover:text-neon text-center px-1">{t.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
