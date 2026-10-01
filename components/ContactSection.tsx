import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react';

import { SITE } from '@/lib/site';

const DETAILS = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: SITE.phone,
    href: `tel:+${SITE.phoneDigits}`,
  },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: 'Location', value: SITE.location, href: null },
];

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: SITE.socials.instagram },
  { icon: Youtube, label: 'YouTube', href: SITE.socials.youtube },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.socials.linkedin },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-brand-light">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Contact Us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
              We&rsquo;re Here to Help You Learn &amp; Grow
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-brand-muted">
              Have questions about our courses, training schedules, enrolment or learning
              options? Get in touch with our team.
            </p>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full !py-4 text-base sm:w-auto"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Message Us on WhatsApp
            </a>

            <dl className="mt-10 space-y-4">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accentDark">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      {label}
                    </dt>
                    <dd className="font-medium text-brand-dark">
                      {href ? (
                        <a href={href} className="hover:text-brand-accentDark">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-dark/10 bg-white text-brand-muted transition-all hover:border-brand-accent hover:text-brand-accentDark"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>

            <p className="mt-8 font-heading text-sm font-bold text-brand-accentDark">
              Learn • Grow • Succeed
            </p>
          </div>

          <div className="reveal card p-6 sm:p-8">
            <h3 className="font-heading text-lg font-bold text-brand-dark">Send an enquiry</h3>
            <p className="mt-1.5 text-sm text-brand-muted">
              Prefer not to use WhatsApp? Leave your details and we will get back to you.
            </p>

            {/*
              PLACEHOLDER form: no submit handler and no backend by design (static site).
              To make it live, point `action` at a Netlify Form, Formspree or similar endpoint
              and remove the notice below.
            */}
            <form className="mt-6 space-y-4" aria-describedby="form-notice">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-dark">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-brand-dark/10 bg-brand-light px-4 py-3 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-accent focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-brand-dark"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-brand-dark/10 bg-brand-light px-4 py-3 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-accent focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-brand-dark"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Which course are you interested in?"
                  className="w-full resize-none rounded-lg border border-brand-dark/10 bg-brand-light px-4 py-3 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-accent focus:outline-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full" disabled>
                Send Message
              </button>
              <p id="form-notice" className="text-center text-xs text-brand-muted">
                Form submissions are not connected yet — please use WhatsApp, call or email for
                now.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
