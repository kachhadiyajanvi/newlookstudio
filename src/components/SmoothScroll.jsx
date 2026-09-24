import { useEffect } from 'react';

/**
 * SmoothScroll (Loose Inertia Scroll)
 * Delivers silky-smooth, loose, floating momentum scrolling
 * matching high-end Awwwards luxury portfolios.
 */
export default function SmoothScroll() {
  useEffect(() => {
    let lenisInstance = null;
    let rafId = null;
    let observer = null;
    let cleanupFallback = null;

    // ── 1. Attempt High-Performance Lenis from CDN ──
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import(
          /* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/lenis@1.1.18/+esm'
        );

        lenisInstance = new Lenis({
          duration: 1.4, // Silky loose glide duration
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.5,
          infinite: false,
        });

        window.__lenis = lenisInstance;

        // Auto-pause Lenis if modal locks body scroll
        observer = new MutationObserver(() => {
          if (document.body.style.overflow === 'hidden') {
            lenisInstance?.stop();
          } else {
            lenisInstance?.start();
          }
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

        function raf(time) {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
        document.documentElement.classList.add('lenis', 'lenis-smooth');
      } catch (err) {
        // ── 2. Seamless Fallback: Native Inertia Lerp Scroller ──
        initFallbackInertia();
      }
    };

    const initFallbackInertia = () => {
      let current = window.scrollY;
      let target = window.scrollY;
      let isScrolling = false;
      const ease = 0.085; // Loose damping factor

      const handleWheel = (e) => {
        // Do NOT intercept wheel when modal has locked the body, or inside any scrollable container/modal
        if (document.body.style.overflow === 'hidden') return;
        if (
          e.target.closest(
            '[data-lenis-prevent], .modal, [role="dialog"], .overflow-y-auto, .overflow-y-scroll, .overflow-auto'
          )
        ) {
          return;
        }

        e.preventDefault();
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        target = Math.max(0, Math.min(maxScroll, target + e.deltaY * 1.15));

        if (!isScrolling) {
          isScrolling = true;
          requestAnimationFrame(animateScroll);
        }
      };

      const animateScroll = () => {
        current += (target - current) * ease;
        window.scrollTo(0, Math.round(current));

        if (Math.abs(target - current) > 0.5) {
          requestAnimationFrame(animateScroll);
        } else {
          current = target;
          window.scrollTo(0, Math.round(current));
          isScrolling = false;
        }
      };

      const handleNativeScroll = () => {
        if (!isScrolling) {
          current = target = window.scrollY;
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('scroll', handleNativeScroll, { passive: true });

      cleanupFallback = () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('scroll', handleNativeScroll);
      };
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
      if (lenisInstance) {
        lenisInstance.destroy();
        window.__lenis = null;
      }
      if (cleanupFallback) cleanupFallback();
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return null;
}
