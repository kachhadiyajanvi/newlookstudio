import React from 'react';
import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/studioData';
import StudioLogo from './StudioLogo';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1A1715]/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Studio Signature Logo Accent */}
        <div className="flex justify-center mb-6">
          <StudioLogo className="h-16 text-[#7D6652]" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-medium mb-3"
        >
          Direct Concierge & Booking
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1715] mb-4"
        >
          Let's Tell Your Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-[#5E5851] font-light leading-relaxed max-w-2xl mx-auto mb-14"
        >
          We take on a limited number of commissions each year to ensure the highest level of craftsmanship, bespoke intimacy, and dedicated focus. Reach out directly to discuss your celebration date.
        </motion.p>

        {/* ── Direct Contact Channel Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 text-left">
          {/* Card 1: WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white border border-[#1A1715]/10 shadow-sm hover:shadow-xl hover:border-[#7D6652] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#7D6652]/10 text-[#7D6652] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.072.043.419-.101.824z" />
                </svg>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#7D6652] block mb-1">
                Fastest Response
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1A1715] mb-2">
                WhatsApp Chat
              </h3>
              <p className="text-sm text-[#5E5851] font-light leading-relaxed mb-6">
                Connect directly with our creative director to discuss dates, location, and packages.
              </p>
            </div>
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1715] group-hover:text-[#7D6652] transition-colors"
            >
              <span>Message On WhatsApp</span>
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Card 2: Phone Call */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-white border border-[#1A1715]/10 shadow-sm hover:shadow-xl hover:border-[#7D6652] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#7D6652]/10 text-[#7D6652] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#7D6652] block mb-1">
                Voice Inquiry
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1A1715] mb-2">
                Direct Studio Call
              </h3>
              <p className="text-sm text-[#5E5851] font-light leading-relaxed mb-6">
                Speak directly regarding wedding timelines, custom commissions, and multi-day coverage.
              </p>
            </div>
            <a
              href={`tel:${STUDIO_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1715] group-hover:text-[#7D6652] transition-colors"
            >
              <span>{STUDIO_INFO.phone}</span>
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Card 3: Email Concierge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white border border-[#1A1715]/10 shadow-sm hover:shadow-xl hover:border-[#7D6652] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#7D6652]/10 text-[#7D6652] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#7D6652] block mb-1">
                Editorial Briefs
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1A1715] mb-2">
                Email Studio
              </h3>
              <p className="text-sm text-[#5E5851] font-light leading-relaxed mb-6">
                Send moodboards, event schedules, or editorial commission briefs directly to our desk.
              </p>
            </div>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1715] group-hover:text-[#7D6652] transition-colors"
            >
              <span>{STUDIO_INFO.email}</span>
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* ── Bottom Details & Social Connections ── */}
        <div className="pt-10 border-t border-[#1A1715]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#5E5851]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7D6652]" />
            <span className="font-medium text-[#1A1715]">{STUDIO_INFO.location}</span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7D6652] uppercase tracking-widest font-medium transition-colors"
            >
              Instagram
            </a>
            <a
              href={STUDIO_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7D6652] uppercase tracking-widest font-medium transition-colors"
            >
              YouTube
            </a>
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7D6652] uppercase tracking-widest font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
