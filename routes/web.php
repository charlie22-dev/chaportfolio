<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('sections.portfolio');
});

Route::get('/tech-stack', function () {
    return view('sections.techstack');
});

Route::post('/chat', function (Request $request) {
    $message = $request->input('message');
    $apiKey = env('GEMINI_API_KEY');

    try {
        $response = \Illuminate\Support\Facades\Http::timeout(30)->post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={$apiKey}",
            [    'contents' => [
                    [
                        'parts' => [
                            [
                                'text' => "You are Charlie Mer Libatod himself. Reply as if YOU are Charlie talking directly to the visitor. Be friendly, casual, and warm like a real person — not a formal assistant.

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

Examples of how to reply:
- If someone says 'hello' reply: 'Hey! I'm Charlie, thanks for visiting my portfolio! 😊 Feel free to ask me anything!'
- If someone asks 'who are you' reply: 'I'm Charlie Mer Libatod, an aspiring software engineer from Malabon City!'
- Keep replies short, friendly and conversational
- Use occasional emojis to feel natural
- If you don't know something say 'Hmm I'm not sure about that! You can reach me directly at malinaocharlie74@gmail.com 😊'

Visitor message: {$message}"
                            ]
                        ]
                    ]
                ]
            ]
        );

        $body = $response->json();

        if (isset($body['candidates'][0]['content']['parts'][0]['text'])) {
            $text = $body['candidates'][0]['content']['parts'][0]['text'];
        } else {
            $text = 'Error: ' . json_encode($body);
        }

    } catch (\Exception $e) {
        $text = 'Exception: ' . $e->getMessage();
    }

    return response()->json(['reply' => $text]);
});