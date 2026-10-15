import { useEffect, useRef } from "react";

const GOLD = "201, 169, 110";

// Fondo animado: auroras suaves + constelación de partículas. Se pausa con la pestaña oculta
// y muestra un solo fotograma estático con prefers-reduced-motion.
export default function BackgroundFx() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, dots = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w * h) / 22000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.3 + 0.4,
      }));
    };

    const blob = (x, y, r, rgb, a) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb}, ${a})`);
      g.addColorStop(1, `rgba(${rgb}, 0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      const s = t / 1000;
      const R = Math.max(w, h);
      blob(w * (0.2 + 0.1 * Math.sin(s * 0.13)), h * (0.25 + 0.1 * Math.cos(s * 0.11)), R * 0.55, GOLD, 0.09);
      blob(w * (0.8 + 0.08 * Math.cos(s * 0.1)), h * (0.7 + 0.1 * Math.sin(s * 0.14)), R * 0.6, "70, 84, 150", 0.14);
      blob(w * (0.5 + 0.12 * Math.sin(s * 0.07)), h * (1 + 0.05 * Math.cos(s * 0.09)), R * 0.5, "120, 90, 160", 0.07);

      for (const d of dots) {
        if (!reduced) {
          d.x += d.vx; d.y += d.vy;
          if (d.x < 0 || d.x > w) d.vx *= -1;
          if (d.y < 0 || d.y > h) d.vy *= -1;
        }
      }
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        ctx.fillStyle = `rgba(${GOLD}, 0.55)`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(${GOLD}, ${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
    };

    const loop = (t) => { draw(t); raf = requestAnimationFrame(loop); };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduced) draw(0); else raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 z-0 w-full h-full pointer-events-none" />;
}
