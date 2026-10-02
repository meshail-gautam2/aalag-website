import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  BarChart3,
  Clock,
  Download,
  Layers,
  Mail,
  MessageCircle,
  Monitor,
  Phone,
  PlayCircle,
} from 'lucide-react';

import Aurora from '@/components/Aurora';
import CourseCard from '@/components/CourseCard';
import CourseDetailTabs from '@/components/CourseDetailTabs';
import GradientPlaceholder from '@/components/GradientPlaceholder';
import { asset } from '@/lib/asset';
import { courses, getCourse, totalSessions } from '@/lib/courses';
import { SITE } from '@/lib/site';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const course = getCourse(params.slug);
  if (!course) return { title: 'Course not found' };

  const description = course.subtitle
    ? `${course.subtitle} — ${course.shortDescription}`
    : course.shortDescription;

  return {
    title: course.title,
    description,
    openGraph: {
      title: `${course.title} — ${SITE.name}`,
      description,
    },
  };
}

export default function CourseDetailPage({ params }: PageProps) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const related = courses.filter((item) => item.slug !== course.slug).slice(0, 3);

  const facts = [
    { icon: Clock, label: 'Duration', value: course.duration },
    { icon: PlayCircle, label: 'Sessions', value: String(totalSessions(course)) },
    { icon: Layers, label: 'Parts', value: String(course.parts ?? course.modules.length) },
    { icon: BarChart3, label: 'Level', value: course.level },
  ];

  return (
    <>
      {/* Hero banner */}
      <section className="bg-brand-mesh grain relative isolate overflow-hidden">
        <Aurora variant="soft" />
        <div aria-hidden="true" className="bg-grid-faint absolute inset-0 opacity-60" />

        <div className="container-page relative py-12 md:py-16">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-brand-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to all courses
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
              {course.category}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {course.title}
            </h1>

            {course.subtitle && (
              <p className="mt-2 font-heading text-lg font-bold text-brand-accent sm:text-xl">
                {course.subtitle}
              </p>
            )}

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {course.shortDescription}
            </p>

            <dl className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/45">
                    <Icon size={13} aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="mt-1 font-heading text-base font-bold text-white">{value}</dd>
                </div>
              ))}
            </dl>

            {course.mode && (
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/55">
                <Monitor size={15} className="text-brand-accent" aria-hidden="true" />
                {course.mode}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
            <div>
              <CourseDetailTabs course={course} />
            </div>

            {/* Enrolment sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="card overflow-hidden">
                <GradientPlaceholder
                  from={course.accent}
                  to={course.accentTo}
                  kicker={course.category}
                  className="aspect-[16/10] w-full"
                />

                <div className="p-6">
                  <p className="font-heading text-base font-bold text-brand-dark">
                    Ready to learn and grow?
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                    Talk to us about batch dates, enrolment, or scheduling a cohort for your team.
                  </p>

                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-5 w-full"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    Enrol Now — WhatsApp
                  </a>

                  {course.brochureUrl ? (
                    <a
                      href={asset(course.brochureUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost mt-3 w-full"
                    >
                      <Download size={16} aria-hidden="true" />
                      Download Brochure
                    </a>
                  ) : (
                    <button type="button" className="btn-ghost mt-3 w-full" disabled>
                      <Download size={16} aria-hidden="true" />
                      Brochure coming soon
                    </button>
                  )}

                  <ul className="mt-6 space-y-3 border-t border-brand-dark/[0.07] pt-5 text-sm">
                    <li>
                      <a
                        href={`tel:+${SITE.phoneDigits}`}
                        className="inline-flex items-center gap-2 text-brand-muted transition-colors hover:text-brand-accentDark"
                      >
                        <Phone size={15} aria-hidden="true" />
                        {SITE.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="inline-flex items-center gap-2 break-all text-brand-muted transition-colors hover:text-brand-accentDark"
                      >
                        <Mail size={15} aria-hidden="true" />
                        {SITE.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related courses */}
      {related.length > 0 && (
        <section className="section-pad bg-brand-light">
          <div className="container-page">
            <h2 className="reveal font-heading text-2xl font-extrabold text-brand-dark sm:text-3xl">
              Other programmes you might like
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <div key={item.slug} className="reveal">
                  <CourseCard course={item} />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/#courses" className="btn-ghost">
                <ArrowLeft size={16} aria-hidden="true" />
                Back to courses
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
