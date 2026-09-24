import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PROJECTS } from '../data/studioData';

export default function PortfolioSection({ onWatchVideo, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* ── Section Header ── */}
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-medium mb-3"
        >
          Selected Films & Imagery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1A1715] mb-4"
        >
          A Visual Diary
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-[#5E5851] font-light leading-relaxed"
        >
          A curated selection of our most cherished love stories, captured across royal courtyards, mountain ranges, and intimate coasts.
        </motion.p>
      </div>

      {/* ── Category Filters ── */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-20">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 relative focus:outline-none ${
                isActive
                  ? 'text-[#1A1715] font-semibold'
                  : 'text-[#8E877F] hover:text-[#1A1715]'
              }`}
            >
              {cat.label}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBorder"
                  className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-[#7D6652]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Editorial Alternating Project Grid ── */}
      <div className="space-y-24 md:space-y-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-24 md:space-y-36"
          >
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 1;

              return (
                <article
                  key={project.id}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center gap-10 lg:gap-16 group`}
                >
                  {/* Media Item with data-cursor="play" */}
                  <div className="w-full lg:w-3/5">
                    <div
                      data-cursor="play"
                      onClick={() => onWatchVideo(project)}
                      className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-[#141210] cursor-pointer group-hover:shadow-2xl transition-all duration-500 border border-[#1A1715]/10"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-95"
                      />

                      {/* YouTube Play Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="transform transition-transform duration-300 group-hover:scale-115 drop-shadow-2xl">
                          <svg viewBox="0 0 68 48" width="64" height="45">
                            <path
                              d="M66.5 7.7s-.7-4.7-2.8-6.8C60.7-2 57.2-2 55.6-2.2 46.4-3 34-3 34-3s-12.4 0-21.6 .8C10.8-2 7.3-2 4.3.9 2.2 3 1.5 7.7 1.5 7.7S.8 13.3.8 18.8v5.2c0 5.5.7 11.1.7 11.1s.7 4.7 2.8 6.8c3 2.9 6.9 2.8 8.6 3.1C19.2 45.6 34 45.8 34 45.8s12.4 0 21.6-.8c1.6-.2 5.1-.2 8.1-3.1 2.1-2.1 2.8-6.8 2.8-6.8s.7-5.5.7-11.1v-5.2c0-5.5-.7-11.1-.7-11.1z"
                              fill="#FF0000"
                            />
                            <path d="M27 32V14l18 9-18 9z" fill="#FFF" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration Tag */}
                      <span className="absolute bottom-4 right-4 px-2.5 py-1 text-[11px] font-mono tracking-wider bg-black/75 backdrop-blur-sm text-white rounded">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div
                    className={`w-full lg:w-2/5 flex flex-col justify-center ${
                      isEven ? 'lg:text-right' : 'lg:text-left'
                    } text-center lg:text-left`}
                  >
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#7D6652] mb-2 block font-medium">
                      {project.categoryLabel} • {project.location}
                    </span>

                    <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1715] mb-2">
                      {project.title}
                    </h3>

                    <p className="font-serif italic text-lg sm:text-xl text-[#7D6652] mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#5E5851] font-light leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Action buttons */}
                    <div
                      className={`flex items-center gap-4 ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-center`}
                    >
                      <button
                        onClick={() => onWatchVideo(project)}
                        className="px-6 py-3 bg-[#1A1715] text-[#F7F4EE] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#7D6652] transition-colors flex items-center gap-2 shadow-sm"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Watch Film</span>
                      </button>

                      <button
                        data-cursor="view"
                        onClick={() => onSelectProject(project)}
                        className="px-6 py-3 border border-[#1A1715]/30 text-[#1A1715] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#1A1715] hover:text-[#F7F4EE] transition-colors"
                      >
                        View Story
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
