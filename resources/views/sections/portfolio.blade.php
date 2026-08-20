@extends('layouts.app')

@section('title', 'Charlie Mer Libatod - Aspiring Software Engineer')

@section('content')

  {{-- HERO --}}
  <section class="pt-10 pb-2">
    <div class="flex flex-col sm:flex-row items-start gap-6">
      <div class="w-24 h-24 sm:w-36 sm:h-36 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shrink-0 relative group">
        <img src="{{ asset('images/charlie.jpg') }}" class="w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0" alt="Charlie Mer Libatod">
        <img src="{{ asset('images/charlie2.png') }}" class="w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" alt="Charlie Mer Libatod">
      </div>
      <div class="flex-1 pt-1">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style="font-family: 'DM Serif Display', serif;">
            Charlie Mer Libatod
          </h1>
          <button id="themeToggle" class="relative inline-flex items-center w-12 h-6 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 focus:outline-none">
            <span class="absolute left-1 dark:left-6 w-4 h-4 rounded-full bg-gray-900 dark:bg-white shadow transition-all duration-300 flex items-center justify-center text-[8px]">
              <span class="sun hidden dark:block">☀️</span>
              <span class="moon block dark:hidden">🌙</span>
            </span>
          </button>
        </div>
        <p class="text-sm text-gray-800 dark:text-gray-400 mt-1 flex items-center gap-1 font-medium">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Malabon City, Philippines
        </p>
        <p class="text-base text-gray-900 dark:text-gray-300 mt-2 font-medium">
          Aspiring Software Engineer \ Web Developer \ Lifelong Learner
        </p>
        <div class="flex gap-2 flex-wrap mt-4">
          <a href="/contact" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition">
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

{{-- TWO COLUMN: Left = About + Tech Stack | Right = ID Card + Experience --}}
<section class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">

  {{-- LEFT: About + Tech Stack --}}
  <div class="flex flex-col gap-8">

    <div id="about">
      <h2 class="text-lg font-bold tracking-tight mb-4 text-gray-900 dark:text-white">About</h2>
      <div class="text-sm text-black dark:text-white leading-[1.85] space-y-4">
        <p>I'm Charlie Mer Libatod, an aspiring software engineer and web developer currently studying at Global Reciprocal Colleges in Malabon City, Philippines. I'm passionate about building things for the web and constantly pushing myself to learn more.</p>
        <p>I started my coding journey in 2023 and have been hooked ever since. I'm currently learning Python, C#, JavaScript, and Laravel — with a goal to master everything the industry has to offer.</p>
        <p>I believe in learning by building, sharing knowledge with others, and growing one project at a time. I'm just getting started — and I'm excited for what's ahead.</p>
      </div>
    </div>

    <div id="stack">
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
        <p class="text-sm font-bold text-gray-900 dark:text-white mb-2">{{ $group }}</p>
        <div class="flex flex-wrap gap-4">
          @foreach ($tags as $tag)
            <span class="text-gray-900 dark:text-gray-300 text-sm font-medium cursor-default">{{ $tag }}</span>
          @endforeach
        </div>
      </div>
      @endforeach
    </div>

  </div>

  {{-- RIGHT: ID Card + Experience --}}
  <div class="flex flex-col gap-8">

    {{-- ID Card --}}
    <div class="flex justify-start">
      <div id="devCard"
        class="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer select-none shadow-xl border border-gray-800/60 group flex flex-col p-7"
        style="transform-style: preserve-3d; transition: transform 0.2s ease, box-shadow 0.2s ease; background: linear-gradient(145deg, #2a2a2a 0%, #111111 100%);"
        onmousemove="tiltCard(event)"
        onmouseleave="resetCard()">
        
        {{-- Top Section --}}
        <div class="z-10">
          <svg class="w-8 h-8 text-white mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4 17l6-6-6-6M12 19h8"/></svg>
          <h3 class="text-base font-bold text-white tracking-wide uppercase mb-1">Charlie Mer Libatod</h3>
          <p class="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Access Card</p>
        </div>

        {{-- Middle Section --}}
        <div class="z-10 mt-auto mb-10">
          <p class="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1.5">Role</p>
          <p class="text-xl font-bold text-white uppercase tracking-widest">Full Stack</p>
        </div>

        {{-- Bottom Section --}}
        <div class="z-10 flex justify-between items-end">
          <p class="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Developer</p>
          {{-- QR Code --}}
          <div class="w-12 h-12 transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-105">
             <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/charlie22-dev" class="w-full h-full invert mix-blend-screen" alt="QR">
          </div>
        </div>

        <div id="cardShine" class="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-200 z-20"
          style="background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 60%);">
        </div>
      </div>
    </div>

    {{-- Experience --}}
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
          @if (!$loop->last)
          <div class="absolute left-[5px] top-6 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
          @endif
          <div class="flex items-start gap-3">
            <div class="w-3 h-3 mt-1 shrink-0 border-2 rounded-sm transition-all duration-200 z-10
              {{ $item[3]
                ? 'bg-gray-900 dark:bg-white border-gray-900 dark:border-white'
                : 'bg-white dark:bg-[#0f1117] border-gray-400 dark:border-gray-600 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:border-gray-900 dark:group-hover:border-white'
              }}">
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ $item[1] }}</p>
              <p class="text-sm text-gray-700 dark:text-gray-400 mt-0.5">{{ $item[2] }}</p>
            </div>
          </div>
          <span class="text-sm text-gray-800 dark:text-gray-500 shrink-0 ml-4 mt-1 font-medium">{{ $item[0] }}</span>
        </div>
        @endforeach
      </div>
    </div>

  </div>

