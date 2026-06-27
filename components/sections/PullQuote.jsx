'use client';
import { Quote } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';

export default function PullQuote() {
  return (
    <section className="py-20 md:py-28 bg-lime text-ink">
      <div className="max-w-5xl mx-auto px-5 md:px-10 text-center">
        <Quote className="w-8 h-8 md:w-10 md:h-10 mx-auto text-ink/70 mb-6" />
        <FadeUp as="p" className="font-display italic font-medium text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-balance">
          Aarav writes the kind of reportage that ages slowly and reads forever.
        </FadeUp>
        <FadeUp delay={0.1} className="mt-6 md:mt-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-ink/65">
          — Editor, The Caravan
        </FadeUp>
      </div>
    </section>
  );
}
