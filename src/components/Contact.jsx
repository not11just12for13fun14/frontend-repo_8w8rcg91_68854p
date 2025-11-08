import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — I will get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Let’s build something great</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Tell me a bit about your project and I’ll reach out.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="company" placeholder="Company or brand" className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" required rows="5" placeholder="Project goals, timeline, budget…" className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">2–3 week lead time. Limited availability.</p>
            <button type="submit" className="rounded-full bg-neutral-900 text-white px-6 py-2.5 text-sm font-semibold hover:bg-neutral-800 active:bg-neutral-900 transition">Send</button>
          </div>
          {status && <p className="text-sm text-emerald-600">{status}</p>}
        </form>

        <p className="mt-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Parasya Studio. All rights reserved.</p>
      </div>
    </section>
  );
}
