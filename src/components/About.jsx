import Reveal from "./Reveal";
import { ArrowUpRight, FileText } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Automatización & IA",
      description: "Flujos de trabajo inteligentes con n8n, Make y modelos de IA para optimizar la operativa empresarial.",
    },
    {
      title: "Desarrollo Full-Stack",
      description: "Aplicaciones digitales robustas y escalables creadas con Java, Python, PHP, Node.js y React.",
    },
    {
      title: "Soluciones a Medida",
      description: "Sistemas de facturación y gestión como Ledgerly, además de extensiones personalizadas para Odoo ERP.",
    },
    {
      title: "Sevilla · Presencial / Remoto",
      description: "Disponibilidad completa para incorporarme a equipos tecnológicos de forma inmediata.",
    },
  ];

  return (
    <section id="sobre-mi" className="px-6 md:px-16 py-24 bg-[#0B0D13]/90 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de Sección */}
        <Reveal>
          <div className="inline-flex items-center gap-2 font-semibold text-garnet-light text-xs mb-3 px-3.5 py-1.5 rounded-full bg-garnet/10 border border-garnet/20 uppercase tracking-wider">
            <span>Perfil Profesional</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-50 mb-4">
            Sobre mí
          </h2>
          <div className="w-16 h-1 bg-garnet rounded-full mb-12" />
        </Reveal>

        {/* Layout en 2 columnas equilibrado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Texto del usuario */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={100}>
              <p className="text-slate-100 font-medium text-xl md:text-2xl leading-snug">
                Como desarrollador de software, me especializo en crear soluciones digitales robustas y mantenibles. Mi gran enfoque profesional actual se centra en la <strong className="text-white font-semibold">automatización inteligente de procesos con Inteligencia Artificial</strong>, optimizando la operativa y reduciendo cargas de trabajo repetitivas.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Cuento con una amplia variedad de proyectos desarrollados y en curso que abarcan desde sistemas de facturación y gestión hasta plataformas interactivas y asistentes virtuales. Trabajo habitualmente con un ecosistema técnico diverso que incluye <strong className="text-slate-200 font-semibold">Java, Python, PHP, Node.js, React, n8n y bases de datos relacionales</strong>.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="#contacto"
                  className="px-6 py-3 rounded-xl bg-garnet text-white font-medium text-sm hover:bg-garnet-dark transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-garnet/20 hover:scale-[1.02]"
                >
                  <span>Contactar conmigo</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="#experiencia"
                  className="px-6 py-3 rounded-xl bg-slate-surface/80 text-slate-200 border border-white/10 font-medium text-sm hover:border-garnet/40 hover:text-white transition-all duration-200 inline-flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span>Ver trayectoria</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Columna Derecha: Tarjetas sobrias con línea de acento minimalista (sin iconos) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              return (
                <Reveal key={item.title} delay={150 + index * 80}>
                  <div className="p-4 rounded-xl bg-slate-surface/60 border border-white/10 hover:border-garnet/40 transition-all duration-300 flex items-center gap-3.5 group">
                    <div className="w-1.5 h-8 bg-garnet rounded-full group-hover:scale-y-125 transition-transform shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}