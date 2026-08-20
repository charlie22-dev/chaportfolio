import React from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import IdSection from '../components/IdSection';
import ScrollVelocity from '../components/ScrollVelocity';
import ExploreCards from '../components/ExploreCards';
import TargetCursor from '../components/TargetCursor';
import ChatbotDrawer from '../components/ChatbotDrawer';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Global Target Cursor — locks onto explore cards */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2.5}
        hideDefaultCursor={true}
        hoverDuration={0.25}
        parallaxOn={true}
        cursorColor="#c2ff01"
        cursorColorOnTarget="#ff4502"
      />

      {/* ── SECTION 1: HERO (Full 100vh Initial View) ───────── */}
      <Hero />

      {/* ── SECTION 2: EXPERIENCE / ABOUT THE DEVELOPER ────── */}
      <Ticker
        text="ABOUT THE DEVELOPER →"
        bgColor="#c2ff01"
        textColor="#0a0a0a"
        borderColor="#0a0a0a"
      />
      <IdSection />

      {/* ── VELOCITY TICKER DIVIDER (RED) ───────────────────── */}
      <div className="w-full bg-[#ff4502] text-[#fcfff7] border-y-3 sm:border-y-4 border-[#0a0a0a] py-3.5 sm:py-4 overflow-hidden select-none">
        <ScrollVelocity
          texts={[
            'FULL-STACK ARCHIVE ✦ EXPLORE CAPABILITIES ✦ CHARLIE22-DEV ✦',
            'CERTIFICATES & TECH STACK ✦ PROJECTS & WORKS ✦ SCROLL DOWN ✦'
          ]}
          velocity={60}
          className="mx-3 font-silkscreen font-bold text-lg sm:text-2xl text-[#fcfff7]"
          numCopies={8}
          damping={60}
          stiffness={400}
        />
      </div>

      {/* ── SECTION 3: 3 CHOICES (Certificates / Projects / Tech Stack) */}
      <ExploreCards />

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <Footer />

      {/* ── AI CHATBOT DRAWER ──────────────────────────────── */}
      <ChatbotDrawer />
    </>
  );
}
