'use client';
import { ArrowUpRight } from 'lucide-react';
import { NAV, SOCIALS, PROFILE } from '@/lib/data';
import FadeUp from '@/components/ui/FadeUp';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-10">
          <FadeUp className="col-span-12 md:col-span-5">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-5">
              <span className="w-1.5 h-1.5 bg-lime rounded-full" /> sabayasachi.work
            </p>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-balance">
              I <span className="text-lime italic font-light">moonlight</span>  across multiple projects—mostly to feed my ego  
            </p>
            <a href={`mailto:${PROFILE.email}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] link-fx hover:text-lime">
              {PROFILE.email} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </FadeUp>

          <FadeUp delay={0.05} className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-5">Sitemap</p>
            <ul className="space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-fx font-display text-lg md:text-xl hover:text-lime transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.1} className="col-span-6 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-5">Socials</p>
            <ul className="space-y-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="link-fx font-display text-lg md:text-xl hover:text-lime transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        {/* <div className="mt-14 md:mt-20">
          <h2 className="font-display italic font-light text-[clamp(3.5rem,15vw,12rem)] leading-[0.85] tracking-[-0.03em] text-white/[0.07] select-none break-all">
            {PROFILE.name.toLowerCase().replace(' ', '.')}
          </h2>
        </div> */}

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
          <p>© {new Date().getFullYear()} — All bylines reserved.</p>
          <p>Made with restraint &amp; <span className="text-lime">ink</span>.</p>
          <a href="#top" className="group inline-flex items-center gap-2 hover:text-lime transition-colors">
            Back to top
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
