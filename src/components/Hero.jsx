import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onExploreClick, onInquireClick }) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  // ── Cinematic Golden Dust Canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    class DustParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * -0.5 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.glow = Math.random() * 8 + 4;
        this.wobble = Math.random() * 100;
      }

      update() {
        this.x += this.speedX + Math.sin(this.wobble) * 0.25;
        this.y += this.speedY;
        this.wobble += 0.02;

        if (this.y < -15) this.y = height + 15;
        if (this.x < -15) this.x = width + 15;
        if (this.x > width + 15) this.x = -15;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 102, 82, ${this.opacity})`;
        ctx.shadowBlur = this.glow;
        ctx.shadowColor = 'rgba(200, 169, 126, 0.6)';
        ctx.fill();
      }
    }

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 55);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new DustParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ── Mouse Parallax ──
  const handleMouseMove = (e) => {
    if (!bgRef.current) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    bgRef.current.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!bgRef.current) return;
    bgRef.current.style.transform = 'translate3d(0, 0, 0)';
    bgRef.current.style.transition = 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
  };

  const handleMouseEnter = () => {
    if (!bgRef.current) return;
    bgRef.current.style.transition = 'none';
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* ── Background Aurora & Parallax Container ── */}
      <div
        ref={bgRef}
        className="absolute inset-[-40px] pointer-events-none transition-transform will-change-transform"
      >
        <div className="absolute top-[-10vw] left-[-5vw] w-[55vw] h-[55vw] rounded-full bg-[#7D6652]/15 blur-[120px] animate-aurora-slow" />
        <div className="absolute bottom-[-10vw] right-[-5vw] w-[50vw] h-[50vw] rounded-full bg-[#C8A97E]/20 blur-[130px] animate-aurora-medium" />
        <div className="absolute top-[35%] left-[25%] w-[42vw] h-[42vw] rounded-full bg-[#929E45]/12 blur-[110px] animate-aurora-slow" />

        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#E2B77A]/20 to-transparent blur-[90px] animate-light-leak" />
        <div className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-[#7D6652]/15 to-transparent blur-[100px] animate-light-leak" />
      </div>

      {/* Canvas Dust Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[2]" />

      {/* Film Grain & Vignette */}
      <div className="absolute inset-0 film-grain z-[3]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F4EE] z-[3] opacity-80" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Curated Category Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#1A1715]/15 bg-white/60 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A1715]" />
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#5A5A5A] font-normal">
            WEDDING & EDITORIAL FILMS
          </span>
        </motion.div>

        {/* ── Headline in Iconic Playfair Display ── */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl sm:text-8xl md:text-9xl text-[#1A1715] font-normal tracking-[-0.02em] leading-none"
          >
            New Look & Studio
          </motion.h1>
        </div>

        {/* Sub-headline in Playfair Display Italic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mb-8"
        >
          <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#5A5A5A] font-normal leading-snug">
            Make a timeless love story
          </p>
        </motion.div>

        {/* Descriptive bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="font-sans text-base sm:text-lg text-[#5A5A5A] font-light max-w-2xl leading-relaxed mb-12"
        >
          A stunning collection capturing every beautiful moment. Editorial honesty blended seamlessly with cinematic elegance and bespoke artistry.
        </motion.p>

        {/* Minimalist Editorial Buttons (Sharp Corners like Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] font-normal bg-[#1A1715] text-[#F7F4EE] hover:bg-transparent hover:text-[#1A1715] border border-[#1A1715] transition-all duration-300 flex items-center justify-center gap-3 rounded-none group"
          >
            <span>View Work</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button
            onClick={onInquireClick}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] font-normal border border-[#1A1715] bg-transparent text-[#1A1715] hover:bg-[#1A1715] hover:text-[#F7F4EE] transition-all duration-300 rounded-none"
          >
            Inquire For Date
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={onExploreClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#5E5851] group-hover:text-[#7D6652] transition-colors font-mono">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-[#1A1715]/15 relative overflow-hidden">
          <motion.div
            animate={{ y: [-30, 45] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-full h-1/2 bg-[#7D6652]"
          />
        </div>
      </motion.div>
    </section>
  );
}
