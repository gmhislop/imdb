import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IMDB Movie Search',
  description: 'Search for movies on IMDB',
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
