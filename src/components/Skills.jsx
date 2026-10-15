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
    <section id="skills" className="px-6 py-20">
      <div className="max-w-[1280px] mx-auto">
        <SectionTitle label="Tech stack" title="Herramientas con las que trabajo">
          También: DynamoDB, OpenAI API y prompt engineering.
        </SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {stack.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 8) * 30}>
              <div className="aspect-square flex flex-col items-center justify-center gap-3 rounded-2xl border border-fog bg-white hover:border-ink transition-colors">
                <svg viewBox="0 0 24 24" role="img" aria-label={t.title} className="w-8 h-8 fill-ink">
                  <path d={t.path} />
                </svg>
                <span className="text-xs fw-440 text-graphite text-center px-1">{t.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
