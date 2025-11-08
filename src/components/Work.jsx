import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Brand Portfolio',
    desc: 'Elegant microsite with rich motion and editorial typography.',
    img: 'https://images.unsplash.com/photo-1529336953121-c9e3f5a0bfa3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Ecommerce Lookbook',
    desc: 'Fashion-forward product storytelling built for conversions.',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Data-rich UI with accessible components and clean visuals.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wider text-neutral-500">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Recent projects</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition">Work with me</a>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
