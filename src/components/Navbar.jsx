export default function Navbar() {
  const links = [
    { label: "sobre-mi", href: "#sobre-mi" },
    { label: "skills", href: "#skills" },
    { label: "proyectos", href: "#proyectos" },
    { label: "contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-16 py-4 bg-ink/80 backdrop-blur-sm border-b border-white/5 z-50">
      <span className="font-mono text-amber text-sm">raul@dev:~$</span>
      <div className="flex gap-6 font-mono text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted hover:text-teal transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}