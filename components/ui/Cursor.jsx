'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function Cursor() {
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
      setVariant(el?.dataset.cursor || 'default');
      setLabel(el?.dataset.cursorLabel || '');
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  const size = variant === 'link' ? 10 : variant === 'cta' || variant === 'image' ? 90 : 12;
  const bg = variant === 'cta' || variant === 'image' ? '#D8FF3D' : '#FFFFFF';
  const tx = variant === 'cta' || variant === 'image' ? '#0F0F10' : '#000';

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%', backgroundColor: bg, color: tx }}
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
            className="text-[10px] font-mono uppercase tracking-widest"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
