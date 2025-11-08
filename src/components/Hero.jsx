import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8uZpWBkJZlN7q8vt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for select projects
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Crafting thoughtful digital experiences
          </h1>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            I design and build tasteful websites and products for startups and creative teams. Clean aesthetics, strong systems, measured impact.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-semibold hover:bg-neutral-800 active:bg-neutral-900 transition">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              View work
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-950/60" />
    </section>
  );
}
