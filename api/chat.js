import { PROFILE_CONTEXT } from "./profile-context.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history = [] } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Falta el mensaje" });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 500,
        messages: [
          { role: "system", content: PROFILE_CONTEXT },
          ...history.map((h) => ({ role: h.role, content: h.content })),
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", data);
      return res.status(502).json({ error: "Error al contactar con el modelo" });
    }

    const text = data.choices?.[0]?.message?.content ?? "Lo siento, no he podido responder.";
    res.status(200).json({ reply: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno" });
  }
}