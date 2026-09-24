import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'play', 'view'
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer trailing ring
  const springConfig = { damping: 24, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate custom cursor on devices that support hover (non-touch)
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Scan interactive target on mouseover
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
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* ── 1. Sharp Center Dot (Instant follow) ── */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#7D6652] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isClicked ? 0.6 : cursorType === 'play' || cursorType === 'view' ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* ── 2. Fluid Trailing Ring (Spring Physics) ── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 border border-[#7D6652]/40 bg-[#7D6652]/5 backdrop-blur-[1px] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width:
            cursorType === 'play' || cursorType === 'view'
              ? 80
              : isHovered
              ? 54
              : 34,
          height:
            cursorType === 'play' || cursorType === 'view'
              ? 80
              : isHovered
              ? 54
              : 34,
          borderColor:
            cursorType === 'play' || cursorType === 'view'
              ? '#C8A97E'
              : isHovered
              ? '#7D6652'
              : 'rgba(125, 102, 82, 0.35)',
          backgroundColor:
            cursorType === 'play' || cursorType === 'view'
              ? 'rgba(200, 169, 126, 0.92)'
              : isHovered
              ? 'rgba(125, 102, 82, 0.12)'
              : 'rgba(125, 102, 82, 0.04)',
          scale: isClicked ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 24,
        }}
      >
        {/* Dynamic Label when hovering media cards */}
        {cursorType === 'play' && (
          <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-[#1A1715]">
            PLAY
          </span>
        )}
        {cursorType === 'view' && (
          <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-[#1A1715]">
            VIEW
          </span>
        )}
      </motion.div>
    </div>
  );
}
