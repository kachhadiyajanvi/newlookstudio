import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StudioLogo from './StudioLogo';

export default function Navbar({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Blur background after 40px
      setScrolled(currentScrollY > 40);

      // Smart hide / show
      if (currentScrollY > lastScrollY && currentScrollY > 220) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'The Artist' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled
            ? 'bg-[#F7F4EE]/92 backdrop-blur-md border-b border-[#1A1715]/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          {/* Brand Logo with User's Signature Calligraphy */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex items-center focus:outline-none"
            aria-label="NEW LOOK Home"
          >
            <StudioLogo className="h-11 sm:h-13 text-[#1A1715] group-hover:text-[#7D6652] transition-colors" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 relative py-1 focus:outline-none ${
                  activeSection === link.id
                    ? 'text-[#1A1715] font-semibold'
                    : 'text-[#5E5851] hover:text-[#1A1715]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7D6652]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action: Inquire CTA & Mobile Toggle (No Dark/Light switch) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium border border-[#1A1715] text-[#1A1715] hover:bg-[#1A1715] hover:text-[#F7F4EE] transition-all duration-300"
            >
              Inquire
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              <span
                className={`w-6 h-[1.5px] bg-[#1A1715] transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-[#1A1715] transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-[#1A1715] transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#F7F4EE] flex flex-col justify-center items-center px-8 md:hidden text-center"
          >
            {/* Film grain effect */}
            <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 w-full max-w-sm">
              <div className="flex justify-center mb-2">
                <StudioLogo className="h-14 text-[#1A1715]" />
              </div>

              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-serif text-2xl tracking-wider transition-colors ${
                    activeSection === link.id
                      ? 'text-[#7D6652] italic font-medium'
                      : 'text-[#1A1715]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="pt-6 border-t border-[#1A1715]/10 mt-4 flex flex-col gap-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3.5 text-xs uppercase tracking-[0.25em] bg-[#1A1715] text-[#F7F4EE] font-medium shadow-md"
                >
                  Inquire For Your Date
                </button>
                <div className="flex justify-center gap-6 text-xs text-[#5E5851]">
                  <a href="https://wa.me/919054485366" target="_blank" rel="noopener noreferrer" className="hover:text-[#7D6652]">
                    WhatsApp
                  </a>
                  <span>•</span>
                  <a href="tel:+919737165366" className="hover:text-[#7D6652]">
                    Call Studio
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
