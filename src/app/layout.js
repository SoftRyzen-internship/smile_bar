import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

import Header from '@/sections/Header/Header';

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
        <header>
          <Header />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
