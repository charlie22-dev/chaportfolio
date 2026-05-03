@extends('layouts.app')
@section('title', 'Projects - Charlie Mer Libatod')

@push('head')
  <style>
    /* Override container width for projects page */
    body.projects-page main {
      max-width: 62rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    /* ── Split layout ── */
    .projects-shell {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
      min-height: 60vh;
    }

    @media (max-width: 768px) {
      .projects-shell {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .preview-col {
        display: none;
      }

      body.projects-page main {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }
    }

    /* ── Project list ── */
    .project-row {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.1rem 0;
      border-bottom: 1px solid #e5e7eb;
      text-decoration: none;
      cursor: pointer;
      opacity: 0;
      animation: rowIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }

    .dark .project-row {
      border-bottom-color: #1f2937;
    }

    .project-row:first-child {
      border-top: 1px solid #e5e7eb;
    }

    .dark .project-row:first-child {
      border-top-color: #1f2937;
    }

    .project-row.is-active .proj-title {
      color: #111827;
    }

    .dark .project-row.is-active .proj-title {
      color: #f9fafb;
    }

    .project-row.is-active .proj-num {
      color: #6b7280;
    }

    .proj-num {
      font-size: 0.65rem;
      font-weight: 600;
      color: #d1d5db;
      width: 22px;
      flex-shrink: 0;
      padding-top: 3px;
      font-variant-numeric: tabular-nums;
      font-family: monospace;
      transition: color 0.2s ease;
    }

    .dark .proj-num {
      color: #374151;
    }

    .proj-info {
      flex: 1;
      min-width: 0;
    }

    .proj-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #374151;
      font-family: 'DM Serif Display', serif;
      letter-spacing: -0.01em;
      transition: color 0.2s ease, transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
      display: block;
    }

    .dark .proj-title {
      color: #6b7280;
    }

    .project-row:hover .proj-title,
    .project-row.is-active .proj-title {
      transform: translateX(4px);
    }

    .proj-desc {
      font-size: 0.78rem;
      color: #6b7280;
      margin-top: 2px;
      line-height: 1.5;
    }

    .dark .proj-desc {
      color: #4b5563;
    }

    .project-row.is-active .proj-desc {
      color: #6b7280;
    }

    .dark .project-row.is-active .proj-desc {
      color: #9ca3af;
    }

    .proj-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 7px;
    }

    .proj-tag {
      font-size: 0.65rem;
      font-weight: 500;
      color: #374151;
      background: #f3f4f6;
      border: 1px solid #e5e7eb;
      padding: 1px 7px;
      border-radius: 99px;
    }

    .dark .proj-tag {
      color: #9ca3af;
      background: #1f2937;
      border-color: #374151;
    }

    .proj-arrow {
      color: #d1d5db;
      font-size: 1rem;
      flex-shrink: 0;
      padding-top: 2px;
      transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.2s ease;
      opacity: 0;
    }

    .dark .proj-arrow {
      color: #374151;
    }

    .project-row:hover .proj-arrow,
    .project-row.is-active .proj-arrow {
      opacity: 1;
      transform: translate(2px, -2px);
    }

    @keyframes rowIn {
      from {
        opacity: 0;
        transform: translateY(8px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ── Sticky preview column ── */
    .preview-col {
      position: sticky;
      top: 2rem;
    }

    .preview-card {
      border-radius: 14px;
      overflow: hidden;
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.07);
      box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.28), 0 8px 24px -8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05);
      aspect-ratio: 16/10;
      position: relative;
    }

    /* Browser chrome */
    .preview-chrome {
      height: 30px;
      background: #1e293b;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 6px;
      position: relative;
      z-index: 2;
      flex-shrink: 0;
    }

    .chrome-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }

    .chrome-bar {
      flex: 1;
      height: 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 0 7px;
      overflow: hidden;
      margin: 0 4px;
    }

    .chrome-url {
      font-size: 8.5px;
      color: rgba(255, 255, 255, 0.3);
      font-family: monospace;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .preview-body {
      position: relative;
      overflow: hidden;
      flex: 1;
      height: calc(100% - 30px);
    }

    /* Slides */
    .preview-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }

    .preview-slide.active {
      opacity: 1;
    }

    .preview-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      display: block;
    }

    /* Skeleton shimmer */
    .preview-skeleton {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #1e293b 0%, #263548 40%, #1e293b 80%);
      background-size: 200% 100%;
      animation: shimmer 1.6s ease-in-out infinite;
    }

    @keyframes shimmer {
      0% {
        background-position: 200% 0
      }

      100% {
        background-position: -200% 0
      }
    }

    .preview-slide.loaded .preview-skeleton {
      display: none;
    }

    /* Caption below card */
    .preview-caption {
      margin-top: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .caption-name {
      font-size: 0.82rem;
      font-weight: 700;
      color: #111827;
      font-family: 'DM Serif Display', serif;
    }

    .dark .caption-name {
      color: #f9fafb;
    }

    .caption-host {
      font-size: 0.7rem;
      color: #9ca3af;
      font-family: monospace;
    }

    .caption-link {
      font-size: 0.7rem;
      font-weight: 600;
      color: #6b7280;
      text-decoration: none;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      padding: 3px 10px;
      transition: background 0.15s ease, color 0.15s ease;
    }

    .dark .caption-link {
      border-color: #1f2937;
      color: #9ca3af;
    }

    .caption-link:hover {
      background: #f9fafb;
      color: #111827;
    }

    .dark .caption-link:hover {
      background: #1f2937;
      color: #f9fafb;
    }

    /* Back btn */
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      font-weight: 600;
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.18s ease;
    }

    .back-btn:hover {
      color: #111827;
    }

    .dark .back-btn:hover {
      color: #f9fafb;
    }

    .back-btn svg {
      transition: transform 0.18s ease;
    }

    .back-btn:hover svg {
      transform: translateX(-3px);
    }

    .eyebrow {
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #9ca3af;
    }
  </style>
