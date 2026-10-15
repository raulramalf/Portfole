export default function Footer() {
  return (
    <footer className="mt-8 py-8 border-t border-line text-xs text-faint flex flex-col sm:flex-row justify-between gap-2">
      <p>© {new Date().getFullYear()} Raúl Ramírez Alfaro</p>
      <p>Sevilla, España</p>
    </footer>
  );
}
