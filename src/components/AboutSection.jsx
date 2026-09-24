import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { STUDIO_INFO } from '../data/studioData';
import StudioLogo from './StudioLogo';

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(eased * value);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [inView, value]);

  return (
    <div ref={ref} className="font-editorial text-4xl sm:text-5xl font-normal text-[#1A1715]">
      {count}
      <span className="text-[#7D6652] text-3xl sm:text-4xl">{suffix}</span>
    </div>
  );
}

export default function AboutSection({ onInquireClick }) {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1A1715]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column: Portrait & Frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Background Decorative Frame */}
            <div className="absolute -inset-4 border border-[#7D6652]/30 rounded-2xl transform -rotate-1 pointer-events-none" />

            {/* Main Portrait */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#1A1715]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="Newlook Lead Filmmakers"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Bottom Badge with User's Signature Logo */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <StudioLogo className="h-11 text-white mb-2" />
                <p className="font-serif text-xl sm:text-2xl font-light">
                  {STUDIO_INFO.founder}
                </p>
                <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-[#E5D3B8] font-medium block mt-0.5">
                  Lead Directors & Cinematographers
                </span>
              </div>
            </div>

            {/* Small Floating Seal */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex w-24 h-24 rounded-full bg-[#7D6652] text-white border-2 border-white items-center justify-center p-3 text-center shadow-xl">
              <span className="text-[8px] uppercase tracking-widest font-mono">
                CINEMA & ARTISTRY
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative, Manifesto & Counters */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Prominent NewLook Logo inside The Philosophy Section */}
          <div className="mb-4">
            <StudioLogo className="h-14 sm:h-16 text-[#7D6652]" />
          </div>

          <span className="font-montserrat text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-semibold mb-3">
            The Philosophy
          </span>

          <h2 className="font-italiana text-4xl sm:text-6xl md:text-7xl font-normal text-[#1A1715] mb-6">
            Behind the Lens
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#5E5851] font-light leading-relaxed mb-10">
            <p>
              At <strong className="font-semibold text-[#1A1715]">Newlook Photo Studio</strong>, 
              we believe that true elegance lies in authenticity. While trends come and go, the gentle tremor of a hand during vows, the burst of spontaneous laughter across a crowded courtyard, and the golden rays caressing two lovers at twilight are timeless.
            </p>
            <p>
              With over 9 years of dedicated cinematic and photographic pursuit across India and international destination venues, our team combines documentary sensitivity with high-fashion editorial styling. We don’t manufacture moments—we observe, elevate, and preserve them for generations.
            </p>
          </div>

          {/* Stats Grid with dynamic counting */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#1A1715]/10 mb-10">
            {STUDIO_INFO.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#8E877F] mt-1 font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={onInquireClick}
              className="px-8 py-3.5 bg-[#1A1715] text-[#F7F4EE] font-montserrat text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#7D6652] transition-colors shadow-sm"
            >
              Get In Touch With The Artist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
