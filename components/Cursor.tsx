'use client';

import { useEffect, useRef } from 'react';

/** Elements that make the ring expand. */
const HOT = 'a, button, input, textarea, select, summary, [role="button"], [data-hot]';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Two-part pointer: a small dot that tracks closely and a ring that trails behind it,
 * expanding over anything interactive.
 *
 * Only runs for fine pointers (mouse/trackpad) — touch devices and reduced-motion users
 * keep their native cursor untouched. The system cursor stays visible either way; this
 * sits on top of it rather than replacing it.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const ptr = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { dx: ptr.x, dy: ptr.y, rx: ptr.x, ry: ptr.y };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      ptr.x = event.clientX;
      ptr.y = event.clientY;
      // Revealed on first movement so it never flashes in the corner on load.
      document.body.classList.add('cursor-on');
    };

    const onOver = (event: PointerEvent) => {
      if ((event.target as Element)?.closest?.(HOT)) document.body.classList.add('cur-hot');
    };

    const onOut = (event: PointerEvent) => {
      const target = event.target as Element;
      const next = event.relatedTarget as Element | null;
      if (target?.closest?.(HOT) && !next?.closest?.(HOT)) {
        document.body.classList.remove('cur-hot');
      }
    };

    // Hide while the pointer is outside the window.
    const onLeave = () => document.body.classList.remove('cursor-on');
    const onEnter = () => document.body.classList.add('cursor-on');

    const tick = () => {
      cur.dx = lerp(cur.dx, ptr.x, 0.55);
      cur.dy = lerp(cur.dy, ptr.y, 0.55);
      cur.rx = lerp(cur.rx, ptr.x, 0.16);
      cur.ry = lerp(cur.ry, ptr.y, 0.16);
      dot.style.transform = `translate3d(${cur.dx.toFixed(1)}px, ${cur.dy.toFixed(1)}px, 0)`;
      ring.style.transform = `translate3d(${cur.rx.toFixed(1)}px, ${cur.ry.toFixed(1)}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    document.documentElement.addEventListener('pointerleave', onLeave);
    document.documentElement.addEventListener('pointerenter', onEnter);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      document.documentElement.removeEventListener('pointerenter', onEnter);
      document.body.classList.remove('cursor-on', 'cur-hot');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cur-ring" aria-hidden="true" />
      <div ref={dotRef} className="cur-dot" aria-hidden="true" />
    </>
  );
}
