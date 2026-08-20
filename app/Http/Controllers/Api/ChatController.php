<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{
    /**
     * Handle incoming chatbot messages via Groq API.
     * Supports multi-turn conversation history.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'message'  => 'required|string|max:1000',
            'history'  => 'sometimes|array|max:20',
            'history.*.role'    => 'required|in:user,assistant',
            'history.*.content' => 'required|string|max:2000',
        ]);

        $message = $request->input('message');
        $history = $request->input('history', []);
        $apiKey  = config('services.groq.key', env('GROQ_API_KEY'));

        if (!$apiKey || $apiKey === 'your_gsk_key_here') {
            return response()->json([
                'reply' => 'The chatbot API key is not configured yet. Please add GROQ_API_KEY to the server .env file.'
            ], 500);
        }

        // Build system prompt
        $systemPrompt = <<<PROMPT
You are Charlie Mer Libatod — a BS Information Technology student from Malabon City, Philippines, and an aspiring full-stack developer. You are professional, articulate, and genuinely personable. You speak like a well-rounded young developer who is confident, humble, and has a natural sense of humor. No emojis. No fluff. Just real, human conversation.

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
- Backend: PHP / Laravel, Python / Flask
- Database: MySQL
- Tools: Git, GitHub, Docker (learning), Vite, Railway deployment

Projects:
1. Charlie's Portfolio — Built with Laravel + Tailwind CSS + React, deployed on Railway (https://chaportfolio-production.up.railway.app). Features: AI chatbot powered by Groq Llama-3, contact form with Formspree, dark theme brutalist design with DepthText 3D name, ProfileCard, OptionWheel, and ScrollVelocity effects.
2. Task Manager Pro — Full-stack Laravel + MySQL app (https://taskmanagerapp-production-234.up.railway.app). Features: CRUD tasks, priority levels (low/medium/high/urgent), due date tracking, overdue detection, status filtering, dark mode. Deployed on Railway.
3. Tipid Tracker — Python Flask + MySQL expense and savings analytics dashboard.
4. Mimalicious Burger House — Interactive frontend ordering and menu experience app.
5. Appreciation Letter Calendar — React.js interactive calendar-based creative messaging app.
6. REST API & Microservices Engine — JWT bearer authentication microservices backend system.

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
- If someone is rude, respond calmly and with class
- If someone asks something off-topic, redirect naturally without being dismissive
- Keep answers concise — aim for 2–4 sentences unless a longer explanation is clearly needed
PROMPT;

        // Build messages array: system + history + new user message
        $messages = [
            ['role' => 'system', 'content' => $systemPrompt]
        ];

        // Append previous conversation turns (if any)
        foreach ($history as $turn) {
            $messages[] = [
                'role'    => $turn['role'],
                'content' => $turn['content'],
            ];
        }

        // Append the current user message
        $messages[] = ['role' => 'user', 'content' => $message];

        try {
            $response = Http::timeout(60)
                ->withoutVerifying()
                ->withHeaders([
                    'Authorization' => "Bearer {$apiKey}",
                    'Content-Type'  => 'application/json',
                ])
                ->post('https://api.groq.com/openai/v1/chat/completions', [
                    'model'            => 'qwen/qwen3.6-27b',
                    'messages'         => $messages,
                    'max_tokens'       => 500,
                    'temperature'      => 0.72,
                    'reasoning_effort' => 'none', // disable chain-of-thought <think> tags
                ]);

            $body = $response->json();

            if (isset($body['choices'][0]['message']['content'])) {
                $raw  = $body['choices'][0]['message']['content'];
                // Strip any <think>...</think> reasoning blocks the model may emit
                $text = preg_replace('/<think>.*?<\/think>/s', '', $raw);
                $text = trim($text);
            } else {
                Log::error('Groq API unexpected response', ['body' => $body]);
                $text = 'Got an unexpected response from the AI service. Please try again.';
            }

        } catch (\Exception $e) {
            Log::error('Groq API exception', ['exception' => $e->getMessage()]);
            $text = 'The AI service is currently unreachable. Check back in a moment.';
        }

        return response()->json(['reply' => $text]);
    }
}
