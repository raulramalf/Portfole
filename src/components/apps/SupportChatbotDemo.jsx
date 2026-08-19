import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Bot, User, Sparkles } from "lucide-react";

export default function SupportChatbotDemo() {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy tu asistente virtual impulsado por IA. ¿En qué puedo ayudarte hoy?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botText = "Entiendo tu consulta. Como esto es una demostración, te confirmo que procesaría esta información conectándome a una base de conocimiento o API externa para darte una solución exacta.";
      if (userMessage.text.toLowerCase().includes("precio") || userMessage.text.toLowerCase().includes("cuesta")) {
        botText = "Nuestros planes comienzan en $9.99/mes para la versión básica, y $29.99/mes para la versión Pro con acceso a la API completa. ¿Te gustaría ver la tabla comparativa?";
      } else if (userMessage.text.toLowerCase().includes("hola")) {
        botText = "¡Hola de nuevo! ¿Qué tal tu día? Dime cómo puedo asistirte.";
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botText, sender: "bot" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-slate-100 flex flex-col relative overflow-hidden font-body">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-garnet/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="p-6 relative z-10 flex items-center justify-between border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-medium">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Volver al Portfolio
        </Link>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Sistema Operativo</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10 max-w-4xl w-full mx-auto p-4 md:p-8">
        
        {/* Chat UI Container */}
        <div className="flex-1 flex flex-col bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden mt-4">
          
          {/* Chat Header */}
          <div className="p-4 border-b border-white/10 bg-slate-800/50 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-garnet to-rose-400 flex items-center justify-center shadow-lg">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg flex items-center gap-2">
                Asistente Inteligente <Sparkles size={14} className="text-yellow-400" />
              </h2>
              <p className="text-xs text-green-400 font-medium">En línea</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-end gap-3 max-w-[80%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}>
                
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === "user" ? "bg-slate-700" : "bg-gradient-to-tr from-garnet to-rose-400"}`}>
                  {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>

                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "user" 
                    ? "bg-slate-700 text-white rounded-br-none" 
                    : "bg-slate-800/80 border border-white/5 text-slate-200 rounded-bl-none shadow-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-end gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-garnet to-rose-400 flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="px-5 py-4 rounded-2xl bg-slate-800/80 border border-white/5 rounded-bl-none shadow-sm flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800/50 border-t border-white/10">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full bg-slate-900/50 border border-white/10 rounded-full py-3.5 pl-6 pr-14 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-garnet/50 focus:ring-1 focus:ring-garnet/50 transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-garnet hover:bg-garnet-light disabled:bg-slate-700 disabled:text-slate-500 text-white flex items-center justify-center transition-colors"
              >
                <Send size={16} className="ml-0.5" />
              </button>
            </form>
            <p className="text-center text-[10px] text-slate-500 mt-3 font-medium">
              Demo creada para el portfolio. Las respuestas son simuladas.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
