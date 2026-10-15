import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_RE = /\.(mp4|webm|mov|ogg|m4v)(\?.*)?$/i;

const isVideo = (m) => m.type === "video" || (!m.type && VIDEO_RE.test(m.src));

function Thumb({ m, active, onClick, i }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver ${isVideo(m) ? "vídeo" : "imagen"} ${i + 1}`}
      aria-pressed={active}
      className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border bg-mist transition ${active ? "border-ink" : "border-fog opacity-70 hover:opacity-100"}`}
    >
      {isVideo(m) ? (
        m.poster ? <img src={m.poster} alt="" className="w-full h-full object-cover" /> : <span className="w-full h-full bg-ink" />
      ) : (
        <img src={m.src} alt="" loading="lazy" className="w-full h-full object-cover" />
      )}
      {isVideo(m) && (
        <span className="absolute inset-0 flex items-center justify-center text-white bg-black/30"><Play size={16} fill="currentColor" /></span>
      )}
    </button>
  );
}

// Muestra imágenes y vídeos del proyecto con un visor principal y miniaturas.
export default function MediaGallery({ media, name }) {
  const [idx, setIdx] = useState(0);
  const [broken, setBroken] = useState({});
  const current = media[idx];

  return (
    <div className="flex flex-col gap-3 min-w-0">
      <div className="rounded-2xl overflow-hidden border border-fog bg-mist aspect-[16/10] flex items-center justify-center">
        {broken[idx] ? (
          <p className="text-sm text-graphite px-6 text-center">No se pudo cargar este archivo: {current.src}</p>
        ) : isVideo(current) ? (
          <video
            key={current.src}
            controls
            playsInline
            preload="metadata"
            poster={current.poster}
            aria-label={current.alt || `Vídeo de ${name}`}
            onError={() => setBroken((b) => ({ ...b, [idx]: true }))}
            className="w-full h-full object-contain bg-black"
          >
            <source src={current.src} />
          </video>
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={current.alt || `Captura de ${name}`}
            loading="lazy"
            onError={() => setBroken((b) => ({ ...b, [idx]: true }))}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {media.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {media.map((m, i) => (
            <Thumb key={m.src} m={m} i={i} active={i === idx} onClick={() => setIdx(i)} />
          ))}
        </div>
      )}
    </div>
  );
}
