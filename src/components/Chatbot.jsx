import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content, history: messages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Ups, algo falló. Inténtalo de nuevo." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Ventana de chat */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-80 bg-white dark:bg-neutral-900 shadow-xl rounded-2xl flex flex-col overflow-hidden border border-neutral-200 dark:border-neutral-700">
          <div className="p-3 border-b border-neutral-200 dark:border-neutral-700 font-semibold text-sm">
            Pregúntame sobre mi perfil
          </div>

          <div className="h-72 overflow-y-auto p-3 flex flex-col gap-2">
            {messages.length === 0 && (
              <p className="text-xs text-neutral-400">
                Hola 👋 Puedes preguntarme sobre mi experiencia, proyectos o skills.
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <span
                  className={`inline-block rounded-lg px-3 py-1.5 text-sm max-w-[85%] ${
                    m.role === "user"
                      ? "bg-black text-white"
                      : "bg-neutral-100 dark:bg-neutral-800"
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}
            {loading && (
              <span className="text-xs text-neutral-400">Escribiendo...</span>
            )}
          </div>

          <div className="flex gap-2 p-2 border-t border-neutral-200 dark:border-neutral-700">
            <input
              className="border border-neutral-300 dark:border-neutral-700 bg-transparent rounded-lg px-2 py-1.5 flex-1 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escribe tu pregunta..."
            />
            <button
              onClick={send}
              disabled={loading}
              className="bg-black text-white p-2 rounded-lg disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}