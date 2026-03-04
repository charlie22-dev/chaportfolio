@extends('layouts.app')

@section('title', 'Contact - Charlie Mer Libatod')

@section('content')

<section class="pt-10 pb-16 max-w-xl mx-auto">

  {{-- Back button --}}
  <a href="/" class="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition mb-8 group">
    <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
    Back to Home
  </a>

  <h1 class="text-3xl font-bold tracking-tight text-black dark:text-white mb-2" style="font-family: 'DM Serif Display', serif;">Get in Touch</h1>
  <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">Send me a message and I'll get back to you as soon as possible!</p>

  {{-- Success Message --}}
  @if(session('success'))
  <div class="mb-6 px-4 py-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-medium">
    {{ session('success') }}
  </div>
  @endif

  {{-- Form --}}
  <form action="/contact" method="POST" class="flex flex-col gap-4">
    @csrf

    <div>
      <label class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5 block">Your Name</label>
      <input type="text" name="name" value="{{ old('name') }}" placeholder="Juan dela Cruz"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition"/>
      @error('name') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
    </div>

    <div>
      <label class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5 block">Your Email</label>
      <input type="email" name="email" value="{{ old('email') }}" placeholder="juan@email.com"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition"/>
      @error('email') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
    </div>

    <div>
      <label class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5 block">Message</label>
      <textarea name="message" rows="6" placeholder="Hi Charlie, I wanted to reach out about..."
        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition resize-none">{{ old('message') }}</textarea>
      @error('message') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
    </div>

    <button type="submit"
      class="w-full py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold hover:bg-gray-700 dark:hover:bg-gray-100 transition">
      Send Message 📨
    </button>

  </form>

</section>

@endsection

@push('scripts')
<script>
  (function() {
    const html  = document.getElementById('html-root');
    const saved = localStorage.getItem('theme') || 'light';
    if (saved === 'dark') html.classList.add('dark');
  })();
</script>
@endpush