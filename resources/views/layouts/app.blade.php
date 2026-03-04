<!DOCTYPE html>
<html lang="en" id="html-root">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', 'Charlie Mer Libatod - Aspiring Software Engineer')</title>
  <link rel="icon" type="image/x-icon" href="{{ asset('images/chaalogo.png') }}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Serif+Display&display=swap" rel="stylesheet"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {}
      }
    }

    
  </script>
  <style>
  
    
  body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
  
  @keyframes scrollUp {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }

  .animate-scroll {
    animation: scrollUp 30s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }

  </style>
</head>
<body class="bg-white dark:bg-[#0f1117] text-black dark:text-white antialiased transition-colors duration-200">

  <main class="max-w-3xl mx-auto px-8">
    @yield('content')
  </main>

  @stack('scripts')

</body>
</html>