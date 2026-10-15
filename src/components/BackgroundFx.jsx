import { useEffect, useRef } from "react";

// Fondo animado: tres manchas de color que derivan (CSS) y un foco suave que sigue al ratón.
export default function BackgroundFx() {
  const spot = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = spot.current;
    let x = window.innerWidth / 2, y = window.innerHeight / 3, tx = x, ty = y, raf = 0;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      el.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
      <div ref={spot} className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,90,54,0.16),transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(20,35,27,0.18)_1px,transparent_1px)] [background-size:26px_26px]" />
    </div>
  );
}
