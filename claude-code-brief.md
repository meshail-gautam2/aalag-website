# All About Learn And Grow — EdTech Website

## Project Overview
Build a professional, modern website for **"All About Learn And Grow"** — an online training & EdTech platform offering courses. The site is a marketing/showcase site (not a full LMS with auth). Think Kajabi-level polish but simpler in scope.

## Tech Stack
- **Next.js 14** (App Router, static site generation)
- **Tailwind CSS** for styling
- **Deploy target:** Netlify
- Course data stored in a local JSON file (`/data/courses.json`) so new courses can be added without touching components

## Brand Identity
- **Name:** All About Learn And Grow
- **Logo:** Circular dark logo with a brain icon — place the uploaded logo file at `/public/logo.png`
- **Primary dark:** `#1C2B3A` (dark navy/charcoal — from logo background)
- **Accent:** `#5CC8D4` (cyan/teal — from brain icon in logo)
- **Secondary accent:** `#4AA8B8` (darker teal for hover states)
- **Light background:** `#F7F9FB` (cool off-white for alternating sections)
- **Text on dark:** `#FFFFFF`
- **Text on light:** `#1C2B3A`
- **Body text muted:** `#64748B`
- **Typography:** Use `Inter` for body, `Plus Jakarta Sans` for headings (both from Google Fonts). Clean, modern, professional.
- **Overall feel:** Professional, trustworthy, educational. Not playful — this is serious online training. Clean whitespace, sharp hierarchy.

## Site Structure & Sections (single-page with smooth scroll + separate course detail pages)

### 1. Navbar (sticky)
- Logo on left
- Nav links: Home, Courses, About, Videos, FAQ, Contact
- CTA button: "Get Started" → scrolls to courses section
- Mobile: hamburger menu
- Slight backdrop blur on scroll

### 2. Hero Section
- Bold headline: e.g. "Transform Your Career with Expert-Led Training"
- Subtext: brief value proposition (1–2 lines about online training & upskilling)
- Primary CTA button: "Explore Courses"
- Secondary CTA: "Contact Us on WhatsApp" → links to `https://wa.me/message/CM72C2XOLT7KA1`
- Background: gradient using brand dark + subtle geometric/abstract pattern or mesh gradient. No stock photos.
- Social proof stat counters (placeholder numbers): "500+ Students", "20+ Courses", "4.8 Rating"

### 3. Courses Section — SLIDING CAROUSEL
**This is the hero feature of the site.**
- Section heading: "Our Courses" with a short subtitle
- Horizontal sliding carousel showcasing course cards
- Each course card shows:
  - Course thumbnail/image (placeholder for now — use gradient cards with course name)
  - Course title
  - Short 1-line description
  - Duration / level tag (e.g. "8 Weeks · Beginner")
  - "View Details" button
- Carousel behavior:
  - Auto-scroll with pause on hover
  - Left/right navigation arrows
  - Dot indicators
  - Smooth sliding animation (CSS transitions, no heavy libraries)
  - Shows 3 cards on desktop, 2 on tablet, 1 on mobile
  - Cards should have a subtle hover lift effect (translateY + shadow)
- **Clicking a course card → navigates to `/courses/[slug]`** (dynamic route)

### 4. Course Detail Page (`/courses/[slug]`)
- **Course overview/brochure page** — this is what opens when you click a course name
- Hero banner with course title, category, duration, level
- Sections on the detail page:
  - **Overview tab:** Course description, what you'll learn (bullet points), who it's for
  - **Curriculum tab:** Module/chapter breakdown (accordion style) — placeholder content
  - **Instructor tab:** Instructor name, bio, photo — placeholder
- Sidebar or bottom CTA: "Enroll Now — Contact on WhatsApp" → WhatsApp link
- "Download Brochure" button (placeholder — will link to PDF later when client sends it)
- Back button to return to main page courses section

### 5. About Section
- Brief about the platform/founder
- Mission/vision in 2–3 short lines
- A few key differentiators in a clean grid (e.g. "Expert Instructors", "Practical Learning", "Industry-Ready Skills", "Lifetime Access")
- Placeholder text — client will fill in later

### 6. Videos Section
- Section heading: "Learn From Our Sessions"
- Grid of video cards (2 columns desktop, 1 mobile)
- Each card: video thumbnail (placeholder image), title, short description
- Clicking opens the video — for now use HTML5 `<video>` element with a placeholder/sample video
- Videos will be self-hosted (client uploads MP4s to `/public/videos/` later)
- Keep it simple — no complex video player, just clean native player with poster image

### 7. Posts/Gallery Section
- Section heading: "Latest Updates" or "From Our Community"
- Masonry or clean grid of image cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card: image + optional short caption below
- Placeholder images for now (use gradient placeholder cards)
- Client will replace with actual student photos, event photos, announcements

