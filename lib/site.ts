/**
 * Single source of truth for site-wide constants.
 * Content and contact details come from the client's "AALAG — Content for website" brief.
 */

export const SITE = {
  name: 'All About Learn And Grow',
  shortName: 'AALAG',
  motto: 'Unlearn · Learn · Implement',
  tagline: 'Empowering Skills • Enabling Growth',
  descriptor: 'Online Training & EdTech Platform',
  promise: 'Learn with purpose. Apply with confidence. Grow with AALAG.',
  /** WhatsApp is the primary contact channel. */
  whatsapp: 'https://wa.me/message/CM72C2XOLT7KA1',
  email: 'learningarena27@gmail.com',
  phone: '+91 7303109123',
  /** Digits only, for tel: and wa.me links. */
  phoneDigits: '917303109123',
  location: 'Online — learn from anywhere',
  socials: {
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Contact Us', href: '/#contact' },
] as const;
