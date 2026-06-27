'use client';
import { motion } from 'framer-motion';

/**
 * Animated headline — splits text into words, each word slides up from a mask
 * with stagger. Special node markers (e.g., highlight) are preserved.
 *
 * Usage:
 *   <AnimatedHeadline parts={[
 *     { t: "Hi, I'm Sabaysachi—and here's how I zigzagged my way into" },
 *     { t: 'communication', hi: true },
 *     { t: 'strategy' },
 *   ]} className="font-display ..." />
 */
export default function AnimatedHeadline({ parts = [], className = '' }) {
  // Build a flat list of word tokens preserving highlight info
  const tokens = [];
  parts.forEach((p, pi) => {
    const words = p.t.split(/\s+/).filter(Boolean);
    words.forEach((w, wi) => {
      tokens.push({ word: w, hi: !!p.hi, key: `${pi}-${wi}` });
    });
  });

  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
      }}
      className={className}
    >
      {tokens.map((tok, i) => (
        <span
          key={tok.key}
          className="inline-block overflow-hidden align-baseline mr-[0.25em] leading-[1.05]"
          style={{ paddingBottom: '0.05em' }}
        >
          <motion.span
            variants={{
              hidden: { y: '110%', opacity: 0 },
              show: { y: '0%', opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
            className={`inline-block ${tok.hi ? 'text-lime italic font-light relative' : ''}`}
          >
            {tok.word}
            {tok.hi && (
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.06 + 0.5, ease: [0.65, 0, 0.35, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-lime/70 origin-left"
              />
            )}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
