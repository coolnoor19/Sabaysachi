'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Quote } from 'lucide-react';
import { MANIFESTO } from '@/lib/data';
import MagneticBtn from '@/components/ui/MagneticBtn';

function Highlight({ children, delay = 0 }) {
  return (
    <motion.span
      initial={{ backgroundSize: '0% 100%' }}
      animate={{ backgroundSize: '100% 100%' }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay }}
      className="relative inline italic text-ink px-1 mx-0.5"
      style={{
        backgroundImage: 'linear-gradient(120deg, #D8FF3D 0%, #C5E627 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
      }}
    >
      {children}
    </motion.span>
  );
}

function Line({ chunks, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  let h = 0;
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="font-display leading-[1.18] sm:leading-[1.1] tracking-[-0.02em] text-[clamp(1.6rem,5.5vw,5.5rem)] text-white/90 break-words"
    >
      <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-lime align-top mr-3 md:mr-6 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      {chunks.map((c, i) => c.type === 'hi'
        ? (inView ? <Highlight key={i} delay={0.3 + h++ * 0.12}>{c.t}</Highlight> : <span key={i} className="italic">{c.t}</span>)
        : <span key={i}>{c.t}</span>
      )}
    </motion.p>
  );
}

export default function Intro({ onEnter }) {
  const [time, setTime] = useState('');
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const fmt = () => setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }));
    fmt();
    const id = setInterval(fmt, 30000);
    return () => clearInterval(id);
  }, []);

  const onMove = (e) => {
    x.set((e.clientX - window.innerWidth / 2) * 0.01);
    y.set((e.clientY - window.innerHeight / 2) * 0.01);
  };

  return (
    <motion.div
      key="intro"
      onMouseMove={onMove}
      initial={{ opacity: 1 }}
      exit={{ clipPath: 'inset(50% 0% 50% 0%)', transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[120] bg-ink text-white overflow-hidden flex flex-col"
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
    >
      {/* Ambient marquees */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-0 right-0 flex whitespace-nowrap animate-marquee-slow opacity-[0.05]">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 font-display text-[10vw] leading-none italic">
              {['Newsroom', 'Long-form', 'Dispatch', 'Byline', 'Investigation'].map((w, i) => (
                <span key={i}>{w}<span className="text-lime mx-6">•</span></span>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute bottom-[15%] left-0 right-0 flex whitespace-nowrap animate-marquee opacity-[0.04]" style={{ animationDirection: 'reverse' }}>
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 font-display text-[8vw] leading-none">
              {['Politics', 'Sports', 'Culture', 'Investigative', 'Source'].map((w, i) => (
                <span key={i}>{w}<span className="text-lime mx-6">/</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Top bar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
        className="flex items-center justify-between gap-2 px-5 md:px-10 py-5 md:py-6 border-b border-white/15 font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/60"
      >
        <span className="flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot" />
          On the record
        </span>
        {/* <span className="hidden md:inline font-display italic text-base normal-case tracking-normal text-white/80">
          Sabaysachi Sharma &mdash; Journalist
        </span> */}
        <span className="tabular-nums shrink-0">{time || '--:--'} IST</span>
      </motion.div>

      <motion.button
        type="button" onClick={(e) => { e.stopPropagation(); onEnter(); }} data-cursor="link"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-[68px] sm:top-20 right-5 md:right-10 z-10 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/60 hover:text-lime transition-colors flex items-center gap-1.5"
      >
        {/* Skip intro <ArrowUpRight className="w-3 h-3" /> */}
      </motion.button>

      {/* Center stage */}
      <button
        type="button" onClick={onEnter} data-cursor="cta" data-cursor-label="Enter"
        className="flex-1 w-full text-left relative outline-none focus:outline-none cursor-pointer overflow-y-auto"
      >
        <motion.div style={{ x: sx, y: sy }} className="min-h-full w-full flex items-center justify-center px-5 sm:px-8 md:px-16 py-10 sm:py-16">
          <div className="max-w-6xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.35em] text-white/55 mb-8 md:mb-14 flex items-center gap-3 md:gap-4"
            >
              <span className="w-10 md:w-12 h-px bg-lime" />
              A manifesto on communication
              <span className="hidden sm:inline w-10 md:w-12 h-px bg-lime" />
            </motion.div>
            <div className="space-y-7 md:space-y-12">
              {MANIFESTO.map((chunks, i) => <Line key={i} chunks={chunks} index={i} />)}
            </div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1.6 }}
              className="mt-12 md:mt-20 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/55"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot" />
              Click anywhere to enter the portfolio
            </motion.div>
          </div>
        </motion.div>
        <Quote className="pointer-events-none fixed top-28 right-5 md:right-16 w-20 h-20 md:w-40 md:h-40 text-white/[0.05]" />
      </button>

      {/* Bottom CTA */}
      <motion.div
        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
        className="px-5 md:px-10 py-5 md:py-8 border-t border-white/15 flex items-center justify-center md:justify-between gap-4"
      >
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
          <span>Tap on Communication</span>
        </div>
        {/* <MagneticBtn
          onClick={onEnter} data-cursor="cta" data-cursor-label="Enter"
          className="group inline-flex items-center gap-3 bg-lime text-ink pl-5 md:pl-7 pr-1.5 py-1.5 rounded-full text-xs md:text-sm font-mono uppercase tracking-[0.2em] hover:bg-white transition-colors"
        >
          Enter portfolio
          <span className="w-10 h-10 md:w-12 md:h-12 grid place-items-center rounded-full bg-ink text-lime group-hover:rotate-45 transition-transform">
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </span>
        </MagneticBtn> */}
        <div className="hidden md:block font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll inside</div>
      </motion.div>
    </motion.div>
  );
}
