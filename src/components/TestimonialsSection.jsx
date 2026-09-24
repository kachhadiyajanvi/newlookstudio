import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/studioData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS.length;

  // Auto-advance every 5.5 seconds unless user hovers
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1A1715]/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Section Header ── */}
      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-medium mb-3"
        >
          Love Letters
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1715] mb-4"
        >
          Kind Words
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-[#5E5851] font-light leading-relaxed"
        >
          Heartfelt sentiments from couples whose most treasured milestones we have had the privilege to document.
        </motion.p>
      </div>

      {/* ── Interactive Testimonial Carousel Container ── */}
      <div className="relative max-w-4xl mx-auto">
        {/* Giant decorative quotation mark */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[160px] font-serif text-[#7D6652]/10 select-none pointer-events-none leading-none">
          “
        </div>

        {/* Carousel Card Presentation */}
        <div className="relative min-h-[340px] sm:min-h-[300px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full p-8 sm:p-14 md:p-16 rounded-2xl bg-white border border-[#1A1715]/10 shadow-xl flex flex-col justify-between text-center relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1.5 text-[#C8A97E] mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text in elegant editorial font */}
              <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-[#1A1715] leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
                "{currentTestimonial.quote}"
              </p>

              {/* Author & Event */}
              <div className="pt-6 border-t border-[#1A1715]/10 flex flex-col items-center">
                <h4 className="font-serif text-base sm:text-lg tracking-wider text-[#1A1715] font-medium">
                  {currentTestimonial.name}
                </h4>
                <p className="text-xs uppercase tracking-[0.25em] text-[#7D6652] mt-1 font-mono">
                  {currentTestimonial.event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Carousel Navigation Controls ── */}
        <div className="flex items-center justify-between mt-10 px-2 sm:px-6">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-12 h-12 rounded-full border border-[#1A1715]/20 bg-white hover:border-[#7D6652] hover:bg-[#7D6652] text-[#1A1715] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm group focus:outline-none"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Interactive Slide Dots & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#8E877F] tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > currentIndex ? 1 : -1);
                    setCurrentIndex(dotIdx);
                  }}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    dotIdx === currentIndex
                      ? 'w-8 bg-[#7D6652]'
                      : 'w-2 bg-[#1A1715]/20 hover:bg-[#1A1715]/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-12 h-12 rounded-full border border-[#1A1715]/20 bg-white hover:border-[#7D6652] hover:bg-[#7D6652] text-[#1A1715] hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm group focus:outline-none"
          >
            <svg
              className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
