'use client';
import { motion } from 'framer-motion';
import { NEWPROFILE, PROFILE, STATS } from '@/lib/data';
import FadeUp from '@/components/ui/FadeUp';
import Counter from '@/components/ui/Counter';

export default function NewAbout() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-12 gap-8 md:gap-10">
        <FadeUp className="col-span-12 md:col-span-5 lg:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-4">02 / About</p>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1.2 }}
            className="hover-img aspect-[4/5] overflow-hidden rounded-md relative" data-cursor="image"
          >
            <img
              src="/profile-pic.jpeg"
              alt={PROFILE.name}
              className="w-full h-full object-cover"
            />
            
          </motion.div>
        </FadeUp>

        <div className="col-span-12 md:col-span-7 lg:col-span-8 md:pl-6">
          <FadeUp as="h2" className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-4xl leading-[1.02] tracking-[-0.025em] text-balance">
            Hi, I'm Sabaysachi—and here's how I zigzagged my way into <span className="text-lime italic font-light">communication</span> strategy
          </FadeUp>

          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-white/70 text-[15px] md:text-base leading-relaxed">
            {NEWPROFILE.about.map((p, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.1}><p>{p}</p></FadeUp>
            ))}
          </div>

          {/* Stats */}
          {/* <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-white/10 pt-8 md:pt-10">
            {STATS.map((s, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <p className="font-display text-4xl md:text-5xl tracking-tight">
                  <Counter to={s.v} suffix={s.s} />
                </p>
                <p className="mt-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/55">{s.l}</p>
              </FadeUp>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
