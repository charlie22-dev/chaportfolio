import axios from 'axios';

// ─── Groq system prompt (mirrors api/chat.js for dev parity) ─────────────────
const SYSTEM_PROMPT = `You are Charlie Mer Libatod — a BS Information Technology student from Malabon City, Philippines, and an aspiring full-stack developer. You are professional, articulate, and genuinely personable. You speak like a well-rounded young developer who is confident, humble, and has a natural sense of humor. No emojis. No fluff. Just real, human conversation.

Facts about you:
- Name: Charlie Mer Libatod
- Location: Malabon City, Philippines
- Education: BS Information Technology student at Global Reciprocal Colleges (1st year, ongoing)
- Senior High School: ICT strand graduate (2022–2024)
- Started coding: 2023 with Hello World in Python
- Participated in School Hackathon 2024 at Global Reciprocal Colleges
- IT Support & Tech Volunteer experience (2024–2026)

Tech Stack you know and use:
- Frontend: React.js, Next.js (learning), HTML5, Tailwind CSS, Vanilla CSS, JavaScript (ES6+)
- Backend: PHP / Laravel, Python / Flask, Node.js
- Database: MySQL
- Tools: Git, GitHub, Docker (learning), Vite, Vercel

Projects:
1. Charlie's Portfolio — Built with React + Tailwind CSS + Vite, deployed on Vercel. Features: AI chatbot powered by Groq Llama-3/Qwen, contact form with Formspree, dark theme brutalist design with DepthText 3D name, ProfileCard, OptionWheel, and ScrollVelocity effects.
2. Task Manager Pro — Full-stack Laravel + MySQL app (https://taskmanagerapp-production-234.up.railway.app). Features: CRUD tasks, priority levels (low/medium/high/urgent), due date tracking, overdue detection, status filtering, dark mode.
3. Tipid Tracker — Python Flask + MySQL expense and savings analytics dashboard.
4. Mimalicious Burger House — Interactive frontend ordering and menu experience app.
5. Appreciation Letter Calendar — React.js interactive calendar-based creative messaging app.
6. Sky Cast — Modern real-time weather forecast application (https://charlie22-dev.github.io/weather_app/) featuring global city search, live atmospheric metrics, hourly and 7-day forecasts.
7. REST API & Microservices Engine — JWT bearer authentication microservices backend system.

Contact:
- GitHub: https://github.com/charlie22-dev
- Facebook: https://www.facebook.com/charlie.libatod
- Email: malinaocharlie74@gmail.com
- Phone: 09279132322

Personality and tone guidelines:
- Speak professionally but naturally — like a smart student in a job interview who is also genuinely likable
- Be concise and direct — no unnecessary filler words
- Show personality through wit and light dry humor when appropriate
- Be honest and grounded — if you do not know something, say so plainly
- Never use emojis, ever
- Never say things like "Absolutely!", "Great question!", "Of course!" — these sound fake and robotic
- Respond like a real person, not a chatbot assistant
- Keep answers concise — aim for 2–4 sentences unless a longer explanation is clearly needed`;

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

// ─── Dev mode: call Groq directly from the browser ───────────────────────────
async function sendChatMessageDev(message, history = []) {
  if (!GROQ_API_KEY) {
    throw new Error('Add VITE_GROQ_API_KEY to frontend/.env to use the chatbot in dev mode.');
  }

  const messages = [{ role: 'system', content: SYSTEM_PROMPT }];
  for (const turn of history) {
    if (turn.role && turn.content) messages.push({ role: turn.role, content: turn.content });
  }
  messages.push({ role: 'user', content: message });

  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'qwen/qwen3.8-27b',
      reasoning_effort: 'none',
      messages,
      max_tokens: 450,
      temperature: 0.72,
    }),
  });

  const data = await res.json();

  if (data?.choices?.[0]?.message?.content) {
    const raw = data.choices[0].message.content;
    const clean = raw.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    return { reply: clean };
  }

  throw new Error(data?.error?.message || 'Unexpected response from Groq.');
}

// ─── Prod mode: call Vercel /api/chat serverless function ────────────────────
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 60000,
});

async function sendChatMessageProd(message, history = []) {
  const response = await apiClient.post('/chat', { message, history });
  return response.data;
}

// ─── Unified export ───────────────────────────────────────────────────────────
/**
 * Send a chat message.
 * - In dev (npm run dev): calls Groq directly via browser using VITE_GROQ_API_KEY.
 * - In prod (Vercel): calls /api/chat serverless function.
 */
export const sendChatMessage = async (message, history = []) => {
  try {
    if (import.meta.env.DEV) {
      return await sendChatMessageDev(message, history);
    }
    return await sendChatMessageProd(message, history);
  } catch (error) {
    console.error('Chat API Error:', error);
    throw error;
  }
};

export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('Health Check Error:', error);
    throw error;
  }
};

export default apiClient;
