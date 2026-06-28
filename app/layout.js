import { Bricolage_Grotesque, Inter, JetBrains_Mono , Courier_Prime} from 'next/font/google';
import './globals.css';

// const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const display = Courier_Prime({ subsets: ['latin'],weight: '400', variable: '--font-courier', display: 'swap' });

export const metadata = {
  title: 'Sabyasachi — Communication Consultant',
  description: 'Sabyasachi is an Indian documentary film maker, content strategist, , copywriter, and social media consultant',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} `}>
      <body className="font-sans antialiased bg-ink text-white selection:bg-lime selection:text-ink">
        {children}
      </body>
    </html>
  );
}
