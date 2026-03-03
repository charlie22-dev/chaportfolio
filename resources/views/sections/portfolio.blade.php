@extends('layouts.app')

@section('title', 'Charlie Mer Libatod - Aspiring Software Engineer')

@section('content')

  {{-- HERO --}}
  <section class="pt-10 pb-2">
    <div class="flex flex-col sm:flex-row items-start gap-6">

      {{-- Left: Photo --}}
      <div class="w-24 h-24 sm:w-36 sm:h-36 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shrink-0 relative group">
  <img src="{{ asset('images/charlie.jpg') }}" class="w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0" alt="Charlie Mer Libatod">
  <img src="{{ asset('images/charlie2.png') }}" class="w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" alt="Charlie Mer Libatod">
</div>

      {{-- Right: Info --}}
      <div class="flex-1 pt-1">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style="font-family: 'DM Serif Display', serif;">
            Charlie Mer Libatod
          </h1>
          {{-- Theme Toggle Switch --}}
<button id="themeToggle" class="relative inline-flex items-center w-12 h-6 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 focus:outline-none">
  <span class="absolute left-1 dark:left-6 w-4 h-4 rounded-full bg-gray-900 dark:bg-white shadow transition-all duration-300 flex items-center justify-center text-[8px]">
    <span class="sun hidden dark:block">☀️</span>
    <span class="moon block dark:hidden">🌙</span>
  </span>
</button>
        </div>

        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Malabon City, Philippines
        </p>

        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Aspiring Software Engineer \ Web Developer \ Lifelong Learner
        </p>

        <div class="flex gap-2 flex-wrap mt-4">
          <a href="mailto:malinaocharlie74@gmail.com" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Send Email
          </a>
          <a href="https://github.com/charlie22-dev" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>

  <hr class="my-8 border-gray-100 dark:border-gray-800"/>

  {{-- ABOUT + EXPERIENCE (two column like bryllim) --}}
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {{-- LEFT: About --}}
    <div id="about">
      <h2 class="text-lg font-bold tracking-tight mb-4 text-gray-900 dark:text-white">About</h2>
      <div class="text-sm text-black dark:text-white leading-[1.85] space-y-4">
        <p>I'm Charlie Mer Libatod, an aspiring software engineer and web developer currently studying at Global Reciprocal Colleges in Malabon City, Philippines. I'm passionate about building things for the web and constantly pushing myself to learn more.</p>
        <p>I started my coding journey in 2023 and have been hooked ever since. I'm currently learning Python, C#, JavaScript, and Laravel — with a goal to master everything the industry has to offer.</p>
        <p>I believe in learning by building, sharing knowledge with others, and growing one project at a time. I'm just getting started — and I'm excited for what's ahead.</p>
      </div>
    </div>

    
    {{-- RIGHT: Experience --}}
<div id="experience">
  <h2 class="text-lg font-bold tracking-tight mb-4 text-gray-900 dark:text-white">Experience</h2>
  <div class="space-y-0 relative">
  @foreach ([
    ['2026', 'BS Information Technology', 'Global Reciprocal Colleges',  true],
    ['2024', 'IT Support',                'Part-time / Volunteer',       false],
    ['2024', 'School Hackathon',          'Global Reciprocal Colleges',  false],
    ['2024', 'Started College',           'Global Reciprocal Colleges',  false],
    ['2023', 'Hello World! 👋🏻',           'Wrote my first line of code', false],
  ] as $index => $item)
  <div class="flex items-start justify-between py-3 group cursor-default relative">

    {{-- Vertical connecting line --}}
    @if (!$loop->last)
    <div class="absolute left-[5px] top-6 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
    @endif

    <div class="flex items-start gap-3">
      {{-- Dot --}}
      <div class="w-3 h-3 mt-1 shrink-0 border-2 rounded-sm transition-all duration-200 z-10
        {{ $item[3]
          ? 'bg-gray-900 dark:bg-white border-gray-900 dark:border-white'
          : 'bg-white dark:bg-[#0f1117] border-gray-400 dark:border-gray-600 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:border-gray-900 dark:group-hover:border-white'
        }}">
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ $item[1] }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ $item[2] }}</p>
      </div>
    </div>
    <span class="text-xs text-gray-400 dark:text-gray-500 shrink-0 ml-4 mt-1">{{ $item[0] }}</span>
  </div>
  @endforeach
