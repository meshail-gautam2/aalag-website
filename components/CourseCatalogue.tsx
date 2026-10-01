import { MessageCircle } from 'lucide-react';

import { CATALOGUE } from '@/lib/courses';
import { SITE } from '@/lib/site';

/**
 * The full list of training areas from the client's brief. The carousel above shows the
 * programmes that have a published brochure and a detail page; this is everything else
 * AALAG trains on. Add a topic by editing CATALOGUE in lib/courses.ts.
 */
export default function CourseCatalogue() {
  return (
    <section id="catalogue" className="section-pad bg-brand-light">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Learn Skills That Matter
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">
            Explore our training programs across different professional and technical areas.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CATALOGUE.map((group) => (
          <section
            key={group.id}
            className="reveal card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <h4 className="font-heading text-base font-bold text-brand-dark">{group.title}</h4>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-md bg-brand-light px-2.5 py-1 text-xs font-medium text-brand-dark/75"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="reveal flex flex-col justify-center rounded-xl bg-brand-dark p-6 text-center">
          <p className="font-heading text-lg font-bold text-white">
            Looking for something else?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/65">
            Tell us the skill you want to build and we will point you to the right programme or
            schedule a cohort for your team.
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Ask About a Course
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
