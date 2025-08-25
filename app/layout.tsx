import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incorz - Start Your US Business Online',
  description: 'incorz helps you start your US business online with ease. Form your LLC, get your EIN, open a business bank account & stay compliant – all in one simple package.',
  generator: 'Next.js',
  icons: {
    icon: '/images/favicon.ico', // Path relative to /public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
