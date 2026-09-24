import React from 'react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.6 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 px-6 md:px-12 border-t border-[#1A1715]/10 bg-[#EFEBE3]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Left: Studio Text Branding */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-italiana text-2xl sm:text-3xl tracking-[0.24em] font-normal text-[#1A1715] leading-none">
            NEW LOOK
          </span>
          <span className="font-montserrat text-[9px] uppercase tracking-[0.45em] text-[#7D6652] mt-1 font-semibold">
            PHOTO STUDIO
          </span>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 font-montserrat text-xs uppercase tracking-[0.2em] text-[#5E5851]">
          <button onClick={() => onNavigate('hero')} className="hover:text-[#7D6652] transition-colors font-medium">
            Home
          </button>
          <button onClick={() => onNavigate('portfolio')} className="hover:text-[#7D6652] transition-colors font-medium">
            Portfolio
          </button>
          <button onClick={() => onNavigate('services')} className="hover:text-[#7D6652] transition-colors font-medium">
            Offerings
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-[#7D6652] transition-colors font-medium">
            The Artist
          </button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#7D6652] transition-colors font-medium">
            Contact
          </button>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-2 font-montserrat text-xs text-[#8E877F]">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#1A1715] transition-colors font-medium"
          >
            <span>Back to top</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          <p className="tracking-wide">&copy; {new Date().getFullYear()} NEW LOOK PHOTO STUDIO. Elegantly Crafted.</p>
        </div>
      </div>
    </footer>
  );
}
