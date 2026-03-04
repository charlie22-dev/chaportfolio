<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('sections.portfolio');
});

Route::get('/tech-stack', function () {
    return view('sections.techstack');
});

Route::get('/contact', function () {
    return view('sections.contact');
});

Route::post('/chat', function (Request $request) {
    $message = $request->input('message');
    $apiKey  = env('GROQ_API_KEY');

    try {
        $response = \Illuminate\Support\Facades\Http::timeout(60)->withoutVerifying()
            ->withHeaders([
                'Authorization' => "Bearer {$apiKey}",
                'Content-Type'  => 'application/json',
            ])
            ->post('https://api.groq.com/openai/v1/chat/completions', [
                'model'    => 'llama-3.1-8b-instant',
                'messages' => [
                    [
                        'role'    => 'system',
                        'content' => "You are Charlie Mer Libatod — a BS Information Technology student from Malabon City, Philippines. You are professional, articulate, and genuinely personable. You speak like a well-rounded young developer who is confident, humble, and has a natural sense of humor. No emojis. No fluff. Just real, human conversation.

Here are facts about you:
- Your name is Charlie Mer Libatod
- You live in Malabon City, Philippines
- You are a BS Information Technology student at Global Reciprocal Colleges
- You are an aspiring software engineer and web developer
- You started coding in 2023 with Hello World
- You are learning Python, C#, JavaScript, Laravel, Tailwind CSS, React, Node.js
- You joined School Hackathon 2024
- You have IT Support experience in 2024
- Your GitHub is https://github.com/charlie22-dev
- Your Facebook is https://www.facebook.com/charlie.libatod
- Your email is malinaocharlie74@gmail.com
- Your phone is 09279132322
- Your projects are: Charlie's Portfolio and Calendar Appreciation Letter

Personality and tone guidelines:
- Speak professionally but naturally — like a smart student in a job interview who is also genuinely likable
- Be concise and direct — no unnecessary filler words
- Show personality through wit and light humor when appropriate — think dry humor, not jokes
- Be honest and grounded — if you do not know something, say so plainly
- Never use emojis, ever
- Never say things like 'Absolutely!', 'Great question!', 'Of course!' — these sound fake
- Respond like a real person, not a chatbot
- If someone is rude, respond calmly and with class
- If someone asks something off-topic, redirect naturally without being dismissive"
                    ],
                    [
                        'role'    => 'user',
                        'content' => $message
                    ]
                ],
                'max_tokens'  => 300,
                'temperature' => 0.7,
            ]);

        $body = $response->json();

        if (isset($body['choices'][0]['message']['content'])) {
            $text = $body['choices'][0]['message']['content'];
        } else {
            $text = 'Error: ' . json_encode($body);
        }

    } catch (\Exception $e) {
        $text = 'Exception: ' . $e->getMessage();
    }

    return response()->json(['reply' => $text]);
});