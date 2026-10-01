import Link from 'next/link';
import { Instagram, Linkedin, Mail, MessageCircle, Phone, Youtube } from 'lucide-react';

import Logo from '@/components/Logo';
import { courses } from '@/lib/courses';
import { NAV_LINKS, SITE } from '@/lib/site';

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: SITE.socials.instagram },
  { icon: Youtube, label: 'YouTube', href: SITE.socials.youtube },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.socials.linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo size={44} tone="light" />
            <p className="mt-4 font-heading text-sm font-bold text-brand-accent">
              {SITE.tagline}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">
              {SITE.descriptor}
            </p>
            <p className="mt-3 font-heading text-sm font-bold text-white">Learn • Grow • Succeed</p>

            <div className="mt-5 flex items-center gap-2.5">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-brand-accent hover:text-brand-accent"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-labelledby="footer-links">
            <h2 id="footer-links" className="font-heading text-sm font-bold text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-courses">
            <h2 id="footer-courses" className="font-heading text-sm font-bold text-white">
              Programmes
            </h2>
            <ul className="mt-4 space-y-2.5">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-sm text-white/55 transition-colors hover:text-brand-accent"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-sm font-bold text-white">Get In Touch</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/55">
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand-accent"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${SITE.phoneDigits}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand-accent"
                >
                  <Phone size={15} aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 break-all transition-colors hover:text-brand-accent"
                >
                  <Mail size={15} aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            © 2026 All About Learn And Grow (AALAG). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
