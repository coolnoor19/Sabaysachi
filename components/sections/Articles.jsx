'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
import { ARTICLES, CATEGORIES, TAGS } from '@/lib/data';
import FadeUp from '@/components/ui/FadeUp';

function Card({ a, i }) {
  return (
    <FadeUp delay={i * 0.05}>
      <a href="#" data-cursor="image" data-cursor-label="Read" className="hover-img group grid grid-cols-12 gap-5 md:gap-7 items-start py-7 md:py-9 border-b border-white/10">
        <div className="col-span-12 sm:col-span-5 lg:col-span-5 aspect-[4/3] overflow-hidden rounded-md bg-white/5">
          <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-12 sm:col-span-7 lg:col-span-7 flex flex-col">
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/55">
            <span className="text-lime">{a.category}</span>
            <span>·</span><span>{a.publication}</span>
            <span>·</span><span>{a.date}</span>
            <span>·</span><span>{a.readTime}</span>
          </div>
          <h3 className="mt-3 md:mt-4 font-display font-medium text-2xl sm:text-3xl md:text-4xl leading-[1.1] tracking-[-0.015em] text-balance">
            <span className="link-fx group-hover:text-lime transition-colors">{a.title}</span>
          </h3>
          <span className="mt-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/65 group-hover:text-lime transition-colors">
            <span className="w-10 h-10 grid place-items-center rounded-full border border-white/20 group-hover:border-lime group-hover:bg-lime group-hover:text-ink transition-all">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </span>
            Read article
          </span>
        </div>
      </a>
    </FadeUp>
  );
}

function Sidebar() {
  return (
    <aside className="space-y-10 lg:sticky lg:top-28">
      {/* Search */}
      <FadeUp>
        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3">Search</h4>
        <form className="flex items-center gap-2 border-b border-white/15 focus-within:border-lime transition-colors py-2">
          <Search className="w-4 h-4 text-white/50" />
          <input type="text" placeholder="Search articles…"
            className="flex-1 bg-transparent outline-none placeholder-white/30 text-sm py-1" />
        </form>
      </FadeUp>

      {/* Categories */}
      <FadeUp delay={0.1}>
        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3">Categories</h4>
        <ul className="divide-y divide-white/10">
          {CATEGORIES.map((c) => (
            <li key={c.name}>
              <a href="#" data-cursor="link" className="group flex items-center justify-between py-3 text-sm hover:text-lime transition-colors">
                <span className="link-fx">{c.name}</span>
                <span className="font-mono text-[11px] text-white/40 group-hover:text-lime">{String(c.count).padStart(2, '0')}</span>
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>

      {/* Tags */}
      <FadeUp delay={0.2}>
        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <a key={t} href="#" data-cursor="link"
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.1em] border border-white/15 rounded-full hover:border-lime hover:text-lime hover:bg-lime/5 transition-colors">
              {t}
            </a>
          ))}
        </div>
      </FadeUp>
    </aside>
  );
}

export default function Articles() {
  return (
    <section id="work" className="py-20 md:py-32 bg-white/[0.015]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <FadeUp>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3">03 / Selected Work</p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-[-0.025em]">
              Stories worth <span className="text-lime italic font-light">your time</span>.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="max-w-sm text-white/65 text-sm md:text-base">
            <p>A curated set of long-reads, investigations and features published across leading outlets between 2024 and 2025.</p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-8">
            {ARTICLES.map((a, i) => <Card key={a.id} a={a} i={i} />)}
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
