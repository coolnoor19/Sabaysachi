'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Award,
  Newspaper,
  Mic,
  BookOpen,
  ChevronDown,
  Sparkles,
  MapPin,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast, Toaster } from 'sonner';

/* ---------- Data ---------- */
const BEATS = ['Investigative', 'Politics', 'Sports', 'Culture & Arts'];

const ARTICLES = [
  {
    id: 1,
    category: 'Investigative',
    title: 'The Shadow Ledger: Inside a $400M Money-Laundering Web',
    excerpt: 'A nine-month investigation into shell companies stretching from Mumbai to Mauritius — and the regulators who looked the other way.',
    publication: 'The Caravan',
    date: 'May 2025',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1528190240347-03ccaffd0674?w=1400&q=80',
    featured: true,
    href: '#',
  },
  {
    id: 2,
    category: 'Politics',
    title: 'When the Whip Cracks: How Floor-Crossing Reshaped a State',
    excerpt: 'On the cold mechanics of defection — and the citizens left holding the bill.',
    publication: 'The Wire',
    date: 'March 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1613510574898-9c830e5192c5?w=1200&q=80',
    href: '#',
  },
  {
    id: 3,
    category: 'Sports',
    title: 'The Final Over: A Bowler’s Last Stand at the Eden Gardens',
    excerpt: 'Long-form portrait of a fast bowler chasing one more season before his body says no.',
    publication: 'ESPNcricinfo',
    date: 'February 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=80',
    href: '#',
  },
  {
    id: 4,
    category: 'Culture',
    title: 'After the Festival: Who Owns a City’s Music?',
    excerpt: 'A reported essay on heritage, gentrification and the slow erasure of street sound.',
    publication: 'Scroll',
    date: 'January 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1586074299757-dc655f18518c?w=1200&q=80',
    href: '#',
  },
  {
    id: 5,
    category: 'Investigative',
    title: 'Coal & Conscience: A Town That Was Promised the Future',
    excerpt: 'Twelve months in a mining belt where the boom never came — and the cancer did.',
    publication: 'The Guardian',
    date: 'November 2024',
    readTime: '21 min read',
    image: 'https://images.unsplash.com/photo-1581059927910-07e25c7dab80?w=1200&q=80',
    href: '#',
  },
];

const PUBLICATIONS = [
  'The Guardian', 'The Caravan', 'The Wire', 'Scroll', 'Reuters',
  'BBC', 'Al Jazeera', 'ESPNcricinfo', 'The Hindu', 'Frontline',
];

const AWARDS = [
  { year: '2025', title: 'Ramnath Goenka Award', category: 'Investigative Reporting (Print)' },
  { year: '2024', title: 'Red Ink Award', category: 'Journalist of the Year — Long-Form' },
  { year: '2024', title: 'ICFJ Knight Fellowship', category: 'Cross-Border Investigation' },
  { year: '2023', title: 'PII-ICRC Award', category: 'Reporting on Humanitarian Crises' },
  { year: '2022', title: 'Laadli Media Award', category: 'Gender Sensitivity in Reporting' },
];

const STATS = [
  { value: 240, suffix: '+', label: 'Bylines published' },
  { value: 11, suffix: '', label: 'Years on the beat' },
  { value: 32, suffix: '', label: 'Countries reported from' },
  { value: 9, suffix: '', label: 'Major awards' },
];

/* ---------- Intro / Splash ---------- */
const INTRO_LINES = [
  { kicker: 'A story', main: 'begins with', accent: 'a question.' },
  { kicker: 'Communication', main: 'is the bridge between', accent: 'truth & the world.' },
  { kicker: 'In journalism,', main: 'listening is louder than', accent: 'speaking.' },
  { kicker: 'Words travel', main: 'further than', accent: 'facts.' },
  { kicker: 'The first', main: 'draft of', accent: 'history.' },
];

