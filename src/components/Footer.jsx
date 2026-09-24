import React from 'react';
import StudioLogo from './StudioLogo';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 md:px-12 border-t border-[#1A1715]/10 bg-[#EFEBE3]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Left: Studio Brand */}
        <div className="flex flex-col items-center md:items-start">
          <StudioLogo className="h-12 text-[#1A1715]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E877F] mt-1 font-mono">
            Cinematic & Editorial Photography Studio
          </span>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.2em] text-[#5E5851]">
          <button onClick={() => onNavigate('hero')} className="hover:text-[#7D6652] transition-colors">
            Home
          </button>
          <button onClick={() => onNavigate('portfolio')} className="hover:text-[#7D6652] transition-colors">
            Portfolio
          </button>
          <button onClick={() => onNavigate('services')} className="hover:text-[#7D6652] transition-colors">
            Offerings
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#7D6652] transition-colors">
            The Artist
          </button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#7D6652] transition-colors">
            Contact
          </button>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-[#8E877F]">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#1A1715] transition-colors"
          >
            <span>Back to top</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          <p>&copy; {new Date().getFullYear()} NEWLOOK PHOTO STUDIO. Elegantly Crafted.</p>
        </div>
      </div>
    </footer>
  );
}
