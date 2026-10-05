import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Mail, MessageCircle, Phone } from 'lucide-react';

import Aurora from '@/components/Aurora';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How this website handles information, and how to contact All About Learn And Grow (AALAG).',
};

/** Bump whenever the text below changes. */
const LAST_UPDATED = '5 October 2026';

/**
 * Every statement on this page is either a verified technical fact about the built site
 * or a contact detail supplied by the client. Nothing here is boilerplate, and no policy
 * commitment is made on AALAG's behalf — retention periods, data-subject rights, the
 * registered entity and governing law all have to come from the business before they can
 * be stated. See the README for the list.
 */
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
          />
          {item}
        </li>
      ))}
    </ul>
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
            This page describes how this website handles information.
          </p>

          <Section title="What this website does not collect">
            <Bullets
              items={[
                'This website contains no analytics, advertising or tracking software.',
                'This website sets no cookies of its own.',
                'Fonts are served from this website, so loading a page sends no request to any font provider.',
                'There are no accounts, logins or payments on this website.',
              ]}
            />
          </Section>

          <Section title="The enquiry form">
            <p>
              The form in the contact section is not connected to any service. It has no
              destination configured, so anything typed into it is not sent, received or stored.
              To reach us, please use WhatsApp, phone or email.
            </p>
          </Section>

          <Section title="The chat assistant">
            <p>
              The chat assistant is provided by JotForm and loaded from JotForm&rsquo;s servers.
              Conversations with it are handled by JotForm, not by this website, and the
              assistant states in its own window that the chat is recorded.
            </p>
            <p>
              What JotForm does with that data is covered by{' '}
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

          <Section title="Hosting">
            <p>
              This website is hosted by Vercel. As with any web host, their servers record
              standard technical details of each request.
            </p>
          </Section>

          <Section title="Links to other services">
            <p>
              This website links to WhatsApp, Instagram, YouTube and LinkedIn. Following any of
              those links takes you to a service operated by another company, under that
              company&rsquo;s own privacy policy.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For any question about this page, or about information you have sent us, contact
              All About Learn And Grow:
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
