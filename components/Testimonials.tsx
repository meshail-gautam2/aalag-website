import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';

/**
 * Real learner reviews, supplied by the client as rendered image cards.
 * The text is rebuilt as live markup so it stays readable at every screen size, works with
 * screen readers and matches the site's typography; each learner's photo is cropped from
 * their original review card and masked to a circle (see /public/reviews/).
 */
const TESTIMONIALS = [
  {
    name: 'Hema Singh',
    photo: '/reviews/hema-singh.png',
    role: 'HR Professional',
    course: 'Human Resources Online Course',
    rating: 5,
    quote:
      'I had a great learning experience with AALAG’s Human Resources Online Course. The sessions were informative, practical, and easy to understand. The trainers were supportive and explained HR concepts clearly with real-world examples. Highly recommended for anyone looking to build a career in HR!',
  },
  {
    name: 'Prasenjit Ghosh',
    photo: '/reviews/prasenjit-ghosh.png',
    role: 'HR Professional',
    course: 'Core HR Generalist',
    rating: 5,
    quote:
      'This training has been another valuable step in my ongoing journey to expand my expertise beyond Talent Acquisition. The learning experience has helped me develop a more holistic perspective across Talent Acquisition, HR Operations, and HRBP/HR Generalist functions. The practical approach and structured learning have added valuable depth to my HR knowledge.',
  },
  {
    name: 'Swati Raghav',
    photo: '/reviews/swati-raghav.png',
    role: 'MIS Executive',
    course: 'MS Office & Basic Computer Training',
    rating: 5,
    quote:
      'The training was very practical and helped me improve my everyday and office work, especially with VLOOKUP, Excel dashboards, creative PowerPoint presentations, and resume writing. The supportive trainer made the learning experience comfortable and engaging. It helped me build confidence and level up my digital and workplace skills!',
  },
  {
    name: 'Mahesh Sharma',
    photo: '/reviews/mahesh-sharma.png',
    role: 'HR Director',
    course: 'Power BI',
    rating: 4,
    quote:
      'My learning journey with AALAG has been amazing! The Power BI training helped me understand dashboarding in a simple and practical way. The sessions were interactive, and the guidance from the trainers was really helpful. A great platform to learn and become confident in dashboarding. Highly recommended!',
  },
  {
    name: 'Lucky Sinha',
    photo: '/reviews/lucky-sinha.png',
    role: 'Reporting Analyst',
    course: 'Power BI',
    rating: 4,
    quote:
      'I had a great learning experience with AALAG’s Power BI course. The sessions were practical, interactive, and easy to understand. The trainer explained concepts clearly and focused on real-world applications. A great platform for anyone looking to improve their data analysis and Power BI skills. Highly recommended.',
  },
  {
    name: 'Vaibhav Singh',
    photo: '/reviews/vaibhav-singh.png',
    role: 'Data Analyst',
    course: 'Data Analyst Online Course',
    rating: 4,
    quote:
      'A great learning experience with AALAG’s Data Analyst Online Course. The sessions were practical, easy to follow, and focused on real-world applications. I especially enjoyed learning data analysis, SQL, Excel, Power BI, and dashboards. The trainer was supportive and always ready to help!',
  },
];

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="card flex w-[300px] shrink-0 flex-col p-6 sm:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, star) => (
            <Star
              key={star}
              size={15}
              aria-hidden="true"
              className={
                star < item.rating
                  ? 'fill-brand-accent text-brand-accent'
                  : 'fill-brand-dark/10 text-brand-dark/10'
              }
            />
          ))}
        </div>
        <Quote size={22} className="text-brand-accent/35" aria-hidden="true" />
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-dark/80">
        {item.quote}
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-dark/5 pt-4">
        <Image
          src={item.photo}
          alt=""
          width={80}
          height={80}
          className="h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <span className="min-w-0">
          <span className="block truncate font-heading text-sm font-bold text-brand-dark">
            {item.name}
          </span>
          <span className="block truncate text-xs text-brand-muted">
            {item.role} · {item.course}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Student Reviews"
          title="What Our Learners Say"
          subtitle="Reviews from learners across our HR, Power BI, Data and MS Office programmes. Hover to pause and read at your own pace."
        />
      </div>

      <div className="marquee mt-12">
        {/* No padding on the track: translateX(-50%) is measured against its own width, so
            any extra padding would break the seamless loop. */}
        <div className="marquee-track">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
          {/* Duplicate set makes the loop seamless; hidden from assistive tech. */}
          <div className="flex gap-6" aria-hidden="true">
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={`${item.name}-duplicate`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
