# All About Learn And Grow — EdTech Website

Marketing / showcase site for the **All About Learn And Grow** online training platform.
Single-page layout with smooth-scroll sections, plus a static detail page per course.

Built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Lucide** icons, exported as a
fully static site for **Netlify**. No database, no auth, no payments.

---

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export → ./out
```

> **Stop the dev server before running `npm run build`.** Both write to `.next`, so building
> while `next dev` is live pulls the running server's chunks out from under it and it starts
> serving 404s until restarted.

`npm run build` writes a plain static site to `out/`. Nothing server-side is required.

### Deploying to Netlify

`netlify.toml` is already configured:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `out` |
| Node version | 20 |

Connect the repo in Netlify and it will pick these up automatically; no manual settings needed.

---

## Project structure

```
app/
  layout.tsx              root layout — fonts, navbar, footer, chat widget
  page.tsx                home page — every section in order
  courses/[slug]/page.tsx course detail page (statically generated per course)
  not-found.tsx           404
  globals.css             Tailwind layers + carousel/marquee/reveal CSS
  icon.svg                favicon
components/               one file per section, all documented
data/courses.json         ← all course content lives here
lib/
  courses.ts              typed access to courses.json
  site.ts                 contact details, WhatsApp link, nav links
public/
  courses/ instructors/ videos/   drop client media here
```

---

## Updating content

### Adding or editing a course

Everything comes from **`data/courses.json`** — no component needs touching. Copy an existing
entry and edit it; the carousel, the footer list, the related-courses strip and a new
`/courses/<slug>/` page are all generated from it on the next build.

| Field | Notes |
| --- | --- |
| `slug` | URL segment — lowercase, hyphenated, must be unique |
| `title`, `shortDescription` | Shown on the card and the detail hero |
| `description` | Long copy on the Overview tab |
| `duration`, `level`, `category` | Shown as tags and in the detail page facts row |
| `accent`, `accentTo` | Gradient colours for the placeholder thumbnail |
| `outcomes[]` | "What you will learn" bullets |
| `audience[]` | "Who it is for" bullets |
| `modules[]` | Curriculum accordion — `title`, `lessons`, `summary` |
| `instructor` | `name`, `title`, `bio`, `image` |
| `brochureUrl` | `null` shows a disabled "Brochure coming soon" button. Put a PDF in `public/` and set this to e.g. `/brochures/marketing.pdf` to turn it into a live download. |

### Contact details, WhatsApp and social links

All in **`lib/site.ts`**:

- Phone / WhatsApp: **+91 7303109123**
- Email: **learningarena27@gmail.com**
- WhatsApp link: `https://wa.me/message/CM72C2XOLT7KA1` — used by every CTA on the site

### The course catalogue

`CATALOGUE` in **`lib/courses.ts`** holds the full list of training areas (33 topics across
five groups) shown under the carousel. The four entries in `data/courses.json` are the
programmes that have a published brochure and a detail page of their own; add a fifth by
copying an existing entry.

---

## Placeholders to replace

Each item below is marked with a comment in the code.

| What | Where | How |
| --- | --- | --- |
| **Logo** | `public/logo.png` | Supplied and in use. Its corners were masked to transparent so the circular mark sits cleanly on both the white navbar and the dark footer. To replace it, overwrite that file (ideally 400x400 or larger, transparent corners). The wordmark beside it is set in type because the lettering inside the mark is unreadable below ~80px. |
| **Course thumbnails** | `components/CourseCard.tsx` | Gradient panels today. Add images to `public/courses/`, set `thumbnail` in the JSON, and swap `<GradientPlaceholder>` for `<Image>`. |
| **Video library** | `app/page.tsx` | The section is parked, not deleted. `components/VideosSection.tsx` is intact and YouTube-ready: paste a link into each entry's `youtube` field, then restore the import and `<VideosSection />` in `app/page.tsx`. |
| **Social links** | `lib/site.ts` | Instagram / YouTube / LinkedIn point at the bare domains until the real profile URLs are supplied. |
| **Instructor photos** | `components/CourseDetailTabs.tsx` | Trainers are credited as the "AALAG Training Team". Add named trainers and photos to `public/instructors/` when supplied. |
| **Learner avatars** | `components/Testimonials.tsx` | Reviews are real; the avatars are initials circles because no learner photos were supplied. |
| **FAQ answers** | `components/FAQ.tsx` | Written from the brief. Confirm fee and instalment wording before launch. |
| **AI chat agent** | `components/ChatWidget.tsx` | The panel body is marked `PLACEHOLDER: Replace with client's AI agent embed script`. Paste the client's embed between the `==== PLACEHOLDER ====` markers and delete the sample transcript and input. |
| **Contact form** | `components/ContactSection.tsx` | Intentionally not wired up. Point the `<form action>` at Netlify Forms or Formspree, drop `disabled` from the button, and remove the notice line. |

---

## Notes on the implementation

- **Course carousel** (`components/CourseCarousel.tsx`) is the centrepiece. Geometry is pure
  CSS (`.carousel` rules in `globals.css`) so the first paint is correct at every breakpoint —
  3 cards on desktop, 2 on tablet, 1 on mobile, each with a sliver of the next card visible.
  JavaScript only tracks the index. Auto-advances every 4.8s, pauses on hover, focus and when
  the tab is hidden, and supports arrows, dots, swipe and left/right keys.
- **Testimonials** use a CSS-only marquee with a duplicated card set; it pauses on hover.
- **Scroll reveals** are one global `IntersectionObserver` (`components/RevealOnScroll.tsx`).
  Any element can opt in with `className="reveal"` — no per-section client components. Because
  the class is applied imperatively to nodes React owns, a MutationObserver re-scans for
  unrevealed elements; without it a remount drops the class while the observer goes on watching
  detached nodes, leaving whole sections invisible.
- **Reduced motion** is respected throughout: the carousel, marquee, reveals and counters all
  fall back to a static state under `prefers-reduced-motion`.
- **Custom pointer** (`components/Cursor.tsx`) is a dot that tracks the mouse closely plus
  a ring that trails behind it and expands over links, buttons and inputs. It only runs for
  fine pointers, is disabled under `prefers-reduced-motion`, and sits *on top of* the native
  cursor rather than replacing it — so nothing is lost if the script fails. Add `data-hot`
  to any element to make the ring react to it.
- **Course gradients** (`accent` / `accentTo` in `data/courses.json`) lean toward each
  subject's own colour — teal for HR, amber for Power BI, green for Excel, blue for MS
  Office — all anchored on the brand navy so the set still reads as one family.
- No animation library is used — the only runtime dependencies are `next`, `react` and
  `lucide-react`.
