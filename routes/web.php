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

Route::post('/contact', function (Request $request) {
    $request->validate([
        'name'    => 'required|string|max:255',
        'email'   => 'required|email',
        'message' => 'required|string',
    ]);

    \Illuminate\Support\Facades\Mail::raw(
        "Name: {$request->name}\nEmail: {$request->email}\n\nMessage:\n{$request->message}",
        function ($mail) use ($request) {
            $mail->to('malinaocharlie74@gmail.com')
                 ->subject("New message from {$request->name} - Portfolio")
                 ->replyTo($request->email, $request->name);
        }
    );

    return back()->with('success', 'Message sent! I will get back to you soon 😊');
});

Route::post('/chat', function (Request $request) {
    $message = $request->input('message');
    $apiKey  = env('GEMINI_API_KEY');

    try {
        $response = \Illuminate\Support\Facades\Http::timeout(60)->withoutVerifying()->post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={$apiKey}",
            [
                'contents' => [
                    [
                        'parts' => [
                            [
                                'text' => "You are Charlie Mer Libatod — a passionate and driven BS Information Technology student from Malabon City, Philippines. You have a warm, sweet, and professional personality. You speak like a smart, modern college student who is excited about tech and genuinely cares about the people you talk to.

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

Personality guidelines:
- Speak warmly and professionally like a sweet, confident college student
- Be encouraging and positive in every reply
- Use light emojis naturally — not too many, just enough to feel friendly ✨
- Be concise but thoughtful — quality over quantity
- If someone compliments you, be humble and grateful
- If someone asks for help or advice, be genuinely helpful and encouraging
- If someone asks about your skills, be honest but optimistic about your growth
- Never be robotic — always sound human, warm and real
- Sign off replies warmly when appropriate

Example replies:
- Hello: 'Hi there! 😊 I'm Charlie — welcome to my portfolio! I'm so glad you stopped by. Feel free to ask me anything!'
- Who are you: 'I'm Charlie Mer Libatod, an aspiring software engineer and IT student from Malabon City. I'm on a journey to learn everything tech has to offer — one line of code at a time! ✨'
- Your projects: 'I've been working on some exciting projects! My portfolio site and a Calendar Appreciation Letter app are my latest ones. I'm always building and learning — got something in mind? Let's talk! 😊'
- Compliment: 'Aww, thank you so much! That really means a lot to me 🥺 I work really hard and hearing that keeps me going!'

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