@endpush

@section('content')
  <section class="pt-10 pb-20">

    {{-- Header --}}
    <div class="mb-8">
      <a href="/" class="back-btn mb-5 inline-flex">
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </a>
      <div class="mt-5">
        <p class="eyebrow dark:text-gray-700 mb-1.5">Selected Work</p>
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          style="font-family:'DM Serif Display',serif;">All Projects</h1>
        <p class="text-xs text-gray-400 dark:text-gray-600 mt-1.5">Hover a project to preview it.</p>
      </div>
    </div>

    @php
      $projects = [
        ['name' => 'Mimalicious', 'desc' => 'Premium business delivery website.', 'host' => 'charlie22-dev.github.io', 'url' => 'https://charlie22-dev.github.io/newproflect/', 'tags' => ['HTML', 'CSS', 'JavaScript']],
        ['name' => 'Tipid Tracker', 'desc' => 'Budget manager built with Python Flask.', 'host' => 'charlie22.pythonanywhere.com', 'url' => 'https://charlie22.pythonanywhere.com/', 'tags' => ['Python', 'Flask', 'MySQL']],
        ['name' => "Charlie's Portfolio", 'desc' => 'Portfolio built with Laravel and Tailwind CSS.', 'host' => 'chaportfolio.onrender.com', 'url' => 'https://chaportfolio-1.onrender.com/', 'tags' => ['Laravel', 'Tailwind', 'PHP']],
        ['name' => 'Appreciation Letter', 'desc' => 'Calendar-based letter app built with React.', 'host' => 'charlie22-dev.github.io', 'url' => 'https://charlie22-dev.github.io/appreciation-letterv2/', 'tags' => ['React', 'JavaScript']],
        ['name' => 'Task Manager App', 'desc' => 'Full-stack task tracker with priority levels.', 'host' => 'taskmanagerapp.up.railway.app', 'url' => 'https://taskmanagerapp-production-234.up.railway.app', 'tags' => ['Laravel', 'MySQL', 'PHP']],
      ];
    @endphp

    <div class="projects-shell">

      {{-- LEFT: list --}}
      <div>
        @foreach ($projects as $i => $p)
          <a href="{{ $p['url'] }}" target="_blank" class="project-row {{ $i === 0 ? 'is-active' : '' }}"
            data-index="{{ $i }}" data-name="{{ $p['name'] }}" data-host="{{ $p['host'] }}"
            style="animation-delay:{{ $i * 55 }}ms;">
            <span class="proj-num">{{ str_pad($i + 1, 2, '0', STR_PAD_LEFT) }}</span>
            <span class="proj-info">
              <span class="proj-title">{{ $p['name'] }}</span>
              <span class="proj-desc">{{ $p['desc'] }}</span>
              <span class="proj-tags">
                @foreach ($p['tags'] as $t)<span class="proj-tag">{{ $t }}</span>@endforeach
              </span>
            </span>
            <span class="proj-arrow">↗</span>
          </a>
        @endforeach
        <p class="mt-6 text-xs text-gray-400 dark:text-gray-700 font-medium">{{ count($projects) }} projects</p>
      </div>

      {{-- RIGHT: sticky preview --}}
      <div class="preview-col">
        <div class="preview-card" style="display:flex;flex-direction:column;">
          <div class="preview-chrome">
            <span class="chrome-dot" style="background:#ff5f57"></span>
            <span class="chrome-dot" style="background:#febc2e"></span>
            <span class="chrome-dot" style="background:#28c840"></span>
            <div class="chrome-bar">
              <span class="chrome-url" id="previewUrl">{{ $projects[0]['host'] }}</span>
            </div>
          </div>
          <div class="preview-body">
            @foreach ($projects as $i => $p)
              @php
                $encoded = urlencode($p['url']);
                $src = "https://api.microlink.io/?url={$encoded}&screenshot=true&meta=false&embed=screenshot.url";
              @endphp
              <div class="preview-slide {{ $i === 0 ? 'active' : '' }}" data-slide="{{ $i }}" id="slide-{{ $i }}">
                <div class="preview-skeleton"></div>
                <img src="" data-src="{{ $src }}" alt="{{ $p['name'] }} preview"
                  style="opacity:0; transition: opacity 0.4s ease;" loading="lazy" />
              </div>
            @endforeach
          </div>
        </div>
        <div class="preview-caption">
          <div>
            <p class="caption-name" id="captionName">{{ $projects[0]['name'] }}</p>
            <p class="caption-host" id="captionHost">{{ $projects[0]['host'] }}</p>
          </div>
          <a href="{{ $projects[0]['url'] }}" target="_blank" class="caption-link" id="captionLink">Visit ↗</a>
        </div>
      </div>

    </div>
  </section>
