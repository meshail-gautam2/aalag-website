'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { ArrowRight, Clock, Layers, PlayCircle } from 'lucide-react';

import AnimatedNumber from '@/components/AnimatedNumber';
import GradientPlaceholder from '@/components/GradientPlaceholder';
import type { Course } from '@/lib/courses';
import { totalSessions } from '@/lib/courses';

/**
 * Splits a duration like "30–40 Hours" into its numbers and trailing unit so each figure
 * can be counted up. Anything that is not a plain range falls back to static text.
 */
function parseDuration(duration: string) {
  const match = duration.match(/^(\d+)\s*[–-]\s*(\d+)\s*(.*)$/);
  if (match) return { from: Number(match[1]), to: Number(match[2]), unit: match[3] };

  const single = duration.match(/^(\d+)\s*(.*)$/);
  if (single) return { from: Number(single[1]), to: null, unit: single[2] };

  return null;
}

export default function CourseCard({ course }: { course: Course }) {
  const cardRef = useRef<HTMLElement>(null);
  // One trigger per card, so every figure on it counts together. A low threshold means
  // the peek card at the edge of the carousel starts counting as soon as it shows,
  // rather than sitting there with stale numbers.
  const inView = useInView(cardRef, { once: true, amount: 0.15 });

  const duration = parseDuration(course.duration);
  const sessions = totalSessions(course);

  // Feed the cursor position to the CSS spotlight gradient.
  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      className="group card spotlight flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-brand-accent/30 hover:shadow-lift"
    >
      <Link href={`/courses/${course.slug}`} className="block overflow-hidden">
        {/* PLACEHOLDER thumbnail — replace with <Image src={course.thumbnail} .../> once the
            client supplies course artwork at /public/courses/. */}
        <div className="overflow-hidden">
          <GradientPlaceholder
            from={course.accent}
            to={course.accentTo}
            kicker={course.category}
            className="aspect-[16/10] w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </div>
      </Link>

      <div className="relative flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold leading-snug text-brand-dark">
          <Link href={`/courses/${course.slug}`} className="hover:text-brand-accentDark">
            {course.title}
          </Link>
        </h3>

        {course.subtitle && (
          <p className="mt-1 text-sm font-medium text-brand-accentDark">{course.subtitle}</p>
        )}

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-brand-muted">
          {course.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="tag">
            <Clock size={13} aria-hidden="true" />
            {duration ? (
              <>
                <AnimatedNumber value={duration.from} start={inView} />
                {duration.to !== null && (
                  <>
                    –<AnimatedNumber value={duration.to} start={inView} />
                  </>
                )}
                {duration.unit && <>&nbsp;{duration.unit}</>}
              </>
            ) : (
              course.duration
            )}
          </span>

          <span className="tag">
            <PlayCircle size={13} aria-hidden="true" />
            <AnimatedNumber value={sessions} start={inView} />
            &nbsp;sessions
          </span>

          {course.parts && (
            <span className="tag">
              <Layers size={13} aria-hidden="true" />
              <AnimatedNumber value={course.parts} start={inView} />
              &nbsp;parts
            </span>
          )}
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-accentDark transition-colors hover:text-brand-dark"
        >
          View Details
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Link>
      </div>
    </article>
  );
}
