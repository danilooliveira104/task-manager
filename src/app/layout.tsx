import './globals.css'
import Header from './components/Header/Header'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} box-border`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
