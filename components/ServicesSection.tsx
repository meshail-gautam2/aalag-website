import {
  CalendarClock,
  GraduationCap,
  LifeBuoy,
  Presentation,
  TrendingUp,
  UserCheck,
  Wrench,
} from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';

const SERVICES = [
  {
    icon: Presentation,
    title: 'Online Training Programs',
    body: 'Practical, skill-based training designed for students, working professionals and career aspirants.',
  },
  {
    icon: GraduationCap,
    title: 'Executive Education Programs',
    body: 'Enhance your professional expertise and leadership capabilities through flexible, career-focused programs designed for working professionals and aspiring leaders.',
  },
  {
    icon: UserCheck,
    title: 'Expert-Led Learning',
    body: 'Learn from experienced trainers through structured sessions, practical examples, activities and discussions.',
  },
  {
    icon: Wrench,
    title: 'Professional & Technical Skills',
    body: 'Build skills in HR, analytics, automation, productivity tools, digital skills and other career-focused areas.',
  },
  {
    icon: TrendingUp,
    title: 'Career & Skill Development',
    body: 'Develop practical capabilities, strengthen professional confidence and prepare for future career opportunities.',
  },
  {
    icon: LifeBuoy,
    title: 'Personalized Learning Support',
    body: 'Receive guidance, doubt resolution, assessments, assignments and learning support throughout your training journey.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Online Learning',
    body: 'Learn from anywhere with flexible learning options designed to fit around your work, studies and personal commitments.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Services"
          title="How we support your learning"
          subtitle="Training, guidance and support designed around working lives — not the other way round."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body }) => (
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
      </div>
    </section>
  );
}
