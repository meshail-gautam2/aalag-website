import {
  BookOpenCheck,
  CalendarCheck,
  CircleHelp,
  ClipboardList,
  FileText,
  GraduationCap,
  Headphones,
  Infinity as InfinityIcon,
  LineChart,
  Repeat,
  Target,
  Timer,
  UserCog,
} from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';

const REASONS = [
  {
    icon: BookOpenCheck,
    title: 'Practical Learning',
    body: 'Focus on concepts that can be applied in real-world situations.',
  },
  {
    icon: Timer,
    title: 'Flexible Learning',
    body: 'Learn without putting your work or studies on hold.',
  },
  {
    icon: UserCog,
    title: 'Personalized Support',
    body: 'Get guidance throughout your learning journey.',
  },
  {
    icon: Target,
    title: 'Career Focus',
    body: 'Develop skills relevant to professional growth.',
  },
  {
    icon: Repeat,
    title: 'Continuous Learning',
    body: 'Keep upgrading your knowledge as workplace requirements evolve.',
  },
];

const SUPPORT = [
  { icon: CalendarCheck, label: 'Course orientation' },
  { icon: ClipboardList, label: 'Training schedule' },
  { icon: FileText, label: 'Learning materials' },
  { icon: ClipboardList, label: 'Assignments' },
  { icon: LineChart, label: 'Assessments' },
  { icon: CircleHelp, label: 'Doubt clarification' },
  { icon: LineChart, label: 'Progress guidance' },
  { icon: GraduationCap, label: 'Course completion support' },
  { icon: Headphones, label: 'Career-focused guidance' },
];

export default function WhyAalag() {
  return (
    <section id="why" className="section-pad bg-brand-light">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why AALAG?"
          title="Learning that respects your time"
          subtitle="Five things every AALAG programme is built around — and the support that comes with it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="reveal card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accentDark">
                <Icon size={21} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-brand-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{body}</p>
            </article>
          ))}
        </div>

        {/* Learner support */}
        <div className="reveal mt-14 rounded-2xl border border-brand-dark/[0.07] bg-white p-7 sm:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-heading text-xl font-bold text-brand-dark sm:text-2xl">
              Learner Support
            </h3>
            <p className="flex items-center gap-1.5 text-sm text-brand-muted">
              <InfinityIcon size={15} className="text-brand-accentDark" aria-hidden="true" />
              Throughout your training journey
            </p>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-lg bg-brand-light px-4 py-3 text-sm font-medium text-brand-dark"
              >
                <Icon size={16} className="shrink-0 text-brand-accentDark" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
