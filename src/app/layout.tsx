import type { Metadata } from 'next'

import { CtaSec } from 'components/CtaSec'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { WebVitals } from 'components/WebVitals'
import { getTopNav } from 'fetch/nav'
import { Bai_Jamjuree } from 'next/font/google'

import './globals.scss'

const baiJamjuree = Bai_Jamjuree({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bai-jamjuree',
})

export const metadata: Metadata = {
  title: 'Shuffle king',
  description: 'Shuffle king',
}

// Force all pages to be dynamic - skip static generation at build time
export const dynamic = 'force-dynamic'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let navigation
  try {
    navigation = await getTopNav()
  } catch (error) {
    console.error('Failed to fetch navigation:', error)
    navigation = { topNav: { items: [] } } // Fallback to empty navigation
  }

  return (
    <html lang={'en'} className={`overflow-x-hidden max-w-screen ${baiJamjuree.variable}`}>
      <head>
        <meta name={'theme-color'} content={'#03001b'} />
        <link rel={'icon'} href={'/favicon.ico'} sizes={'any'} />
      </head>
      <body
        className={`${baiJamjuree.className} antialiased bg-[url('/assets/top-background.png')] bg-[position:center_bottom] bg-[length:100%_auto] bg-no-repeat overflow-x-hidden max-w-screen`}
      >
        <WebVitals />
        <Header nav={navigation} />
        <main>{children}</main>
        <CtaSec />
        <Footer />
      </body>
    </html>
  )
}
