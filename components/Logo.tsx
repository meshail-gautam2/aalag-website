import Image from 'next/image';
import Link from 'next/link';
import { Brain } from 'lucide-react';

import { SITE } from '@/lib/site';

/**
 * The supplied logo lives at /public/logo.png (circular, transparent corners so it sits
 * cleanly on both the white navbar and the dark footer).
 *
 * The wordmark beside it is kept deliberately: the lettering inside the mark is decorative
 * and unreadable below ~80px, so the name is set in type next to it.
 *
 * Setting LOGO_SRC back to null falls back to the built-in brand mark.
 */
const LOGO_SRC: string | null = '/logo.png';

type LogoProps = {
  /** Rendered pixel size of the mark. */
  size?: number;
  /** Colour of the wordmark text; the mark itself is always brand-coloured. */
  tone?: 'light' | 'dark';
  /** Hide the wordmark and show only the mark. */
  markOnly?: boolean;
  className?: string;
};

export function LogoMark({ size = 40 }: { size?: number }) {
  if (LOGO_SRC) {
    return (
      <Image
        src={LOGO_SRC}
        alt={`${SITE.name} logo`}
        width={size}
        height={size}
        className="rounded-full"
        priority
      />
    );
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-brand-dark ring-1 ring-inset ring-white/10"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Brain size={Math.round(size * 0.56)} className="text-brand-accent" strokeWidth={1.8} />
    </span>
  );
}

export default function Logo({ size = 40, tone = 'dark', markOnly = false, className = '' }: LogoProps) {
  return (
    <Link
      href="/#home"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={`${SITE.name} — home`}
    >
      <LogoMark size={size} />
      {!markOnly && (
        <span className="leading-tight">
          <span
            className={`block font-heading text-[0.95rem] font-extrabold tracking-tight sm:text-base ${
              tone === 'light' ? 'text-white' : 'text-brand-dark'
            }`}
          >
            All About
          </span>
          <span
            className={`block font-heading text-[0.95rem] font-extrabold tracking-tight sm:text-base ${
              tone === 'light' ? 'text-brand-accent' : 'text-brand-accentDark'
            }`}
          >
            Learn And Grow
          </span>
        </span>
      )}
    </Link>
  );
}
