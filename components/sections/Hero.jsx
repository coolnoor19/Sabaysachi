'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { PROFILE } from '@/lib/data';

const BEATS = ['Investigative', 'Politics', 'Sports', 'Culture & Arts'];

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [b, setB] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setB((i) => (i + 1) % BEATS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white/55 border-y border-white/10 py-3 mb-12 md:mb-20"
        >
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 bg-lime rounded-full pulse-dot" />
            <span className="hidden sm:inline">Vol. XI / Edition 2025</span>
            <span className="sm:hidden">Vol. XI</span>
          </span>
          <span className="hidden md:inline">Independent Journalism</span>
          <span className="flex items-center gap-1.5 shrink-0">
            <MapPin className="w-3 h-3" />
            <span>{PROFILE.city}</span>
          </span>
        </motion.div>

        {/* Page title (centered, Davies-style) */}
        <motion.div style={{ y: yText, opacity }} className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-lime mb-6 inline-flex items-center gap-3"
          >
            <span className="w-8 h-px bg-lime" />
            The Portfolio
            <span className="w-8 h-px bg-lime" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display font-medium leading-[0.92] tracking-[-0.03em] text-[clamp(3.5rem,14vw,14rem)]"
          >
            {PROFILE.name.split(' ')[0]}
            <span className="text-lime italic font-light">.</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="font-display italic font-light leading-[0.92] tracking-[-0.03em] text-[clamp(3.5rem,14vw,14rem)] text-white/85"
          >
            {PROFILE.name.split(' ')[1]}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-sm uppercase tracking-[0.2em] text-white/60"
          >
            <a href="#top" className="link-fx hover:text-white">Home</a>
            <span className="text-lime">/</span>
            <span className="text-white">Journalist</span>
            <span className="text-lime">/</span>
            <span className="relative inline-block min-w-[8rem] text-left sm:text-center">
              <motion.span key={b} initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="inline-block text-lime">
                {BEATS[b]}
              </motion.span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.9 }}
            style={{ opacity }}
            className="mt-14 md:mt-20 flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50"
          >
            Scroll to explore
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
