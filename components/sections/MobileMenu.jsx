'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NAV, SOCIALS, PROFILE } from '@/lib/data';

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="drawer"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed inset-0 z-40 bg-ink pt-20 overflow-y-auto"
        >
          {/* Infinite slide text strip */}
          <div className="overflow-hidden border-y border-white/10 py-3 mb-6">
            <div className="flex whitespace-nowrap infinite-slide">
              {[...Array(2)].map((_, k) => (
                <div key={k} className="flex items-center gap-8 px-4 font-display italic text-3xl text-white/40">
                  {['Journalist', 'Storyteller', 'Reporter', 'Editor', 'Long-form'].map((w, i) => (
                    <span key={i}>{w}<span className="text-lime mx-4">•</span></span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <motion.ul
            initial="h" animate="s"
            variants={{ h: {}, s: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            className="px-5 flex flex-col"
          >
            {NAV.map((l) => (
              <motion.li
                key={l.href}
                variants={{ h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0 } }}
                className="border-b border-white/10"
              >
                <a href={l.href} onClick={onClose}
                  className="group flex items-baseline gap-3 py-5 font-display text-4xl active:text-lime">
                  <span className="font-mono text-xs text-lime/80">{l.num}</span>
                  <span>{l.label}</span>
                  <ArrowUpRight className="ml-auto w-5 h-5 text-white/40" />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="px-5 pt-8 pb-10 space-y-3 font-mono text-xs uppercase tracking-[0.15em] text-white/55">
            <p>{PROFILE.city}</p>
            <a href={`mailto:${PROFILE.email}`} className="text-white hover:text-lime block">{PROFILE.email}</a>
            <div className="flex flex-wrap gap-4 pt-3">
              {SOCIALS.slice(0, 3).map((s) => (
                <a key={s.label} href={s.href} className="hover:text-lime">{s.label}</a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
