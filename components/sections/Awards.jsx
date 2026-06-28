'use client';
import { motion } from 'framer-motion';
import { AWARDS } from '@/lib/data';
import FadeUp from '@/components/ui/FadeUp';

export default function Awards() {
  return (
    <section id="awards" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-10 mb-10 md:mb-14">
          <FadeUp className="col-span-12 md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3">03 / Work Experience</p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-5xl leading-[1.02] tracking-[-0.025em]">
              Major <span className="text-lime italic font-light">Projects </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="col-span-12 md:col-span-7 md:pl-10 text-white/65 text-sm md:text-base md:flex md:items-end">
            <p>Attempt made by me to make by CV cool </p>
          </FadeUp>
        </div>

        <ul className="border-t border-white/10">
          {AWARDS.map((a, i) => (
            <FadeUp key={i} as="li" delay={i * 0.05}
              className="group relative overflow-hidden border-b border-white/10 grid grid-cols-12 items-center gap-3 sm:gap-4 py-5 sm:py-6 md:py-8 px-1"
            >
              <span className="absolute inset-0 bg-lime origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] -z-0" />
              <span className="col-span-3 sm:col-span-2 font-mono text-xs sm:text-sm text-white/60 group-hover:text-ink/70 transition-colors relative z-10">
                {a.year}
              </span>
              <span className="col-span-9 sm:col-span-6 md:col-span-7 font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight group-hover:text-ink group-hover:italic group-hover:translate-x-2 transition-all duration-500 relative z-10">
                {a.title}
              </span>
              <span className="col-span-12 sm:col-span-4 md:col-span-3 text-left sm:text-right text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-white/55 group-hover:text-ink/80 transition-colors relative z-10">
                {a.category}
              </span>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
