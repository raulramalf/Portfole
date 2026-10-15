import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Word({ w, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return <motion.span style={{ opacity }}>{w}</motion.span>;
}

// Párrafo cuyas palabras se iluminan según el scroll.
export default function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={`flex flex-wrap gap-x-[0.28em] ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} w={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}
