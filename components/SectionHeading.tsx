type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`reveal max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`flex items-center gap-2.5 ${isCenter ? 'justify-center' : ''} ${
            tone === 'light' ? 'eyebrow text-brand-accent' : 'eyebrow'
          }`}
        >
          <span aria-hidden="true" className="h-px w-6 bg-brand-accent/60" />
          {eyebrow}
          {isCenter && <span aria-hidden="true" className="h-px w-6 bg-brand-accent/60" />}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold sm:text-4xl ${
          tone === 'light' ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === 'light' ? 'text-white/70' : 'text-brand-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
