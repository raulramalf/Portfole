import Reveal from "./Reveal";
import { Mail, Phone, MapPin, ArrowUpRight, MessageSquare } from "lucide-react";

function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Contact() {
  const contactItems = [
    {
      label: "Email Directo",
      value: "raulramalf@gmail.com",
      href: "mailto:raulramalf@gmail.com",
      icon: Mail,
      isExternal: false,
    },
    {
      label: "Perfil LinkedIn",
      value: "linkedin.com/in/raul-ramírezalfaro",
      href: "https://www.linkedin.com/in/raul-ram%C3%ADrezalfaro-539433275",
      icon: LinkedinIcon,
      isExternal: true,
    },
    {
      label: "Repositorio GitHub",
      value: "github.com/raulramalf",
      href: "https://github.com/raulramalf",
      icon: GithubIcon,
      isExternal: true,
    },
    {
      label: "Teléfono Móvil",
      value: "+34 665 50 32 51",
      href: "tel:665503251",
      icon: Phone,
      isExternal: false,
    },
  ];

  return (
    <section id="contacto" className="px-6 md:px-16 py-24 bg-[#07080C]/90 backdrop-blur-md relative">


      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Izquierdo */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-semibold text-garnet-light text-xs mb-3 px-3.5 py-1.5 rounded-full bg-garnet/10 border border-garnet/20 uppercase tracking-wider">
                <span>Contacto Directo</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-4">
                ¿Hablamos de tu próximo proyecto?
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8">
                Estoy en búsqueda activa de oportunidades laborales como desarrollador de software en <strong className="text-slate-200">Sevilla y alrededores</strong> (modalidad presencial, híbrida o remota). Si buscas incorporar a un desarrollador comprometido con la calidad y la mantenibilidad del código, escríbeme.
              </p>

              <div className="text-sm text-slate-300 font-medium p-4 rounded-xl bg-slate-surface/60 border border-white/10 w-fit">
                <span>Sevilla y Alrededores, España</span>
              </div>
            </Reveal>
          </div>

          {/* Lado Derecho: Tarjetas de Canales */}
          <div className="lg:col-span-6 space-y-4">
            {contactItems.map((item, i) => (
              <Reveal key={item.label} delay={100 + i * 80}>
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noreferrer" : ""}
                  className="p-5 rounded-xl bg-slate-surface/80 border border-white/5 hover:border-garnet/40 flex items-center justify-between transition-all duration-300 group shadow-lg hover:-translate-y-0.5"
                >
                  <div>
                    <p className="text-xs text-muted mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-slate-100 group-hover:text-garnet-light transition-colors">
                      {item.value}
                    </p>
                  </div>

                  <ArrowUpRight size={18} className="text-slate-500 group-hover:text-garnet-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </Reveal>
            ))}
          </div>


        </div>

        {/* Footer minimalista */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-muted gap-4">
          <p>© {new Date().getFullYear()} Raúl Ramírez Alfaro · Desarrollador de Software y Automatizador de procesos con IA</p>
          <p className="text-slate-400 font-medium">Sevilla, España</p>
        </div>
      </div>
    </section>
  );
}