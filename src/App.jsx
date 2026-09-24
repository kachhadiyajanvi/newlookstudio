import React, { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import ProjectDetailModal from './components/ProjectDetailModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Modal states
  const [videoModalData, setVideoModalData] = useState({ isOpen: false, url: '', title: '' });
  const [detailModalData, setDetailModalData] = useState({ isOpen: false, project: null });

  // Section observer for active navbar indicator
  useEffect(() => {
    const sectionIds = ['hero', 'portfolio', 'services', 'about', 'testimonials', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -50, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Video modal triggers
  const handleWatchVideo = (project) => {
    setVideoModalData({
      isOpen: true,
      url: project.videoUrl,
      title: `${project.title} — ${project.subtitle}`,
    });
  };

  const handleCloseVideoModal = () => {
    setVideoModalData({ isOpen: false, url: '', title: '' });
  };

  // Project detail modal triggers
  const handleOpenDetailModal = (project) => {
    setDetailModalData({ isOpen: true, project });
  };

  const handleCloseDetailModal = () => {
    setDetailModalData({ isOpen: false, project: null });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1A1715] font-sans selection:bg-[#7D6652]/20 selection:text-[#7D6652] relative">
      {/* ── Loose Inertia Smooth Scrolling Engine ── */}
      <SmoothScroll />

      {/* ── Custom Attractive Fluid Spring Cursor ── */}
      <CustomCursor />

      {/* ── Initial Film Experience Loader with Studio Signature Logo ── */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* ── Fixed Navigation Bar (Single Theme, No Dark/Light Switch) ── */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* ── Main Content Sections ── */}
      <main>
        {/* 1. Cinematic Hero Section with Dust Canvas & Studio Logo */}
        <Hero
          onExploreClick={() => scrollToSection('portfolio')}
          onInquireClick={() => scrollToSection('contact')}
        />

        {/* 2. Selected Works & Films (Editorial Zig-Zag with Dynamic Cursor Play Hover) */}
        <PortfolioSection
          onWatchVideo={handleWatchVideo}
          onSelectProject={handleOpenDetailModal}
        />

        {/* 3. Editorial Offerings (Services) */}
        <ServicesSection
          onInquireService={() => scrollToSection('contact')}
        />

        {/* 4. Behind the Lens (The Artist / Studio Manifesto & Counters) */}
        <AboutSection
          onInquireClick={() => scrollToSection('contact')}
        />

        {/* 5. Kind Words (Interactive Testimonial Carousel with Controls & Dots) */}
        <TestimonialsSection />

        {/* 6. Direct Concierge & Booking (Clean WhatsApp, Phone, & Studio Details) */}
        <ContactSection />
      </main>

      {/* ── Editorial Footer with Studio Logo ── */}
      <Footer onNavigate={scrollToSection} />

      {/* ── Video Player Modal (16:9 4K YouTube Lightbox) ── */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        videoUrl={videoModalData.url}
        title={videoModalData.title}
        onClose={handleCloseVideoModal}
      />

      {/* ── Full Project Narrative Modal ── */}
      <ProjectDetailModal
        isOpen={detailModalData.isOpen}
        project={detailModalData.project}
        onClose={handleCloseDetailModal}
        onWatchVideo={handleWatchVideo}
      />
    </div>
  );
}