### 8. Student Reviews/Testimonials
- Section heading: "What Our Students Say"
- Carousel or horizontal scroll of testimonial cards
- Each card: student photo (placeholder avatar), name, course taken, quote
- Star rating display (5 stars)
- 4–6 placeholder testimonials
- Auto-scroll, subtle and smooth

### 9. FAQ Section
- Section heading: "Frequently Asked Questions"
- Accordion style — click to expand/collapse
- 6–8 placeholder FAQs about enrollment, courses, pricing, certificates, etc.
- Smooth open/close animation
- Example FAQs:
  - "How do I enroll in a course?"
  - "Are the courses self-paced or live?"
  - "Do I get a certificate after completion?"
  - "What payment methods are accepted?"
  - "Can I access course materials after completion?"
  - "How do I contact support?"

### 10. Contact Section
- Section heading: "Get In Touch"
- WhatsApp as the primary contact method
- Large WhatsApp CTA button: "Message Us on WhatsApp" → `https://wa.me/message/CM72C2XOLT7KA1`
- Optional: simple contact form (name, email, message) — can be a placeholder form that doesn't submit anywhere yet, or skip entirely and just do WhatsApp
- Display contact info: email (placeholder), phone (placeholder), location (placeholder)
- Social media links (placeholder icons for Instagram, YouTube, LinkedIn)

### 11. AI Agent Chat Widget
- Floating chat button (bottom-right corner)
- On click: opens a placeholder chat modal/drawer
- Inside the modal: heading "Chat with our AI Assistant", a placeholder message "Hi! How can I help you today?", and a text input
- This is a **placeholder** — the client will provide their own AI agent embed code later
- Make the component modular so the embed code can be swapped in easily
- Comment in the code: `{/* PLACEHOLDER: Replace with client's AI agent embed script */}`

### 12. Footer
- Logo + tagline
- Quick links: Home, Courses, About, Contact, FAQ
- WhatsApp link
- Social media icon links (placeholder)
- Copyright: "© 2024 All About Learn And Grow. All rights reserved."
- Simple, dark background matching brand

## Course Data Structure (`/data/courses.json`)
```json
[
  {
    "slug": "digital-marketing-mastery",
    "title": "Digital Marketing Mastery",
    "shortDescription": "Master the fundamentals of digital marketing",
    "description": "Comprehensive course covering SEO, social media marketing, content strategy, and paid advertising...",
    "duration": "8 Weeks",
    "level": "Beginner",
    "category": "Marketing",
    "modules": [
      { "title": "Introduction to Digital Marketing", "lessons": 5 },
      { "title": "SEO Fundamentals", "lessons": 8 },
      { "title": "Social Media Strategy", "lessons": 6 }
    ],
    "instructor": {
      "name": "Instructor Name",
      "bio": "Placeholder bio",
      "image": "/instructors/placeholder.jpg"
    },
    "thumbnail": "/courses/placeholder.jpg",
    "brochureUrl": null
  }
]
```
Add 5–6 placeholder courses with varied categories (Marketing, Technology, Business, Design, Communication, Finance).

## Design Notes
- **Kajabi-inspired:** Clean section transitions, generous whitespace, professional typography hierarchy, trust-building layout
- **Course carousel is the centerpiece** — it should feel smooth and polished, inspired by the sliding card showcase pattern (cards sliding horizontally with peek of next/previous cards visible)
- All sections should have consistent vertical padding (80px desktop, 48px mobile)
- Subtle section dividers — no hard lines, use background color alternation (white ↔ light gray)
- Buttons: rounded-lg (not full pill), with the teal accent color, white text, hover darkens slightly
- Cards: white background, subtle shadow, rounded-xl corners, hover lift
- Icons: use Lucide React icons throughout
- All images are placeholders — use colored gradient backgrounds with text overlays as placeholder thumbnails
- **Mobile-first responsive** — must look great on phone
- Smooth scroll behavior for anchor links
- Intersection Observer for subtle fade-in animations on scroll (one animation style, not per-section — keep it minimal)

## Placeholder Content Guidelines
Wherever real content is missing, use realistic-sounding placeholder content (not Lorem Ipsum). Make it sound like an actual EdTech platform. The client will replace text and images later.

## File Structure
```
/app
  /page.tsx                  (home — all sections)
  /courses/[slug]/page.tsx   (course detail page)
  /layout.tsx                (root layout with navbar + footer)
/components
  /Navbar.tsx
  /Hero.tsx
  /CourseCarousel.tsx
  /CourseCard.tsx
  /AboutSection.tsx
  /VideosSection.tsx
  /PostsGallery.tsx
  /Testimonials.tsx
  /FAQ.tsx
  /ContactSection.tsx
  /ChatWidget.tsx
  /Footer.tsx
/data
  /courses.json
/public
  /logo.png
```

## What NOT to do
- No authentication/login system
- No payment integration
- No database — all data is static JSON
- No heavy animation libraries (Framer Motion is fine if needed for carousel, but prefer CSS)
- No cookie banners or analytics
- Don't overcomplicate — this is a showcase site, keep it lean
