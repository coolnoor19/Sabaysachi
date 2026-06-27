'use client';
import { ArrowUpRight, Mic, BookOpen, Newspaper, Award } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';

const ITEMS = [
  { icon: Mic, title: 'India Today Conclave 2025', meta: 'Panel — Press Freedom in the AI Era' },
  { icon: BookOpen, title: 'TEDx Mumbai 2024', meta: 'Talk — The Cost of a Source' },
  { icon: Newspaper, title: 'BBC HARDtalk', meta: 'Interview — On reporting from coalfields' },
  { icon: Award, title: 'Columbia J-School', meta: 'Visiting Faculty, Long-Form Workshop' },
];

export default function Press() {
  return (
    <section id="press" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeUp>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3">05 / Press &amp; Speaking</p>
          <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-[-0.025em] mb-10 md:mb-14">
            On stage, on air, <span className="text-lime italic font-light">on record</span>.
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {ITEMS.map((it, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <a href="#" data-cursor="link"
                className="group bg-ink p-6 md:p-8 flex items-start gap-4 md:gap-5 hover:bg-white/[0.02] transition-colors h-full">
                <span className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 grid place-items-center group-hover:bg-lime group-hover:border-lime group-hover:text-ink transition-all">
                  <it.icon className="w-4 h-4 md:w-5 md:h-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl group-hover:text-lime transition-colors">{it.title}</h3>
                  <p className="mt-1.5 md:mt-2 text-[11px] md:text-xs font-mono uppercase tracking-[0.18em] text-white/55">{it.meta}</p>
                </div>
                <ArrowUpRight className="shrink-0 w-5 h-5 text-white/30 group-hover:text-lime group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
