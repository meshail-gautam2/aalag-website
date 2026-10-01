import Link from 'next/link';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

import HeroStats from '@/components/HeroStats';
import { SITE } from '@/lib/site';

const WHAT_YOU_GET = [
  'Industry-relevant training',
  'Expert-led learning',
  'Live and interactive sessions',
  'Practical examples and assignments',
  'Flexible online learning',
  'Personalized learning support',
  'Assessments and skill development',
  'Career-focused guidance',
];

export default function Hero() {
  return (
    <section id="home" className="bg-brand-mesh relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-grid-faint absolute inset-0 opacity-60" />

      <div className="container-page relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
            <Sparkles size={14} aria-hidden="true" />
            {SITE.motto}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.3rem]">
            Build Skills. Build Confidence.{' '}
            <span className="text-brand-accent">Build Your Future.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Learn practical, career-focused skills through flexible online training designed for
            students, working professionals, job seekers and career aspirants.
          </p>

          <p className="mt-4 font-heading text-sm font-bold text-brand-accent sm:text-base">
            Learn from anywhere. Learn at your pace. Grow with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#courses" className="btn-primary">
              Explore Courses
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Contact Us
            </a>
          </div>

          <div className="mt-10">
            <HeroStats />
          </div>
        </div>

        {/* "What You Get" panel — abstract brand surface rather than stock photography. */}
        <div className="reveal lg:pl-4">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <p className="eyebrow text-brand-accent">What You Get</p>
            <h2 className="mt-3 font-heading text-xl font-bold text-white">
              Why choose AALAG?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Training built to be easy to understand, practical and career-focused, with
              real-world examples and hands-on learning.
            </p>

            <ul className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {WHAT_YOU_GET.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
