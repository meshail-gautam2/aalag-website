import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CourseCarousel from '@/components/CourseCarousel';
import CourseCatalogue from '@/components/CourseCatalogue';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import LearningApproach from '@/components/LearningApproach';
import SectionHeading from '@/components/SectionHeading';
import ServicesSection from '@/components/ServicesSection';
import Testimonials from '@/components/Testimonials';
import WhyAalag from '@/components/WhyAalag';
import { courses } from '@/lib/courses';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />

      <section id="courses" className="section-pad bg-brand-light">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Courses"
            title="Programmes built for working people"
            subtitle="Structured, instructor-led training across HR, data, analytics and digital skills. Each programme runs to 20 sessions with a brochure you can download."
          />

          <div className="mt-12">
            <CourseCarousel courses={courses} />
          </div>
        </div>
      </section>

      <Testimonials />
      <CourseCatalogue />

      <ServicesSection />
      <HowItWorks />
      <LearningApproach />
      <WhyAalag />
      {/* Video library is parked until the client supplies YouTube links.
          To bring it back: restore the import and render <VideosSection /> here —
          components/VideosSection.tsx is unchanged and ready. */}
      <FAQ />
      <ContactSection />
    </>
  );
}
