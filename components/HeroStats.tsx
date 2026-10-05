'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Figures taken from the client's own course material rather than invented social proof:
 * the catalogue lists 33 training topics, and each published brochure is 20 sessions /
 * 30-40 hours. Swap these only for numbers the business can stand behind.
 */
type Stat = { value: number; suffix: string; label: string; decimals?: number };

const STATS: Stat[] = [
  { value: 33, suffix: '', label: 'Training Topics' },
  { value: 20, suffix: '', label: 'Sessions per Course' },
  { value: 30, suffix: '–40', label: 'Hours per Course' },
];

const DURATION_MS = 1400;

function useCountUp(target: number, decimals: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    const began = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - began) / DURATION_MS);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((target * eased).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, decimals, start]);

  return value;
}

function StatValue({
  value,
  suffix,
  label,
  decimals = 0,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  start: boolean;
}) {
  const current = useCountUp(value, decimals, start);

  return (
    <div>
      <div className="whitespace-nowrap font-heading text-[1.75rem] font-extrabold text-white sm:text-4xl">
        {current.toFixed(decimals)}
        <span className="text-brand-accent">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

export default function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setStart(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:gap-10"
    >
      {STATS.map((stat) => (
        <StatValue
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          decimals={stat.decimals ?? 0}
          start={start}
        />
      ))}
    </div>
  );
}
