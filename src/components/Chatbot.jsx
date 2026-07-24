import { useState } from "react";
import { X, Send, Bot } from "lucide-react";

function getProfileReply(query) {
  const q = query.toLowerCase().trim();

  // 1. Saludos y educación esencial
  if (q.includes("buenos dias") || q.includes("buenos días")) {
    return "¡Buenos días! Este es el chat de autorespuesta sobre el perfil de Raúl Ramírez. ¿En qué puedo ayudarte respecto a su experiencia, proyectos o contacto?";
  }
  if (q.includes("buenas tardes")) {
    return "¡Buenas tardes! Estoy a tu disposición para responder a tus preguntas sobre los proyectos, habilidades o trayectoria de Raúl. ¿Qué te gustaría saber?";
  }
  if (q.includes("buenas noches")) {
    return "¡Buenas noches! ¿En qué puedo ayudarte respecto al perfil profesional o los proyectos de Raúl?";
  }
  if (q.startsWith("hola") || q === "hola" || q.includes("que tal") || q.includes("qué tal") || q.includes("saludos")) {
    return "¡Hola! Bienvenido al chat de consultas del perfil de Raúl Ramírez. ¿En qué puedo ayudarte respecto a su experiencia o proyectos?";
  }
  if (q.includes("gracias") || q.includes("muchas gracias")) {
    return "¡De nada! Si necesitas cualquier otra información sobre el perfil de Raúl, aquí estoy para ayudarte.";
  }
  if (q.includes("adios") || q.includes("adiós") || q.includes("hasta luego") || q.includes("chao")) {
    return "¡Hasta luego! Que tengas un excelente día.";
  }

  // 2. Preguntas temáticas sobre el perfil de Raúl
  if (q.includes("experiencia") || q.includes("trabajo") || q.includes("trayectoria") || q.includes("laboral") || q.includes("empresa")) {
    return "Raúl cuenta con experiencia como Desarrollador en Ingetexia Projects, Desarrollador Web Full-Stack en CodeArts Solutions, además de trayectoria previa en soporte técnico e informática.";
  }

  if (q.includes("skill") || q.includes("habilidad") || q.includes("stack") || q.includes("tecnología") || q.includes("tecnologia") || q.includes("python") || q.includes("java") || q.includes("php") || q.includes("node") || q.includes("n8n") || q.includes("ia") || q.includes("react")) {
    return "El stack técnico de Raúl abarca Java, Python, PHP y Node.js en backend, React en frontend, PostgreSQL, MySQL y DynamoDB en bases de datos, más automatización de procesos con n8n, Make e integración de APIs de LLM.";
  }

  if (q.includes("proyecto") || q.includes("portfolio") || q.includes("portafolio") || q.includes("app") || q.includes("hacer") || q.includes("ledgerly") || q.includes("driftboard") || q.includes("warehaus")) {
    return "Entre sus proyectos destacan Ledgerly (plataforma de facturación), Driftboard (gestor Kanban en tiempo real), Warehaus (inventario en Java), Triagely (clasificación automatizada de tickets con n8n) y asistentes conversacionales adaptados.";
  }

  if (q.includes("contacto") || q.includes("email") || q.includes("correo") || q.includes("telefono") || q.includes("teléfono") || q.includes("linkedin") || q.includes("github") || q.includes("escribir") || q.includes("hablar") || q.includes("contratar")) {
    return "Puedes escribir a Raúl por email en raulramalf@gmail.com, llamarle al +34 665 50 32 51 o conectar mediante su perfil de LinkedIn.";
  }

  if (q.includes("donde") || q.includes("dónde") || q.includes("ubicacion") || q.includes("ubicación") || q.includes("sevilla") || q.includes("remoto") || q.includes("disponib") || q.includes("presencial")) {
    return "Raúl reside en Sevilla (España) y cuenta con disponibilidad para incorporarse a equipos de trabajo en modalidad presencial, híbrida o remota.";
  }

  if (q.includes("estudio") || q.includes("educacion") || q.includes("educación") || q.includes("grado") || q.includes("cesur")) {
    return "Raúl cursa el Ciclo Formativo de Grado Superior en Desarrollo Web/Multimedia en Cesur (2024-2026) y cuenta previamente con el Grado Medio en Informática y Comunicaciones (2022-2024).";
  }

  if (q.includes("raul") || q.includes("raúl") || q.includes("quien es") || q.includes("quién es") || q.includes("perfil")) {
    return "Raúl Ramírez Alfaro es Desarrollador de Software y Automatizador de Procesos con IA en Sevilla. Cuenta con una amplia variedad de proyectos desarrollados con Java, Python, PHP, Node.js y React.";
  }

  // 3. Respuesta estándar cuando se esquivan los temas de Raúl
  return "Estoy aquí únicamente para resolverte dudas sobre Raúl Ramírez (su experiencia, proyectos, habilidades o datos de contacto). ¿En qué puedo ayudarte respecto a su perfil?";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendQuery = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!textToSend) setInput("");
    setLoading(true);

    let reply = "";

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: messages }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          reply = data.reply;
        }
      }
    } catch (err) {
      console.error("Chatbot Request Error:", err);
    }

    if (!reply) {
      reply = getProfileReply(text);
    }

    const assistantMsg = { role: "assistant", content: reply };
    setMessages([...newMessages, assistantMsg]);
    setLoading(false);
  };

  const quickQuestions = [
    "¿Cuál es tu experiencia?",
    "¿Qué proyectos has desarrollado?",
    "¿Cómo puedo contactar contigo?",
  ];

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#0E1017] hover:bg-[#141722] text-white p-1 rounded-full shadow-2xl shadow-garnet/40 hover:scale-105 transition-all duration-300 border border-garnet/50 flex items-center justify-center group"
        aria-label="Chat de Autorespuesta"
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-garnet-light/60 shadow-lg">
          <img
            src="/chatbot-avatar.png"
            alt="Avatar de Autorespuesta"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </button>

      {/* Ventana de chat */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-[#0E1017]/95 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header del Chat de Autorespuesta */}
          <div className="p-3.5 border-b border-white/10 bg-slate-surface/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-garnet-light/50 shadow-sm shrink-0">
                <img
                  src="/chatbot-avatar.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="font-display font-bold text-xs text-slate-100">Consultas Raúl</p>
                  <span className="text-[10px] font-semibold text-garnet-light px-1.5 py-0.2 rounded bg-garnet/10 border border-garnet/20">
                    Autorespuesta
                  </span>
                </div>
                <p className="text-[10px] text-muted">Información sobre Raúl Ramírez</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-1.5 text-muted hover:text-slate-200 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cuerpo de Mensajes */}
          <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3 font-body">
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-surface/60 border border-white/5 text-xs text-slate-300 leading-relaxed">
                  <p className="font-semibold text-garnet-light mb-1">
                    ¡Hola! Bienvenido al perfil.
                  </p>
                  <p>
                    Este es el sistema de respuesta sobre el perfil de Raúl. Puedes realizar cualquier consulta sobre sus proyectos, trayectoria o formas de contacto.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 pt-1">
                  <p className="text-[11px] font-medium text-slate-400">Consultas rápidas:</p>
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSendQuery(q)}
                      className="text-left text-xs p-2 rounded-lg bg-slate-surface/90 hover:bg-garnet/15 text-slate-300 hover:text-garnet-light border border-white/5 transition duration-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <span
                  className={`inline-block rounded-xl px-3.5 py-2 text-xs leading-relaxed max-w-[85%] ${
                    m.role === "user"
                      ? "bg-garnet text-white font-medium shadow-md"
                      : "bg-slate-surface border border-white/10 text-slate-200"
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}

            {loading && (
              <div className="text-left">
                <span className="inline-block rounded-xl px-3.5 py-2 text-xs bg-slate-surface border border-white/10 text-muted font-mono animate-pulse">
                  Buscando respuesta...
                </span>
              </div>
            )}
          </div>

          {/* Input de Mensajes */}
          <div className="p-3 border-t border-white/10 bg-slate-surface/60 flex items-center gap-2">
            <input
              className="border border-white/10 bg-ink/70 rounded-xl px-3 py-2 flex-1 text-xs text-slate-100 placeholder-muted outline-none focus:border-garnet/50 transition font-sans"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendQuery()}
              placeholder="Escribe tu consulta..."
            />

            {/* Botón Enviar */}
            <button
              onClick={() => handleSendQuery()}
              disabled={loading}
              className="bg-garnet hover:bg-garnet-light disabled:opacity-50 text-white p-2.5 rounded-xl transition flex items-center justify-center shrink-0 shadow-md shadow-garnet/20"
              aria-label="Enviar consulta"
            >
              <Send size={16} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}