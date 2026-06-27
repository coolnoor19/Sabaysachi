'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ to, suffix = '' }) {
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
