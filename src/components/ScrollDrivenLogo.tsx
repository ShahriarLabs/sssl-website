import React, { useEffect, useRef } from 'react';

/**
 * ScrollDrivenLogo
 *
 * Implements a continuous, smooth, scroll-driven floating brand animation
 * for the official Soldier Security Services Ltd. circular company logo.
 *
 * Behavior:
 * - Starts prominently in the Home/Hero section on the right side.
 * - As the user scrolls down, the logo gradually moves downward in continuous
 *   synchronization with page scroll progress (not jumping between sections).
 * - Floats gracefully along the right rail with subtle rotation, scale easing,
 *   and ambient lighting.
 * - Circular, sharp, fully opaque (100%), with a transparent background.
 * - Has pointer-events-none so it never blocks text, buttons, cards, or links.
 * - GPU-accelerated via requestAnimationFrame and transform3d for silky 120fps motion.
 */
export const ScrollDrivenLogo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Motion physics state (lerp smoothing)
  const stateRef = useRef({
    currentY: 0,
    targetY: 0,
    currentX: 0,
    targetX: 0,
    currentRotate: 0,
    targetRotate: 0,
    currentScale: 1,
    targetScale: 1,
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1200,
    windowHeight: typeof window !== 'undefined' ? window.innerHeight : 800,
    maxScroll: 1,
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateMeasurements = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      stateRef.current.windowWidth = w;
      stateRef.current.windowHeight = h;
      stateRef.current.maxScroll = Math.max(1, docHeight - h);
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements, { passive: true });

    // Initial positioning calculation
    const calculateTargets = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const { windowWidth, windowHeight, maxScroll } = stateRef.current;
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

      const isMobile = windowWidth < 640;
      const isTablet = windowWidth >= 640 && windowWidth < 1024;

      // Vertical trajectory:
      // Start in the Hero section (top-right) and move smoothly downward through the viewport
      // as the page scrolls down toward the lower sections.
      let startY = windowHeight * 0.24; // ~24vh in Hero
      let endY = windowHeight * 0.76;   // ~76vh in lower sections
      if (isMobile) {
        startY = 88; // below compact mobile header in Hero
        endY = windowHeight * 0.68;
      } else if (isTablet) {
        startY = windowHeight * 0.20;
        endY = windowHeight * 0.72;
      }

      // Continuous downward vertical target
      stateRef.current.targetY = startY + progress * (endY - startY);

      // Horizontal subtle organic wave to keep logo positioned safely in the right margin
      const waveAmplitude = isMobile ? 6 : isTablet ? 12 : 18;
      stateRef.current.targetX = Math.sin(progress * Math.PI * 2) * waveAmplitude;

      // Subtle compass rotation linked directly to scroll
      stateRef.current.targetRotate = prefersReducedMotion ? 0 : scrollY * 0.038;

      // Scale: prominent in Hero (1.0), gradually refined (0.82) across lower sections
      const heroThreshold = Math.min(600, windowHeight * 0.7);
      const heroFactor = Math.min(1, Math.max(0, scrollY / heroThreshold));
      const minScale = isMobile ? 0.88 : 0.82;
      stateRef.current.targetScale = 1.0 - heroFactor * (1.0 - minScale);
    };

    // Calculate initial targets immediately
    calculateTargets();
    stateRef.current.currentY = stateRef.current.targetY;
    stateRef.current.currentX = stateRef.current.targetX;
    stateRef.current.currentRotate = stateRef.current.targetRotate;
    stateRef.current.currentScale = stateRef.current.targetScale;

    const onScroll = () => {
      calculateTargets();
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Animation loop with smooth physics interpolation (lerp)
    let startTime = performance.now();
    const lerpFactor = prefersReducedMotion ? 1 : 0.09;

    const tick = (currentTime: number) => {
      const s = stateRef.current;
      const elapsed = (currentTime - startTime) * 0.001;

      // Lerp toward target values
      s.currentY += (s.targetY - s.currentY) * lerpFactor;
      s.currentX += (s.targetX - s.currentX) * lerpFactor;
      s.currentRotate += (s.targetRotate - s.currentRotate) * lerpFactor;
      s.currentScale += (s.targetScale - s.currentScale) * lerpFactor;

      // Micro-float breathing when stationary (very subtle, 1.5px vertical)
      const microFloat = prefersReducedMotion ? 0 : Math.sin(elapsed * 1.8) * 1.8;

      if (containerRef.current) {
        const finalY = s.currentY + microFloat;
        const finalX = s.currentX;
        const finalRot = s.currentRotate;
        const finalScale = s.currentScale;

        containerRef.current.style.transform = `translate3d(${finalX.toFixed(2)}px, ${finalY.toFixed(2)}px, 0) rotate(${finalRot.toFixed(2)}deg) scale(${finalScale.toFixed(3)})`;
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateMeasurements);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <aside
      ref={containerRef}
      aria-hidden="true"
      className="fixed z-30 pointer-events-none select-none will-change-transform top-0 right-4 sm:right-8 lg:right-[max(3vw,calc((100vw-1280px)/2+28px))] transition-opacity duration-300"
      style={{
        transform: `translate3d(0px, ${stateRef.current.currentY}px, 0) scale(${stateRef.current.currentScale})`,
      }}
    >
      {/* Outer Glow & Ambient Lighting Aura */}
      <div className="relative flex items-center justify-center">
        {/* Soft radial backlight */}
        <div
          className="absolute -inset-4 sm:-inset-6 rounded-full opacity-40 blur-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(217, 119, 6, 0.25) 0%, rgba(39, 59, 130, 0.3) 50%, transparent 75%)',
          }}
        />

        {/* Delicate Precision Orbital Ring (Governmental / Military Seal Aesthetic) */}
        <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-amber-400/20 shadow-inner pointer-events-none" />

        {/* Circular Company Logo Container */}
        <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full flex items-center justify-center p-1 sm:p-2 backdrop-blur-[1px]">
          <img
            src="/images/sssl-logo-circular.png"
            alt="Soldier Security Services Ltd. Official Circular Logo"
            className="w-full h-full object-contain aspect-square filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] sm:drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
            loading="eager"
            decoding="sync"
          />
        </div>
      </div>
    </aside>
  );
};
