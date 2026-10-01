import Link from 'next/link';
import { ArrowRight, Clock, Layers, PlayCircle } from 'lucide-react';

import GradientPlaceholder from '@/components/GradientPlaceholder';
import type { Course } from '@/lib/courses';
import { totalSessions } from '@/lib/courses';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <Link href={`/courses/${course.slug}`} className="block focus-visible:ring-offset-0">
        {/* PLACEHOLDER thumbnail — replace with <Image src={course.thumbnail} .../> once the
            client supplies course artwork at /public/courses/. */}
        <GradientPlaceholder
          from={course.accent}
          to={course.accentTo}
          kicker={course.category}
          className="aspect-[16/10] w-full"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
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
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
