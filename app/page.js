'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cursor from '@/components/ui/Cursor';
import ProgressBar from '@/components/ui/ProgressBar';
import Intro from '@/components/sections/Intro';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import Articles from '@/components/sections/Articles';
import Awards from '@/components/sections/Awards';
import PullQuote from '@/components/sections/PullQuote';
import Press from '@/components/sections/Press';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import NewAbout from '@/components/sections/NewAbout';
import Video from '@/components/sections/Video';

function App() {
  const [entered, setEntered] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = typeof window !== 'undefined' && sessionStorage.getItem('intro_seen') === '1';
    setEntered(seen);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.body.style.overflow = entered ? '' : 'hidden';
  }, [entered, ready]);

  const enter = () => {
    try { sessionStorage.setItem('intro_seen', '1'); } catch (e) {}
    setEntered(true);
  };

  return (
    <main className="relative cursor-none-all">
      <Cursor />
      <AnimatePresence mode="wait">
        {ready && !entered && <Intro key="intro" onEnter={enter} />}
      </AnimatePresence>
      <ProgressBar />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Video />
      <NewAbout/>
      {/* <Articles /> */}
      <Awards />
      {/* <PullQuote /> */}
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
