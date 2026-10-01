'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import CourseCard from '@/components/CourseCard';
import type { Course } from '@/lib/courses';

const AUTOPLAY_MS = 5200;

export default function CourseCarousel({ courses }: { courses: Course[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  const [index, setIndex] = useState(0);
  /** How many cards fit the viewport — measured, not assumed. */
  const [perView, setPerView] = useState(1);
  /** Pixels the track is translated by. Measured so the maths cannot drift from the CSS. */
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, courses.length - perView);

  /**
   * Measure the real layout and position the track.
   *
   * Driving the transform from measured offsets (rather than recreating the card maths
   * in CSS) keeps JavaScript and the stylesheet from ever disagreeing, and makes the
   * last slide sit flush with the right edge without a special case.
   */
  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const slides = Array.from(track.children) as HTMLElement[];
    if (slides.length === 0) return;

    const slideWidth = slides[0].offsetWidth;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    const fit = Math.max(1, Math.round((viewport.clientWidth + gap) / (slideWidth + gap)));
    setPerView(Math.min(fit, slides.length));

    const limit = Math.max(0, courses.length - Math.min(fit, slides.length));
    const target = slides[Math.min(index, limit)];
    if (!target) return;

    const maxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth);
    const left = target.offsetLeft - track.offsetLeft;
    setOffset(Math.min(left, maxScroll));
  }, [index, courses.length]);

  useEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener('resize', onResize);

    // Fonts and images settling can change card height/width after first paint.
    const observer =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => measure()) : null;
    if (observer && viewportRef.current) observer.observe(viewportRef.current);

    return () => {
      window.removeEventListener('resize', onResize);
      observer?.disconnect();
    };
  }, [measure]);

  // Clamp when the breakpoint shrinks the number of reachable slides.
  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (next: number) => {
      if (maxIndex === 0) {
        setIndex(0);
        return;
      }
      // Wrap around at both ends.
      setIndex(next < 0 ? maxIndex : next > maxIndex ? 0 : next);
    },
    [maxIndex],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-scroll, paused on hover/focus, when the tab is hidden, or for reduced-motion users.
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  // Touch / pointer swipe.
  const dragStart = useRef<number | null>(null);
  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === 'mouse') return;
    dragStart.current = event.clientX;
  };
  const onPointerUp = (event: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) next();
    else prev();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prev();
    }
  };

  return (
    <div
      className="carousel relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onKeyDown={onKeyDown}
      role="group"
      aria-roledescription="carousel"
      aria-label="Our courses"
    >
      {/* Viewport */}
      <div
        ref={viewportRef}
        className="overflow-hidden pb-2"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <ul
          ref={trackRef}
          className="carousel-track list-none"
          style={{ transform: `translate3d(${-offset}px, 0, 0)` }}
        >
          {/* Every slide stays in the tab order — hiding off-screen cards from assistive tech
              while they are still focusable would be worse than leaving them reachable. */}
          {courses.map((course) => (
            <li key={course.slug} className="carousel-slide">
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="group" aria-label="Course slides">
          {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
            <button
              key={dot}
              type="button"
              aria-current={dot === index ? 'true' : undefined}
              aria-label={`Go to slide ${dot + 1} of ${maxIndex + 1}`}
              onClick={() => goTo(dot)}
              className={`h-2 rounded-full transition-all duration-300 ${
                dot === index
                  ? 'w-7 bg-brand-accentDark'
                  : 'w-2 bg-brand-dark/20 hover:bg-brand-dark/40'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={maxIndex === 0}
            aria-label="Previous courses"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-dark/10 bg-white text-brand-dark transition-all hover:border-brand-accent hover:bg-brand-accent hover:text-brand-dark active:scale-95 disabled:opacity-40"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={maxIndex === 0}
            aria-label="Next courses"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-dark/10 bg-white text-brand-dark transition-all hover:border-brand-accent hover:bg-brand-accent hover:text-brand-dark active:scale-95 disabled:opacity-40"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
