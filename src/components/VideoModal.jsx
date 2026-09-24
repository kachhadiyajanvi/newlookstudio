import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ videoUrl, title, isOpen, onClose }) {
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

  if (!isOpen || !videoUrl) return null;

  // Ensure autoplay query is added
  const embedSrc = videoUrl.includes('?') ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0C0D10]/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Top Bar with Title and Close */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#14161D] border-b border-white/10">
            <span className="font-serif text-sm sm:text-base text-[#F6F3EE] truncate pr-4">
              {title}
            </span>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white text-2xl font-light leading-none focus:outline-none transition-colors w-8 h-8 flex items-center justify-center"
              aria-label="Close Video"
            >
              &times;
            </button>
          </div>

          {/* 16:9 Video Frame */}
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={embedSrc}
              title={title || 'Wedding Film'}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
