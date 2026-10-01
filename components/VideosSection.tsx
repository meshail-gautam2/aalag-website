'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

import GradientPlaceholder from '@/components/GradientPlaceholder';
import SectionHeading from '@/components/SectionHeading';

/**
 * Session videos, embedded from YouTube.
 *
 * TO ADD A VIDEO: paste the YouTube link (or just the id) into `youtube` below.
 * Any of these forms work — the id is extracted automatically:
 *   https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *   https://youtu.be/dQw4w9WgXcQ
 *   https://www.youtube.com/embed/dQw4w9WgXcQ
 *   dQw4w9WgXcQ
 *
 * Entries with `youtube: null` render as a "Coming soon" placeholder card and become
 * real, playable embeds as soon as a link is added. Titles below are the client's own
 * file names; descriptions are intentionally absent until the client supplies them.
 */
const VIDEOS: { id: string; title: string; topic: string; youtube: string | null }[] = [
  {
    id: 'power-bi',
    title: 'Power BI — Beginner’s Guide',
    topic: 'Data & Analytics',
    youtube: null,
  },
  {
    id: 'microsoft-excel',
    title: 'Microsoft Excel',
    topic: 'Productivity',
    youtube: null,
  },
  {
    id: 'ms-excel',
    title: 'MS Excel',
    topic: 'Productivity',
    youtube: null,
  },
  {
    id: 'microsoft-word',
    title: 'Microsoft Word',
    topic: 'Productivity',
    youtube: null,
  },
  {
    id: 'data-analysis-excel',
    title: 'Data Analysis in Excel',
    topic: 'Data & Analytics',
    youtube: null,
  },
  {
    id: 'posh',
    title: 'POSH — Women’s Rights',
    topic: 'HR & Compliance',
    youtube: null,
  },
  {
    id: 'business-strategies',
    title: 'A Comprehensive Overview of Business Strategies',
    topic: 'Business',
    youtube: null,
  },
];

/** Gradient pairs cycled across the cards so the grid stays visually varied. */
const PALETTE = [
  ['#4AA8B8', '#1C2B3A'],
  ['#5CC8D4', '#1C2B3A'],
  ['#6FD2DC', '#2F4A63'],
  ['#5CC8D4', '#243B51'],
  ['#4AA8B8', '#3A5A75'],
  ['#6FD2DC', '#1C2B3A'],
];

/** Accepts a full YouTube URL in any common shape, or a bare video id. */
export function youtubeId(input: string): string | null {
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;

  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|live\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? match[1] : null;
}

function VideoCard({
  video,
  palette,
}: {
  video: (typeof VIDEOS)[number];
  palette: string[];
}) {
  const [playing, setPlaying] = useState(false);
  const id = video.youtube ? youtubeId(video.youtube) : null;

  return (
    <article className="reveal card overflow-hidden">
      <div className="relative aspect-video w-full bg-brand-dark">
        {playing ? (
          /* youtube-nocookie + the iframe only mounted on click: nothing is requested
             from YouTube, and no cookie is set, until the viewer asks to watch. */
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : id ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group block h-full w-full text-left"
            aria-label={`Play video: ${video.title}`}
          >
            <GradientPlaceholder from={palette[0]} to={palette[1]} className="h-full w-full">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-lift transition-transform duration-300 group-hover:scale-110">
                  <Play size={24} className="ml-0.5 fill-brand-dark" aria-hidden="true" />
                </span>
              </span>
              <span className="absolute left-4 top-4 inline-flex items-center rounded-md bg-brand-dark/60 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                {video.topic}
              </span>
            </GradientPlaceholder>
          </button>
        ) : (
          /* PLACEHOLDER: no YouTube link set yet. Add one to `youtube` above and this
             becomes a real, playable embed with no other change. */
          <GradientPlaceholder from={palette[0]} to={palette[1]} className="h-full w-full">
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/25 text-white/80 backdrop-blur-sm">
                <Play size={24} className="ml-0.5" aria-hidden="true" />
              </span>
            </span>
            <span className="absolute left-4 top-4 inline-flex items-center rounded-md bg-brand-dark/60 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              {video.topic}
            </span>
            <span className="absolute bottom-4 right-4 inline-flex items-center rounded-md bg-brand-dark/70 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
              Coming soon
            </span>
          </GradientPlaceholder>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-heading text-base font-bold leading-snug text-brand-dark">
          {video.title}
        </h3>
      </div>
    </article>
  );
}

export default function VideosSection() {
  return (
    <section id="videos" className="section-pad bg-brand-light">
      <div className="container-page">
        <SectionHeading
          eyebrow="Video Library"
          title="Learn From Our Sessions"
          subtitle="Recorded teaching from our programmes — a look at how we explain things before you enrol."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {VIDEOS.map((video, index) => (
            <VideoCard key={video.id} video={video} palette={PALETTE[index % PALETTE.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
