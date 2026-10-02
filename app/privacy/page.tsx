import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Mail, MessageCircle, Phone } from 'lucide-react';

import Aurora from '@/components/Aurora';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How All About Learn And Grow (AALAG) handles your information when you use this website or contact us.',
};

/** Shown as "Last updated" — bump this whenever the policy text changes. */
const LAST_UPDATED = '2 October 2026';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="reveal mt-10">
      <h2 className="font-heading text-xl font-bold text-brand-dark sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-muted sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-mesh grain relative isolate overflow-hidden">
        <Aurora variant="soft" />
        <div aria-hidden="true" className="bg-grid-faint absolute inset-0 opacity-60" />

        <div className="container-page relative py-12 md:py-16">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-brand-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>

          <h1 className="mt-8 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/60">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <p className="reveal text-base leading-relaxed text-brand-dark/80">
            This policy explains what happens to your information when you visit this website or
            get in touch with <strong>All About Learn And Grow (AALAG)</strong>. We have tried to
            write it in plain language rather than legal boilerplate.
          </p>

          <Section title="The short version">
            <ul className="space-y-2">
              {[
                'This website does not use analytics, advertising or tracking of any kind.',
                'We set no cookies of our own.',
                'Fonts are served from this website, not from Google, so visiting does not notify any third party.',
                'There are no accounts, logins or payments on this website.',
                'The only information we hold is what you choose to send us when you contact us.',
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Information you give us">
            <p>
              If you contact us by WhatsApp, phone or email about a course, we receive whatever you
              choose to send — typically your name, your contact details and what you would like to
              learn. We use it to answer you, arrange your training and keep in touch about the
              programme you enrol in.
            </p>
            <p>
              The enquiry form on the contact section is not connected to any service at present.
              Nothing typed into it is submitted, transmitted or stored anywhere. Please use
              WhatsApp, phone or email to reach us.
            </p>
          </Section>

          <Section title="The AI chat assistant">
            <p>
              The chat assistant in the corner of the page is provided by{' '}
              <strong>JotForm</strong>, a third-party service. Conversations with it are processed
              and stored on JotForm&rsquo;s systems rather than ours, and the assistant tells you
              in its own window that the chat is recorded.
            </p>
            <p>
              Please do not share sensitive personal information, identification numbers or payment
              details with the assistant. If you would prefer not to use it, every question it can
              answer can also be answered on WhatsApp, by phone or by email.
            </p>
            <p>
              JotForm sets its own cookies or similar storage when the assistant loads. Their
              handling of that data is governed by{' '}
              <a
                href="https://www.jotform.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-accentDark underline decoration-brand-accent/40 underline-offset-2"
              >
                JotForm&rsquo;s privacy policy
              </a>
              .
            </p>
          </Section>

          <Section title="Technical information">
            <p>
              This website is hosted on Vercel. Like any web host, their servers record standard
              technical details of requests — such as IP address, browser type and the page
              requested — for security and reliability. We do not add any analytics or tracking on
              top of this, and we do not build profiles of visitors.
            </p>
          </Section>

          <Section title="Links to other services">
            <p>
              The site links out to WhatsApp, Instagram, YouTube and LinkedIn. Following those links
              takes you to services operated by other companies, each with its own privacy policy.
              We have no control over, and take no responsibility for, how they handle your data.
            </p>
          </Section>

          <Section title="How we use your information">
            <p>We use what you send us only to:</p>
            <ul className="space-y-2">
              {[
                'Reply to your enquiry and advise you on a suitable course',
                'Share schedules, fees and enrolment details you have asked for',
                'Deliver your training and support you through it',
                'Keep the records we need to run our training programmes',
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              We do not sell your information, and we do not share it with anyone for marketing
              purposes.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep enquiry messages for as long as we need them to respond and to maintain our
              training records, and no longer than necessary. Chat transcripts are retained by
              JotForm according to that service&rsquo;s own retention settings. If you would like
              your information removed, contact us and we will delete what we hold.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              You can ask us what information we hold about you, ask us to correct it, or ask us to
              delete it. Get in touch using any of the methods below and we will deal with your
              request.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If the website changes in a way that affects your privacy — for example if we connect
              the enquiry form to a service, or add analytics — we will update this page and change
              the date at the top.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              For anything in this policy, or any request about your information, reach us at:
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-brand-dark transition-colors hover:text-brand-accentDark"
                >
                  <MessageCircle size={16} className="text-brand-accentDark" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${SITE.phoneDigits}`}
                  className="inline-flex items-center gap-2 font-medium text-brand-dark transition-colors hover:text-brand-accentDark"
                >
                  <Phone size={16} className="text-brand-accentDark" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 break-all font-medium text-brand-dark transition-colors hover:text-brand-accentDark"
                >
                  <Mail size={16} className="text-brand-accentDark" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </Section>

          <div className="reveal mt-12 border-t border-brand-dark/[0.07] pt-8">
            <Link href="/#home" className="btn-ghost">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
