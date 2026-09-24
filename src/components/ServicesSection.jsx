import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/studioData';

export default function ServicesSection({ onInquireService }) {
  return (
    <section id="services" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1A1715]/10">
      {/* ── Header ── */}
      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-semibold mb-3"
        >
          What We Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-italiana text-4xl sm:text-6xl md:text-7xl font-normal text-[#1A1715] mb-4"
        >
          Editorial Offerings
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-sm sm:text-base text-[#5E5851] font-light leading-relaxed"
        >
          Each commission is treated as a standalone piece of art, tailored specifically to the energy, cadence, and legacy of your celebration.
        </motion.p>
      </div>

      {/* ── Services Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="p-8 sm:p-10 rounded-2xl bg-white border border-[#1A1715]/10 hover:border-[#7D6652] transition-all duration-400 flex flex-col justify-between group shadow-sm hover:shadow-xl"
          >
            <div>
              {/* Top row: Number & Duration */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1715]/5">
                <span className="font-mono text-xs text-[#7D6652] tracking-widest font-semibold">
                  {service.number}
                </span>
                <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#8E877F] font-medium">
                  {service.duration}
                </span>
              </div>

              {/* Title in High-Contrast Bodoni Moda */}
              <h3 className="font-bodoni text-2xl sm:text-3xl font-normal text-[#1A1715] mb-3 group-hover:text-[#7D6652] transition-colors tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-[#5E5851] font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-8">
                {service.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-center gap-2.5 text-xs text-[#5E5851] font-sans"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7D6652]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquire link */}
            <button
              onClick={() => onInquireService(service)}
              className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1715] group-hover:text-[#7D6652] transition-colors focus:outline-none"
            >
              <span>Connect On WhatsApp</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
