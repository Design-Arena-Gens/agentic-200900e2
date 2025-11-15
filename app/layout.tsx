import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CyberHub Nigeria - Your Digital Gateway',
  description: 'Professional cyber cafe services in Nigeria. Internet access, printing, scanning, computer training and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
