import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-brand-mesh relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <div aria-hidden="true" className="bg-grid-faint absolute inset-0 opacity-60" />

      <div className="container-page relative py-20 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
          <Compass size={26} aria-hidden="true" />
        </span>

        <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-white/65">
          The page you are looking for has moved or never existed. Our courses are all still here.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#courses" className="btn-primary">
            Browse Courses
          </Link>
          <Link href="/#home" className="btn-outline">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