@endsection

@push('scripts')
  <script>
    document.body.classList.add('projects-page');

    // Dark mode
    (function () {
      const h = document.getElementById('html-root');
      if (localStorage.getItem('theme') === 'dark') h.classList.add('dark');
    })();

    const rows = document.querySelectorAll('.project-row');
    const slides = document.querySelectorAll('.preview-slide');
    const urlEl = document.getElementById('previewUrl');
    const nameEl = document.getElementById('captionName');
    const hostEl = document.getElementById('captionHost');
    const linkEl = document.getElementById('captionLink');

    // Project data
    const projects = @json($projects);

    let activeIdx = 0;

    function activateProject(idx) {
      if (idx === activeIdx) return;
      activeIdx = idx;

      // Update rows
      rows.forEach((r, i) => r.classList.toggle('is-active', i === idx));

      // Update slides
      slides.forEach((s, i) => {
        s.classList.toggle('active', i === idx);
        // Lazy-load the image when first activated
        if (i === idx) {
          const img = s.querySelector('img');
          if (img && !img.src && img.dataset.src) {
            img.src = img.dataset.src;
            img.onload = () => {
              img.style.opacity = '1';
              s.classList.add('loaded');
            };
            img.onerror = () => { s.classList.add('loaded'); };
          }
        }
      });

      // Update caption
      const p = projects[idx];
      urlEl.textContent = p.host;
      nameEl.textContent = p.name;
      hostEl.textContent = p.host;
      linkEl.href = p.url;
    }

    // Activate on hover (mouseenter on the row area)
    rows.forEach((row, i) => {
      row.addEventListener('mouseenter', () => activateProject(i));
    });

    // Load first slide on idle
    (function loadFirst() {
      const first = document.getElementById('slide-0');
      const img = first.querySelector('img');
      if (img && img.dataset.src) {
        img.src = img.dataset.src;
        img.onload = () => { img.style.opacity = '1'; first.classList.add('loaded'); };
        img.onerror = () => { first.classList.add('loaded'); };
      }
    })();

    // Preload subsequent slides on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        slides.forEach((s, i) => {
          if (i === 0) return;
          const img = s.querySelector('img');
          if (img && img.dataset.src && !img.src) {
            const t = new Image();
            t.onload = () => { img.src = img.dataset.src; img.style.opacity = '1'; s.classList.add('loaded'); };
            t.src = img.dataset.src;
          }
        });
      }, { timeout: 4000 });
    }
  </script>
@endpush