export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-amber/10 rounded-full blur-[120px] animate-blob-1" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] bg-teal/10 rounded-full blur-[130px] animate-blob-2" />
      <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-amber/5 rounded-full blur-[110px] animate-blob-3" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}