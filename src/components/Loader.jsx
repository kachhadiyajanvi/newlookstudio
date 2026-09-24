import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F7F4EE] text-[#1A1715] px-6 select-none"
        >
          {/* Subtle noise grain */}
          <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />

          {/* Ambient glow */}
          <div className="absolute w-[450px] h-[450px] bg-[#7D6652]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Elegant Haute-Couture Text Logo */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative z-10 flex flex-col items-center text-center mb-8"
          >
            <span className="font-italiana text-5xl sm:text-7xl md:text-8xl tracking-[0.24em] font-normal text-[#1A1715] leading-none mb-3">
              NEW LOOK
            </span>
            <span className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.55em] text-[#7D6652] font-semibold">
              PHOTO STUDIO
            </span>
          </motion.div>

          {/* Subtitle tag */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 0.75, letterSpacing: '0.35em' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-editorial italic text-sm sm:text-base text-[#5E5851] mb-12 font-light"
          >
            Capturing Timeless Stories & Cinematic Elegance
          </motion.p>

          {/* Progress Bar & Counter */}
          <div className="w-56 sm:w-72 flex flex-col items-center gap-3">
            <div className="w-full h-[1.5px] bg-[#1A1715]/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7D6652] via-[#C8A97E] to-[#929E45]"
                style={{ width: `${percent}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between w-full text-[11px] font-mono text-[#8E877F]">
              <span>PREPARING GALLERY</span>
              <span className="text-[#1A1715] font-semibold">{percent}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
