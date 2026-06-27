'use client';
import { motion } from 'framer-motion';

/**
 * Image revealed via a sliding curtain (clip-path) + subtle parallax zoom.
 * Drop in place of a static <img> wrapper. Pass src + alt.
 */
export default function RevealImage({ src, alt = '', className = '', priority = false }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className={`overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
