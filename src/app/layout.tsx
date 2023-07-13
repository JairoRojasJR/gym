import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gym Sitio Web',
  description: 'El mejor gimnasio de Machala...'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
