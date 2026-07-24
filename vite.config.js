import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { PROFILE_CONTEXT } from './api/profile-context.js'

function chatApiPlugin(env) {
  return {
    name: 'chat-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          return res.end(JSON.stringify({ error: 'Method not allowed' }));
        }

        let bodyStr = '';
        req.on('data', (chunk) => { bodyStr += chunk; });
        req.on('end', async () => {
          try {
            const { message, history = [] } = JSON.parse(bodyStr || '{}');
            const apiKey = env.GROQ_API_KEY || process.env.GROQ_API_KEY;

            if (!apiKey) {
              res.statusCode = 500;
              return res.end(JSON.stringify({ error: 'GROQ_API_KEY no encontrada' }));
            }

            const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                max_tokens: 600,
                temperature: 0.6,
                messages: [
                  { role: "system", content: PROFILE_CONTEXT },
                  ...history.map((h) => ({ role: h.role, content: h.content })),
                  { role: "user", content: message },
                ],
              }),
            });

            const data = await groqRes.json();

            if (!groqRes.ok) {
              console.error("Groq API Error:", data);
              res.statusCode = 502;
              return res.end(JSON.stringify({ error: "Error en el modelo LLM" }));
            }

            const replyText = data.choices?.[0]?.message?.content ?? "No he podido generar la respuesta.";
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ reply: replyText }));
          } catch (err) {
            console.error("Chat Middleware Error:", err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Error interno" }));
          }
        });
      });
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss(), chatApiPlugin(env)],
  }
})