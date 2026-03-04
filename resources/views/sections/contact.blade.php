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
  <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">Send me a message and I will get back to you as soon as possible.</p>

  {{-- Success Message --}}
  <div id="successMsg" class="hidden mb-6 px-4 py-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-medium">
    Message sent! I will get back to you soon.
  </div>

  {{-- Error Message --}}
  <div id="errorMsg" class="hidden mb-6 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm font-medium">
    Something went wrong. Please try again.
  </div>

  {{-- Form --}}
  <form id="contactForm" action="https://formspree.io/f/xwvngydg" method="POST" class="flex flex-col gap-4">

    <div>
      <label class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5 block">Your Name</label>
      <input type="text" name="name" required placeholder="Juan dela Cruz"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition"/>
    </div>

    <div>
      <label class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5 block">Your Email</label>
      <input type="email" name="email" required placeholder="juan@email.com"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition"/>
    </div>

    <div>
      <label class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5 block">Message</label>
      <textarea name="message" rows="6" required placeholder="Hi Charlie, I wanted to reach out about..."
        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition resize-none"></textarea>
    </div>

    <button type="submit" id="submitBtn"
      class="w-full py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold hover:bg-gray-700 dark:hover:bg-gray-100 transition">
      Send Message
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

  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const successMsg = document.getElementById('successMsg');
  const errorMsg   = document.getElementById('errorMsg');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xwvngydg', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        successMsg.classList.remove('hidden');
        errorMsg.classList.add('hidden');
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      } else {
        throw new Error('Failed');
      }
    } catch (err) {
      errorMsg.classList.remove('hidden');
      successMsg.classList.add('hidden');
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
</script>
@endpush