type AuroraProps = {
  /** 'full' for the hero, 'soft' for shorter dark bands where less movement reads better. */
  variant?: 'full' | 'soft';
};

/**
 * Slow-drifting colour behind dark sections. Purely decorative, sits under content,
 * and holds still for reduced-motion users (see .blob-* in globals.css).
 */
export default function Aurora({ variant = 'full' }: AuroraProps) {
  const soft = variant === 'soft';

  return (
    <div className="aurora" aria-hidden="true">
      <div
        className="blob blob-a"
        style={{
          top: soft ? '-40%' : '-18%',
          left: '-10%',
          width: soft ? '34rem' : '46rem',
          height: soft ? '34rem' : '46rem',
          background: `radial-gradient(circle, rgba(92,200,212,${soft ? 0.3 : 0.42}), transparent 62%)`,
        }}
      />
      <div
        className="blob blob-b"
        style={{
          top: soft ? '-10%' : '10%',
          right: '-16%',
          width: soft ? '30rem' : '40rem',
          height: soft ? '30rem' : '40rem',
          background: `radial-gradient(circle, rgba(74,168,184,${soft ? 0.26 : 0.34}), transparent 64%)`,
        }}
      />
      {!soft && (
        <div
          className="blob blob-c"
          style={{
            bottom: '-28%',
            left: '28%',
            width: '38rem',
            height: '38rem',
            background: 'radial-gradient(circle, rgba(111,210,220,0.26), transparent 66%)',
          }}
        />
      )}
    </div>
  );
}
