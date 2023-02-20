import './globals.css'

import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={ubuntu.className} >{children}</body>
    </html>
  )
}
