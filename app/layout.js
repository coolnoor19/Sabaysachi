import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Aarav Sharma — Journalist & Storyteller',
  description: 'Award-winning journalist covering investigative reporting, politics, sports and culture. Words that hold power accountable.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-[#FAF8F3] text-[#0B0B0B] selection:bg-[#8B1A1A] selection:text-[#FAF8F3]">
        {children}
      </body>
    </html>
  );
}
