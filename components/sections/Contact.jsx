'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import { PROFILE, SOCIALS } from '@/lib/data';
import MagneticBtn from '@/components/ui/MagneticBtn';
import FadeUp from '@/components/ui/FadeUp';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return toast.error('Please fill in all fields.');
    setSending(true);
    try {
      const r = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error();
      toast.success('Message sent. I\u2019ll be in touch.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast.error('Could not send. Please email directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-12 gap-8 md:gap-12">
        <FadeUp className="col-span-12 md:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime mb-3"> Contact</p>
          <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-[-0.025em] text-balance">
            Let’s<span className="text-lime italic font-light">Communicate.</span>
          </h2>
          <p className="mt-5 md:mt-6 text-white/65 text-sm md:text-base max-w-md">
            Forget Hire Me—that’s too vanilla. Let’s collaborate. You’ve got work that needs doing, I’ve got bills that need paying. Let’s tolerate each other professionally, deliver something brilliant and if the vibes are good—we’ll keep the party going.
          </p>
          <ul className="mt-8 md:mt-10 space-y-2 font-mono text-xs md:text-sm">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} data-cursor="link"
                  className="group flex items-center justify-between border-b border-white/10 py-3 hover:border-lime transition-colors">
                  <span className="text-white/55 uppercase tracking-[0.15em]">{s.label}</span>
                  <span className="link-fx group-hover:text-lime">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1} className="col-span-12 md:col-span-7 md:pl-6">
          <form onSubmit={submit} className="space-y-7">
            {[
              { k: 'name', label: 'Your name', placeholder: 'Full Name', type: 'text' },
              { k: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email' },
            ].map((f) => (
              <div key={f.k} className="border-b border-white/20 focus-within:border-lime transition-colors pb-2">
                <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-1">{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.k]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  placeholder={f.placeholder}
                  className="w-full bg-transparent border-0 outline-none font-display text-2xl md:text-3xl placeholder-white/20 py-2"
                  data-cursor="link"
                />
              </div>
            ))}
            <div className="border-b border-white/20 focus-within:border-lime transition-colors pb-2">
              <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-1">Your message</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the story."
                className="w-full bg-transparent border-0 outline-none font-display text-xl md:text-2xl placeholder-white/20 py-2 resize-none"
                data-cursor="link"
              />
            </div>
            <MagneticBtn
              type="submit" disabled={sending} data-cursor="cta" data-cursor-label={sending ? 'Sending' : 'Send'}
              className="mt-2 md:mt-6 group inline-flex items-center gap-3 bg-lime text-ink pl-5 md:pl-7 pr-1.5 py-1.5 rounded-full text-xs md:text-sm font-mono uppercase tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-60"
            >
              {sending ? 'Sending…' : 'Send message'}
              <span className="w-10 h-10 md:w-12 md:h-12 grid place-items-center rounded-full bg-ink text-lime group-hover:rotate-45 transition-transform">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </MagneticBtn>
          </form>
        </FadeUp>
      </div>
      <Toaster theme="dark" position="bottom-right"
        toastOptions={{ style: { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.05em' } }} />
    </section>
  );
}
