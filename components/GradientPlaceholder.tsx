import type { ReactNode } from 'react';

type GradientPlaceholderProps = {
  from?: string;
  to?: string;
  /** Short label rendered over the gradient — usually the course or post title. */
  label?: string;
  /** Small text above the label, e.g. a category. */
  kicker?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * Stand-in for real imagery. Every thumbnail on the site is a gradient panel with a text
 * overlay, so the layout is final and the client only has to drop real images in later.
 */
export default function GradientPlaceholder({
  from = '#5CC8D4',
  to = '#1C2B3A',
  label,
  kicker,
  className = '',
  children,
}: GradientPlaceholderProps) {
  return (
    <div
      className={`relative isolate overflow-hidden ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      {/* Soft highlight + faint grid so flat gradients do not look unfinished. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(420px 220px at 18% 0%, rgba(255,255,255,0.3), transparent 60%)',
        }}
      />
      <div aria-hidden="true" className="bg-grid-faint absolute inset-0 opacity-50" />

      {(kicker || label) && (
        <div className="relative flex h-full flex-col justify-end p-5">
          {kicker && (
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/75">
              {kicker}
            </span>
          )}
          {label && (
            <span className="mt-1 font-heading text-lg font-bold leading-snug text-white drop-shadow-sm">
              {label}
            </span>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
