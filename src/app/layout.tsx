import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const OpenSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GreenTech Solutions',
  description: 'Beeing green',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={OpenSans.className}>{children}</body>
    </html>
  )
}