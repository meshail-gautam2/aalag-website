import { ArrowDown, ArrowRight } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';

/**
 * The client's learning model, exactly as stated in the brief:
 * Learn -> Practice -> Assess -> Improve -> Grow.
 */
const FLOW = [
  'Concepts',
  'Practical Examples',
  'Activities & Assignments',
  'Assessments',
  'Feedback & Improvement',
  'Skill Development',
];

const CYCLE = ['Learn', 'Practice', 'Assess', 'Improve', 'Grow'];

const PERSONAS = [
  { title: 'Students', body: 'Build professional skills alongside your academic education.' },
  { title: 'Working Professionals', body: 'Upskill or reskill while continuing your current job.' },
  {
    title: 'Career Aspirants',
    body: 'Develop relevant skills to prepare for new career opportunities.',
  },
  {
    title: 'Career Switchers',
    body: 'Build knowledge and practical skills for a new professional direction.',
  },
  {
    title: 'Entrepreneurs & Business Owners',
    body: 'Develop management, analytics and productivity skills.',
  },
];

export default function LearningApproach() {
  return (
    <section id="approach" className="bg-brand-mesh section-pad relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-grid-faint absolute inset-0 opacity-50" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Our Learning Approach"
          title="Effective learning goes beyond watching lessons"
          subtitle="Every programme runs the same loop, so knowledge turns into a skill you can actually apply."
          tone="light"
        />

        {/* The cycle */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CYCLE.map((step, index) => (
            <div key={step} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-lg border border-brand-accent/30 bg-brand-accent/10 px-3.5 py-2 font-heading text-sm font-bold text-brand-accent sm:px-5 sm:py-2.5 sm:text-base">
                {step}
              </span>
              {index < CYCLE.length - 1 && (
                <ArrowRight size={16} className="text-white/30" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* The flow */}
        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FLOW.map((step, index) => (
            <li
              key={step}
              className="reveal relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-accent font-heading text-xs font-bold text-brand-dark"
              >
                {index + 1}
              </span>
              <p className="font-heading text-sm font-bold text-white">{step}</p>
              {index < FLOW.length - 1 && (
                <ArrowDown
                  size={14}
                  aria-hidden="true"
                  className="absolute -bottom-[0.6rem] left-8 z-10 text-brand-accent/50 sm:hidden"
                />
              )}
            </li>
          ))}
        </ol>

        {/* Who can learn with us */}
        <div className="mt-16">
          <h3 className="reveal text-center font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Who Can Learn With Us?
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PERSONAS.map((persona) => (
              <div
                key={persona.title}
                className="reveal rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-accent/40"
              >
                <p className="font-heading text-sm font-bold text-brand-accent">{persona.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{persona.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
