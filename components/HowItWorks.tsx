import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import { SITE } from '@/lib/site';

const STEPS = [
  { title: 'Explore', body: 'Browse our courses and identify the skill you want to develop.' },
  {
    title: 'Connect',
    body: 'Contact our team to understand the course, schedule, learning format and fee.',
  },
  { title: 'Enrol', body: 'Complete the registration process for your selected program.' },
  { title: 'Learn', body: 'Attend your training sessions and access learning resources.' },
  {
    title: 'Practice',
    body: 'Complete assignments, activities, assessments and practical exercises.',
  },
  {
    title: 'Grow',
    body: 'Apply your knowledge and continue developing your professional skills.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-brand-light">
      <div className="container-page">
        <SectionHeading
          eyebrow="How It Works"
          title="Six steps from curious to capable"
          subtitle="A clear path from the course you are considering to the skills you can use at work."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="reveal card relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="font-heading text-4xl font-extrabold leading-none text-brand-accent/25"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-brand-dark">
                Step {index + 1} — {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12 overflow-hidden rounded-2xl bg-brand-dark p-8 sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                Ready to Start Learning?
              </h3>
              <p className="mt-2 text-base text-white/70">
                Take the next step toward developing your skills.
              </p>
              <p className="mt-1 font-heading text-base font-bold text-brand-accent">
                Choose a course. Start learning. Keep growing.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Enquire Now
              </a>
              <Link href="/#courses" className="btn-outline w-full">
                Explore Courses
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
