'use client';

import { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  Target,
  Users,
} from 'lucide-react';

import type { Course } from '@/lib/courses';
import { totalSessions } from '@/lib/courses';

const TABS = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'curriculum', label: 'Curriculum', icon: GraduationCap },
  { id: 'delivery', label: 'Delivery & Assessment', icon: ClipboardCheck },
] as const;

type TabId = (typeof TABS)[number]['id'];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <CheckCircle2
            size={18}
            className="mt-0.5 shrink-0 text-brand-accentDark"
            aria-hidden="true"
          />
          <span className="text-sm leading-relaxed text-brand-dark/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CourseDetailTabs({ course }: { course: Course }) {
  const [tab, setTab] = useState<TabId>('overview');
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Course information"
        className="no-scrollbar flex gap-1 overflow-x-auto border-b border-brand-dark/[0.08]"
      >
        {TABS.map(({ id, label, icon: Icon }) => {
          const active = tab === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={active}
              aria-controls={`panel-${id}`}
              onClick={() => setTab(id)}
              className={`-mb-px flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
                active
                  ? 'border-brand-accent text-brand-dark'
                  : 'border-transparent text-brand-muted hover:text-brand-dark'
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </button>
          );
        })}
      </div>

      {/* Overview */}
      {tab === 'overview' && (
        <div id="panel-overview" role="tabpanel" aria-labelledby="tab-overview" className="pt-8">
          <h2 className="font-heading text-xl font-bold text-brand-dark">About this programme</h2>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">{course.description}</p>

          {course.goal && (
            <div className="mt-6 rounded-xl border-l-4 border-brand-accent bg-brand-light p-5">
              <p className="flex items-center gap-2 font-heading text-sm font-bold text-brand-dark">
                <Target size={16} className="text-brand-accentDark" aria-hidden="true" />
                Programme goal
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{course.goal}</p>
            </div>
          )}

          {course.outcomes && course.outcomes.length > 0 && (
            <div className="mt-10">
              <h3 className="font-heading text-lg font-bold text-brand-dark">
                What you will be able to do
              </h3>
              <Bullets items={course.outcomes} />
            </div>
          )}

          {course.audience && course.audience.length > 0 && (
            <div className="mt-10 rounded-xl bg-brand-light p-6">
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-brand-dark">
                <Users size={18} className="text-brand-accentDark" aria-hidden="true" />
                Who should attend
              </h3>
              <ul className="mt-3 space-y-2">
                {course.audience.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-brand-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {course.prerequisites && (
            <div className="mt-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-dark">
                What you need
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {course.prerequisites}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Curriculum */}
      {tab === 'curriculum' && (
        <div
          id="panel-curriculum"
          role="tabpanel"
          aria-labelledby="tab-curriculum"
          className="pt-8"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-heading text-xl font-bold text-brand-dark">The curriculum</h2>
            <p className="text-sm text-brand-muted">
              {course.modules.length} parts · {totalSessions(course)} sessions
            </p>
          </div>

          <div className="mt-5 divide-y divide-brand-dark/[0.07] overflow-hidden rounded-xl border border-brand-dark/[0.07]">
            {course.modules.map((module, index) => {
              const isOpen = openModule === index;
              return (
                <div key={module.title} className={isOpen ? 'bg-brand-light/60' : 'bg-white'}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenModule(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`module-${index}`}
                      className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-light/80"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-dark font-heading text-xs font-bold text-brand-accent"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-heading text-[0.95rem] font-bold text-brand-dark">
                          {module.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-brand-muted">
                          {module.lessons} {module.lessons === 1 ? 'session' : 'sessions'}
                        </span>
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 text-brand-muted transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`module-${index}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 pl-[4.25rem] text-sm leading-relaxed text-brand-muted">
                        {module.summary ??
                          'A detailed session breakdown for this part is in the course brochure.'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Delivery & assessment */}
      {tab === 'delivery' && (
        <div id="panel-delivery" role="tabpanel" aria-labelledby="tab-delivery" className="pt-8">
          {course.delivery && course.delivery.length > 0 && (
            <>
              <h2 className="font-heading text-xl font-bold text-brand-dark">
                How it is delivered
              </h2>
              <Bullets items={course.delivery} />
            </>
          )}

          {course.assessment && course.assessment.length > 0 && (
            <div className="mt-10">
              <h3 className="font-heading text-lg font-bold text-brand-dark">
                Assessment &amp; certification
              </h3>
              <ul className="mt-4 divide-y divide-brand-dark/[0.07] overflow-hidden rounded-xl border border-brand-dark/[0.07]">
                {course.assessment.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 bg-white px-5 py-4 text-sm leading-relaxed text-brand-dark/80"
                  >
                    <ClipboardCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-brand-accentDark"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 rounded-xl bg-brand-light p-6">
            <h3 className="font-heading text-base font-bold text-brand-dark">Your trainers</h3>
            <p className="mt-1 text-sm font-medium text-brand-accentDark">
              {course.instructor.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{course.instructor.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}
