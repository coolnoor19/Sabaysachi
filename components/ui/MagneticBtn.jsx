'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticBtn({ children, className = '', strength = 0.25, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength * 1.3);
  };
  const leave = () => { x.set(0); y.set(0); };
  return (
    <motion.button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}
