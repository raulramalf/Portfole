# Imágenes y vídeos de proyectos

Coloca aquí los archivos de cada proyecto, en una carpeta por proyecto:

    public/projects/browseme/captura-1.png
    public/projects/browseme/demo.mp4

Y regístralos en `src/data/projects.js`, dentro del campo `media` del proyecto:

    media: [
      { src: "/projects/browseme/captura-1.png", alt: "Informe de análisis" },
      { src: "/projects/browseme/demo.mp4", poster: "/projects/browseme/poster.jpg", alt: "Demo en vídeo" },
    ],

- Imágenes: .png, .jpg, .jpeg, .webp, .avif, .gif, .svg
- Vídeos: .mp4, .webm, .mov, .ogg (se reproducen con controles; mejor .mp4 H.264 o .webm)
- `type` ("image" | "video") es opcional: se deduce de la extensión.
- Mientras `media` esté vacío, la tarjeta muestra el fragmento de código.
- Consejo: comprime los vídeos (idealmente < 10 MB) para que la web cargue rápido.