</div>

  </section>

  <hr class="my-8 border-gray-100 dark:border-gray-800"/>

  {{-- TECH STACK --}}
  <section id="stack">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Tech Stack</h2>
      <a href="/tech-stack" class="text-xs text-gray-500 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-1">View All →</a>
    </div>
    @foreach ([
      ['Frontend',          ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS']],
      ['Backend',           ['Python', 'C#', 'PHP', 'Laravel']],
      ['Currently Learning',['React', 'Node.js', 'MySQL', 'Docker', 'TypeScript']],
    ] as [$group, $tags])
    <div class="mb-5">
      <p class="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2.5">{{ $group }}</p>
      <div class="flex flex-wrap gap-1.5">
        @foreach ($tags as $tag)
          <span class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1.5 rounded-full cursor-default hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700">{{ $tag }}</span>
        @endforeach
      </div>
    </div>
    @endforeach
  </section>

  <hr class="my-8 border-gray-100 dark:border-gray-800"/>

  {{-- PROJECTS + CERTIFICATIONS (two column like bryllim) --}}
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {{-- LEFT: Projects --}}
    <div id="projects">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Recent Projects</h2>
        <a href="https://github.com/charlie22-dev" target="_blank" class="text-xs text-gray-500 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-1">View All →</a>
      </div>
      <div class="flex flex-col gap-2">
        @foreach ([
          ["Charlie's Portfolio",        'Personal portfolio website built with HTML, CSS and JavaScript', 'charlie22-dev.github.io',  'https://github.com/charlie22-dev'],
          ['Calendar Appreciation Letter','A calendar-based appreciation letter web app',                  'github.com/charlie22-dev',  'https://github.com/charlie22-dev'],
        ] as $project)
        <a href="{{ $project[3] }}" target="_blank" class="flex items-start justify-between border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition group">
          <div>
            <p class="text-sm font-bold text-gray-900 dark:text-white">{{ $project[0] }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ $project[1] }}</p>
            <span class="inline-block mt-2 text-[11px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">{{ $project[2] }}</span>
          </div>
          <span class="text-gray-400 text-lg ml-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
        </a>
        @endforeach
      </div>
    </div>

    {{-- RIGHT: Certifications --}}
    <div>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Certifications</h2>
      </div>
      <div class="flex flex-col gap-2">
        @foreach ([
          ['Programming for Everybody', 'Coursera / University of Michigan', '#'],
          ['Responsive Web Design',     'freeCodeCamp',                      '#'],
          ['JavaScript Algorithms',     'freeCodeCamp',                      '#'],
          ['Git & GitHub Essentials',   'Coursera',                          '#'],
        ] as $cert)
        <a href="{{ $cert[2] }}" class="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition group">
          <div>
            <p class="text-sm font-bold text-gray-900 dark:text-white">{{ $cert[0] }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ $cert[1] }}</p>
          </div>
          <span class="text-gray-400 text-lg ml-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
        </a>
        @endforeach
      </div>
    </div>

  </section>

  <hr class="my-8 border-gray-100 dark:border-gray-800"/>

  {{-- RECOMMENDATIONS + SOCIAL (two column) --}}
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {{-- LEFT: Recommendations --}}
    {{-- RECOMMENDATIONS --}}
