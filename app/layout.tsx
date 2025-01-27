import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlipFocus - The best deals on the internet',
  description: 'FlipFocus is the best way to find product deals on the internet. We are a team of developers and product enthusiasts who are passionate about finding the best deals on the internet.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="favicon-white-bg.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
