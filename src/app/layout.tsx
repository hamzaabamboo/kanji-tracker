import { Metadata } from 'next'
import { Providers } from './chakra-providers'

export const metadata: Metadata = {
  title: 'Kanji Tracker',
  description: 'Track Kanji You know',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

