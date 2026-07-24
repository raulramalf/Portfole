import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    let particles = [];
    const getParticleCount = () => {
      return width < 768 ? 22 : Math.min(Math.floor((width * height) / 16000), 55);
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.2;
        this.isGarnet = Math.random() > 0.35;
        this.baseAlpha = Math.random() * 0.35 + 0.35;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        const currentAlpha = this.baseAlpha + Math.sin(this.pulse) * 0.15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isGarnet
          ? `rgba(225, 45, 68, ${Math.max(0.2, currentAlpha)})`
          : `rgba(203, 213, 225, ${Math.max(0.2, currentAlpha)})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    initParticles();

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Resplandor ambiental de esquina suave que orbita lentamente sin seguir al ratón
      const orb1X = width * 0.2 + Math.sin(time) * 60;
      const orb1Y = height * 0.25 + Math.cos(time * 0.7) * 50;
      const r1 = Math.max(1, width * 0.45);
      const bgGrad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, r1);
      bgGrad1.addColorStop(0, "rgba(192, 38, 56, 0.09)");
      bgGrad1.addColorStop(1, "transparent");
      ctx.fillStyle = bgGrad1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.8 - Math.cos(time * 0.8) * 70;
      const orb2Y = height * 0.75 + Math.sin(time * 0.6) * 60;
      const r2 = Math.max(1, width * 0.4);
      const bgGrad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, r2);
      bgGrad2.addColorStop(0, "rgba(225, 45, 68, 0.07)");
      bgGrad2.addColorStop(1, "transparent");
      ctx.fillStyle = bgGrad2;
      ctx.fillRect(0, 0, width, height);

      // Dibujar partículas y conexiones de red
      const maxDist = width < 768 ? 100 : 145;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(192, 38, 56, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#07080C]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}