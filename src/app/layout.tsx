import type { Metadata } from 'next'

import { CtaSec } from 'components/CtaSec'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import './globals.css'
import 'swiper/css'

export const metadata: Metadata = {
  title: 'Shuffle king',
  description: 'Shuffle king',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'} className={'overflow-x-hidden max-w-screen'}>
      <head>
        <link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
        <link rel={'preconnect'} href={'https://fonts.gstatic.com'} crossOrigin={'anonymous'} />
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;700&display=swap'
          }
          rel={'stylesheet'}
        />
        <meta name="theme-color" content="#03001b" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`antialiased bg-[url('/assets/top-background.png')] bg-repeat-x bg-[position:center_bottom] overflow-x-hidden max-w-screen`}
      >
        <Header />
        <main>{children}</main>
        <CtaSec />
        <Footer />
      </body>
    </html>
  )
}
