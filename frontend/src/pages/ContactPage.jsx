import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";
import Ticker from "../components/Ticker";
import Footer from "../components/Footer";
import ChatbotDrawer from "../components/ChatbotDrawer";
import { sound } from "../utils/audio";

const SOCIALS = [
  {
    label: "GITHUB",
    handle: "@charlie22-dev",
    href: "https://github.com/charlie22-dev",
    color: "#c2ff01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    label: "FACEBOOK",
    handle: "Charlie Mer Libatod",
    href: personalInfo.facebook || "#",
    color: "#4a90d9",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    label: "EMAIL",
    handle: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#ff4502",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
  },
  {
    label: "PHONE",
    handle: "+63 0927 913 2322",
    href: "tel:09279132322",
    color: "#00d2ff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  }
];

const INPUT_CLASS = "w-full px-4 py-3 rounded-xl border-2 border-[#252525] bg-[#070707] text-[#fcfff7] font-space text-sm focus:outline-none focus:border-[#c2ff01] focus:shadow-[0_0_16px_rgba(194,255,1,0.12)] transition-all placeholder-[#383838]";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    sound.playClick();
    setStatus("submitting");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xwvngydg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { form.reset(); setStatus("success"); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#fcfff7] font-space pb-20">

      {/* ── TOP TICKER ── */}
      <Ticker
        text="GET IN TOUCH → SEND A MESSAGE → COLLABORATE →"
        items={["GET IN TOUCH →","INQUIRIES & COLLABORATIONS →","SEND A TRANSMISSION →","LET'S BUILD SOMETHING →",]}
        bgColor="#ff4502"
        textColor="#fcfff7"
        borderColor="#0a0a0a"
        className="py-4 sm:py-5 text-xl sm:text-3xl font-silkscreen font-bold"
      />

      {/* ── HERO HEADER — clean, readable typography ── */}
      <section className="w-full bg-[#0a0a0a] border-b-4 border-[#181818] px-4 sm:px-12 lg:px-20 pt-12 sm:pt-20 pb-10 sm:pb-16 relative overflow-hidden">
        {/* BG accent */}
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#c2ff01]/[0.03] blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] rounded-full bg-[#ff4502]/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <span className="font-silkscreen text-[10px] sm:text-xs text-[#ff4502] tracking-[4px] uppercase mb-3 sm:mb-4 block">
            // INQUIRIES &amp; COLLABORATIONS
          </span>

          {/* Readable heading — not shuffled/garbled */}
          <h1 className="font-silkscreen font-black uppercase leading-none mb-4 sm:mb-6 text-[#fcfff7]"
            style={{ fontSize: "clamp(2rem, 8vw, 6.5rem)", letterSpacing: "0.02em" }}>
            <span className="text-[#c2ff01]">GET</span>{" "}
            <span>IN</span>{" "}
            <span className="text-[#ff4502]">TOUCH</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <p className="font-space text-sm sm:text-base text-white/55 max-w-lg leading-relaxed">
              Have a question, opportunity, or project proposal? Send a transmission below or reach out directly.
            </p>
            {/* Availability pill */}
            <div className="flex items-center gap-2.5 bg-[#0e0e0e] border border-[#1e1e1e] rounded-full px-4 py-2 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-pulse flex-shrink-0" />
              <span className="font-silkscreen text-[9px] sm:text-[10px] text-[#00ff88] tracking-[2px] whitespace-nowrap">AVAILABLE FOR WORK</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN 2-COL LAYOUT ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: CONTACT FORM ── */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b0b0b] border-2 border-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-l-[3px] border-t-[3px] border-[#c2ff01] rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-r-[3px] border-b-[3px] border-[#ff4502] rounded-br-2xl pointer-events-none" />

              <div className="mb-6 sm:mb-8">
                <span className="font-silkscreen text-[11px] sm:text-xs text-[#c2ff01] tracking-[2px] sm:tracking-[3px] uppercase block mb-2">
                  ◄ SEND A MESSAGE ►
                </span>
                <div className="h-0.5 w-10 bg-[#ff4502]" />
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-[#c2ff01]/10 border-2 border-[#c2ff01] text-[#c2ff01] font-silkscreen text-xs">
                  ✦ TRANSMISSION RECEIVED — I will respond within 24-48 hours.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-[#ff4502]/10 border-2 border-[#ff4502] text-[#ff4502] font-silkscreen text-xs">
                  ✦ TRANSMISSION FAILED — Please reach out via email directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="font-silkscreen text-[10px] text-[#c2ff01] font-bold tracking-[2px] mb-2 block uppercase">► YOUR NAME</label>
                    <input type="text" name="name" required placeholder="Juan dela Cruz" onFocus={() => sound.playHover()} className={INPUT_CLASS} />
                  </div>
                  <div>
                    <label className="font-silkscreen text-[10px] text-[#c2ff01] font-bold tracking-[2px] mb-2 block uppercase">► YOUR EMAIL</label>
                    <input type="email" name="email" required placeholder="juan@example.com" onFocus={() => sound.playHover()} className={INPUT_CLASS} />
                  </div>
                </div>

                <div>
                  <label className="font-silkscreen text-[10px] text-[#c2ff01] font-bold tracking-[2px] mb-2 block uppercase">► SUBJECT / PROJECT TYPE</label>
                  <select name="subject" onFocus={() => sound.playHover()} className={INPUT_CLASS + " cursor-pointer"}>
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
                  <label className="font-silkscreen text-[10px] text-[#c2ff01] font-bold tracking-[2px] mb-2 block uppercase">► MESSAGE / PROJECT DETAILS</label>
                  <textarea name="message" rows="5" required placeholder="Hi Charlie, I would like to discuss..." onFocus={() => sound.playHover()} className={INPUT_CLASS + " resize-none"} />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  onClick={() => status !== "submitting" && sound.playClick()}
                  className="w-full py-4 bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-xs sm:text-sm font-bold uppercase tracking-[3px] rounded-xl border-2 border-[#0a0a0a] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-3 hover:bg-white hover:shadow-[0_0_30px_rgba(194,255,1,0.35)] transition-all active:scale-[0.98]"
                >
                  <span>{status === "submitting" ? "TRANSMITTING..." : "SEND TRANSMISSION"}</span>
                  <span className="text-base">{status === "submitting" ? "⏳" : "→"}</span>
                </button>
              </form>
            </div>
          </div>

          {/* ── RIGHT: INFO PANEL ── */}
          <div className="lg:col-span-5 space-y-5">

            {/* Status card */}
            <div className="bg-[#0b0b0b] border-2 border-[#1a1a1a] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00ff88]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88] animate-pulse flex-shrink-0" />
                <span className="font-silkscreen text-[10px] text-[#00ff88] tracking-[2px]">AVAILABLE FOR WORK</span>
              </div>
              <p className="font-space text-sm text-white/60 leading-relaxed">
                Open to freelance projects, full-stack web dev contracts, and collaborative opportunities.
                Response time: <span className="text-[#c2ff01] font-bold">24–48 hours</span>.
              </p>
            </div>

            {/* Direct channels */}
            <div className="bg-[#0b0b0b] border-2 border-[#1a1a1a] rounded-2xl p-6">
              <span className="font-silkscreen text-[10px] text-[#ff4502] tracking-[3px] uppercase block mb-5">
                // DIRECT CHANNELS
              </span>
              <div className="space-y-3">
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.label !== "PHONE" && s.label !== "EMAIL" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="flex items-center gap-4 p-3.5 rounded-xl border-2 border-[#1a1a1a] hover:border-[#c2ff01]/50 hover:bg-[#c2ff01]/[0.04] transition-all group"
                  >
                    <span className="flex-shrink-0 transition-transform group-hover:scale-110" style={{ color: s.color }}>{s.icon}</span>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <div className="font-silkscreen text-[9px] text-white/30 tracking-[2px] mb-0.5">{s.label}</div>
                      <div className="font-space text-sm text-white/80 group-hover:text-[#c2ff01] transition-colors truncate font-medium">{s.handle}</div>
                    </div>
                    <span className="ml-auto text-white/20 group-hover:text-[#c2ff01] group-hover:translate-x-1 transition-all flex-shrink-0">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Process card */}
            <div className="bg-[#0b0b0b] border-2 border-[#1a1a1a] rounded-2xl p-6">
              <span className="font-silkscreen text-[10px] text-[#ff4502] tracking-[3px] uppercase block mb-5">
                // HOW IT WORKS
              </span>
              <div className="space-y-4">
                {[
                  { step: "01", label: "Send a message", desc: "Fill out the form or reach out directly." },
                  { step: "02", label: "I'll respond", desc: "Expect a reply within 24-48 hours." },
                  { step: "03", label: "Let's build", desc: "We align on scope, timeline, and tech stack." },
                ].map(({ step, label, desc }) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="font-silkscreen text-[10px] font-bold text-[#c2ff01]/50 pt-0.5 flex-shrink-0 w-6">{step}</div>
                    <div>
                      <div className="font-silkscreen text-[10px] text-white/70 tracking-wider mb-0.5">{label}</div>
                      <div className="font-space text-xs text-white/35">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back button */}
            <button
              onClick={() => { sound.playClick(); navigate("/"); }}
              className="w-full py-3.5 bg-transparent border-2 border-[#252525] text-white/40 font-silkscreen text-xs tracking-[2px] rounded-xl hover:border-[#ff4502] hover:text-[#ff4502] transition-all"
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
