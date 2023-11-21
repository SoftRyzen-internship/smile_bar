import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { meta } from '@/data/metadata';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = meta;

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={`${montserrat.className} flex flex-col h-full min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
