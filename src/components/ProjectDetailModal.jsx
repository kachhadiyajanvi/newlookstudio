import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STUDIO_INFO } from '../data/studioData';

export default function ProjectDetailModal({ project, isOpen, onClose, onWatchVideo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F4EE] text-[#1A1715] rounded-2xl shadow-2xl border border-[#1A1715]/10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-xl text-[#1A1715] hover:bg-[#7D6652] hover:text-white transition-colors"
            aria-label="Close details"
          >
            &times;
          </button>

          {/* Media Header with Play Trigger */}
          <div className="relative aspect-[16/9] w-full overflow-hidden group">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Play Button Overlay */}
            {project.videoUrl && (
              <button
                onClick={() => {
                  onClose();
                  onWatchVideo(project);
                }}
                className="absolute inset-0 flex items-center justify-center gap-3 text-white group-hover:scale-110 transition-transform"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#7D6652] text-white flex items-center justify-center pl-1 shadow-2xl">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}

            {/* Bottom Title on Image */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#E5D3B8] block mb-1">
                {project.categoryLabel} • {project.location}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1A1715]/10 text-xs text-[#5E5851]">
              <div>
                <span className="font-medium text-[#1A1715] block">Setting</span>
                {project.location} ({project.year})
              </div>
              <div>
                <span className="font-medium text-[#1A1715] block">Format</span>
                {project.duration} • 4K Cinema
              </div>
              <div>
                <span className="font-medium text-[#1A1715] block">Direction</span>
                Newlook Photo Studio
              </div>
            </div>

            {/* Story Description */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#7D6652] font-semibold mb-3">
                The Narrative
              </h3>
              <p className="text-base sm:text-lg text-[#5E5851] font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Couple Quote */}
            {project.clientQuote && (
              <div className="p-6 rounded-xl bg-white border-l-3 border-[#7D6652] shadow-sm">
                <p className="font-editorial italic text-lg sm:text-2xl text-[#1A1715] leading-relaxed mb-2 font-normal">
                  "{project.clientQuote}"
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8E877F] font-mono">
                  — {project.title}
                </span>
              </div>
            )}

            {/* Deliverables */}
            {project.deliverables && (
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#5E5851] font-medium mb-3">
                  Delivered Commissions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 text-xs bg-white border border-[#1A1715]/10 rounded-full text-[#5E5851]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Modal Actions */}
            <div className="pt-6 border-t border-[#1A1715]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  onClose();
                  onWatchVideo(project);
                }}
                className="w-full sm:w-auto px-6 py-3 border border-[#1A1715] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#1A1715] hover:text-white transition-colors"
              >
                Watch Film (4K)
              </button>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-[#7D6652] text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#5C4A3A] transition-colors shadow-md text-center"
              >
                Check Date On WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
