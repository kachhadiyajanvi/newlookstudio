import React from 'react';
import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/studioData';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto border-t border-[#1A1715]/10 text-center">
      {/* ── Section Header matching Reference Website ── */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-sans text-xs uppercase tracking-[0.25em] text-[#5A5A5A] mb-3 font-normal"
      >
        Inquire
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#1A1A1A] mb-4 tracking-tight"
      >
        Let's tell your story
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-sans text-base sm:text-lg text-[#5A5A5A] font-light max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        We take on a limited number of commissions each year to ensure the highest level of artistry. Reach out directly to secure your date.
      </motion.p>

      {/* ── Hero Action CTAs (Clean, Sharp Rectangular Buttons) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10"
      >
        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] text-white hover:bg-transparent hover:text-[#1A1A1A] border border-[#1A1A1A] font-sans text-xs uppercase tracking-[0.2em] font-normal transition-all duration-300 rounded-none inline-flex items-center justify-center gap-3"
        >
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${STUDIO_INFO.phoneClean}`}
          className="w-full sm:w-auto px-10 py-4 bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A] font-sans text-xs uppercase tracking-[0.2em] font-normal transition-all duration-300 rounded-none inline-flex items-center justify-center gap-3"
        >
          <span>Call</span>
        </a>

        <a
          href={`mailto:${STUDIO_INFO.email}`}
          className="w-full sm:w-auto px-10 py-4 bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A] font-sans text-xs uppercase tracking-[0.2em] font-normal transition-all duration-300 rounded-none inline-flex items-center justify-center gap-3"
        >
          <span>Send an Email</span>
        </a>
      </motion.div>

      {/* ── Direct Phone & WhatsApp Note with Underlines ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-sans text-sm text-[#5A5A5A] mb-12"
      >
        Call:{' '}
        <a
          href={`tel:${STUDIO_INFO.phoneClean}`}
          className="text-[#1A1A1A] font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
        >
          {STUDIO_INFO.phone}
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        WhatsApp:{' '}
        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1A1A1A] font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
        >
          {STUDIO_INFO.whatsapp}
        </a>
      </motion.p>

      {/* ── Luxury Circular Social Links ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center justify-center gap-10 sm:gap-14 pt-8 border-t border-[#1A1715]/10"
      >
        {/* Instagram */}
        <div className="flex flex-col items-center gap-2">
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <span className="font-sans text-xs tracking-wider text-[#5A5A5A]">Instagram</span>
        </div>

        {/* YouTube */}
        <div className="flex flex-col items-center gap-2">
          <a
            href={STUDIO_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
            </svg>
          </a>
          <span className="font-sans text-xs tracking-wider text-[#5A5A5A]">YouTube</span>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center gap-2">
          <a
            href={`mailto:${STUDIO_INFO.email}`}
            aria-label="Email"
            className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <span className="font-sans text-xs tracking-wider text-[#5A5A5A]">Email</span>
        </div>
      </motion.div>
    </section>
  );
}
