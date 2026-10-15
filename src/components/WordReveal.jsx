import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Word({ word, delay, wordClass }) {
  const ref = useRef(null);
  // La visibilidad se mide en la máscara (que no se mueve), no en la palabra desplazada.
  const inView = useInView(ref, { once: true, amount: 0.6 });
  return (
    <span ref={ref} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
      <motion.span
        className={`inline-block ${wordClass}`}
        initial={{ y: "115%" }}
        animate={{ y: inView ? 0 : "115%" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

// Titular que aparece palabra a palabra deslizándose desde una máscara.
export default function WordReveal({ text, className = "", delay = 0, stagger = 0.07, wordClass = "" }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i}>
          <Word word={w} delay={delay + i * stagger} wordClass={wordClass} />
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
