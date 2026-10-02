'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

import Aurora from '@/components/Aurora';
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
  const reduced = useReducedMotion();

  // Entrance: one stagger down the left column, panel follows.
  const rise = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    show: { opacity: 1, y: 0 },
  };
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="home" className="bg-brand-mesh grain relative isolate overflow-hidden">
      {/*
        motion renders its `initial` state into the server HTML as inline
        `opacity:0`, so without JavaScript the entire hero would stay invisible.
        This restores it for no-JS and hydration-failure cases — the headline and
        CTAs are the most important content on the page and must never depend on
        a script to be readable.
      */}
      <noscript>
        <style>{`#home [style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <Aurora />
      <div aria-hidden="true" className="bg-grid-faint absolute inset-0 opacity-50" />

      <div className="container-page relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={rise}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent"
          >
            <Sparkles size={14} aria-hidden="true" />
            {SITE.motto}
          </motion.span>

          <motion.h1
            variants={rise}
            transition={{ duration: 0.8, ease }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4rem]"
          >
            Build Skills.
            <br />
            Build Confidence.
            <br />
            <span className="bg-gradient-to-r from-brand-accent via-[#8BE0E8] to-brand-accent bg-clip-text text-transparent">
              Build Your Future.
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            transition={{ duration: 0.7, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Learn practical, career-focused skills through flexible online training designed for
            students, working professionals, job seekers and career aspirants.
          </motion.p>

          <motion.p
            variants={rise}
            transition={{ duration: 0.7, ease }}
            className="mt-4 font-heading text-sm font-bold text-brand-accent sm:text-base"
          >
            Learn from anywhere. Learn at your pace. Grow with confidence.
          </motion.p>

          <motion.div
            variants={rise}
            transition={{ duration: 0.7, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/#courses" className="btn-primary group !px-7 !py-3.5">
              Explore Courses
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !px-7 !py-3.5"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Contact Us
            </a>
          </motion.div>

          <motion.div variants={rise} transition={{ duration: 0.7, ease }} className="mt-12">
            <HeroStats />
          </motion.div>
        </motion.div>

        {/* "What You Get" panel */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="lg:pl-4"
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
            />

            <p className="eyebrow text-brand-accent">What You Get</p>
            <h2 className="mt-3 font-heading text-xl font-bold text-white">Why choose AALAG?</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Training built to be easy to understand, practical and career-focused, with
              real-world examples and hands-on learning.
            </p>

            <ul className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {WHAT_YOU_GET.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: reduced ? 0 : -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.5 + index * 0.06 }}
                  className="flex items-start gap-2 text-sm text-white/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