function Intro({ onEnter }) {
  const [idx, setIdx] = useState(0);
  const [time, setTime] = useState('');
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % INTRO_LINES.length), 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const t = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
      setTime(t);
    };
    fmt();
    const id = setInterval(fmt, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const onMove = (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    x.set((e.clientX - cx) * 0.02);
    y.set((e.clientY - cy) * 0.02);
  };

  const line = INTRO_LINES[idx];

  return (
    <motion.div
      key="intro"
      onMouseMove={onMove}
      initial={{ opacity: 1 }}
      exit={{
        clipPath: 'inset(50% 0% 50% 0%)',
        transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[120] bg-[#0B0B0B] text-[#FAF8F3] grain overflow-hidden flex flex-col"
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
    >
      {/* Ambient background marquees */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[18%] left-0 right-0 flex whitespace-nowrap animate-marquee opacity-[0.06]">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-16 px-8 font-serif text-[10vw] leading-none italic text-[#FAF8F3]">
              {['Newsroom', 'Long-form', 'On the record', 'Dispatch', 'Byline', 'Investigation'].map((w, i) => (
                <span key={i}>{w}<span className="text-[#8B1A1A] mx-6">•</span></span>
              ))}
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-[18%] left-0 right-0 flex whitespace-nowrap animate-marquee opacity-[0.05]"
          style={{ animationDirection: 'reverse', animationDuration: '55s' }}
        >
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-16 px-8 font-serif text-[8vw] leading-none text-[#FAF8F3]">
              {['Politics', 'Sports', 'Culture', 'Investigative', 'Field notes', 'Source'].map((w, i) => (
                <span key={i}>{w}<span className="text-[#8B1A1A] mx-6">/</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Top bar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-[#FAF8F3]/15 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#FAF8F3]/60"
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A1A] animate-pulse-dot" />
          On the record
        </span>
        <span className="hidden sm:inline font-serif italic text-base normal-case tracking-normal text-[#FAF8F3]/80">
          Aarav Sharma &mdash; Journalist
        </span>
        <span className="tabular-nums">{time || '--:--'} IST</span>
      </motion.div>

      {/* Skip intro */}
      <motion.button
        type="button"
        onClick={(e) => { e.stopPropagation(); onEnter(); }}
        data-cursor="link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-20 right-6 md:right-10 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-[#FAF8F3]/60 hover:text-[#8B1A1A] transition-colors flex items-center gap-2"
      >
        Skip intro <ArrowUpRight className="w-3 h-3" />
      </motion.button>

      {/* Center stage */}
      <button
        type="button"
        onClick={onEnter}
        data-cursor="cta"
        data-cursor-label="Enter"
        className="flex-1 w-full text-left relative outline-none focus:outline-none cursor-pointer"
      >
        <motion.div
          style={{ x: sx, y: sy }}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-16"
        >
          <div className="max-w-6xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#8B1A1A] mb-6 md:mb-10 flex items-center gap-4"
                >
                  <span className="w-10 h-px bg-[#8B1A1A]" />
                  {String(idx + 1).padStart(2, '0')} / {String(INTRO_LINES.length).padStart(2, '0')}
                </motion.p>

                <h1 className="font-serif leading-[0.95] tracking-[-0.02em] text-[clamp(2.5rem,8.5vw,9rem)] text-balance">
                  <motion.span
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                    className="block italic font-normal text-[#FAF8F3]/60"
                  >
                    {line.kicker}
                  </motion.span>
                  <motion.span
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="block"
                  >
                    {line.main}
                  </motion.span>
                  <motion.span
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                    className="block text-[#8B1A1A] italic"
                  >
                    {line.accent}
                  </motion.span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Decorative big quote mark */}
        <Quote className="absolute top-1/4 right-6 md:right-16 w-24 h-24 md:w-40 md:h-40 text-[#FAF8F3]/5" />
      </button>

      {/* Bottom bar */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="px-6 md:px-10 py-8 border-t border-[#FAF8F3]/15 flex items-center justify-between gap-6"
      >
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#FAF8F3]/50">
          <span>Tap anywhere</span>
          <span className="text-[#8B1A1A]">/</span>
          <span>or press the button</span>
        </div>

        <MagneticButton
          onClick={onEnter}
          data-cursor="cta"
          data-cursor-label="Enter"
          className="group mx-auto md:mx-0 inline-flex items-center gap-4 bg-[#FAF8F3] text-[#0B0B0B] pl-7 pr-2 py-2 rounded-full text-sm font-mono uppercase tracking-[0.2em] hover:bg-[#8B1A1A] hover:text-[#FAF8F3] transition-colors"
        >
          Enter the portfolio
          <span className="w-12 h-12 grid place-items-center rounded-full bg-[#0B0B0B] text-[#FAF8F3] group-hover:bg-[#FAF8F3] group-hover:text-[#8B1A1A] group-hover:rotate-45 transition-all">
            <ArrowRight className="w-5 h-5" />
          </span>
        </MagneticButton>

        <div className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#FAF8F3]/50">
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </motion.span>
          <span>Scroll inside</span>
        </div>
      </motion.div>

      {/* Pagination dots */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
        {INTRO_LINES.map((_, i) => (
          <span
            key={i}
            className={`w-px transition-all duration-500 ${
              i === idx ? 'h-10 bg-[#8B1A1A]' : 'h-4 bg-[#FAF8F3]/30'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ---------- Custom Cursor ---------- */
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [variant, setVariant] = useState('default');
  const [label, setLabel] = useState('');

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        setVariant(el.dataset.cursor);
        setLabel(el.dataset.cursorLabel || '');
      } else {
        setVariant('default');
        setLabel('');
      }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  const size = variant === 'link' ? 12 : variant === 'cta' ? 90 : variant === 'image' ? 96 : 14;
  const bg = variant === 'cta' || variant === 'image' ? '#8B1A1A' : '#0B0B0B';

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%', backgroundColor: bg }}
      animate={{ width: size, height: size }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="text-[10px] font-mono uppercase tracking-widest text-[#FAF8F3]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ---------- Reading Progress Bar ---------- */
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-[#8B1A1A] z-[80]"
    />
  );
}

/* ---------- Magnetic Button ---------- */
function MagneticButton({ children, className = '', onClick, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx * 0.25);
    y.set(my * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

/* ---------- Animated Counter ---------- */
function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

/* ---------- Reveal text helpers ---------- */
const revealItem = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const revealContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

function RevealWord({ children, className = '' }) {
  return (
    <span className="reveal-mask align-baseline">
      <motion.span variants={revealItem} className={`inline-block ${className}`}>
        {children}
      </motion.span>
    </span>
  );
}

function RevealHeadline({ text, className = '' }) {
  const words = text.split(' ');
  return (
    <motion.h2
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block">
          <RevealWord>{w}</RevealWord>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.h2>
  );
}

/* ---------- Navigation ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#awards', label: 'Awards' },
    { href: '#press', label: 'Press' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF8F3]/85 backdrop-blur-md border-b border-black/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          data-cursor="link"
          className="font-serif text-xl md:text-2xl tracking-tight flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#8B1A1A] animate-pulse-dot" />
          <span className="italic">Aarav</span>
          <span className="font-bold">Sharma</span>
        </a>
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor="link"
                className="link-underline text-sm uppercase tracking-[0.18em] font-mono"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-cursor="link"
          className="group hidden md:inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.18em] border border-[#0B0B0B] px-4 py-2 rounded-full hover:bg-[#0B0B0B] hover:text-[#FAF8F3] transition-colors"
        >
          Get in touch
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </motion.nav>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 800], [0, 120]);
  const yText = useTransform(scrollY, [0, 800], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [beatIdx, setBeatIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setBeatIdx((i) => (i + 1) % BEATS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-screen pt-32 md:pt-36 pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#0B0B0B]/60 border-y border-[#0B0B0B]/15 py-3 mb-12"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#8B1A1A] rounded-full animate-pulse-dot" />
            Vol. XI &middot; Edition 2025
          </span>
          <span className="hidden sm:inline">Independent Journalism</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" /> New Delhi &middot; London
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Headline */}
          <motion.div style={{ y: yText, opacity }} className="col-span-12 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B1A1A] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-[#8B1A1A]" />
              The Portfolio
            </motion.p>

            <h1 className="font-serif font-bold leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,9vw,9.5rem)]">
              <motion.span
                variants={revealContainer}
                initial="hidden"
                animate="show"
                className="block"
              >
                <RevealWord>Words</RevealWord>{' '}
                <RevealWord>that</RevealWord>
              </motion.span>
              <motion.span
                variants={revealContainer}
                initial="hidden"
                animate="show"
                transition={{ delayChildren: 0.2 }}
                className="block"
              >
                <RevealWord className="italic font-normal">hold</RevealWord>{' '}
                <RevealWord>power</RevealWord>
              </motion.span>
              <motion.span
                variants={revealContainer}
                initial="hidden"
                animate="show"
                transition={{ delayChildren: 0.4 }}
                className="block"
              >
                <RevealWord>accountable.</RevealWord>
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10 max-w-xl text-[#0B0B0B]/75 text-lg leading-relaxed text-pretty"
            >
              I&apos;m{' '}
              <span className="font-serif italic text-[#0B0B0B]">Aarav Sharma</span>{' '}
              — a journalist reporting on{' '}
              <span className="relative inline-block min-w-[10.5rem] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={beatIdx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block font-serif italic text-[#8B1A1A]"
                  >
                    {BEATS[beatIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
              . For over a decade, my work has chased the story behind the headline.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <MagneticButton
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                data-cursor="cta"
                data-cursor-label="Read"
                className="group inline-flex items-center gap-3 bg-[#0B0B0B] text-[#FAF8F3] pl-6 pr-2 py-2 rounded-full text-sm font-mono uppercase tracking-[0.18em] hover:bg-[#8B1A1A] transition-colors"
              >
                Read the work
                <span className="w-9 h-9 grid place-items-center rounded-full bg-[#FAF8F3] text-[#0B0B0B] group-hover:rotate-45 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>
              <a
                href="#contact"
                data-cursor="link"
                className="link-underline text-sm font-mono uppercase tracking-[0.18em]"
              >
                Commission a story →
              </a>
            </motion.div>
          </motion.div>

          {/* Hero portrait */}
          <motion.div
            style={{ y: yImg }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-4 relative"
          >
            <div
              data-cursor="image"
              data-cursor-label="View"
              className="relative aspect-[3/4] overflow-hidden rounded-sm border border-black/10"
            >
              <img
                src="https://images.unsplash.com/photo-1528190240347-03ccaffd0674?w=900&q=85"
                alt="Aarav Sharma"
                className="w-full h-full object-cover img-editorial"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[#FAF8F3]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-80">Est. 2014</p>
                  <p className="font-serif italic text-lg">In the field.</p>
                </div>
                <Sparkles className="w-5 h-5 opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ opacity }}
          className="mt-16 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#0B0B0B]/55"
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = [...PUBLICATIONS, ...PUBLICATIONS];
  return (
    <section className="border-y border-[#0B0B0B]/15 bg-[#0B0B0B] text-[#FAF8F3] overflow-hidden py-6">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-12 px-6 font-serif text-2xl md:text-3xl italic">
            <span>{p}</span>
            <span className="text-[#8B1A1A] text-xl">❖</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B1A1A] mb-4">02 — About</p>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] overflow-hidden rounded-sm relative"
            data-cursor="image"
          >
            <img
              src="https://images.unsplash.com/photo-1581059927910-07e25c7dab80?w=900&q=85"
              alt="At work"
              className="w-full h-full object-cover img-editorial"
            />
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-8 md:pl-10">
          <RevealHeadline
            text="Reporting from where the story actually lives."
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em] text-balance"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#0B0B0B]/80 text-[17px] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="font-serif text-5xl float-left mr-2 leading-none text-[#8B1A1A]">F</span>
              or eleven years I&apos;ve filed dispatches from courtrooms, coalfields, parliaments and locker rooms. My beat sits where investigative rigour meets long-form narrative — stories that take months, sometimes years, to earn.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I&apos;ve been a staff correspondent, a foreign reporter, and now an independent contributor whose work appears in the publications I grew up reading. I believe a good question is more dangerous than a loud opinion.
            </motion.p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 border-t border-[#0B0B0B]/15 pt-10">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <p className="font-serif text-5xl md:text-6xl tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-[#0B0B0B]/60">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Articles ---------- */
function ArticleCard({ article, large = false }) {
  return (
    <motion.a
      href={article.href}
      data-cursor="image"
      data-cursor-label="Read"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      <div className={`overflow-hidden rounded-sm bg-[#0B0B0B] ${large ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover img-editorial"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#0B0B0B]/60">
        <span className="text-[#8B1A1A]">{article.category}</span>
        <span>&middot;</span>
        <span>{article.publication}</span>
        <span>&middot;</span>
        <span>{article.date}</span>
      </div>
      <h3 className={`mt-3 font-serif leading-[1.08] tracking-[-0.01em] ${large ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} text-balance`}>
        <span className="bg-gradient-to-r from-[#0B0B0B] to-[#0B0B0B] bg-[length:0%_1px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_1px] transition-[background-size] duration-500">
          {article.title}
        </span>
      </h3>
      <p className="mt-3 text-[#0B0B0B]/70 max-w-xl text-pretty">{article.excerpt}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.18em] text-[#0B0B0B]">
        <span>{article.readTime}</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.a>
  );
}

function Work() {
  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);
  return (
    <section id="work" className="py-28 md:py-40 bg-[#F2EFE6]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B1A1A] mb-4">03 — Selected Work</p>
            <RevealHeadline
              text="Stories worth your time."
              className="font-serif text-5xl md:text-7xl leading-[1] tracking-[-0.02em]"
            />
          </div>
          <p className="max-w-md text-[#0B0B0B]/70 text-pretty">
            A curated set of long-reads, investigations and features published across leading outlets between 2024 and 2025.
          </p>
        </div>

        {featured && <ArticleCard article={featured} large />}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {rest.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Awards ---------- */
function Awards() {
  return (
    <section id="awards" className="py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B1A1A] mb-4">04 — Recognition</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] text-balance">
              Honoured by peers <span className="italic">&amp;</span> juries.
            </h2>
            <p className="mt-6 text-[#0B0B0B]/70 max-w-sm">
              Awards are nice. Sources who keep calling back are nicer. Here&apos;s a bit of both.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul>
              {AWARDS.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                  className="group relative border-b border-[#0B0B0B]/20 first:border-t py-6 md:py-7 grid grid-cols-12 items-center gap-4 cursor-default"
                  data-cursor="link"
                >
                  <span className="absolute inset-0 bg-[#0B0B0B] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 -z-0" />
                  <span className="col-span-2 font-mono text-sm md:text-base text-[#0B0B0B]/60 group-hover:text-[#FAF8F3]/60 transition-colors relative z-10">
                    {a.year}
                  </span>
                  <span className="col-span-7 md:col-span-7 font-serif text-2xl md:text-3xl tracking-tight group-hover:text-[#FAF8F3] group-hover:italic group-hover:translate-x-2 transition-all duration-500 relative z-10">
                    {a.title}
                  </span>
                  <span className="col-span-3 text-right text-xs md:text-sm font-mono uppercase tracking-[0.15em] text-[#0B0B0B]/60 group-hover:text-[#8B1A1A] transition-colors relative z-10">
                    {a.category}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pull quote ---------- */
function PullQuote() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0B] text-[#FAF8F3]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <Quote className="w-10 h-10 mx-auto text-[#8B1A1A] mb-8" />
        <RevealHeadline
          text="Aarav writes the kind of reportage that ages slowly and reads forever."
          className="font-serif italic text-3xl md:text-5xl leading-[1.15] text-balance"
        />
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-[#FAF8F3]/60">
          — Editor, The Caravan
        </p>
      </div>
    </section>
  );
}

/* ---------- Press / Speaking ---------- */
function Press() {
  const items = [
    { icon: Mic, title: 'India Today Conclave 2025', meta: 'Panel — Press Freedom in the AI Era' },
    { icon: BookOpen, title: 'TEDx Mumbai 2024', meta: 'Talk — The Cost of a Source' },
    { icon: Newspaper, title: 'BBC HARDtalk', meta: 'Interview — On reporting from coalfields' },
    { icon: Award, title: 'Columbia J-School', meta: 'Visiting Faculty, Long-Form Workshop' },
  ];
  return (
    <section id="press" className="py-28 md:py-40 bg-[#F2EFE6]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B1A1A] mb-4">05 — Press &amp; Speaking</p>
        <RevealHeadline
          text="On stage, on air, on record."
          className="font-serif text-5xl md:text-7xl leading-[1] tracking-[-0.02em] mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0B0B0B]/15">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group bg-[#F2EFE6] p-8 md:p-10 flex items-start gap-5 hover:bg-[#FAF8F3] transition-colors"
              data-cursor="link"
            >
              <span className="w-12 h-12 rounded-full border border-[#0B0B0B] grid place-items-center group-hover:bg-[#8B1A1A] group-hover:border-[#8B1A1A] group-hover:text-[#FAF8F3] transition-all">
                <it.icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">{it.title}</h3>
                <p className="mt-2 text-sm font-mono uppercase tracking-[0.18em] text-[#0B0B0B]/60">
                  {it.meta}
                </p>
              </div>
              <ArrowUpRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setSending(true);
    try {
      const r = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error('failed');
      toast.success('Message sent. I’ll be in touch.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast.error('Could not send. Please email directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#0B0B0B] text-[#FAF8F3]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B1A1A] mb-4">06 — Contact</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1] tracking-[-0.02em] text-balance">
            Have a tip? <span className="italic">A story</span> to commission?
          </h2>
          <p className="mt-6 text-[#FAF8F3]/70 max-w-md">
            For tips, please use Signal or ProtonMail for sensitive material. For commissions and speaking, the form below is fastest.
          </p>

          <div className="mt-10 space-y-4 font-mono text-sm">
            <a href="mailto:hello@example.com" data-cursor="link" className="flex items-center gap-3 link-underline">
              <Mail className="w-4 h-4 text-[#8B1A1A]" /> hello@example.com
            </a>
            <a href="#" data-cursor="link" className="flex items-center gap-3 link-underline">
              <Twitter className="w-4 h-4 text-[#8B1A1A]" /> @aaravsharma
            </a>
            <a href="#" data-cursor="link" className="flex items-center gap-3 link-underline">
              <Linkedin className="w-4 h-4 text-[#8B1A1A]" /> /in/aaravsharma
            </a>
            <a href="#" data-cursor="link" className="flex items-center gap-3 link-underline">
              <Instagram className="w-4 h-4 text-[#8B1A1A]" /> @aarav.field.notes
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="col-span-12 md:col-span-7 md:pl-10">
          <div className="space-y-8">
            <div className="border-b border-[#FAF8F3]/30 focus-within:border-[#8B1A1A] transition-colors pb-2">
              <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#FAF8F3]/60 mb-1">Your name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full bg-transparent border-0 outline-none font-serif text-2xl md:text-3xl placeholder-[#FAF8F3]/25 py-2"
                data-cursor="link"
              />
            </div>
            <div className="border-b border-[#FAF8F3]/30 focus-within:border-[#8B1A1A] transition-colors pb-2">
              <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#FAF8F3]/60 mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@newsroom.com"
                className="w-full bg-transparent border-0 outline-none font-serif text-2xl md:text-3xl placeholder-[#FAF8F3]/25 py-2"
                data-cursor="link"
              />
            </div>
            <div className="border-b border-[#FAF8F3]/30 focus-within:border-[#8B1A1A] transition-colors pb-2">
              <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-[#FAF8F3]/60 mb-1">Your message</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the story."
                className="w-full bg-transparent border-0 outline-none font-serif text-xl md:text-2xl placeholder-[#FAF8F3]/25 py-2 resize-none"
                data-cursor="link"
              />
            </div>
          </div>

          <MagneticButton
            type="submit"
            disabled={sending}
            data-cursor="cta"
            data-cursor-label={sending ? 'Sending' : 'Send'}
            className="mt-10 group inline-flex items-center gap-3 bg-[#FAF8F3] text-[#0B0B0B] pl-7 pr-2 py-2 rounded-full text-sm font-mono uppercase tracking-[0.2em] hover:bg-[#8B1A1A] hover:text-[#FAF8F3] transition-colors disabled:opacity-60"
          >
            {sending ? 'Sending…' : 'Send message'}
            <span className="w-10 h-10 grid place-items-center rounded-full bg-[#0B0B0B] text-[#FAF8F3] group-hover:bg-[#FAF8F3] group-hover:text-[#8B1A1A] group-hover:rotate-45 transition-all">
              <ArrowRight className="w-4 h-4" />
            </span>
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-[#FAF8F3]/70 border-t border-[#FAF8F3]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif italic text-lg">
          Aarav Sharma <span className="not-italic font-mono text-xs uppercase tracking-[0.25em] ml-3">Est. 2014</span>
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em]">
          © {new Date().getFullYear()} — All bylines reserved.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em]">
          Made with restraint &amp; <span className="text-[#8B1A1A]">ink</span>.
        </p>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  const [entered, setEntered] = useState(true); // start true to avoid SSR flash; corrected on mount
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = typeof window !== 'undefined' && sessionStorage.getItem('intro_seen') === '1';
    setEntered(seen);
    setReady(true);
  }, []);

  const handleEnter = () => {
    try { sessionStorage.setItem('intro_seen', '1'); } catch (e) {}
    setEntered(true);
  };

  useEffect(() => {
    if (!ready) return;
    document.body.style.overflow = entered ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [entered, ready]);

  return (
    <main className="relative grain cursor-none-all">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {ready && !entered && <Intro key="intro" onEnter={handleEnter} />}
      </AnimatePresence>
      <ProgressBar />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Awards />
      <PullQuote />
      <Press />
      <Contact />
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.05em' },
        }}
      />
    </main>
  );
}

export default App;
