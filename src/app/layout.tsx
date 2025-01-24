import type { Metadata } from 'next'

import { CtaSec } from 'components/CtaSec'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { getTopNav } from 'fetch/nav'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shuffle king',
  description: 'Shuffle king',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navigation = await getTopNav()

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
        <meta name={'theme-color'} content={'#03001b'} />
        <link rel={'icon'} href={'/favicon.ico'} sizes={'any'} />
      </head>
      <body
        className={`antialiased bg-[url('/assets/top-background.png')] bg-[position:center_bottom] bg-[length:100%_auto] bg-no-repeat overflow-x-hidden max-w-screen`}
      >
        <Header nav={navigation} />
        <main>{children}</main>
        <CtaSec />
        <Footer />
      </body>
    </html>
  )
}
