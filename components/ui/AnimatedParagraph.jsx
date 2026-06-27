'use client';
import { motion } from 'framer-motion';

/**
 * Animated paragraph — splits text into words, each word fades-up
 * with a light stagger. Creates a "reading" reveal feel without
 * being slow.
 *
 * Props:
 *   text: string (the paragraph content)
 *   delay: number (start delay in seconds)
 *   className: applied to the wrapping <p>
 */
export default function AnimatedParagraph({ text = '', delay = 0, className = '' }) {
  const words = text.split(/(\s+)/); // preserve spaces

  return (
    <motion.p
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-15%' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.012, delayChildren: delay } },
      }}
      className={className}
    >
      {words.map((w, i) =>
        /\s+/.test(w) ? (
          <span key={i}>{w}</span>
        ) : (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
              show: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        )
      )}
    </motion.p>
  );
}
