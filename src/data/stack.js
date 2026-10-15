import {
  siOpenjdk, siPython, siPhp, siNodedotjs, siSpringboot, siFastapi, siLaravel, siSymfony,
  siReact, siJavascript, siTailwindcss, siHtml5, siCss, siPostgresql, siMysql, siDocker,
  siGit, siGithub, siOdoo, siN8n, siMake, siLangchain,
} from "simple-icons";

const ic = (i, title = i.title) => ({ title, path: i.path });
const txt = (title) => ({ title }); // sin icono disponible en simple-icons

export const stackGroups = [
  { name: "Backend", items: [ic(siOpenjdk, "Java"), ic(siPython), ic(siPhp), ic(siNodedotjs), ic(siSpringboot), ic(siFastapi), ic(siLaravel), ic(siSymfony)] },
  { name: "Frontend", items: [ic(siReact), ic(siJavascript), ic(siTailwindcss), ic(siHtml5), ic(siCss)] },
  { name: "Datos", items: [ic(siPostgresql), ic(siMysql), txt("DynamoDB")] },
  { name: "Automatización e IA", items: [ic(siN8n), ic(siMake), ic(siLangchain), txt("OpenAI API"), txt("Prompt engineering")] },
  { name: "Herramientas", items: [ic(siOdoo), ic(siDocker), ic(siGit), ic(siGithub)] },
];

export const stackCount = stackGroups.reduce((n, g) => n + g.items.length, 0);
