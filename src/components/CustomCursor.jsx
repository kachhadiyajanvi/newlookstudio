import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'play', 'view'
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tightly coupled smooth spring physics so the ring never detaches awkwardly
  const springConfig = { damping: 28, stiffness: 350, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const playTarget = target.closest('[data-cursor="play"]');
      const viewTarget = target.closest('[data-cursor="view"]');
      const clickable = target.closest('a, button, input, select, textarea, [role="button"], .clickable');

      if (playTarget) {
        setCursorType('play');
        setIsHovered(true);
      } else if (viewTarget) {
        setCursorType('view');
        setIsHovered(true);
      } else if (clickable) {
        setCursorType('pointer');
        setIsHovered(true);
      } else {
        setCursorType('default');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* ── Unified Luxury Cursor (No detached double-circles) ── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width:
            cursorType === 'play' || cursorType === 'view'
              ? 76
              : isHovered
              ? 48
              : 12,
          height:
            cursorType === 'play' || cursorType === 'view'
              ? 76
              : isHovered
              ? 48
              : 12,
          backgroundColor:
            cursorType === 'play' || cursorType === 'view'
              ? '#1A1A1A'
              : isHovered
              ? 'rgba(26, 26, 26, 0.08)'
              : '#1A1A1A',
          borderColor:
            cursorType === 'play' || cursorType === 'view'
              ? '#1A1A1A'
              : isHovered
              ? '#1A1A1A'
              : 'transparent',
          borderWidth: isHovered && cursorType === 'pointer' ? '1px' : '0px',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
        }}
      >
        {/* Dynamic Badge Text on Project Cards */}
        {cursorType === 'play' && (
          <span className="text-[10px] font-sans tracking-widest uppercase font-medium text-white">
            PLAY
          </span>
        )}
        {cursorType === 'view' && (
          <span className="text-[10px] font-sans tracking-widest uppercase font-medium text-white">
            VIEW
          </span>
        )}
      </motion.div>
    </div>
  );
}
