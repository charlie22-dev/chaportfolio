import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sound } from '../utils/audio';
import QuickMenuDrawer from './QuickMenuDrawer';

export default function Navbar() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    sound.playOpen();
    setDrawerOpen(true);
  };

  return (
    <>
      <nav className="w-full bg-transparent px-4 sm:px-8 md:px-16 pt-5 sm:pt-8 pb-3 sm:pb-4 flex items-center justify-between z-40 relative select-none">
        {/* Left: '...' menu trigger button */}
        <button
          onClick={handleOpenDrawer}
          onMouseEnter={() => sound.playHover()}
          className="text-[#c2ff01] font-silkscreen font-bold text-xl sm:text-2xl tracking-[4px] sm:tracking-[6px] hover:opacity-80 transition-all cursor-pointer bg-transparent border-none p-1 outline-none touch-manipulation"
          title="Open Menu"
        >
          ...
        </button>

        {/* Right: Only 3 links (HOME, WORKS, CONTACT) */}
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 font-silkscreen text-[11px] sm:text-xs md:text-sm tracking-wider sm:tracking-widest">
          <Link
            to="/"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className={`transition-opacity hover:opacity-75 ${location.pathname === '/' ? 'text-[#c2ff01] font-bold' : 'text-[#c2ff01]'
              }`}
          >
            HOME
          </Link>
          <Link
            to="/projects"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className={`transition-opacity hover:opacity-75 ${location.pathname === '/projects' ? 'text-[#c2ff01] font-bold' : 'text-[#c2ff01]'
              }`}
          >
            WORKS
          </Link>
          <Link
            to="/contact"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className={`transition-opacity hover:opacity-75 ${location.pathname === '/contact' ? 'text-[#c2ff01] font-bold' : 'text-[#c2ff01]'
              }`}
          >
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Quick Menu Slide-out Drawer */}
      <QuickMenuDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
