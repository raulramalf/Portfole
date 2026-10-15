import { useState } from "react";
import { Mail } from "lucide-react";

const facts = [
  ["Ubicación", "Sevilla, España"],
  ["Modalidad", "Presencial, híbrida o remota"],
  ["Idiomas", "Español (nativo), inglés (profesional)"],
];

export default function Hero() {
  const [photo, setPhoto] = useState("/profile.jpg");

  return (
    <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-8">
          <p className="text-sm font-medium text-navy mb-4">Desarrollador de software · Automatización de procesos con IA</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">Raúl Ramírez Alfaro</h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            Desarrollador con experiencia en entornos backend y frontend, principalmente con Java, PHP, Python y Node.js.
            Me centro en escribir código mantenible y en aplicar buenas prácticas de arquitectura. Actualmente busco
            oportunidades como desarrollador de software en Sevilla y alrededores.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" className="btn btn-primary"><Mail size={16} /> Contactar</a>
            <a href="#proyectos" className="btn btn-outline">Ver proyecto</a>
          </div>

          <dl className="mt-12 border-t border-line">
            {facts.map(([k, v]) => (
              <div key={k} className="flex gap-6 py-3 border-b border-line text-sm">
                <dt className="w-28 shrink-0 text-faint">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-4">
          <div className="aspect-[4/5] overflow-hidden rounded-md border border-line bg-surface">
            <img src={photo} onError={() => setPhoto("/avatar.svg")} alt="Raúl Ramírez Alfaro" className="w-full h-full object-cover object-[center_20%] scale-[1.2]" />
          </div>
        </div>
      </div>
    </section>
  );
}
