'use client';

import { useEffect } from 'react';

/**
 * One global scroll-reveal pass for the whole site.
 *
 * Any element (server or client component) opts in with className="reveal" — a single
 * IntersectionObserver adds .is-visible once, then stops watching it. Keeping it in one
 * place avoids turning every section into a client component.
 *
 * The .is-visible class is applied imperatively to nodes React owns, so a remount would
 * drop it while the observer went on watching detached nodes — leaving whole sections
 * invisible. A MutationObserver re-scans for any .reveal that is not yet revealed, which
 * makes the effect self-healing under Fast Refresh and any client-side re-render.
 * Re-observing an element already being watched is a no-op, so re-scanning is cheap.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => el.classList.add('is-visible'));
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealAll();
      // Still re-run on DOM changes so late-mounted content is not left hidden.
      const mo = new MutationObserver(revealAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    const scan = () =>
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => observer.observe(el));

    scan();

    // Coalesce bursts of mutations into one scan per frame.
    let queued = false;
    const mutationObserver = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
