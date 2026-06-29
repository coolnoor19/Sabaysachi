import { Bricolage_Grotesque, Inter, JetBrains_Mono , Courier_Prime} from 'next/font/google';
import './globals.css';
import Script from "next/script";

// const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const display = Courier_Prime({ subsets: ['latin'],weight: '400', variable: '--font-courier', display: 'swap' });

export const metadata = {
  title: 'Sabyasachi — Communication Consultant',
  description: 'Sabyasachi Kundu is a Communication Consultant, Documentary Film Maker, Content Strategist, Copywriter and Social Media Consultant.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} `}>
      <body className="font-sans antialiased bg-ink text-white selection:bg-lime selection:text-ink">
        {children}
         {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-96B4YK0D9L"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-96B4YK0D9L');
          `}
        </Script>
      </body>
    </html>
  );
}
