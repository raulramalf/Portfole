import {
  siOpenjdk, siPython, siPhp, siNodedotjs, siSpringboot, siFastapi, siLaravel, siSymfony,
  siReact, siJavascript, siTailwindcss, siHtml5, siCss, siPostgresql, siMysql, siDocker,
  siGit, siGithub, siOdoo, siN8n, siMake, siLangchain,
} from "simple-icons";

export const stack = [
  siOpenjdk, siPython, siPhp, siNodedotjs, siSpringboot, siFastapi, siLaravel, siSymfony,
  siReact, siJavascript, siTailwindcss, siHtml5, siCss, siPostgresql, siMysql, siDocker,
  siGit, siGithub, siOdoo, siN8n, siMake, siLangchain,
].map((i) => ({ slug: i.slug, path: i.path, title: i.title === "OpenJDK" ? "Java" : i.title }));
