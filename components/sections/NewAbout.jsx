'use client';
import { motion } from 'framer-motion';
import { NEWPROFILE, PROFILE } from '@/lib/data';
import FadeUp from '@/components/ui/FadeUp';
import AnimatedHeadline from '@/components/ui/AnimatedHeadline';
import AnimatedParagraph from '@/components/ui/AnimatedParagraph';
import RevealImage from '@/components/ui/RevealImage';

const HEADLINE = [
    { t: "My way into" },
    { t: 'communication', hi: true },
    { t: 'strategy' },
];

export default function NewAbout() {
    return (
        <section id="story" className="py-20 md:py-32">
            <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-12 gap-8 md:gap-10">
                <FadeUp className="col-span-12 md:col-span-5 lg:col-span-4">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-4"
                    >
                        02 / About
                    </motion.p>
                    <RevealImage
                        src="/profile-pic.jpeg"
                        alt={PROFILE.name}
                        className="hover-img aspect-[4/5] rounded-md relative"
                    />
                </FadeUp>

                <div className="col-span-12 md:col-span-7 lg:col-span-8 md:pl-6">
                    <AnimatedHeadline
                        parts={HEADLINE}
                        className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-4xl leading-[1.05] tracking-[-0.025em] text-balance"
                    />

                    <div className="mt-8 md:mt-10 max-w-none text-white/70 text-[15px] md:text-base leading-relaxed">
                        {NEWPROFILE.about.map((p, i) => (
                            <AnimatedParagraph
                                key={i}
                                text={p}
                                delay={0.1 + i * 0.15}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
