import { Compass, Rocket, Target } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import { SITE } from '@/lib/site';

const GOALS = [
  'Build job-ready skills that match today’s workplace needs',
  'Strengthen professional knowledge through structured learning',
  'Gain practical experience through real-world examples and projects',
  'Build confidence to apply their skills in the workplace',
  'Prepare for evolving career opportunities and professional growth',
  'Learn flexibly while balancing work, studies and personal commitments',
  'Embrace continuous learning and stay ready for what comes next',
];

const PILLARS = [
  {
    icon: Target,
    label: 'Our Goal',
    headline: 'Reset. Reskill. Rise.',
    body: 'Building future-ready skills for the evolving world of HR, Data and Technology — helping learners move confidently from learning to doing, and from skills to career growth.',
  },
  {
    icon: Rocket,
    label: 'Our Promise',
    headline: 'Learn with purpose.',
    body: 'Apply with confidence. Grow with AALAG.',
  },
  {
    icon: Compass,
    label: 'Our Vision',
    headline: 'A trusted learning platform',
    body: 'To become a trusted online learning and EdTech platform that empowers individuals to continuously learn, grow and succeed through practical, industry-relevant and accessible education.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Who We Are
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-muted">
              <p>
                <strong className="font-semibold text-brand-dark">
                  All About Learn And Grow (AALAG)
                </strong>{' '}
                is an online training and EdTech platform focused on helping learners develop
                practical and career-relevant skills.
              </p>
              <p>
                We provide structured learning opportunities for students, working professionals,
                career aspirants, and individuals looking to upskill or reskill.
              </p>
              <p>
                Our approach combines knowledge, practical learning, assessments, guidance and
                continuous improvement to create a meaningful learning experience.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-brand-dark/[0.07] bg-brand-light p-6">
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-brand-dark">
                We aim to help learners
              </p>
              <ul className="mt-4 space-y-2.5">
                {GOALS.map((goal) => (
                  <li key={goal} className="flex gap-2.5 text-sm leading-relaxed text-brand-muted">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                    />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            {PILLARS.map(({ icon: Icon, label, headline, body }) => (
              <div
                key={label}
                className="reveal card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accentDark">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <p className="eyebrow">{label}</p>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-brand-dark">{headline}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{body}</p>
              </div>
            ))}

            <div className="reveal rounded-xl bg-brand-dark p-6 text-center sm:p-7">
              <p className="whitespace-nowrap font-heading text-[0.9rem] font-bold text-white sm:text-lg">
                {SITE.tagline}
              </p>
              <p className="mt-1 text-sm text-brand-accent">{SITE.descriptor}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
