import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import WordReveal from "./WordReveal";

const BADGE = "DISPONIBLE · SEVILLA · DISPONIBLE · SEVILLA · ";

export default function Hero() {
  const ref = useRef(null);
  const [photo, setPhoto] = useState("/profile.jpg");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-[100svh] px-5 sm:px-6 pt-28 md:pt-32 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 items-center">
        <motion.div style={{ y: textY }} className="md:col-span-7 lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="label mb-8"
          >
            Desarrollador de software · Automatización con IA
          </motion.p>

          <h1 className="mega text-[clamp(3rem,15vw,10.5rem)] md:text-[clamp(3.5rem,9.5vw,10.5rem)] lg:text-[clamp(3.5rem,13vw,10.5rem)]">
            <span className="block"><WordReveal text="Raúl" delay={0.15} /></span>
            <span className="block"><WordReveal text="Ramírez" delay={0.3} /></span>
            <span className="block text-accent"><WordReveal text="Alfaro." delay={0.45} /></span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 md:mt-10 text-base md:text-xl text-muted max-w-xl leading-relaxed"
          >
            Backend y frontend con Java, PHP, Python y Node.js. Código mantenible, buenas prácticas de arquitectura y
            automatización de procesos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-8 md:mt-10 flex flex-wrap gap-3"
          >
            <a href="#proyectos" className="btn btn-primary group">Ver proyecto <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></a>
            <a href="#contacto" className="btn btn-outline group">Contactar <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: photoY }} className="md:col-span-5 lg:col-span-4 relative max-w-[260px] sm:max-w-xs lg:max-w-sm w-full ml-2 sm:ml-0 md:justify-self-end">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="aspect-[4/5] rounded-xl overflow-hidden bg-raised border border-line"
          >
            <motion.img
              src={photo} onError={() => setPhoto("/avatar.svg")} alt="Raúl Ramírez Alfaro"
              initial={{ scale: 1.5 }} animate={{ scale: 1.2 }} transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover object-[center_20%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.7 }}
            className="absolute -left-5 -bottom-8 sm:-left-4 lg:-left-10 sm:-bottom-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-base border border-line flex items-center justify-center"
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full spin-slow absolute inset-0">
              <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <text className="mono" fontSize="7.6" fill="#F2F0EB"><textPath href="#circ" textLength="236" lengthAdjust="spacing">{BADGE}</textPath></text>
            </svg>
            <span className="w-3 h-3 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
