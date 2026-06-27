'use client';
import { motion } from 'framer-motion';
import { Play, Volume2, ExternalLink } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';

const VIDEO_ID = 'Nvflsh2b4Jw';
const START = 887;
const YT_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}&t=${START}s`;

export default function Video() {
  return (
    <section id="watch" className="py-20 md:py-32 bg-white/[0.015] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <FadeUp>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-lime rounded-full pulse-dot" />
              In Conversation
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em] text-balance">
              Watch the <span className="text-lime italic font-light">conversation</span>.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="max-w-sm text-white/65 text-sm md:text-base">
            <p>A long-form interview on the craft of communication, journalism and the stories behind the headlines.</p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <a
            href={YT_URL}
            target="_blank"
            rel="noreferrer"
            data-cursor="cta"
            data-cursor-label="Watch"
            aria-label="Watch on YouTube"
            className="relative aspect-video w-full overflow-hidden rounded-lg md:rounded-xl border border-white/10 bg-ink shadow-2xl shadow-lime/[0.03] group block"
          >
            {/* Thumbnail */}
            <img
              src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Featured interview thumbnail"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10 group-hover:from-ink/90 transition-colors" />

            {/* Centre play button */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute inset-0 grid place-items-center"
            >
              <span className="relative">
                <span className="absolute inset-0 rounded-full border border-lime/50 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-700" />
                <span className="absolute -inset-3 rounded-full border border-lime/30 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-1000" />
                <span className="relative grid place-items-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full bg-lime text-ink group-hover:bg-white transition-colors shadow-xl shadow-lime/20">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 fill-current ml-0.5 md:ml-1" strokeWidth={0} />
                </span>
              </span>
            </motion.div>

            {/* Top-left tag */}
            <div className="absolute top-3 left-3 md:top-5 md:left-5 inline-flex items-center gap-2 bg-ink/70 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot" />
              Featured Interview
            </div>

            {/* Top-right "open" badge */}
            <div className="absolute top-3 right-3 md:top-5 md:right-5 inline-flex items-center gap-1.5 bg-ink/70 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/85 group-hover:bg-lime group-hover:text-ink group-hover:border-lime transition-colors">
              YouTube <ExternalLink className="w-3 h-3" />
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 flex items-end justify-between gap-4 text-white">
              <div className="min-w-0">
                <p className="font-display italic text-lg sm:text-2xl md:text-3xl leading-tight text-balance">
                  A long-form chat on craft &amp; communication.
                </p>
                <p className="hidden sm:flex mt-2 items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60">
                  <Volume2 className="w-3.5 h-3.5" />
                  Watch with sound &middot; opens in new tab
                </p>
              </div>
              <span className="shrink-0 hidden sm:inline-flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-lime">
                Watch now
                <span className="inline-block w-6 h-px bg-lime transition-all duration-500 group-hover:w-10" />
              </span>
            </div>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
