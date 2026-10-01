/**
 * Prefix for files served straight from /public (brochures, downloads).
 *
 * Hosts that serve the site from a sub-path — GitHub Pages at
 * `username.github.io/repo-name`, for example — need every absolute path to carry that
 * prefix. `next/link` and `next/image` apply `basePath` themselves, but a plain
 * `<a href="/brochures/x.pdf">` does not, so those go through `asset()`.
 *
 * Set NEXT_PUBLIC_BASE_PATH at build time (the Pages workflow does this automatically).
 * Left unset — Netlify, Cloudflare Pages, Vercel, a custom domain — it resolves to ''
 * and paths are unchanged.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}
