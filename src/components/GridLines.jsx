import { motion } from "framer-motion";

// Fondo animado: guías verticales que se dibujan al cargar y quedan como retícula editorial.
export default function GridLines() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
      <div className="max-w-7xl mx-auto h-full px-5 sm:px-6 flex justify-between">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.span
            key={i}
            className={`h-full w-px bg-line origin-top ${i % 2 ? "hidden sm:block" : ""}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.4, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    </div>
  );
}
