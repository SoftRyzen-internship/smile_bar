import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SmileBar у Львові',
  description: 'Твій шлях до білосніжної усмішки починається тут',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${inter.className} flex flex-col h-full min-h-screen`}>
        <header>
          <Link href="/">Logo</Link>
        </header>
        <main className='flex-grow'>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
