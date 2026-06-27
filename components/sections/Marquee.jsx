'use client';
import { motion } from 'framer-motion';
import { PUBLICATIONS } from '@/lib/data';

export default function Marquee() {
  const items = [...PUBLICATIONS, ...PUBLICATIONS];
  return (
    <>
    <div className="font-display text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 text-center mb-2 md:mb-3">
      Who Am I ...
    </div>
    <section className="border-y border-white/10 overflow-hidden py-5 md:py-7">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-10 px-6 font-display italic text-xl md:text-3xl text-white/70">
            <span>{p}</span>
            <span className="text-lime text-base">❖</span>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
