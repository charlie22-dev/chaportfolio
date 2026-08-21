import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import ChatbotDrawer from '../components/ChatbotDrawer';
import { certificationsList } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function CertificationsPage() {
  const [lightbox, setLightbox] = useState(null); // holds the cert object when open

  const openLightbox = (cert) => {
    sound.playClick();
    setLightbox(cert);
  };

  const closeLightbox = () => {
    sound.playClick();
    setLightbox(null);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#fcfff7] select-none font-space pb-20">

      {/* ── HEADER TICKER ─────────────────────────── */}
      <Ticker
        text="CERTIFICATIONS & ACHIEVEMENTS →"
        items={[
          'CERTIFICATIONS & ACHIEVEMENTS →',
          'VERIFIED CREDENTIALS →',
          'HONORS & RECOGNITION →',
          'CHARLIE22-DEV →'
        ]}
        bgColor="#ff4502"
        textColor="#fcfff7"
        borderColor="#0a0a0a"
        className="py-4 sm:py-5 text-xl sm:text-3xl font-silkscreen font-bold"
      />

      {/* ── TITLE BANNER ──────────────────────────── */}
      <section className="w-full bg-[#0044ff] text-[#fcfff7] py-8 sm:py-12 px-4 sm:px-12 lg:px-20 border-b-4 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-silkscreen text-[10px] sm:text-xs text-[#c2ff01] tracking-[2px] sm:tracking-[3px] uppercase block mb-1">
              // VERIFIED CREDENTIALS
            </span>
            <h1 className="font-space font-black text-2xl xs:text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none break-words">
              HONORS &amp; CERTIFICATES
            </h1>
            <p className="font-space text-xs sm:text-sm text-white/70 mt-2 sm:mt-3 max-w-lg">
              Verified digital credentials and completed course certifications. Click any certificate to view full size.
            </p>
          </div>
          <Link
            to="/projects"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="btn-brutalist font-silkscreen text-xs bg-[#c2ff01] text-black font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded border-2 border-[#0a0a0a] uppercase tracking-wider inline-flex items-center gap-2 hover:bg-white transition-colors"
          >
            <span>VIEW WORKS</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ── CERTIFICATES GRID ─────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 py-10 sm:py-16">

        {certificationsList.length === 0 ? (
          <div className="text-center py-20 text-white/40 font-silkscreen text-sm">
            No certificates added yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {certificationsList.map((cert, idx) => (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                onClick={() => cert.image && openLightbox(cert)}
                className={`group bg-[#0e0e0e] border-2 border-[#ff4502] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,69,2,0.15)] hover:border-[#c2ff01] hover:shadow-[0_0_30px_rgba(194,255,1,0.25)] transition-all ${cert.image ? 'cursor-pointer' : ''}`}
              >
                {/* Certificate Image */}
                {cert.image && (
                  <div className="relative overflow-hidden bg-[#111] border-b-2 border-[#1a1a1a]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 xs:h-56 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-silkscreen text-[#c2ff01] text-xs sm:text-sm font-bold tracking-[2px] border-2 border-[#c2ff01] px-3 sm:px-4 py-1.5 sm:py-2 rounded">
                        🔍 VIEW FULL SIZE
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Info */}
                <div className="p-4 sm:p-6">
                  {/* Badge row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-silkscreen text-[9px] sm:text-[10px] font-bold bg-[#ff4502] text-white px-2.5 py-1 rounded">
                      CERT #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-silkscreen text-[9px] sm:text-[10px] text-[#c2ff01]">✓ VERIFIED</span>
                  </div>

                  {/* Title & Provider */}
                  <h3 className="font-space font-bold text-lg sm:text-xl text-white mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="font-silkscreen text-[11px] sm:text-xs text-[#ff4502] tracking-wider mb-3">
                    {cert.provider}
                  </p>

                  {/* Footer */}
                  <div className="border-t border-white/10 pt-3 flex items-center justify-between font-silkscreen text-[10px] sm:text-[11px] text-white/50">
                    <span>{cert.year || 'COMPLETED'}</span>
                    <span className="text-[#c2ff01]">CHARLIE22-DEV</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Coming soon note */}
        <div className="mt-12 text-center font-silkscreen text-xs text-white/30 tracking-widest">
          MORE CERTIFICATIONS IN PROGRESS · CONTINUOUSLY LEARNING
        </div>
      </main>

      {/* ── LIGHTBOX ──────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-3 sm:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:-top-10 sm:right-0 font-silkscreen text-xs sm:text-sm text-white/80 hover:text-[#c2ff01] bg-black/70 px-3 py-1.5 rounded border border-white/20 transition-colors z-10 cursor-pointer"
            >
              [CLOSE ✕]
            </button>

            {/* Certificate image fullscreen */}
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full rounded-xl border-2 border-[#ff4502] shadow-[0_0_60px_rgba(255,69,2,0.4)]"
            />

            {/* Caption */}
            <div className="mt-3 sm:mt-4 flex items-center justify-between px-1">
              <div>
                <p className="font-space font-bold text-white text-base sm:text-lg">{lightbox.title}</p>
                <p className="font-silkscreen text-[11px] sm:text-xs text-[#ff4502] tracking-wider mt-0.5">{lightbox.provider}</p>
              </div>
              <span className="font-silkscreen text-[10px] sm:text-xs text-[#c2ff01] border border-[#c2ff01]/40 px-2.5 sm:px-3 py-1 rounded">
                ✓ VERIFIED
              </span>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ChatbotDrawer />
    </div>
  );
}
