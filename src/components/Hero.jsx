import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

function LinkedinIcon({ size = 18, className = "" }) {
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

export default function Hero() {
  const [photoSrc, setPhotoSrc] = useState("/profile.jpg");

  return (
    <section className="min-h-[88vh] lg:min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-28 pt-28 pb-16 relative">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Columna Izquierda: Información & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-garnet/10 border border-garnet/30 text-garnet-light text-xs font-semibold uppercase tracking-wider mb-6 w-fit shadow-sm">
              <span>Sevilla y Alrededores</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.08] mb-5 text-slate-50">
              Raúl Ramírez <span className="garnet-gradient-text">Alfaro</span>
            </h1>

            <h2 className="text-garnet-light text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 leading-snug">
              Desarrollador de Software y Automatizador de Procesos con IA
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-slate-300 max-w-2xl lg:max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed mb-4">
              Diseño y desarrollo soluciones de software a medida, especializándome en{" "}
              <strong className="text-slate-100 font-semibold">desarrollo backend/frontend y automatización inteligente de flujos de trabajo con IA</strong>.
            </p>
            <p className="text-muted max-w-2xl lg:max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed mb-8">
              Trabajo habitualmente con <strong className="text-slate-200 font-semibold">Java, Python, PHP, Node.js y React</strong>, optimizando operativas mediante integraciones con <strong className="text-slate-200 font-semibold">n8n y Make</strong>.
            </p>
          </Reveal>








          <Reveal delay={240}>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contacto"
                className="px-7 py-4 bg-garnet hover:bg-garnet-light text-white font-medium text-sm md:text-base rounded-xl shadow-lg shadow-garnet/25 hover:shadow-garnet/40 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Contactar ahora</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#proyectos"
                className="px-7 py-4 bg-slate-surface/80 hover:bg-slate-surface text-slate-200 border border-white/10 hover:border-garnet/40 font-medium text-sm md:text-base rounded-xl transition-all duration-300"
              >
                Ver proyectos
              </a>

              <a
                href="https://www.linkedin.com/in/raul-ram%C3%ADrezalfaro-539433275"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-slate-surface/50 hover:bg-slate-surface text-muted hover:text-white border border-white/10 hover:border-white/25 rounded-xl transition-all"
                title="LinkedIn"
                aria-label="Perfil de LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>

            {/* Badges de información limpia */}
            <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-muted">
              <div>
                <span>Modalidad Presencial, Híbrida o Remota</span>
              </div>
              <div>
                <span>Búsqueda activa de oportunidades</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Columna Derecha: Imagen de Perfil escalada y centrada */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <Reveal delay={180}>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg">
              
              {/* Resplandor granate oscuro de fondo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-garnet-dark via-garnet/40 to-garnet-dark rounded-3xl blur-md opacity-25 group-hover:opacity-45 transition duration-500" />
              
              {/* Contenedor integrado con borde en tono granate */}
              <div className="relative rounded-2xl overflow-hidden border border-garnet/40 shadow-[0_0_25px_rgba(158,27,50,0.2)] group bg-[#07080C]/60 backdrop-blur-sm">
                
                {/* Badge de disponibilidad flotante */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 bg-[#07080C]/85 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Disponible</span>
                </div>

                {/* Badge de ubicación flotante */}
                <div className="absolute top-3.5 right-3.5 z-10 bg-[#07080C]/85 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-garnet-light shadow-md">
                  Sevilla, ES
                </div>

                {/* Foto con brillo y color original */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
                  <img
                    src={photoSrc}
                    onError={() => setPhotoSrc("/avatar.svg")}
                    alt="Raúl Ramírez Alfaro"
                    className="w-full h-full object-cover object-[center_25%] scale-[1.28] transition-transform duration-700 group-hover:scale-[1.33]"
                  />
                  {/* Degradado fino en la base */}
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#07080C]/90 via-[#07080C]/40 to-transparent pointer-events-none" />
                </div>

                {/* Texto sobrepuesto en la parte inferior */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-center z-10">
                  <h3 className="text-base font-bold text-slate-100 drop-shadow-md">Raúl Ramírez Alfaro</h3>
                  <p className="text-xs md:text-sm text-garnet-light font-medium mt-0.5 drop-shadow-md">
                    Desarrollador de Software & Automatización IA
                  </p>
                </div>

              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>

  );
}