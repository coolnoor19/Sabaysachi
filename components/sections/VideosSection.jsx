'use client';

import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';

export default function VideoSection() {
  return (
    <section
      id="watch"
      className="py-20 md:py-32 bg-white/[0.015] border-y border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <FadeUp>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-lime rounded-full pulse-dot" />
              Featured Video
            </p>

            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em]">
              Watch the{' '}
              <span className="text-lime italic font-light">conversation.</span>
            </h2>
          </FadeUp>

          <FadeUp
            delay={0.1}
            className="max-w-sm text-white/65 text-sm md:text-base"
          >
            <p>A tribute to Silver City Kataka.</p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl shadow-lime/10"
          >
            {/* Video */}
            <video
              src="/me.mp4"
              className="w-full aspect-video object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/poster.jpg" // Optional
            />

            {/* Top Left */}
            <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] font-mono text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              Featured Video
            </div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-display italic text-white text-xl sm:text-2xl md:text-4xl">
                  A long-form chat on craft & communication.
                </h3>

                <p className="hidden sm:flex items-center gap-3 mt-3 font-mono uppercase tracking-[0.25em] text-[11px] text-white/70">
                  <Volume2 className="w-4 h-4" />
                  Watch with sound
                </p>
              </motion.div>
            </div>

            {/* Play Icon */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-lime/90 backdrop-blur-lg flex items-center justify-center shadow-2xl"
              >
                <Play
                  className="w-8 h-8 md:w-12 md:h-12 text-black fill-black ml-1"
                  strokeWidth={0}
                />
              </motion.div>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}