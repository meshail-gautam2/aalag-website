'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Sticky section rail: shows where you are in the page, how far through you are, and
 * lets you jump straight to a section.
 *
 * Entries are plain anchor links, so they still navigate with JavaScript disabled — the
 * active highlight is the only part that needs a script. Desktop only; there is no room
 * for it beside the content on narrower screens.
 */
const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'courses', label: 'Courses' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'catalogue', label: 'All Topics' },
  { id: 'services', label: 'Services' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'why', label: 'Why AALAG' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionRail() {
  const [active, setActive] = useState<string>('home');
  const [shown, setShown] = useState(false);
  const [found, setFound] = useState(true);

  const { scrollYProgress } = useScroll();
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Whichever section is crossing the middle band of the viewport is the active one.
  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (targets.length === 0) {
      setFound(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Stay out of the way until the reader has left the hero.
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!found) return null;

  return (
    <nav
      aria-label="Page sections"
      className={`fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block ${
        shown ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      } transition-opacity duration-500`}
    >
      <div className="relative flex flex-col items-end gap-3 pr-4">
        {/* Track + scroll-progress fill */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 top-0 w-px bg-brand-dark/10"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: fill }}
          className="absolute bottom-0 right-0 top-0 w-px origin-top bg-brand-accent"
        />

        {SECTIONS.map((section) => {
          const isActive = section.id === active;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? 'true' : undefined}
              className="group flex items-center justify-end gap-2.5"
            >
              <span
                className={`whitespace-nowrap text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-brand-dark opacity-100'
                    : 'text-brand-muted opacity-0 group-hover:opacity-100'
                }`}
              >
                {section.label}
              </span>
              <span
                aria-hidden="true"
                className={`h-px transition-all duration-300 ${
                  isActive
                    ? 'w-5 bg-brand-accentDark'
                    : 'w-2.5 bg-brand-dark/25 group-hover:w-4 group-hover:bg-brand-dark/50'
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
