'use client';

import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Thin reading-progress bar pinned under the navbar.
 *
 * Spring-smoothed so it glides rather than snapping to every scroll event. It is purely
 * decorative, so it is hidden from assistive tech.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[55] h-[3px] origin-left bg-gradient-to-r from-brand-accent via-[#8BE0E8] to-brand-accentDark"
    />
  );
}
