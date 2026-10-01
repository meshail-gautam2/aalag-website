/**
 * Served from a sub-path (e.g. GitHub Pages at username.github.io/repo-name)?
 * Set NEXT_PUBLIC_BASE_PATH="/repo-name" at build time. Left unset it resolves to ''
 * and the site serves from the domain root, which is what Netlify, Cloudflare Pages,
 * Vercel and a custom domain all want.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the whole site can be dropped on any static host.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
