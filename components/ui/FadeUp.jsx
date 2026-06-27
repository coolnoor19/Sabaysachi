'use client';
import { motion } from 'framer-motion';

export default function FadeUp({ children, delay = 0, y = 30, className = '', as: As = 'div' }) {
  const MotionTag = motion[As] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