</section>

<hr class="my-8 border-gray-100 dark:border-gray-800"/>

  {{-- PROJECTS + CERTIFICATIONS --}}
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10">

    <div id="projects">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Recent Projects</h2>
        <a href="/projects" class="text-xs text-gray-500 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-1">View All →</a>
      </div>
      <div class="flex flex-col" style="gap:0;">
        @php
        $homeProjects = [
          ['Mimalicious',         'High-end burger restaurant website.',            'charlie22-dev.github.io',     'https://charlie22-dev.github.io/newproflect/'],
          ['Tipid Tracker',       'Budget manager built with Python Flask.',        'charlie22.pythonanywhere.com', 'https://charlie22.pythonanywhere.com/'],
          ["Charlie's Portfolio", 'Portfolio built with Laravel and Tailwind.',     'chaportfolio.onrender.com',   'https://chaportfolio-1.onrender.com/'],
          ['Appreciation Letter', 'Calendar-based letter app built with React.',    'charlie22-dev.github.io',     'https://charlie22-dev.github.io/appreciation-letterv2/'],
          ['Sky Cast',            'Real-time weather forecast & analytics app.',     'charlie22-dev.github.io',     'https://charlie22-dev.github.io/weather_app/'],
        ];
        @endphp
        @foreach ($homeProjects as $hi => $project)
        @php
        $enc = urlencode($project[3]);
        $thumb = "https://api.microlink.io/?url={$enc}&screenshot=true&meta=false&embed=screenshot.url";
        @endphp
        <a href="{{ $project[3] }}" target="_blank"
           class="hp-proj-row flex items-center justify-between py-3 group relative"
           style="border-bottom:1px solid #e5e7eb;"
           data-thumb="{{ $thumb }}">
          <span class="text-[10px] font-mono text-gray-300 dark:text-gray-700 w-5 shrink-0">{{ str_pad($hi+1,2,'0',STR_PAD_LEFT) }}</span>
          <span class="flex-1 min-w-0 ml-3">
            <span class="block text-sm font-bold text-gray-900 dark:text-white transition-transform duration-200 group-hover:translate-x-1">{{ $project[0] }}</span>
            <span class="block text-xs text-gray-500 dark:text-gray-500 mt-0.5">{{ $project[1] }}</span>
          </span>
          {{-- Inline preview bubble --}}
          <span class="hp-thumb-wrap" aria-hidden="true"
            style="width:110px;height:72px;border-radius:8px;overflow:hidden;flex-shrink:0;margin:0 10px;
                   opacity:0;transform:scale(0.92);transition:opacity 0.25s cubic-bezier(0.23,1,0.32,1),transform 0.25s cubic-bezier(0.23,1,0.32,1);
                   background:#0f172a;border:1px solid rgba(0,0,0,0.08);position:relative;">
            <span style="position:absolute;inset:0;background:linear-gradient(90deg,#1e293b,#263548 40%,#1e293b);background-size:200% 100%;animation:shimmer 1.5s ease-in-out infinite;" class="hp-skel"></span>
            <img data-src="{{ $thumb }}" alt="" src="" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block;opacity:0;transition:opacity 0.3s ease;position:relative;z-index:1;" class="hp-img" />
          </span>
          <span class="text-gray-300 dark:text-gray-700 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-base">↗</span>
        </a>
        @endforeach
      </div>
    </div>

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
            <p class="text-sm text-gray-800 dark:text-gray-400 mt-0.5">{{ $cert[1] }}</p>
          </div>
          <span class="text-gray-400 text-lg ml-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
        </a>
        @endforeach
      </div>
    </div>

  </section>

  <hr class="my-8 border-gray-100 dark:border-gray-800"/>

  {{-- RECOMMENDATIONS + SOCIAL --}}
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10">

    <div>
      <h2 class="text-lg font-bold tracking-tight mb-4 text-black dark:text-white">Recommendations</h2>
      <div class="relative h-[420px] overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-[#0f1117] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#0f1117] to-transparent z-10 pointer-events-none"></div>
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
          @foreach (array_merge($recos, $recos) as $reco)
          <div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-4">
            <p class="text-sm text-gray-900 dark:text-gray-400 leading-[1.85] mb-3 font-medium">"{{ $reco[0] }}"</p>
            <p class="text-sm font-semibold text-black dark:text-white">{{ $reco[1] }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-400 mt-0.5">{{ $reco[2] }}</p>
          </div>
          @endforeach
        </div>
      </div>
    </div>

    <div>
      <p class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Social Links</p>
      <div class="flex flex-col gap-2">
        @foreach ([
          ['GitHub',    'https://github.com/charlie22-dev',             'github.com/charlie22-dev',     '🐙'],
          ['Facebook',  'https://www.facebook.com/charlie.libatod',      'facebook.com/charlie.libatod', '📘'],
          ['Instagram', 'https://www.instagram.com/h3y.chaa',            'instagram.com/h3y.chaa',       '📸'],
          ['Phone',     'tel:09279132322',                                '0927 913 2322',                '📱'],
        ] as $social)
        <a href="{{ $social[1] }}" target="_blank" class="flex items-center justify-between px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition group">
          <div class="flex items-center gap-3">
            <span class="text-base">{{ $social[3] }}</span>
            <span class="text-sm font-medium text-black dark:text-white">{{ $social[0] }}</span>
          </div>
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

  <hr class="my-8 border-gray-100 dark:border-gray-800"/>

  {{-- GALLERY CAROUSEL --}}
  <section>
    <h2 class="text-lg font-bold tracking-tight mb-4 text-black dark:text-white">Gallery</h2>
    <div class="overflow-hidden">
      <div id="carousel" class="flex gap-3" style="overflow-x: hidden;">
        @php
        $galleryImages = [
          asset('images/charlie3.jpg'),
          asset('images/charlie4.jpg'),
          asset('images/charlie5.jpg'),
          asset('images/charlie6.jpg'),
          asset('images/charlie7.jpg'),
          asset('images/charlie2.png'),
          asset('images/charlie9.jpg'),
          asset('images/charlie10.jpg'),
          asset('images/charlie11.jpg'),
          asset('images/group1.jpg'),
          asset('images/group2.jpg'),
        ];
        @endphp
        @foreach (array_merge($galleryImages, $galleryImages) as $img)
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
  <div class="fixed bottom-4 right-3 sm:right-5 z-50">
    <div id="chatWindow" class="hidden mb-3 w-[85vw] sm:w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300">
      <div class="px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
        <div class="flex items-center gap-2">
          <div class="relative">
            <div class="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 text-xs font-bold">C</div>
            <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
          <div>
            <p class="text-sm font-bold text-black dark:text-white leading-tight">Charlie Mer</p>
            <p class="text-[10px] text-green-500 font-medium">● Online now</p>
          </div>
        </div>
        <button onclick="toggleChat()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">✕</button>
      </div>
      <div id="chatMessages" class="flex flex-col gap-3 p-4 h-72 overflow-y-auto text-sm scroll-smooth">
        <div class="flex justify-start">
          <div class="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%] text-sm animate-fade-in">
            Hey, I'm Charlie Mer Libatod — an IT student and aspiring software engineer from Malabon City. Ask me anything about my work, skills, or background.
          </div>
        </div>
      </div>
      <div class="p-3 border-t border-gray-100 dark:border-gray-800 flex gap-2 bg-white dark:bg-gray-900">
        <input id="chatInput" type="text" placeholder="Type a message..." onkeydown="if(event.key==='Enter') sendMessage()"
          class="flex-1 text-xs px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition"/>
        <button onclick="sendMessage()" class="px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded-xl hover:bg-gray-700 dark:hover:bg-gray-100 transition hover:scale-105 active:scale-95">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        </button>
      </div>
    </div>
    <button onclick="toggleChat()" id="chatToggleBtn"
      class="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group relative">
      <span class="absolute -top-1 -right-1 w-3 h-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
      </span>
      <svg class="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
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
    if (saved === 'dark') html.classList.add('dark');
    toggle.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  })();

  // Smooth infinite auto scroll
  const carousel = document.getElementById('carousel');
  let scrollAmount = 0;
  function smoothScroll() {
    scrollAmount += 0.5;
    if (scrollAmount >= carousel.scrollWidth / 2) scrollAmount = 0;
    carousel.scrollLeft = scrollAmount;
    requestAnimationFrame(smoothScroll);
  }
  smoothScroll();

  // ID Card tilt effect
  function tiltCard(e) {
    const card  = document.getElementById('devCard');
    const shine = document.getElementById('cardShine');
    const rect  = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -15;
    const rotateY = ((x - cx) / cx) *  15;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.35)';
    shine.style.opacity  = '1';
    shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 70%)`;
  }

  function resetCard() {
    const card  = document.getElementById('devCard');
    const shine = document.getElementById('cardShine');
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    shine.style.opacity  = '0';
  }

  // Chat
  function toggleChat() {
    document.getElementById('chatWindow').classList.toggle('hidden');
  }

  async function sendMessage() {
    const input    = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const message  = input.value.trim();
    if (!message) return;

    messages.innerHTML += `
      <div class="flex justify-end">
        <div class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl rounded-br-sm px-3 py-2 max-w-[85%] text-sm">${message}</div>
      </div>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    messages.innerHTML += `
      <div id="typing" class="flex justify-start">
        <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
          <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:0ms"></span>
          <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:150ms"></span>
          <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:300ms"></span>
        </div>
      </div>`;
    messages.scrollTop = messages.scrollHeight;

    let data;
    try {
      const res = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        },
        body: JSON.stringify({ message })
      });
      data = await res.json();
    } catch (err) {
      document.getElementById('typing')?.remove();
      messages.innerHTML += `
        <div class="flex justify-start">
          <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%] text-sm text-black dark:text-white">
            Sorry, connection is slow. Please try again.
          </div>
        </div>`;
      messages.scrollTop = messages.scrollHeight;
      return;
    }

    document.getElementById('typing')?.remove();
    messages.innerHTML += `
      <div class="flex justify-start">
        <div class="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%] text-sm">${data.reply}</div>
      </div>`;
    messages.scrollTop = messages.scrollHeight;
  }
  // Homepage project hover previews
  document.querySelectorAll('.hp-proj-row').forEach(row => {
    const wrap = row.querySelector('.hp-thumb-wrap');
    const img  = row.querySelector('.hp-img');
    const skel = row.querySelector('.hp-skel');
    let loaded = false;

    row.addEventListener('mouseenter', () => {
      wrap.style.opacity = '1';
      wrap.style.transform = 'scale(1)';
      if (!loaded) {
        loaded = true;
        img.src = img.dataset.src;
        img.onload  = () => { img.style.opacity = '1'; if(skel) skel.style.display='none'; };
        img.onerror = () => { if(skel) skel.style.display='none'; };
      }
    });
    row.addEventListener('mouseleave', () => {
      wrap.style.opacity = '0';
      wrap.style.transform = 'scale(0.92)';
    });

    // Apply dark border
    const html = document.getElementById('html-root');
    if (html.classList.contains('dark')) {
      row.style.borderBottomColor = '#1f2937';
    }
  });
</script>
@endpush