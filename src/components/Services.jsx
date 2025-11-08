import { Brush, Code2, LayoutDashboard, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Brush,
    title: 'Brand & Art Direction',
    desc: 'Identity systems, tone, and visual worlds that scale across touchpoints.'
  },
  {
    icon: LayoutDashboard,
    title: 'Product & Web Design',
    desc: 'Design systems, UX flows, and component libraries built for clarity.'
  },
  {
    icon: Code2,
    title: 'Frontend Engineering',
    desc: 'Quality implementations with accessible, performant interfaces.'
  },
  {
    icon: Smartphone,
    title: 'Interactive & Motion',
    desc: 'Microinteractions and spatial UI that feel alive and purposeful.'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-925">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-wider text-neutral-500">Capabilities</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">What I do</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <s.icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
