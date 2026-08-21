import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechStackPage from './pages/TechStackPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset window and document scroll immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Reset Lenis smooth scroll position
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    }
  }, [pathname, lenisRef]);

  return null;
}

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop lenisRef={lenisRef} />
        <div className="min-h-screen bg-[#000000] text-[#fcfff7] font-space selection:bg-[#c2ff01] selection:text-[#0a0a0a] relative overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
