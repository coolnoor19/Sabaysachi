'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV, PROFILE } from '@/lib/data';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open ? 'bg-ink/85 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
          <a href="#top" data-cursor="link" className="flex items-center gap-2 font-display text-lg md:text-xl tracking-tight">
            <span className="w-2 h-2 rounded-full bg-lime pulse-dot" />
            <span className="italic">aarav</span><span className="font-bold">.</span>
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} data-cursor="link"
                  className="group flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/85 hover:text-lime transition-colors">
                  <span className="text-lime/70 group-hover:text-lime">{l.num} /</span>
                  <span className="link-fx">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-5">
            <a href={`mailto:${PROFILE.email}`} data-cursor="link" className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 hover:text-lime transition-colors link-fx">
              {PROFILE.email}
            </a>
            <a href="#contact" data-cursor="link"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] border border-lime text-lime px-4 py-2 rounded-full hover:bg-lime hover:text-ink transition-colors">
              Contact <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
            </a>
          </div>

          <button
            type="button" aria-label="Toggle menu" onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white active:scale-95 transition"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="w-4 h-4" /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-4 h-4" /></motion.span>}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
