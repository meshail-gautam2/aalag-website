'use client';

import { useEffect, useRef, useState } from 'react';

type AnimatedNumberProps = {
  value: number;
  /** Flip to true to run the count. Driven by the card's own in-view state. */
  start: boolean;
  durationMs?: number;
};

/**
 * Counts from 0 up to `value` the first time `start` turns true.
 *
 * The true number is what renders on the server, on first client render, and any time the
 * animation has not run — so it is correct for search engines, for anyone without
 * JavaScript, and for cards the carousel never brings into view. Zeroing on mount instead
 * would leave those cards reading "0 sessions", which is simply wrong information.
 *
 * The count starts from 0 on its own first frame, at the moment the card appears, so the
 * reader never sees a real figure snap backwards to zero.
 */
export default function AnimatedNumber({ value, start, durationMs = 1100 }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const began = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - began) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value, durationMs]);

  return <span className="tabular-nums">{display}</span>;
}
