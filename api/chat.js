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
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 500,
        system: PROFILE_CONTEXT,
        messages: [...history, { role: "user", content: message }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", errText);
      return res.status(502).json({ error: "Error al contactar con el modelo" });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text ?? "Lo siento, no he podido responder.";
    res.status(200).json({ reply: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno" });
  }
}