import './globals.css'
import { Playfair_Display } from 'next/font/google'
import NavBar from '@/components/NavBar'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Lexi Sierfeld',
  description: 'Creative SWE Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