<div>
  <h2 class="text-lg font-bold tracking-tight mb-4 text-black dark:text-white">Recommendations</h2>
  
  {{-- Scroll Container --}}
  <div class="relative h-[420px] overflow-hidden">
    
    {{-- Fade top --}}
    <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-[#0f1117] to-transparent z-10 pointer-events-none"></div>
    
    {{-- Fade bottom --}}
    <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#0f1117] to-transparent z-10 pointer-events-none"></div>

    {{-- Scrolling content --}}
    <div id="recoScroll" class="flex flex-col gap-3 animate-scroll">

      @php
      $recos = [
        ['A dedicated and passionate developer who is always eager to learn and improve. Their commitment to quality work makes them stand out.', 'John Doe', 'Senior Developer at Company'],
        ['Hard-working and reliable. Always shows up with enthusiasm and a willingness to take on new challenges. A great teammate.', 'Jane Smith', 'Tech Lead at Startup'],
        ['One of the most motivated students I have mentored. Learns quickly and applies knowledge effectively in real projects.', 'Prof. Alex Cruz', 'University Instructor'],
        ['Charlie has a natural curiosity for technology and a drive to keep improving. He tackles every challenge with a positive attitude.', 'Maria Santos', 'Classmate & Collaborator'],
        ['A fast learner who is not afraid to ask questions and dive deep into problems. Will go far in the industry.', 'Rico Dela Cruz', 'Bootcamp Mentor'],
        ['Charlie is one of the most consistent students I have seen. Always on time, always prepared, always delivering.', 'Prof. James Reyes', 'IT Professor, GRC'],
        ['Worked with Charlie on a school project and was impressed by his attention to detail and willingness to go the extra mile.', 'Ana Villanueva', 'Groupmate, GRC'],
        ['A genuine passion for coding and building things. Charlie approaches every project with creativity and dedication.', 'Kevin Tan', 'Senior Dev, Freelance'],
      ];
      @endphp

      {{-- Render twice for infinite loop effect --}}
      @foreach (array_merge($recos, $recos) as $reco)
      <div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-4">
        <p class="text-sm text-gray-600 dark:text-gray-400 leading-[1.85] mb-3">"{{ $reco[0] }}"</p>
        <p class="text-sm font-semibold text-black dark:text-white">{{ $reco[1] }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ $reco[2] }}</p>
      </div>
      @endforeach

    </div>
  </div>
</div>

    {{-- RIGHT: Social + Open To --}}
    {{-- SOCIAL LINKS --}}
<div>
  <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Social Links</p>
  <div class="flex flex-col gap-2">
    @foreach ([
      ['GitHub',    'https://github.com/charlie22-dev',          'github.com/charlie22-dev'],
      ['Facebook',  'https://www.facebook.com/charlie.libatod',  'facebook.com/charlie.libatod'],
      ['Phone',     'tel:09279132322',                           '0927 913 2322'],
    ] as $social)
    <a href="{{ $social[1] }}" target="_blank" class="flex items-center justify-between px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition group">
      <span class="text-sm font-medium text-black dark:text-white">{{ $social[0] }}</span>
      <div class="flex items-center gap-2">
        <span class="text-xs text-gray-400 hidden sm:block">{{ $social[2] }}</span>
        <span class="text-gray-400 group-hover:translate-x-0.5 transition-transform">↗</span>
      </div>
    </a>
    @endforeach
  </div>
</div>
  </section>

  <hr class="my-8 border-gray-100 dark:border-gray-800"/>


  {{-- CONTACT --}}
<section id="contact">
  <div class="flex flex-col sm:flex-row gap-3">
    <a href="mailto:malinaocharlie74@gmail.com" class="flex-1 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
      <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Email</p>
      <p class="text-sm font-medium text-gray-900 dark:text-white break-all">malinaocharlie74@gmail.com</p>
    </a>
    <a href="https://github.com/charlie22-dev" target="_blank" class="flex-1 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
      <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">GitHub</p>
      <p class="text-sm font-medium text-gray-900 dark:text-white">charlie22-dev</p>
    </a>
  </div>
</section>

  {{-- GALLERY CAROUSEL --}}
{{-- GALLERY CAROUSEL --}}
<section>
  <h2 class="text-lg font-bold tracking-tight mb-4 text-black dark:text-white">Gallery</h2>
  <div class="overflow-hidden">
    <div id="carousel" class="flex gap-3" style="overflow-x: hidden;">
      @foreach ([
            asset('images/charlie3.jpg'),
            asset('images/charlie4.jpg'),
            asset('images/charlie5.jpg'),
            asset('images/charlie6.jpg'),
            asset('images/charlie7.jpg'),
            asset('images/charlie2.png'),
      ] as $img)
      <div class="shrink-0 w-[220px] h-[165px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <img src="{{ $img }}" class="w-full h-full object-cover" alt="Gallery">
      </div>
      @endforeach
    </div>
  </div>
