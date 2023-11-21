import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'SmileBar у Львові',
  description: 'Твій шлях до білосніжної усмішки починається тут',
};

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
