import { CATALOGUE } from '@/lib/courses';

/**
 * A continuous strip of every training topic AALAG offers, sat directly under the hero.
 *
 * It does real work: it shows the breadth of the catalogue in one glance, before anyone
 * has scrolled. Content is the client's own topic list — nothing invented. The list is
 * rendered twice so the loop is seamless (translateX(-50%) minus one gap).
 */
export default function TopicTicker() {
  const topics = CATALOGUE.flatMap((group) => group.topics);

  return (
    <section
      aria-label="Training topics we cover"
      className="border-y border-brand-dark/[0.07] bg-white py-5"
    >
      <div className="ticker">
        <div className="ticker-track">
          {topics.map((topic) => (
            <Chip key={topic} label={topic} />
          ))}
          {/* Duplicate run completes the loop; hidden from assistive tech. */}
          <div className="flex gap-3" aria-hidden="true">
            {topics.map((topic) => (
              <Chip key={`${topic}-dup`} label={topic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-brand-dark/[0.08] bg-brand-light px-4 py-2 text-sm font-medium text-brand-dark/80">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
      {label}
    </span>
  );
}