</section>

  <hr class="my-8 border-gray-100 dark:border-gray-800"/>

  {{-- FOOTER --}}
  <footer class="py-10 text-center text-xs text-gray-400 dark:text-gray-600">
    © {{ date('Y') }} Charlie Mer Libatod. All rights reserved.
  </footer>

  {{-- CHAT BOT BUTTON --}}
<div class="fixed bottom-5 right-5 z-50">

  {{-- Chat Window --}}
  <div id="chatWindow" class="hidden mb-3 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
    
    {{-- Header --}}
    <div class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-green-400"></div>
        <span class="text-sm font-semibold text-black dark:text-white">Chat with Charlie</span>
      </div>
      <button onclick="toggleChat()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-lg leading-none">✕</button>
    </div>

    {{-- Messages --}}
    <div id="chatMessages" class="flex flex-col gap-3 p-4 h-72 overflow-y-auto text-sm">
      <div class="bg-gray-100 dark:bg-gray-800 rounded-xl px-3 py-2 text-black dark:text-white max-w-[85%]">
        Hi, I’m Charlie Mer Libatod from Malabon City, Philippines. I’m a BS Information Technology student at Global Reciprocal Colleges and an aspiring software engineer and web developer.

I started coding in 2023 with “Hello World,” and I’m currently learning Python, C#, JavaScript, Laravel, Tailwind CSS, React, and Node.js. I also joined our School Hackathon 2024 and gained IT Support experience in 2024.

I’m passionate about building projects and continuously improving my skills in tech.
      </div>
    </div>

    {{-- Input --}}
    <div class="p-3 border-t border-gray-100 dark:border-gray-800 flex gap-2">
      <input id="chatInput" type="text" placeholder="Ask something..." onkeydown="if(event.key==='Enter') sendMessage()"
        class="flex-1 text-xs px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500"/>
      <button onclick="sendMessage()" class="px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold rounded-lg hover:bg-gray-700 transition">
        Send
      </button>
    </div>
  </div>

  {{-- Toggle Button --}}
  <button onclick="toggleChat()" class="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    Chat with Charlie
  </button>

</div>

@endsection

@push('scripts')
<script>
  // Dark mode
  (function() {
    const html   = document.getElementById('html-root');
    const toggle = document.getElementById('themeToggle');
    const saved  = localStorage.getItem('theme') || 'light';
    if (saved === 'dark') {
      html.classList.add('dark');
    }
    toggle.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  })();

  // Carousel auto scroll
// Smooth infinite auto scroll
const carousel = document.getElementById('carousel');
let scrollAmount = 0;

function smoothScroll() {
  scrollAmount += 0.5;
  if (scrollAmount >= carousel.scrollWidth / 2) {
    scrollAmount = 0;
  }
  carousel.scrollLeft = scrollAmount;
  requestAnimationFrame(smoothScroll);
}

smoothScroll();

  // Pause on hover
  carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
  carousel.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: 240, behavior: 'smooth' });
      }
    }, 2500);
  });

  function scrollCarousel(direction) {
    carousel.scrollBy({ left: direction * 240, behavior: 'smooth' });
  }

  // Chat
  function toggleChat() {
    const win = document.getElementById('chatWindow');
    win.classList.toggle('hidden');
  }

  async function sendMessage() {
    const input    = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const message  = input.value.trim();
    if (!message) return;

    // User bubble
    messages.innerHTML += `
      <div class="flex justify-end">
        <div class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl rounded-br-sm px-3 py-2 max-w-[85%] text-sm">${message}</div>
      </div>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Typing indicator (3 dots like messenger)
    messages.innerHTML += `
      <div id="typing" class="flex justify-start">
        <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
          <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:0ms"></span>
          <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:150ms"></span>
          <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:300ms"></span>
        </div>
      </div>`;
    messages.scrollTop = messages.scrollHeight;

    // Send to Gemini
    const res = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    // Remove typing and show reply
    document.getElementById('typing')?.remove();
    messages.innerHTML += `
      <div class="flex justify-start">
        <div class="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%] text-sm">${data.reply}</div>
      </div>`;
    messages.scrollTop = messages.scrollHeight;
  }
</script>
@endpush
