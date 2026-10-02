'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Layers, PlayCircle } from 'lucide-react';

import GradientPlaceholder from '@/components/GradientPlaceholder';
import type { Course } from '@/lib/courses';
import { totalSessions } from '@/lib/courses';

export default function CourseCard({ course }: { course: Course }) {
  // Feed the cursor position to the CSS spotlight gradient.
  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <article
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
            {course.duration}
          </span>
          <span className="tag">
            <PlayCircle size={13} aria-hidden="true" />
            {totalSessions(course)} sessions
          </span>
          {course.parts && (
            <span className="tag">
              <Layers size={13} aria-hidden="true" />
              {course.parts} parts
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
