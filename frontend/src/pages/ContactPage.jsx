import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import Ticker from '../components/Ticker';
import Shuffle from '../components/Shuffle';
import Footer from '../components/Footer';
import ChatbotDrawer from '../components/ChatbotDrawer';
import { sound } from '../utils/audio';

const SOCIALS = [
  {
    label: 'GITHUB',
    handle: '@charlie22-dev',
    href: 'https://github.com/charlie22-dev',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    label: 'FACEBOOK',
    handle: 'Charlie Mer Libatod',
    href: personalInfo.facebook || '#',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    label: 'EMAIL',
    handle: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
  },
  {
    label: 'PHONE',
    handle: '+63 0927 913 2322',
    href: 'tel:09279132322',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  }
];

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    sound.playClick();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xwvngydg', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#fcfff7] font-space pb-20">

      {/* ── TOP TICKER ── */}
      <Ticker
        text="GET IN TOUCH → SEND A MESSAGE → COLLABORATE →"
        items={[
          'GET IN TOUCH →',
          'INQUIRIES & COLLABORATIONS →',
          'SEND A TRANSMISSION →',
          'LET\'S BUILD SOMETHING →'
        ]}
        bgColor="#ff4502"
        textColor="#fcfff7"
        borderColor="#0a0a0a"
        className="py-4 sm:py-5 text-xl sm:text-3xl font-silkscreen font-bold"
      />

      {/* ── HERO HEADER ── */}
      <section className="w-full bg-[#0a0a0a] border-b-4 border-[#1a1a1a] px-4 sm:px-12 lg:px-20 pt-10 sm:pt-16 pb-8 sm:pb-14">
        <div className="max-w-7xl mx-auto">
          <span className="font-silkscreen text-[10px] sm:text-xs text-[#ff4502] tracking-[3px] sm:tracking-[4px] uppercase mb-2 sm:mb-3 block">
            // INQUIRIES &amp; COLLABORATIONS
          </span>

          {/* Shuffle "GET IN TOUCH" Heading */}
          <div className="overflow-hidden mb-4 sm:mb-6">
            <Shuffle
              text="GET IN TOUCH"
              tag="h1"
              textAlign="left"
              shuffleDirection="right"
              duration={0.3}
              stagger={0.035}
              shuffleTimes={2}
              animationMode="evenodd"
              triggerOnce={false}
              triggerOnHover={true}
              scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!$%"
              colorFrom="#555555"
              colorTo="#c2ff01"
              style={{
                fontSize: 'clamp(2.2rem, 9vw, 7rem)',
                fontFamily: "'Silkscreen', monospace",
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                color: '#c2ff01',
                textShadow: '0 0 40px rgba(194,255,1,0.25)'
              }}
              className="select-none"
            />
          </div>

          <p className="font-space text-xs sm:text-base text-white/60 max-w-xl leading-relaxed">
            Have a question, opportunity, or project proposal? Send a transmission below or reach out directly.
          </p>
        </div>
      </section>

      {/* ── MAIN 2-COL LAYOUT ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: CONTACT FORM (7 cols) ── */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c0c0c] border-2 border-[#1c1c1c] rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-l-4 border-t-4 border-[#c2ff01] rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-r-4 border-b-4 border-[#ff4502] rounded-br-2xl pointer-events-none" />

              <div className="mb-6 sm:mb-8">
                <span className="font-silkscreen text-[11px] sm:text-xs text-[#c2ff01] tracking-[2px] sm:tracking-[3px] uppercase block mb-2">
                  ◄ SEND A MESSAGE ►
                </span>
                <div className="h-0.5 w-12 bg-[#ff4502]" />
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-[#c2ff01]/10 border-2 border-[#c2ff01] text-[#c2ff01] font-silkscreen text-xs animate-pulse">
                  ✦ TRANSMISSION RECEIVED! I will respond promptly.
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-[#ff4502]/10 border-2 border-[#ff4502] text-[#ff4502] font-silkscreen text-xs">
                  ✦ TRANSMISSION FAILED. Please reach out via email directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="font-silkscreen text-[10px] text-[#c2ff01] font-bold tracking-[2px] mb-2 block uppercase">
                      ► YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Juan dela Cruz"
                      onFocus={() => sound.playHover()}
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border-2 border-[#2a2a2a] bg-[#050505] text-[#fcfff7] font-space text-sm focus:outline-none focus:border-[#c2ff01] focus:shadow-[0_0_12px_rgba(194,255,1,0.15)] transition-all placeholder-[#444]"
                    />
                  </div>
                  <div>
                    <label className="font-silkscreen text-[10px] text-[#c2ff01] font-bold tracking-[2px] mb-2 block uppercase">
                      ► YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="juan@example.com"
                      onFocus={() => sound.playHover()}
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border-2 border-[#2a2a2a] bg-[#050505] text-[#fcfff7] font-space text-sm focus:outline-none focus:border-[#c2ff01] focus:shadow-[0_0_12px_rgba(194,255,1,0.15)] transition-all placeholder-[#444]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-silkscreen text-[10px] text-[#c2ff01] font-bold tracking-[2px] mb-2 block uppercase">
                    ► SUBJECT / PROJECT TYPE
                  </label>
                  <select
                    name="subject"
                    onFocus={() => sound.playHover()}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border-2 border-[#2a2a2a] bg-[#050505] text-[#fcfff7] font-space text-sm focus:outline-none focus:border-[#c2ff01] focus:shadow-[0_0_12px_rgba(194,255,1,0.15)] transition-all cursor-pointer"
                  >
                    <option value="">Select a project type...</option>
                    <option value="fullstack">Full-Stack Web Application</option>
                    <option value="frontend">Frontend / UI Development</option>
                    <option value="backend">Backend / API Development</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="collab">Open Source Collaboration</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="font-silkscreen text-[10px] text-[#c2ff01] font-bold tracking-[2px] mb-2 block uppercase">
                    ► MESSAGE / PROJECT DETAILS
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Hi Charlie, I would like to discuss..."
                    onFocus={() => sound.playHover()}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border-2 border-[#2a2a2a] bg-[#050505] text-[#fcfff7] font-space text-sm focus:outline-none focus:border-[#c2ff01] focus:shadow-[0_0_12px_rgba(194,255,1,0.15)] transition-all resize-none placeholder-[#444]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  onClick={() => status !== 'submitting' && sound.playClick()}
                  className="w-full py-3.5 sm:py-4 bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-xs sm:text-sm font-bold uppercase tracking-[2px] sm:tracking-[3px] rounded-xl border-2 border-[#0a0a0a] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-3 hover:bg-white hover:shadow-[0_0_30px_rgba(194,255,1,0.4)] transition-all active:scale-[0.98]"
                >
                  <span>{status === 'submitting' ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}</span>
                  <span className="text-base sm:text-lg">{status === 'submitting' ? '⏳' : '→'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* ── RIGHT: INFO PANEL (5 cols) ── */}
          <div className="lg:col-span-5 space-y-6">

            {/* Status badge */}
            <div className="bg-[#0c0c0c] border-2 border-[#1c1c1c] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88] animate-pulse" />
                <span className="font-silkscreen text-xs text-[#00ff88] tracking-[2px]">AVAILABLE FOR WORK</span>
              </div>
              <p className="font-space text-sm text-white/70 leading-relaxed">
                Currently open to freelance projects, full-stack web dev contracts, and collaborative opportunities.
                Response time: <span className="text-[#c2ff01] font-bold">24–48 hours</span>.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-[#0c0c0c] border-2 border-[#1c1c1c] rounded-2xl p-6">
              <span className="font-silkscreen text-[10px] text-[#ff4502] tracking-[3px] uppercase block mb-5">
                // DIRECT CHANNELS
              </span>
              <div className="space-y-3">
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.label !== 'PHONE' && s.label !== 'EMAIL' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="flex items-center gap-4 p-3.5 rounded-xl border-2 border-[#1c1c1c] hover:border-[#c2ff01] hover:bg-[#c2ff01]/5 transition-all group"
                  >
                    <span className="text-[#c2ff01] group-hover:scale-110 transition-transform flex-shrink-0">
                      {s.icon}
                    </span>
                    <div className="overflow-hidden min-w-0">
                      <div className="font-silkscreen text-[10px] text-white/40 tracking-[2px] mb-0.5">{s.label}</div>
                      <div className="font-space text-sm text-white/90 group-hover:text-[#c2ff01] transition-colors truncate font-medium">
                        {s.handle}
                      </div>
                    </div>
                    <span className="ml-auto text-white/30 group-hover:text-[#c2ff01] transition-colors flex-shrink-0">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Back */}
            <button
              onClick={() => { sound.playClick(); navigate('/'); }}
              className="w-full py-3.5 bg-transparent border-2 border-[#333] text-white/60 font-silkscreen text-xs tracking-[2px] rounded-xl hover:border-[#ff4502] hover:text-[#ff4502] transition-all"
            >
              ← BACK TO HOME
            </button>
          </div>

        </div>
      </main>

      <Footer />
      <ChatbotDrawer />
    </div>
  );
}
