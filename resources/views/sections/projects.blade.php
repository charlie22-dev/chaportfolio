@extends('layouts.app')

@section('title', 'Projects - Charlie Mer Libatod')

@section('content')

  <section class="pt-10 pb-16">

    {{-- Header --}}
    <div class="flex items-center gap-4 mb-10">
      <a href="/" class="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition group">
        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back to Home
      </a>
      <h1 class="text-3xl font-bold tracking-tight text-black dark:text-white" style="font-family: 'DM Serif Display', serif;">All Projects</h1>
    </div>

    {{-- PROJECTS LIST --}}
    <div class="flex flex-col gap-4">
      @foreach ([
        ["Proflect", 'A premium business delivery website.', 'charlie22-dev.github.io', 'https://charlie22-dev.github.io/newproflect/'],
        ["Mimalicious", 'A premium burger restaurant website.', 'charlie22-dev.github.io', 'https://charlie22-dev.github.io/Mimalicious/'],
        ["Tipid Tracker", 'A comprehensive budget manager web application built with Python.', 'charlie22.pythonanywhere.com', 'https://charlie22.pythonanywhere.com/'],
        ["Charlie's Portfolio", 'Personal portfolio website built with Laravel and Tailwind CSS.', 'chaportfolio.onrender.com', 'https://chaportfolio-1.onrender.com/'],
        ['Appreciation Letter','A calendar-based appreciation letter web app built with React.', 'github.com/charlie22-dev', 'https://charlie22-dev.github.io/appreciation-letterv2/'],
        ['Task Manager App', 'Full-stack Laravel app with MySQL. Features task management, priority levels, and more.', 'taskmanagerapp.up.railway.app', 'https://taskmanagerapp-production-234.up.railway.app']
      ] as $project)
      <a href="{{ $project[3] }}" target="_blank" class="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition group gap-4">
        <div>
          <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-1">{{ $project[0] }}</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ $project[1] }}</p>
          <span class="inline-block text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md">{{ $project[2] }}</span>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-center shrink-0">
          <span class="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">Visit Site</span>
          <span class="text-gray-400 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
        </div>
      </a>
      @endforeach
    </div>

  </section>

@endsection
@push('scripts')
<script>
  (function() {
    const html  = document.getElementById('html-root');
    const saved = localStorage.getItem('theme') || 'light';
    if (saved === 'dark') {
      html.classList.add('dark');
    }
  })();
</script>
@endpush
