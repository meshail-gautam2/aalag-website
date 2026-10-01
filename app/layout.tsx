import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

import ChatWidget from '@/components/ChatWidget';
import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RevealOnScroll from '@/components/RevealOnScroll';
import { SITE } from '@/lib/site';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} (AALAG) — Online Training & EdTech Platform`,
    template: `%s — ${SITE.name}`,
  },
  description:
    'Practical, career-focused online training in HR, data, analytics and digital skills — for students, working professionals, job seekers and career aspirants.',
  keywords: [
    'online training',
    'upskilling',
    'HR generalist course',
    'Power BI training',
    'Advanced Excel course',
    'MS Office training',
    'AALAG',
    'All About Learn And Grow',
  ],
  openGraph: {
    title: `${SITE.name} (AALAG) — ${SITE.tagline}`,
    description:
      'Practical, career-focused online training in HR, data, analytics and digital skills.',
    siteName: SITE.name,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#1C2B3A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-brand-dark focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <RevealOnScroll />
        <Cursor />
      </body>
    </html>
  );
}
