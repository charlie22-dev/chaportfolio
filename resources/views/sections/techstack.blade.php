@extends('layouts.app')

@section('title', 'Tech Stack - Charlie Mer Libatod')

@section('content')

  <section class="pt-10 pb-16">

    {{-- Header --}}
    <div class="flex items-center gap-4 mb-10">
      <a href="/" class="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition group">
        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back to Home
      </a>
      <h1 class="text-3xl font-bold tracking-tight text-black dark:text-white" style="font-family: 'DM Serif Display', serif;">Tech Stack</h1>
    </div>

    {{-- PROFICIENT --}}
    @foreach ([
      ['Frontend', ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS']],
      ['Backend',  ['Python', 'C#', 'PHP', 'Laravel']],
    ] as [$group, $tags])
    <div class="mb-10">
      <h2 class="text-lg font-bold text-black dark:text-white mb-4">{{ $group }}</h2>
      <div class="flex flex-wrap gap-2">
        @foreach ($tags as $tag)
        <span class="text-sm font-bold text-black dark:text-white px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-default">
          {{ $tag }}
        </span>
        @endforeach
      </div>
    </div>
    @endforeach

    {{-- CURRENTLY LEARNING --}}
    @foreach ([
      ['Currently Learning', ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Node.js', 'MySQL', 'PostgreSQL', 'MongoDB']],
      ['DevOps & Cloud',     ['Docker', 'AWS', 'GitHub Actions', 'Linux', 'Kubernetes']],
    ] as [$group, $tags])
    <div class="mb-10">
      <h2 class="text-lg font-bold text-black dark:text-white mb-4">{{ $group }}</h2>
      <div class="flex flex-wrap gap-2">
        @foreach ($tags as $tag)
        <span class="text-sm font-bold text-black dark:text-white px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-default">
          {{ $tag }}
        </span>
        @endforeach
      </div>
    </div>
    @endforeach

    {{-- WANT TO LEARN --}}
    <div class="mb-10">
      <h2 class="text-lg font-bold text-black dark:text-white mb-4">Want to Learn</h2>
      <div class="flex flex-wrap gap-2">
        @foreach (['Rust', 'Go', 'Kotlin', 'Swift', 'Flutter', 'Machine Learning', 'Web3', 'GraphQL', 'Redis', 'TensorFlow'] as $tag)
        <span class="text-sm font-bold text-black dark:text-white px-4 py-2 border border-dashed border-gray-200 dark:border-gray-800 rounded-lg cursor-default">
          {{ $tag }}
        </span>
        @endforeach
      </div>
    </div>

    {{-- TOOLS --}}
    <div class="mb-10">
      <h2 class="text-lg font-bold text-black dark:text-white mb-4">Tools & Environment</h2>
      <div class="flex flex-wrap gap-2">
        @foreach (['VS Code', 'Git', 'GitHub', 'Postman', 'Figma', 'XAMPP', 'npm', 'Composer'] as $tag)
        <span class="text-sm font-bold text-black dark:text-white px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-default">
          {{ $tag }}
        </span>
        @endforeach
      </div>
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