'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';

/**
 * Answers reflect the client's brief (enrolment by WhatsApp, live + recorded sessions,
 * certificate on completion, learner support). Confirm fee and instalment wording with the
 * business before launch.
 */
const FAQS = [
  {
    question: 'How do I enrol in a course?',
    answer:
      'Message or call us on +91 7303109123, or email learningarena27@gmail.com, with the course you are interested in. We confirm the schedule, learning format and fee, then complete your registration for the selected programme.',
  },
  {
    question: 'Are the courses live or self-paced?',
    answer:
      'Our programmes are delivered online and instructor-led, with live and interactive sessions. Learning resources and materials are available alongside the sessions so you can work through them around your own commitments.',
  },
  {
    question: 'How long is each programme?',
    answer:
      'Our published programmes run to 20 sessions across 8 parts, typically 30 to 40 hours of content delivered online over a few weeks. Duration can be set to suit depth, and we also schedule dedicated cohorts for teams.',
  },
  {
    question: 'Do I get a certificate after completion?',
    answer:
      'Yes. A Certificate of Completion is awarded on successful completion of all assessments. The Power BI programme also acts as a bridge toward the Microsoft PL-300 (Power BI Data Analyst) exam.',
  },
  {
    question: 'Do I need prior experience to start?',
    answer:
      'Not for our foundation programmes. MS Office and Excel assume no prior experience, and the HR Generalist programme starts from first principles. Power BI expects basic Excel such as formulas and pivot tables, but no coding.',
  },
  {
    question: 'What support do I get during the course?',
    answer:
      'Learner support includes course orientation, a training schedule, learning materials, assignments, assessments, doubt clarification, progress guidance, course completion support and career-focused guidance.',
  },
  {
    question: 'How will I be assessed?',
    answer:
      'Through quizzes after each part, hands-on practical assignments, and a final capstone project or case study depending on the programme. Assessment is there to confirm the skill has landed, not to catch you out.',
  },
  {
    question: 'Can you train my team?',
    answer:
      'Yes. We schedule dedicated cohorts for teams and can tailor depth and duration to your requirements. Get in touch with the team size and the skills you want covered and we will put together a plan.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything learners usually ask before enrolling. If your question is not here, message us on WhatsApp."
        />

        <div className="reveal mx-auto mt-12 max-w-3xl divide-y divide-brand-dark/[0.07] overflow-hidden rounded-xl border border-brand-dark/[0.07]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className={isOpen ? 'bg-brand-light/60' : 'bg-white'}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-brand-light/80 sm:px-6"
                  >
                    <span className="font-heading text-[0.95rem] font-bold text-brand-dark sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors ${
                        isOpen
                          ? 'bg-brand-accent text-brand-dark'
                          : 'bg-brand-light text-brand-muted'
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                </h3>

                {/* Grid-rows trick animates to the content's natural height. */}
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-brand-muted sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
