import React, { useEffect, useRef } from 'react';

/**
 * CurvedScrollLogo
 *
 * Implements a cinematic, smooth, scroll-driven animation for the main SSSL company logo.
 * - Starts proudly in the Home/Hero section on the right side.
 * - As the user scrolls down, travels naturally between sections in a smooth, curved / zigzag motion path
 *   (moving downward while shifting smoothly left and right).
 * - Has aerodynamic banking tilt that turns gently into the direction of the curve.
 * - Connected directly to scroll progress with silky GPU-accelerated requestAnimationFrame lerp easing.
 * - Fully reversible: responds naturally to scrolling both down and back up.
 * - Circular, sharp, fully opaque (100%), no white background.
 * - Pointer-events-none so it never interferes with text, buttons, cards, or links.
 * - Works responsively on desktop, tablet, and mobile.
 */
export const CurvedScrollLogo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  const physicsRef = useRef({
    currentX: 0,
    targetX: 0,
    currentY: 0,
    targetY: 0,
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

      physicsRef.current.windowWidth = w;
      physicsRef.current.windowHeight = h;
      physicsRef.current.maxScroll = Math.max(1, docHeight - h);
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements, { passive: true });

    let lastTargetX = 0;

    const calculateTarget = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const { windowWidth, windowHeight, maxScroll } = physicsRef.current;
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

      const isMobile = windowWidth < 640;
      const isTablet = windowWidth >= 640 && windowWidth < 1024;

      // 1. Vertical Motion (starts in Hero, travels downward between sections)
      let startY = windowHeight * 0.24; // in Hero
      let endY = windowHeight * 0.72;   // in lower sections
      if (isMobile) {
        startY = 88;
        endY = windowHeight * 0.65;
      } else if (isTablet) {
        startY = windowHeight * 0.20;
        endY = windowHeight * 0.68;
      }
      physicsRef.current.targetY = startY + progress * (endY - startY);

      // 2. Horizontal Curved / Zigzag Motion Path
      // Screen center reference
      const halfWidth = windowWidth / 2;
      let rightAnchor = Math.min(halfWidth - 40, (1280 / 2) - 140);
      let amplitude = Math.min(halfWidth - 80, 320);

      if (isMobile) {
        rightAnchor = halfWidth - 54;
        amplitude = Math.min(halfWidth - 60, 65);
      } else if (isTablet) {
        rightAnchor = halfWidth - 80;
        amplitude = Math.min(halfWidth - 100, 160);
      }

      // Sinusoidal wave that weaves: Right (Hero) -> Left-Center (About) -> Right (Services) -> Left (Showcase/Leadership) -> Right (Projects) -> Center-Right (Footer)
      const wave = Math.sin(progress * Math.PI * 3.5);
      // Smooth interpolation from right-anchored in Hero to curved wave across sections
      const heroBlend = Math.min(1, Math.max(0, scrollY / Math.min(500, windowHeight * 0.6)));
      const dynamicX = rightAnchor * (1 - heroBlend) + (wave * amplitude) * heroBlend;
      physicsRef.current.targetX = dynamicX;

      // 3. Aerodynamic Banking Rotation
      // Banks smoothly in the direction of the lateral curve
      const lateralVelocity = dynamicX - lastTargetX;
      lastTargetX = dynamicX;
      const bankAngle = Math.max(-14, Math.min(14, lateralVelocity * 1.5));
      const continuousSpin = scrollY * 0.025;
      physicsRef.current.targetRotate = prefersReducedMotion ? 0 : bankAngle + continuousSpin;

      // 4. Subtle Scale Easing
      const scaleReduction = isMobile ? 0.12 : 0.18;
      physicsRef.current.targetScale = 1.0 - progress * scaleReduction;
    };

    calculateTarget();
    physicsRef.current.currentX = physicsRef.current.targetX;
    physicsRef.current.currentY = physicsRef.current.targetY;
    physicsRef.current.currentRotate = physicsRef.current.targetRotate;
    physicsRef.current.currentScale = physicsRef.current.targetScale;

    const onScroll = () => {
      calculateTarget();
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // 60-120fps fluid physics interpolation loop (lerp)
    let startTime = performance.now();
    const lerpFactor = prefersReducedMotion ? 1 : 0.085;

    const tick = (currentTime: number) => {
      const p = physicsRef.current;
      const elapsed = (currentTime - startTime) * 0.001;

      // Lerp toward target coordinates
      p.currentX += (p.targetX - p.currentX) * lerpFactor;
      p.currentY += (p.targetY - p.currentY) * lerpFactor;
      p.currentRotate += (p.targetRotate - p.currentRotate) * lerpFactor;
      p.currentScale += (p.targetScale - p.currentScale) * lerpFactor;

      // Subtle resting micro-float when stationary (1.5px vertical breathing)
      const microFloat = prefersReducedMotion ? 0 : Math.sin(elapsed * 1.8) * 1.5;

      if (containerRef.current) {
        const finalX = p.currentX;
        const finalY = p.currentY + microFloat;
        const finalRot = p.currentRotate;
        const finalScale = p.currentScale;

        containerRef.current.style.transform = `translate3d(calc(-50% + ${finalX.toFixed(2)}px), ${finalY.toFixed(2)}px, 0) rotate(${finalRot.toFixed(2)}deg) scale(${finalScale.toFixed(3)})`;
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
      className="fixed z-25 pointer-events-none select-none will-change-transform top-0 left-1/2 transition-opacity duration-300"
      style={{
        transform: `translate3d(calc(-50% + ${physicsRef.current.currentX}px), ${physicsRef.current.currentY}px, 0) scale(${physicsRef.current.currentScale})`,
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Soft atmospheric ambient glow */}
        <div
          className="absolute -inset-4 sm:-inset-6 rounded-full opacity-40 blur-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(217, 119, 6, 0.28) 0%, rgba(39, 59, 130, 0.35) 50%, transparent 75%)',
          }}
        />

        {/* Delicate Precision Orbital Ring (Governmental / Military Seal Aesthetic) */}
        <div className="absolute -inset-1.5 sm:-inset-2.5 rounded-full border border-amber-400/25 shadow-inner pointer-events-none" />

        {/* Circular Company Logo Container */}
        <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full flex items-center justify-center p-1.5 sm:p-2 backdrop-blur-[1px]">
          <img
            src="/images/sssl-logo-circular.png"
            alt="Soldier Security Services Ltd. Official Circular Logo"
            className="w-full h-full object-contain aspect-square filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] lg:drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
            loading="eager"
            decoding="sync"
          />
        </div>
      </div>
    </aside>
  );
};
